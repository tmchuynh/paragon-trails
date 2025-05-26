import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex justify-center items-center gap-2 disabled:opacity-50 my-2 aria-invalid:border-destructive focus-visible:border-ring rounded-md aria-invalid:ring-destructive/20 focus-visible:ring-[3px] focus-visible:ring-ring/50 dark:aria-invalid:ring-destructive/40 font-[Nunito] font-bold font-medium text-sm uppercase whitespace-nowrap transition-all [&_svg]:pointer-events-none disabled:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:shadow-md dark:hover:bg-primary/90",
        destructive:
          "bg-destructive text-white shadow-xs hover:shadow-md focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background border-double border-4 shadow-xs hover:border-outline",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:shadow-md dark:hover:bg-secondary/80",
        ghost: "hover:bg-accent dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline hover:shadow-none",
        muted:
          "bg-muted text-muted-foreground shadow-xs hover:shadow-md dark:hover:bg-muted/80",
        tertiary:
          "bg-tertiary text-tertiary-foreground shadow-xs hover:shadow-md dark:hover:bg-tertiary/80",
        fancy:
          "bg-fancy text-fancy-foreground shadow-xs hover:shadow-md dark:hover:bg-fancy/80",
        accent:
          "bg-accent text-accent-foreground  outline shadow-xs hover:shadow-md dark:hover:bg-accent/80",
        disabled:
          "border-transparent bg-muted/45 text-muted-foreground/50 cursor-not-allowed",
        icon: "bg-transparent dark:text-secondary hover:text-tertiary shadow-none dark:hover:text-accent",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
