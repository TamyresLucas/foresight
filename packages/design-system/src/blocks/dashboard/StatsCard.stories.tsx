import type { Meta, StoryObj } from "@storybook/react"
import {
    BarChart3,
    TrendingDown,
    FileText,
    Users,
    Mail,
    CheckCircle,
    Clock,
} from "@/components/ui/icons"
import { StatsCard } from "./StatsCard"

const meta: Meta<typeof StatsCard> = {
    title: "ShadCn/Dashboard UI/Cards/Stats Cards",
    component: StatsCard,
    parameters: {
        layout: "padded",
        docs: {
            description: {
                component: `
**StatsCard** is the primary KPI/metric card used in survey dashboards. It supports multiple display modes depending on what data needs to be surfaced.

### Props overview

| Prop | Type | Description |
|------|------|-------------|
| \`title\` | \`string\` | Card label (e.g. "Quota", "Completed") |
| \`value\` | \`string\` | Main displayed value |
| \`trend\` | \`{ value: number; type: "positive" \\| "negative" \\| "neutral" }\` | Percentage change badge. Non-neutral trends also show an \`ArrowUpRight\` action button |
| \`comparison\` | \`ReactNode \\| string\` | Supporting text below the value (e.g. "+200 since last month") |
| \`items\` | \`StatsListItem[]\` | Renders a colored-dot list (e.g. Quota Strata breakdown) |
| \`metrics\` | \`StatsMetric[]\` | Renders a 2-column grid of label/value pairs (e.g. Distribution Status) |
| \`progress\` | \`StatsProgress[]\` | Renders a stacked segmented progress bar (e.g. survey response categories) |

### SemanticColor tokens

Used on \`items[].color\` and \`progress[].color\`:

| Token | Visual | Use case |
|-------|--------|----------|
| \`success\` | Green | Completed, positive outcomes |
| \`secondary\` | Teal / mint | Drop Outs, neutral secondary |
| \`primary\` | Brand blue | Quota met / primary category |
| \`warning\` | Amber | Half-closed, at-risk |
| \`destructive\` | Red | — |
| \`muted\` | Grey | Subdued data |
| \`chart4\` | Purple | Quota Met/Closed |
| \`chart8\` | Grey | Screened out |
| \`negative\` | Red | Interrupted / errors |

### Arrow button

An \`ArrowUpRight\` circular outline button is automatically rendered in the card header **only when** \`trend.type\` is \`"positive"\` or \`"negative"\`. It does not appear on neutral-trend or trendless cards.

### List item badges

Each item in the \`items\` array can carry a \`badge\` string and \`badgeVariant\` to communicate status inline next to the label:

| Status | Variant |
|--------|---------|
| Open | \`secondary\` |
| Closed | \`success\` |
| Half-closed | \`warning\` |
                `,
            },
        },
    },
    argTypes: {
        trend: {
            control: "object",
            description: "Trend indicator showing change percentage and direction",
        },
    },
}

export default meta
type Story = StoryObj<typeof StatsCard>

// ============================================================================
// Variant 1: Simple with Positive Trend
// ============================================================================

/**
 * Basic stats card showing a value with a positive trend indicator.
 * Ideal for metrics showing growth, like "Total Responses" or "Active Users".
 */
export const SimpleWithPositiveTrend: Story = {
    args: {
        title: "Total Responses",
        value: "122,380",
        trend: { value: 15.1, type: "positive" },
        comparison: <><span className="font-semibold text-success">+16,458</span><span className="text-muted-foreground"> since last month</span></>,
        icon: <BarChart3 />,
    },
}

// ============================================================================
// Variant: Learn More
// ============================================================================

/**
 * Stats card with the "Learn more" ArrowUpRight button in the top-right corner.
 * All other variants show a contextual icon instead.
 */
