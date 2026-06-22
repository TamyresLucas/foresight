'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

/** A selectable image option. */
export interface ImageSelectorOption {
  id: string;
  /** Image URL. */
  src: string;
  alt?: string;
  /** Caption shown below the image. Highlighted when the option is selected. */
  label?: string;
}

/** Answer: the ids of the currently selected images. */
export type ImageSelectorValue = string[];

export interface ImageSelectorProps {
  /** Selectable image options. */
  options: ImageSelectorOption[];
  /**
   * `single` keeps at most one image selected (selecting another replaces it);
   * `multiple` lets any number be selected at once. Defaults to `multiple`.
   */
  selectionMode?: 'single' | 'multiple';
  /** Controlled selection. Omit to use internal state. */
  value?: ImageSelectorValue;
  defaultValue?: ImageSelectorValue;
  onChange?: (value: ImageSelectorValue) => void;
  error?: string;
  disabled?: boolean;
  className?: string;
}

// A selected image is tinted with the brand primary at low opacity and outlined
// with the same color at full opacity, matching the other image question types.
const SELECTED_FILL =
  'color-mix(in srgb, hsl(var(--survey-primary)) 55%, transparent)';
const SELECTED_BORDER = 'hsl(var(--survey-primary))';

const ImageSelector = React.forwardRef<HTMLDivElement, ImageSelectorProps>(
  (
    {
      options,
      selectionMode = 'multiple',
      value,
      defaultValue,
      onChange,
      error,
      disabled = false,
      className,
    },
    ref,
  ) => {
    const isControlled = value !== undefined;
    const [internalValue, setInternalValue] =
      React.useState<ImageSelectorValue>(defaultValue ?? []);
    const current = isControlled ? value : internalValue;

    // A click toggles the image's selection. In single mode, selecting an image
    // replaces any prior selection; clicking the selected image clears it.
    const handleClick = (id: string) => {
      if (disabled) return;
      const isSelected = current.includes(id);

      let next: ImageSelectorValue;
      if (selectionMode === 'single') {
        next = isSelected ? [] : [id];
      } else {
        next = isSelected
          ? current.filter((x) => x !== id)
          : [...current, id];
      }

      if (!isControlled) setInternalValue(next);
      onChange?.(next);
    };

    return (
      <div
        ref={ref}
        className={cn('flex flex-col w-full font-survey', className)}
        style={{ gap: 'var(--survey-margin, 8px)' }}
      >
        {options.map((option) => {
          const selected = current.includes(option.id);
          return (
            <button
              key={option.id}
              type="button"
              disabled={disabled}
              onClick={() => handleClick(option.id)}
              aria-pressed={selected}
              aria-label={option.label}
              className={cn(
                'flex flex-col items-start gap-2 self-start focus-visible:outline-none',
                disabled ? 'cursor-not-allowed' : 'cursor-pointer',
              )}
            >
              {/* Image with the selection tint + border overlaid. The overlay is
                  borderless when unselected so the image is unobstructed. */}
              <span className="relative inline-block max-w-full">
                <img
                  src={option.src}
                  alt={option.alt ?? ''}
                  className="block max-w-full select-none"
                  draggable={false}
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 transition-colors"
                  style={{
                    backgroundColor: selected ? SELECTED_FILL : 'transparent',
                    border: selected ? `2px solid ${SELECTED_BORDER}` : undefined,
                  }}
                />
              </span>
              {option.label && (
                <span
                  className={cn(
                    'text-survey-body',
                    selected
                      ? 'font-survey-semibold text-survey-primary'
                      : 'font-survey-regular text-survey-foreground',
                  )}
                >
                  {option.label}
                </span>
              )}
            </button>
          );
        })}

        {error && (
          <p className="text-survey-body font-survey-regular text-survey-destructive">
            {error}
          </p>
        )}
      </div>
    );
  },
);

ImageSelector.displayName = 'ImageSelector';

export { ImageSelector };
