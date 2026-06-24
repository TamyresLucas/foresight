import type { Meta, StoryObj } from '@storybook/react'
import { useEffect, useRef, useState } from 'react'
import { CalendarDateTime } from './CalendarDateTime'

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
    <div ref={ref} data-survey-theme className="p-8 bg-survey-background rounded-lg">
      {children}
    </div>
  )
}

const meta = {
  title: 'Survey Rendering/CalendarDateTime',
  component: CalendarDateTime,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CalendarDateTime>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState<Date | undefined>(() => {
      const d = new Date(2026, 5, 23)
      d.setHours(16, 3, 0, 0)
      return d
    })
    return (
      <ThemedFrame>
        <CalendarDateTime value={value} onChange={setValue} />
      </ThemedFrame>
    )
  },
}

export const FiveMinuteSteps: Story = {
  render: () => {
    const [value, setValue] = useState<Date | undefined>(() => {
      const d = new Date(2026, 5, 23)
      d.setHours(9, 30, 0, 0)
      return d
    })
    return (
      <ThemedFrame>
        <CalendarDateTime value={value} onChange={setValue} minuteStep={5} />
      </ThemedFrame>
    )
  },
}

export const Empty: Story = {
  render: () => {
    const [value, setValue] = useState<Date | undefined>(undefined)
    return (
      <ThemedFrame>
        <CalendarDateTime value={value} onChange={setValue} />
      </ThemedFrame>
    )
  },
}

export const WithBrandOverride: Story = {
  render: () => {
    const [value, setValue] = useState<Date | undefined>(() => {
      const d = new Date(2026, 5, 23)
      d.setHours(16, 3, 0, 0)
      return d
    })
    return (
      <ThemedFrame primary="348 89% 55%">
        <CalendarDateTime value={value} onChange={setValue} />
      </ThemedFrame>
    )
  },
}
