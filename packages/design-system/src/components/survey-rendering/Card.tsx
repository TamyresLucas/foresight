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
    "data-[state=selected]:border-2 data-[state=selected]:border-survey-border-selected",
  ),
  {
    variants: {
      variant: {
        statement: "items-center justify-center text-center hover:bg-survey-muted-background",
        image: "flex-col items-stretch overflow-clip",
        imageStatement: "flex-col items-stretch overflow-clip shadow-sm",
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
          selfSizing && availableWidth && targetW > 0 ? (
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
          )
        )}
        {isImgStmt && (
          <>
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
              <div className="relative w-full bg-survey-muted-background flex-1 min-h-0">
                {imageSrc && (
                  <img
                    alt={imageAlt}
                    src={imageSrc}
                    className="absolute inset-0 size-full object-cover pointer-events-none"
                  />
                )}
              </div>
            )}
            <div
              ref={selfSizing ? stripRef : undefined}
              className="flex min-h-12 w-full items-center justify-center bg-survey-background px-4 py-3 text-center text-survey-body text-survey-foreground shrink-0"
            >
              {children}
            </div>
          </>
        )}
        {variant === "statement" && children}
      </button>
    );
  },
);
Card.displayName = "Card";

export { Card, cardVariants };
