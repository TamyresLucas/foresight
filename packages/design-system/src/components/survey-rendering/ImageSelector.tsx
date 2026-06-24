'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { Card } from './Card';

/** A selectable image option. */
export interface ImageSelectorOption {
  id: string;
  /** Image URL. */
  src: string;
  alt?: string;
  /** Caption shown in the card's statement strip. */
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
        className={cn('flex flex-col items-start w-full font-survey', className)}
        style={{ gap: 'var(--survey-margin, 8px)' }}
      >
        {options.map((option) => {
          const selected = current.includes(option.id);
          return (
            <Card
              key={option.id}
              variant={option.label ? 'imageStatement' : 'image'}
              imageSrc={option.src}
              imageAlt={option.alt ?? ''}
              selected={selected}
              disabled={disabled}
              onClick={() => handleClick(option.id)}
              aria-label={option.label}
              className={cn(disabled && 'cursor-not-allowed')}
            >
              {option.label && (
                <span
                  className={cn(
                    selected
                      ? 'font-survey-semibold text-survey-primary'
                      : 'font-survey-regular text-survey-foreground',
                  )}
                >
                  {option.label}
                </span>
              )}
            </Card>
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
