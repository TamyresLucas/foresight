'use client'

import * as React from 'react'
import { Check, ChevronLeft, ChevronRight, X } from 'lucide-react'
import {
  addMonths,
  addYears,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isSameDay,
  isSameMonth,
  startOfMonth,
  startOfWeek,
} from 'date-fns'
import { cn } from '@/lib/utils'

export interface CalendarDateTimeProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'defaultValue'> {
  /** Currently selected date + time. */
  value?: Date
  /** Initial value for uncontrolled usage. */
  defaultValue?: Date
  onChange?: (next: Date) => void
  /** Step in minutes for the minutes column. Defaults to 1 (00–59). */
  minuteStep?: number
  cancelLabel?: string
  clearLabel?: string
  nowLabel?: string
  setLabel?: string
  onCancel?: () => void
  onClear?: () => void
  onSet?: (value: Date | null) => void
}

const navButtonClass = cn(
  'h-7 w-7 inline-flex items-center justify-center bg-transparent p-0',
  'rounded-[var(--component-button-radius)] text-survey-foreground',
  'hover:bg-survey-muted-background transition-colors',
  'focus-visible:outline-none',
  'focus-visible:ring-2 focus-visible:ring-survey-border-interactive',
  'focus-visible:ring-offset-2 focus-visible:ring-offset-survey-background',
)

const actionButtonClass = cn(
  'inline-flex items-center justify-center px-3 h-9 bg-transparent',
  'rounded-[var(--component-button-radius)]',
  'text-survey-body font-survey-semibold font-survey text-survey-foreground',
  'hover:bg-survey-muted-background transition-colors',
  'focus-visible:outline-none',
  'focus-visible:ring-2 focus-visible:ring-survey-border-interactive',
  'focus-visible:ring-offset-2 focus-visible:ring-offset-survey-background',
)

// Secondary (outline) icon button — used for confirm.
const iconButtonClass = cn(
  'inline-flex items-center justify-center h-9 w-9 bg-transparent',
  'rounded-[var(--component-button-radius)]',
  'border border-survey-border-interactive text-survey-foreground',
  'hover:bg-survey-muted-background transition-colors',
  'focus-visible:outline-none',
  'focus-visible:ring-2 focus-visible:ring-survey-border-interactive',
  'focus-visible:ring-offset-2 focus-visible:ring-offset-survey-background',
)

// Tertiary (ghost) icon button — no border or fill — used for cancel.
const ghostIconButtonClass = cn(
  'inline-flex items-center justify-center h-9 w-9 bg-transparent',
  'rounded-[var(--component-button-radius)]',
  'border border-transparent text-survey-foreground',
  'hover:bg-survey-muted-background transition-colors',
  'focus-visible:outline-none',
  'focus-visible:ring-2 focus-visible:ring-survey-border-interactive',
  'focus-visible:ring-offset-2 focus-visible:ring-offset-survey-background',
)

interface StepperProps {
  label: string
  onPrev: () => void
  onNext: () => void
  prevAriaLabel: string
  nextAriaLabel: string
}

function Stepper({ label, onPrev, onNext, prevAriaLabel, nextAriaLabel }: StepperProps) {
  return (
    <div className="flex items-center gap-1">
      <button type="button" aria-label={prevAriaLabel} className={navButtonClass} onClick={onPrev}>
        <ChevronLeft className="h-4 w-4" />
      </button>
      <span className="min-w-[3.5rem] text-center text-survey-body font-survey-regular font-survey text-survey-foreground">
        {label}
      </span>
      <button type="button" aria-label={nextAriaLabel} className={navButtonClass} onClick={onNext}>
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  )
}

interface TimeColumnProps {
  heading: string
  values: number[]
  selected: number
  onSelect: (value: number) => void
  ariaLabel: string
}

