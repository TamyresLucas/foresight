import type { Meta, StoryObj } from "@storybook/react"
import { StatsCard } from "./StatsCard"
import { Percent } from "../../components/ui/icons"

const meta: Meta<typeof StatsCard> = {
    title: "ShadCn/Dashboard UI/Cards/Hero Cards",
    component: StatsCard,
    parameters: {
        layout: "padded",
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
 * Use to highlight a key metric with brand emphasis.
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
 * Stats card showing a neutral/unchanged trend.
 * For metrics that are stable.
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
 * Stats card with a list of items showing distribution.
 * Perfect for "Survey Status" or "Category Breakdown".
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
 * Stats card with a grid of multiple metrics.
 * Ideal for "Website Analytics" or "Performance Overview".
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
 * Stats card with stacked progress bar showing distribution.
 * Great for "Goal Tracking" or "Response Quota".
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
