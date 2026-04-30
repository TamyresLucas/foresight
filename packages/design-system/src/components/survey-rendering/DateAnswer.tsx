'use client';

import * as React from 'react';
import { Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface DateAnswerProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: React.ReactNode;
  required?: boolean;
  selected?: boolean;
  focused?: boolean;
  error?: string;
}

const DateAnswer = React.forwardRef<HTMLInputElement, DateAnswerProps>(
  ({ className, label, required = false, selected, focused = false, error, onBlur, ...props }, ref) => {
    const [internalSelected, setInternalSelected] = React.useState(false);
    const isSelected = selected ?? internalSelected;

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
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
            focused && isSelected && 'border-survey-border-selected',
            error && 'border-transparent group-has-[:focus-visible]/survey-input:border-transparent'
          )}
        >
          <div
            className={cn(
              'flex w-full h-10 px-2 py-1.5 items-center gap-[10px] rounded-lg border bg-transparent transition-all relative',
              'border-survey-border-interactive', // Default
              'group-data-[selected=true]/survey-input:border-survey-border-selected group-data-[selected=true]/survey-input:border-2',
              'group-has-[:focus-visible]/survey-input:border',
              focused && 'border',
              error && 'border-2 border-survey-destructive'
            )}
          >
            <input
              type="date"
              className={cn(
                'w-full bg-transparent text-survey-body font-survey-regular focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 text-survey-foreground font-survey',
                '[&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:inset-0 [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:cursor-pointer',
                error && 'text-survey-destructive',
                className,
              )}
              ref={ref}
              onBlur={handleBlur}
              {...props}
            />
            <Calendar 
              size={18} 
              className="text-survey-foreground flex-shrink-0" 
              aria-hidden="true" 
            />
          </div>
        </div>

        {/* Error message */}
        {error && (
          <p className="text-xs font-survey font-survey-regular text-survey-destructive w-full">
            {error}
          </p>
        )}
      </div>
    );
  },
);

DateAnswer.displayName = 'DateAnswer';

export { DateAnswer };
