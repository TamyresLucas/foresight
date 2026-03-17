import type { Meta, StoryObj } from "@storybook/react";
import {
  BarChart,
  LineChart,
  AreaChart,
  PieChart,
  DonutChart,
  CHART_COLORS,
  SEMANTIC_CHART_COLORS,
} from "./ui/chart";

const meta: Meta = {
  title: "Components/Data Display/Charts",
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
  name: "Bar Chart - Default",
  render: () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Monthly Sales</h3>
      <BarChart
        data={monthlyData}
        xAxisKey="month"
        bars={[{ dataKey: "sales", name: "Sales" }]}
      />
    </div>
  ),
};

export const BarChartMultiple: StoryObj = {
  name: "Bar Chart - Multiple Bars",
  render: () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Sales vs Revenue</h3>
      <BarChart
        data={monthlyData}
        xAxisKey="month"
        bars={[
          { dataKey: "sales", name: "Sales" },
          { dataKey: "revenue", name: "Revenue" },
        ]}
      />
    </div>
  ),
};

export const BarChartStacked: StoryObj = {
  name: "Bar Chart - Stacked",
  render: () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Stacked Revenue Breakdown</h3>
      <BarChart
        data={monthlyData}
        xAxisKey="month"
        bars={[
          { dataKey: "profit", name: "Profit", stackId: "a" },
          { dataKey: "revenue", name: "Revenue", stackId: "a" },
        ]}
      />
    </div>
  ),
};

export const BarChartHorizontal: StoryObj = {
  name: "Bar Chart - Horizontal",
  render: () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Survey Responses</h3>
      <BarChart
        data={surveyResponseData}
        xAxisKey="response"
        bars={[{ dataKey: "count", name: "Responses" }]}
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
          { metric: "Completed", value: 85 },
          { metric: "In Progress", value: 45 },
          { metric: "Failed", value: 12 },
          { metric: "Pending", value: 28 },
        ]}
        xAxisKey="metric"
        bars={[
          {
            dataKey: "value",
            name: "Count",
            color: SEMANTIC_CHART_COLORS.primary,
          },
        ]}
      />
    </div>
  ),
};

// ============ LINE CHARTS ============

export const LineChartDefault: StoryObj = {
  name: "Line Chart - Default",
  render: () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Sales Trend</h3>
      <LineChart
        data={monthlyData}
        xAxisKey="month"
        lines={[{ dataKey: "sales", name: "Sales" }]}
      />
    </div>
  ),
};

export const LineChartMultiple: StoryObj = {
  name: "Line Chart - Multiple Lines",
  render: () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Performance Comparison</h3>
      <LineChart
        data={monthlyData}
        xAxisKey="month"
        lines={[
          { dataKey: "sales", name: "Sales" },
          { dataKey: "revenue", name: "Revenue" },
          { dataKey: "profit", name: "Profit" },
        ]}
      />
    </div>
  ),
};

export const LineChartStraight: StoryObj = {
  name: "Line Chart - Straight Lines",
  render: () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Linear Trend</h3>
      <LineChart
        data={monthlyData}
        xAxisKey="month"
        lines={[{ dataKey: "sales", name: "Sales" }]}
        curved={false}
      />
    </div>
  ),
};

// ============ AREA CHARTS ============

export const AreaChartDefault: StoryObj = {
  name: "Area Chart - Default",
  render: () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Revenue Over Time</h3>
      <AreaChart
        data={monthlyData}
        xAxisKey="month"
        areas={[{ dataKey: "revenue", name: "Revenue" }]}
      />
    </div>
  ),
};

export const AreaChartStacked: StoryObj = {
  name: "Area Chart - Stacked",
  render: () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Revenue Breakdown</h3>
      <AreaChart
        data={monthlyData}
        xAxisKey="month"
        areas={[
          { dataKey: "profit", name: "Profit", stackId: "a" },
          { dataKey: "sales", name: "Sales", stackId: "a" },
        ]}
      />
    </div>
  ),
};

// ============ PIE CHARTS ============

export const PieChartDefault: StoryObj = {
  name: "Pie Chart - Default",
  render: () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Product Distribution</h3>
      <PieChart data={categoryData} />
    </div>
  ),
};

export const PieChartWithLabels: StoryObj = {
  name: "Pie Chart - With Labels",
  render: () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Market Share</h3>
      <PieChart data={categoryData} showLabels outerRadius={100} height={400} />
    </div>
  ),
};

