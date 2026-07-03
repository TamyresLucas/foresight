'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { frameCornerRadius } from './imageAreaCorners';

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
  className?: string;
}

const SELECTED_OVERLAY =
  'color-mix(in srgb, hsl(var(--survey-primary)) 25%, transparent)';
const SELECTED_BORDER = 'hsl(var(--survey-primary))';
// On hover, draw a ring that straddles the area's boundary so it overlaps the
// edge exactly (rather than an inset border, which shrinks the highlight): a
// white ring just inside the edge plus a dark ring just outside, so the outline
// reads on both light and dark image regions. The wrapper's `overflow-hidden`
// trims the outer ring flush against the image border at the image's own edges.
const HOVER_RING =
  'inset 0 0 0 2px rgba(255,255,255,0.95), 0 0 0 2px rgba(0,0,0,0.55)';
const HOVER_OVERLAY = 'rgba(255,255,255,0.12)';

// Selected areas use the same straddling-ring technique as hover: a white line
// just inside the edge, a colored line just outside. The outer line hugs the
// image frame exactly the way hover's does — drawn on top of the frame border
// and clipped flush by the wrapper's `overflow-hidden` — rather than sitting
// inset a couple pixels in, which a real `border` property would do. The only
// difference from hover: the outer line keeps the brand primary color instead
// of turning neutral, and the fill is a low-opacity tint of that same color
// instead of a plain white wash.
const SELECTED_RING = `inset 0 0 0 2px rgba(255,255,255,0.95), 0 0 0 2px ${SELECTED_BORDER}`;

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
      className,
    },
    ref,
  ) => {
    const isControlled = value !== undefined;
    const [internalValue, setInternalValue] =
      React.useState<ImageAreaSelectorValue>(defaultValue ?? []);
    const current = isControlled ? value : internalValue;
    const [hoveredAreaId, setHoveredAreaId] = React.useState<string | null>(null);
    // Keyboard focus is surfaced with the same treatment as hover. Tracked in
    // state (gated on :focus-visible so it stays keyboard-only) rather than via a
    // CSS ring, because the hover ring/fill are inline styles that would override
    // a focus-visible class.
    const [focusedAreaId, setFocusedAreaId] = React.useState<string | null>(null);

    // A click toggles the area's selection. In single mode, selecting an area
    // replaces any prior selection; clicking the selected area clears it.
    const handleAreaClick = (areaId: string) => {
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
        <div className="relative inline-block max-w-full self-start border border-survey-border-muted rounded-survey-sm">
          {/* Clip only the image to the frame's rounded corners on an inner box,
              so the wrapper itself doesn't clip the areas' hover ring. The dark
              outer ring then paints on top of the frame border wherever an area
              meets the image edge, instead of being trimmed at the inner edge. */}
          <div className="overflow-hidden rounded-[inherit]">
            <img
              src={src}
              alt={alt}
              className="block max-w-full select-none"
              draggable={false}
            />
          </div>
          {areas.map((area) => {
            const selected = current.includes(area.id);
            const hovered = hoveredAreaId === area.id;
            const focused = focusedAreaId === area.id;
            // Keyboard focus mirrors hover: the same boundary ring + fill mark
            // which area is active.
            const active = hovered || focused;
            return (
              <button
                key={area.id}
                type="button"
                onClick={() => handleAreaClick(area.id)}
                onMouseEnter={() => setHoveredAreaId(area.id)}
                onMouseLeave={() => setHoveredAreaId(null)}
                onFocus={(e) => {
                  if (e.currentTarget.matches(':focus-visible'))
                    setFocusedAreaId(area.id);
                }}
                onBlur={() => setFocusedAreaId(null)}
                aria-label={area.label}
                aria-pressed={selected}
                className="absolute transition-colors focus-visible:outline-none cursor-pointer"
                style={{
                  left: `${area.x}%`,
                  top: `${area.y}%`,
                  width: `${area.width}%`,
                  height: `${area.height}%`,
                  ...frameCornerRadius(area),
                  backgroundColor: active
                    ? HOVER_OVERLAY
                    : selected
                    ? SELECTED_OVERLAY
                    : 'transparent',
                  border: 'none',
                  boxShadow: active
                    ? HOVER_RING
                    : selected
                    ? SELECTED_RING
                    : undefined,
                }}
              />
            );
          })}
        </div>
      </div>
    );
  },
);

ImageAreaSelector.displayName = 'ImageAreaSelector';

export { ImageAreaSelector };
