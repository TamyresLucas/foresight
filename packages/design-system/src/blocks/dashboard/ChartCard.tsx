import * as React from "react";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { BarChart, type BarChartProps } from "@/components/ui/chart";

// ============================================================================
// Types
// ============================================================================

export interface ChartCardStat {
  label: string;
  value: string | number;
}

export interface ChartCardProps {
  /** Card title */
  title: string;
  /** Summary stats displayed in the header top-right */
  stats?: ChartCardStat[];
  /** Data for the chart */
  data: Record<string, unknown>[];
  /** Key used for the X-axis */
  xAxisKey: string;
  /** Bar series definitions */
  bars: BarChartProps["bars"];
  /** Height of the chart area in px (default: 110) */
  chartHeight?: number;
  /** Additional CSS classes */
  className?: string;
}

// ============================================================================
// Component
// ============================================================================

const ChartCard = React.forwardRef<HTMLDivElement, ChartCardProps>(
  (
    {
      title,
      stats,
      data,
      xAxisKey,
      bars,
      chartHeight = 110,
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <Card ref={ref} className={cn("w-full", className)} {...props}>
        <CardHeader className="flex-row items-start justify-between gap-4 pb-1">
          <CardDescription className="text-sm font-medium text-card-foreground">
            {title}
          </CardDescription>
          {stats && stats.length > 0 && (
            <div className="flex shrink-0 gap-4">
              {stats.map((stat, i) => (
                <div key={i} className="text-right">
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                  <p className="text-lg font-bold leading-tight tabular-nums">
                    {typeof stat.value === "number"
                      ? stat.value.toLocaleString()
                      : stat.value}
                  </p>
                </div>
              ))}
            </div>
          )}
        </CardHeader>
        <CardContent className="pb-3 pt-0">
          <BarChart
            data={data}
            xAxisKey={xAxisKey}
            bars={bars}
            height={chartHeight}
            showGrid={false}
          />
        </CardContent>
      </Card>
    );
  },
);
ChartCard.displayName = "ChartCard";

export { ChartCard };
export default ChartCard;
