'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

export interface OpenEndAnswerProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  selected?: boolean;
  focused?: boolean;
  error?: string;
}

const OpenEndAnswer = React.forwardRef<HTMLTextAreaElement, OpenEndAnswerProps>(
  ({ className, selected, focused = false, error, onBlur, ...props }, ref) => {
    const [internalSelected, setInternalSelected] = React.useState(false);
    const isSelected = selected ?? internalSelected;

    const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
      setInternalSelected(false);
      onBlur?.(e);
    };

    return (
      <div
        className="flex flex-col w-full group/survey-input"
        onPointerDown={() => setInternalSelected(true)}
        data-selected={isSelected}
      >
        <div
          className={cn(
            'rounded-[calc(var(--radius)+2px)] w-full transition-all bg-transparent',
            !error && 'group-data-[selected=false]/survey-input:group-has-[:focus-visible]/survey-input:p-[2px]',
            !error && 'group-data-[selected=false]/survey-input:group-has-[:focus-visible]/survey-input:border-2',
            !error && 'group-data-[selected=false]/survey-input:group-has-[:focus-visible]/survey-input:border-survey-border-interactive',
            focused && !error && 'p-[2px] border-2 border-survey-border-interactive',
            focused && isSelected && !error && 'border-survey-border-selected',
          )}
        >
          <div
            className={cn(
              'rounded-lg border bg-transparent transition-all w-full',
              'border-survey-border-interactive',
              'group-data-[selected=true]/survey-input:border-survey-border-selected group-data-[selected=true]/survey-input:border-2',
              'group-has-[:focus-visible]/survey-input:border',
              focused && 'border',
              error && 'border border-survey-destructive'
            )}
          >
            <textarea
              className={cn(
                'w-full min-h-[100px] bg-transparent px-2 py-1.5 text-survey-body font-survey-regular focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 text-survey-foreground font-survey resize-none',
                className,
              )}
              ref={ref}
              onBlur={handleBlur}
              {...props}
            />
          </div>
        </div>
      </div>
    );
  },
);

OpenEndAnswer.displayName = 'OpenEndAnswer';

export { OpenEndAnswer };
