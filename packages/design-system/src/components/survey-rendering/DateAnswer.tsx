'use client';

import * as React from 'react';
import { Calendar as CalendarIcon } from 'lucide-react';
import { format, parse, isValid } from 'date-fns';
import { cn } from '@/lib/utils';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Calendar } from './Calendar';

const ISO_FORMAT = 'yyyy-MM-dd';
const DISPLAY_FORMAT = 'MMM d, yyyy';

const parseIso = (value: string | undefined): Date | undefined => {
  if (!value) return undefined;
  const d = parse(value, ISO_FORMAT, new Date());
  return isValid(d) ? d : undefined;
};

export interface DateAnswerProps
  extends Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    'value' | 'defaultValue' | 'onChange' | 'type'
  > {
  /** Selected date as ISO yyyy-MM-dd string */
  value?: string;
  defaultValue?: string;
  /**
   * Called when the user picks a date. Receives a synthetic event-like
   * object so existing `onChange={(e) => set(e.target.value)}` usages keep working.
   */
  onChange?: (event: { target: { value: string } }) => void;
  selected?: boolean;
  focused?: boolean;
  error?: string;
  placeholder?: string;
}

const DateAnswer = React.forwardRef<HTMLButtonElement, DateAnswerProps>(
  (
    {
      className,
      selected,
      focused = false,
      error,
      onBlur,
      onChange,
      value,
      defaultValue,
      disabled,
      placeholder = 'Select a date',
      ...props
    },
    ref,
  ) => {
    const [internalSelected, setInternalSelected] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const isSelected = selected ?? internalSelected;

    const [internalValue, setInternalValue] = React.useState<string>(
      typeof defaultValue === 'string' ? defaultValue : '',
    );
    const isControlled = value !== undefined;
    const currentValue = isControlled ? String(value) : internalValue;
    const selectedDate = parseIso(currentValue);

    const handleSelect = (date: Date | undefined) => {
      const next = date ? format(date, ISO_FORMAT) : '';
      if (!isControlled) setInternalValue(next);
      onChange?.({ target: { value: next } });
      setOpen(false);
    };

    const handleOpenChange = (next: boolean) => {
      setOpen(next);
      if (next) {
        setInternalSelected(true);
      } else {
        setInternalSelected(false);
      }
    };

    return (
      <div
        className="flex flex-col w-fit group/survey-input"
        data-selected={isSelected}
      >
        <Popover open={open} onOpenChange={handleOpenChange}>
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
            <PopoverTrigger asChild>
              <button
                ref={ref}
                type="button"
                disabled={disabled}
                aria-invalid={error ? true : undefined}
                onBlur={(e) => {
                  // Don't reset selected when focus moves into the popover
                  if (!open) setInternalSelected(false);
                  onBlur?.(e);
                }}
                className={cn(
                  'flex w-fit min-w-[200px] h-10 px-2 py-1.5 items-center gap-[10px] rounded-lg border bg-transparent transition-all relative',
                  'border-survey-border-interactive text-survey-body font-survey-regular text-survey-foreground font-survey',
                  'focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
                  'group-data-[selected=true]/survey-input:border-survey-border-selected group-data-[selected=true]/survey-input:border-2',
                  'group-has-[:focus-visible]/survey-input:border',
                  focused && 'border',
                  className,
                )}
                {...props}
              >
                <span className="flex-1 text-left">
                  {selectedDate ? format(selectedDate, DISPLAY_FORMAT) : placeholder}
                </span>
                <CalendarIcon
                  size={18}
                  className="flex-shrink-0 text-survey-foreground"
                  aria-hidden="true"
                />
              </button>
            </PopoverTrigger>
          </div>
          <PopoverContent className="w-auto p-0 border-survey-border-muted" align="start" data-survey-theme>
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={handleSelect}
              defaultMonth={selectedDate ?? new Date()}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>
    );
  },
);

DateAnswer.displayName = 'DateAnswer';

export { DateAnswer };
