"use client";

import * as React from "react";
import {
  BarChart as RechartsBarChart,
  Bar,
  LineChart as RechartsLineChart,
  Line,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  AreaChart as RechartsAreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { cn } from "@/lib/utils";

// Dynamic chart colors using CSS variables (8 colors)
export const CHART_COLORS = [
  "hsl(var(--chart-1))",
  "hsl(var(--chart-2))",
  "hsl(var(--chart-3))",
  "hsl(var(--chart-4))",
  "hsl(var(--chart-5))",
  "hsl(var(--chart-6))",
  "hsl(var(--chart-7))",
  "hsl(var(--chart-8))",
] as const;

// Colors for NPS-specific charts (includes orange and lime)
export const NPS_CHART_COLORS = [
  "hsl(var(--chart-1))", // blueberry
  "hsl(97 52% 39%)", // lime
  "hsl(14 86% 58%)", // peach
  "hsl(161 100% 26%)", // success green
  "hsl(38 92% 50%)", // warning tangerine
  "hsl(349 54% 54%)", // destructive coral
  "hsl(var(--chart-6))", // watermelon
  "hsl(var(--chart-7))", // blackberry
] as const;

// Default chart colors for general use (excludes orange and lime for better accessibility)
export const DEFAULT_CHART_COLORS = [
  "hsl(var(--chart-1))", // blueberry (primary)
  "hsl(var(--chart-2))", // mint
  "hsl(var(--chart-4))", // grape
  "hsl(var(--chart-6))", // watermelon
  "hsl(var(--chart-7))", // blackberry
  "hsl(var(--chart-8))", // grey
] as const;

// Debug colors - high contrast colors for testing visibility issues
export const DEBUG_CHART_COLORS = [
  "#FF6B6B", // red
  "#4ECDC4", // teal
  "#45B7D1", // blue
  "#96CEB4", // green
  "#FFEAA7", // yellow
  "#DDA0DD", // plum
] as const;

// Fallback colors with hex values for better compatibility
const FALLback_CHART_COLORS = [
  "#5a6eff", // blueberry
  "#00a39b", // mint
  "#8e25d0", // grape
  "#ed4e94", // watermelon
  "#4833eb", // blackberry
  "#707d89", // grey
] as const;

// Dynamic semantic colors using CSS variables
export const SEMANTIC_CHART_COLORS = {
  primary: "hsl(var(--primary))",
  success: "hsl(var(--success))",
  warning: "hsl(var(--warning))",
  destructive: "hsl(var(--destructive))",
} as const;

// Get chart color by index - returns CSS variable reference for dynamic theming
// Uses DEFAULT_CHART_COLORS which excludes orange/olive for better accessibility
export function getChartColor(index: number): string {
  // Return hex color for better compatibility with Recharts
  return FALLback_CHART_COLORS[index % FALLback_CHART_COLORS.length];
}

// Debug helper - returns high contrast colors for testing visibility issues
export function getDebugColor(index: number): string {
  return DEBUG_CHART_COLORS[index % DEBUG_CHART_COLORS.length];
}

// Get color for NPS charts (includes orange/green)
export function getNpsColor(index: number): string {
  return NPS_CHART_COLORS[index % NPS_CHART_COLORS.length];
}

// Get semantic color - returns CSS variable reference for dynamic theming
export function getSemanticColor(
  name: "primary" | "success" | "warning" | "destructive",
): string {
  return SEMANTIC_CHART_COLORS[name];
}

// Custom Tooltip props type
interface ChartTooltipProps {
  active?: boolean;
  payload?: Array<{
    name: string;
    value: number;
    color?: string;
  }>;
  label?: string;
  className?: string;
}

// Custom Tooltip component styled with design tokens
export function ChartTooltip({
  active,
  payload,
  label,
  className,
}: ChartTooltipProps) {
  if (!active || !payload?.length) return null;

  return (
    <div
      className={cn(
        "bg-popover text-popover-foreground border rounded-lg shadow-lg p-3 text-sm",
        className,
      )}
    >
      <p className="font-medium mb-1">{label}</p>
      {payload.map((entry, index) => (
        <div key={index} className="flex items-center gap-2">
          <div
            className="w-3 h-3 rounded-sm"
            style={{ backgroundColor: entry.color }}
          />
          <span className="text-muted-foreground">{entry.name}:</span>
          <span className="font-medium">{entry.value}</span>
        </div>
      ))}
    </div>
  );
}

// Chart Container wrapper
interface ChartContainerProps {
  children: React.ReactNode;
  className?: string;
  height?: number | string;
}

export function ChartContainer({
  children,
  className,
  height = 350,
}: ChartContainerProps) {
  return (
    <div className={cn("w-full", className)} style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        {children as React.ReactElement}
      </ResponsiveContainer>
    </div>
  );
}

/**
 * Bar Chart Component
 *
 * RENDER ORDER: First item in `bars` array appears at TOP of stacked bar.
 * Example: [{ dataKey: 'profit', stackId: 'a' }, { dataKey: 'revenue', stackId: 'a' }]
 * -> profit renders at TOP, revenue renders at BASE (below profit)
 *
 * @example
 * // Stacked bar with profit on top
 * bars={[
 *   { dataKey: 'profit', name: 'Profit', stackId: 'a' },   // Renders at TOP
 *   { dataKey: 'revenue', name: 'Revenue', stackId: 'a' }  // Renders at BASE
 * ]}
 */
export interface BarChartProps {
  data: Record<string, unknown>[];
  xAxisKey: string;
  bars: {
    dataKey: string;
    name?: string;
    color?: string;
    stackId?: string;
  }[];
  className?: string;
  height?: number;
  showGrid?: boolean;
  showLegend?: boolean;
  layout?: "horizontal" | "vertical";
}

export function BarChart({
  data,
  xAxisKey,
  bars,
  className,
  height = 350,
  showGrid = true,
  showLegend = true,
  layout = "horizontal",
}: BarChartProps) {
  const isStacked = bars.some((bar) => bar.stackId);

  // For stacked bars: render in reverse order so first item appears at TOP
  // In Recharts: first item = base, last item = top
  // By reversing, we get: reversed[0] = original[last] = TOP
  const barsToRender = isStacked ? [...bars].reverse() : bars;

  return (
    <ChartContainer className={className} height={height}>
      <RechartsBarChart
        data={data}
        layout={layout}
        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
      >
        {showGrid && (
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="var(--input)"
            vertical={false}
          />
        )}
        {layout === "horizontal" ? (
          <>
            <XAxis
              dataKey={xAxisKey}
              tick={{ fill: "var(--muted-foreground)", fontSize: 12 }}
              axisLine={{ stroke: "var(--input)" }}
              tickLine={{ stroke: "var(--input)" }}
              dy={10}
            />
            <YAxis
              tick={{ fill: "var(--muted-foreground)", fontSize: 12 }}
              axisLine={{ stroke: "var(--input)" }}
              tickLine={{ stroke: "var(--input)" }}
              dx={-10}
            />
          </>
        ) : (
          <>
            <XAxis
              type="number"
              tick={{ fill: "var(--muted-foreground)", fontSize: 12 }}
              axisLine={{ stroke: "var(--input)" }}
              tickLine={{ stroke: "var(--input)" }}
              dy={10}
            />
            <YAxis
              dataKey={xAxisKey}
              type="category"
              tick={{ fill: "var(--muted-foreground)", fontSize: 12 }}
              axisLine={{ stroke: "var(--input)" }}
              tickLine={{ stroke: "var(--input)" }}
              width={80}
            />
          </>
        )}
        <Tooltip content={<ChartTooltip />} />
        {showLegend && (
          <Legend
            wrapperStyle={{
              fontSize: 12,
              paddingTop: 10,
            }}
            formatter={(value) => (
              <span className="text-foreground">{value}</span>
            )}
          />
        )}
        {barsToRender.map((bar, index) => {
          // For stacked bars: determine if this bar is at the TOP of the stack
          // In inverted render order: last item in array = TOP (first rendered by Recharts)
          // We need to find all bars with same stackId and check if this is the last one
          const stackBars = barsToRender.filter(
            (b) => b.stackId === bar.stackId,
          );
          const isTopOfStack = index === stackBars.length - 1;

          return (
            <Bar
              key={bar.dataKey}
              dataKey={bar.dataKey}
              name={bar.name || bar.dataKey}
              fill={bar.color || getChartColor(index)}
              stackId={bar.stackId}
              radius={
                isStacked && bar.stackId && isTopOfStack
                  ? [4, 4, 0, 0]
                  : [0, 0, 0, 0]
              }
            />
          );
        })}
      </RechartsBarChart>
    </ChartContainer>
  );
}

/**
 * Line Chart Component
 *
 * RENDER ORDER: First item in `lines` array renders on TOP (above) subsequent lines.
 * Use `lines` prop to define lines - each line's color defaults to chart palette.
 *
 * @example
 * lines={[
 *   { dataKey: 'sales', name: 'Sales' },    // Renders on TOP
 *   { dataKey: 'revenue', name: 'Revenue' } // Renders below
 * ]}
 */
export interface LineChartProps {
  data: Record<string, unknown>[];
  xAxisKey: string;
  lines: {
    dataKey: string;
    name?: string;
    color?: string;
    strokeWidth?: number;
    dot?: boolean;
  }[];
  className?: string;
  height?: number;
  showGrid?: boolean;
  showLegend?: boolean;
  curved?: boolean;
}

export function LineChart({
  data,
  xAxisKey,
  lines,
  className,
  height = 350,
  showGrid = true,
  showLegend = true,
  curved = true,
}: LineChartProps) {
  return (
    <ChartContainer className={className} height={height}>
      <RechartsLineChart
        data={data}
        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
      >
        {showGrid && (
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="var(--input)"
            vertical={false}
          />
        )}
        <XAxis
          dataKey={xAxisKey}
          tick={{ fill: "var(--muted-foreground)", fontSize: 12 }}
          axisLine={{ stroke: "#e5e7eb" }}
          tickLine={{ stroke: "#e5e7eb" }}
          dy={10}
        />
        <YAxis
          tick={{ fill: "var(--muted-foreground)", fontSize: 12 }}
          axisLine={{ stroke: "#e5e7eb" }}
          tickLine={{ stroke: "#e5e7eb" }}
          dx={-10}
        />
        <Tooltip content={<ChartTooltip />} />
        {showLegend && (
          <Legend
            wrapperStyle={{
              fontSize: 12,
              paddingTop: 10,
            }}
            formatter={(value) => (
              <span className="text-foreground">{value}</span>
            )}
          />
        )}
        {lines.map((line, index) => {
          // Use hex colors for better visibility
          const lineColor = line.color || getChartColor(index);

          return (
            <Line
              key={line.dataKey}
              type={curved ? "monotone" : "linear"}
              dataKey={line.dataKey}
              name={line.name || line.dataKey}
              stroke={lineColor}
              strokeWidth={line.strokeWidth || 2}
              dot={{
                r: 5,
                fill: lineColor,
                stroke: lineColor,
                strokeWidth: 1,
              }}
              activeDot={{
                r: 8,
                fill: "var(--accent)",
                stroke: "var(--accent-foreground)",
                strokeWidth: 2,
              }}
            />
          );
        })}
      </RechartsLineChart>
    </ChartContainer>
  );
}

/**
 * Area Chart Component
 *
 * RENDER ORDER: First item in `areas` array appears at TOP of stacked area.
 * Example: [{ dataKey: 'profit', stackId: 'a' }, { dataKey: 'sales', stackId: 'a' }]
 * -> profit renders on TOP, sales renders at BASE
 */
export interface AreaChartProps {
  data: Record<string, unknown>[];
  xAxisKey: string;
  areas: {
    dataKey: string;
    name?: string;
    color?: string;
    fillOpacity?: number;
    stackId?: string;
  }[];
  className?: string;
  height?: number;
  showGrid?: boolean;
  showLegend?: boolean;
}

export function AreaChart({
  data,
  xAxisKey,
  areas,
  className,
  height = 350,
  showGrid = true,
  showLegend = true,
}: AreaChartProps) {
  return (
    <ChartContainer className={className} height={height}>
      <RechartsAreaChart
        data={data}
        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
      >
        {showGrid && (
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="var(--input)"
            vertical={false}
          />
        )}
        <XAxis
          dataKey={xAxisKey}
          tick={{ fill: "var(--muted-foreground)", fontSize: 12 }}
          axisLine={{ stroke: "#e5e7eb" }}
          tickLine={{ stroke: "#e5e7eb" }}
          dy={10}
        />
        <YAxis
          tick={{ fill: "var(--muted-foreground)", fontSize: 12 }}
          axisLine={{ stroke: "#e5e7eb" }}
          tickLine={{ stroke: "#e5e7eb" }}
          dx={-10}
        />
        <Tooltip content={<ChartTooltip />} />
        {showLegend && (
          <Legend
            wrapperStyle={{
              fontSize: 12,
              paddingTop: 10,
            }}
            formatter={(value) => (
              <span className="text-foreground">{value}</span>
            )}
          />
        )}
        {areas.map((area, index) => {
          return (
            <Area
              key={area.dataKey}
              type="monotone"
              dataKey={area.dataKey}
              name={area.name || area.dataKey}
              stroke={area.color || getChartColor(index)}
              fill={area.color || getChartColor(index)}
              fillOpacity={area.fillOpacity || 0.3}
              stackId={area.stackId}
            />
          );
        })}
      </RechartsAreaChart>
    </ChartContainer>
  );
}

// Pie Chart Component
export interface PieChartProps {
  data: {
    name: string;
    value: number;
    color?: string;
  }[];
  className?: string;
  height?: number;
  innerRadius?: number;
  outerRadius?: number;
  showLegend?: boolean;
  showLabels?: boolean;
  colors?: readonly string[];
}

export function PieChart({
  data,
  className,
  height = 350,
  innerRadius = 0,
  outerRadius = 80,
  showLegend = true,
  showLabels = false,
  colors = CHART_COLORS,
}: PieChartProps) {
  return (
    <ChartContainer className={className} height={height}>
      <RechartsPieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          paddingAngle={2}
          dataKey="value"
          label={
            showLabels
              ? ({ name, percent }) =>
                  `${name} ${typeof percent === "number" ? (percent * 100).toFixed(0) : "N/A"}%`
              : undefined
          }
          labelLine={showLabels}
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={entry.color || colors[index % colors.length]}
            />
          ))}
        </Pie>
        <Tooltip content={<ChartTooltip />} />
        {showLegend && (
          <Legend
            wrapperStyle={{
              fontSize: 12,
              paddingTop: 10,
            }}
            formatter={(value) => (
              <span className="text-foreground">{value}</span>
            )}
          />
        )}
      </RechartsPieChart>
    </ChartContainer>
  );
}

// Donut Chart (Pie with inner radius)
export function DonutChart(props: Omit<PieChartProps, "innerRadius">) {
  return <PieChart {...props} innerRadius={60} outerRadius={80} />;
}

export {
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Bar,
  Line,
  Area,
  Pie,
  Cell,
};
