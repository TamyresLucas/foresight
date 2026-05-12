import type { Meta, StoryObj } from '@storybook/react'
import { useEffect, useRef, useState } from 'react'
import type { DateRange } from 'react-day-picker'
import { Calendar } from './Calendar'

const hslChannelsToRgb = (hslChannels: string): [number, number, number] => {
  const parts = hslChannels.trim().split(/\s+/).map((v) => parseFloat(v.replace('%', '')))
  const [h = 0, s = 0, l = 50] = parts
  const sNorm = s / 100
  const lNorm = l / 100
  const c = (1 - Math.abs(2 * lNorm - 1)) * sNorm
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1))
  const m = lNorm - c / 2
  const segment = Math.floor(h / 60) % 6
  const [r1, g1, b1] = [
    [c, x, 0],
    [x, c, 0],
    [0, c, x],
    [0, x, c],
    [x, 0, c],
    [c, 0, x],
  ][segment]
  return [
    Math.round((r1 + m) * 255),
    Math.round((g1 + m) * 255),
    Math.round((b1 + m) * 255),
  ]
}

const sRgbToLinear = (channel: number): number => {
  const c = channel / 255
  return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
}

const relativeLuminance = ([r, g, b]: [number, number, number]): number =>
  0.2126 * sRgbToLinear(r) + 0.7152 * sRgbToLinear(g) + 0.0722 * sRgbToLinear(b)

/**
 * Picks the foreground that matches design-system convention (prefer white)
 * while still meeting WCAG AA. Falls back to black only when white fails.
 */
const computeForegroundChannels = (hslChannels: string): string => {
  const rgb = hslChannelsToRgb(hslChannels)
  const lum = relativeLuminance(rgb)
  const whiteContrast = (1 + 0.05) / (lum + 0.05)
  return whiteContrast >= 4.5 ? '0 0% 100%' : '0 0% 0%'
}

const ThemedFrame = ({
  primary = '233 86% 64%',
  children,
}: {
  primary?: string
  children: React.ReactNode
}) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const el = ref.current
    el.style.setProperty('--survey-primary', primary)
    el.style.setProperty('--survey-primary-foreground', computeForegroundChannels(primary))
  }, [primary])

  return (
    <div
      ref={ref}
      data-survey-theme
      className="p-8 bg-survey-background rounded-lg"
    >
      {children}
    </div>
  )
}

const meta = {
  title: 'Survey Rendering/Calendar',
  component: Calendar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Calendar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const [selected, setSelected] = useState<Date | undefined>(new Date())
    return (
      <ThemedFrame>
        <Calendar mode="single" selected={selected} onSelect={setSelected} />
      </ThemedFrame>
    )
  },
}

export const Range: Story = {
  render: () => {
    const today = new Date()
    const defaultTo = new Date(today)
    defaultTo.setDate(defaultTo.getDate() + 7)

    const [range, setRange] = useState<DateRange | undefined>({
      from: today,
      to: defaultTo,
    })
    return (
      <ThemedFrame>
        <Calendar mode="range" selected={range} onSelect={setRange} />
      </ThemedFrame>
    )
  },
}

export const Multiple: Story = {
  render: () => {
    const [selected, setSelected] = useState<Date[] | undefined>([
      new Date(),
      new Date(new Date().setDate(new Date().getDate() + 3)),
      new Date(new Date().setDate(new Date().getDate() + 7)),
    ])
    return (
      <ThemedFrame>
        <Calendar mode="multiple" selected={selected} onSelect={setSelected} />
      </ThemedFrame>
    )
  },
}

export const WithDisabledDates: Story = {
  render: () => {
    const today = new Date()
    const [selected, setSelected] = useState<Date | undefined>(today)
    const lowerBound = new Date(today)
    lowerBound.setDate(lowerBound.getDate() - 14)
    const upperBound = new Date(today)
    upperBound.setDate(upperBound.getDate() + 14)
    return (
      <ThemedFrame>
        <Calendar
          mode="single"
          selected={selected}
          onSelect={setSelected}
          disabled={(date) => date < lowerBound || date > upperBound}
        />
      </ThemedFrame>
    )
  },
}

export const WithBrandOverride: Story = {
  render: () => {
    const [selected, setSelected] = useState<Date | undefined>(new Date())
    return (
      <ThemedFrame primary="348 89% 55%">
        <Calendar mode="single" selected={selected} onSelect={setSelected} />
      </ThemedFrame>
    )
  },
}

