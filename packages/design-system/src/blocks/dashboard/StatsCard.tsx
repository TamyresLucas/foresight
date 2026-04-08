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

// eslint-disable-next-line unused-imports/no-unused-vars
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
  /** Layout mode for items — "list" (default) or "grid" */
  itemsLayout?: "list" | "grid";
  /** Grid of metrics (for multi-metric variant) */
  metrics?: StatsMetric[];
  /** Progress segments (for progress bar variant) */
  progress?: StatsProgressItem[];
  /** When true, shows an ArrowUpRight circular button in the top-right corner */
  learnMore?: boolean;
  /** Icon to display in the top-right corner (used when learnMore is false) */
  icon?: React.ReactNode;
  /**
   * Compact stats shown inline in the header, right-aligned.
   * Each item renders as a small label + bold value pair.
   * Replaces the icon/learnMore slot when provided.
   */
  headerStats?: StatsMetric[];
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
    <div className="grid gap-4" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))" }}>
      {metrics.map((metric, index) => (
        <div key={index} className="space-y-1">
          <p className="whitespace-nowrap text-2xl font-bold">{metric.value}</p>
          <p className="whitespace-nowrap text-xs text-muted-foreground">{metric.label}</p>
        </div>
      ))}
    </div>
  );
}

function ItemsGrid({ items }: { items: StatsListItem[] }) {
  return (
    <div className="grid gap-x-4 gap-y-4" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))" }}>
      {items.map((item, index) => (
        <div key={index} className="space-y-1">
          <div className="flex flex-wrap items-center gap-1.5">
            {item.color && (
              <div className={cn("h-2 w-2 shrink-0 rounded-full", statsColorVariants({ color: item.color }))} />
            )}
            <span className="text-xs text-muted-foreground">{item.label}</span>
            {item.badge && (
              <Badge variant={item.badgeVariant ?? "outline"} className="text-xs">{item.badge}</Badge>
            )}
          </div>
          <p className="text-2xl font-bold">{item.value}</p>
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
          <div className="flex flex-wrap items-center gap-2">
            {item.color && (
              <div
                className={cn(
                  "h-2 w-2 shrink-0 rounded-full",
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
  const total = segments.reduce((sum, s) => sum + s.percentage, 0);
  return (
    <div className="h-3 w-full rounded-full bg-primary/10">
      <div
        className="h-full rounded-full bg-[var(--foundation-chart-blueberry)] transition-all"
        style={{ width: `${Math.min(total, 100)}%` }}
      />
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
      itemsLayout = "list",
      metrics,
      progress,
      learnMore,
      icon,
      headerStats,
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <Card
        ref={ref}
        className={cn("flex w-full flex-col", headerStats && headerStats.length > 0 && "overflow-hidden rounded-b-none", className)}
        {...props}
      >
        {headerStats && headerStats.length > 0 ? (
          <CardHeader className="flex-row items-center pt-0 pb-0 pr-0 space-y-0">
            <div className="flex-1 pr-4">
              <CardDescription className="text-sm font-medium text-card-foreground">
                {title}
              </CardDescription>
              {subtitle && (
                <CardTitle className="text-xs font-normal text-muted-foreground">
                  {subtitle}
                </CardTitle>
              )}
            </div>
            <div
              className="grid shrink-0 divide-x divide-border border-l border-border"
              style={{ gridTemplateColumns: `repeat(${headerStats.length}, minmax(0, 1fr))` }}
            >
              {headerStats.map((stat, i) => (
                <div key={i} className="flex flex-col gap-0.5 p-4">
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                  <p className="text-xl font-bold tracking-tight tabular-nums">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </CardHeader>
        ) : (
          <CardHeader className="flex-row items-center justify-between gap-2 space-y-0 pb-1">
            <div>
              <CardDescription className="text-sm font-medium text-card-foreground">
                {title}
              </CardDescription>
              {subtitle && (
                <CardTitle className="text-xs font-normal text-muted-foreground">
                  {subtitle}
                </CardTitle>
              )}
            </div>
            {learnMore ? (
              <Button
                variant="outline"
                size="icon"
                className="h-7 w-7 shrink-0 rounded-full"
              >
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Button>
            ) : icon ? (
              <div className="flex h-7 w-7 shrink-0 items-center justify-center text-muted-foreground">
                {React.cloneElement(icon as React.ReactElement, {
                  className: cn("h-6 w-6", (icon as React.ReactElement).props?.className),
                  fill: false,
                })}
              </div>
            ) : null}
          </CardHeader>
        )}
        {(value !== undefined || comparison || (metrics && metrics.length > 0) || (items && items.length > 0) || (progress && progress.length > 0)) && (
          <CardContent className="flex flex-1 flex-col space-y-3">
            {/* Main Value */}
            {value !== undefined && (
              <div className="flex min-h-9 flex-wrap items-baseline gap-2">
                <span className="whitespace-nowrap text-3xl font-bold tracking-tight">{value}</span>
                {trend && <TrendIndicator trend={trend} />}
              </div>
            )}

            {/* Spacer to push bottom content down (only when there IS bottom content) */}
            {((metrics && metrics.length > 0) || (items && items.length > 0) || (progress && progress.length > 0) || comparison) && (
              <div className="flex-1" />
            )}

            {/* Metrics Grid */}
            {metrics && metrics.length > 0 && <MetricsGrid metrics={metrics} />}

            {/* Items List / Grid */}
            {items && items.length > 0 && (
              itemsLayout === "grid"
                ? <ItemsGrid items={items} />
                : <ItemsList items={items} />
            )}

            {/* Progress Bar */}
            {progress && progress.length > 0 && (
              <div className="!mt-0">
                <ProgressStack segments={progress} />
              </div>
            )}

            {/* Comparison Text */}
            {comparison && (
              <p className="!mt-2 text-xs text-muted-foreground">{comparison}</p>
            )}
          </CardContent>
        )}
      </Card>
    );
  },
);
StatsCard.displayName = "StatsCard";

export { StatsCard };
export default StatsCard;
