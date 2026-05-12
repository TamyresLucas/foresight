'use client'

import * as React from 'react'
import * as SelectPrimitive from '@radix-ui/react-select'
import { ChevronDown, ChevronLeft, ChevronRight, ChevronUp } from 'lucide-react'
import { DayPicker, useNavigation, type CaptionProps, type DayPickerProps } from 'react-day-picker'
import { cn } from '@/lib/utils'

export type CalendarProps = React.ComponentProps<typeof DayPicker> & {
  fromYear?: number
  toYear?: number
}

const triggerClass = cn(
  'inline-flex w-fit h-8 items-center justify-between gap-1 px-2 py-1',
  'rounded-survey-md border border-survey-border-interactive bg-transparent',
  'text-survey-body font-survey-regular text-survey-foreground',
  'outline-none transition-colors hover:bg-survey-muted-background',
  'data-[state=open]:border-survey-border-selected',
  'focus-visible:outline-none',
  'focus-visible:ring-2 focus-visible:ring-survey-border-interactive',
  'focus-visible:ring-offset-2 focus-visible:ring-offset-survey-background',
  'data-[state=open]:focus-visible:ring-survey-border-selected',
)

const contentClass = cn(
  'z-50 max-h-[240px] min-w-[var(--radix-select-trigger-width)] overflow-hidden',
  'rounded-survey-md border border-survey-border-muted bg-survey-background',
  'font-survey shadow-sm',
)

const itemClass = cn(
  'relative flex w-full cursor-pointer select-none items-center',
  'rounded-sm py-2 px-3 text-survey-body font-survey-regular text-survey-foreground outline-none',
  'data-[highlighted]:bg-survey-muted-background',
  'data-[highlighted]:ring-2 data-[highlighted]:ring-survey-border-interactive data-[highlighted]:ring-inset',
  'data-[state=checked]:font-bold data-[state=checked]:text-survey-primary',
  'data-[highlighted][data-state=checked]:ring-survey-border-selected',
  'data-[disabled]:opacity-50 data-[disabled]:text-survey-muted-foreground data-[disabled]:cursor-not-allowed',
)

const navButtonClass = cn(
  'h-7 w-7 inline-flex items-center justify-center bg-transparent p-0',
  'rounded-survey-sm border border-survey-border-interactive',
  'text-survey-foreground hover:bg-survey-muted-background',
  'focus-visible:outline-none',
  'focus-visible:ring-2 focus-visible:ring-survey-border-interactive',
  'focus-visible:ring-offset-2 focus-visible:ring-offset-survey-background',
  'disabled:opacity-50 disabled:cursor-not-allowed',
)

type SurveySelectProps = {
  value: string
  onValueChange: (value: string) => void
  ariaLabel: string
  options: { value: string; label: string }[]
}

function SurveySelect({ value, onValueChange, ariaLabel, options }: SurveySelectProps) {
  const [open, setOpen] = React.useState(false)
  return (
    <SelectPrimitive.Root value={value} onValueChange={onValueChange} open={open} onOpenChange={setOpen}>
      <SelectPrimitive.Trigger aria-label={ariaLabel} className={triggerClass}>
        <SelectPrimitive.Value />
        <SelectPrimitive.Icon asChild>
          {open ? (
            <ChevronUp size={16} className="flex-shrink-0 text-survey-foreground" />
          ) : (
            <ChevronDown size={16} className="flex-shrink-0 text-survey-foreground" />
          )}
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>
      <SelectPrimitive.Portal>
        <SelectPrimitive.Content position="popper" sideOffset={4} className={contentClass}>
          <SelectPrimitive.Viewport className="p-1">
            {options.map((opt) => (
              <SelectPrimitive.Item key={opt.value} value={opt.value} className={itemClass}>
                <SelectPrimitive.ItemText>{opt.label}</SelectPrimitive.ItemText>
              </SelectPrimitive.Item>
            ))}
          </SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  )
}

interface CalendarCaptionProps extends CaptionProps {
  fromYear: number
  toYear: number
  locale?: DayPickerProps['locale']
}