export const LearnMore: Story = {
    args: {
        title: "Total Responses",
        value: "122,380",
        trend: { value: 15.1, type: "positive" },
        comparison: <><span className="font-semibold text-success">+16,458</span><span className="text-muted-foreground"> since last month</span></>,
        learnMore: true,
    },
}

// ============================================================================
// Variant 2: Simple with Negative Trend
// ============================================================================

/**
 * Stats card showing a negative trend.
 * Use for metrics where a decrease is notable, like "Abandonment Rate".
 */
export const SimpleWithNegativeTrend: Story = {
    args: {
        title: "Abandonment Rate",
        value: "1.9M",
        trend: { value: 2, type: "negative" },
        comparison: <><span className="font-semibold text-destructive">-0.1M</span><span className="text-muted-foreground"> since last month</span></>,
        icon: <TrendingDown />,
    },
}

// ============================================================================
// Variant: Default (no trend badge)
// ============================================================================

/**
 * Default stats card with a value and comparison text, but no trend badge.
 * Use when directional change isn't relevant or available.
 */
export const Default: Story = {
    args: {
        title: "Active Surveys",
        value: "48,210",
        comparison: <span className="text-muted-foreground">last synced Mar 20, 2026</span>,
        icon: <FileText />,
    },
}

// ============================================================================
// Variant: With Header Stats
// ============================================================================

/**
 * Compact multi-metric card: instead of one big value in the body,
 * two or more labeled stats appear inline in the header (right-aligned).
 * Mirrors the "Bar Chart - Interactive" header pattern from shadcn charts.
 */
export const WithHeaderStats: Story = {
    args: {
        title: "Total Visitors",
        subtitle: "Jan - Jun 2024",
        headerStats: [
            { label: "Desktop", value: "24,828" },
            { label: "Mobile", value: "25,010" },
        ],
    },
}

// ============================================================================
// Variant 4: With List of Items
// ============================================================================

/**
 * Stats card displaying a Quota Strata breakdown. Each item shows a color-coded dot,
 * a label (demographic group), a completed/goal value (e.g. "320/500"), and an inline
 * status badge. Badge variants map to quota status: `secondary` = Open, `success` = Closed,
 * `warning` = Half-closed. The `chart4` color token (purple) is used for the Age Group stratum.
 */
export const WithList: Story = {
    args: {
        title: "Quota Strata",
        icon: <Users />,
        items: [
            { label: "Women", value: "320/500", color: "primary", badge: "Open", badgeVariant: "secondary" },
            { label: "Men", value: "200/200", color: "success", badge: "Closed", badgeVariant: "success" },
            { label: "Ethnicity", value: "80/150", color: "warning", badge: "Half-closed", badgeVariant: "warning" },
            { label: "Age Group", value: "45/100", color: "primary", badge: "Open", badgeVariant: "secondary" },
        ],
    },
}

// ============================================================================
// Variant 5b: With List — Grid Layout
// ============================================================================

/**
 * Same Quota Strata data as WithList, rendered as a 2-column grid.
 * Each cell shows the label + status badge on top and the value (number) below.
 */
export const WithListGrid: Story = {
    args: {
        title: "Quota Strata",
        icon: <Users />,
        itemsLayout: "grid",
        items: [
            { label: "Women", value: "320/500", color: "primary", badge: "Open", badgeVariant: "secondary" },
            { label: "Men", value: "200/200", color: "success", badge: "Closed", badgeVariant: "success" },
            { label: "Ethnicity", value: "80/150", color: "warning", badge: "Half-closed", badgeVariant: "warning" },
            { label: "Age Group", value: "45/100", color: "primary", badge: "Open", badgeVariant: "secondary" },
        ],
    },
}

// ============================================================================
// Variant 6: With Multiple Metrics
// ============================================================================

/**
 * Stats card displaying email distribution summary metrics in a 2-column grid.
 * Used for the "Distribution Status" panel — shows invitation funnel data:
 * total invitations sent, delivered, undelivered, and computed rates.
 * No trend or progress bar — data is purely informational.
 */