function TimeColumn({ heading, values, selected, onSelect, ariaLabel }: TimeColumnProps) {
  const listRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const container = listRef.current
    if (!container) return
    const node = container.querySelector<HTMLElement>('[data-selected="true"]')
    if (node) node.scrollIntoView({ block: 'center' })
  }, [selected])

  return (
    <div className="flex flex-col min-w-[4.5rem]">
      <span className="px-3 pb-2 text-center text-survey-body-sm font-survey-semibold font-survey text-survey-muted-foreground">
        {heading}
      </span>
      <div
        ref={listRef}
        role="listbox"
        aria-label={ariaLabel}
        className="flex flex-col overflow-y-auto max-h-[252px] px-1"
      >
        {values.map((v) => {
          const isSelected = v === selected
          return (
            <button
              key={v}
              type="button"
              role="option"
              aria-selected={isSelected}
              data-selected={isSelected ? 'true' : undefined}
              onClick={() => onSelect(v)}
              className={cn(
                'h-9 shrink-0 px-3 text-center text-survey-body font-survey font-survey-regular',
                'text-survey-foreground hover:bg-survey-muted-background transition-colors',
                'rounded-[var(--component-button-radius)]',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-survey-border-interactive',
                'focus-visible:ring-offset-2 focus-visible:ring-offset-survey-background',
                isSelected &&
                  'text-survey-primary font-survey-semibold border-y border-survey-primary rounded-none',
              )}
            >
              {String(v).padStart(2, '0')}
            </button>
          )
        })}
      </div>
    </div>
  )
}

