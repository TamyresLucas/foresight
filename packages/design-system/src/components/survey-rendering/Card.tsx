"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const cardVariants = cva(
  cn(
    "inline-flex select-none cursor-pointer",
    "rounded-survey-md border border-survey-border-interactive bg-survey-background",
    "text-survey-foreground font-survey-regular",
    "transition-colors",
    "focus:outline-none focus-visible:outline-none",
    // Selected reads as a 2px border but is painted as 1px border + 1px inset
    // shadow, so the card keeps its default-state dimensions. (For image
    // variants the shadow sits behind the full-bleed image; the selected
    // overlay below repaints it on top.)
    "data-[state=selected]:border-survey-border-selected data-[state=selected]:shadow-[inset_0_0_0_1px_hsl(var(--survey-border-selected))]",
  ),
  {
    variants: {
      variant: {
        statement: "items-center justify-center text-center",
        // `relative` anchors the selected- and hover-state overlays (see the
        // `isImgVariant` block below), which must be painted on top of the
        // full-bleed image rather than behind it. `group` lets those overlays
        // react to the button's own `:hover`. Deliberately NOT `overflow-clip`
        // here — that would also clip this button's own focus ring (drawn via
        // `ring`/box-shadow, which extends outside the border box); the image
        // itself is clipped to the rounded corners by an inner wrapper instead
        // (see the wrapper around the image-rendering block below).
        image: "relative group flex-col items-stretch",
        imageStatement: "relative group flex-col items-stretch shadow-sm",
      },
      shape: {
        square: "aspect-square",
        rectangle: "",
      },
      size: {
        sm: "",
        md: "",
        lg: "",
      },
    },
    compoundVariants: [
      { variant: "statement", size: "sm", className: "min-w-20 min-h-20 p-3 text-survey-body" },
      { variant: "statement", size: "md", className: "min-w-28 min-h-28 p-4 text-survey-body" },
      { variant: "statement", size: "lg", className: "min-w-36 min-h-36 p-5 text-survey-body" },
      { variant: "image", size: "sm", className: "min-w-20 min-h-20" },
      { variant: "image", size: "md", className: "min-w-28 min-h-28" },
      { variant: "image", size: "lg", className: "min-w-36 min-h-36" },
      { variant: "imageStatement", size: "sm", className: "min-w-20" },
      { variant: "imageStatement", size: "md", className: "min-w-28" },
      { variant: "imageStatement", size: "lg", className: "min-w-36" },
    ],
    defaultVariants: { variant: "statement", shape: "rectangle", size: "md" },
  },
);

export interface CardProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children">,
    VariantProps<typeof cardVariants> {
  selected?: boolean;
  focused?: boolean;
  dragged?: boolean;
  /**
   * Whether Card renders its own hover treatment (thicker border, background
   * tint for `statement`, white/grey wash overlay for `image`/`imageStatement`).
   * Defaults to true. Set to false when a consumer needs a bespoke hover
   * design of its own — e.g. Carousel, which only hovers out-of-focus slides
   * and uses a different visual (drop shadow + border color matching the
   * active slide) instead of Card's built-in one.
   */
  hoverEffect?: boolean;
  /**
   * Reserve the image's layout space but hide its pixels. Used for blank
   * carousel peek cards so each placeholder keeps the natural height of its
   * own image (fill-width) without revealing the content.
   */
  blank?: boolean;
  width?: number | string;
  height?: number | string;
  aspectRatio?: number | string;
  imageSrc?: string;
  imageAlt?: string;
  /**
   * Minimum height (px) for the `imageStatement` image area in legacy fill-width
   * mode. Superseded by the self-sizing band (availableWidth + slideMaxHeight).
   */
  minImageHeight?: number;
  /**
   * Self-sizing: the slot width this card must hug within (= cardWidth from Carousel).
   * When provided together with `slideMaxHeight`, activates the height-band mode.
   */
  availableWidth?: number;
  /** Self-sizing: total slide minimum height (px), inclusive of the statement strip. */
  slideMinHeight?: number;
  /** Self-sizing: total slide maximum height (px), inclusive of the statement strip. */
  slideMaxHeight?: number;
  /** Declared natural image width — avoids layout shift while image loads. */
  imageWidth?: number;
  /** Declared natural image height — avoids layout shift while image loads. */
  imageHeight?: number;
  children?: React.ReactNode;
}