export const WithMultipleMetrics: Story = {
    args: {
        title: "Distribution Status",
        icon: <Mail />,
        metrics: [
            { label: "Total Invitations", value: "19" },
            { label: "Total Sent", value: "6,857" },
            { label: "Total Undelivered", value: "478" },
            { label: "Participation Rate", value: "1.46%" },
            { label: "Undelivered Rate", value: "6.97%" },
        ],
    },
}

// ============================================================================
// Variant 7: With Progress Bar
// ============================================================================

/**
 * Stats card showing total completed responses with a stacked progress bar breaking
 * down response disposition categories. Semantic chart color tokens are used:
 * - `success` (green) → Completed
 * - `chart4` (purple) → Quota Met/Closed
 * - `chart8` (grey) → Screened out
 * - `negative` (red) → Interrupted
 * - `secondary` (teal) → Drop Outs
 *
 * A positive trend shows the TrendBadge and the ArrowUpRight action button.
 */
export const WithProgressBar: Story = {
    args: {
        title: "Participation",
        value: "60%",
        comparison: <span className="text-muted-foreground">Completed</span>,
        icon: <CheckCircle />,
        progress: [
            { label: "Completed", percentage: 60, color: "success" },
            { label: "Drop Outs", percentage: 25, color: "primary" },
            { label: "Terminated", percentage: 15, color: "negative" },
        ],
    },
}

// ============================================================================
// Showcase: All Variants in Grid
// ============================================================================

/**
 * Showcase of all StatsCard variants in a responsive grid.
 * Demonstrates how cards look together in a dashboard layout.
 */
export const AllVariations: Story = {
    parameters: {
        layout: "fullscreen",
    },
    render: () => (
        <div className="space-y-4 p-6">
            <h2 className="mb-6 text-2xl font-bold">Dashboard Stats Cards</h2>
            <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                <StatsCard
                    title="Total Responses"
                    value="48,210"
                    icon={<FileText />}
                />
                <StatsCard
                    title="Response Rate"
                    value="34.2%"
                    trend={{ value: 4.8, type: "positive" }}
                    icon={<BarChart3 />}
                />
                <StatsCard
                    title="Completion Rate"
                    value="71.5%"
                    trend={{ value: 3.2, type: "negative" }}
                    icon={<CheckCircle />}
                />
                <StatsCard
                    title="Avg Completion Time"
                    value="4m 32s"
                    icon={<Clock />}
                />
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                <StatsCard
                    title="Quota Strata"
                    icon={<Users />}
                    itemsLayout="grid"
                    items={[
                        { label: "Women", value: "320/500", color: "primary", badge: "Open", badgeVariant: "secondary" },
                        { label: "Men", value: "200/200", color: "success", badge: "Closed", badgeVariant: "success" },
                        { label: "Ethnicity", value: "80/150", color: "warning", badge: "Half-closed", badgeVariant: "warning" },
                        { label: "Age Group", value: "45/100", color: "primary", badge: "Open", badgeVariant: "secondary" },
                    ]}
                />
                <StatsCard
                    title="Distribution Status"
                    icon={<Mail />}
                    metrics={[
                        { label: "Total Invitations", value: "19" },
                        { label: "Total Sent", value: "6,857" },
                        { label: "Total Undelivered", value: "478" },
                        { label: "Participation Rate", value: "1.46%" },
                        { label: "Undelivered Rate", value: "6.97%" },
                    ]}
                />
                <StatsCard
                    title="Participation"
                    value="60%"
                    comparison={<span className="text-muted-foreground">Completed</span>}
                    icon={<CheckCircle />}
                    progress={[
                        { label: "Completed", percentage: 60, color: "success" },
                        { label: "Drop Outs", percentage: 25, color: "primary" },
                        { label: "Terminated", percentage: 15, color: "negative" },
                    ]}
                />
            </div>
        </div>
    ),
}
