'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

/** A selectable choice the respondent can assign to an area. */
export interface ImageAreaEvaluatorChoice {
  id: string;
  label: string;
  /**
   * Any CSS color used for the area overlay and the legend swatch. When omitted
   * the choice falls back to a rotating, token-based palette so authors don't
   * have to pick colors themselves.
   */
  color?: string;
}

/**
 * A clickable region drawn over the image. Position and size are expressed as
 * percentages (0–100) of the image box so areas scale with the rendered image.
 */
export interface ImageAreaEvaluatorArea {
  id: string;
  /** Accessible name for the area (also used as the aria-label). */
  label?: string;
  x: number;
  y: number;
  width: number;
  height: number;
}

/** Answer: maps an area id to the choice id assigned to it. Areas absent from
 *  the map are unassigned. */
export type ImageAreaEvaluatorValue = Record<string, string>;

export interface ImageAreaEvaluatorProps {
  /** Image URL the areas are drawn over. */
  src: string;
  alt?: string;
  /** Clickable regions over the image. */
  areas: ImageAreaEvaluatorArea[];
  /** Choices the respondent cycles through per area. */
  choices: ImageAreaEvaluatorChoice[];
  /** Controlled answer. Omit to use internal state. */
  value?: ImageAreaEvaluatorValue;
  defaultValue?: ImageAreaEvaluatorValue;
  onChange?: (value: ImageAreaEvaluatorValue) => void;
  /** Word shown before the legend swatches. */
  legendLabel?: string;
  /** Hide the legend row entirely. */
  showLegend?: boolean;
  error?: string;
  disabled?: boolean;
  className?: string;
}

interface PaletteEntry {
  /** Low-opacity fill + legend swatch color. */
  fill: string;
  /**
   * Full-opacity outline color. Defaults to `fill` when omitted. A slot whose
   * fill and outline differ mirrors the matching TextHighlighter category — the
   * yellow category pairs a yellow fill with a terracotta underline.
   */
  line?: string;
}

// Survey-token default palette, used in order for choices that don't set their
// own `color`. With two choices this yields the brand primary and secondary; any
// further choices reuse the same category colors as TextHighlighter (the brand
// secondary lives in `--survey-border-accent`) so the two components stay
// visually consistent inside the survey scope.
const DEFAULT_PALETTE: PaletteEntry[] = [
  { fill: 'hsl(var(--survey-primary))' },
  { fill: 'hsl(var(--survey-border-accent))' },
  { fill: 'hsl(var(--survey-destructive))' },
  // Yellow slot: outlined with the same terracotta line color as the
  // TextHighlighter yellow category (`--category-4-line`).
  { fill: 'hsl(var(--survey-warning))', line: 'hsl(var(--category-4-line))' },
  { fill: 'hsl(var(--survey-info))' },
  { fill: 'hsl(var(--survey-success))' },
];

const paletteForChoice = (
  choice: ImageAreaEvaluatorChoice,
  index: number,
): PaletteEntry =>
  choice.color
    ? { fill: choice.color }
    : DEFAULT_PALETTE[index % DEFAULT_PALETTE.length];

const ImageAreaEvaluator = React.forwardRef<
  HTMLDivElement,
  ImageAreaEvaluatorProps
