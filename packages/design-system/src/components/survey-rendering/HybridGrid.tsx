"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { cn } from "@/lib/utils";
import { AlertCircle, Check } from "../ui/icons";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { TextAnswer } from "./TextAnswer";
import { DropdownAnswer } from "./DropdownAnswer";
import { CheckboxOption, CheckboxGroup } from "./Checkbox";

export interface HybridGridRow {
  id: string;
  label: string;
  disabled?: boolean;
}

interface HybridGridColumnBase {
  id: string;
  label: string;
}

export interface HybridGridTextColumn extends HybridGridColumnBase {
  type: "text";
  placeholder?: string;
}

export interface HybridGridCheckboxColumn extends HybridGridColumnBase {
  type: "checkbox";
  choices: { value: string; label: string }[];
}

export interface HybridGridDropdownColumn extends HybridGridColumnBase {
  type: "dropdown";
  options: { value: string; label: string }[];
  placeholder?: string;
}

export type HybridGridColumn =
  | HybridGridTextColumn
  | HybridGridCheckboxColumn
  | HybridGridDropdownColumn;

/** Per-cell value: string for text/dropdown, string[] of checked choice values for checkbox. */
export type HybridGridCellValue = string | string[];

/** rowId -> columnId -> cell value */
export type HybridGridValue = Record<string, Record<string, HybridGridCellValue>>;

export interface HybridGridProps {
  rows: HybridGridRow[];
  columns: HybridGridColumn[];
  value?: HybridGridValue;
  defaultValue?: HybridGridValue;
  onValueChange?: (value: HybridGridValue) => void;
  error?: string;
  disabled?: boolean;
  className?: string;
  /**
   * Force a specific variant regardless of width.
   * Defaults to 'auto' (responsive to the component's own width via an
   * `@lg` container query, so it adapts inside fixed-width device frames too).
   */
  variant?: "auto" | "desktop" | "mobile";
}

/** True when a cell holds no answer. */
const isCellEmpty = (value: HybridGridCellValue | undefined): boolean =>
  value === undefined ||
  value === "" ||
  (Array.isArray(value) && value.length === 0);

/** True when every cell in a row is empty (used for required-error affordances). */
const isRowEmpty = (
  rowValues: Record<string, HybridGridCellValue> | undefined,
  columns: HybridGridColumn[],
): boolean =>
  !rowValues || columns.every((col) => isCellEmpty(rowValues[col.id]));

