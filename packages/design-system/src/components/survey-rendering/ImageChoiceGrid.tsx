"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { cn } from "@/lib/utils";
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
}

export interface ImageChoiceGridProps {
  rows: ImageChoiceGridRow[];
  columns: ImageChoiceGridColumn[];
  value?: Record<string, string>; // rowId -> columnValue
  defaultValue?: Record<string, string>;
  onValueChange?: (value: Record<string, string>) => void;
  className?: string;
  /**
   * Force a specific variant regardless of width.
   * Defaults to 'auto' (responsive to the component's own width via an
   * `@lg` container query, so it adapts inside fixed-width device frames too).
   */
  variant?: "auto" | "desktop" | "mobile";
  /**
   * Width of each image in the grid, expressed as a number with a unit (e.g. `"100%"` or `"200px"`).
   * @default "100%"
   */
  imageWidth?: string;
  /**
   * Height of each image in the grid, expressed as a number with a unit (e.g. `"200px"` or `"50%"`).
   * When omitted the image height is unconstrained and scales naturally with the image's intrinsic aspect ratio.
   * @default undefined (unconstrained)
   */
  imageHeight?: string;
  /**
   * Width applied to every data column in the desktop table layout.
   * Accepts any valid CSS length or percentage.
   * @default "25%"
   */
  defaultColumnWidth?: string;
  /**
   * Width applied to the first (row-label) column in the desktop table layout.
   * Accepts any valid CSS length or percentage.
   * @default "25%"
   */
  firstColumnWidth?: string;
}

const ImageChoiceGrid = React.forwardRef<HTMLDivElement, ImageChoiceGridProps>(
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
                >
                  <tr
                    className={cn(
                      "group/row transition-colors hover:bg-survey-muted-background",
                    )}
                  >
                    <th
                      id={`label-${row.id}`}
                      scope="row"
                      className="px-2 py-2 text-left text-survey-foreground text-survey-body font-survey-regular align-middle"
                    >
                      {row.label}
                    </th>
                    {columns.map((column) => (
                      <ImageChoiceGridCell
                        key={column.value}
                        rowId={row.id}
                        column={column}
                        selected={values[row.id] === column.value}
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
                <AccordionTrigger className="px-4 py-4 hover:no-underline text-left text-survey-foreground text-survey-body font-survey-regular rounded-none">
                  <span className="flex items-center gap-2">
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
                      <ImageChoiceGridMobileOption
                        key={column.value}
                        column={column}
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

interface ImageChoiceGridCellProps {
  rowId: string;
  column: ImageChoiceGridColumn;
  selected: boolean;
}

// The selectable image, rendered through Card's `image` variant so the
// selected framing (outer primary-color border, inner white ring, low-opacity
// primary tint) matches every other image question type exactly, instead of
// being hand-rolled here. `asChild` merges Radix's radio semantics (role,
// roving focus, `data-state`) onto Card's own button rather than nesting two
// buttons; the visual selected state is driven by the explicit `selected` prop
// (computed by the parent from `values`) since Card's own `data-state` would
// otherwise be clobbered by the "checked"/"unchecked" one Radix injects.
const ImageChoiceGridCell = ({
  rowId,
  column,
  selected,
}: ImageChoiceGridCellProps) => {
  const cellId = `cell-${rowId}-${column.value}`;

  return (
    <td className="p-0 transition-colors">
      <label
        htmlFor={cellId}
        className="flex items-center justify-center p-2 cursor-pointer w-full h-full transition-all"
      >
        <RadioGroupPrimitive.Item
          asChild
          id={cellId}
          value={column.value}
          aria-labelledby={`label-${rowId}`}
          aria-label={column.label}
        >
          <Card
            variant="image"
            imageSrc={column.src}
            imageAlt={column.alt ?? column.label}
            selected={selected}
            // Fill the column's width; omitting `height` puts Card in its
            // "fill-width" mode, where the image keeps its natural aspect
            // ratio (`h-auto`) and the card's height follows it, rather than
            // cropping to a fixed square.
            width="100%"
            className={cn(
              "!min-w-0 !min-h-0",
              // Radix's `asChild` overwrites Card's own `data-state` (which
              // drives its `data-[state=selected]` border rule) with its own
              // "checked"/"unchecked" value, so the border needs a matching
              // override here. The white-ring + tint overlay is unaffected
              // since it's driven by the `selected` prop directly, not CSS.
              "data-[state=checked]:!border-2 data-[state=checked]:!border-survey-border-selected",
            )}
          />
        </RadioGroupPrimitive.Item>
      </label>
    </td>
  );
};

const ImageChoiceGridMobileOption = ({
  column,
}: {
  column: ImageChoiceGridColumn;
}) => {
  return (
    // The Radix item drives radio semantics (roving focus, arrow keys, checked
    // state, hover/focus-visible on the real DOM node); `asChild` projects
    // them onto the Card, which already provides the `imageStatement`
    // layout's hover wash, focus ring, and (once corrected below) selected
    // border — no need to hand-roll any of that here.
    <div className="p-4">
      <RadioGroupPrimitive.Item
        asChild
        value={column.value}
        aria-label={column.label}
      >
        <Card
          variant="imageStatement"
          imageSrc={column.src}
          imageAlt={column.alt ?? column.label}
          aria-pressed={undefined}
          className={cn(
            // Card fills the available mobile width; omitting `height` keeps
            // it in fill-width mode, where the image already renders at
            // `w-full h-auto` (natural ratio) — only the height cap is
            // specific to this grid.
            "w-full [&_img]:max-h-[300px]",
            // Radix's `asChild` overwrites Card's own `data-state` (which
            // drives its `data-[state=selected]` border rule) with its own
            // "checked"/"unchecked" value, so the border needs a matching
            // override here — same reasoning as the desktop cell above.
            "data-[state=checked]:!border-2 data-[state=checked]:!border-survey-border-selected",
          )}
        >
          <span className="text-survey-foreground text-survey-body font-survey-regular">
            {column.label}
          </span>
        </Card>
      </RadioGroupPrimitive.Item>
    </div>
  );
};

export { ImageChoiceGrid };
