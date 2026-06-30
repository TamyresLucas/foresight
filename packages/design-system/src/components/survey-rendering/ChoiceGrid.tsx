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

export interface ChoiceGridColumn {
  value: string;
  label: string;
}

export interface ChoiceGridRow {
  id: string;
  label: string;
}

export interface ChoiceGridProps {
  rows: ChoiceGridRow[];
  columns: ChoiceGridColumn[];
  value?: Record<string, string>; // rowId -> columnValue
  defaultValue?: Record<string, string>;
  onValueChange?: (value: Record<string, string>) => void;
  error?: string;
  className?: string;
  /**
   * Force a specific variant regardless of width.
   * Defaults to 'auto' (responsive to the component's own width via an
   * `@lg` container query, so it adapts inside fixed-width device frames too).
   */
  variant?: 'auto' | 'desktop' | 'mobile';
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
      className,
      variant = 'auto',
      ...rest
    } = props;

    const desktopVisibility =
      variant === 'desktop' ? 'block' : variant === 'mobile' ? 'hidden' : 'hidden @lg:block';
    const mobileVisibility =
      variant === 'mobile' ? 'block' : variant === 'desktop' ? 'hidden' : '@lg:hidden';

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
        className={cn("@container flex flex-col gap-4 w-full max-w-2xl mx-auto font-survey", className)}
      >
          {/* Desktop View */}
          <div className={cn(desktopVisibility, "w-full overflow-x-auto")}>
            <table role="grid" className="w-full table-fixed border-collapse">
              {/* Equal, content- and state-independent column widths: every
                  column (label included) fills the grid the same way. */}
              <colgroup>
                <col style={{ width: `${100 / (columns.length + 1)}%` }} />
                {columns.map((column) => (
                  <col key={column.value} style={{ width: `${100 / (columns.length + 1)}%` }} />
                ))}
              </colgroup>
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
                {rows.map((row, i) => (
                  <RadioGroupPrimitive.Root
                    key={row.id}
                    asChild
                    value={values[row.id]}
                    onValueChange={(val) => handleValueChange(row.id, val)}
                  >
                    <tr className={cn(
                      "group/row border-b border-survey-border-muted transition-colors hover:bg-survey-muted-background",
                      // Zebra striping: alternate rows use the LookupTable token
                      // (border-interactive at 0.06 opacity).
                      i % 2 === 1 && "bg-[hsl(var(--survey-border-interactive)_/_0.06)]",
                      forceHover && "bg-survey-muted-background"
                    )}>
                      <th
                        id={`label-${row.id}`}
                        scope="row"
                        className="px-2 py-2 text-left text-survey-foreground text-survey-body font-survey-regular align-middle"
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
                          forceHover={forceHover}
                          hasError={!!error && !values[row.id]}
                        />
                      ))}
                    </tr>
                  </RadioGroupPrimitive.Root>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile View - Accordion */}
          <div className={cn(mobileVisibility, "w-full")}>
            <Accordion type="single" collapsible className={cn("w-full flex flex-col rounded-survey-md overflow-hidden border border-survey-border-muted")}>
              {rows.map((row) => (
                <AccordionItem
                  key={row.id}
                  value={row.id}
                  className={cn(
                    "w-full rounded-none last:border-b-0 border-b border-survey-border-muted"
                  )}
                >
                  <AccordionTrigger className="px-4 py-4 hover:no-underline text-left text-survey-foreground text-survey-body font-survey-regular rounded-none">
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
                    >
                      {columns.map((column) => (
                        <ChoiceGridMobileOption
                          key={column.value}
                          column={column}
                          rowId={row.id}
                          isFocused={focusedRow === row.id && focusedColumn === column.value}
                          hasError={!!error && !values[row.id]}
                        />
                      ))}
                    </RadioGroupPrimitive.Root>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
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
  forceHover?: boolean;
  hasError?: boolean;
}

const ChoiceGridCell = ({
  rowId,
  columnValue,
  isFocused,
  hasError,
}: ChoiceGridCellProps) => {
  const cellId = `cell-${rowId}-${columnValue}`;

  return (
    <td className="p-0 transition-colors">
      <label
        htmlFor={cellId}
        className={cn(
          "flex items-center justify-center p-2 cursor-pointer w-full h-full border-2 border-transparent transition-all",
          isFocused && "border-survey-border-interactive",
          "has-[:focus-visible]:border-survey-border-interactive",
        )}
      >
        <RadioGroupPrimitive.Item
          id={cellId}
          value={columnValue}
          aria-labelledby={`label-${rowId}`}
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
      </label>
    </td>
  );
};

const ChoiceGridMobileOption = ({
  column,
  rowId,
  isFocused,
  hasError,
}: {
  column: ChoiceGridColumn;
  rowId: string;
  isFocused: boolean;
  hasError?: boolean;
}) => {
  const id = `mobile-${rowId}-${column.value}`;

  return (
    <label
      htmlFor={id}
      className={cn(
        "flex items-center gap-3 w-full px-4 py-4 cursor-pointer select-none rounded-none",
        "transition-colors hover:bg-survey-muted-background",
        isFocused && "ring-2 ring-survey-border-interactive ring-inset",
        "has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-survey-border-interactive has-[:focus-visible]:ring-inset",
      )}
    >
      <RadioGroupPrimitive.Item
        id={id}
        value={column.value}
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
        {column.label}
      </span>
    </label>
  );
};

export { ChoiceGrid };