const HybridGrid = React.forwardRef<HTMLDivElement, HybridGridProps>(
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
      variant = "auto",
    } = props;

    const desktopVisibility =
      variant === "desktop" ? "block" : variant === "mobile" ? "hidden" : "hidden @lg:block";
    const mobileVisibility =
      variant === "mobile" ? "block" : variant === "desktop" ? "hidden" : "@lg:hidden";

    const [uncontrolledValue, setUncontrolledValue] = React.useState<HybridGridValue>(
      defaultValue ?? {},
    );
    const values = controlledValue ?? uncontrolledValue;

    const setCell = (rowId: string, columnId: string, next: HybridGridCellValue) => {
      const nextValues: HybridGridValue = {
        ...values,
        [rowId]: { ...values[rowId], [columnId]: next },
      };
      if (!controlledValue) {
        setUncontrolledValue(nextValues);
      }
      onValueChange?.(nextValues);
    };

    const hasCheckboxColumn = columns.some((col) => col.type === "checkbox");

    return (
      <div
        ref={ref}
        className={cn("@container flex flex-col gap-4 w-full max-w-2xl mx-auto font-survey", className)}
      >
        {/* Desktop View */}
        <div className={cn(desktopVisibility, "w-full overflow-x-auto")}>
          <table role="grid" className="w-full table-fixed border-collapse">
            {/* Fixed column widths so cells never resize with content or state.
                Each checkbox leaf gets a fixed width; the label, text and
                dropdown columns are left flexible so they share — and fill — the
                remaining grid width equally. */}
            <colgroup>
              <col />
              {columns.map((column) =>
                column.type === "checkbox" ? (
                  column.choices.map((choice) => (
                    <col key={`${column.id}-${choice.value}`} className="w-16" />
                  ))
                ) : (
                  // text & dropdown columns flex to fill the remaining width
                  <col key={column.id} />
                ),
              )}
            </colgroup>
            <thead>
              <tr className="border-b border-survey-border-muted text-survey-foreground text-survey-body font-survey-regular">
                <th className="px-2 py-2" />
                {columns.map((column) => (
                  <th
                    key={column.id}
                    colSpan={column.type === "checkbox" ? column.choices.length : 1}
                    className="px-2 py-2 text-center align-middle font-survey-regular"
                  >
                    {column.label}
                  </th>
                ))}
              </tr>
              {hasCheckboxColumn && (
                <tr className="border-b border-survey-border-muted text-survey-muted-foreground text-survey-body font-survey-regular">
                  <th className="px-2 py-1" />
                  {columns.map((column) =>
                    column.type === "checkbox" ? (
                      column.choices.map((choice) => (
                        <th
                          key={`${column.id}-${choice.value}`}
                          className="px-2 py-1 text-center align-middle font-survey-regular"
                        >
                          {choice.label}
                        </th>
                      ))
                    ) : (
                      <th key={column.id} className="px-2 py-1" />
                    ),
                  )}
                </tr>
              )}
            </thead>
            <tbody>
              {rows.map((row, i) => {
                const rowDisabled = disabled || row.disabled;
                const rowEmpty = isRowEmpty(values[row.id], columns);
                return (
                  <tr
                    key={row.id}
                    className={cn(
                      "border-b border-survey-border-muted transition-colors",
                      // Zebra striping: alternate rows use the LookupTable token
                      // (border-interactive at 0.06 opacity).
                      i % 2 === 1 && "bg-[hsl(var(--survey-border-interactive)_/_0.06)]",
                      // Row hover matches the LookupTable (survey-muted-background
                      // = border-interactive / 0.2).
                      !rowDisabled && "hover:bg-survey-muted-background",
                    )}
                  >
                    <th
                      id={`hg-label-${row.id}`}
                      scope="row"
                      className={cn(
                        "px-2 py-3 text-left text-survey-foreground text-survey-body font-survey-regular align-middle whitespace-nowrap",
                        rowDisabled && "opacity-50",
                      )}
                    >
                      {row.label}
                    </th>
                    {columns.map((column) => (
                      <HybridGridDesktopCell
                        key={column.id}
                        row={row}
                        column={column}
                        value={values[row.id]?.[column.id]}
                        disabled={rowDisabled}
                        hasError={!!error && rowEmpty}
                        onChange={(next) => setCell(row.id, column.id, next)}
                      />
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Mobile View - Accordion */}
        <div className={cn(mobileVisibility, "w-full")}>
          <Accordion
            type="single"
            collapsible
            className={cn(
              "w-full flex flex-col rounded-survey-md overflow-hidden border border-survey-border-muted",
            )}
          >
            {rows.map((row) => {
              const rowDisabled = disabled || row.disabled;
              const rowEmpty = isRowEmpty(values[row.id], columns);
              return (
                <AccordionItem
                  key={row.id}
                  value={row.id}
                  className="w-full rounded-none last:border-b-0 border-b border-survey-border-muted"
                >
                  <AccordionTrigger
                    className={cn(
                      "px-4 py-4 hover:no-underline text-left text-survey-foreground text-survey-body font-survey-regular rounded-none",
                      rowDisabled && "opacity-50 cursor-not-allowed",
                    )}
                  >
                    <span className="flex items-center gap-2">
                      {!!error && rowEmpty && (
                        <AlertCircle className="flex-shrink-0 w-4 h-4 text-survey-destructive" />
                      )}
                      {row.label}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4 pt-0">
                    <div className="flex flex-col gap-5">
                      {columns.map((column) => (
                        <HybridGridMobileField
                          key={column.id}
                          row={row}
                          column={column}
                          value={values[row.id]?.[column.id]}
                          disabled={rowDisabled}
                          hasError={!!error && rowEmpty}
                          onChange={(next) => setCell(row.id, column.id, next)}
                        />
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    );
  },
);
HybridGrid.displayName = "HybridGrid";

interface HybridGridCellProps {
  row: HybridGridRow;
  column: HybridGridColumn;
  value: HybridGridCellValue | undefined;
  disabled?: boolean;
  hasError?: boolean;
  onChange: (next: HybridGridCellValue) => void;
}

/** Toggle a choice value within a checkbox cell's string[]. */
const toggleChoice = (
  current: HybridGridCellValue | undefined,
  choiceValue: string,
  checked: boolean,
): string[] => {
  const list = Array.isArray(current) ? current : [];
  return checked
    ? [...list, choiceValue]
    : list.filter((v) => v !== choiceValue);
};

const HybridGridDesktopCell = ({
  row,
  column,
  value,
  disabled,
  hasError,
  onChange,
}: HybridGridCellProps) => {
  if (column.type === "text") {
    return (
      <td className={cn("px-2 py-3 align-middle", disabled && "opacity-50")}>
        <TextAnswer
          aria-labelledby={`hg-label-${row.id}`}
          placeholder={column.placeholder}
          value={typeof value === "string" ? value : ""}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          error={hasError ? " " : undefined}
        />
      </td>
    );
  }

  if (column.type === "dropdown") {
    return (
      <td className={cn("px-2 py-3 align-middle", disabled && "opacity-50")}>
        <DropdownAnswer
          options={column.options}
          placeholder={column.placeholder ?? "Select an answer…"}
          value={typeof value === "string" && value !== "" ? value : undefined}
          onValueChange={(v) => onChange(v)}
          disabled={disabled}
          error={hasError ? " " : undefined}
          fullWidth
        />
      </td>
    );
  }

  // checkbox: one <td> per choice, aligned under the sub-header
  const checkedValues = Array.isArray(value) ? value : [];
  return (
    <>
      {column.choices.map((choice) => {
        const id = `hg-${row.id}-${column.id}-${choice.value}`;
        return (
          <td key={choice.value} className={cn("p-0 align-middle", disabled && "opacity-50")}>
            <label
              htmlFor={id}
              className={cn(
                "flex items-center justify-center p-2 cursor-pointer w-full h-full border-2 border-transparent transition-all",
                "has-[:focus-visible]:border-survey-border-interactive",
                disabled && "cursor-not-allowed",
              )}
            >
              <CheckboxPrimitive.Root
                id={id}
                checked={checkedValues.includes(choice.value)}
                onCheckedChange={(c) => onChange(toggleChoice(value, choice.value, c === true))}
                disabled={disabled}
                aria-labelledby={`hg-label-${row.id}`}
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
            </label>
          </td>
        );
      })}
    </>
  );
};

const HybridGridMobileField = ({
  row,
  column,
  value,
  disabled,
  hasError,
  onChange,
}: HybridGridCellProps) => {
  const checkedValues = Array.isArray(value) ? value : [];

  return (
    <div className="flex flex-col gap-2">
      <span
        className={cn(
          "text-survey-foreground text-survey-body font-survey-regular",
          disabled && "text-survey-muted-foreground",
        )}
      >
        {column.label}
      </span>

      {column.type === "text" && (
        <TextAnswer
          placeholder={column.placeholder}
          value={typeof value === "string" ? value : ""}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          error={hasError ? " " : undefined}
        />
      )}

      {column.type === "dropdown" && (
        <DropdownAnswer
          options={column.options}
          placeholder={column.placeholder ?? "Select an answer…"}
          value={typeof value === "string" && value !== "" ? value : undefined}
          onValueChange={(v) => onChange(v)}
          disabled={disabled}
          error={hasError ? " " : undefined}
          fullWidth
        />
      )}

      {column.type === "checkbox" && (
        <CheckboxGroup error={hasError ? " " : undefined}>
          {column.choices.map((choice) => (
            <CheckboxOption
              key={choice.value}
              id={`hg-m-${row.id}-${column.id}-${choice.value}`}
              label={choice.label}
              checked={checkedValues.includes(choice.value)}
              onCheckedChange={(c) => onChange(toggleChoice(value, choice.value, c === true))}
              disabled={disabled}
            />
          ))}
        </CheckboxGroup>
      )}
    </div>
  );
};

export { HybridGrid };
