"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface OpenEndInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  /** Whether the field reads as actively being edited (thicker, `survey-border-selected` underline). Defaults to internal pointerdown/blur tracking when omitted. */
  selected?: boolean;
  /** Simulates the keyboard-focus ring for Storybook; real `:focus-visible` already applies it. */
  focused?: boolean;
}

/**
 * The attached open-end field ("Other"): a single-line text input revealed
 * beneath a choice flagged `openEnd` once it's selected, in RadioGroup,
 * Checkbox, ChoiceGrid, ImageChoiceGrid, and HybridGrid. Mirrors the
 * standalone OpenEndAnswer question type's hover/selected/focused states and
 * design tokens, but keeps its own bottom-border-only underline instead of
 * OpenEndAnswer's rounded box.
 */
const OpenEndInput = React.forwardRef<HTMLInputElement, OpenEndInputProps>(
  ({ className, selected, focused = false, onBlur, onMouseEnter, onMouseLeave, ...props }, ref) => {
    const [internalSelected, setInternalSelected] = React.useState(false);
    const isSelected = selected ?? internalSelected;

    // Hover is tracked in JS rather than left to CSS `:hover` so it can be
    // previewed the same way ImageAreaSelector/ImageAreaEvaluator do —
    // `userEvent.hover()` dispatches a real `mouseenter`, which this reads,
    // whereas the browser's own `:hover` matching ignores synthetic events.
    const [isHovered, setIsHovered] = React.useState(false);

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setInternalSelected(false);
      onBlur?.(e);
    };

    const handleMouseEnter = (e: React.MouseEvent<HTMLInputElement>) => {
      setIsHovered(true);
      onMouseEnter?.(e);
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLInputElement>) => {
      setIsHovered(false);
      onMouseLeave?.(e);
    };

    return (
      <div className="w-full" onPointerDown={() => setInternalSelected(true)}>
        <input
          type="text"
          ref={ref}
          className={cn(
            "w-full bg-transparent border-0 border-b transition-colors",
            "text-survey-foreground text-survey-body font-survey-regular",
            "placeholder:text-survey-muted-foreground",
            isHovered && "bg-survey-muted-background",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-survey-background",
            isSelected
              ? "border-b-2 border-survey-border-selected focus-visible:ring-survey-border-selected"
              : "border-survey-border-interactive focus-visible:ring-survey-border-interactive",
            focused &&
              (isSelected
                ? "ring-2 ring-offset-2 ring-offset-survey-background ring-survey-border-selected"
                : "ring-2 ring-offset-2 ring-offset-survey-background ring-survey-border-interactive"),
            "py-1",
            className,
          )}
          onBlur={handleBlur}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          {...props}
        />
      </div>
    );
  },
);
OpenEndInput.displayName = "OpenEndInput";

export { OpenEndInput };
