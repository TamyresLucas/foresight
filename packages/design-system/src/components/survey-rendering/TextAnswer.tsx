'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

export interface TextAnswerProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: React.ReactNode;
  required?: boolean;
  selected?: boolean;
  focused?: boolean;
  error?: string;
}

const TextAnswer = React.forwardRef<HTMLInputElement, TextAnswerProps>(
  ({ className, label, required = false, selected = false, focused = false, error, ...props }, ref) => {
    return (
      <div 
        className="flex flex-col w-full group/survey-input"
        style={{ gap: 'var(--survey-margin)', marginBottom: 'var(--survey-margin)' }}
      >
        {/* Label */}
        {label && (
          <label className="text-survey-body font-survey-regular font-survey text-survey-foreground w-full">
            {label}
            {required && <span className="text-survey-destructive ml-0.5">*</span>}
          </label>
        )}

        {/* 
          Multi-layered concentric focus frame.
          Activated by the 'focused' prop OR browser :focus-visible (tab navigation).
        */}
        <div
          className={cn(
            'rounded-[calc(var(--radius)+2px)] p-[2px] border-2 w-full transition-all bg-transparent',
            'border-transparent', // Default state
            (focused || selected) && 'group-has-[:focus-visible]/survey-input:border-survey-border-selected',
            focused && 'border-survey-border-interactive',
            !focused && 'group-has-[:focus-visible]/survey-input:border-survey-border-interactive',
            selected && focused && 'border-survey-border-selected',
            selected && 'group-has-[:focus-visible]/survey-input:border-survey-border-selected',
          )}
        >
          <div
            className={cn(
              'flex w-full h-10 px-2 py-1.5 items-center gap-[10px] rounded-lg border bg-transparent transition-all',
              // Inner frame: 1px when focused, 2px when selected but not focused, 1px default.
              (focused || selected) && 'border', 
              focused ? 'border' : 'group-has-[:focus-visible]/survey-input:border',
              selected 
                ? (error ? 'border-survey-destructive' : (focused ? 'border' : 'border-2 border-survey-border-selected')) 
                : (error ? 'border-survey-destructive' : 'border-survey-border-interactive'),
              selected && focused && 'border-survey-border-selected border'
            )}
          >
            <input
              type="text"
              className={cn(
                'w-full bg-transparent text-survey-body font-survey-regular focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 text-survey-foreground font-survey',
                error && 'text-survey-destructive',
                className,
              )}
              ref={ref}
              {...props}
            />
          </div>
        </div>

        {/* Error message */}
        {error && <p className="text-xs text-survey-destructive w-full">{error}</p>}
      </div>
    );
  },
);

TextAnswer.displayName = 'TextAnswer';

export { TextAnswer };
