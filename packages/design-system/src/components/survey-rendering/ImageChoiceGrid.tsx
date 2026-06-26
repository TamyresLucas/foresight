"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { cn } from "@/lib/utils";
import { AlertCircle } from "../ui/icons";
import { Card } from "./Card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export interface ImageChoiceGridColumn {
  value: string;
  label: string;
  /** Image shown as the selectable choice for this column. */
  src: string;
  alt?: string;
}

export interface ImageChoiceGridRow {
  id: string;
  label: string;
  disabled?: boolean;
}

export interface ImageChoiceGridProps {
  rows: ImageChoiceGridRow[];
  columns: ImageChoiceGridColumn[];
  value?: Record<string, string>; // rowId -> columnValue
  defaultValue?: Record<string, string>;
  onValueChange?: (value: Record<string, string>) => void;
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

// A selected image is tinted with the brand primary at low opacity and outlined
// with the same color at full opacity, matching the other image question types.
const SELECTED_FILL =
  "color-mix(in srgb, hsl(var(--survey-primary)) 55%, transparent)";
const SELECTED_BORDER = "hsl(var(--survey-primary))";

const ImageChoiceGrid = React.forwardRef<HTMLDivElement, ImageChoiceGridProps>(
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
      variant === "desktop"
        ? "block"
        : variant === "mobile"
        ? "hidden"
        : "hidden @lg:block";
    const mobileVisibility =
      variant === "mobile"
        ? "block"
        : variant === "desktop"
        ? "hidden"
        : "@lg:hidden";

    const [uncontrolledValue, setUncontrolledValue] = React.useState<
      Record<string, string>
    >(defaultValue ?? {});
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
        className={cn(
          "@container flex flex-col gap-4 w-full max-w-2xl mx-auto font-survey",
          className,
        )}
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
              <tr className="text-survey-foreground text-survey-body font-survey-regular">
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
                  <tr
                    className={cn(
                      "group/row transition-colors hover:bg-survey-muted-background",
                    )}
                  >
                    <th
                      id={`label-${row.id}`}
                      scope="row"
                      className={cn(
                        "px-2 py-2 text-left text-survey-foreground text-survey-body font-survey-regular align-middle",
                        (disabled || row.disabled) && "opacity-50",
                      )}
                    >
                      {row.label}
                    </th>
                    {columns.map((column) => (
                      <ImageChoiceGridCell
                        key={column.value}
                        rowId={row.id}
                        column={column}
                        disabled={disabled || row.disabled}
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
          <Accordion
            type="single"
            collapsible
            className={cn(
              "w-full flex flex-col rounded-survey-md overflow-hidden border border-survey-border-muted",
            )}
          >
            {rows.map((row) => (
              <AccordionItem
                key={row.id}
                value={row.id}
                className={cn(
                  "w-full rounded-none last:border-b-0 border-b border-survey-border-muted",
                )}
              >
                <AccordionTrigger
                  className={cn(
                    "px-4 py-4 hover:no-underline text-left text-survey-foreground text-survey-body font-survey-regular rounded-none",
                    (disabled || row.disabled) &&
                      "opacity-50 cursor-not-allowed",
                  )}
                >
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
                      <ImageChoiceGridMobileOption
                        key={column.value}
                        column={column}
                        disabled={disabled || row.disabled}
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
  },
);
ImageChoiceGrid.displayName = "ImageChoiceGrid";

// The selectable image. The tint + full-opacity border are rendered through the
// Radix Indicator, which only mounts when the item is checked.
const SelectableImage = ({
  src,
  alt,
  className,
}: {
  src: string;
  alt?: string;
  className?: string;
}) => (
  <span className={cn("relative inline-block", className)}>
    <img
      src={src}
      alt={alt ?? ""}
      className="block h-16 w-16 object-contain rounded-survey-md select-none"
      draggable={false}
    />
    <RadioGroupPrimitive.Indicator asChild>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-survey-md"
        style={{ backgroundColor: SELECTED_FILL, border: `2px solid ${SELECTED_BORDER}` }}
      />
    </RadioGroupPrimitive.Indicator>
  </span>
);

interface ImageChoiceGridCellProps {
  rowId: string;
  column: ImageChoiceGridColumn;
  disabled?: boolean;
  hasError?: boolean;
}

const ImageChoiceGridCell = ({
  rowId,
  column,
  disabled,
  hasError,
}: ImageChoiceGridCellProps) => {
  const cellId = `cell-${rowId}-${column.value}`;

  return (
    <td className={cn("p-0 transition-colors", disabled && "opacity-50")}>
      <label
        htmlFor={cellId}
        className={cn(
          "flex items-center justify-center p-2 cursor-pointer w-full h-full transition-all",
          disabled && "cursor-not-allowed",
        )}
      >
        <RadioGroupPrimitive.Item
          id={cellId}
          value={column.value}
          disabled={disabled}
          aria-labelledby={`label-${rowId}`}
          aria-label={column.label}
          aria-invalid={hasError || undefined}
          className={cn(
            "rounded-survey-md transition-shadow",
            "focus:outline-none focus-visible:ring-2 focus-visible:ring-survey-border-interactive",
          )}
        >
          <SelectableImage src={column.src} alt={column.alt ?? column.label} />
        </RadioGroupPrimitive.Item>
      </label>
    </td>
  );
};

const ImageChoiceGridMobileOption = ({
  column,
  disabled,
  hasError,
}: {
  column: ImageChoiceGridColumn;
  disabled?: boolean;
  hasError?: boolean;
}) => {
  return (
    // The Radix item drives radio semantics (roving focus, arrow keys, checked
    // state); `asChild` projects them onto the Card, whose `data-state=checked`
    // then renders the selected border.
    <div className="p-4">
      <RadioGroupPrimitive.Item
        asChild
        value={column.value}
        disabled={disabled}
        aria-label={column.label}
        aria-invalid={hasError || undefined}
      >
        <Card
          variant="imageStatement"
          imageSrc={column.src}
          imageAlt={column.alt ?? column.label}
          aria-pressed={undefined}
          className={cn(
            // Card fills the available mobile width. Image stays at its natural
            // size (w-auto) so card height follows the image height, capped at
            // 300px. Width auto-adjusts to preserve the aspect ratio.
            "w-full",
            "[&_img]:!w-auto [&_img]:h-auto [&_img]:max-h-[300px] [&_img]:max-w-full",
            "!border data-[state=checked]:!border-2 data-[state=checked]:border-survey-border-selected",
            disabled && "cursor-not-allowed opacity-50",
          )}
        >
          <span
            className={cn(
              "text-survey-foreground text-survey-body font-survey-regular",
              disabled && "text-survey-muted-foreground",
            )}
          >
            {column.label}
          </span>
        </Card>
      </RadioGroupPrimitive.Item>
    </div>
  );
};

export { ImageChoiceGrid };
