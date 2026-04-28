'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

export type SurveyCompletionBarVariant =
  | 'basic'
  | 'discrete'
  | 'full-width'
  | 'full-width-label';

export interface SurveyCompletionBarProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'role' | 'aria-valuenow'> {
  value?: number;
  label?: string;
  variant?: SurveyCompletionBarVariant;
  step?: number;
}

const clampPercent = (n: number) => Math.max(0, Math.min(100, n));

const snapToStep = (value: number, step: number): number => {
  if (step <= 0 || step >= 100) return value;
  return Math.round(value / step) * step;
};

const SurveyCompletionBar = React.forwardRef<HTMLDivElement, SurveyCompletionBarProps>(
  (
    {
      value = 80,
      label = 'Survey completion',
      variant = 'basic',
      step = 1,
      className,
      ...props
    },
    ref,
  ) => {
    const pct = clampPercent(snapToStep(value, step));
    const pctText = `${Math.round(pct)}%`;

    const showInlineLabel = variant === 'full-width-label';
    const showBelowLabel = variant === 'basic' || variant === 'discrete';

    const trackClass = cn(
      'flex w-full bg-survey-background overflow-hidden rounded-survey-md',
      variant === 'basic' && 'h-7 border-2 border-survey-border-interactive',
      variant === 'discrete' && 'h-[8px] border border-survey-border-interactive',
      variant === 'full-width' && 'h-[7px] border-b border-survey-border-interactive',
    );

    const fillClass = cn(
      'bg-survey-primary border-survey-background min-w-px h-full rounded-survey-sm',
      variant === 'basic' && 'border-2',
      variant === 'discrete' && 'border',
      variant === 'full-width' && 'border-b',
    );

    const remainderClass = cn(
      'bg-survey-background border border-survey-background shrink-0',
      variant === 'basic' ? 'h-7 w-[25px]' : 'hidden',
    );

    return (
      <div
        ref={ref}
        className={cn(
          'flex flex-col items-start w-full font-survey',
          showBelowLabel && 'gap-2',
          className,
        )}
        role="progressbar"
        aria-valuenow={pct}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label}
        {...props}
      >
        {showInlineLabel ? (
          <div className="flex w-full items-center gap-2 text-survey-body font-survey-regular text-survey-foreground leading-none">
            <span className="whitespace-nowrap">{pctText}</span>
            <span className="flex-1 min-w-px text-right">{label}</span>
          </div>
        ) : (
          <div className={trackClass}>
            <div
              className={fillClass}
              style={{ flex: `${pct} 0 0` }}
            />
            {variant === 'basic' && pct < 100 && (
              <div
                className={remainderClass}
                style={{ flex: `${100 - pct} 0 0` }}
              />
            )}
          </div>
        )}

        {showBelowLabel && (
          <div className="flex w-full items-center gap-2 text-survey-body font-survey-regular text-survey-foreground leading-none">
            <span className="whitespace-nowrap">{pctText}</span>
            <span className="flex-1 min-w-px text-right">{label}</span>
          </div>
        )}
      </div>
    );
  },
);

SurveyCompletionBar.displayName = 'SurveyCompletionBar';

export { SurveyCompletionBar };
