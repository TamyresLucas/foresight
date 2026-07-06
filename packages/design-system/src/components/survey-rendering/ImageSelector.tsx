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
   * `imageStatement` (default) shows each option's `label` in a caption strip
   * below the image (options without a `label` still fall back to a bare
   * image). `imageOnly` always shows just the image, with no caption strip,
   * regardless of whether `label` is set — `label` is still used as the
   * option's accessible name.
   */
  variant?: 'imageStatement' | 'imageOnly';
  /**
   * `single` keeps at most one image selected (selecting another replaces it);
   * `multiple` lets any number be selected at once. Defaults to `multiple`.
   */
  selectionMode?: 'single' | 'multiple';
  /** Controlled selection. Omit to use internal state. */
  value?: ImageSelectorValue;
  defaultValue?: ImageSelectorValue;
  onChange?: (value: ImageSelectorValue) => void;
  className?: string;
  /**
   * Whether each option card washes on hover. Defaults to true; set to false
   * where a consumer already signals hover elsewhere — e.g. a grid question's
   * row, which highlights on its own.
   */
  hoverEffect?: boolean;
}

const ImageSelector = React.forwardRef<HTMLDivElement, ImageSelectorProps>(
  (
    {
      options,
      variant = 'imageStatement',
      selectionMode = 'multiple',
      value,
      defaultValue,
      onChange,
      className,
      hoverEffect = true,
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
        className={cn('@container flex flex-col w-full font-survey', className)}
        style={{ gap: 'var(--survey-margin, 8px)' }}
      >
        {/* Responsive grid: a single column on the narrowest screens, two on
            small ones, and three once the component is wide (desktop). Driven by
            container queries so it adapts to its own width inside device frames.
            `items-start` overrides Grid's default row-stretch so each card sizes
            to its own image's natural height instead of being stretched to match
            the tallest card in its row (which would leave blank space below
            shorter images whenever options mix aspect ratios). */}
        <div
          className="grid grid-cols-1 @xs:grid-cols-2 @lg:grid-cols-3 items-start"
          style={{ gap: 'var(--survey-margin, 8px)' }}
        >
          {options.map((option) => {
            const selected = current.includes(option.id);
            const showCaption = variant !== 'imageOnly' && !!option.label;
            return (
              <Card
                key={option.id}
                variant={showCaption ? 'imageStatement' : 'image'}
                imageSrc={option.src}
                imageAlt={option.alt ?? ''}
                selected={selected}
                onClick={() => handleClick(option.id)}
                aria-label={option.label}
                hoverEffect={hoverEffect}
                // Card's `image`/`imageStatement` compound variants apply a
                // baseline `min-w-28 min-h-28`, which is a sensible floor for
                // a lone Card but fights the fill-width sizing here: a very
                // wide/short image (e.g. a banner-shaped photo) would get
                // padded out to that minimum height, leaving blank space
                // below the image instead of the card hugging its true ratio.
                className="w-full !min-w-0 !min-h-0"
              >
                {showCaption && (
                  <span className="font-survey-regular text-survey-foreground">
                    {option.label}
                  </span>
                )}
              </Card>
            );
          })}
        </div>
      </div>
    );
  },
);

ImageSelector.displayName = 'ImageSelector';

export { ImageSelector };
