'use client'

import * as React from 'react'
import * as SelectPrimitive from '@radix-ui/react-select'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { cn } from '@/lib/utils'

export type TimeValue = { hour: number; minute: number; period: 'AM' | 'PM' }

export interface TimePickerProps extends React.HTMLAttributes<HTMLDivElement> {
  mode?: 'single' | 'range'
  value?: TimeValue | { from?: TimeValue; to?: TimeValue }
  defaultValue?: TimePickerProps['value']
  onChange?: (event: { target: { value: TimePickerProps['value'] } }) => void
  fromLabel?: string
  toLabel?: string
  disabled?: boolean
  error?: string
  id?: string
  'aria-label'?: string
}

const triggerClass = cn(
  'inline-flex w-fit h-8 items-center justify-between gap-1 px-2 py-1',
  'rounded-survey-md border border-survey-border-interactive bg-transparent',
  'text-survey-body font-survey-regular text-survey-foreground',
  'outline-none transition-colors hover:bg-survey-muted-background',
  'focus-visible:border-survey-border-selected',
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
  'data-[state=checked]:font-bold data-[state=checked]:text-survey-primary',
  'data-[disabled]:opacity-50 data-[disabled]:text-survey-muted-foreground data-[disabled]:cursor-not-allowed',
)

const inputClass = cn(
  'w-12 h-8 text-center rounded-survey-md border border-survey-border-interactive bg-transparent',
  'text-survey-body font-survey-regular text-survey-foreground',
  'outline-none transition-colors hover:bg-survey-muted-background',
  'focus-visible:border-survey-border-selected',
  'placeholder:text-survey-muted-foreground',
)

type PeriodSelectProps = {
  value: 'AM' | 'PM'
  onValueChange: (value: 'AM' | 'PM') => void
}

function PeriodSelect({ value, onValueChange }: PeriodSelectProps) {
  const [open, setOpen] = React.useState(false)
  const options = [
    { value: 'AM', label: 'AM' },
    { value: 'PM', label: 'PM' },
  ]

  return (
    <SelectPrimitive.Root value={value} onValueChange={onValueChange} open={open} onOpenChange={setOpen}>
      <SelectPrimitive.Trigger aria-label="AM/PM" className={triggerClass}>
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

interface TimeFieldProps {
  value: TimeValue
  onChange: (val: TimeValue) => void
  disabled?: boolean
  error?: boolean
}

function TimeField({ value, onChange, disabled, error }: TimeFieldProps) {
  const clampHour = (h: number) => Math.max(1, Math.min(12, h))
  const clampMinute = (m: number) => Math.max(0, Math.min(59, m))
  const padZero = (n: number) => String(n).padStart(2, '0')

  const handleHourChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const h = parseInt(e.target.value, 10) || 0
    onChange({ ...value, hour: clampHour(h) })
  }

  const handleHourBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const h = parseInt(e.target.value, 10) || 1
    e.target.value = padZero(clampHour(h))
    onChange({ ...value, hour: clampHour(h) })
  }

  const handleMinuteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const m = parseInt(e.target.value, 10) || 0
    onChange({ ...value, minute: clampMinute(m) })
  }

  const handleMinuteBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const m = parseInt(e.target.value, 10) || 0
    e.target.value = padZero(clampMinute(m))
    onChange({ ...value, minute: clampMinute(m) })
  }

  const handlePeriodChange = (p: 'AM' | 'PM') => {
    onChange({ ...value, period: p })
  }

  const borderClass = error ? 'border-survey-border-error' : ''

  return (
    <div className="flex items-center gap-2">
      <input
        type="text"
        inputMode="numeric"
        maxLength={2}
        value={padZero(value.hour)}
        onChange={handleHourChange}
        onBlur={handleHourBlur}
        disabled={disabled}
        aria-label="Hour"
        className={cn(inputClass, borderClass)}
      />
      <span aria-hidden className="text-survey-foreground">
        :
      </span>
      <input
        type="text"
        inputMode="numeric"
        maxLength={2}
        value={padZero(value.minute)}
        onChange={handleMinuteChange}
        onBlur={handleMinuteBlur}
        disabled={disabled}
        aria-label="Minute"
        className={cn(inputClass, borderClass)}
      />
      <PeriodSelect value={value.period} onValueChange={handlePeriodChange} />
    </div>
  )
}

const TimePicker = React.forwardRef<HTMLDivElement, TimePickerProps>(
  (
    {
      mode = 'single',
      value,
      defaultValue,
      onChange,
      fromLabel = 'From',
      toLabel = 'To',
      disabled = false,
      error,
      className,
      id,
      'aria-label': ariaLabel,
      ...props
    },
    ref,
  ) => {
    const [internalValue, setInternalValue] = React.useState<TimeValue | { from?: TimeValue; to?: TimeValue }>(
      defaultValue || (mode === 'single' ? { hour: 12, minute: 0, period: 'AM' } : { from: { hour: 12, minute: 0, period: 'AM' }, to: { hour: 12, minute: 0, period: 'AM' } }),
    )

    const currentValue = value !== undefined ? value : internalValue

    const handleChange = (newVal: TimeValue | { from?: TimeValue; to?: TimeValue }) => {
      setInternalValue(newVal)
      onChange?.({ target: { value: newVal } })
    }

    if (mode === 'single') {
      const singleValue = (currentValue as TimeValue) || { hour: 12, minute: 0, period: 'AM' }
      return (
        <div
          ref={ref}
          role="group"
          aria-label={ariaLabel || 'Time picker'}
          id={id}
          className={cn('flex flex-col gap-3', className)}
          {...props}
        >
          <TimeField value={singleValue} onChange={handleChange} disabled={disabled} error={!!error} />
          {error && (
            <p role="alert" className="text-survey-error text-survey-body-sm font-survey-regular">
              {error}
            </p>
          )}
        </div>
      )
    }

    const rangeValue = currentValue as { from?: TimeValue; to?: TimeValue }
    const fromVal = rangeValue.from || { hour: 12, minute: 0, period: 'AM' }
    const toVal = rangeValue.to || { hour: 12, minute: 0, period: 'AM' }

    return (
      <div
        ref={ref}
        role="group"
        aria-label={ariaLabel || 'Time range picker'}
        id={id}
        className={cn('flex flex-col gap-3', className)}
        {...props}
      >
        <div className="flex flex-col gap-2">
          <label className="text-survey-body font-survey-bold text-survey-foreground">{fromLabel}</label>
          <TimeField
            value={fromVal}
            onChange={(val) => handleChange({ ...rangeValue, from: val })}
            disabled={disabled}
            error={!!error}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-survey-body font-survey-bold text-survey-foreground">{toLabel}</label>
          <TimeField
            value={toVal}
            onChange={(val) => handleChange({ ...rangeValue, to: val })}
            disabled={disabled}
            error={!!error}
          />
        </div>
        {error && (
          <p role="alert" className="text-survey-error text-survey-body-sm font-survey-regular">
            {error}
          </p>
        )}
      </div>
    )
  },
)

TimePicker.displayName = 'TimePicker'

export { TimePicker }
