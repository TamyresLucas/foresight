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
  ({ className, error, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("flex flex-col gap-2 w-full", className)} {...props}>
        <CheckboxGroupErrorContext.Provider value={!!error}>
          {children}
        </CheckboxGroupErrorContext.Provider>
        {error && (
          <p className="text-xs font-survey font-survey-regular text-survey-destructive w-full">
            {error}
          </p>
        )}
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
  checked?: boolean | "indeterminate";
  onCheckedChange?: (checked: boolean | "indeterminate") => void;
  className?: string;
}

const CheckboxOption = React.forwardRef<HTMLLabelElement, CheckboxOptionProps>(
  ({ label, id, focused = false, error, checked, onCheckedChange, className }, ref) => {
    const itemId = id ?? `survey-checkbox-${label}`;
    const groupError = React.useContext(CheckboxGroupErrorContext);
    const hasError = error ?? groupError;
    return (
      <label
        ref={ref}
        htmlFor={itemId}
        className={cn(
          "flex items-center gap-3 w-full px-4 py-3 cursor-pointer select-none",
          "rounded-survey-md border border-survey-border-muted bg-survey-background",
          "transition-colors hover:bg-survey-muted-background",
          "has-[[data-state=checked]]:border-survey-border-selected",
          focused && "ring-2 ring-survey-border-interactive ring-offset-2 ring-offset-survey-background",
          focused && "[&:has([data-state=checked])]:ring-survey-border-selected",
          "has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-survey-border-interactive has-[:focus-visible]:ring-offset-2 has-[:focus-visible]:ring-offset-survey-background",
          "[&:has([data-state=checked]):has(:focus-visible)]:ring-survey-border-selected",
          hasError && "border-2 border-survey-destructive has-[[data-state=checked]]:border-survey-destructive ring-0 has-[:focus-visible]:ring-0",
          className,
        )}
      >
        <CheckboxPrimitive.Root
          id={itemId}
          checked={checked}
          onCheckedChange={onCheckedChange}
          className={cn(
            "flex-shrink-0 w-4 h-4 rounded-[4px] border-2 transition-colors grid place-content-center",
            "border-survey-border-interactive",
            "data-[state=checked]:border-survey-border-selected data-[state=checked]:bg-survey-border-selected",
            "focus:outline-none focus-visible:outline-none",
            hasError && "border-survey-destructive data-[state=checked]:border-survey-destructive data-[state=checked]:bg-survey-destructive",
          )}
        >
          <CheckboxPrimitive.Indicator className="flex items-center justify-center text-white">
            <Check className="h-3 w-3 stroke-[3]" />
          </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
        <span className="text-survey-foreground text-survey-body font-survey-regular leading-none">
          {label}
        </span>
      </label>
    );
  }
);
CheckboxOption.displayName = "CheckboxOption";

export { CheckboxOption, CheckboxGroup };
