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
  (
    { className, selected, focused = false, onBlur, onFocus, onMouseEnter, onMouseLeave, ...props },
    ref,
  ) => {
    const [internalSelected, setInternalSelected] = React.useState(false);
    const isSelected = selected ?? internalSelected;

    // Hover is tracked in JS rather than left to CSS `:hover` so it can be
    // previewed the same way ImageAreaSelector/ImageAreaEvaluator do —
    // `userEvent.hover()` dispatches a real `mouseenter`, which this reads,
    // whereas the browser's own `:hover` matching ignores synthetic events.
    const [isHovered, setIsHovered] = React.useState(false);

    // Browsers show `:focus-visible` on text inputs even for pointer-triggered
    // focus (unlike buttons), so it can't distinguish click from Tab here. A
    // pointerdown always precedes a click's focus event, so it's used as a
    // flag to suppress the ring for that focus and keep it for keyboard nav.
    const wasPointerRef = React.useRef(false);
    const [isKeyboardFocused, setIsKeyboardFocused] = React.useState(false);

    const handlePointerDown = () => {
      wasPointerRef.current = true;
      setInternalSelected(true);
    };

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      if (!wasPointerRef.current) {
        setIsKeyboardFocused(true);
      }
      wasPointerRef.current = false;
      onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setInternalSelected(false);
      setIsKeyboardFocused(false);
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

    const showFocusRing = focused || isKeyboardFocused;

    return (
      <div className="w-full" onPointerDown={handlePointerDown}>
        <input
          type="text"
          ref={ref}
          className={cn(
            "w-full bg-transparent border-0 border-b transition-colors",
            "text-survey-foreground text-survey-body font-survey-regular",
            "placeholder:text-survey-muted-foreground",
            isHovered && "bg-survey-muted-background",
            "focus-visible:outline-none",
            isSelected
              ? "border-b-2 border-survey-border-selected"
              : "border-survey-border-interactive",
            showFocusRing &&
              (isSelected
                ? "ring-2 ring-offset-2 ring-offset-survey-background ring-survey-border-selected"
                : "ring-2 ring-offset-2 ring-offset-survey-background ring-survey-border-interactive"),
            "py-1",
            className,
          )}
          onFocus={handleFocus}
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
