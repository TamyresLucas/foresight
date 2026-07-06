"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { cn } from "@/lib/utils";
import { Check } from "../ui/icons";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { TextAnswer } from "./TextAnswer";
import { DropdownAnswer } from "./DropdownAnswer";
import { CheckboxOption, CheckboxGroup } from "./Checkbox";
import { RadioGroup, RadioGroupOption } from "./RadioGroup";
import { SurveySlider, type SliderValue } from "./Slider";
import { StarRating } from "./StarRating";
import { ImageSelector, type ImageSelectorOption } from "./ImageSelector";

export interface HybridGridRow {
  id: string;
  label: string;
}

interface HybridGridColumnBase {
  id: string;
  label: string;
  /**
   * Override the desktop column's minimum width (px number or any CSS length).
   * Defaults to a per-type floor sized to fit the column's control + content.
   */
  minWidth?: number | string;
}

export interface HybridGridTextColumn extends HybridGridColumnBase {
  type: "text";
  placeholder?: string;
}

/** Single-line answer constrained to numbers. */
export interface HybridGridNumericColumn extends HybridGridColumnBase {
  type: "numeric";
  placeholder?: string;
  min?: number;
  max?: number;
  step?: number;
}

export interface HybridGridCheckboxColumn extends HybridGridColumnBase {
  type: "checkbox";
  choices: { value: string; label: string }[];
}

/** Single-select choice column, rendered as a radio matrix (one sub-column per choice). */
export interface HybridGridRadioColumn extends HybridGridColumnBase {
  type: "radio";
  choices: { value: string; label: string }[];
}

export interface HybridGridDropdownColumn extends HybridGridColumnBase {
  type: "dropdown";
  options: { value: string; label: string }[];
  placeholder?: string;
}

export interface HybridGridSliderColumn extends HybridGridColumnBase {
  type: "slider";
  min?: number;
  max?: number;
  step?: number;
  minLabel?: string;
  maxLabel?: string;
  showValue?: boolean;
}

export interface HybridGridStarRatingColumn extends HybridGridColumnBase {
  type: "starrating";
  max?: number;
}

export interface HybridGridImageSelectorColumn extends HybridGridColumnBase {
  type: "imageselector";
  options: ImageSelectorOption[];
  /** `single` keeps at most one image selected; `multiple` allows any number. Defaults to `single`. */
  selectionMode?: "single" | "multiple";
}

export type HybridGridColumn =
  | HybridGridTextColumn
  | HybridGridNumericColumn
  | HybridGridCheckboxColumn
  | HybridGridRadioColumn
  | HybridGridDropdownColumn
  | HybridGridSliderColumn
  | HybridGridStarRatingColumn
  | HybridGridImageSelectorColumn;

/**
 * Per-cell value, by column type:
 * - text / numeric / dropdown / radio → `string`
 * - checkbox / imageselector → `string[]`
 * - slider → `number[]` (one entry)
 * - starrating → `number`
 */
export type HybridGridCellValue = string | string[] | number | number[];

/** rowId -> columnId -> cell value */
export type HybridGridValue = Record<string, Record<string, HybridGridCellValue>>;

export interface HybridGridProps {
  rows: HybridGridRow[];
  columns: HybridGridColumn[];
  value?: HybridGridValue;
  defaultValue?: HybridGridValue;
  onValueChange?: (value: HybridGridValue) => void;
  className?: string;
  /**
   * Force a specific variant regardless of width.
   * Defaults to 'auto' (responsive to the component's own width via an
   * `@lg` container query, so it adapts inside fixed-width device frames too).
   */
  variant?: "auto" | "desktop" | "mobile";
}

/** Choice columns rendered as a sub-column per option (matrix layout). */
const isSubColumn = (
  column: HybridGridColumn,
): column is HybridGridCheckboxColumn | HybridGridRadioColumn =>
  column.type === "checkbox" || column.type === "radio";

/** Width floor (px) for a single radio/checkbox choice sub-column. */
const SUB_COLUMN_MIN_WIDTH = 64;

/**
 * Per-type minimum width (px) for a desktop column, sized so each control fits
 * its realistic content (so the column never needs to grow past the floor in
 * practice — keeping widths stable as cell content/state changes). `starrating`,
 * `radio` and `checkbox` are computed in `columnMinWidth` instead.
 */
