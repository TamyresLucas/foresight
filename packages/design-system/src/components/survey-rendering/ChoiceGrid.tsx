"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { cn } from "@/lib/utils";
import { AlertCircle } from "../ui/icons";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const ChoiceGridErrorContext = React.createContext<boolean>(false);

export interface ChoiceGridColumn {
  value: string;
  label: string;
}

export interface ChoiceGridRow {
  id: string;
  label: string;
  disabled?: boolean;
}

export interface ChoiceGridProps {
  rows: ChoiceGridRow[];
  columns: ChoiceGridColumn[];
  value?: Record<string, string>; // rowId -> columnValue
  defaultValue?: Record<string, string>;
  onValueChange?: (value: Record<string, string>) => void;
  error?: string;
  disabled?: boolean;
  className?: string;
}

/** @internal - simulation props for Storybook */
interface InternalChoiceGridProps extends ChoiceGridProps {
  focusedRow?: string;
  focusedColumn?: string;
  forceHover?: boolean;
}

const ChoiceGrid = React.forwardRef<HTMLDivElement, ChoiceGridProps>(
  (props, ref) => {
    const {
      rows,
      columns,
      value: controlledValue,
      defaultValue,
      onValueChange,
      error,
      disabled = false,
      className,
      ...rest
    } = props;

    // Simulation props for storybook focus testing
    const { focusedRow, focusedColumn, forceHover } = rest as InternalChoiceGridProps;

    const [uncontrolledValue, setUncontrolledValue] = React.useState<Record<string, string>>(defaultValue ?? {});
    const values = controlledValue ?? uncontrolledValue;

    const handleValueChange = (rowId: string, columnValue: string) => {
      const nextValues = { ...values, [rowId]: columnValue };
      if (!controlledValue) {
        setUncontrolledValue(nextValues);
      }
      onValueChange?.(nextValues);
    };

    return (
      <div
        ref={ref}
        className={cn("flex flex-col gap-4 w-full max-w-2xl mx-auto font-survey", className)}
      >
        <ChoiceGridErrorContext.Provider value={!!error}>
          {/* Desktop View */}
          <div className="hidden md:block w-full overflow-x-auto border border-survey-border-muted rounded-survey-md">
            <table role="grid" className="w-full border-collapse">
              <thead>
                <tr className="border-b border-survey-border-muted text-survey-foreground text-survey-body font-survey-regular">
                  <th className="px-2 py-2" /> {/* Empty corner */}
                  {columns.map((column) => (
                    <th
                      key={column.value}
                      className="px-2 py-2 text-center align-middle font-survey-regular"
                    >
                      {column.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <RadioGroupPrimitive.Root
                    key={row.id}
                    asChild
                    value={values[row.id]}
                    onValueChange={(val) => handleValueChange(row.id, val)}
                    disabled={disabled || row.disabled}
                  >
                    <tr className={cn(
                      "group/row border-b border-survey-border-muted transition-colors hover:bg-survey-muted-background/10",
                      forceHover && "bg-survey-muted-background/10"
                    )}>
                      <th
                        id={`label-${row.id}`}
                        scope="row"
                        className={cn(
                          "px-2 py-2 text-left text-survey-foreground text-survey-body font-survey-regular align-middle",
                          (disabled || row.disabled) && "opacity-50"
                        )}
                      >
                        {row.label}
                      </th>
                      {columns.map((column, index) => (
                        <ChoiceGridCell
                          key={column.value}
                          rowId={row.id}
                          columnValue={column.value}
                          isLast={index === columns.length - 1}
                          isFocused={focusedRow === row.id && focusedColumn === column.value}
                          disabled={disabled || row.disabled}
                          forceHover={forceHover}
                        />
                      ))}
                    </tr>
                  </RadioGroupPrimitive.Root>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile View - Accordion */}
          <div className="md:hidden w-full flex flex-col">
            <Accordion type="single" collapsible className="w-full flex flex-col border border-survey-border-muted rounded-survey-md overflow-hidden">
              {rows.map((row) => (
                <AccordionItem
                  key={row.id}
                  value={row.id}
                  className={cn(
                    "w-full border-b border-survey-border-muted rounded-none last:border-b-0"
                  )}
                >
                  <AccordionTrigger className={cn(
                    "px-4 py-4 hover:no-underline text-left text-survey-foreground text-survey-body font-survey-regular rounded-none",
                    (disabled || row.disabled) && "opacity-50 cursor-not-allowed"
                  )}>
                    <span className="flex items-center gap-2">
                      {error && !values[row.id] && (
                        <AlertCircle className="flex-shrink-0 w-4 h-4 text-survey-destructive" />
                      )}
                      {row.label}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="p-0">
                    <RadioGroupPrimitive.Root
                      className="flex flex-col p-0"
                      value={values[row.id]}
                      onValueChange={(val) => handleValueChange(row.id, val)}
                      disabled={disabled || row.disabled}
                    >
                      {columns.map((column) => (
                        <ChoiceGridMobileOption
                          key={column.value}
                          column={column}
                          rowId={row.id}
                          isFocused={focusedRow === row.id && focusedColumn === column.value}
                          disabled={disabled || row.disabled}
                        />
                      ))}
                    </RadioGroupPrimitive.Root>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </ChoiceGridErrorContext.Provider>
        {error && (
          <p
            className="text-xs font-survey font-survey-regular text-survey-destructive w-full"
            style={{ marginTop: 'var(--survey-margin)' }}
          >
            {error}
          </p>
        )}
      </div>
    );
  }
);
ChoiceGrid.displayName = "ChoiceGrid";

interface ChoiceGridCellProps {
  rowId: string;
  columnValue: string;
  isLast: boolean;
  isFocused: boolean;
  disabled?: boolean;
  forceHover?: boolean;
}

const ChoiceGridCell = ({
  rowId,
  columnValue,
  isFocused,
  disabled,
}: ChoiceGridCellProps) => {
  const hasError = React.useContext(ChoiceGridErrorContext);
  const cellId = `cell-${rowId}-${columnValue}`;

  return (
    <td
      className={cn(
        "p-0 transition-colors",
        (disabled) && "opacity-50"
      )}
    >
      <label
        htmlFor={cellId}
        className={cn(
          "flex items-center justify-center p-2 cursor-pointer w-full h-full border-2 border-transparent transition-all",
          isFocused && "border-survey-border-interactive",
          "has-[:focus-visible]:border-survey-border-interactive",
          disabled && "cursor-not-allowed"
        )}
      >
        <RadioGroupPrimitive.Item
          id={cellId}
          value={columnValue}
          disabled={disabled}
          aria-labelledby={`label-${rowId}`}
          className={cn(
            "flex-shrink-0 w-4 h-4 rounded-full border-2 transition-colors",
            "border-survey-border-interactive",
            "data-[state=checked]:border-survey-border-selected data-[state=checked]:bg-survey-border-selected",
            "focus:outline-none focus-visible:outline-none",
            hasError && "border-survey-destructive data-[state=checked]:border-survey-destructive data-[state=checked]:bg-survey-destructive",
          )}
        >
          <RadioGroupPrimitive.Indicator className="flex items-center justify-center w-full h-full">
            <span className="block w-1.5 h-1.5 rounded-full bg-white" />
          </RadioGroupPrimitive.Indicator>
        </RadioGroupPrimitive.Item>
      </label>
    </td>
  );
};

const ChoiceGridMobileOption = ({
  column,
  rowId,
  isFocused,
  disabled,
}: {
  column: ChoiceGridColumn;
  rowId: string;
  isFocused: boolean;
  disabled?: boolean;
}) => {
  const hasError = React.useContext(ChoiceGridErrorContext);
  const id = `mobile-${rowId}-${column.value}`;

  return (
    <label
      htmlFor={id}
      className={cn(
        "flex items-center gap-3 w-full px-4 py-4 cursor-pointer select-none rounded-none",
        "transition-colors hover:bg-survey-muted-background",
        isFocused && "ring-2 ring-survey-border-interactive ring-inset",
        "has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-survey-border-interactive has-[:focus-visible]:ring-inset",
        disabled && "cursor-not-allowed opacity-50 hover:bg-transparent"
      )}
    >
      <RadioGroupPrimitive.Item
        id={id}
        value={column.value}
        disabled={disabled}
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
      <span className={cn(
        "text-survey-foreground text-survey-body font-survey-regular leading-none",
        disabled && "text-survey-muted-foreground"
      )}>
        {column.label}
      </span>
    </label>
  );
};

export { ChoiceGrid };
