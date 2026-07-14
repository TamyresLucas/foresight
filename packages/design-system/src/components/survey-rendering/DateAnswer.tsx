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
    'value' | 'defaultValue' | 'onChange' | 'type' | 'disabled'
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
  placeholder?: string;
}

const DateAnswer = React.forwardRef<HTMLButtonElement, DateAnswerProps>(
  (
    {
      className,
      selected,
      focused = false,
      onBlur,
      onChange,
      value,
      defaultValue,
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
          <div className="rounded-[calc(var(--radius)+2px)] w-full transition-all bg-transparent">
            <PopoverTrigger asChild>
              <button
                ref={ref}
                type="button"
                onBlur={(e) => {
                  // Don't reset selected when focus moves into the popover
                  if (!open) setInternalSelected(false);
                  onBlur?.(e);
                }}
                className={cn(
                  'flex w-fit min-w-[200px] h-10 px-2 py-1.5 items-center gap-[10px] rounded-lg border bg-transparent transition-all relative',
                  'border-survey-border-interactive text-survey-body font-survey-regular text-survey-foreground font-survey',
                  'focus-visible:outline-none',
                  'hover:bg-survey-muted-background',
                  'group-data-[selected=true]/survey-input:border-survey-border-selected group-data-[selected=true]/survey-input:shadow-[inset_0_0_0_1px_hsl(var(--survey-border-selected))]',
                  // Focus halo as a ring (box-shadow): paint-only, so the field keeps
                  // its default-state dimensions — a border/padding halo would grow it.
                  'group-has-[:focus-visible]/survey-input:border group-has-[:focus-visible]/survey-input:!shadow-none',
                  'group-has-[:focus-visible]/survey-input:ring-2 group-has-[:focus-visible]/survey-input:ring-offset-2 group-has-[:focus-visible]/survey-input:ring-offset-survey-background group-has-[:focus-visible]/survey-input:ring-survey-border-interactive',
                  'group-data-[selected=true]/survey-input:group-has-[:focus-visible]/survey-input:ring-survey-border-selected',
                  focused && 'border !shadow-none ring-2 ring-offset-2 ring-offset-survey-background ring-survey-border-interactive',
                  focused && isSelected && 'ring-survey-border-selected',
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