function CalendarCaption({ displayMonth, fromYear, toYear, locale }: CalendarCaptionProps) {
  const { goToMonth, previousMonth, nextMonth } = useNavigation()

  const monthOptions = React.useMemo(
    () =>
      Array.from({ length: 12 }, (_, i) => ({
        value: String(i),
        label: new Date(2000, i, 1).toLocaleString(locale?.code, { month: 'long' }),
      })),
    [locale?.code],
  )

  const yearOptions = React.useMemo(() => {
    const start = Math.min(fromYear, toYear)
    const end = Math.max(fromYear, toYear)
    const years: { value: string; label: string }[] = []
    for (let y = end; y >= start; y--) years.push({ value: String(y), label: String(y) })
    return years
  }, [fromYear, toYear])

  const handleMonthChange = (m: string) =>
    goToMonth(new Date(displayMonth.getFullYear(), Number(m), 1))
  const handleYearChange = (y: string) =>
    goToMonth(new Date(Number(y), displayMonth.getMonth(), 1))

  return (
    <div className="flex items-center justify-between pt-1">
      <button
        type="button"
        aria-label="Previous month"
        className={navButtonClass}
        disabled={!previousMonth}
        onClick={() => previousMonth && goToMonth(previousMonth)}
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
      <div className="flex items-center gap-2">
        <SurveySelect
          value={String(displayMonth.getMonth())}
          onValueChange={handleMonthChange}
          ariaLabel="Select month"
          options={monthOptions}
        />
        <SurveySelect
          value={String(displayMonth.getFullYear())}
          onValueChange={handleYearChange}
          ariaLabel="Select year"
          options={yearOptions}
        />
      </div>
      <button
        type="button"
        aria-label="Next month"
        className={navButtonClass}
        disabled={!nextMonth}
        onClick={() => nextMonth && goToMonth(nextMonth)}
      >
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  )
}

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  fromYear,
  toYear,
  locale,
  ...props
}: CalendarProps) {
  const currentYear = new Date().getFullYear()
  const resolvedFromYear = fromYear ?? currentYear - 100
  const resolvedToYear = toYear ?? currentYear + 10

  const CaptionComponent = React.useCallback(
    (captionProps: CaptionProps) => (
      <CalendarCaption
        {...captionProps}
        fromYear={resolvedFromYear}
        toYear={resolvedToYear}
        locale={locale}
      />
    ),
    [resolvedFromYear, resolvedToYear, locale],
  )

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      fromYear={resolvedFromYear}
      toYear={resolvedToYear}
      locale={locale}
      className={cn('p-3 font-survey', className)}
      classNames={{
        months: 'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0',
        month: 'space-y-4',
        table: 'w-full border-collapse space-y-1',
        head_row: 'flex',
        head_cell: 'text-survey-muted-foreground rounded-survey-sm w-9 font-survey-regular text-[0.75rem]',
        row: 'flex w-full mt-2',
        cell: cn(
          'h-9 w-9 text-center text-[0.875rem] p-0 relative',
          '[&:has([aria-selected].day-outside)]:bg-survey-muted-background/50',
          '[&:has([aria-selected])]:bg-transparent',
          'focus-within:relative focus-within:z-20',
          '[&:has(.day-range-middle)]:before:content-[""] [&:has(.day-range-middle)]:before:absolute [&:has(.day-range-middle)]:before:inset-0',
          '[&:has(.day-range-middle)]:before:border-y [&:has(.day-range-middle)]:before:border-survey-primary',
          '[&:has(.day-range-middle)]:before:pointer-events-none',
          '[&:has(.day-range-start)]:before:content-[""] [&:has(.day-range-start)]:before:absolute [&:has(.day-range-start)]:before:inset-0',
          '[&:has(.day-range-start)]:before:border-y [&:has(.day-range-start)]:before:border-l [&:has(.day-range-start)]:before:border-survey-primary',
          '[&:has(.day-range-start)]:before:rounded-l-[var(--survey-day-radius)] [&:has(.day-range-start)]:before:pointer-events-none',
          '[&:has(.day-range-end)]:before:content-[""] [&:has(.day-range-end)]:before:absolute [&:has(.day-range-end)]:before:inset-0',
          '[&:has(.day-range-end)]:before:border-y [&:has(.day-range-end)]:before:border-r [&:has(.day-range-end)]:before:border-survey-primary',
          '[&:has(.day-range-end)]:before:rounded-r-[var(--survey-day-radius)] [&:has(.day-range-end)]:before:pointer-events-none',
        ),
        day: cn(
          'relative z-10 h-9 w-9 p-0 font-survey-regular inline-flex items-center justify-center',
          'rounded-[var(--survey-day-radius)] text-survey-foreground',
          'hover:bg-survey-muted-background',
          'aria-selected:opacity-100',
          'focus-visible:outline-none',
          'focus-visible:ring-2 focus-visible:ring-survey-border-interactive',
          'focus-visible:ring-offset-2 focus-visible:ring-offset-survey-background',
        ),
        day_selected: cn(
          'bg-survey-primary text-survey-primary-foreground font-survey-semibold',
          'hover:bg-survey-primary hover:text-survey-primary-foreground',
          'focus-visible:bg-survey-primary focus-visible:text-survey-primary-foreground',
          'focus-visible:ring-survey-border-selected',
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
        Caption: CaptionComponent,
      }}
      {...props}
    />
  )
}
Calendar.displayName = 'Calendar'

export { Calendar }
