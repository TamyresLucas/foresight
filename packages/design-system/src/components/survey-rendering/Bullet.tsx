"use client";

import * as React from "react";
import { Check } from "../ui/icons";
import { cn } from "@/lib/utils";

export interface BulletProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Whether the slide this bullet represents is the active one. */
  selected?: boolean;
  /** Whether the slide this bullet represents has been answered. */
  answered?: boolean;
}

const Bullet = React.forwardRef<HTMLButtonElement, BulletProps>(
  ({ selected = false, answered = false, type = "button", className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(
          "inline-flex shrink-0 items-center justify-center size-4 rounded-full transition-colors",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-survey-background",
          selected
            ? "focus-visible:ring-survey-primary"
            : "focus-visible:ring-survey-border-interactive",
          // Selected dots fill with primary; answered but unselected sit on
          // the page background; unanswered dots stay transparent.
          selected ? "bg-survey-primary" : answered && "bg-survey-background",
          // Unselected dots take the shared survey hover-grey background token
          // on hover, matching nav buttons and choice options.
          !selected && "hover:bg-survey-muted-background",
          // Selection is shown as a 2px primary-colored outline (no offset ring).
          // Every unselected dot keeps the thinner focus-slide border.
          selected
            ? "border-2 border-survey-primary"
            : "border border-survey-border-interactive",
          className,
        )}
        {...props}
      >
        {answered && (
          <Check
            aria-hidden
            size={12}
            // Material Symbols weight is the lowercase `wght` axis (100..700);
            // re-declare the full set since inline style replaces the base rule.
            style={{ fontVariationSettings: "'FILL' 1, 'wght' 700, 'GRAD' 0, 'opsz' 20" }}
            className={selected ? "text-survey-primary-foreground" : "text-survey-primary"}
          />
        )}
      </button>
    );
  },
);
Bullet.displayName = "Bullet";

export { Bullet };