const ForceFocusStyle = () => (
  <style>{`
    [data-force-focus] .rdp-button:focus {
      outline: none;
      box-shadow: 0 0 0 2px hsl(var(--survey-background)), 0 0 0 4px hsl(var(--survey-border-interactive));
    }
    [data-force-focus] .rdp-button[aria-selected="true"]:focus {
      box-shadow: 0 0 0 2px hsl(var(--survey-background)), 0 0 0 4px hsl(var(--survey-border-selected));
    }
    [data-force-focus] [aria-label="Select month"]:focus,
    [data-force-focus] [aria-label="Select year"]:focus {
      outline: none;
      box-shadow: 0 0 0 2px hsl(var(--survey-background)), 0 0 0 4px hsl(var(--survey-border-interactive));
    }
    [data-force-focus] [aria-label="Select month"][data-state="open"]:focus,
    [data-force-focus] [aria-label="Select year"][data-state="open"]:focus {
      box-shadow: 0 0 0 2px hsl(var(--survey-background)), 0 0 0 4px hsl(var(--survey-border-selected));
    }
    [data-force-focus] [aria-label="Previous month"]:focus,
    [data-force-focus] [aria-label="Next month"]:focus {
      outline: none;
      box-shadow: 0 0 0 2px hsl(var(--survey-background)), 0 0 0 4px hsl(var(--survey-border-interactive));
    }
  `}</style>
)

export const Focused: Story = {
  name: 'Focused (unselected day)',
  render: () => {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
      const timer = setTimeout(() => {
        const days = containerRef.current?.querySelectorAll('.rdp-button')
        const unselected = Array.from(days || []).find(
          (b) => b.getAttribute('aria-selected') !== 'true' && !b.hasAttribute('disabled') && /^\d+$/.test(b.textContent?.trim() || ''),
        ) as HTMLElement
        unselected?.focus()
      }, 100)
      return () => clearTimeout(timer)
    }, [])

    return (
      <ThemedFrame>
        <ForceFocusStyle />
        <div ref={containerRef} data-force-focus>
          <Calendar mode="single" />
        </div>
      </ThemedFrame>
    )
  },
}

export const FocusedAndSelected: Story = {
  name: 'Focused + Selected day',
  render: () => {
    const containerRef = useRef<HTMLDivElement>(null)
    const [selected, setSelected] = useState<Date | undefined>(new Date())

    useEffect(() => {
      const timer = setTimeout(() => {
        const days = containerRef.current?.querySelectorAll('.rdp-button')
        const selectedDay = Array.from(days || []).find(
          (b) => b.getAttribute('aria-selected') === 'true',
        ) as HTMLElement
        selectedDay?.focus()
      }, 100)
      return () => clearTimeout(timer)
    }, [])

    return (
      <ThemedFrame>
        <ForceFocusStyle />
        <div ref={containerRef} data-force-focus>
          <Calendar mode="single" selected={selected} onSelect={setSelected} />
        </div>
      </ThemedFrame>
    )
  },
}

export const FocusedNavButton: Story = {
  name: 'Focused (nav button)',
  render: () => {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
      const timer = setTimeout(() => {
        const prevBtn = containerRef.current?.querySelector('[aria-label="Previous month"]') as HTMLElement
        prevBtn?.focus()
      }, 100)
      return () => clearTimeout(timer)
    }, [])

    return (
      <ThemedFrame>
        <ForceFocusStyle />
        <div ref={containerRef} data-force-focus>
          <Calendar mode="single" />
        </div>
      </ThemedFrame>
    )
  },
}

export const FocusedMonthDropdown: Story = {
  name: 'Focused (month dropdown)',
  render: () => {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
      const timer = setTimeout(() => {
        const trigger = containerRef.current?.querySelector('[aria-label="Select month"]') as HTMLElement
        trigger?.focus()
      }, 100)
      return () => clearTimeout(timer)
    }, [])

    return (
      <ThemedFrame>
        <ForceFocusStyle />
        <div ref={containerRef} data-force-focus>
          <Calendar mode="single" />
        </div>
      </ThemedFrame>
    )
  },
}

export const FocusedAndSelectedMonthDropdown: Story = {
  name: 'Focused + Selected (month dropdown open)',
  render: () => {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
      const timer = setTimeout(() => {
        const trigger = containerRef.current?.querySelector('[aria-label="Select month"]') as HTMLElement
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
          <Calendar mode="single" />
        </div>
      </ThemedFrame>
    )
  },
}

export const FocusedYearDropdown: Story = {
  name: 'Focused (year dropdown)',
  render: () => {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
      const timer = setTimeout(() => {
        const trigger = containerRef.current?.querySelector('[aria-label="Select year"]') as HTMLElement
        trigger?.focus()
      }, 100)
      return () => clearTimeout(timer)
    }, [])

    return (
      <ThemedFrame>
        <ForceFocusStyle />
        <div ref={containerRef} data-force-focus>
          <Calendar mode="single" />
        </div>
      </ThemedFrame>
    )
  },
}

export const FocusedAndSelectedYearDropdown: Story = {
  name: 'Focused + Selected (year dropdown open)',
  render: () => {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
      const timer = setTimeout(() => {
        const trigger = containerRef.current?.querySelector('[aria-label="Select year"]') as HTMLElement
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
          <Calendar mode="single" />
        </div>
      </ThemedFrame>
    )
  },
}
