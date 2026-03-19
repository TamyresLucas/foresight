import type { Meta, StoryObj } from "@storybook/react"
import { StatsCard } from "./StatsCard"
import { Percent } from "../../components/ui/icons"

const meta: Meta<typeof StatsCard> = {
    title: "ShadCn/Dashboard UI/Cards/Hero Cards",
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
| \`variant\` | \`"default" \\| "primary"\` | \`primary\` renders with brand background and inverted text |
| \`trend\` | \`{ value: number; type: "positive" \\| "negative" \\| "neutral" }\` | Percentage change badge. Non-neutral trends also show an \`ArrowUpRight\` action button |
| \`comparison\` | \`ReactNode \\| string\` | Supporting text below the value (e.g. "+200 since last month") |
| \`icon\` | \`ReactNode\` | 16×16 icon rendered above the title — useful for neutral-trend cards to communicate category at a glance |
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
    },
}

// ============================================================================
// Variant 3: Primary
// ============================================================================

/**
 * Stats card with primary color background and contrasting text.
 * Used for the Quota status indicator — shows a simple state value ("Open", "Closed", etc.)
 * without a trend badge. No arrow button is rendered since there is no trend.
 */
export const Primary: Story = {
    args: {
        title: "Quota",
        value: "Open",
        variant: "primary",
    },
}

// ============================================================================
// Variant 4: Large Number Counter
// ============================================================================

/**
 * Stats card for large counters/totals.
 * Great for "Active Surveys", "Total Users", etc.
 */
export const LargeNumber: Story = {
    args: {
        title: "Active Surveys",
        value: "48,210",
        trend: { value: 3.7, type: "positive" },
        comparison: <><span className="font-semibold text-success">+1,730</span><span className="text-muted-foreground"> since last month</span></>,
    },
}

// ============================================================================
// Variant 5: Neutral Trend
// ============================================================================

/**
 * Stats card with a neutral (unchanged) trend. The TrendBadge shows 0% and the
 * ArrowUpRight action button is hidden — it only appears for positive or negative trends.
 * An `icon` is rendered above the title to communicate the metric category at a glance.
 */
export const NeutralTrend: Story = {
    args: {
        title: "Conversion Rate",
        value: "24.5%",
        trend: { value: 0, type: "neutral" },
        comparison: "No change since last month",
        icon: <Percent />,
    },
}

// ============================================================================
// Variant 6: With List of Items
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
        items: [
            { label: "Women", value: "320/500", color: "success", badge: "Open", badgeVariant: "secondary" },
            { label: "Men", value: "200/200", color: "primary", badge: "Closed", badgeVariant: "success" },
            { label: "Ethnicity", value: "80/150", color: "warning", badge: "Half-closed", badgeVariant: "warning" },
            { label: "Age Group", value: "45/100", color: "chart4", badge: "Open", badgeVariant: "secondary" },
        ],
    },
}

// ============================================================================
// Variant 7: With Multiple Metrics
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
// Variant 8: With Progress Bar
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
        title: "Completed",
        value: "5000",
        trend: { value: 12.5, type: "positive" },
        comparison: <><span className="font-semibold text-success">+200</span><span className="text-muted-foreground"> since last month</span></>,
        progress: [
            { label: "Completed", percentage: 38, color: "success" },
            { label: "Quota Met/Closed", percentage: 22, color: "chart4" },
            { label: "Screened out", percentage: 18, color: "chart8" },
            { label: "Interrupted", percentage: 12, color: "negative" },
            { label: "Drop Outs", percentage: 10, color: "secondary" },
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
        <div className="p-6">
            <h2 className="mb-6 text-2xl font-bold">Dashboard Stats Cards</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <StatsCard
                    title="Total Responses"
                    value="122,380"
                    trend={{ value: 15.1, type: "positive" }}
                    comparison={<><span className="font-semibold text-success">+16,458</span><span className="text-muted-foreground"> since last month</span></>}
                />
                <StatsCard
                    title="Abandonment Rate"
                    value="1.9M"
                    trend={{ value: 2, type: "negative" }}
                    comparison={<><span className="font-semibold text-destructive">-0.1M</span><span className="text-muted-foreground"> since last month</span></>}
                />
                <StatsCard
                    title="Quota"
                    value="Open"
                    variant="primary"
                />
                <StatsCard
                    title="Active Surveys"
                    value="48,210"
                    trend={{ value: 3.7, type: "positive" }}
                    comparison={<><span className="font-semibold text-success">+1,730</span><span className="text-muted-foreground"> since last month</span></>}
                />
                <StatsCard
                    title="Quota Strata"
                    items={[
                        { label: "Women", value: "320/500", color: "success", badge: "Open", badgeVariant: "secondary" },
                        { label: "Men", value: "200/200", color: "primary", badge: "Closed", badgeVariant: "success" },
                        { label: "Ethnicity", value: "80/150", color: "warning", badge: "Half-closed", badgeVariant: "warning" },
                        { label: "Age Group", value: "45/100", color: "chart4", badge: "Open", badgeVariant: "secondary" },
                    ]}
                />
                <StatsCard
                    title="Distribution Status"
                    metrics={[
                        { label: "Total Invitations", value: "19" },
                        { label: "Total Sent", value: "6,857" },
                        { label: "Total Undelivered", value: "478" },
                        { label: "Participation Rate", value: "1.46%" },
                        { label: "Undelivered Rate", value: "6.97%" },
                    ]}
                />
                <StatsCard
                    title="Completed"
                    value="5000"
                    trend={{ value: 12.5, type: "positive" }}
                    comparison={<><span className="font-semibold text-success">+200</span><span className="text-muted-foreground"> since last month</span></>}
                    progress={[
                        { label: "Completed", percentage: 38, color: "success" },
                        { label: "Quota Met/Closed", percentage: 22, color: "chart4" },
                        { label: "Screened out", percentage: 18, color: "chart8" },
                        { label: "Interrupted", percentage: 12, color: "negative" },
                        { label: "Drop Outs", percentage: 10, color: "secondary" },
                    ]}
                />
                <StatsCard
                    title="Conversion Rate"
                    value="24.5%"
                    trend={{ value: 0, type: "neutral" }}
                    comparison="No change since last month"
                    icon={<Percent />}
                />
            </div>
        </div>
    ),
}