/**
 * Compute the image-box dimensions for the self-sizing mode.
 *
 * The image is uniformly scaled so its height lands within [minImgH, maxImgH].
 * The card width follows (hugs the image). For images too wide to reach minImgH
 * within availableWidth, the soft-min rule applies: cap at availableWidth and
 * let height fall just below the minimum rather than overflow or crop.
 */
function computeSlide(
  availableWidth: number,
  slideMinHeight: number,
  slideMaxHeight: number,
  stripHeight: number,
  ratio: number | null,
): { targetW: number; targetH: number } {
  const maxImgH = Math.max(0, slideMaxHeight - stripHeight);
  const minImgH = Math.max(0, slideMinHeight - stripHeight);

  if (maxImgH <= 0) return { targetW: availableWidth, targetH: 0 };

  if (ratio === null || ratio <= 0) {
    // Ratio not yet known — reserve the minimum height to minimise layout jump.
    return { targetW: availableWidth, targetH: minImgH > 0 ? minImgH : maxImgH };
  }

  const fillH = availableWidth / ratio;
  const clampedH = Math.max(minImgH, Math.min(fillH, maxImgH));
  const candidateW = clampedH * ratio;

  // Soft minimum: if reaching minImgH would push the width past the slot, cap
  // at availableWidth instead (height lands slightly below minImgH — no crop,
  // no letterbox).
  if (candidateW > availableWidth) {
    return { targetW: availableWidth, targetH: availableWidth / ratio };
  }

  return { targetW: candidateW, targetH: clampedH };
}

