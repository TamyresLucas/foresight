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
  RadarChart as RechartsRadarChart,
  Radar,
  RadialBarChart as RechartsRadialBarChart,
  RadialBar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Label,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { cn } from "@/lib/utils";

// Hex colors matching tokens-static.css --chart-1 through --chart-8 (light mode).
// CSS variables (hsl(var(--chart-*))) do NOT resolve inside Recharts SVG — use hex.
export const CHART_COLORS = [
  "#5a6eff", // chart-1 blueberry  (233 86% 64%)
  "#00c2b8", // chart-2 mint       (177 100% 38%)
  "#FA7268", // chart-3 peach      (4 94% 69%)
  "#8e25d0", // chart-4 grape      (283 62% 53%)
  "#ed4e94", // chart-6 watermelon (331 75% 58%)
  "#4833eb", // chart-7 blackberry (243 73% 51%)
  "#6c7c99", // chart-8 grey       (218 18% 51%)
] as const;

// Colors for NPS-specific multi-series charts (not the score gradient — see NPS_SCALE_COLORS)
export const NPS_CHART_COLORS = [
  "#5a6eff", // chart-1 blueberry
  "#FA7268", // chart-3 peach      (4 94% 69%)
  "#00A078", // --chart-positive   success/positive
  "#f59f0a", // warning tangerine  (38 92% 50%)
  "#EF576B", // --chart-negative   error/negative
  "#ed4e94", // chart-6 watermelon
  "#4833eb", // chart-7 blackberry
] as const;

// ─── Sentiment scale — 5 steps: chart-negative → warning → chart-positive ───
// Use for satisfaction / CSAT charts (very negative → negative → neutral → positive → very positive).
// Anchors: step 1 = --chart-negative, step 3 = --warning, step 5 = --chart-positive.
export const SENTIMENT_CHART_COLORS = [
  "#EF576B", // --chart-sentiment-1 — very negative
  "#E97E42", // --chart-sentiment-2 — negative
  "#F59F0A", // --chart-sentiment-3 — neutral      (= --warning)
  "#7DB83A", // --chart-sentiment-4 — positive
  "#00A078", // --chart-sentiment-5 — very positive (= --chart-positive)
] as const;

// ─── NPS scale — 11 steps: score 0 (detractor/error) → 10 (promoter/success) ─
// Index matches NPS score directly: NPS_SCALE_COLORS[score].
// Anchors: score 0 = --chart-negative, score 5 ≈ --warning, score 10 = --chart-positive.
export const NPS_SCALE_COLORS = [
  "#EF576B", // --chart-nps-0  — score 0  (= --chart-negative)
  "#E86555", // --chart-nps-1  — score 1
  "#E17845", // --chart-nps-2  — score 2
  "#D98C36", // --chart-nps-3  — score 3
  "#F38F16", // --chart-nps-4  — score 4
  "#F59F0A", // --chart-nps-5  — score 5  (= --warning)
  "#CFBF14", // --chart-nps-6  — score 6
  "#94BB28", // --chart-nps-7  — score 7
  "#52B23E", // --chart-nps-8  — score 8
  "#1FAA5C", // --chart-nps-9  — score 9
  "#00A078", // --chart-nps-10 — score 10 (= --chart-positive)
] as const;

