import type { Meta, StoryObj } from "@storybook/react"
import { TrendBadge } from "./TrendBadge"

const meta: Meta<typeof TrendBadge> = {
    title: "ShadCn/Dashboard UI/Trend Badge",
    component: TrendBadge,
    parameters: {
        layout: "centered",
        docs: {
            description: {
                component: `
**TrendBadge** is a compact inline badge used inside StatsCard to communicate directional change.

### Props

| Prop | Type | Description |
|------|------|-------------|
| \`type\` | \`"positive" \\| "negative"\` | Controls color and arrow direction |
| \`value\` | \`number\` | Percentage value displayed (e.g. \`15.1\` → "+15.1%") |

### Behavior in StatsCard

- \`positive\` → green badge with upward arrow (↑)
- \`negative\` → red badge with downward arrow (↓)
- When \`type\` is \`"neutral"\`, **no TrendBadge is rendered** — the StatsCard uses plain text instead
- Non-neutral trends also trigger an \`ArrowUpRight\` circular outline button in the card header
                `,
            },
        },
    },
    argTypes: {
        type: {
            control: "select",
            options: ["positive", "negative"],
        },
        value: {
            control: "number",
        },
    },
}

export default meta
type Story = StoryObj<typeof TrendBadge>

export const Positive: Story = {
    args: {
        type: "positive",
        value: 15.1,
    },
}

export const Negative: Story = {
    args: {
        type: "negative",
        value: 2,
    },
}

export const AllVariants: Story = {
    name: "All Variants",
    render: () => (
        <div className="flex items-center gap-4">
            <TrendBadge type="positive" value={15.1} />
            <TrendBadge type="negative" value={2} />
            <TrendBadge type="positive" value={0.4} />
            <TrendBadge type="negative" value={8.3} />
        </div>
    ),
}
