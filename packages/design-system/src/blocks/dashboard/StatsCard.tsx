import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "@/components/ui/icons";
import { TrendBadge } from "./TrendBadge";

// ============================================================================
// Types
// ============================================================================

export type TrendType = "positive" | "negative" | "neutral";

export interface StatsTrend {
  /** The percentage or numeric change value */
  value: number;
  /** Indicates the direction of change */
  type: TrendType;
}

export type SemanticColor =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "destructive"
  | "muted"
  | "chart4"
  | "chart8"
  | "negative";

const statsColorVariants = cva("", {
  variants: {
    color: {
      primary: "bg-primary",
      secondary: "bg-secondary",
      success: "bg-success",
      warning: "bg-warning",
      destructive: "bg-destructive",
      muted: "bg-muted",
      chart4: "bg-[hsl(var(--chart-4))]",
      chart8: "bg-[hsl(var(--chart-8))]",
      negative: "bg-[hsl(var(--chart-negative))]",
    },
  },
  defaultVariants: {
    color: "primary",
  },
});

const progressColorVariants = cva("", {
  variants: {
    color: {
      primary: "bg-[hsl(var(--chart-1))]",
      secondary: "bg-[hsl(var(--chart-2))]",
      success: "bg-[hsl(var(--chart-positive))]",
      warning: "bg-[hsl(var(--chart-3))]",
      destructive: "bg-[hsl(var(--destructive))]",
      muted: "bg-muted",
      chart4: "bg-[hsl(var(--chart-4))]",
      chart8: "bg-[hsl(var(--chart-8))]",
      negative: "bg-[hsl(var(--chart-negative))]",
    },
  },
  defaultVariants: {
    color: "primary",
  },
});

export interface StatsListItem {
  /** Label for the item */
  label: string;
  /** Value or percentage to display */
  value: string;
  /** Optional secondary value (e.g., amount) */
  amount?: string;
  /** Optional status badge label */
  badge?: string;
  /** Optional badge variant */
  badgeVariant?: "default" | "secondary" | "destructive" | "outline" | "success" | "warning";
  /** Optional semantic color for visual distinction */
  color?: SemanticColor;
}

export interface StatsMetric {
  /** Label for the metric */
  label: string;
  /** Value to display */
  value: string;
}

export interface StatsProgressItem {
  /** Label for the progress segment */
  label: string;
  /** Percentage value (0-100) */
  percentage: number;
  /** Color for the segment */
  color?: SemanticColor;
}

export interface StatsCardProps {
  /** Title displayed at the top of the card */
  title: string;
  /** Main value to display prominently */
  value?: string | number;
  /** Trend indicator showing change */
  trend?: StatsTrend;
  /** Comparison text (e.g., "vs last month") */
  comparison?: React.ReactNode;
  /** Subtitle or additional description */
  subtitle?: string;
  /** List of items with values (for list variant) */
  items?: StatsListItem[];
  /** Grid of metrics (for multi-metric variant) */
  metrics?: StatsMetric[];
  /** Progress segments (for progress bar variant) */
  progress?: StatsProgressItem[];
  /** Optional icon displayed above the title */
  icon?: React.ReactNode;
  /** Card color scheme */
  variant?: "default" | "primary";
  /** Additional CSS classes */
  className?: string;
}

// ============================================================================
// Helper Components
// ============================================================================

function TrendIndicator({ trend }: { trend: StatsTrend }) {
  if (trend.type === "positive" || trend.type === "negative") {
    return <TrendBadge type={trend.type} value={trend.value} />;
  }
  return null;
}

function MetricsGrid({ metrics }: { metrics: StatsMetric[] }) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
      {metrics.map((metric, index) => (
        <div key={index} className="space-y-1">
          <p className="text-2xl font-bold">{metric.value}</p>
          <p className="text-xs text-muted-foreground">{metric.label}</p>
        </div>
      ))}
    </div>
  );
}

