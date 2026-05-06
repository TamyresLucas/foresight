'use client';

import * as React from 'react';
import { Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface DateAnswerProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  selected?: boolean;
  focused?: boolean;
  error?: string;
}

const DateAnswer = React.forwardRef<HTMLInputElement, DateAnswerProps>(
  ({ className, selected, focused = false, error, onBlur, onChange, value, defaultValue, ...props }, ref) => {
    const [internalSelected, setInternalSelected] = React.useState(false);
    const isSelected = selected ?? internalSelected;

    const [internalValue, setInternalValue] = React.useState<string>(
      typeof defaultValue === 'string' ? defaultValue : '',
    );
    const currentValue = value !== undefined ? String(value) : internalValue;
    const isEmpty = !currentValue;

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setInternalSelected(false);
      onBlur?.(e);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (value === undefined) {
        setInternalValue(e.target.value);
      }
      onChange?.(e);
    };

    return (
      <div
        className="flex flex-col w-fit group/survey-input"
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
              'flex w-fit h-10 px-2 py-1.5 items-center gap-[10px] rounded-lg border bg-transparent transition-all relative',
              'border-survey-border-interactive',
              'group-data-[selected=true]/survey-input:border-survey-border-selected group-data-[selected=true]/survey-input:border-2',
              'group-has-[:focus-visible]/survey-input:border',
              focused && 'border',
              error && 'border border-survey-destructive'
            )}
          >
            <input
              type="date"
              className={cn(
                'w-full bg-transparent text-survey-body font-survey-regular focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 text-survey-foreground font-survey',
                '[&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:inset-0 [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:cursor-pointer',
                isEmpty && '[&::-webkit-datetime-edit]:text-transparent',
                className,
              )}
              ref={ref}
              onBlur={handleBlur}
              onChange={handleChange}
              {...(value !== undefined ? { value } : { defaultValue })}
              {...props}
            />
            {isEmpty && (
              <span
                aria-hidden="true"
                className="pointer-events-none absolute left-2 text-survey-body font-survey-regular font-survey text-survey-foreground"
              >
                Select a date
              </span>
            )}
            <Calendar
              size={18}
              className="flex-shrink-0 text-survey-foreground"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    );
  },
);

DateAnswer.displayName = 'DateAnswer';

export { DateAnswer };
