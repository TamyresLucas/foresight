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
  ({ className, label, required = false, selected, focused = false, error, onBlur, ...props }, ref) => {
    const [internalSelected, setInternalSelected] = React.useState(false);
    const isSelected = selected ?? internalSelected;

    const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
      setInternalSelected(false);
      onBlur?.(e);
    };

    return (
      <div 
        className="flex flex-col w-full group/survey-input"
        style={{ gap: 'var(--survey-margin)', marginBottom: 'var(--survey-margin)' }}
        onPointerDown={() => setInternalSelected(true)}
        data-selected={isSelected}
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
          Activated by 'focused' prop (for Storybook) OR browser :focus-visible (tab navigation).
          Click triggers 'selected' state (blue border).
        */}
        <div
          className={cn(
            'rounded-[calc(var(--radius)+2px)] p-[2px] border-2 w-full transition-all bg-transparent',
            'border-transparent', // Default state
            'group-data-[selected=false]/survey-input:group-has-[:focus-visible]/survey-input:border-survey-border-interactive',
            focused && 'border-survey-border-interactive',
            focused && isSelected && 'border-survey-border-selected'
          )}
        >
          <div
            className={cn(
              'rounded-lg border bg-transparent transition-all w-full',
              'border-survey-border-interactive', // Default
              'group-data-[selected=true]/survey-input:border-survey-border-selected group-data-[selected=true]/survey-input:border-2',
              'group-has-[:focus-visible]/survey-input:border',
              focused && 'border',
              error && 'border-survey-destructive'
            )}
          >
            <textarea
              className={cn(
                'w-full min-h-[100px] bg-transparent px-2 py-1.5 text-survey-body font-survey-regular focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 text-survey-foreground font-survey resize-none',
                error && 'text-survey-destructive',
                className,
              )}
              ref={ref}
              onBlur={handleBlur}
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
