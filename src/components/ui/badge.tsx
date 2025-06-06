import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex justify-center items-center gap-1 px-2 py-0.5 border aria-invalid:border-destructive focus-visible:border-ring rounded-md aria-invalid:ring-destructive/20 focus-visible:ring-[3px] focus-visible:ring-ring/50 dark:aria-invalid:ring-destructive/40 w-fit font-medium text-xs whitespace-nowrap transition-[color,box-shadow] overflow-hidden [&>svg]:pointer-events-none shrink-0 [&>svg]:size-3",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground ",
        secondary: "border-transparent bg-secondary text-secondary-foreground",
        tertiary: "border-transparent bg-tertiary text-tertiary-foreground",
        success: "border-transparent bg-success text-success-foreground",
        warning: "border-transparent bg-warning text-warning-foreground",
        info: "border-transparent bg-info text-info-foreground",
        defaultFaded: "border-transparent bg-primary/10 text-primary ",
        secondaryFaded: "border-transparent bg-secondary/10 text-secondary ",
        tertiaryFaded: "border-transparent bg-tertiary/10 text-tertiary",
        successFaded: "border-transparent bg-success/10 text-success",
        warningFaded: "border-transparent bg-warning/10 text-warning",
        infoFaded: "border-transparent bg-info/10 text-info",
        destructive:
          "border-transparent bg-destructive text-white   dark:bg-destructive/60",
        outline: "text-foreground",
      },
      size: {
        xs: "px-1 py-0.5 text-xs",
        sm: "px-1.5 py-0.5 text-xs",
        md: "px-2 py-0.5 text-xs",
        lg: "px-3 py-1 text-sm",
        xl: "px-4 py-1 text-sm",
        "2xl": "px-5 py-1 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

function Badge({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
