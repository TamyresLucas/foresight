'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

export interface TextAnswerProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  selected?: boolean;
  focused?: boolean;
}

const TextAnswer = React.forwardRef<HTMLInputElement, TextAnswerProps>(
  ({ className, selected, focused = false, onBlur, ...props }, ref) => {
    const [internalSelected, setInternalSelected] = React.useState(false);
    const isSelected = selected ?? internalSelected;

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
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
            'group-data-[selected=false]/survey-input:group-has-[:focus-visible]/survey-input:p-[2px]',
            'group-data-[selected=false]/survey-input:group-has-[:focus-visible]/survey-input:border-2',
            'group-data-[selected=false]/survey-input:group-has-[:focus-visible]/survey-input:border-survey-border-interactive',
            focused && 'p-[2px] border-2 border-survey-border-interactive',
            focused && isSelected && 'border-survey-border-selected',
          )}
        >
          <div
            className={cn(
              'flex w-full h-10 px-2 py-1.5 items-center gap-[10px] rounded-lg border bg-transparent transition-all',
              'border-survey-border-interactive',
              'group-data-[selected=true]/survey-input:border-survey-border-selected group-data-[selected=true]/survey-input:border-2',
              'group-has-[:focus-visible]/survey-input:border',
              focused && 'border',
            )}
          >
            <input
              type="text"
              className={cn(
                'w-full bg-transparent text-survey-body font-survey-regular focus-visible:outline-none text-survey-foreground font-survey',
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

TextAnswer.displayName = 'TextAnswer';

export { TextAnswer };