const Card = React.forwardRef<HTMLButtonElement, CardProps>(
  (
    {
      className,
      variant = "statement",
      shape,
      size,
      selected = false,
      focused = false,
      dragged = false,
      hoverEffect = true,
      blank = false,
      width,
      height,
      aspectRatio,
      imageSrc,
      imageAlt = "",
      minImageHeight,
      availableWidth,
      slideMinHeight = 0,
      slideMaxHeight,
      imageWidth,
      imageHeight,
      style,
      children,
      ...props
    },
    ref,
  ) => {
    const [naturalRatio, setNaturalRatio] = React.useState<number | null>(null);
    const stripRef = React.useRef<HTMLDivElement>(null);
    const [stripH, setStripH] = React.useState(48); // min-h-12 = 48px initial estimate

    const selfSizing = availableWidth !== undefined && slideMaxHeight !== undefined;
    const isImgVariant = variant === "image";
    const isImgStmt = variant === "imageStatement";

    // Track the statement strip's rendered height so it can be subtracted from
    // the total slide bounds when computing the image box.
    React.useEffect(() => {
      if (!selfSizing || !isImgStmt) return;
      const node = stripRef.current;
      if (!node) return;
      const update = () => setStripH(node.offsetHeight);
      update();
      const obs = new ResizeObserver(update);
      obs.observe(node);
      return () => obs.disconnect();
    }, [selfSizing, isImgStmt]);

    const declaredRatio = imageWidth && imageHeight ? imageWidth / imageHeight : null;
    const ratio = declaredRatio ?? naturalRatio;

    const handleImgLoad = React.useCallback(
      (e: React.SyntheticEvent<HTMLImageElement>) => {
        const img = e.currentTarget;
        if (img.naturalWidth > 0 && img.naturalHeight > 0) {
          setNaturalRatio(img.naturalWidth / img.naturalHeight);
        }
      },
      [],
    );

    const { targetW, targetH } = React.useMemo(() => {
      if (!selfSizing || !availableWidth || !slideMaxHeight) {
        return { targetW: 0, targetH: 0 };
      }
      const effectiveStripH = isImgStmt ? stripH : 0;
      return computeSlide(availableWidth, slideMinHeight, slideMaxHeight, effectiveStripH, ratio);
    }, [selfSizing, availableWidth, slideMinHeight, slideMaxHeight, ratio, stripH, isImgStmt]);

    const ringColorClass = selected
      ? "ring-survey-border-selected"
      : "ring-survey-border-interactive";

    return (
      <button
        ref={ref}
        type="button"
        data-state={dragged ? "dragged" : selected ? "selected" : "default"}
        data-focused={focused ? "true" : undefined}
        aria-pressed={selected}
        className={cn(
          cardVariants({ variant, shape, size }),
          dragged && "opacity-0",
          // `statement` hover: keep the regular background (no grey tint) and
          // border width (1px, unchanged) — only a drop shadow (the same
          // style used for Carousel's out-of-focus hover) signals hover.
          // Selected cards need the drop shadow composed with the selected
          // inset ring (both live in --tw-shadow, so separate classes would
          // override each other unpredictably).
          hoverEffect && variant === "statement" && "hover:shadow-lg",
          hoverEffect &&
            variant === "statement" &&
            "data-[state=selected]:hover:shadow-[inset_0_0_0_1px_hsl(var(--survey-border-selected)),0_10px_15px_-3px_rgb(0_0_0_/_0.1),0_4px_6px_-4px_rgb(0_0_0_/_0.1)]",
          focused &&
            cn(
              "ring-2 ring-offset-2 ring-offset-survey-background",
              ringColorClass,
            ),
          cn(
            "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-survey-background",
            selected
              ? "focus-visible:ring-survey-border-selected"
              : "focus-visible:ring-survey-border-interactive",
          ),
          className,
        )}
        style={
          selfSizing && (isImgVariant || isImgStmt) && targetW > 0
            ? { width: targetW, minWidth: 0, ...style }
            : { width, height, aspectRatio, ...style }
        }
        {...props}
      >
        {isImgVariant && (
          // The image is clipped to the card's rounded corners on this inner
          // wrapper rather than on the button itself, so the button's own
          // focus ring (box-shadow, extending outside the border box) isn't
          // clipped away along with it. `flex-1 min-h-0` (rather than a fixed
          // h-full) lets height still follow the image's own intrinsic ratio
          // in fill-width/self-sizing mode, exactly as before this wrapper
          // existed — percentage/flex sizing here resolves to "auto" when the
          // button itself has no explicit height (e.g. fill-width mode).
          <div className="relative flex-1 min-h-0 w-full overflow-clip rounded-survey-md">
            {selfSizing && availableWidth && targetW > 0 ? (
              // Self-sizing: explicit image box, card hugs image, no letterbox
              <div
                className="relative flex items-center justify-center bg-survey-muted-background"
                style={{ width: targetW, height: targetH }}
              >
                {imageSrc && (
                  <img
                    alt={blank ? "" : imageAlt}
                    src={imageSrc}
                    aria-hidden={blank || undefined}
                    onLoad={declaredRatio === null ? handleImgLoad : undefined}
                    className={cn(
                      "block w-full h-full object-contain pointer-events-none",
                      blank && "invisible",
                    )}
                  />
                )}
              </div>
            ) : height !== undefined ? (
              // Fixed-height mode: image fills the full card area (cropped).
              imageSrc && (
                <img
                  alt={imageAlt}
                  src={imageSrc}
                  className="size-full object-cover pointer-events-none"
                />
              )
            ) : (
              // Fill-width mode: image keeps its ratio, card grows to fit.
              <div
                className="relative flex w-full items-center justify-center bg-survey-muted-background"
                style={{ minHeight: minImageHeight }}
              >
                {imageSrc && (
                  <img
                    alt={blank ? "" : imageAlt}
                    src={imageSrc}
                    aria-hidden={blank || undefined}
                    className={cn(
                      "block w-full h-auto pointer-events-none",
                      blank && "invisible",
                    )}
                  />
                )}
              </div>
            )}
          </div>
        )}
        {/* Hover: a white wash at 50% opacity over the full-bleed image (a
            plain `hover:bg-*` on the button itself would be painted behind
            the image and invisible, same reasoning as the selected overlay
            below). Uses `group-hover` since the button is the `group`. */}
        {hoverEffect && isImgVariant && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-survey-md bg-white/50 opacity-0 transition-opacity group-hover:opacity-100"
          />
        )}
        {/* Selected: the same framing used by ImageAreaEvaluator/ImageAreaSelector
            — a low-opacity tint of the selected-color token plus a white ring
            just inside the outer selected-color border — painted on top of the
            (full-bleed) image so the selection reads clearly regardless of the
            image's own colors. A plain `background-color`/`shadow-[inset]` on
            the button itself would be painted behind the image and invisible,
            hence this separate overlay element.
            This div's box already sits inset by the outer border's 1px width
            (an absolutely-positioned child is placed within its parent's
            padding box, inside the border). Its corner radius is therefore
            the outer `rounded-survey-md` radius minus that 1px, so the two
            borders read as concentric rings rather than the inner one
            bulging past the outer curve.
            The shadow first extends the button's 1px selected border to the
            2px selected look (painted here, on top of the image, since the
            button's own inset shadow sits behind it), then draws the 2px
            white ring inside it. */}
        {isImgVariant && selected && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-[calc(var(--survey-radius-md)-1px)] shadow-[inset_0_0_0_1px_hsl(var(--survey-border-selected)),inset_0_0_0_3px_white]"
            style={{
              backgroundColor:
                'color-mix(in srgb, hsl(var(--survey-border-selected)) 25%, transparent)',
            }}
          />
        )}
        {/* Selected: like the `image` overlay above, the 1px inset shadow that
            extends the button's 1px border to the 2px selected look must be
            repainted on top — the image and caption strip cover the button's
            own inset shadow. No white ring/tint here: `imageStatement`'s
            selected design has always been just the thicker border. */}
        {isImgStmt && selected && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-[calc(var(--survey-radius-md)-1px)] shadow-[inset_0_0_0_1px_hsl(var(--survey-border-selected))]"
          />
        )}
        {isImgStmt && (
          // Both the image portion and the caption strip below are clipped
          // together on this single inner wrapper (matching the card's own
          // rounded corners), rather than on the button itself — same reason
          // as the `image` variant above: keeps the button's own focus ring
          // unclipped. Clipping only the image portion (leaving the caption
          // strip a direct, unclipped child of the button) would let the
          // caption's own square corners poke out past the button's rounded
          // border.
          <div className="relative flex flex-1 min-h-0 w-full flex-col overflow-clip rounded-survey-md">
            {/* `flex-1 min-h-0` grows to fill whatever space the caption strip
                below (`shrink-0`) doesn't need, in every sizing mode. */}
            <div className="relative flex-1 min-h-0 w-full">
              {selfSizing && availableWidth && targetW > 0 ? (
                // Self-sizing: explicit image box
                <div
                  className="relative flex items-center justify-center bg-survey-muted-background"
                  style={{ width: targetW, height: targetH }}
                >
                  {imageSrc && (
                    <img
                      alt={blank ? "" : imageAlt}
                      src={imageSrc}
                      aria-hidden={blank || undefined}
                      onLoad={declaredRatio === null ? handleImgLoad : undefined}
                      className={cn(
                        "block w-full h-full object-contain pointer-events-none",
                        blank && "invisible",
                      )}
                    />
                  )}
                </div>
              ) : height === undefined ? (
                // Fill-width mode: image keeps its ratio; minImageHeight floors short images.
                <div
                  className="relative flex w-full items-center justify-center bg-survey-muted-background"
                  style={{ minHeight: minImageHeight }}
                >
                  {imageSrc && (
                    <img
                      alt={blank ? "" : imageAlt}
                      src={imageSrc}
                      aria-hidden={blank || undefined}
                      className={cn(
                        "block w-full h-auto pointer-events-none",
                        blank && "invisible",
                      )}
                    />
                  )}
                </div>
              ) : (
                // Fixed-height mode: image fills a fixed-height area (cropped).
                // `w-full h-full` (not `flex-1`) since the wrapper above is now
                // what participates in the button's flex column.
                <div className="relative w-full h-full bg-survey-muted-background">
                  {imageSrc && (
                    <img
                      alt={imageAlt}
                      src={imageSrc}
                      className="absolute inset-0 size-full object-cover pointer-events-none"
                    />
                  )}
                </div>
              )}
              {/* Hover: a grey wash over the image portion, matching the token
                  used elsewhere for hover (`survey-muted-background`). See the
                  `isImgVariant` hover overlay above for why this needs a
                  separate painted-on-top element rather than a plain
                  `hover:bg-*` class. No rounding needed here — the outer
                  wrapper above already clips this to the card's shape. */}
              {hoverEffect && (
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-survey-muted-background opacity-0 transition-opacity group-hover:opacity-100"
                />
              )}
            </div>
            <div
              ref={selfSizing ? stripRef : undefined}
              className={cn(
                "flex min-h-12 w-full items-center justify-center bg-survey-background px-4 py-3 text-center text-survey-body text-survey-foreground shrink-0",
                hoverEffect && "group-hover:bg-survey-muted-background",
              )}
            >
              {children}
            </div>
          </div>
        )}
        {variant === "statement" && children}
      </button>
    );
  },
);
Card.displayName = "Card";

export { Card, cardVariants };
