"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "../ui/icons";
import { cn } from "@/lib/utils";

const CheckboxGroupErrorContext = React.createContext<boolean>(false);

export interface CheckboxGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  error?: string;
}

const CheckboxGroup = React.forwardRef<HTMLDivElement, CheckboxGroupProps>(
  ({ className, error, children, style, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex flex-col w-full", className)}
        style={{ gap: 'var(--survey-margin)', ...style }}
        {...props}
      >
        <CheckboxGroupErrorContext.Provider value={!!error}>
          {children}
        </CheckboxGroupErrorContext.Provider>
      </div>
    );
  }
);
CheckboxGroup.displayName = "CheckboxGroup";

export interface CheckboxOptionProps {
  label: string;
  id?: string;
  focused?: boolean;
  error?: boolean;
  disabled?: boolean;
  checked?: boolean | "indeterminate";
  onCheckedChange?: (checked: boolean | "indeterminate") => void;
  className?: string;
  /** When true, shows a text input below this option when it is checked */
  openEnd?: boolean;
  openEndPlaceholder?: string;
  openEndValue?: string;
  onOpenEndChange?: (value: string) => void;
}

const CheckboxOption = React.forwardRef<HTMLDivElement, CheckboxOptionProps>(
  ({ label, id, focused = false, error, disabled = false, checked, onCheckedChange, className, openEnd, openEndPlaceholder, openEndValue, onOpenEndChange }, ref) => {
    const itemId = id ?? `survey-checkbox-${label}`;
    const groupError = React.useContext(CheckboxGroupErrorContext);
    const hasError = error ?? groupError;
    const showOpenEnd = openEnd && checked === true;

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
          disabled && "opacity-50",
          className,
        )}
      >
        <label
          htmlFor={itemId}
          className={cn(
            "flex items-center gap-3 w-full px-4 py-3 cursor-pointer select-none",
            "hover:bg-survey-muted-background rounded-survey-md",
            showOpenEnd && "rounded-b-none",
            disabled && "cursor-not-allowed",
          )}
        >
          <CheckboxPrimitive.Root
            id={itemId}
            checked={checked}
            onCheckedChange={onCheckedChange}
            disabled={disabled}
            aria-invalid={hasError || undefined}
            className={cn(
              "flex-shrink-0 w-4 h-4 rounded-[4px] border-2 transition-colors grid place-content-center",
              "border-survey-border-interactive",
              "data-[state=checked]:border-survey-border-selected data-[state=checked]:bg-survey-border-selected",
              "focus:outline-none focus-visible:outline-none",
            )}
          >
            <CheckboxPrimitive.Indicator className="flex items-center justify-center text-white">
              <Check className="h-3 w-3 stroke-[3]" />
            </CheckboxPrimitive.Indicator>
          </CheckboxPrimitive.Root>
          <span className={cn(
            "text-survey-foreground text-survey-body font-survey-regular leading-none",
            disabled && "text-survey-muted-foreground"
          )}>
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
                "w-full bg-transparent border-0 border-b border-survey-border-muted",
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
  }
);
CheckboxOption.displayName = "CheckboxOption";

export { CheckboxOption, CheckboxGroup };
