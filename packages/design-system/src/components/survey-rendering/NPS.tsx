"use client";

import * as React from "react";
import { Card } from "./Card";
import { cn } from "@/lib/utils";

export interface NPSProps {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  className?: string;
  children?: React.ReactNode;
  name?: string;
  /** Anchor label shown under the low end of the scale, e.g. "Very unlikely". */
  leftLabel?: React.ReactNode;
  /** Anchor label shown under the high end of the scale, e.g. "Very likely". */
  rightLabel?: React.ReactNode;
}

const NPS = React.forwardRef<HTMLDivElement, NPSProps>(
  (
    {
      value: valueProp,
      defaultValue,
      onValueChange,
      className,
      children,
      name,
      leftLabel,
      rightLabel,
    },
    ref,
  ) => {
    const [internal, setInternal] = React.useState<string | undefined>(
      defaultValue,
    );
    const isControlled = valueProp !== undefined;
    const currentValue = isControlled ? valueProp : internal;

    const handleSelect = React.useCallback(
      (next: string) => {
        if (!isControlled) setInternal(next);
        onValueChange?.(next);
      },
      [isControlled, onValueChange],
    );

    const contextValue = React.useMemo(
      () => ({
        value: currentValue,
        onSelect: handleSelect,
      }),
      [currentValue, handleSelect],
    );

    const options =
      children ??
      Array.from({ length: 10 }, (_, i) => {
        const v = String(i + 1);
        return <NPSOption key={v} value={v} />;
      });

    const hasLabels = leftLabel != null || rightLabel != null;

    return (
      <NPSContext.Provider value={contextValue}>
        <div ref={ref} className={cn("flex flex-col font-survey w-full", className)}>
          <div
            role="radiogroup"
            className="grid w-full"
            style={{
              gap: "4px",
              gridTemplateColumns: "repeat(10, minmax(0, 1fr))",
            }}
            data-name={name}
          >
            {options}
          </div>
          {hasLabels && (
            <div className="mt-2 flex items-start justify-between gap-4 text-survey-body text-survey-muted-foreground">
              <span className="text-left">{leftLabel}</span>
              <span className="text-right">{rightLabel}</span>
            </div>
          )}
        </div>
      </NPSContext.Provider>
    );
  },
);
NPS.displayName = "NPS";

interface NPSContextValue {
  value: string | undefined;
  onSelect: (value: string) => void;
}

const NPSContext = React.createContext<NPSContextValue | null>(null);

export interface NPSOptionProps {
  value: string;
  focused?: boolean;
  className?: string;
}

const NPSOption = React.forwardRef<HTMLButtonElement, NPSOptionProps>(
  ({ value, focused = false, className }, ref) => {
    const ctx = React.useContext(NPSContext);
    if (!ctx) {
      throw new Error("NPSOption must be used inside <NPS>");
    }
    const selected = ctx.value === value;

    return (
      <Card
        ref={ref}
        shape="square"
        size="sm"
        role="radio"
        aria-checked={selected}
        selected={selected}
        focused={focused}
        onClick={() => ctx.onSelect(value)}
        style={{ minWidth: 0, minHeight: "2.75rem" }}
        className={cn("w-full text-survey-body", className)}
      >
        {value}
      </Card>
    );
  },
);
NPSOption.displayName = "NPSOption";

export { NPS, NPSOption };
