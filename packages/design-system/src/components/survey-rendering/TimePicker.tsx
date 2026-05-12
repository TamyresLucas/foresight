'use client'

import * as React from 'react'
import * as PopoverPrimitive from '@radix-ui/react-popover'
import { AlertCircle, ChevronDown, ChevronUp } from 'lucide-react'
import { cn } from '@/lib/utils'
import { DropdownPopUp } from './DropdownPopUp'

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
  'inline-flex w-fit h-10 items-center justify-between gap-1 px-2 py-1.5',
  'rounded-survey-md border border-survey-border-interactive bg-transparent',
  'text-survey-body font-survey-regular text-survey-foreground',
  'outline-none transition-colors hover:bg-survey-muted-background',
  'data-[state=open]:border-survey-border-selected',
  'focus-visible:outline-none',
  'focus-visible:ring-2 focus-visible:ring-survey-border-interactive',
  'focus-visible:ring-offset-2 focus-visible:ring-offset-survey-background',
  'data-[state=open]:focus-visible:ring-survey-border-selected',
)

// ─── TimeInput ───────────────────────────────────────────────────────────────
// Uses local display state so the user can type freely; commits to parent on blur.

interface TimeInputProps {
  value: string
  onCommit: (raw: string) => void
  error?: boolean
  disabled?: boolean
  'aria-label'?: string
  inputMode?: React.HTMLAttributes<HTMLInputElement>['inputMode']
  maxLength?: number
}

function TimeInput({ value: controlledValue, onCommit, error, disabled, ...props }: TimeInputProps) {
  const [localValue, setLocalValue] = React.useState(controlledValue)
  const [isPointerActive, setIsPointerActive] = React.useState(false)
  const [isFocused, setIsFocused] = React.useState(false)

  // Keep display in sync with controlled value when not actively editing
  React.useEffect(() => {
    if (!isFocused) setLocalValue(controlledValue)
  }, [controlledValue, isFocused])

  const isSelected = isPointerActive
  const isKeyboardFocused = isFocused && !isPointerActive

  return (
    <input
      type="text"
      value={localValue}
      onChange={(e) => setLocalValue(e.target.value.replace(/\D/g, ''))}
      onPointerDown={() => setIsPointerActive(true)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => {
        setIsPointerActive(false)
        setIsFocused(false)
        onCommit(localValue)
      }}
      disabled={disabled}
      className={cn(
        'w-12 h-8 text-center rounded-survey-md border bg-transparent',
        'text-survey-body font-survey-regular text-survey-foreground',
        'outline-none transition-all hover:bg-survey-muted-background',
        'focus-visible:outline-none',
        'placeholder:text-survey-muted-foreground',
        // default
        !error && !isSelected && 'border-survey-border-interactive',
        // selected (pointer click)
        !error && isSelected && 'border-2 border-survey-border-selected',
        // keyboard focused (not selected)
        !error && isKeyboardFocused && 'ring-2 ring-survey-border-interactive ring-offset-2 ring-offset-survey-background',
        // error
        error && 'border-survey-destructive',
      )}
      {...props}
    />
  )
}

// ─── PeriodSelect ─────────────────────────────────────────────────────────────

const periodOptions = [
  { value: 'AM', label: 'AM' },
  { value: 'PM', label: 'PM' },
]

type PeriodSelectProps = {
  value: 'AM' | 'PM'
  onValueChange: (value: 'AM' | 'PM') => void
  error?: boolean
}

function PeriodSelect({ value, onValueChange, error }: PeriodSelectProps) {
  const [open, setOpen] = React.useState(false)

  return (
    <PopoverPrimitive.Root open={open} onOpenChange={setOpen}>
      <PopoverPrimitive.Trigger
        aria-label="AM/PM"
        data-state={open ? 'open' : 'closed'}
        className={cn(triggerClass, error && !open && 'border-survey-destructive')}
      >
        {value}
        {open ? (
          <ChevronUp size={16} className="flex-shrink-0 text-survey-foreground" />
        ) : (
          <ChevronDown size={16} className="flex-shrink-0 text-survey-foreground" />
        )}
      </PopoverPrimitive.Trigger>
      <PopoverPrimitive.Portal>
        <PopoverPrimitive.Content
          sideOffset={4}
          align="start"
          className="z-50"
          onOpenAutoFocus={(e) => e.preventDefault()}
        >
          <DropdownPopUp
            options={periodOptions}
            selectedValue={value}
            showCheckmark={false}
            className="min-w-fit w-fit"
            onSelect={(v) => {
              onValueChange(v as 'AM' | 'PM')
              setOpen(false)
            }}
          />
        </PopoverPrimitive.Content>
      </PopoverPrimitive.Portal>
    </PopoverPrimitive.Root>
  )
}

// ─── TimeField ────────────────────────────────────────────────────────────────

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

  const handleHourCommit = (raw: string) => {
    const h = parseInt(raw, 10)
    onChange({ ...value, hour: clampHour(isNaN(h) ? value.hour : h) })
  }

  const handleMinuteCommit = (raw: string) => {
    const m = parseInt(raw, 10)
    onChange({ ...value, minute: clampMinute(isNaN(m) ? value.minute : m) })
  }

  const handlePeriodChange = (p: 'AM' | 'PM') => {
    onChange({ ...value, period: p })
  }

  return (
    <div className="flex items-center gap-2">
      <TimeInput
        value={padZero(value.hour)}
        onCommit={handleHourCommit}
        disabled={disabled}
        aria-label="Hour"
        inputMode="numeric"
        maxLength={2}
        error={error}
      />
      <span aria-hidden className="text-survey-foreground">:</span>
      <TimeInput
        value={padZero(value.minute)}
        onCommit={handleMinuteCommit}
        disabled={disabled}
        aria-label="Minute"
        inputMode="numeric"
        maxLength={2}
        error={error}
      />
      <PeriodSelect value={value.period} onValueChange={handlePeriodChange} error={error} />
    </div>
  )
}

// ─── TimePicker ───────────────────────────────────────────────────────────────

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
      defaultValue || (mode === 'single'
        ? { hour: 12, minute: 0, period: 'AM' }
        : { from: { hour: 12, minute: 0, period: 'AM' }, to: { hour: 12, minute: 0, period: 'AM' } }),
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
            <p role="alert" className="flex items-center gap-1 text-survey-body-sm font-survey-regular text-survey-destructive">
              <AlertCircle size={14} aria-hidden className="flex-shrink-0" />
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
          <p role="alert" className="flex items-center gap-1 text-survey-body-sm font-survey-regular text-survey-destructive">
            <AlertCircle size={14} aria-hidden className="flex-shrink-0" />
            {error}
          </p>
        )}
      </div>
    )
  },
)

TimePicker.displayName = 'TimePicker'

export { TimePicker }
