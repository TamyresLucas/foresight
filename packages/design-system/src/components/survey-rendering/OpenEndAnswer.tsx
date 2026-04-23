'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

export interface OpenEndAnswerProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: React.ReactNode;
  required?: boolean;
  selected?: boolean;
  focused?: boolean;
  error?: string;
}

const OpenEndAnswer = React.forwardRef<HTMLTextAreaElement, OpenEndAnswerProps>(
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
          Activated by 'focused' prop OR browser :focus-visible (tab navigation).
        */}
        <div
          className={cn(
            'rounded-[calc(var(--radius)+2px)] p-[2px] border-2 w-full transition-all bg-transparent',
            'border-transparent', // Default state
            focused && 'border-survey-border-interactive',
            !focused && 'group-has-[:focus-visible]/survey-input:border-survey-border-interactive',
            selected && focused && 'border-survey-border-selected',
            selected && 'group-has-[:focus-visible]/survey-input:border-survey-border-selected',
          )}
        >
          <div
            className={cn(
              'rounded-lg border bg-transparent transition-all w-full',
              // Inner frame logic matching TextAnswer
              focused ? 'border' : 'group-has-[:focus-visible]/survey-input:border',
              selected 
                ? (error ? 'border-survey-destructive' : (focused ? 'border' : 'border-2 border-survey-border-selected')) 
                : (error ? 'border-survey-destructive' : 'border-survey-border-interactive'),
              selected && focused && 'border-survey-border-selected border'
            )}
          >
            <textarea
              className={cn(
                'w-full min-h-[100px] bg-transparent px-2 py-1.5 text-survey-body font-survey-regular focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 text-survey-foreground font-survey resize-none',
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

OpenEndAnswer.displayName = 'OpenEndAnswer';

export { OpenEndAnswer };
