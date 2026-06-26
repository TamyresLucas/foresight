'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

export type TimerMode = 'countdown' | 'countup';

export type TimerState = 'idle' | 'running' | 'ended';

export interface TimerProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** `countdown` ticks toward zero; `countup` ticks away from zero. Defaults to `countdown`. */
  mode?: TimerMode;
  /**
   * Total seconds. For `countdown` this is the starting time; for `countup`
   * it is the optional limit used to detect the "almost ending" state.
   */
  duration?: number;
  /** Left-aligned label shown beside the readout. */
  label?: React.ReactNode;
  /**
   * Seconds remaining (countdown) or seconds-to-limit (countup) at which the
   * timer enters its "almost ending" warning state. Defaults to 10.
   */
  warnThreshold?: number;
  /** Start ticking on mount. Defaults to false. */
  autoStart?: boolean;
  /** Fired once when a countdown reaches zero (or count-up hits its limit). */
  onComplete?: () => void;
  /** Fired every second with the elapsed seconds. */
  onTick?: (elapsedSeconds: number) => void;
  disabled?: boolean;
}

function formatTime(totalSeconds: number): string {
  const s = Math.max(0, Math.floor(totalSeconds));
  const hh = Math.floor(s / 3600);
  const mm = Math.floor((s % 3600) / 60);
  const ss = s % 60;
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${pad(hh)}:${pad(mm)}:${pad(ss)}`;
}

const Timer = React.forwardRef<HTMLDivElement, TimerProps>(
  (
    {
      mode = 'countdown',
      duration = 300,
      label,
      warnThreshold = 10,
      autoStart = false,
      onComplete,
      onTick,
      disabled = false,
      className,
      ...props
    },
    ref,
  ) => {
    // Elapsed seconds since the timer started ticking.
    const [elapsed, setElapsed] = React.useState(0);
    const [running, setRunning] = React.useState(autoStart && !disabled);
    const completedRef = React.useRef(false);

    const hasLimit = mode === 'countdown' || duration > 0;
    const displaySeconds =
      mode === 'countdown' ? Math.max(0, duration - elapsed) : elapsed;

    // Seconds until the timer "ends": time left for countdown, or distance to
    // the limit for count-up (only meaningful when a limit is set).
    const secondsToEnd =
      mode === 'countdown'
        ? Math.max(0, duration - elapsed)
        : Math.max(0, duration - elapsed);

    // Almost-ending and ended share a single "ended" variant.
    const isEnding = hasLimit && secondsToEnd <= warnThreshold;

    // Tick once per second while running.
    React.useEffect(() => {
      if (!running || disabled) return;
      const id = window.setInterval(() => {
        setElapsed((prev) => prev + 1);
      }, 1000);
      return () => window.clearInterval(id);
    }, [running, disabled]);

    // Report ticks and fire onComplete exactly once when the limit is hit.
    React.useEffect(() => {
      onTick?.(elapsed);
      if (hasLimit && duration > 0 && elapsed >= duration && !completedRef.current) {
        completedRef.current = true;
        setRunning(false);
        onComplete?.();
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [elapsed]);

    // Token-driven color per state. `--survey-destructive` falls back to the
    // bare `--destructive` token so it resolves outside `[data-survey-theme]`.
    const readoutColor = isEnding
      ? 'hsl(var(--survey-destructive, var(--destructive)))'
      : 'hsl(var(--survey-foreground))';

    const borderColor = isEnding
      ? 'hsl(var(--survey-destructive, var(--destructive)))'
      : 'hsl(var(--survey-border-muted))';

    return (
      <div
        ref={ref}
        role="timer"
        aria-live={isEnding ? 'assertive' : 'off'}
        aria-disabled={disabled || undefined}
        className={cn(
          'flex w-full items-center font-survey transition-colors',
          'flex-col gap-3 sm:flex-row sm:gap-4',
          'border bg-transparent',
          disabled && 'opacity-50',
          className,
        )}
        style={{
          borderColor,
          borderRadius: 'var(--survey-radius)',
          padding: '16px 20px',
        }}
        {...props}
      >
        {/* Left label — stands beside the readout. */}
        {label != null && (
          <span className="text-survey-body font-survey-semibold text-survey-foreground sm:flex-1">
            {label}
          </span>
        )}

        {/* shadcn-style monospace readout — large, tabular, stands out from text.
            Weight is applied via inline style so tailwind-merge doesn't drop
            `font-mono` when reconciling it against a `font-*` weight class. */}
        <span
          className={cn(
            'font-mono tabular-nums tracking-tight leading-none',
            'text-3xl sm:text-4xl',
            isEnding && 'animate-pulse',
          )}
          style={{
            color: readoutColor,
            fontWeight: 'var(--survey-font-weight-semibold)',
          }}
        >
          {formatTime(displaySeconds)}
        </span>
      </div>
    );
  },
);

Timer.displayName = 'Timer';

export { Timer };
