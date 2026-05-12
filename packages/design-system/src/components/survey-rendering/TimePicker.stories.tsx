import type { Meta, StoryObj } from '@storybook/react'
import { useEffect, useRef, useState } from 'react'
import { TimePicker, type TimePickerProps, type TimeValue } from './TimePicker'

const ThemedFrame = ({
  children,
  preset = 'default',
}: {
  children: React.ReactNode
  preset?: 'default' | 'corporate' | 'playful'
}) => {
  const presets = {
    default: {
      '--survey-primary': '233 86% 64%',
      '--survey-primary-foreground': '0 0% 100%',
      '--survey-radius-md': '0.5rem',
    },
    corporate: {
      '--survey-primary': '200 80% 50%',
      '--survey-primary-foreground': '0 0% 100%',
      '--survey-radius-md': '0rem',
    },
    playful: {
      '--survey-primary': '290 70% 55%',
      '--survey-primary-foreground': '0 0% 100%',
      '--survey-radius-md': '0.75rem',
    },
  }

  return (
    <div
      data-survey-theme
      style={presets[preset] as React.CSSProperties}
      className="p-8 bg-survey-background rounded-lg"
    >
      {children}
    </div>
  )
}

const meta = {
  title: 'Survey Rendering/TimePicker',
  component: TimePicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TimePicker>

export default meta
type Story = StoryObj<typeof meta>

export const Single: Story = {
  render: () => {
    const [value, setValue] = useState<TimeValue>({ hour: 10, minute: 30, period: 'AM' })
    return (
      <ThemedFrame>
        <TimePicker mode="single" value={value} onChange={(e) => setValue(e.target.value as TimeValue)} />
      </ThemedFrame>
    )
  },
}

export const Range: Story = {
  render: () => {
    const [value, setValue] = useState<TimePickerProps['value']>({
      from: { hour: 9, minute: 0, period: 'AM' },
      to: { hour: 5, minute: 30, period: 'PM' },
    })
    return (
      <ThemedFrame>
        <TimePicker mode="range" value={value} onChange={(e) => setValue(e.target.value)} />
      </ThemedFrame>
    )
  },
}

export const WithError: Story = {
  render: () => {
    const [value, setValue] = useState<TimeValue>({ hour: 3, minute: 15, period: 'PM' })
    return (
      <ThemedFrame>
        <TimePicker
          mode="single"
          value={value}
          onChange={(e) => setValue(e.target.value as TimeValue)}
          error="Please enter a valid time"
        />
      </ThemedFrame>
    )
  },
}

export const Disabled: Story = {
  render: () => {
    const [value] = useState<TimeValue>({ hour: 2, minute: 45, period: 'PM' })
    return (
      <ThemedFrame>
        <TimePicker mode="single" value={value} disabled />
      </ThemedFrame>
    )
  },
}

export const RangeWithError: Story = {
  render: () => {
    const [value, setValue] = useState<TimePickerProps['value']>({
      from: { hour: 8, minute: 0, period: 'AM' },
      to: { hour: 6, minute: 0, period: 'PM' },
    })
    return (
      <ThemedFrame>
        <TimePicker
          mode="range"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          error="End time must be after start time"
        />
      </ThemedFrame>
    )
  },
}

export const PresetCorporate: Story = {
  render: () => {
    const [value, setValue] = useState<TimeValue>({ hour: 11, minute: 0, period: 'AM' })
    return (
      <ThemedFrame preset="corporate">
        <TimePicker mode="single" value={value} onChange={(e) => setValue(e.target.value as TimeValue)} />
      </ThemedFrame>
    )
  },
}

export const PresetPlayful: Story = {
  render: () => {
    const [value, setValue] = useState<TimeValue>({ hour: 7, minute: 15, period: 'PM' })
    return (
      <ThemedFrame preset="playful">
        <TimePicker mode="single" value={value} onChange={(e) => setValue(e.target.value as TimeValue)} />
      </ThemedFrame>
    )
  },
}

export const RangePresetCorporate: Story = {
  render: () => {
    const [value, setValue] = useState<TimePickerProps['value']>({
      from: { hour: 9, minute: 0, period: 'AM' },
      to: { hour: 5, minute: 0, period: 'PM' },
    })
    return (
      <ThemedFrame preset="corporate">
        <TimePicker mode="range" value={value} onChange={(e) => setValue(e.target.value)} />
      </ThemedFrame>
    )
  },
}

const ForceFocusStyle = () => (
  <style>{`
    [data-force-focus] input:focus {
      outline: none;
      box-shadow: 0 0 0 2px hsl(var(--survey-background)), 0 0 0 4px hsl(var(--survey-border-interactive));
    }
    [data-force-focus] [aria-label="AM/PM"]:focus {
      outline: none;
      box-shadow: 0 0 0 2px hsl(var(--survey-background)), 0 0 0 4px hsl(var(--survey-border-interactive));
    }
    [data-force-focus] [aria-label="AM/PM"][data-state="open"] {
      border-color: hsl(var(--survey-border-selected));
    }
    [data-force-focus] [aria-label="AM/PM"][data-state="open"]:focus {
      box-shadow: 0 0 0 2px hsl(var(--survey-background)), 0 0 0 4px hsl(var(--survey-border-selected));
    }
  `}</style>
)

export const Focused: Story = {
  name: 'Focused (hour input)',
  render: () => {
    const containerRef = useRef<HTMLDivElement>(null)
    const [value, setValue] = useState<TimeValue>({ hour: 10, minute: 30, period: 'AM' })

    useEffect(() => {
      const timer = setTimeout(() => {
        const hourInput = containerRef.current?.querySelector('input[aria-label="Hour"]') as HTMLElement
        hourInput?.focus()
      }, 100)
      return () => clearTimeout(timer)
    }, [])

    return (
      <ThemedFrame>
        <ForceFocusStyle />
        <div ref={containerRef} data-force-focus>
          <TimePicker mode="single" value={value} onChange={(e) => setValue(e.target.value as TimeValue)} />
        </div>
      </ThemedFrame>
    )
  },
}

export const FocusedAmPm: Story = {
  name: 'Focused (AM/PM trigger)',
  render: () => {
    const containerRef = useRef<HTMLDivElement>(null)
    const [value, setValue] = useState<TimeValue>({ hour: 10, minute: 30, period: 'AM' })

    useEffect(() => {
      const timer = setTimeout(() => {
        const trigger = containerRef.current?.querySelector('[aria-label="AM/PM"]') as HTMLElement
        trigger?.focus()
      }, 100)
      return () => clearTimeout(timer)
    }, [])

    return (
      <ThemedFrame>
        <ForceFocusStyle />
        <div ref={containerRef} data-force-focus>
          <TimePicker mode="single" value={value} onChange={(e) => setValue(e.target.value as TimeValue)} />
        </div>
      </ThemedFrame>
    )
  },
}

export const FocusedAndSelectedAmPm: Story = {
  name: 'Focused + Selected (AM/PM open)',
  render: () => {
    const containerRef = useRef<HTMLDivElement>(null)
    const [value, setValue] = useState<TimeValue>({ hour: 10, minute: 30, period: 'AM' })

    useEffect(() => {
      const timer = setTimeout(() => {
        const trigger = containerRef.current?.querySelector('[aria-label="AM/PM"]') as HTMLElement
        if (trigger) {
          trigger.focus()
          trigger.click()
        }
      }, 100)
      return () => clearTimeout(timer)
    }, [])

    return (
      <ThemedFrame>
        <ForceFocusStyle />
        <div ref={containerRef} data-force-focus>
          <TimePicker mode="single" value={value} onChange={(e) => setValue(e.target.value as TimeValue)} />
        </div>
      </ThemedFrame>
    )
  },
}