export const DonutChartDefault: StoryObj = {
  name: "Donut Chart - Default",
  render: () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Survey Results</h3>
      <DonutChart
        data={surveyResponseData.map((item) => ({
          name: item.response,
          value: item.count,
        }))}
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
            color: SEMANTIC_CHART_COLORS.destructive,
          },
        ]}
      />
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

// ============ COLOR PALETTE DEMO ============

export const ChartColorPalette: StoryObj = {
  name: "Chart Color Palette",
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">
          Chart Colors (from Design Tokens)
        </h3>
        <div className="flex gap-4">
          {CHART_COLORS.map((color, index) => (
            <div key={index} className="text-center">
              <div
                className="w-16 h-16 rounded-lg shadow-sm border"
                style={{ backgroundColor: color }}
              />
              <p className="text-xs text-muted-foreground mt-2">
                Chart {index + 1}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Semantic Colors</h3>
        <div className="flex gap-4">
          {Object.entries(SEMANTIC_CHART_COLORS).map(([name, color]) => (
            <div key={name} className="text-center">
              <div
                className="w-16 h-16 rounded-lg shadow-sm border"
                style={{ backgroundColor: color }}
              />
              <p className="text-xs text-muted-foreground mt-2 capitalize">
                {name}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">All Colors in Action</h3>
        <BarChart
          data={[
            {
              category: "A",
              value1: 30,
              value2: 45,
              value3: 25,
              value4: 60,
              value5: 40,
            },
            {
              category: "B",
              value1: 45,
              value2: 30,
              value3: 55,
              value4: 35,
              value5: 50,
            },
            {
              category: "C",
              value1: 60,
              value2: 55,
              value3: 40,
              value4: 45,
              value5: 35,
            },
          ]}
          xAxisKey="category"
          bars={[
            { dataKey: "value1", name: "Series 1" },
            { dataKey: "value2", name: "Series 2" },
            { dataKey: "value3", name: "Series 3" },
            { dataKey: "value4", name: "Series 4" },
            { dataKey: "value5", name: "Series 5" },
          ]}
          height={300}
        />
      </div>
    </div>
  ),
};

// ============ CHART TOKENS VALIDATION (QA GATE) ============

const CHART_COLOR_NAMES = [
  { index: 1, name: "blueberry (primary)", token: "--chart-1" },
  { index: 2, name: "mint", token: "--chart-2" },
  { index: 3, name: "peach", token: "--chart-3" },
  { index: 4, name: "grape", token: "--chart-4" },
  { index: 5, name: "lime", token: "--chart-5" },
  { index: 6, name: "watermelon", token: "--chart-6" },
  { index: 7, name: "blackberry", token: "--chart-7" },
  { index: 8, name: "grey", token: "--chart-8" },
];

export const ChartTokensValidation: StoryObj = {
  name: "QA Gate - Chart Tokens Validation",
  render: () => (
    <div className="space-y-8 p-6">
      <div className="bg-muted p-4 rounded-lg">
        <h3 className="font-semibold mb-2">QA Gate - Validate Chart Colors</h3>
        <p className="text-sm text-muted-foreground">
          Verify that the 8 chart colors complement the primary periwinkle
          (#5a6eff). Each color should be visually distinct and work in both
          light and dark mode.
        </p>
      </div>

      {/* Light Mode Preview */}
      <div>
        <h4 className="text-md font-semibold mb-3">Light Mode Colors</h4>
        <div className="flex flex-wrap gap-4">
          {CHART_COLOR_NAMES.map((c) => (
            <div key={c.index} className="flex flex-col items-center">
              <div
                className="w-20 h-20 rounded-lg border shadow-sm"
                style={{ backgroundColor: `hsl(var(--chart-${c.index}))` }}
              />
              <p className="text-xs font-medium mt-2">{c.token}</p>
              <p className="text-xs text-muted-foreground">{c.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Dark Mode Preview */}
      <div className="dark">
        <h4 className="text-md font-semibold mb-3">Dark Mode Colors</h4>
        <div className="flex flex-wrap gap-4">
          {CHART_COLOR_NAMES.map((c) => (
            <div key={c.index} className="flex flex-col items-center">
              <div
                className="w-20 h-20 rounded-lg border shadow-sm"
                style={{ backgroundColor: `hsl(var(--chart-${c.index}))` }}
              />
              <p className="text-xs font-medium mt-2">{c.token}</p>
              <p className="text-xs text-muted-foreground">{c.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Comparison with foundation-chart tokens */}
      <div>
        <h4 className="text-md font-semibold mb-3">
          Comparison: chart tokens vs foundation-chart tokens
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {CHART_COLOR_NAMES.map((c) => (
            <div key={c.index} className="p-3 border rounded-lg bg-card">
              <p className="text-sm font-medium mb-2">{c.name}</p>
              <div className="flex gap-2 items-center">
                <div
                  className="w-8 h-8 rounded border"
                  style={{ backgroundColor: `hsl(var(--chart-${c.index}))` }}
                />
                <span className="text-xs text-muted-foreground">vs</span>
                <div
                  className="w-8 h-8 rounded border"
                  style={{
                    backgroundColor: `var(--foundation-chart-${c.index >= 6 && c.index <= 8 ? (c.index === 6 ? "watermelon" : c.index === 7 ? "blackberry" : "grey") : Object.keys({ blueberry: 1, mint: 2, peach: 3, grape: 4, lime: 5 })[c.index - 1]})`,
                  }}
                />
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                chart-{c.index} vs foundation-chart-*
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Test with actual chart */}
      <div>
        <h4 className="text-md font-semibold mb-3">
          Test All 8 Colors in Bar Chart
        </h4>
        <BarChart
          data={[
            {
              label: "A",
              v1: 30,
              v2: 45,
              v3: 25,
              v4: 60,
              v5: 40,
              v6: 35,
              v7: 50,
              v8: 20,
            },
            {
              label: "B",
              v1: 45,
              v2: 30,
              v3: 55,
              v4: 35,
              v5: 50,
              v6: 40,
              v7: 25,
              v8: 45,
            },
            {
              label: "C",
              v1: 60,
              v2: 55,
              v3: 40,
              v4: 45,
              v5: 35,
              v6: 50,
              v7: 30,
              v8: 25,
            },
          ]}
          xAxisKey="label"
          bars={[
            { dataKey: "v1", name: "blueberry" },
            { dataKey: "v2", name: "mint" },
            { dataKey: "v3", name: "peach" },
            { dataKey: "v4", name: "grape" },
            { dataKey: "v5", name: "lime" },
            { dataKey: "v6", name: "watermelon" },
            { dataKey: "v7", name: "blackberry" },
            { dataKey: "v8", name: "grey" },
          ]}
          height={350}
        />
      </div>

      {/* Test with Pie Chart */}
      <div>
        <h4 className="text-md font-semibold mb-3">Test Colors in Pie Chart</h4>
        <PieChart
          data={CHART_COLOR_NAMES.map((c, i) => ({
            name: c.name,
            value: 100 + i * 50,
          }))}
          height={300}
        />
      </div>

      {/* Validation Checklist */}
      <div className="border rounded-lg p-4 bg-muted/50">
        <h4 className="font-semibold mb-3">Validation Checklist</h4>
        <ul className="text-sm space-y-2">
          <li className="flex items-center gap-2">
            <input type="checkbox" className="rounded" />
            <span>Colors are visually distinct from each other</span>
          </li>
          <li className="flex items-center gap-2">
            <input type="checkbox" className="rounded" />
            <span>chart-1 (blueberry) complements the primary periwinkle</span>
          </li>
          <li className="flex items-center gap-2">
            <input type="checkbox" className="rounded" />
            <span>All colors work in light mode</span>
          </li>
          <li className="flex items-center gap-2">
            <input type="checkbox" className="rounded" />
            <span>All colors work in dark mode</span>
          </li>
          <li className="flex items-center gap-2">
            <input type="checkbox" className="rounded" />
            <span>Colors have good contrast for accessibility</span>
          </li>
        </ul>
      </div>
    </div>
  ),
};

// ============ STACKED BARS BUG FIX VALIDATION ============

export const StackedBarBugFixValidation: StoryObj = {
  name: "Bug Fix - Stacked Bars Order",
  render: () => (
    <div className="space-y-8 p-6">
      <div className="bg-muted p-4 rounded-lg">
        <h3 className="font-semibold mb-2">QA - Stacked Bars Order</h3>
        <p className="text-sm text-muted-foreground">
          Validar que o primeiro item (Profit) aparece no TOPO da barra
          empilhada. O radius arredondado deve aparecer apenas na barra do topo.
        </p>
      </div>

      {/* Stacked Bar - Should show Profit on TOP */}
      <div>
        <h4 className="text-md font-semibold mb-3">
          Stacked Bar - Profit on TOP (Primeiro item)
        </h4>
        <BarChart
          data={[
            { month: "Jan", profit: 1200, revenue: 2400 },
            { month: "Feb", profit: 900, revenue: 1398 },
            { month: "Mar", profit: 1500, revenue: 9800 },
          ]}
          xAxisKey="month"
          bars={[
            { dataKey: "profit", name: "Profit", stackId: "a" },
            { dataKey: "revenue", name: "Revenue", stackId: "a" },
          ]}
          height={300}
        />
      </div>

      {/* Verification Checklist */}
      <div className="border rounded-lg p-4 bg-muted/50">
        <h4 className="font-semibold mb-3">Stacked Bars Checklist</h4>
        <ul className="text-sm space-y-2">
          <li className="flex items-center gap-2">
            <input type="checkbox" className="rounded" />
            <span>Profit (primeiro item) aparece no TOPO da barra stacked</span>
          </li>
          <li className="flex items-center gap-2">
            <input type="checkbox" className="rounded" />
            <span>Revenue (segundo item) aparece na BASE (embaixo)</span>
          </li>
          <li className="flex items-center gap-2">
            <input type="checkbox" className="rounded" />
            <span>Apenas a barra do topo tem bordas arredondadas</span>
          </li>
          <li className="flex items-center gap-2">
            <input type="checkbox" className="rounded" />
            <span>Legenda mostra Profit primeiro (topo)</span>
          </li>
        </ul>
      </div>
    </div>
  ),
};

// ============ LINE CHART BUG FIX VALIDATION ============

export const LineChartBugFixValidation: StoryObj = {
  name: "Bug Fix - Line Chart Visibility",
  render: () => (
    <div className="space-y-8 p-6">
      <div className="bg-muted p-4 rounded-lg">
        <h3 className="font-semibold mb-2">QA - Line Chart Visibility</h3>
        <p className="text-sm text-muted-foreground">
          Validar que as linhas são visíveis em ambos os modos (light/dark).
          Testar hover para verificar activeDot.
        </p>
      </div>

      {/* Line Chart - Multiple Lines */}
      <div>
        <h4 className="text-md font-semibold mb-3">
          Line Chart - Multiple Lines
        </h4>
        <LineChart
          data={monthlyData}
          xAxisKey="month"
          lines={[
            { dataKey: "sales", name: "Sales" },
            { dataKey: "revenue", name: "Revenue" },
            { dataKey: "profit", name: "Profit" },
          ]}
          height={300}
        />
      </div>

      {/* Line Chart - Single Line */}
      <div>
        <h4 className="text-md font-semibold mb-3">Line Chart - Single Line</h4>
        <LineChart
          data={monthlyData}
          xAxisKey="month"
          lines={[{ dataKey: "sales", name: "Sales" }]}
          height={200}
        />
      </div>

      {/* Dark Mode Test */}
      <div className="dark">
        <h4 className="text-md font-semibold mb-3">Line Chart - Dark Mode</h4>
        <LineChart
          data={monthlyData}
          xAxisKey="month"
          lines={[
            { dataKey: "sales", name: "Sales" },
            { dataKey: "revenue", name: "Revenue" },
          ]}
          height={250}
        />
      </div>

      {/* Verification Checklist */}
      <div className="border rounded-lg p-4 bg-muted/50">
        <h4 className="font-semibold mb-3">Line Chart Checklist</h4>
        <ul className="text-sm space-y-2">
          <li className="flex items-center gap-2">
            <input type="checkbox" className="rounded" />
            <span>Linhas são visíveis em light mode</span>
          </li>
          <li className="flex items-center gap-2">
            <input type="checkbox" className="rounded" />
            <span>Linhas são visíveis em dark mode</span>
          </li>
          <li className="flex items-center gap-2">
            <input type="checkbox" className="rounded" />
            <span>Hover mostra activeDot</span>
          </li>
          <li className="flex items-center gap-2">
            <input type="checkbox" className="rounded" />
            <span>Dots aparecem nos pontos de dados</span>
          </li>
          <li className="flex items-center gap-2">
            <input type="checkbox" className="rounded" />
            <span>Linhas têm cores distintas entre si</span>
          </li>
        </ul>
      </div>
    </div>
  ),
};
