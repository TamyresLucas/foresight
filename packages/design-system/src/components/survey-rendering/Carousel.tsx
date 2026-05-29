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
  navigation?: "counter";
  cardVariant?: CardProps["variant"];
  cardHeight?: number;
  /** Width of the visible sliver of the previous/next cards, in px. */
  peek?: number;
  gap?: number;
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
        className={cn("flex flex-col items-stretch font-survey", className)}
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
            className="flex items-stretch transition-transform duration-300 ease-out"
            style={{
              gap: `${gap}px`,
              transform: `translateX(${offset}px)`,
            }}
          >
            {items.map((item, i) => {
              const isActive = i === current;
              const variant = item.variant ?? cardVariant;
              const needsHeight =
                variant === "image" || variant === "imageStatement";
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
                      height={needsHeight ? cardHeight : undefined}
                      tabIndex={0}
                      className="w-full cursor-default"
                    >
                      {item.label}
                    </Card>
                  ) : (
                    <Card
                      variant={variant}
                      height={needsHeight ? cardHeight : undefined}
                      disabled
                      aria-hidden
                      tabIndex={-1}
                      className={cn(
                        "w-full h-full cursor-default",
                        variant === "image" && "bg-survey-muted-background",
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
                "flex items-center justify-center p-1.5 text-survey-muted-foreground transition-colors",
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
                "flex items-center justify-center p-1.5 text-survey-muted-foreground transition-colors",
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
