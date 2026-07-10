"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface DropZoneProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
  label?: React.ReactNode;
  width?: number | string;
  height?: number | string;
  children?: React.ReactNode;
}

const DropZone = React.forwardRef<HTMLDivElement, DropZoneProps>(
  (
    { label = "Choice", width, height, className, style, children, ...props },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex flex-col items-stretch min-w-28 border border-survey-border-interactive",
          className,
        )}
        style={{
          borderRadius: "calc(var(--survey-radius-md, 12px) + 8px)",
          padding: "var(--survey-margin, 8px)",
          gap: "var(--survey-margin, 8px)",
          width,
          height,
          ...style,
        }}
        {...props}
      >
        <div style={{ paddingLeft: "4px", paddingRight: "4px" }}>
          <span className="text-survey-body font-survey-semibold font-survey text-survey-foreground text-left">
            {label}
          </span>
        </div>
        {children ? (
          children
        ) : (
          <div style={{ padding: "4px" }}>
            <span className="text-survey-support font-survey text-survey-foreground/60 text-left">
              Drag cards here
            </span>
          </div>
        )}
      </div>
    );
  },
);
DropZone.displayName = "DropZone";

export { DropZone };
