"use client";

import * as React from "react";
import { Card } from "./Card";
import { cn } from "@/lib/utils";

const NPSErrorContext = React.createContext<boolean>(false);

export interface NPSProps {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  error?: string;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
  name?: string;
}

const NPS = React.forwardRef<HTMLDivElement, NPSProps>(
  (
    {
      value: valueProp,
      defaultValue,
      onValueChange,
      error,
      disabled,
      className,
      children,
      name,
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
        disabled: !!disabled,
      }),
      [currentValue, handleSelect, disabled],
    );

    const options =
      children ??
      Array.from({ length: 10 }, (_, i) => {
        const v = String(i + 1);
        return <NPSOption key={v} value={v} />;
      });

    return (
      <NPSErrorContext.Provider value={!!error}>
        <NPSContext.Provider value={contextValue}>
          <div
            ref={ref}
            role="radiogroup"
            aria-invalid={!!error || undefined}
            className={cn("grid font-survey w-full", className)}
            style={{
              gap: "4px",
              gridTemplateColumns: "repeat(10, minmax(0, 1fr))",
            }}
            data-name={name}
          >
            {options}
          </div>
        </NPSContext.Provider>
      </NPSErrorContext.Provider>
    );
  },
);
NPS.displayName = "NPS";

interface NPSContextValue {
  value: string | undefined;
  onSelect: (value: string) => void;
  disabled: boolean;
}

const NPSContext = React.createContext<NPSContextValue | null>(null);

export interface NPSOptionProps {
  value: string;
  focused?: boolean;
  disabled?: boolean;
  className?: string;
}

const NPSOption = React.forwardRef<HTMLButtonElement, NPSOptionProps>(
  ({ value, focused = false, disabled, className }, ref) => {
    const ctx = React.useContext(NPSContext);
    const hasError = React.useContext(NPSErrorContext);
    if (!ctx) {
      throw new Error("NPSOption must be used inside <NPS>");
    }
    const selected = ctx.value === value;
    const isDisabled = disabled ?? ctx.disabled;

    return (
      <Card
        ref={ref}
        shape="square"
        size="sm"
        role="radio"
        aria-checked={selected}
        selected={selected}
        focused={focused}
        disabled={isDisabled}
        onClick={() => {
          if (!isDisabled) ctx.onSelect(value);
        }}
        style={{ minWidth: 0, minHeight: "2.75rem" }}
        className={cn(
          "w-full text-survey-body",
          hasError &&
            "border-survey-destructive data-[state=selected]:border-survey-destructive",
          isDisabled && "cursor-not-allowed opacity-50",
          className,
        )}
      >
        {value}
      </Card>
    );
  },
);
NPSOption.displayName = "NPSOption";

export { NPS, NPSOption };
