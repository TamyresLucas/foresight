"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { cn } from "@/lib/utils";

const RadioGroupErrorContext = React.createContext<boolean>(false);

export interface RadioGroupProps
  extends Omit<React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>, 'disabled'> {
  error?: string;
}

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  RadioGroupProps
>(({ className, error, ...props }, ref) => {
  return (
    <RadioGroupErrorContext.Provider value={!!error}>
      <RadioGroupPrimitive.Root
        className={cn("flex flex-col font-survey w-full", className)}
        style={{ gap: 'var(--survey-margin)' }}
        {...props}
        ref={ref}
      />
    </RadioGroupErrorContext.Provider>
  );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

export interface RadioGroupOptionProps {
  value: string;
  label: string;
  id?: string;
  focused?: boolean;
  className?: string;
  /** When true, shows a text input below this option when it is selected */
  openEnd?: boolean;
  openEndPlaceholder?: string;
  /** Whether this option is currently selected (required to show the open-end input) */
  checked?: boolean;
  openEndValue?: string;
  onOpenEndChange?: (value: string) => void;
}

const RadioGroupOption = React.forwardRef<
  HTMLDivElement,
  RadioGroupOptionProps
>(({ value, label, id, focused = false, className, openEnd, openEndPlaceholder, checked, openEndValue, onOpenEndChange }, ref) => {
  const itemId = id ?? `survey-option-${value}`;
  const hasError = React.useContext(RadioGroupErrorContext);
  const showOpenEnd = openEnd && checked;

  return (
    <div
      ref={ref}
      className={cn(
        "rounded-survey-md border bg-survey-background",
        "transition-colors",
        "border-survey-border-muted",
        "has-[[data-state=checked]]:border-2 has-[[data-state=checked]]:border-survey-border-selected",
        focused && "ring-2 ring-survey-border-interactive ring-offset-2 ring-offset-survey-background",
        focused && "[&:has([data-state=checked])]:ring-survey-border-selected",
        "has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-survey-border-interactive has-[:focus-visible]:ring-offset-2 has-[:focus-visible]:ring-offset-survey-background",
        "[&:has([data-state=checked]):has(:focus-visible)]:ring-survey-border-selected",
        className,
      )}
    >
      <label
        htmlFor={itemId}
        className={cn(
          "flex items-center gap-3 w-full px-4 py-3 cursor-pointer select-none",
          "hover:bg-survey-muted-background rounded-survey-md",
          showOpenEnd && "rounded-b-none",
        )}
      >
        <RadioGroupPrimitive.Item
          id={itemId}
          value={value}
          aria-invalid={hasError || undefined}
          className={cn(
            "flex-shrink-0 w-4 h-4 rounded-full border-2 transition-colors",
            "border-survey-border-interactive",
            "data-[state=checked]:border-survey-border-selected data-[state=checked]:bg-survey-border-selected",
            "focus:outline-none focus-visible:outline-none",
          )}
        >
          <RadioGroupPrimitive.Indicator className="flex items-center justify-center w-full h-full">
            <span className="block w-1.5 h-1.5 rounded-full bg-white" />
          </RadioGroupPrimitive.Indicator>
        </RadioGroupPrimitive.Item>
        <span className="text-survey-foreground text-survey-body font-survey-regular leading-none">
          {label}
        </span>
      </label>
      {showOpenEnd && (
        <div className="px-4 pb-1">
          <input
            type="text"
            value={openEndValue ?? ""}
            onChange={(e) => onOpenEndChange?.(e.target.value)}
            placeholder={openEndPlaceholder ?? "Please specify…"}
            onClick={(e) => e.stopPropagation()}
            className={cn(
              "w-full bg-transparent border-0 border-b border-survey-border-interactive",
              "text-survey-foreground text-survey-body font-survey-regular",
              "placeholder:text-survey-muted-foreground",
              "focus:outline-none focus:border-survey-border-interactive",
              "py-1 pb-1",
            )}
          />
        </div>
      )}
    </div>
  );
});
RadioGroupOption.displayName = "RadioGroupOption";

export { RadioGroup, RadioGroupOption };
