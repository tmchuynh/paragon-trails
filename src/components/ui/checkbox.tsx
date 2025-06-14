"use client";

import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { cva, type VariantProps } from "class-variance-authority";
import { CheckIcon } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

const checkboxVariants = cva(
  "disabled:opacity-50 shadow-xs border aria-invalid:border-destructive rounded-[4px] aria-invalid:ring-destructive/20 focus-visible:ring-[3px] dark:aria-invalid:ring-destructive/40 transition-all disabled:cursor-not-allowed peer size-4 shrink-0 outline-none",
  {
    variants: {
      variant: {
        default:
          "border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50",
        secondary:
          "border-input dark:bg-input/30 data-[state=checked]:bg-secondary data-[state=checked]:text-secondary-foreground data-[state=checked]:border-secondary focus-visible:border-secondary focus-visible:ring-secondary/50",
        tertiary:
          "border-input dark:bg-input/30 data-[state=checked]:bg-tertiary data-[state=checked]:text-tertiary-foreground data-[state=checked]:border-tertiary focus-visible:border-tertiary focus-visible:ring-tertiary/50",
        fancy:
          "border-input dark:bg-input/30 data-[state=checked]:bg-fancy data-[state=checked]:text-fancy-foreground data-[state=checked]:border-fancy focus-visible:border-fancy focus-visible:ring-fancy/50",
        accent:
          "border-input dark:bg-input/30 data-[state=checked]:bg-accent data-[state=checked]:text-accent-foreground data-[state=checked]:border-accent focus-visible:border-accent focus-visible:ring-accent/50",
        destructive:
          "border-input dark:bg-input/30 data-[state=checked]:bg-destructive data-[state=checked]:text-destructive-foreground data-[state=checked]:border-destructive focus-visible:border-destructive focus-visible:ring-destructive/50",
        success:
          "border-input dark:bg-input/30 data-[state=checked]:bg-success data-[state=checked]:text-success-foreground data-[state=checked]:border-success focus-visible:border-success focus-visible:ring-success/50",
        warning:
          "border-input dark:bg-input/30 data-[state=checked]:bg-warning data-[state=checked]:text-warning-foreground data-[state=checked]:border-warning focus-visible:border-warning focus-visible:ring-warning/50",
        error:
          "border-input dark:bg-input/30 data-[state=checked]:bg-error data-[state=checked]:text-error-foreground data-[state=checked]:border-error focus-visible:border-error focus-visible:ring-error/50",
        info: "border-input dark:bg-input/30 data-[state=checked]:bg-info data-[state=checked]:text-info-foreground data-[state=checked]:border-info focus-visible:border-info focus-visible:ring-info/50",
        muted:
          "border-input dark:bg-input/30 data-[state=checked]:bg-muted data-[state=checked]:text-muted-foreground data-[state=checked]:border-muted focus-visible:border-muted focus-visible:ring-muted/50",
      },
      size: {
        sm: "size-3.5",
        default: "size-4",
        lg: "size-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Checkbox({
  className,
  variant = "default",
  size = "default",
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root> &
  VariantProps<typeof checkboxVariants>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      data-variant={variant}
      data-size={size}
      className={cn(checkboxVariants({ variant, size }), className)}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="flex justify-center items-center text-current transition-none"
      >
        <CheckIcon
          className={cn(
            size === "sm" ? "size-2.5" : size === "lg" ? "size-4" : "size-3.5"
          )}
        />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox, checkboxVariants };
