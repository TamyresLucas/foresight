"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, type CardProps } from "./Card";

export interface CarouselItem {
  id: string;
  label?: React.ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  variant?: CardProps["variant"];
}

export interface CarouselProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  items: CarouselItem[];
  index?: number;
  defaultIndex?: number;
  onIndexChange?: (index: number) => void;
  navigation?: "counter" | "bullets";
  cardVariant?: CardProps["variant"];
  cardHeight?: number;
  /** Width of the visible sliver of the previous/next cards, in px. */
  peek?: number;
  gap?: number;
  /**
   * Minimum slide image height as a fraction of the slide width. The image
   * always fills the width and keeps its ratio (never cropped); shorter/wider
   * images are floored to this height and centered with background bands top &
   * bottom. Taller images grow the slide freely. Default 2/3 (3:2).
   */
  minHeightRatio?: number;
  previousLabel?: string;
  nextLabel?: string;
}

const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
  (
    {
      items,
      index,
      defaultIndex = 0,
      onIndexChange,
      navigation = "counter",
      cardVariant = "imageStatement",
      cardHeight = 360,
      peek = 24,
      gap = 16,
      minHeightRatio = 2 / 3,
      previousLabel = "Previous",
      nextLabel = "Next",
      className,
      ...props
    },
    ref,
  ) => {
    const isControlled = index !== undefined;
    const [internal, setInternal] = React.useState(() =>
      clamp(defaultIndex, 0, Math.max(0, items.length - 1)),
    );
    const current = clamp(
      isControlled ? (index as number) : internal,
      0,
      Math.max(0, items.length - 1),
    );

    const goTo = React.useCallback(
      (next: number) => {
        const target = clamp(next, 0, Math.max(0, items.length - 1));
        if (!isControlled) setInternal(target);
        onIndexChange?.(target);
      },
      [isControlled, onIndexChange, items.length],
    );

    const viewportRef = React.useRef<HTMLDivElement | null>(null);
    const [viewportWidth, setViewportWidth] = React.useState(0);

    React.useEffect(() => {
      const node = viewportRef.current;
      if (!node) return;
      const update = () => setViewportWidth(node.clientWidth);
      update();
      const observer = new ResizeObserver(update);
      observer.observe(node);
      return () => observer.disconnect();
    }, []);

    const atStart = current <= 0;
    const atEnd = current >= items.length - 1;

    // Each card fills the viewport minus a symmetric sliver (peek + gap) on
    // both sides, so the previous/next cards always peek by `peek` px.
    const cardWidth = Math.max(0, viewportWidth - 2 * (peek + gap));

    // Center the active card within the viewport, leaving symmetric peeks.
    const offset =
      viewportWidth / 2 - cardWidth / 2 - current * (cardWidth + gap);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goTo(current - 1);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        goTo(current + 1);
      }
    };

    return (
      <div
        ref={ref}
        className={cn("flex w-full flex-col items-stretch font-survey", className)}
        {...props}
      >
        <div
          ref={viewportRef}
          className="overflow-hidden w-full"
          role="group"
          aria-roledescription="carousel"
          tabIndex={0}
          onKeyDown={handleKeyDown}
        >
          <div
            className="flex items-center transition-transform duration-300 ease-out"
            style={{
              gap: `${gap}px`,
              transform: `translateX(${offset}px)`,
            }}
          >
            {items.map((item, i) => {
              const isActive = i === current;
              const variant = item.variant ?? cardVariant;
              const isImageVariant = variant === "image";
              const isImageStatement = variant === "imageStatement";
              // Pure image variant keeps a fixed height. imageStatement fills
              // the width and keeps its ratio (never cropped); a minimum-height
              // floor (fraction of the width) keeps short/wide images from
              // becoming too short, while taller images grow the slide. Each
              // slide keeps its own height and the row centers them, so the
              // carousel height equals the tallest visible slide.
              const fixedHeight = isImageVariant ? cardHeight : undefined;
              const minImageHeight =
                isImageStatement && cardWidth > 0
                  ? minHeightRatio * cardWidth
                  : undefined;
              return (
                <div
                  key={item.id}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${i + 1} of ${items.length}`}
                  aria-hidden={!isActive}
                  className="shrink-0"
                  style={{ width: `${cardWidth}px` }}
                >
                  {isActive ? (
                    <Card
                      variant={variant}
                      imageSrc={item.imageSrc}
                      imageAlt={item.imageAlt}
                      height={fixedHeight}
                      minImageHeight={minImageHeight}
                      tabIndex={0}
                      className="w-full cursor-default shadow-lg"
                    >
                      {item.label}
                    </Card>
                  ) : (
                    <Card
                      variant={variant}
                      // Placeholder reserves each slide's true fill-width height
                      // via a hidden image (`blank`), so the peeks stay aligned
                      // while the content stays concealed.
                      imageSrc={isImageVariant ? undefined : item.imageSrc}
                      imageAlt={item.imageAlt}
                      height={fixedHeight}
                      minImageHeight={minImageHeight}
                      blank
                      disabled
                      aria-hidden
                      tabIndex={-1}
                      className={cn(
                        // Out-of-focus peek slides use the muted border token,
                        // matching the outer border of multiple-choice options,
                        // and drop the default shadow so the focused slide's
                        // drop shadow reads clearly.
                        "w-full cursor-default border-survey-border-muted shadow-none",
                        isImageVariant && "bg-survey-muted-background",
                      )}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {navigation === "counter" && (
          <div className="flex items-center justify-between gap-4 self-center w-48 py-2 mt-4">
            <button
              type="button"
              onClick={() => goTo(current - 1)}
              disabled={atStart}
              aria-label={previousLabel}
              style={{ borderRadius: "var(--component-button-radius)" }}
              className={cn(
                "flex items-center justify-center p-1.5 text-survey-foreground transition-colors",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-survey-border-interactive",
                atStart
                  ? "opacity-0 pointer-events-none"
                  : "hover:bg-survey-muted-background",
              )}
            >
              <ChevronLeft className="size-4" />
            </button>

            <span
              aria-live="polite"
              className="text-survey-body text-survey-muted-foreground whitespace-nowrap tabular-nums"
            >
              {items.length === 0 ? "0/0" : `${current + 1}/${items.length}`}
            </span>

            <button
              type="button"
              onClick={() => goTo(current + 1)}
              disabled={atEnd}
              aria-label={nextLabel}
              style={{ borderRadius: "var(--component-button-radius)" }}
              className={cn(
                "flex items-center justify-center p-1.5 text-survey-foreground transition-colors",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-survey-border-interactive",
                atEnd ? "opacity-0 pointer-events-none" : "hover:bg-survey-muted-background",
              )}
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        )}

        {navigation === "bullets" && (
          <div className="flex items-center justify-center gap-4 self-center py-2 mt-4">
            <button
              type="button"
              onClick={() => goTo(current - 1)}
              disabled={atStart}
              aria-label={previousLabel}
              style={{ borderRadius: "var(--component-button-radius)" }}
              className={cn(
                "flex items-center justify-center p-1.5 text-survey-foreground transition-colors",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-survey-border-interactive",
                atStart
                  ? "opacity-0 pointer-events-none"
                  : "hover:bg-survey-muted-background",
              )}
            >
              <ChevronLeft className="size-4" />
            </button>

            <div className="flex gap-2" role="tablist" aria-label="Carousel slides">
              {items.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={i === current}
                  aria-label={`Slide ${i + 1}`}
                  onClick={() => goTo(i)}
                  className={cn(
                    "shrink-0 size-4 rounded-full transition-colors",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-survey-border-interactive focus-visible:ring-offset-2 focus-visible:ring-offset-survey-background",
                    i === current
                      ? "bg-survey-primary"
                      : "border border-survey-border-interactive hover:bg-survey-muted-background",
                  )}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => goTo(current + 1)}
              disabled={atEnd}
              aria-label={nextLabel}
              style={{ borderRadius: "var(--component-button-radius)" }}
              className={cn(
                "flex items-center justify-center p-1.5 text-survey-foreground transition-colors",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-survey-border-interactive",
                atEnd ? "opacity-0 pointer-events-none" : "hover:bg-survey-muted-background",
              )}
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        )}
      </div>
    );
  },
);
Carousel.displayName = "Carousel";

function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

export { Carousel };
