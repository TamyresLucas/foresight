import * as React from "react";

import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label" as any,
  buttonVariant = "ghost",
  formatters,
  components,
  ...props
}: React.ComponentProps<typeof DayPicker> & {
  buttonVariant?: React.ComponentProps<typeof Button>["variant"];
}) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(
        "bg-background group/calendar p-3 [--cell-size:2rem] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        className,
      )}
      captionLayout={captionLayout}
      formatters={formatters}
      classNames={{
        root: cn("w-fit"),
        months: cn("relative flex flex-col gap-4 md:flex-row"),
        month: cn("flex w-full flex-col gap-4"),
        nav: cn(
          "absolute inset-x-0 top-0 flex w-full items-center justify-between gap-1",
        ),
        nav_button_previous: cn(
          buttonVariants({ variant: buttonVariant }),
          "h-[--cell-size] w-[--cell-size] select-none p-0 aria-disabled:opacity-50 aria-disabled:text-primary/40",
        ),
        nav_button_next: cn(
          buttonVariants({ variant: buttonVariant }),
          "h-[--cell-size] w-[--cell-size] select-none p-0 aria-disabled:opacity-50 aria-disabled:text-primary/40",
        ),
        caption_label: cn(
          "flex h-[--cell-size] w-full items-center justify-center px-[--cell-size]",
          "select-none font-medium",
          "[&>svg]:text-muted-foreground [&>.material-symbols-rounded]:text-muted-foreground flex h-8 items-center gap-1 rounded-md pl-2 pr-1 text-sm [&>svg]:size-3.5 [&>.material-symbols-rounded]:text-[0.875rem] [&>.material-symbols-rounded]:leading-none",
        ),
        dropdown: cn(
          "flex h-[--cell-size] w-full items-center justify-center gap-1.5 text-sm font-medium",
          "has-focus:border-ring border-primary/20 shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px] relative rounded-md border",
        ),
        table: "w-full border-collapse",
      }}
      components={{
        Day: CalendarDayButton,
        ...components,
      }}
      {...props}
    />
  );
}

function CalendarDayButton({
  className,
  date,
  selected,
  disabled,
  onClick,
  onFocus,
  onKeyDown,
  onMouseEnter,
  ...props
}: any) {
  const ref = React.useRef<HTMLButtonElement>(null);
  React.useEffect(() => {
    if (props["aria-selected"]) ref.current?.focus();
  }, [props["aria-selected"]]);

  return (
    <Button
      ref={ref}
      variant="ghost"
      size="icon"
      data-selected={selected}
      data-disabled={disabled}
      onClick={onClick}
      onFocus={onFocus}
      onKeyDown={onKeyDown}
      onMouseEnter={onMouseEnter}
      className={cn(
        "data-[selected=true]:bg-primary data-[selected=true]:text-primary-foreground data-[range-middle=true]:bg-accent data-[range-middle=true]:text-accent-foreground data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-ring/50 flex aspect-square h-auto w-full min-w-[--cell-size] flex-col gap-1 font-normal leading-none data-[range-end=true]:rounded-md data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-md group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:ring-[3px] [&>span]:text-xs [&>span]:opacity-70",
        className,
      )}
      {...props}
    />
  );
}

export { Calendar, CalendarDayButton };
