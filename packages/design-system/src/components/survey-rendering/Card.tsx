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
        image: "overflow-clip",
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
   * Minimum height (px) for the `imageStatement` image area. The image always
   * fills the width and keeps its ratio (never cropped); this floors short/wide
   * images, which then sit centered with muted background bands top & bottom.
   * Taller images grow the box past this value.
   */
  minImageHeight?: number;
  children?: React.ReactNode;
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
      style,
      children,
      ...props
    },
    ref,
  ) => {
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
        style={{ width, height, aspectRatio, ...style }}
        {...props}
      >
        {variant === "image" && imageSrc && (
          <img
            alt={imageAlt}
            src={imageSrc}
            className="size-full object-cover pointer-events-none"
          />
        )}
        {variant === "imageStatement" && (
          <>
            {height === undefined ? (
              // Fill-width mode: the image always fills the width and keeps its
              // ratio (never cropped). `minImageHeight` floors short/wide images
              // — they sit centered with muted background bands top & bottom —
              // while taller images grow the box freely.
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
              // Fixed-height mode: the image fills a fixed-height area (cropped).
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
            <div className="flex min-h-12 w-full items-center justify-center bg-survey-background px-4 py-3 text-center text-survey-body text-survey-foreground shrink-0">
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