const CalendarDateTime = React.forwardRef<HTMLDivElement, CalendarDateTimeProps>(
  (
    {
      value,
      defaultValue,
      onChange,
      minuteStep = 1,
      cancelLabel = 'Cancel',
      clearLabel = 'Clear',
      nowLabel = 'Now',
      setLabel = 'Set',
      onCancel,
      onClear,
      onSet,
      className,
      ...props
    },
    ref,
  ) => {
    const isControlled = value !== undefined
    const [internal, setInternal] = React.useState<Date | undefined>(defaultValue)
    const selected = isControlled ? value : internal

    // The month currently shown in the grid; follows the selection.
    const [displayMonth, setDisplayMonth] = React.useState<Date>(
      () => selected ?? new Date(),
    )

    React.useEffect(() => {
      if (selected) setDisplayMonth(startOfMonth(selected))
    }, [selected])

    const commit = React.useCallback(
      (next: Date) => {
        if (!isControlled) setInternal(next)
        onChange?.(next)
      },
      [isControlled, onChange],
    )

    const activeHour = selected ? selected.getHours() : 0
    const activeMinute = selected ? selected.getMinutes() : 0

    const weekdays = React.useMemo(() => {
      const start = startOfWeek(new Date())
      return Array.from({ length: 7 }, (_, i) =>
        format(new Date(start.getFullYear(), start.getMonth(), start.getDate() + i), 'EEEEE'),
      )
    }, [])

    const days = React.useMemo(() => {
      const gridStart = startOfWeek(startOfMonth(displayMonth))
      const gridEnd = endOfWeek(endOfMonth(displayMonth))
      return eachDayOfInterval({ start: gridStart, end: gridEnd })
    }, [displayMonth])

    const hours = React.useMemo(() => Array.from({ length: 24 }, (_, i) => i), [])
    const minutes = React.useMemo(
      () => Array.from({ length: Math.ceil(60 / minuteStep) }, (_, i) => i * minuteStep),
      [minuteStep],
    )

    const withDate = (base: Date | undefined, day: Date) => {
      const next = new Date(day)
      next.setHours(base ? base.getHours() : 0, base ? base.getMinutes() : 0, 0, 0)
      return next
    }

    const handleSelectDay = (day: Date) => commit(withDate(selected, day))
    const handleSelectHour = (h: number) => {
      const base = selected ?? new Date(displayMonth)
      const next = new Date(base)
      next.setHours(h)
      next.setSeconds(0, 0)
      commit(next)
    }
    const handleSelectMinute = (m: number) => {
      const base = selected ?? new Date(displayMonth)
      const next = new Date(base)
      next.setMinutes(m)
      next.setSeconds(0, 0)
      commit(next)
    }

    const handleNow = () => commit(new Date())
    const handleClear = () => {
      if (!isControlled) setInternal(undefined)
      onClear?.()
    }

    return (
      <div
        ref={ref}
        className={cn(
          'inline-flex flex-col font-survey bg-survey-background',
          'rounded-survey-md border border-survey-border-muted shadow-sm',
          className,
        )}
        {...props}
      >
        <div className="flex p-3 gap-2">
          {/* Calendar */}
          <div className="flex flex-col">
            <div className="flex items-center justify-between gap-4 pb-2">
              <Stepper
                label={format(displayMonth, 'yyyy')}
                onPrev={() => setDisplayMonth((m) => addYears(m, -1))}
                onNext={() => setDisplayMonth((m) => addYears(m, 1))}
                prevAriaLabel="Previous year"
                nextAriaLabel="Next year"
              />
              <Stepper
                label={format(displayMonth, 'MMM')}
                onPrev={() => setDisplayMonth((m) => addMonths(m, -1))}
                onNext={() => setDisplayMonth((m) => addMonths(m, 1))}
                prevAriaLabel="Previous month"
                nextAriaLabel="Next month"
              />
            </div>

            <div className="grid grid-cols-7">
              {weekdays.map((wd, i) => (
                <span
                  key={i}
                  className="h-9 w-9 inline-flex items-center justify-center text-survey-body-sm font-survey-regular text-survey-muted-foreground"
                >
                  {wd}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-7">
              {days.map((day) => {
                const outside = !isSameMonth(day, displayMonth)
                const isSelected = selected ? isSameDay(day, selected) : false
                return (
                  <button
                    key={day.toISOString()}
                    type="button"
                    aria-selected={isSelected}
                    aria-label={format(day, 'PPP')}
                    onClick={() => handleSelectDay(day)}
                    className={cn(
                      'h-9 w-9 inline-flex items-center justify-center',
                      'text-survey-body font-survey-regular',
                      'rounded-[var(--survey-day-radius)] transition-colors',
                      'hover:bg-survey-muted-background',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-survey-border-interactive',
                      'focus-visible:ring-offset-2 focus-visible:ring-offset-survey-background',
                      outside ? 'text-survey-muted-foreground' : 'text-survey-foreground',
                      isSelected &&
                        'bg-survey-primary text-survey-primary-foreground font-survey-semibold hover:bg-survey-primary hover:text-survey-primary-foreground focus-visible:ring-survey-border-selected',
                    )}
                  >
                    {day.getDate()}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Time columns */}
          <div className="flex border-l border-survey-border-muted pl-2">
            <TimeColumn
              heading="Hours"
              values={hours}
              selected={activeHour}
              onSelect={handleSelectHour}
              ariaLabel="Select hour"
            />
            <TimeColumn
              heading="Minutes"
              values={minutes}
              selected={activeMinute}
              onSelect={handleSelectMinute}
              ariaLabel="Select minute"
            />
          </div>
        </div>

        {/* Footer actions */}
        <div className="flex items-center justify-between gap-1 border-t border-survey-border-muted px-3 py-2">
          <div className="flex items-center gap-1">
            <button type="button" className={actionButtonClass} onClick={handleClear}>
              {clearLabel}
            </button>
            <button type="button" className={actionButtonClass} onClick={handleNow}>
              {nowLabel}
            </button>
          </div>
          <div className="flex items-center gap-1">
            <button
              type="button"
              aria-label={cancelLabel}
              className={ghostIconButtonClass}
              onClick={onCancel}
            >
              <X className="h-4 w-4" />
            </button>
            <button
              type="button"
              aria-label={setLabel}
              className={iconButtonClass}
              onClick={() => onSet?.(selected ?? null)}
            >
              <Check className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    )
  },
)
CalendarDateTime.displayName = 'CalendarDateTime'

export { CalendarDateTime }
