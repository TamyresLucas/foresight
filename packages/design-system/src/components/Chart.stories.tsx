import type { Meta, StoryObj } from "@storybook/react";
import {
  BarChart,
  LineChart,
  AreaChart,
  PieChart,
  DonutChart,
  RadarChart,
  RadialChart,
  // Radial primitives for custom stories
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  PolarRadiusAxis,
  Label,
  ChartTooltip,
  ChartContainer,
  ResponsiveContainer,
  CHART_COLORS,
  DEFAULT_CHART_COLORS,
  SEMANTIC_CHART_COLORS,
  SENTIMENT_CHART_COLORS,
  NPS_SCALE_COLORS,
  getChartColorShades,
} from "./ui/chart";

const meta: Meta = {
  title: "ShadCn/Dashboard UI/Charts",
  parameters: {
    layout: "padded",
  },
};

export default meta;

// Sample data for charts
const monthlyData = [
  { month: "Jan", sales: 4000, revenue: 2400, profit: 1200 },
  { month: "Feb", sales: 3000, revenue: 1398, profit: 900 },
  { month: "Mar", sales: 2000, revenue: 9800, profit: 1500 },
  { month: "Apr", sales: 2780, revenue: 3908, profit: 1100 },
  { month: "May", sales: 1890, revenue: 4800, profit: 800 },
  { month: "Jun", sales: 2390, revenue: 3800, profit: 1300 },
  { month: "Jul", sales: 3490, revenue: 4300, profit: 1600 },
];

const categoryData = [
  { name: "Product A", value: 400 },
  { name: "Product B", value: 300 },
  { name: "Product C", value: 200 },
  { name: "Product D", value: 278 },
  { name: "Product E", value: 189 },
];

const surveyResponseData = [
  { response: "Very Satisfied", count: 45 },
  { response: "Satisfied", count: 32 },
  { response: "Neutral", count: 18 },
  { response: "Dissatisfied", count: 8 },
  { response: "Very Dissatisfied", count: 5 },
];

// ============ BAR CHARTS ============

export const BarChartDefault: StoryObj = {
  name: "Bar Chart - Vertical",
  render: () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Monthly Views</h3>
      <BarChart
        data={monthlyData}
        xAxisKey="month"
        bars={[{ dataKey: "sales", name: "Views" }]}
      />
    </div>
  ),
};

export const BarChartMultiple: StoryObj = {
  name: "Bar Chart - Multiple",
  render: () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Visitors vs Sessions</h3>
      <BarChart
        data={monthlyData}
        xAxisKey="month"
        bars={[
          { dataKey: "sales", name: "Visitors" },
          { dataKey: "revenue", name: "Sessions" },
        ]}
      />
    </div>
  ),
};

export const BarChartStacked: StoryObj = {
  name: "Bar Chart - Stacked",
  render: () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Breakdown by Category</h3>
      <BarChart
        data={monthlyData}
        xAxisKey="month"
        bars={[
          { dataKey: "profit", name: "Direct", stackId: "a" },
          { dataKey: "revenue", name: "Organic", stackId: "a" },
        ]}
      />
    </div>
  ),
};

export const BarChartHorizontal: StoryObj = {
  name: "Bar Chart - Horizontal",
  render: () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Feature Usage</h3>
      <BarChart
        data={[
          { feature: "Dashboard", count: 58 },
          { feature: "Reports", count: 45 },
          { feature: "Settings", count: 32 },
          { feature: "Exports", count: 21 },
          { feature: "Integrations", count: 14 },
        ]}
        xAxisKey="feature"
        bars={[{ dataKey: "count", name: "Users" }]}
        layout="vertical"
        height={300}
      />
    </div>
  ),
};

export const BarChartSemanticColors: StoryObj = {
  name: "Bar Chart - Semantic Colors",
  render: () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Performance Metrics</h3>
      <BarChart
        data={[
          { metric: "Pending", value: 28 },
          { metric: "In Progress", value: 45 },
          { metric: "Failed", value: 12 },
          { metric: "Completed", value: 85 },
        ]}
        xAxisKey="metric"
        bars={[
          {
            dataKey: "value",
            name: "Count",
            cellColors: [
              SEMANTIC_CHART_COLORS.neutral, // Pending
              SEMANTIC_CHART_COLORS.primary, // In Progress
              SEMANTIC_CHART_COLORS.error,   // Failed
              SEMANTIC_CHART_COLORS.success, // Completed
            ],
          },
        ]}
        showLegend={false}
      />
    </div>
  ),
};

