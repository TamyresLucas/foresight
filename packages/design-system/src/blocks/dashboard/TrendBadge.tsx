import * as React from "react";
import { cn } from "@/lib/utils";
import { TrendingUp, TrendingDown } from "../../components/ui/icons";

export type TrendBadgeType = "positive" | "negative";

export interface TrendBadgeProps {
  /** Direction of the trend */
  type: TrendBadgeType;
  /** Numeric value to display (e.g. 15.1 → "+15.1%") */
  value: number;
  className?: string;
}

export function TrendBadge({ type, value, className }: TrendBadgeProps) {
  const Icon = type === "positive" ? TrendingUp : TrendingDown;
  const prefix = type === "positive" ? "+" : "-";

  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold whitespace-nowrap",
        type === "positive"
          ? "bg-success text-success-foreground"
          : "bg-destructive text-destructive-foreground",
        className,
      )}
    >
      <Icon className="h-3 w-3" aria-hidden="true" />
      <span>
        {prefix}{value}%
      </span>
    </span>
  );
}

export default TrendBadge;
