'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

/**
 * A selectable region drawn over the image. Position and size are expressed as
 * percentages (0–100) of the image box so areas scale with the rendered image.
 */
export interface ImageAreaSelectorArea {
  id: string;
  /** Accessible name for the area (also used as the aria-label). */
  label?: string;
  x: number;
  y: number;
  width: number;
  height: number;
}

/** Answer: the ids of the currently selected areas. */
export type ImageAreaSelectorValue = string[];

export interface ImageAreaSelectorProps {
  /** Image URL the areas are drawn over. */
  src: string;
  alt?: string;
  /** Selectable regions over the image. */
  areas: ImageAreaSelectorArea[];
  /**
   * `single` keeps at most one area selected (selecting another replaces it);
   * `multiple` lets any number of areas be selected at once. Defaults to
   * `multiple`.
   */
  selectionMode?: 'single' | 'multiple';
  /** Controlled selection. Omit to use internal state. */
  value?: ImageAreaSelectorValue;
  defaultValue?: ImageAreaSelectorValue;
  onChange?: (value: ImageAreaSelectorValue) => void;
  error?: string;
  disabled?: boolean;
  className?: string;
}

// Unlike ImageAreaEvaluator there are no choices/categories: a selected area is
// simply marked with the brand primary at a low opacity, matching the evaluator's
// overlay treatment.
const SELECTED_OVERLAY =
  'color-mix(in srgb, hsl(var(--survey-primary)) 55%, transparent)';
// Selected areas are outlined with the primary color at full opacity, matching
// the other image question types.
const SELECTED_BORDER = 'hsl(var(--survey-primary))';

const ImageAreaSelector = React.forwardRef<
  HTMLDivElement,
  ImageAreaSelectorProps
>(
  (
    {
      src,
      alt = '',
      areas,
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
      React.useState<ImageAreaSelectorValue>(defaultValue ?? []);
    const current = isControlled ? value : internalValue;

    // A click toggles the area's selection. In single mode, selecting an area
    // replaces any prior selection; clicking the selected area clears it.
    const handleAreaClick = (areaId: string) => {
      if (disabled) return;
      const isSelected = current.includes(areaId);

      let next: ImageAreaSelectorValue;
      if (selectionMode === 'single') {
        next = isSelected ? [] : [areaId];
      } else {
        next = isSelected
          ? current.filter((id) => id !== areaId)
          : [...current, areaId];
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
        {/* Image with overlaid selectable areas. The wrapper is inline-block so
            it shrinks to the image's intrinsic size and the percentage-based
            areas line up with it. */}
        <div className="relative inline-block max-w-full self-start">
          <img
            src={src}
            alt={alt}
            className="block max-w-full select-none"
            draggable={false}
          />
          {areas.map((area) => {
            const selected = current.includes(area.id);
            return (
              <button
                key={area.id}
                type="button"
                disabled={disabled}
                onClick={() => handleAreaClick(area.id)}
                aria-label={area.label}
                aria-pressed={selected}
                className={cn(
                  'absolute transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-survey-border-selected',
                  disabled ? 'cursor-not-allowed' : 'cursor-pointer',
                )}
                style={{
                  left: `${area.x}%`,
                  top: `${area.y}%`,
                  width: `${area.width}%`,
                  height: `${area.height}%`,
                  backgroundColor: selected ? SELECTED_OVERLAY : 'transparent',
                  border: selected ? `2px solid ${SELECTED_BORDER}` : undefined,
                }}
              />
            );
          })}
        </div>

        {error && (
          <p className="text-survey-body font-survey-regular text-survey-destructive">
            {error}
          </p>
        )}
      </div>
    );
  },
);

ImageAreaSelector.displayName = 'ImageAreaSelector';

export { ImageAreaSelector };
