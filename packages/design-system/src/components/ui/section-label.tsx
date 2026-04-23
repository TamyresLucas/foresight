import * as React from "react"
import { cn } from "@/lib/utils"

export interface SectionLabelProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  variant?: "s2-subsection" | "s2-section"
}

/**
 * SectionLabel component used to demarcate sections in the Survey Builder.
 * Supports a trailing line variant (s2-subsection) and a full-width header variant (s2-section).
 * Uses the branded font-survey (Outfit).
 */
const SectionLabel = React.forwardRef<HTMLDivElement, SectionLabelProps>(
  (
    { 
      className, 
      children, 
      variant = "s2-subsection", 
      ...props 
    }, 
    ref
  ) => {
    const isFullWidthVariant = variant === "s2-section"

    if (isFullWidthVariant) {
      return (
        <div
          ref={ref}
          className={cn(
            "flex items-center w-full bg-background px-3 py-[9px] rounded-t-md border-b-2 border-primary",
            className
          )}
          {...props}
        >
          <span className="font-semibold text-xl text-foreground leading-none font-survey">
            {children}
          </span>
        </div>
      )
    }

    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center gap-[15px] w-full group min-h-[25px]",
          className
        )}
        {...props}
      >
        <span
          className={cn(
            "font-semibold whitespace-nowrap leading-none transition-colors shrink-0 text-lg text-foreground font-survey"
          )}
        >
          {children}
        </span>

        {/* Divider - using border-t for better 1px rendering reliability */}
        <div
          className={cn(
            "flex-1 self-center transition-all border-t border-primary/40"
          )}
        />
      </div>
    )
  }
)
SectionLabel.displayName = "SectionLabel"

export { SectionLabel }
