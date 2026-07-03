"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, type CardProps } from "./Card";
import { Bullet } from "./Bullet";

// Max full-size bullets shown at once; extra slides collapse into a "more" dot.
const MAX_VISIBLE_BULLETS = 6;

export interface CarouselItem {
  id: string;
  label?: React.ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  variant?: CardProps["variant"];
  /** Marks the slide as answered, showing a checkmark on its bullet. */
  answered?: boolean;
  /** Declared natural image width — skips onLoad measurement, prevents layout shift. */
  imageWidth?: number;
  /** Declared natural image height — skips onLoad measurement, prevents layout shift. */
  imageHeight?: number;
}

/**
 * ## Slide sizing rules
 *
 * Slides are sized by **height first, width second** — the opposite of a
 * typical fluid layout. This ensures images always render at their true aspect
 * ratio with no cropping, distortion, or letterboxing.
 *
 * 1. **Height band** — every slide height is clamped to
 *    [`minSlideHeight`, `maxSlideHeight`] (defaults 220–400 px).
 * 2. **Width follows height** — given the clamped height and the image's
 *    natural aspect ratio, the card width is computed as `width = height × ratio`.
 *    The card narrows or widens to exactly hug the image.
 * 3. **Viewport ceiling** — `cardWidth` (viewport minus peek/gap on both sides)
 *    is a hard upper bound on width. If an extremely wide image would exceed it
 *    at `minSlideHeight`, the width is capped and the height dips slightly below
 *    the minimum — still no crop or letterbox.
 * 4. **Statement strip** — for `imageStatement` cards the strip height is
 *    measured at runtime and subtracted from the band before the image box is
 *    computed, so the *total* card height (image + strip) stays within the band.
 *
 * Override `minSlideHeight`/`maxSlideHeight` per instance when you need a
 * tighter or looser band — all other sizing behaviour follows automatically.
 */
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
   * Minimum total slide height in px. The card width is derived from this and
   * the image's natural aspect ratio so images keep their true proportions —
   * no crop, no distortion, no letterbox. Defaults to 220.
   */
  minSlideHeight?: number;
  /**
   * Maximum total slide height in px. Images taller than this are scaled down;
   * the card narrows to hug the image. Defaults to 400.
   */
  maxSlideHeight?: number;
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
      cardHeight: _cardHeight = 360,
      peek = 24,
      gap = 16,
      minSlideHeight = 220,
      maxSlideHeight = 400,
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
    const trackRef = React.useRef<HTMLDivElement | null>(null);
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

    // On narrow containers the default peek + gap together can eat enough of
    // the slot that a portrait image's fill-height falls *within* the height
    // band — so the card fills the slot instead of narrowing to hug the image.
    // We scale peek and gap down proportionally when the container is narrow
    // so the effective card slot is always wide enough for the height cap to
    // engage, keeping the hugging behaviour consistent at any container width.
    const isNarrow = viewportWidth > 0 && viewportWidth < 480;
    const effectivePeek = isNarrow ? Math.min(peek, 12) : peek;
    const effectiveGap = isNarrow ? Math.min(gap, 8) : gap;

    // The widest a card may be: the viewport minus a symmetric sliver
    // (effectivePeek + effectiveGap) on both sides, so a full-width card still
    // leaves a peek of its neighbours. Height-capped (hugged) cards are
    // narrower and peek more.
    const cardWidth = Math.max(0, viewportWidth - 2 * (effectivePeek + effectiveGap));

    const minH = minSlideHeight;
    const maxH = Math.max(minH, maxSlideHeight);

    // Self-sizing is active for image variants once the viewport is measured.
    const selfSizingActive = cardWidth > 0;

    // Cards now hug their images, so slide widths vary. Center the active slide
    // by measuring its actual position (offsetLeft is transform-independent)
    // rather than assuming uniform slot widths.
    const [offset, setOffset] = React.useState(0);

    const recenter = React.useCallback(() => {
      const track = trackRef.current;
      if (!track || viewportWidth === 0) return;
      const active = track.children[current] as HTMLElement | undefined;
      if (!active) return;
      setOffset(viewportWidth / 2 - active.offsetLeft - active.offsetWidth / 2);
    }, [current, viewportWidth]);

    // Recenter on navigation / resize, and whenever a slide resizes (e.g. an
    // image finishes loading and the card hugs to its measured ratio).
    React.useLayoutEffect(() => {
      const track = trackRef.current;
      if (!track) return;
      recenter();
      const observer = new ResizeObserver(() => recenter());
      for (const child of Array.from(track.children)) observer.observe(child);
      return () => observer.disconnect();
    }, [recenter, items.length]);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goTo(current - 1);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        goTo(current + 1);
      }
    };

    // Windowed bullet navigation: when there are more slides than the bullets
    // can show at once, cap the full-size bullets to a sliding window centered
    // on the active slide and show a smaller "more" dot on each side that still
    // has hidden slides — so it's clear there are slides beyond what's visible.
    const bulletsOverflow = items.length > MAX_VISIBLE_BULLETS;
    const bulletWindowStart = bulletsOverflow
      ? clamp(
          current - Math.floor(MAX_VISIBLE_BULLETS / 2),
          0,
          items.length - MAX_VISIBLE_BULLETS,
        )
      : 0;
    const bulletWindowEnd = bulletsOverflow
      ? bulletWindowStart + MAX_VISIBLE_BULLETS
      : items.length;
    const hasBulletsBefore = bulletWindowStart > 0;
    const hasBulletsAfter = bulletWindowEnd < items.length;
    const moreDotClass = cn(
      "inline-flex shrink-0 size-2 rounded-full bg-survey-border-interactive transition-colors",
      "hover:bg-survey-muted-foreground",
      "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
      "focus-visible:ring-offset-survey-background focus-visible:ring-survey-border-interactive",
    );

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
            ref={trackRef}
            className="relative flex items-center transition-transform duration-500 ease-in-out py-6"
            style={{
              gap: `${effectiveGap}px`,
              transform: `translateX(${offset}px)`,
            }}
          >
            {items.map((item, i) => {
              const isActive = i === current;
              const variant = item.variant ?? cardVariant;
              const isImageVariant = variant === "image";
              const isImageStatement = variant === "imageStatement";
              const usesBand = selfSizingActive && (isImageVariant || isImageStatement);

              return (
                <div
                  key={item.id}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${i + 1} of ${items.length}`}
                  aria-hidden={!isActive}
                  // `group` drives the out-of-focus hover treatment below (a
                  // Carousel-specific hover, not Card's own — see
                  // `hoverEffect={false}` on both cards). Self-sizing slides
                  // hug their card (width follows the image); other variants
                  // keep the full slot width.
                  className="group shrink-0 flex justify-center"
                  style={usesBand ? undefined : { width: `${cardWidth}px` }}
                >
                  {isActive ? (
                    <Card
                      variant={variant}
                      imageSrc={item.imageSrc}
                      imageAlt={item.imageAlt}
                      availableWidth={usesBand ? cardWidth : undefined}
                      slideMinHeight={usesBand ? minH : undefined}
                      slideMaxHeight={usesBand ? maxH : undefined}
                      imageWidth={item.imageWidth}
                      imageHeight={item.imageHeight}
                      tabIndex={0}
                      hoverEffect={false}
                      className={cn(
                        "cursor-default shadow-lg",
                        !usesBand && "w-full",
                        (isImageVariant || isImageStatement) && "bg-survey-muted-background",
                        "[&_img]:opacity-100 [&_img]:transition-opacity [&_img]:duration-500 [&_img]:ease-in-out",
                        isImageVariant && "border-0",
                      )}
                    >
                      {item.label}
                    </Card>
                  ) : (
                    <Card
                      variant={variant}
                      imageSrc={item.imageSrc}
                      imageAlt={item.imageAlt}
                      availableWidth={usesBand ? cardWidth : undefined}
                      slideMinHeight={usesBand ? minH : undefined}
                      slideMaxHeight={usesBand ? maxH : undefined}
                      imageWidth={item.imageWidth}
                      imageHeight={item.imageHeight}
                      // Clicking an out-of-focus slide navigates to it, same
                      // as clicking its bullet or the chevron would. Kept out
                      // of the tab order and hidden from assistive tech
                      // (`aria-hidden`) since the carousel already exposes
                      // in-order navigation via the chevrons/bullets — this
                      // click is a mouse-only convenience on top of that.
                      onClick={() => goTo(i)}
                      aria-hidden
                      tabIndex={-1}
                      hoverEffect={false}
                      className={cn(
                        "cursor-pointer border-survey-border-muted shadow-none transition-shadow",
                        // Carousel's own hover (not Card's): out-of-focus
                        // slides get the same drop shadow and border color as
                        // the in-focus slide once hovered, driven by the
                        // slide wrapper's `group` above.
                        "group-hover:shadow-lg group-hover:border-survey-border-interactive",
                        !usesBand && "w-full",
                        (isImageVariant || isImageStatement) && "bg-survey-muted-background",
                        "[&_img]:opacity-0 [&_img]:transition-opacity [&_img]:duration-500 [&_img]:ease-in-out",
                        isImageVariant && "border-0",
                      )}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {navigation === "counter" && (
          <div className="flex items-center justify-between gap-4 self-center w-48 py-2 ">
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
          <div className="flex items-center justify-center gap-4 self-center py-2 ">
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

            <div className="flex items-center gap-2" role="tablist" aria-label="Carousel slides">
              {hasBulletsBefore && (
                <button
                  type="button"
                  aria-label="Go to first slide"
                  onClick={() => goTo(0)}
                  className={moreDotClass}
                />
              )}
              {items.slice(bulletWindowStart, bulletWindowEnd).map((item, idx) => {
                const i = bulletWindowStart + idx;
                return (
                  <Bullet
                    key={item.id}
                    selected={i === current}
                    answered={item.answered ?? false}
                    role="tab"
                    aria-selected={i === current}
                    aria-label={`Slide ${i + 1}`}
                    onClick={() => goTo(i)}
                  />
                );
              })}
              {hasBulletsAfter && (
                <button
                  type="button"
                  aria-label="Go to last slide"
                  onClick={() => goTo(items.length - 1)}
                  className={moreDotClass}
                />
              )}
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