const COLUMN_MIN_WIDTH: Record<HybridGridColumn["type"], number> = {
  text: 220,
  numeric: 120,
  dropdown: 180,
  slider: 200,
  imageselector: 200,
  starrating: 0,
  radio: 0,
  checkbox: 0,
};

/** Resolve the min-width floor for a top-level column (author override wins). */
const columnMinWidth = (column: HybridGridColumn): number | string => {
  if (column.minWidth != null) return column.minWidth;
  if (column.type === "starrating") return (column.max ?? 5) * 36 + 24;
  if (isSubColumn(column)) return column.choices.length * SUB_COLUMN_MIN_WIDTH;
  return COLUMN_MIN_WIDTH[column.type];
};

const HybridGrid = React.forwardRef<HTMLDivElement, HybridGridProps>(
  (props, ref) => {
    const {
      rows,
      columns,
      value: controlledValue,
      defaultValue,
      onValueChange,
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

    const hasSubColumn = columns.some(isSubColumn);

    return (
      <div
        ref={ref}
        className={cn("@container flex flex-col gap-4 w-full max-w-2xl mx-auto font-survey", className)}
      >
        {/* Desktop View */}
        <div className={cn(desktopVisibility, "w-full overflow-x-auto")}>
          {/* Auto layout + per-column min-widths: a column never shrinks below
              its content/control (the floor), still grows to share surplus width
              when the container is wide, and the wrapper scrolls horizontally
              when the floors exceed it. Floors live on the cells (min-width on
              <col> is unreliable in auto layout). */}
          <table role="grid" className="w-full table-auto border-collapse">
            <thead>
              <tr className="border-b border-survey-border-muted text-survey-foreground text-survey-body font-survey-regular">
                <th className="px-2 py-2" />
                {columns.map((column) => (
                  <th
                    key={column.id}
                    colSpan={isSubColumn(column) ? column.choices.length : 1}
                    className="px-2 py-2 text-center align-middle font-survey-regular whitespace-nowrap"
                    style={isSubColumn(column) ? undefined : { minWidth: columnMinWidth(column) }}
                  >
                    {column.label}
                  </th>
                ))}
              </tr>
              {hasSubColumn && (
                <tr className="border-b border-survey-border-muted text-survey-muted-foreground text-survey-body font-survey-regular">
                  <th className="px-2 py-1" />
                  {columns.map((column) =>
                    isSubColumn(column) ? (
                      column.choices.map((choice) => (
                        <th
                          key={`${column.id}-${choice.value}`}
                          className="px-2 py-1 text-center align-middle font-survey-regular whitespace-nowrap"
                          style={{ minWidth: SUB_COLUMN_MIN_WIDTH }}
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
                      "hover:bg-survey-muted-background",
                    )}
                  >
                    <th
                      id={`hg-label-${row.id}`}
                      scope="row"
                      className="px-2 py-3 text-left text-survey-foreground text-survey-body font-survey-regular align-middle whitespace-nowrap"
                    >
                      {row.label}
                    </th>
                    {columns.map((column) => (
                      <HybridGridDesktopCell
                        key={column.id}
                        row={row}
                        column={column}
                        value={values[row.id]?.[column.id]}
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
              return (
                <AccordionItem
                  key={row.id}
                  value={row.id}
                  className="w-full rounded-none last:border-b-0 border-b border-survey-border-muted"
                >
                  <AccordionTrigger className="px-4 py-4 hover:no-underline text-left text-survey-foreground text-survey-body font-survey-regular rounded-none">
                    <span className="flex items-center gap-2">
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
  onChange: (next: HybridGridCellValue) => void;
}

/** Toggle a choice value within a checkbox cell's string[]. */
const toggleChoice = (
  current: HybridGridCellValue | undefined,
  choiceValue: string,
  checked: boolean,
): string[] => {
  const list = Array.isArray(current) ? current.map(String) : [];
  return checked
    ? [...list, choiceValue]
    : list.filter((v) => v !== choiceValue);
};

const HybridGridDesktopCell = ({
  row,
  column,
  value,
  onChange,
}: HybridGridCellProps) => {
  // Floor each column at its content/control width; the table flexes above it.
  const minWidth = columnMinWidth(column);

  if (column.type === "text") {
    return (
      <td className="px-2 py-3 align-middle" style={{ minWidth }}>
        <TextAnswer
          aria-labelledby={`hg-label-${row.id}`}
          placeholder={column.placeholder}
          value={typeof value === "string" ? value : ""}
          onChange={(e) => onChange(e.target.value)}
          hoverEffect={false}
        />
      </td>
    );
  }

  if (column.type === "numeric") {
    return (
      <td className="px-2 py-3 align-middle" style={{ minWidth }}>
        <TextAnswer
          aria-labelledby={`hg-label-${row.id}`}
          inputMode="numeric"
          placeholder={column.placeholder}
          min={column.min}
          max={column.max}
          step={column.step}
          value={typeof value === "string" || typeof value === "number" ? String(value) : ""}
          onChange={(e) => onChange(e.target.value)}
          hoverEffect={false}
        />
      </td>
    );
  }

  if (column.type === "dropdown") {
    // The trigger renders the selected option as text. In an auto table a cell's
    // `truncate` (white-space: nowrap) makes its min-content the full label, so a
    // long answer would widen the column on selection. `maxWidth: 0` paired with the
    // `minWidth` floor gives the cell a definite width: the floor governs, surplus is
    // still shared, and the label truncates instead of expanding the column.
    return (
      <td
        className="px-2 py-3 align-middle"
        style={{ minWidth, maxWidth: 0 }}
      >
        <DropdownAnswer
          options={column.options}
          placeholder={column.placeholder ?? "Select an answer…"}
          value={typeof value === "string" && value !== "" ? value : undefined}
          onValueChange={(v) => onChange(v)}
          fullWidth
          hoverEffect={false}
        />
      </td>
    );
  }

  if (column.type === "slider") {
    return (
      <td className="px-2 py-3 align-middle" style={{ minWidth }}>
        <SurveySlider
          min={column.min}
          max={column.max}
          step={column.step}
          minLabel={column.minLabel}
          maxLabel={column.maxLabel}
          showValue={column.showValue}
          value={Array.isArray(value) ? (value as SliderValue) : undefined}
          onChange={(v) => onChange(v)}
        />
      </td>
    );
  }

  if (column.type === "starrating") {
    return (
      <td className="px-2 py-3 align-middle" style={{ minWidth }}>
        <StarRating
          items={[{ value: "rating", label: column.label }]}
          max={column.max}
          value={typeof value === "number" ? { rating: value } : {}}
          onChange={(v) => onChange(v.rating ?? "")}
        />
      </td>
    );
  }

  if (column.type === "imageselector") {
    return (
      <td className="px-2 py-3 align-middle" style={{ minWidth }}>
        <ImageSelector
          options={column.options}
          selectionMode={column.selectionMode ?? "single"}
          value={Array.isArray(value) ? (value as string[]) : []}
          onChange={(v) => onChange(v)}
          hoverEffect={false}
          // In the grid, lay the choices out side by side in a single row
          // (override ImageSelector's responsive column grid) and cap the
          // thumbnails so the column stays compact (mirrors ImageChoiceGrid).
          // `auto-cols-fr` + `min-w-0` lets the cards share and shrink to fit.
          className={cn(
            "[&>div]:!grid-cols-none [&>div]:grid-flow-col [&>div]:auto-cols-fr [&>div>*]:!min-w-0",
            "[&_img]:max-h-16 [&_img]:w-auto [&_img]:max-w-full [&_img]:object-contain",
          )}
        />
      </td>
    );
  }

  if (column.type === "radio") {
    // radio: one <td> per choice, aligned under the sub-header. A native input
    // group (shared name) gives single-select + roving focus for free.
    const selected = typeof value === "string" ? value : "";
    return (
      <>
        {column.choices.map((choice) => {
          const id = `hg-${row.id}-${column.id}-${choice.value}`;
          return (
            <td key={choice.value} className="p-0 align-middle" style={{ minWidth: SUB_COLUMN_MIN_WIDTH }}>
              <label
                htmlFor={id}
                className={cn(
                  "flex items-center justify-center p-2 cursor-pointer w-full h-full border-2 border-transparent transition-all",
                  "has-[:focus-visible]:border-survey-border-interactive",
                )}
              >
                <input
                  id={id}
                  type="radio"
                  name={`hg-${row.id}-${column.id}`}
                  value={choice.value}
                  checked={selected === choice.value}
                  onChange={() => onChange(choice.value)}
                  aria-labelledby={`hg-label-${row.id}`}
                  className="peer sr-only"
                />
                <span
                  aria-hidden="true"
                  className={cn(
                    "grid place-content-center flex-shrink-0 w-4 h-4 rounded-full border-2 transition-colors",
                    "border-survey-border-interactive peer-checked:border-survey-border-selected",
                    "after:block after:w-1.5 after:h-1.5 after:rounded-full after:bg-survey-border-selected after:opacity-0 peer-checked:after:opacity-100",
                  )}
                />
              </label>
            </td>
          );
        })}
      </>
    );
  }

  // checkbox: one <td> per choice, aligned under the sub-header
  const checkedValues = Array.isArray(value) ? value.map(String) : [];
  return (
    <>
      {column.choices.map((choice) => {
        const id = `hg-${row.id}-${column.id}-${choice.value}`;
        return (
          <td key={choice.value} className="p-0 align-middle" style={{ minWidth: SUB_COLUMN_MIN_WIDTH }}>
            <label
              htmlFor={id}
              className={cn(
                "flex items-center justify-center p-2 cursor-pointer w-full h-full border-2 border-transparent transition-all",
                "has-[:focus-visible]:border-survey-border-interactive",
              )}
            >
              <CheckboxPrimitive.Root
                id={id}
                checked={checkedValues.includes(choice.value)}
                onCheckedChange={(c) => onChange(toggleChoice(value, choice.value, c === true))}
                aria-labelledby={`hg-label-${row.id}`}
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
  onChange,
}: HybridGridCellProps) => {
  const checkedValues = Array.isArray(value) ? value.map(String) : [];

  return (
    <div className="flex flex-col gap-2">
      <span className="text-survey-foreground text-survey-body font-survey-regular">
        {column.label}
      </span>

      {column.type === "text" && (
        <TextAnswer
          placeholder={column.placeholder}
          value={typeof value === "string" ? value : ""}
          onChange={(e) => onChange(e.target.value)}
        />
      )}

      {column.type === "numeric" && (
        <TextAnswer
          inputMode="numeric"
          placeholder={column.placeholder}
          min={column.min}
          max={column.max}
          step={column.step}
          value={typeof value === "string" || typeof value === "number" ? String(value) : ""}
          onChange={(e) => onChange(e.target.value)}
        />
      )}

      {column.type === "dropdown" && (
        <DropdownAnswer
          options={column.options}
          placeholder={column.placeholder ?? "Select an answer…"}
          value={typeof value === "string" && value !== "" ? value : undefined}
          onValueChange={(v) => onChange(v)}
          fullWidth
        />
      )}

      {column.type === "radio" && (
        <RadioGroup
          value={typeof value === "string" ? value : undefined}
          onValueChange={(v) => onChange(v)}
        >
          {column.choices.map((choice) => (
            <RadioGroupOption
              key={choice.value}
              id={`hg-m-${row.id}-${column.id}-${choice.value}`}
              value={choice.value}
              label={choice.label}
            />
          ))}
        </RadioGroup>
      )}

      {column.type === "checkbox" && (
        <CheckboxGroup>
          {column.choices.map((choice) => (
            <CheckboxOption
              key={choice.value}
              id={`hg-m-${row.id}-${column.id}-${choice.value}`}
              label={choice.label}
              checked={checkedValues.includes(choice.value)}
              onCheckedChange={(c) => onChange(toggleChoice(value, choice.value, c === true))}
            />
          ))}
        </CheckboxGroup>
      )}

      {column.type === "slider" && (
        <SurveySlider
          min={column.min}
          max={column.max}
          step={column.step}
          minLabel={column.minLabel}
          maxLabel={column.maxLabel}
          showValue={column.showValue}
          value={Array.isArray(value) ? (value as SliderValue) : undefined}
          onChange={(v) => onChange(v)}
        />
      )}

      {column.type === "starrating" && (
        <StarRating
          items={[{ value: "rating", label: column.label }]}
          max={column.max}
          value={typeof value === "number" ? { rating: value } : {}}
          onChange={(v) => onChange(v.rating ?? "")}
        />
      )}

      {column.type === "imageselector" && (
        <ImageSelector
          options={column.options}
          selectionMode={column.selectionMode ?? "single"}
          value={Array.isArray(value) ? (value as string[]) : []}
          onChange={(v) => onChange(v)}
        />
      )}
    </div>
  );
};

export { HybridGrid };
