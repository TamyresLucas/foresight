import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const alertVariants = cva(
  "relative w-full rounded-lg border p-4 grid grid-cols-[auto_1fr] gap-x-3 items-start [&>svg]:shrink-0 [&>svg]:mt-0.5 [&>svg]:row-span-2 [&>.material-symbols-rounded]:shrink-0 [&>.material-symbols-rounded]:mt-0.5 [&>.material-symbols-rounded]:row-span-2",
  {
    variants: {
      variant: {
        default:
          "bg-primary/10 border-border-subtle text-foreground shadow-sm [&>svg]:text-primary [&>.material-symbols-rounded]:text-primary",
        destructive:
          "border-destructive/40 text-foreground dark:border-destructive [&>svg]:text-destructive [&>.material-symbols-rounded]:text-destructive bg-destructive/10",
        success:
          "border-success/40 text-foreground dark:border-success [&>svg]:text-success [&>.material-symbols-rounded]:text-success bg-success/10",
        warning:
          "border-warning/40 text-foreground dark:border-warning [&>svg]:text-warning [&>.material-symbols-rounded]:text-warning bg-warning/10",
        info: "border-primary/40 text-foreground dark:border-info [&>svg]:text-info [&>.material-symbols-rounded]:text-info bg-info/10",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
));
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("mb-1 font-medium leading-none tracking-tight", className)}
    {...props}
  />
));
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm [&_p]:leading-relaxed", className)}
    {...props}
  />
));
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertTitle, AlertDescription };