export const BarChartNPSScale: StoryObj = {
  name: "Bar Chart - NPS Score Scale",
  render: () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">NPS Score Distribution</h3>
      <BarChart
        data={[
          { score: "0", count: 3 },
          { score: "1", count: 2 },
          { score: "2", count: 4 },
          { score: "3", count: 5 },
          { score: "4", count: 6 },
          { score: "5", count: 8 },
          { score: "6", count: 10 },
          { score: "7", count: 18 },
          { score: "8", count: 22 },
          { score: "9", count: 15 },
          { score: "10", count: 20 },
        ]}
        xAxisKey="score"
        bars={NPS_SCALE_COLORS.map((color, i) => ({
          dataKey: "count",
          name: `Score ${i}`,
          color,
          stackId: undefined,
        })).slice(0, 1)} // single bar series, colours applied per-cell below
        showLegend={false}
        height={280}
      />
      {/* Note: per-cell colouring requires Cell usage — show palette swatch instead */}
      <div className="flex gap-1 mt-2">
        {NPS_SCALE_COLORS.map((color, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-1">
            <div className="w-full h-6 rounded-sm" style={{ backgroundColor: color }} />
            <span className="text-xs text-muted-foreground">{i}</span>
          </div>
        ))}
      </div>
    </div>
  ),
};

// ============ LINE CHARTS ============

export const LineChartDefault: StoryObj = {
  name: "Line Chart - Single",
  render: () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Active Users</h3>
      <LineChart
        data={monthlyData}
        xAxisKey="month"
        lines={[{ dataKey: "sales", name: "Users" }]}
      />
    </div>
  ),
};

export const LineChartMultiple: StoryObj = {
  name: "Line Chart - Multiple",
  render: () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Metrics Overview</h3>
      <LineChart
        data={monthlyData}
        xAxisKey="month"
        lines={[
          { dataKey: "sales", name: "Visits" },
          { dataKey: "revenue", name: "Signups" },
          { dataKey: "profit", name: "Conversions" },
        ]}
      />
    </div>
  ),
};

export const LineChartStraight: StoryObj = {
  name: "Line Chart - Linear",
  render: () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Weekly Requests</h3>
      <LineChart
        data={monthlyData}
        xAxisKey="month"
        lines={[{ dataKey: "sales", name: "Requests" }]}
        curved={false}
      />
    </div>
  ),
};

export const LineChartLabel: StoryObj = {
  name: "Line Chart - Label",
  render: () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Monthly Sessions</h3>
      <LineChart
        data={monthlyData}
        xAxisKey="month"
        lines={[{ dataKey: "sales", name: "Sessions", dot: true, label: true }]}
        height={380}
      />
    </div>
  ),
};

// ============ AREA CHARTS ============

export const AreaChartDefault: StoryObj = {
  name: "Area Chart - Single",
  render: () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Page Views Over Time</h3>
      <AreaChart
        data={monthlyData}
        xAxisKey="month"
        areas={[{ dataKey: "revenue", name: "Views" }]}
      />
    </div>
  ),
};

export const AreaChartStacked: StoryObj = {
  name: "Area Chart - Stacked",
  render: () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Traffic Sources</h3>
      <AreaChart
        data={monthlyData}
        xAxisKey="month"
        areas={[
          { dataKey: "profit", name: "Direct", stackId: "a" },
          { dataKey: "sales", name: "Organic", stackId: "a" },
        ]}
      />
    </div>
  ),
};

// ============ PIE CHARTS ============

// Pie data with clearly distinct values to show the gradient well
const pieData = [
  { name: "Category A", value: 480 },
  { name: "Category B", value: 260 },
  { name: "Category C", value: 150 },
  { name: "Category D", value: 75 },
  { name: "Category E", value: 35 },
];

// Assign gradient shades by value rank and sort slices largest → smallest
function buildPieGradient(data: typeof pieData) {
  const shades = getChartColorShades(SEMANTIC_CHART_COLORS.primary, data.length);
  const ranked = [...data].sort((a, b) => a.value - b.value);
  const colorMap = new Map(ranked.map((item, i) => [item.name, shades[i]]));
  // Sort descending so largest slice (darkest) appears first in the arc
  return [...data]
    .sort((a, b) => b.value - a.value)
    .map((item) => ({ ...item, color: colorMap.get(item.name) }));
}

