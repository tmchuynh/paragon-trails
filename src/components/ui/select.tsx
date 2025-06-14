"use client";

import * as SelectPrimitive from "@radix-ui/react-select";
import { cva, type VariantProps } from "class-variance-authority";
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

const selectTriggerVariants = cva(
  "flex justify-between items-center gap-2 bg-transparent disabled:opacity-50 shadow-sm border rounded-lg focus-visible:ring-[3px] w-full text-sm [&_svg:not([class*='text-'])]:text-muted-foreground data-[placeholder]:text-muted-foreground whitespace-nowrap transition-all disabled:cursor-not-allowed [&_svg]:pointer-events-none outline-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "border-border bg-background hover:border-border/80 focus-visible:border-ring focus-visible:ring-ring/20",
        minimal:
          "border-border/30 bg-background hover:bg-muted/30 focus-visible:border-border focus-visible:ring-border/10",
        modern:
          "border-primary/20 bg-background hover:border-primary/40 focus-visible:border-primary focus-visible:ring-primary/20",
        classic:
          "border-secondary/30 bg-background hover:border-secondary focus-visible:border-secondary focus-visible:ring-secondary/20",
        professional:
          "border-slate-200 bg-background hover:border-slate-300 focus-visible:border-slate-400 focus-visible:ring-slate-300/20 dark:border-slate-700 dark:hover:border-slate-600 dark:focus-visible:border-slate-500",
        glass:
          "border-white/10 bg-background/60 backdrop-blur-xl hover:bg-background/80 focus-visible:border-white/20 focus-visible:ring-white/10 supports-[backdrop-filter]:bg-background/60",
      },
      size: {
        sm: "h-8 px-2.5 text-xs",
        default: "h-9 px-3 py-2",
        lg: "h-11 px-4 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const selectContentVariants = cva(
  "relative data-[side=left]:slide-in-from-right-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-select-content-available-height) data-[side=bottom]:slide-in-from-top-2 data-[side=right]:slide-in-from-left-2 shadow-lg border rounded-lg min-w-[8rem] origin-(--radix-select-content-transform-origin) data-[state=closed]:animate-out data-[state=open]:animate-in overflow-x-hidden overflow-y-auto data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground border-border/20",
        minimal: "bg-background text-foreground border-0 shadow-sm",
        modern: "bg-background text-foreground border-border/10 shadow-xl",
        classic: "bg-card text-card-foreground border-border shadow-md",
        professional:
          "bg-background text-foreground border-slate-200 dark:border-slate-700 shadow-lg",
        glass:
          "bg-background/60 backdrop-blur-xl text-foreground border-white/10 shadow-2xl supports-[backdrop-filter]:bg-background/60",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const selectItemVariants = cva(
  "relative flex items-center gap-2 outline-hidden data-[disabled]:opacity-50 rounded-md w-full text-sm [&_svg:not([class*='text-'])]:text-muted-foreground transition-colors cursor-default [&_svg]:pointer-events-none data-[disabled]:pointer-events-none select-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "hover:bg-accent/50 focus:bg-accent focus:text-accent-foreground data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground",
        minimal:
          "hover:bg-muted/30 focus:bg-muted focus:text-foreground data-[highlighted]:bg-muted data-[highlighted]:text-foreground",
        modern:
          "hover:bg-primary/10 focus:bg-primary focus:text-primary-foreground data-[highlighted]:bg-primary data-[highlighted]:text-primary-foreground",
        classic:
          "hover:bg-secondary/20 focus:bg-secondary focus:text-secondary-foreground data-[highlighted]:bg-secondary data-[highlighted]:text-secondary-foreground",
        professional:
          "hover:bg-slate-100 dark:hover:bg-slate-800 focus:bg-slate-200 dark:focus:bg-slate-700 focus:text-foreground data-[highlighted]:bg-slate-200 dark:data-[highlighted]:bg-slate-700",
        glass:
          "hover:bg-white/10 focus:bg-white/20 focus:text-foreground data-[highlighted]:bg-white/20 data-[highlighted]:text-foreground",
      },
      size: {
        sm: "py-1 pr-6 pl-1.5 text-xs",
        default: "py-1.5 pr-8 pl-2",
        lg: "py-2 pr-10 pl-3 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const selectLabelVariants = cva("font-medium", {
  variants: {
    variant: {
      default: "text-foreground",
      minimal: "text-muted-foreground",
      modern: "text-primary font-semibold",
      classic: "text-foreground font-medium",
      professional: "text-slate-700 dark:text-slate-300 font-semibold",
      glass: "text-foreground/90",
    },
    size: {
      sm: "px-1.5 py-1 text-xs",
      default: "px-2 py-1.5 text-xs",
      lg: "px-3 py-2 text-sm",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

const selectSeparatorVariants = cva("-mx-1 my-1 h-px pointer-events-none", {
  variants: {
    variant: {
      default: "bg-border/60",
      minimal: "bg-border/30",
      modern: "bg-primary/20",
      classic: "bg-border",
      professional: "bg-slate-200 dark:bg-slate-700",
      glass: "bg-white/20",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

function Select({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Root>) {
  return <SelectPrimitive.Root data-slot="select" {...props} />;
}

function SelectGroup({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Group>) {
  return <SelectPrimitive.Group data-slot="select-group" {...props} />;
}

function SelectValue({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Value>) {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />;
}

function SelectTrigger({
  className,
  variant = "default",
  size = "default",
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger> &
  VariantProps<typeof selectTriggerVariants>) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      data-size={size}
      data-variant={variant}
      className={cn(
        selectTriggerVariants({ variant, size }),
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDownIcon className="opacity-50 size-4" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
}

function SelectContent({
  className,
  variant = "default",
  children,
  position = "popper",
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content> &
  VariantProps<typeof selectContentVariants>) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        data-variant={variant}
        className={cn(
          selectContentVariants({ variant }),
          position === "popper" &&
            "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
          className
        )}
        position={position}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport
          className={cn(
            "p-1.5",
            position === "popper" &&
              "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  );
}

function SelectLabel({
  className,
  variant = "default",
  size = "default",
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Label> &
  VariantProps<typeof selectLabelVariants>) {
  return (
    <SelectPrimitive.Label
      data-slot="select-label"
      data-variant={variant}
      className={cn(selectLabelVariants({ variant, size }), className)}
      {...props}
    />
  );
}

function SelectItem({
  className,
  variant = "default",
  size = "default",
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item> &
  VariantProps<typeof selectItemVariants>) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      data-variant={variant}
      className={cn(
        selectItemVariants({ variant, size }),
        "*:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        className
      )}
      {...props}
    >
      <span
        className={cn(
          "absolute flex justify-center items-center",
          size === "sm"
            ? "right-1.5 size-3"
            : size === "lg"
              ? "right-3 size-4"
              : "right-2 size-3.5"
        )}
      >
        <SelectPrimitive.ItemIndicator>
          <CheckIcon
            className={cn(
              size === "sm" ? "size-3" : size === "lg" ? "size-5" : "size-4"
            )}
          />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  );
}

function SelectSeparator({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Separator> &
  VariantProps<typeof selectSeparatorVariants>) {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      data-variant={variant}
      className={cn(selectSeparatorVariants({ variant }), className)}
      {...props}
    />
  );
}

function SelectScrollUpButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>) {
  return (
    <SelectPrimitive.ScrollUpButton
      data-slot="select-scroll-up-button"
      className={cn(
        "flex cursor-default items-center justify-center py-1",
        className
      )}
      {...props}
    >
      <ChevronUpIcon className="size-4" />
    </SelectPrimitive.ScrollUpButton>
  );
}

function SelectScrollDownButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) {
  return (
    <SelectPrimitive.ScrollDownButton
      data-slot="select-scroll-down-button"
      className={cn(
        "flex cursor-default items-center justify-center py-1",
        className
      )}
      {...props}
    >
      <ChevronDownIcon className="size-4" />
    </SelectPrimitive.ScrollDownButton>
  );
}

export {
  Select,
  SelectContent,
  selectContentVariants,
  SelectGroup,
  SelectItem,
  selectItemVariants,
  SelectLabel,
  selectLabelVariants,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  selectSeparatorVariants,
  SelectTrigger,
  selectTriggerVariants,
  SelectValue,
};
