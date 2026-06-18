'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { X } from '../ui/icons';

export interface StarRatingItem {
  value: string;
  label: string;
  /**
   * When true, the item is optional: once a score is selected a reset (X)
   * button appears so the respondent can clear it back to empty. Mandatory
   * items (the default) never show the reset button.
   */
  optional?: boolean;
}

export interface StarRatingValue {
  [itemValue: string]: number;
}

export interface StarRatingProps {
  items: StarRatingItem[];
  max?: number;
  value?: StarRatingValue;
  defaultValue?: StarRatingValue;
  onChange?: (value: StarRatingValue) => void;
  error?: string;
  disabled?: boolean;
  className?: string;
}

const Star = ({ filled, className }: { filled: boolean; className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    width="28"
    height="28"
    fill={filled ? 'currentColor' : 'none'}
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M12 2.5l2.9 5.88 6.49.94-4.7 4.58 1.11 6.46L12 17.31l-5.8 3.05 1.11-6.46-4.7-4.58 6.49-.94L12 2.5z" />
  </svg>
);

const StarRating = React.forwardRef<HTMLDivElement, StarRatingProps>(
  ({ items, max = 5, value, defaultValue, onChange, error, disabled = false, className }, ref) => {
    const [internalValue, setInternalValue] = React.useState<StarRatingValue>(
      defaultValue ?? {},
    );
    const currentValue = value ?? internalValue;

    const [hovered, setHovered] = React.useState<StarRatingValue>({});

    const handleSelect = (itemValue: string, rating: number) => {
      if (disabled) return;
      const next = { ...currentValue, [itemValue]: rating };
      if (value === undefined) {
        setInternalValue(next);
      }
      onChange?.(next);
    };

    const handleClear = (itemValue: string) => {
      if (disabled) return;
      const { [itemValue]: _omit, ...rest } = currentValue;
      if (value === undefined) {
        setInternalValue(rest);
      }
      onChange?.(rest);
    };

    const setHover = (itemValue: string, rating: number) => {
      if (disabled) return;
      setHovered((prev) => ({ ...prev, [itemValue]: rating }));
    };

    const clearHover = (itemValue: string) => {
      setHovered((prev) => {
        const { [itemValue]: _omit, ...rest } = prev;
        return rest;
      });
    };

    // Give every label the width of the longest one so the stars line up across
    // rows. We measure each label's natural (single-line) width and apply the
    // max as a fixed width to all of them. Because the labels share one width,
    // the flex rows wrap as a group: when the label + stars no longer fit, the
    // stars drop below the label (row-gap supplies the spacing) on every row at
    // once, keeping them aligned.
    const labelRefs = React.useRef<Record<string, HTMLSpanElement | null>>({});
    const [labelColWidth, setLabelColWidth] = React.useState<number>();
    const labelsKey = items
      .map((it) => `${it.value}:${it.label}:${it.optional ? '?' : ''}`)
      .join('|');

    React.useLayoutEffect(() => {
      const measure = () => {
        let maxWidth = 0;
        for (const it of items) {
          const el = labelRefs.current[it.value];
          if (!el) continue;
          // Measure the intrinsic width regardless of any width we applied.
          const applied = el.style.width;
          el.style.width = 'auto';
          maxWidth = Math.max(maxWidth, el.getBoundingClientRect().width);
          el.style.width = applied;
        }
        if (maxWidth > 0) setLabelColWidth(Math.ceil(maxWidth));
      };
      measure();
      // Web fonts can change label metrics after first paint — re-measure once
      // they settle so the column width stays correct.
      let cancelled = false;
      const fonts = (document as Document & { fonts?: FontFaceSet }).fonts;
      fonts?.ready.then(() => {
        if (!cancelled) measure();
      });
      return () => {
        cancelled = true;
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [labelsKey]);

    return (
      <div
        ref={ref}
        className={cn('flex flex-col w-full', className)}
        style={{ gap: 'var(--survey-margin)' }}
      >
        {items.map((item) => {
          const selected = currentValue[item.value] ?? 0;
          const preview = hovered[item.value] ?? selected;
          const isMandatory = !item.optional;
          // Per-item required validation: when the parent signals an error
          // (e.g. the respondent tried to advance to the next page), only
          // unanswered mandatory items show the error state — answered items
          // and optional items are never flagged.
          const itemHasError = !!error && isMandatory && selected === 0;

          return (
            <div
              key={item.value}
              className="flex flex-wrap items-center"
              style={{ columnGap: '0.75rem', rowGap: 'var(--survey-margin)' }}
            >
              <span
                ref={(el) => {
                  labelRefs.current[item.value] = el;
                }}
                className={cn(
                  'shrink-0 whitespace-nowrap text-survey-foreground text-survey-body font-survey-regular font-survey leading-none',
                  disabled && 'text-survey-muted-foreground opacity-50',
                )}
                style={labelColWidth ? { width: `${labelColWidth}px` } : undefined}
              >
                {item.label}
                {isMandatory && (
                  <span aria-hidden="true" className="text-survey-destructive">
                    {' '}
                    *
                  </span>
                )}
              </span>
              {/* Stars + optional reset, kept together so they wrap below the
                  label as one unit when the row runs out of room. */}
              <div className="flex items-center gap-3">
              <div
                role="radiogroup"
                aria-label={item.label}
                aria-invalid={itemHasError || undefined}
                aria-required={isMandatory || undefined}
                className="flex items-center gap-2"
                onMouseLeave={() => clearHover(item.value)}
              >
                {Array.from({ length: max }, (_, i) => {
                  const rating = i + 1;
                  const filled = rating <= preview;
                  return (
                    <button
                      key={rating}
                      type="button"
                      role="radio"
                      aria-checked={selected === rating}
                      aria-label={`${item.label}: ${rating} of ${max} stars`}
                      disabled={disabled}
                      onClick={() => handleSelect(item.value, rating)}
                      onMouseEnter={() => setHover(item.value, rating)}
                      onFocus={() => setHover(item.value, rating)}
                      onBlur={() => clearHover(item.value)}
                      className={cn(
                        'transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-survey-border-selected rounded-sm',
                        filled
                          ? 'text-survey-border-selected'
                          : 'text-survey-border-interactive',
                        disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer',
                      )}
                    >
                      <Star filled={filled} />
                    </button>
                  );
                })}
              </div>
              {/* Optional items expose a reset control once a score is picked so
                  the respondent can clear it back to empty. Mandatory items omit
                  it (their answer cannot be removed). */}
              {item.optional && selected > 0 && !disabled && (
                <button
                  type="button"
                  onClick={() => handleClear(item.value)}
                  aria-label={`Clear ${item.label} rating`}
                  className={cn(
                    'flex h-7 w-7 items-center justify-center rounded-survey-md text-survey-muted-foreground transition-colors',
                    'hover:bg-survey-muted-background hover:text-survey-foreground',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-survey-border-selected',
                  )}
                >
                  <X className="h-4 w-4" />
                </button>
              )}
              </div>
            </div>
          );
        })}
      </div>
    );
  },
);

StarRating.displayName = 'StarRating';

export { StarRating };