export const PieChartNoSeparator: StoryObj = {
  name: "Pie Chart",
  render: () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Distribution</h3>
      <PieChart data={buildPieGradient(pieData)} paddingAngle={0} />
    </div>
  ),
};

export const PieChartDefault: StoryObj = {
  name: "Pie Chart - With Separator",
  render: () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Distribution</h3>
      <PieChart data={buildPieGradient(pieData)} />
    </div>
  ),
};

export const PieChartWithLabels: StoryObj = {
  name: "Pie Chart - Label",
  render: () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Market Share</h3>
      <PieChart
        data={buildPieGradient(pieData)}
        showLabels
        outerRadius={100}
        height={400}
      />
    </div>
  ),
};

export const DonutChartDefault: StoryObj = {
  name: "Donut Chart - Satisfaction",
  render: () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Survey Results</h3>
      {/* surveyResponseData is ordered best→worst, so reverse SENTIMENT_CHART_COLORS (1=bad→5=good) */}
      <DonutChart
        data={surveyResponseData.map((item, index) => ({
          name: item.response,
          value: item.count,
          color: [...SENTIMENT_CHART_COLORS].reverse()[index],
        }))}
      />
    </div>
  ),
};

export const DonutChartNPS: StoryObj = {
  name: "Donut Chart - NPS Groups",
  render: () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">NPS Distribution</h3>
      {/* NPS groups use same semantic colors as satisfaction chart:
          Detractors (0–6) = error, Passives (7–8) = warning, Promoters (9–10) = success */}
      <DonutChart
        data={[
          { name: "Detractors (0–6)", value: 32, color: SEMANTIC_CHART_COLORS.error },
          { name: "Passives (7–8)",   value: 28, color: SEMANTIC_CHART_COLORS.warning },
          { name: "Promoters (9–10)", value: 40, color: SEMANTIC_CHART_COLORS.success },
        ]}
      />
    </div>
  ),
};

export const DonutChartCustomColors: StoryObj = {
  name: "Donut Chart - Semantic Colors",
  render: () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Status Overview</h3>
      <DonutChart
        data={[
          { name: "Success", value: 65, color: SEMANTIC_CHART_COLORS.success },
          { name: "Warning", value: 20, color: SEMANTIC_CHART_COLORS.warning },
          {
            name: "Error",
            value: 15,
            color: SEMANTIC_CHART_COLORS.error,
          },
        ]}
      />
    </div>
  ),
};

// ============ RADAR CHARTS ============

const radarData = [
  { subject: "Speed",       value: 85, valueB: 72 },
  { subject: "Reliability", value: 78, valueB: 90 },
  { subject: "Usability",   value: 92, valueB: 64 },
  { subject: "Security",    value: 68, valueB: 95 },
  { subject: "Support",     value: 88, valueB: 74 },
  { subject: "Performance", value: 62, valueB: 83 },
];

export const RadarChartDefault: StoryObj = {
  name: "Radar Chart",
  render: () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Product Evaluation</h3>
      <RadarChart
        data={radarData}
        subject="subject"
        series={[{ dataKey: "value", name: "Score" }]}
      />
    </div>
  ),
};

export const RadarChartLines: StoryObj = {
  name: "Radar Chart - Lines",
  render: () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Product Evaluation</h3>
      <RadarChart
        data={radarData}
        subject="subject"
        series={[{ dataKey: "value", name: "Score" }]}
        linesOnly
      />
    </div>
  ),
};

export const RadarChartMultiple: StoryObj = {
  name: "Radar Chart - Multiple",
  render: () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Product Comparison</h3>
      <RadarChart
        data={radarData}
        subject="subject"
        series={[
          { dataKey: "value",  name: "Product A" },
          { dataKey: "valueB", name: "Product B" },
        ]}
        showLegend
        height={380}
      />
    </div>
  ),
};

// ============ RADIAL CHARTS ============

export const RadialChartText: StoryObj = {
  name: "Radial Chart - Text",
  render: () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Goal Progress</h3>
      <RadialChart
        data={[{ name: "Visitors", value: 64 }]}
        maxValue={100}
        innerRadius={90}
        outerRadius={110}
        startAngle={90}
        endAngle={-170}
        cornerRadius={10}
        showBackground
        centerLabel="Visitors"
        centerValue="1,284"
        height={320}
      />
    </div>
  ),
};