>(
  (
    {
      src,
      alt = '',
      areas,
      choices,
      value,
      defaultValue,
      onChange,
      legendLabel = 'Legend',
      showLegend = true,
      error,
      disabled = false,
      className,
    },
    ref,
  ) => {
    const isControlled = value !== undefined;
    const [internalValue, setInternalValue] =
      React.useState<ImageAreaEvaluatorValue>(defaultValue ?? {});
    const current = isControlled ? value : internalValue;
    const [hoveredAreaId, setHoveredAreaId] = React.useState<string | null>(null);

    // White border + dark shadow ring so the hover outline is visible on both
    // light and dark image regions without relying on a brand color.
    const HOVER_BORDER = 'rgba(255,255,255,0.9)';
    const HOVER_SHADOW = '0 0 0 1px rgba(0,0,0,0.45)';
    const HOVER_OVERLAY = 'rgba(255,255,255,0.12)';

    const paletteById = React.useMemo(() => {
      const map = new Map<string, PaletteEntry>();
      choices.forEach((c, i) => map.set(c.id, paletteForChoice(c, i)));
      return map;
    }, [choices]);

    // A single click on an area advances it to the next choice. The respondent
    // assigns a value by clicking a "certain number" of times: the last choice
    // cycles back to unassigned so a mistaken click can be undone in place.
    const handleAreaClick = (areaId: string) => {
      if (disabled || choices.length === 0) return;
      const currentChoice = current[areaId];
      const currentIndex = choices.findIndex((c) => c.id === currentChoice);
      const nextIndex = currentIndex + 1;

      const next: ImageAreaEvaluatorValue = { ...current };
      if (nextIndex >= choices.length) {
        delete next[areaId];
      } else {
        next[areaId] = choices[nextIndex].id;
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
        {/* Image with overlaid clickable areas. The wrapper is inline-block so
            it shrinks to the image's intrinsic size and the percentage-based
            areas line up with it. */}
        <div className="relative inline-block max-w-full self-start border border-survey-border-muted rounded-survey-sm overflow-hidden">
          <img
            src={src}
            alt={alt}
            className="block max-w-full select-none"
            draggable={false}
          />
          {areas.map((area) => {
            const assigned = current[area.id];
            const entry = assigned ? paletteById.get(assigned) : undefined;
            const choice = choices.find((c) => c.id === assigned);
            const hovered = hoveredAreaId === area.id;
            return (
              <button
                key={area.id}
                type="button"
                disabled={disabled}
                onClick={() => handleAreaClick(area.id)}
                onMouseEnter={() => !disabled && setHoveredAreaId(area.id)}
                onMouseLeave={() => setHoveredAreaId(null)}
                aria-label={
                  area.label
                    ? choice
                      ? `${area.label}: ${choice.label}`
                      : area.label
                    : undefined
                }
                aria-pressed={Boolean(assigned)}
                className={cn(
                  'absolute transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-survey-border-selected',
                  disabled ? 'cursor-not-allowed' : 'cursor-pointer',
                )}
                style={{
                  left: `${area.x}%`,
                  top: `${area.y}%`,
                  width: `${area.width}%`,
                  height: `${area.height}%`,
                  backgroundColor: hovered
                    ? HOVER_OVERLAY
                    : entry
                    ? `color-mix(in srgb, ${entry.fill} 55%, transparent)`
                    : 'transparent',
                  border: hovered
                    ? `2px solid ${HOVER_BORDER}`
                    : entry
                    ? `2px solid ${entry.line ?? entry.fill}`
                    : 'none',
                  boxShadow: hovered ? HOVER_SHADOW : undefined,
                }}
              />
            );
          })}
        </div>

        {showLegend && (
          // Plain legend: no background, no border. The "Legend" word and each
          // choice label use the survey body text token.
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 px-3 py-2">
            <span className="text-survey-body font-survey-regular text-survey-foreground">
              {legendLabel}
            </span>
            {choices.map((choice, index) => (
              <span key={choice.id} className="flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className="inline-block h-4 w-4 shrink-0 rounded-[2px]"
                  style={{ backgroundColor: paletteForChoice(choice, index).fill }}
                />
                <span className="text-survey-body font-survey-regular text-survey-foreground">
                  {choice.label}
                </span>
              </span>
            ))}
          </div>
        )}

        {error && (
          <p className="text-survey-body font-survey-regular text-survey-destructive">
            {error}
          </p>
        )}
      </div>
    );
  },
);

ImageAreaEvaluator.displayName = 'ImageAreaEvaluator';

export { ImageAreaEvaluator };
