import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/50",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        outline: "text-foreground border-border-default font-normal",
        destructive:
          "border-destructive/40 bg-white dark:bg-transparent relative after:absolute after:inset-0 after:bg-destructive/10 text-foreground [&>svg]:text-destructive [&>.material-symbols-rounded]:text-destructive hover:after:bg-destructive/20 font-normal overflow-hidden",
        success:
          "border-success/40 bg-white dark:bg-transparent relative after:absolute after:inset-0 after:bg-success/10 text-foreground [&>svg]:text-success [&>.material-symbols-rounded]:text-success hover:after:bg-success/20 font-normal overflow-hidden",
        warning:
          "border-warning/40 bg-white dark:bg-transparent relative after:absolute after:inset-0 after:bg-warning/10 text-foreground [&>svg]:text-warning [&>.material-symbols-rounded]:text-warning hover:after:bg-warning/20 font-normal overflow-hidden",
        secondary:
          "border-primary/40 bg-white dark:bg-transparent relative after:absolute after:inset-0 after:bg-primary/10 text-foreground [&>svg]:text-primary [&>.material-symbols-rounded]:text-primary hover:after:bg-primary/20 font-normal overflow-hidden",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, children, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props}>
      <span className="relative z-10 flex items-center gap-1">
        {variant && variant !== "default"
          ? React.Children.map(children, (child) =>
              React.isValidElement(child)
                ? React.cloneElement(child as React.ReactElement<unknown>, {
                    className: cn(
                      "w-3.5 h-3.5 shrink-0",
                      (child as React.ReactElement<unknown>).props.className,
                    ),
                  })
                : child,
            )
          : children}
      </span>
    </div>
  );
}

export { Badge, badgeVariants };