// Default chart colors for general use (excludes lime; blackberry replaced by peach)
export const DEFAULT_CHART_COLORS = [
  "#5a6eff", // chart-1 blueberry (primary)
  "#00c2b8", // chart-2 mint
  "#8e25d0", // chart-4 grape
  "#ed4e94", // chart-6 watermelon
  "#FA7268", // chart-3 peach
  "#6c7c99", // chart-8 grey
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

// Semantic chart colors — hex values for correct resolution inside Recharts SVG.
// Uses --chart-positive / --chart-negative tokens (lower contrast than --success / --destructive).
export const SEMANTIC_CHART_COLORS = {
  primary: "#5a6eff",  // --chart-1 blueberry
  success: "#00A078",  // --chart-positive (#00A078 verde)
  error:   "#EF576B",  // --chart-negative (#EF576B coral)
  warning: "#f59f0a",  // --warning tangerine
  neutral: "#6c7c99",  // --chart-8 grey — use for pending/missing/not available
} as const;

// ─── Muted variants — 40% opacity (hex alpha suffix 66 = round(0.4 × 255)) ──
// Use these to de-emphasise non-highlighted bars/slices; full colour for the
// prominent one, muted for the rest.
// CSS usage: hsl(var(--chart-1-muted))   JS/Recharts: CHART_COLORS_MUTED[i]
export const CHART_MUTED_ALPHA = 0.4; // documented opacity level

export const CHART_COLORS_MUTED = [
  "#5a6eff66", // --chart-1-muted  blueberry
  "#00c2b866", // --chart-2-muted  mint
  "#FA726866", // --chart-3-muted  peach
  "#8e25d066", // --chart-4-muted  grape
  "#ed4e9466", // --chart-6-muted  watermelon
  "#4833eb66", // --chart-7-muted  blackberry
  "#6c7c9966", // --chart-8-muted  grey
] as const;

export const DEFAULT_CHART_COLORS_MUTED = [
  "#5a6eff66", // --chart-1-muted  blueberry
  "#00c2b866", // --chart-2-muted  mint
  "#8e25d066", // --chart-4-muted  grape
  "#ed4e9466", // --chart-6-muted  watermelon
  "#FA726866", // --chart-3-muted  peach
  "#6c7c9966", // --chart-8-muted  grey
] as const;

export const SEMANTIC_CHART_COLORS_MUTED = {
  primary: "#5a6eff66", // --chart-1-muted
  success: "#00A07866", // --chart-positive-muted
  error:   "#EF576B66", // --chart-negative-muted
  warning: "#f59f0a66", // --warning muted
  neutral: "#6c7c9966", // --chart-8-muted grey
} as const;

export const SENTIMENT_CHART_COLORS_MUTED = [
  "#EF576B66", // --chart-sentiment-1-muted
  "#E97E4266", // --chart-sentiment-2-muted
  "#F59F0A66", // --chart-sentiment-3-muted
  "#7DB83A66", // --chart-sentiment-4-muted
  "#00A07866", // --chart-sentiment-5-muted
] as const;

export const NPS_SCALE_COLORS_MUTED = [
  "#EF576B66", // --chart-nps-0  muted
  "#E8655566", // --chart-nps-1  muted
  "#E1784566", // --chart-nps-2  muted
  "#D98C3666", // --chart-nps-3  muted
  "#F38F1666", // --chart-nps-4  muted
  "#F59F0A66", // --chart-nps-5  muted
  "#CFBF1466", // --chart-nps-6  muted
  "#94BB2866", // --chart-nps-7  muted
  "#52B23E66", // --chart-nps-8  muted
  "#1FAA5C66", // --chart-nps-9  muted
  "#00A07866", // --chart-nps-10 muted
] as const;

// ─── Color-scale utilities ────────────────────────────────────────────────────
// Recharts SVG cannot resolve CSS custom properties, so all scaling is done
// in JS using HSL math. The CSS tokens (--chart-N-lighter / -light / -dark /
// -darker) mirror these values for use in plain HTML/CSS contexts.

function hexToHsl(hex: string): [number, number, number] {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;
  if (max === min) return [0, 0, l * 100];
  const d = max - min;
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  const h =
    max === r
      ? ((g - b) / d + (g < b ? 6 : 0)) / 6
      : max === g
        ? ((b - r) / d + 2) / 6
        : ((r - g) / d + 4) / 6;
  return [h * 360, s * 100, l * 100];
}

function hslToHex(h: number, s: number, l: number): string {
  h /= 360;
  s /= 100;
  l /= 100;
  const hue2rgb = (p: number, q: number, t: number): number => {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
  };
  if (s === 0) {
    const v = Math.round(l * 255);
    const hex = v.toString(16).padStart(2, "0");
    return `#${hex}${hex}${hex}`;
  }
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;
  const toHex = (x: number) =>
    Math.round(hue2rgb(p, q, x) * 255)
      .toString(16)
      .padStart(2, "0");
  return `#${toHex(h + 1 / 3)}${toHex(h)}${toHex(h - 1 / 3)}`;
}

/**
 * Generate `count` shades of `baseHex` arranged lightest → darkest,
 * with `baseHex` always at the center index (floor((count-1)/2)).
 *
 * Each step moves ±8% lightness from the base.
 * Values are clamped to [18%, 88%] so extremes stay visible on charts.
 *
 * @example
 * // 5 items using blueberry as base
 * getChartColorShades("#5a6eff", 5)
 * // → ["#9aaafe", "#7387ff", "#5a6eff", "#3a4dc4", "#233099"]
 *   //    lightest   light     main      dark      darkest (darker + desaturated)
 */
export function getChartColorShades(baseHex: string, count: number): string[] {
  if (count <= 0) return [];
  if (count === 1) return [baseHex];
  const [h, s, l] = hexToHsl(baseHex);
  const LIGHT_STEP = 8;   // lightness per step toward lighter
  const DARK_L_STEP = 13; // larger lightness drop per dark step
  const DARK_S_STEP = 14; // saturation reduction per dark step (makes darks more distinct)
  const centerIdx = Math.floor((count - 1) / 2);
  return Array.from({ length: count }, (_, i) => {
    const offset = centerIdx - i; // positive = lighter, negative = darker
    if (offset >= 0) {
      const newL = Math.max(18, Math.min(88, l + offset * LIGHT_STEP));
      return hslToHex(h, s, newL);
    } else {
      const darkSteps = -offset;
      const newL = Math.max(18, Math.min(88, l - darkSteps * DARK_L_STEP));
      const newS = Math.max(30, Math.min(100, s - darkSteps * DARK_S_STEP));
      return hslToHex(h, newS, newL);
    }
  });
}

/**
 * Convenience wrapper — get a lightness scale for a chart palette slot.
 * `colorIndex` indexes into DEFAULT_CHART_COLORS; `count` is the number of items.
 */
export function getChartColorScale(colorIndex: number, count: number): string[] {
  const base = DEFAULT_CHART_COLORS[colorIndex % DEFAULT_CHART_COLORS.length];
  return getChartColorShades(base, count);
}

// Get chart color by index — uses DEFAULT_CHART_COLORS (excludes lime)
export function getChartColor(index: number): string {
  return DEFAULT_CHART_COLORS[index % DEFAULT_CHART_COLORS.length];
}

// Debug helper - returns high contrast colors for testing visibility issues
export function getDebugColor(index: number): string {
  return DEBUG_CHART_COLORS[index % DEBUG_CHART_COLORS.length];
}

// Get color for NPS charts (includes orange/green)
export function getNpsColor(index: number): string {
  return NPS_CHART_COLORS[index % NPS_CHART_COLORS.length];
}

// Get semantic chart color — success/error use dedicated chart tokens (less contrast than UI semantics)
export function getSemanticColor(
  name: "primary" | "success" | "error" | "warning",
): string {
  return SEMANTIC_CHART_COLORS[name];
}

// Get sentiment color by 1-based level (1=very negative … 5=very positive).
// Maps to --chart-sentiment-{1-5} tokens.
export function getSentimentColor(level: 1 | 2 | 3 | 4 | 5): string {
  return SENTIMENT_CHART_COLORS[level - 1];
}

// Get NPS score color (0–10). Index matches score directly.
// Maps to --chart-nps-{0-10} tokens.
export function getNpsScoreColor(score: number): string {
  const clamped = Math.max(0, Math.min(10, Math.round(score)));
  return NPS_SCALE_COLORS[clamped];
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

// Legend entry shape injected by Recharts into the content prop
interface LegendPayloadEntry {
  value: string;
  color: string;
  dataKey?: string;
}

// Shared legend renderer — 8×8 px colored ellipse + label in default text color
function ChartLegendContent({ payload }: { payload?: LegendPayloadEntry[] }) {
  if (!payload?.length) return null;
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 pt-2 text-xs">
      {payload.map((entry, i) => (
        <div key={i} className="flex items-center gap-1.5">
          <span
            className="inline-block flex-shrink-0 rounded-full"
            style={{ width: 8, height: 8, backgroundColor: entry.color }}
          />
          <span className="text-foreground">{entry.value}</span>
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
    /** Per-data-point colors. When provided, overrides the single-series muted-max logic. */
    cellColors?: string[];
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
  showLegend,
  layout = "horizontal",
}: BarChartProps) {
  const isStacked = bars.some((bar) => bar.stackId);
  const isSingleSeries = bars.length === 1;
  const effectiveLegend = showLegend ?? bars.length > 1;

  // For stacked bars: render in reverse order so first item appears at TOP
  // In Recharts: first item = base, last item = top
  // By reversing, we get: reversed[0] = original[last] = TOP
  const barsToRender = isStacked ? [...bars].reverse() : bars;

  // Single-series: highlight the max bar, mute the rest
  const singleBarMaxValue = isSingleSeries
    ? Math.max(...data.map((d) => Number(d[bars[0].dataKey]) || 0))
    : null;

  return (
    <ChartContainer className={className} height={height}>
      <RechartsBarChart
        data={data}
        layout={layout}
        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
      >
        {/* Horizontal bar charts (layout="vertical") get no grid lines */}
        {showGrid && layout !== "vertical" && (
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="hsl(var(--chart-grid) / 0.4)"
            horizontal={true}
            vertical={false}
          />
        )}
        {layout === "horizontal" ? (
          <>
            <XAxis
              dataKey={xAxisKey}
              tick={{ fill: "var(--muted-foreground)", fontSize: 12 }}
              axisLine={{ stroke: "hsl(var(--chart-grid) / 0.4)" }}
              tickLine={{ stroke: "hsl(var(--chart-grid) / 0.4)" }}
              dy={10}
            />
            <YAxis
              tick={{ fill: "var(--muted-foreground)", fontSize: 12 }}
              axisLine={{ stroke: "hsl(var(--chart-grid) / 0.4)" }}
              tickLine={{ stroke: "hsl(var(--chart-grid) / 0.4)" }}
              dx={-10}
            />
          </>
        ) : (
          <>
            <XAxis
              type="number"
              tick={{ fill: "var(--muted-foreground)", fontSize: 12 }}
              axisLine={{ stroke: "hsl(var(--chart-grid) / 0.4)" }}
              tickLine={{ stroke: "hsl(var(--chart-grid) / 0.4)" }}
              dy={10}
            />
            <YAxis
              dataKey={xAxisKey}
              type="category"
              tick={{ fill: "var(--muted-foreground)", fontSize: 12 }}
              axisLine={{ stroke: "hsl(var(--chart-grid) / 0.4)" }}
              tickLine={{ stroke: "hsl(var(--chart-grid) / 0.4)" }}
              width={80}
            />
          </>
        )}
        <Tooltip content={<ChartTooltip />} cursor={{ fill: "#5a6eff1a" }} />
        {effectiveLegend && <Legend content={<ChartLegendContent />} />}
        {barsToRender.map((bar, index) => {
          const fullColor = bar.color || getChartColor(index);
          const mutedColor = fullColor + "66";
          const hasCellColors = bar.cellColors && bar.cellColors.length > 0;

          // For single-series charts, render a solid background rect first so the
          // semi-transparent muted bars appear as a lighter solid color (not see-through).
           
          const barShape = isSingleSeries
            ? (p: { x?: number; y?: number; width?: number; height?: number; fill?: string }) => {
                const { x, y, width, height, fill } = p;
                if (!fill || width === undefined || height === undefined || width <= 0 || height <= 0) return <g />;
                return (
                  <g>
                    <rect x={x} y={y} width={width} height={height} fill="hsl(var(--background))" />
                    <rect x={x} y={y} width={width} height={height} fill={fill} />
                  </g>
                );
              }
            : undefined;

          return (
            <Bar
              key={bar.dataKey}
              dataKey={bar.dataKey}
              name={bar.name || bar.dataKey}
              fill={fullColor}
              stackId={bar.stackId}
              shape={barShape}
            >
              {hasCellColors
                ? data.map((_, i) => (
                    <Cell
                      key={`cell-${i}`}
                      fill={bar.cellColors![i] ?? fullColor}
                    />
                  ))
                : isSingleSeries &&
                  data.map((entry, i) => {
                    const value = Number(entry[bar.dataKey]) || 0;
                    const isMax = value === singleBarMaxValue;
                    return (
                      <Cell
                        key={`cell-${i}`}
                        fill={isMax ? fullColor : mutedColor}
                      />
                    );
                  })}
            </Bar>
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
    /** Show dots at every data point. On hover the dot grows to r=6. Default: false (dots only on hover). */
    dot?: boolean;
    /** Show the data value as a label above each dot. Requires dot=true to be visible. */
    label?: boolean;
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
  showLegend,
  curved = true,
}: LineChartProps) {
  const effectiveLegend = showLegend ?? lines.length > 1;
  return (
    <ChartContainer className={className} height={height}>
      <RechartsLineChart
        data={data}
        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
      >
        {showGrid && (
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="hsl(var(--chart-grid) / 0.4)"
            vertical={false}
          />
        )}
        <XAxis
          dataKey={xAxisKey}
          tick={{ fill: "var(--muted-foreground)", fontSize: 12 }}
          axisLine={{ stroke: "hsl(var(--chart-grid) / 0.4)" }}
          tickLine={{ stroke: "hsl(var(--chart-grid) / 0.4)" }}
          dy={10}
        />
        <YAxis
          tick={{ fill: "var(--muted-foreground)", fontSize: 12 }}
          axisLine={{ stroke: "hsl(var(--chart-grid) / 0.4)" }}
          tickLine={{ stroke: "hsl(var(--chart-grid) / 0.4)" }}
          dx={-10}
        />
        <Tooltip
          content={<ChartTooltip />}
          cursor={{ stroke: "#5a6eff66", strokeWidth: 1 }}
        />
        {effectiveLegend && <Legend content={<ChartLegendContent />} />}
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
              dot={
                line.dot
                  ? { r: 3, fill: lineColor, stroke: "var(--background)", strokeWidth: 1.5 }
                  : false
              }
              activeDot={{
                r: line.dot ? 6 : 5,
                fill: lineColor,
                stroke: "var(--background)",
                strokeWidth: 2,
              }}
              label={
                line.label
                  ? { position: "top" as const, fontSize: 11, fill: "var(--muted-foreground)", dy: -4 }
                  : undefined
              }
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
  showLegend,
}: AreaChartProps) {
  const effectiveLegend = showLegend ?? areas.length > 1;
  return (
    <ChartContainer className={className} height={height}>
      <RechartsAreaChart
        data={data}
        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
      >
        {showGrid && (
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="hsl(var(--chart-grid) / 0.4)"
            vertical={false}
          />
        )}
        <XAxis
          dataKey={xAxisKey}
          tick={{ fill: "var(--muted-foreground)", fontSize: 12 }}
          axisLine={{ stroke: "hsl(var(--chart-grid) / 0.4)" }}
          tickLine={{ stroke: "hsl(var(--chart-grid) / 0.4)" }}
          dy={10}
        />
        <YAxis
          tick={{ fill: "var(--muted-foreground)", fontSize: 12 }}
          axisLine={{ stroke: "hsl(var(--chart-grid) / 0.4)" }}
          tickLine={{ stroke: "hsl(var(--chart-grid) / 0.4)" }}
          dx={-10}
        />
        <Tooltip content={<ChartTooltip />} />
        {effectiveLegend && <Legend content={<ChartLegendContent />} />}
        {areas.map((area, index) => {
          const color = area.color || getChartColor(index);
          const gradientId = `area-gradient-${area.dataKey}-${index}`;
          return (
            <React.Fragment key={area.dataKey}>
              <defs>
                <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={color} stopOpacity={0.4} />
                  <stop offset="100%" stopColor={color} stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey={area.dataKey}
                name={area.name || area.dataKey}
                stroke={color}
                fill={`url(#${gradientId})`}
                fillOpacity={1}
                stackId={area.stackId}
              />
            </React.Fragment>
          );
        })}
      </RechartsAreaChart>
    </ChartContainer>
  );
}

interface PieLabelProps {
  cx?: number;
  cy?: number;
  midAngle?: number;
  innerRadius?: number;
  outerRadius?: number;
  name?: string;
  percent?: number;
  fill?: string;
}

// Custom SVG label for PieChart — 4×4 px dot + name + percentage in default text color.
// Right-side labels: [●] text  /  Left-side labels: text [●] (dot acts as pointer toward slice)
function renderPieLabel(props: PieLabelProps) {
  const {
    cx = 0,
    cy = 0,
    midAngle = 0,
    outerRadius = 0,
    name = "",
    percent = 0,
    fill = "var(--foreground)",
  } = props;
  const RADIAN = Math.PI / 180;
  const radius = outerRadius + 30;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  const isRight = x > cx;
  const label = `${name} ${(percent * 100).toFixed(0)}%`;

  if (isRight) {
    return (
      <g>
        <circle cx={x} cy={y} r={2} fill={fill} />
        <text
          x={x + 8}
          y={y}
          textAnchor="start"
          dominantBaseline="central"
          fill="var(--foreground)"
          fontSize={12}
        >
          {label}
        </text>
      </g>
    );
  }

  return (
    <g>
      <text
        x={x - 8}
        y={y}
        textAnchor="end"
        dominantBaseline="central"
        fill="var(--foreground)"
        fontSize={12}
      >
        {label}
      </text>
      <circle cx={x} cy={y} r={2} fill={fill} />
    </g>
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
  paddingAngle?: number;
}

export function PieChart({
  data,
  className,
  height = 350,
  innerRadius = 0,
  outerRadius = 80,
  showLegend = true,
  showLabels = false,
  colors = DEFAULT_CHART_COLORS,
  paddingAngle = 2,
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
          paddingAngle={paddingAngle}
          dataKey="value"
          label={showLabels ? renderPieLabel : undefined}
          labelLine={showLabels}
          strokeWidth={paddingAngle === 0 ? 0 : 1}
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={entry.color || colors[index % colors.length]}
            />
          ))}
        </Pie>
        <Tooltip content={<ChartTooltip />} />
        {showLegend && <Legend content={<ChartLegendContent />} />}
      </RechartsPieChart>
    </ChartContainer>
  );
}

// Donut Chart (Pie with inner radius)
export function DonutChart(props: Omit<PieChartProps, "innerRadius">) {
  return <PieChart {...props} innerRadius={60} outerRadius={80} />;
}

// ─── Radar Chart ─────────────────────────────────────────────────────────────

export interface RadarChartProps {
  data: Record<string, string | number>[];
  subject: string; // key used for the angular axis labels
  series: {
    dataKey: string;
    name: string;
    color?: string;
    fillOpacity?: number;
  }[];
  className?: string;
  height?: number;
  showLegend?: boolean;
  linesOnly?: boolean; // hide fill, show stroke only
}

export function RadarChart({
  data,
  subject,
  series,
  className,
  height = 350,
  showLegend = false,
  linesOnly = false,
}: RadarChartProps) {
  return (
    <ChartContainer className={className} height={height}>
      <RechartsRadarChart data={data} cx="50%" cy="50%">
        <PolarGrid stroke="hsl(var(--chart-grid) / 0.4)" />
        <PolarAngleAxis
          dataKey={subject}
          tick={{ fontSize: 12, fill: "var(--muted-foreground)" }}
        />
        <PolarRadiusAxis tick={false} axisLine={false} />
        {series.map((s, i) => {
          const color = s.color || DEFAULT_CHART_COLORS[i % DEFAULT_CHART_COLORS.length];
          return (
            <Radar
              key={s.dataKey}
              name={s.name}
              dataKey={s.dataKey}
              stroke={color}
              fill={color}
              fillOpacity={linesOnly ? 0 : (s.fillOpacity ?? 0.2)}
              strokeWidth={1.5}
            />
          );
        })}
        <Tooltip content={<ChartTooltip />} />
        {showLegend && <Legend content={<ChartLegendContent />} />}
      </RechartsRadarChart>
    </ChartContainer>
  );
}

// ─── Radial Chart ─────────────────────────────────────────────────────────────

export interface RadialChartProps {
  data: { name: string; value: number; fill?: string }[];
  className?: string;
  height?: number;
  /** Inner radius in px */
  innerRadius?: number;
  /** Outer radius in px */
  outerRadius?: number;
  /** Start angle in degrees (90 = top) */
  startAngle?: number;
  /** End angle in degrees */
  endAngle?: number;
  /** Rounded bar ends */
  cornerRadius?: number;
  /** Show background track for each bar */
  showBackground?: boolean;
  showLegend?: boolean;
  /** Maximum value for scaling (default 100) */
  maxValue?: number;
  /** Label shown below the center value */
  centerLabel?: string;
  /** Value displayed in center — defaults to data[0].value */
  centerValue?: React.ReactNode;
}

export function RadialChart({
  data,
  className,
  height = 300,
  innerRadius = 60,
  outerRadius = 100,
  startAngle = 90,
  endAngle = -270,
  cornerRadius = 0,
  showBackground = false,
  showLegend = false,
  maxValue = 100,
  centerLabel,
  centerValue,
}: RadialChartProps) {
  const coloredData = data.map((item, i) => ({
    ...item,
    fill: item.fill || DEFAULT_CHART_COLORS[i % DEFAULT_CHART_COLORS.length],
  }));
  const displayValue = centerValue ?? data[0]?.value;

  return (
    <ChartContainer className={className} height={height}>
      <RechartsRadialBarChart
        data={coloredData}
        cx="50%"
        cy="50%"
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
      >
        <PolarAngleAxis type="number" domain={[0, maxValue]} tick={false} />
        {/* Full 360° background ring using two stacked filled circles:
            outer circle (outerRadius) filled with primary@15%, masking inner circle restores background */}
        {showBackground && (
          <PolarGrid
            gridType="circle"
            radialLines={false}
            stroke="none"
            polarRadius={[outerRadius, innerRadius]}
            className="first:fill-[#5a6eff33] last:fill-background"
          />
        )}
        <RadialBar dataKey="value" cornerRadius={cornerRadius} background={false}>
          {coloredData.map((entry, index) => (
            <Cell key={`radial-cell-${index}`} fill={entry.fill} />
          ))}
        </RadialBar>
        {centerLabel !== undefined && (
          <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
            <Label
              content={({ viewBox }) => {
                if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                  const cx = viewBox.cx ?? 0;
                  const cy = viewBox.cy ?? 0;
                  return (
                    <text x={cx} y={cy} textAnchor="middle" dominantBaseline="middle">
                      <tspan x={cx} y={cy - 8} fontSize="28" fontWeight="bold" fill="var(--foreground)">
                        {String(displayValue)}
                      </tspan>
                      <tspan x={cx} y={cy + 16} fontSize="12" fill="var(--muted-foreground)">
                        {centerLabel}
                      </tspan>
                    </text>
                  );
                }
              }}
            />
          </PolarRadiusAxis>
        )}
        <Tooltip content={<ChartTooltip />} />
        {showLegend && <Legend content={<ChartLegendContent />} />}
      </RechartsRadialBarChart>
    </ChartContainer>
  );
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
  // Radial primitives — used for custom radial stories
  RechartsRadialBarChart as RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  PolarRadiusAxis,
  Label,
};
