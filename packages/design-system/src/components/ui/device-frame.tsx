import * as React from "react";
import { Signal, Wifi, BatteryFull } from "lucide-react";
import { cn } from "@/lib/utils";

export interface DeviceFrameProps {
  /** Content rendered inside the scrollable phone screen. */
  children: React.ReactNode;
  /** Applied to the outer device body (bezel). */
  className?: string;
  /** Applied to the scrollable screen area — use for content padding. */
  screenClassName?: string;
  /** Time shown on the left of the status bar. Defaults to "9:41". */
  statusBarTime?: string;
}

/**
 * Presentational iOS-style mobile-phone mockup.
 *
 * The device has a **fixed-size screen** with a dynamic island, a fake status
 * bar, and a home indicator. `children` are rendered inside the screen, which
 * **scrolls internally** — so the frame reflects a real phone's above-the-fold
 * viewport rather than growing with content.
 *
 * The bezel and dynamic island are theme-agnostic (neutral black). Everything
 * that sits over the screen (status bar text/icons, home indicator) uses survey
 * theme tokens so it stays legible across light/dark themed screen backgrounds.
 */
export function DeviceFrame({
  children,
  className,
  screenClassName,
  statusBarTime = "9:41",
}: DeviceFrameProps) {
  return (
    <div
      className={cn(
        // Fixed iPhone logical dimensions (390×844). Both dimensions are fixed
        // so the device always keeps its true aspect ratio regardless of the
        // surrounding viewport — the preview pane scrolls if it doesn't fit.
        "relative shrink-0 w-[390px] h-[844px]",
        "rounded-[3rem] bg-neutral-900 p-3 shadow-2xl",
        className,
      )}
    >
      {/* Dynamic island */}
      <div className="absolute left-1/2 top-5 z-10 h-7 w-28 -translate-x-1/2 rounded-full bg-black" />

      {/* Screen */}
      <div className="flex h-full w-full flex-col overflow-hidden rounded-[2.2rem] bg-survey-background">
        {/* Status bar */}
        <div className="flex h-11 shrink-0 items-center justify-between px-7 font-survey text-sm text-survey-foreground">
          <span className="tabular-nums">{statusBarTime}</span>
          <div className="flex items-center gap-1.5">
            <Signal className="size-4" />
            <Wifi className="size-4" />
            <BatteryFull className="size-4" />
          </div>
        </div>

        {/* Scrollable content */}
        <div
          className={cn(
            "flex-1 overflow-y-auto overflow-x-hidden scrollbar-none",
            screenClassName,
          )}
        >
          {children}
        </div>

        {/* Home indicator */}
        <div className="flex shrink-0 justify-center py-2">
          <div className="h-1 w-32 rounded-full bg-survey-foreground/30" />
        </div>
      </div>
    </div>
  );
}
