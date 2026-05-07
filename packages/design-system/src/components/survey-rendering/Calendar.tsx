'use client'

import * as React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { DayPicker } from 'react-day-picker'
import { cn } from '@/lib/utils'

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn('p-3 font-survey', className)}
      classNames={{
        months: 'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0',
        month: 'space-y-4',
        caption: 'flex justify-center pt-1 relative items-center',
        caption_label: 'text-survey-base font-survey-regular text-survey-foreground',
        nav: 'space-x-1 flex items-center',
        nav_button: cn(
          'h-7 w-7 bg-transparent p-0 inline-flex items-center justify-center',
          'rounded-survey-sm border border-survey-border-interactive',
          'text-survey-foreground hover:bg-survey-muted-background',
          'disabled:opacity-50',
        ),
        nav_button_previous: 'absolute left-1',
        nav_button_next: 'absolute right-1',
        table: 'w-full border-collapse space-y-1',
        head_row: 'flex',
        head_cell: 'text-survey-muted-foreground rounded-survey-sm w-9 font-survey-regular text-[0.75rem]',
        row: 'flex w-full mt-2',
        cell: cn(
          'h-9 w-9 text-center text-[0.875rem] p-0 relative',
          '[&:has([aria-selected].day-outside)]:bg-survey-muted-background/50',
          '[&:has([aria-selected])]:bg-transparent',
          'focus-within:relative focus-within:z-20',
          // Range border drawn as an absolutely-positioned overlay so the
          // day button keeps its natural 36×36 size (no overflow).
          // Middle cells: continuous top/bottom border.
          '[&:has(.day-range-middle)]:before:content-[""] [&:has(.day-range-middle)]:before:absolute [&:has(.day-range-middle)]:before:inset-0',
          '[&:has(.day-range-middle)]:before:border-y [&:has(.day-range-middle)]:before:border-survey-primary',
          '[&:has(.day-range-middle)]:before:pointer-events-none',
          // Start cell: top/bottom + left border, rounded outer-left corners.
          '[&:has(.day-range-start)]:before:content-[""] [&:has(.day-range-start)]:before:absolute [&:has(.day-range-start)]:before:inset-0',
          '[&:has(.day-range-start)]:before:border-y [&:has(.day-range-start)]:before:border-l [&:has(.day-range-start)]:before:border-survey-primary',
          '[&:has(.day-range-start)]:before:rounded-l-[var(--survey-day-radius)] [&:has(.day-range-start)]:before:pointer-events-none',
          // End cell: top/bottom + right border, rounded outer-right corners.
          '[&:has(.day-range-end)]:before:content-[""] [&:has(.day-range-end)]:before:absolute [&:has(.day-range-end)]:before:inset-0',
          '[&:has(.day-range-end)]:before:border-y [&:has(.day-range-end)]:before:border-r [&:has(.day-range-end)]:before:border-survey-primary',
          '[&:has(.day-range-end)]:before:rounded-r-[var(--survey-day-radius)] [&:has(.day-range-end)]:before:pointer-events-none',
        ),
        day: cn(
          'relative z-10 h-9 w-9 p-0 font-survey-regular inline-flex items-center justify-center',
          'rounded-[var(--survey-day-radius)] text-survey-foreground',
          'hover:bg-survey-muted-background',
          'aria-selected:opacity-100',
        ),
        day_selected: cn(
          'bg-survey-primary text-survey-primary-foreground font-survey-semibold',
          'hover:bg-survey-primary hover:text-survey-primary-foreground',
          'focus:bg-survey-primary focus:text-survey-primary-foreground',
        ),
        day_today: 'text-survey-foreground',
        day_outside: 'day-outside text-survey-muted-foreground',
        day_disabled: 'text-survey-muted-foreground/60 cursor-not-allowed',
        day_range_start: 'day-range-start',
        day_range_middle: cn(
          'day-range-middle',
          'aria-selected:bg-transparent aria-selected:text-survey-primary',
          'aria-selected:font-survey-semibold !rounded-none w-full',
        ),
        day_range_end: 'day-range-end',
        day_hidden: 'invisible',
        ...classNames,
      }}
      components={{
        IconLeft: () => <ChevronLeft className="h-4 w-4" />,
        IconRight: () => <ChevronRight className="h-4 w-4" />,
      }}
      {...props}
    />
  )
}
Calendar.displayName = 'Calendar'

export { Calendar }