// Radial Chart - Shape: two stacked segments on a half-circle gauge
const shapeData = [{ label: "Jan", completed: 1260, remaining: 570 }];
const shapeTotal = 1260 + 570;

export const RadialChartShape: StoryObj = {
  name: "Radial Chart - Shape",
  render: () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Monthly Overview</h3>
      <ChartContainer height={300}>
        <RadialBarChart data={shapeData} endAngle={180} innerRadius={80} outerRadius={130}>
          <PolarAngleAxis type="number" domain={[0, shapeTotal]} tick={false} />
          <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
            <Label
              content={({ viewBox }) => {
                if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                  const cx = viewBox.cx ?? 0;
                  const cy = viewBox.cy ?? 0;
                  return (
                    <text x={cx} y={cy} textAnchor="middle">
                      <tspan x={cx} y={cy - 16} fontSize="24" fontWeight="bold" fill="var(--foreground)">
                        {shapeTotal.toLocaleString()}
                      </tspan>
                      <tspan x={cx} y={cy + 4} fontSize="12" fill="var(--muted-foreground)">
                        Visitors
                      </tspan>
                    </text>
                  );
                }
              }}
            />
          </PolarRadiusAxis>
          <RadialBar dataKey="completed" stackId="a" cornerRadius={5} fill={DEFAULT_CHART_COLORS[0]} className="stroke-transparent stroke-2" />
          <RadialBar dataKey="remaining"  stackId="a" cornerRadius={5} fill="#5a6eff33" className="stroke-transparent stroke-2" />
        </RadialBarChart>
      </ChartContainer>
    </div>
  ),
};

// Radial Chart - Stacked: multiple concentric rings, each its own category
const radialMultiData = (() => {
  const items = [
    { name: "Category A", value: 275 },
    { name: "Category B", value: 200 },
    { name: "Category C", value: 187 },
    { name: "Category D", value: 173 },
    { name: "Category E", value:  90 },
  ];
  // Sort descending so largest → outermost ring
  const sorted = [...items].sort((a, b) => b.value - a.value);
  const shades = getChartColorShades(SEMANTIC_CHART_COLORS.primary, sorted.length);
  // Outermost (index 0 = largest value) gets darkest shade
  return sorted.map((item, i) => ({
    ...item,
    fill: shades[shades.length - 1 - i],
  }));
})();

export const RadialChartStacked: StoryObj = {
  name: "Radial Chart - Stacked",
  render: () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Category Breakdown</h3>
      <ChartContainer height={380}>
        <RadialBarChart data={radialMultiData} innerRadius={30} outerRadius={110}>
          <RadialBar dataKey="value" background={{ fill: "#5a6eff33" }} cornerRadius={8} />
        </RadialBarChart>
      </ChartContainer>
    </div>
  ),
};

// ============ DASHBOARD EXAMPLE ============

export const DashboardExample: StoryObj = {
  name: "Dashboard - Combined Charts",
  render: () => (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold">Analytics Dashboard</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 border rounded-lg bg-card">
          <h3 className="text-lg font-semibold mb-4">Monthly Revenue</h3>
          <BarChart
            data={monthlyData}
            xAxisKey="month"
            bars={[{ dataKey: "revenue", name: "Revenue" }]}
            height={250}
            showLegend={false}
          />
        </div>

        <div className="p-4 border rounded-lg bg-card">
          <h3 className="text-lg font-semibold mb-4">Sales Trend</h3>
          <LineChart
            data={monthlyData}
            xAxisKey="month"
            lines={[{ dataKey: "sales", name: "Sales" }]}
            height={250}
            showLegend={false}
          />
        </div>

        <div className="p-4 border rounded-lg bg-card">
          <h3 className="text-lg font-semibold mb-4">Product Distribution</h3>
          <DonutChart data={categoryData} height={250} />
        </div>

        <div className="p-4 border rounded-lg bg-card">
          <h3 className="text-lg font-semibold mb-4">Performance Over Time</h3>
          <AreaChart
            data={monthlyData}
            xAxisKey="month"
            areas={[{ dataKey: "profit", name: "Profit" }]}
            height={250}
            showLegend={false}
          />
        </div>
      </div>
    </div>
  ),
};





