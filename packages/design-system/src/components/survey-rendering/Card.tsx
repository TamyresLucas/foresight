"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const cardVariants = cva(
  cn(
    "inline-flex items-center justify-center text-center select-none cursor-pointer",
    "rounded-survey-md border border-survey-border-muted bg-survey-background",
    "text-survey-foreground font-survey-regular",
    "transition-colors hover:bg-survey-muted-background",
    "focus:outline-none focus-visible:outline-none",
    "data-[state=selected]:border-2 data-[state=selected]:border-survey-border-selected",
  ),
  {
    variants: {
      shape: {
        square: "aspect-square",
        rectangle: "",
      },
      size: {
        sm: "min-w-20 min-h-20 p-3 text-survey-body",
        md: "min-w-28 min-h-28 p-4 text-survey-body",
        lg: "min-w-36 min-h-36 p-5 text-survey-body",
      },
    },
    defaultVariants: { shape: "rectangle", size: "md" },
  },
);

export interface CardProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children">,
    VariantProps<typeof cardVariants> {
  selected?: boolean;
  focused?: boolean;
  width?: number | string;
  height?: number | string;
  aspectRatio?: number | string;
  children?: React.ReactNode;
}

const Card = React.forwardRef<HTMLButtonElement, CardProps>(
  (
    {
      className,
      shape,
      size,
      selected = false,
      focused = false,
      width,
      height,
      aspectRatio,
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
        data-state={selected ? "selected" : "default"}
        data-focused={focused ? "true" : undefined}
        aria-pressed={selected}
        className={cn(
          cardVariants({ shape, size }),
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
        {children}
      </button>
    );
  },
);
Card.displayName = "Card";

export { Card, cardVariants };