function ItemsList({ items }: { items: StatsListItem[] }) {
  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <div key={index} className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {item.color && (
              <div
                className={cn(
                  "h-2 w-2 rounded-full",
                  statsColorVariants({ color: item.color }),
                )}
              />
            )}
            <span className="text-sm font-medium">{item.label}</span>
            {item.badge && (
              <Badge variant={item.badgeVariant ?? "outline"} className="text-xs">{item.badge}</Badge>
            )}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">{item.value}</span>
            {item.amount && (
              <span className="text-sm font-medium">{item.amount}</span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

function ProgressStack({ segments }: { segments: StatsProgressItem[] }) {
  return (
    <div className="space-y-3">
      <div className="flex h-3 w-full gap-1">
        {segments.map((segment, index) => (
          <div
            key={index}
            className={cn(
              "h-full transition-all",
              index === 0 && "rounded-l-full",
              index === segments.length - 1 && "rounded-r-full",
              progressColorVariants({ color: segment.color || "primary" }),
            )}
            style={{ width: `${segment.percentage}%` }}
          />
        ))}
      </div>
      <div className="flex flex-wrap gap-x-4 gap-y-1">
        {segments.map((segment, index) => (
          <div key={index} className="flex items-center gap-1.5 text-xs">
            <div
              className={cn(
                "h-2 w-2 rounded-full",
                progressColorVariants({ color: segment.color || "primary" }),
              )}
            />
            <span className="text-muted-foreground">{segment.label}</span>
            <span className="font-medium">{segment.percentage}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ============================================================================
// Main Component
// ============================================================================

/**
 * StatsCard - A versatile statistics card for dashboards
 *
 * Supports multiple variants:
 * - Simple with trend indicator
 * - With list of items
 * - With metrics grid
 * - With progress bar
 */
const StatsCard = React.forwardRef<HTMLDivElement, StatsCardProps>(
  (
    {
      title,
      value,
      trend,
      comparison,
      subtitle,
      items,
      metrics,
      progress,
      icon,
      variant = "default",
      className,
      ...props
    },
    ref,
  ) => {
    const isPrimary = variant === "primary";
    return (
      <Card
        ref={ref}
        variant={isPrimary ? "primary" : "default"}
        className={cn("w-full", className)}
        {...props}
      >
        <CardHeader className="flex-row items-start justify-between pb-2">
          <div>
            {icon && (
              <div className={cn("mb-1.5 h-4 w-4", isPrimary ? "text-primary-foreground/70" : "text-muted-foreground")}>
                {icon}
              </div>
            )}
            <CardDescription className={cn("text-sm font-medium", isPrimary && "text-primary-foreground/70")}>
              {title}
            </CardDescription>
          {subtitle && (
            <CardTitle className={cn("text-xs font-normal", isPrimary ? "text-primary-foreground/60" : "text-muted-foreground")}>
              {subtitle}
            </CardTitle>
          )}
          </div>
          {trend && trend.type !== "neutral" && (
            <Button
              variant="outline"
              size="icon"
              className={cn("h-7 w-7 shrink-0 rounded-full", isPrimary && "border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10")}
            >
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Button>
          )}
        </CardHeader>
        <CardContent className="space-y-3">
          {/* Main Value */}
          {value !== undefined && (
            <div className="flex flex-wrap items-baseline gap-2">
              <span className={cn("whitespace-nowrap text-3xl font-bold tracking-tight", isPrimary && "text-primary-foreground")}>{value}</span>
              {trend && <TrendIndicator trend={trend} />}
            </div>
          )}

          {/* Comparison Text */}
          {comparison && (
            <p className={cn("text-xs", isPrimary ? "text-primary-foreground/60" : "text-muted-foreground")}>{comparison}</p>
          )}

          {/* Metrics Grid */}
          {metrics && metrics.length > 0 && <MetricsGrid metrics={metrics} />}

          {/* Items List */}
          {items && items.length > 0 && <ItemsList items={items} />}

          {/* Progress Bar */}
          {progress && progress.length > 0 && (
            <ProgressStack segments={progress} />
          )}
        </CardContent>
      </Card>
    );
  },
);
StatsCard.displayName = "StatsCard";

export { StatsCard };
export default StatsCard;
