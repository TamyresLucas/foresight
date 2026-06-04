'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

export interface StarRatingItem {
  value: string;
  label: string;
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

    return (
      <div
        ref={ref}
        className={cn('flex flex-col w-full', className)}
        style={{ gap: 'var(--survey-margin)' }}
      >
        {items.map((item) => {
          const selected = currentValue[item.value] ?? 0;
          const preview = hovered[item.value] ?? selected;

          return (
            <div key={item.value} className="flex items-center gap-3">
              <span
                className={cn(
                  'text-survey-foreground text-survey-body font-survey-regular font-survey leading-none',
                  disabled && 'text-survey-muted-foreground opacity-50',
                )}
              >
                {item.label}
              </span>
              <div
                role="radiogroup"
                aria-label={item.label}
                aria-invalid={!!error || undefined}
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
                        error && !filled && 'text-survey-destructive',
                        disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer',
                      )}
                    >
                      <Star filled={filled} />
                    </button>
                  );
                })}
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
