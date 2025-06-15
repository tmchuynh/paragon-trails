import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex justify-center items-center gap-1.5 px-2.5 py-1 border aria-invalid:border-destructive focus-visible:border-ring rounded-full aria-invalid:ring-destructive/20 focus-visible:ring-[3px] focus-visible:ring-ring/50 dark:aria-invalid:ring-destructive/40 w-fit font-medium text-xs whitespace-nowrap transition-all duration-200 overflow-hidden [&>svg]:pointer-events-none ease-in-out shrink-0 [&>svg]:size-3.5 hover:scale-100 active:scale-95",
  {
    variants: {
      variant: {
        // Solid variants with modern gradients and shadows
        default:
          "border-transparent bg-gradient-to-r from-slate-900 to-slate-700 text-white shadow-md shadow-slate-900/25 hover:shadow-lg hover:shadow-slate-900/30",
        primary:
          "border-transparent bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/30",
        secondary:
          "border-transparent bg-gradient-to-r from-purple-600 to-purple-500 text-white shadow-md shadow-purple-500/25 hover:shadow-lg hover:shadow-purple-500/30",
        success:
          "border-transparent bg-gradient-to-r from-emerald-600 to-emerald-500 text-white shadow-md shadow-emerald-500/25 hover:shadow-lg hover:shadow-emerald-500/30",
        warning:
          "border-transparent bg-gradient-to-r from-amber-500 to-yellow-500 text-white shadow-md shadow-amber-500/25 hover:shadow-lg hover:shadow-amber-500/30",
        danger:
          "border-transparent bg-gradient-to-r from-red-600 to-red-500 text-white shadow-md shadow-red-500/25 hover:shadow-lg hover:shadow-red-500/30",
        info: "border-transparent bg-gradient-to-r from-cyan-600 to-cyan-500 text-white shadow-md shadow-cyan-500/25 hover:shadow-lg hover:shadow-cyan-500/30",

        // Soft variants with subtle backgrounds
        soft: "border-transparent bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700",
        softPrimary:
          "border-transparent bg-blue-50 text-blue-700 hover:bg-blue-100 dark:bg-blue-950 dark:text-blue-300 dark:hover:bg-blue-900",
        softSecondary:
          "border-transparent bg-purple-50 text-purple-700 hover:bg-purple-100 dark:bg-purple-950 dark:text-purple-300 dark:hover:bg-purple-900",
        softSuccess:
          "border-transparent bg-emerald-50 text-emerald-700 hover:bg-emerald-100 dark:bg-emerald-950 dark:text-emerald-300 dark:hover:bg-emerald-900",
        softWarning:
          "border-transparent bg-amber-50 text-amber-700 hover:bg-amber-100 dark:bg-amber-950 dark:text-amber-300 dark:hover:bg-amber-900",
        softDanger:
          "border-transparent bg-red-50 text-red-700 hover:bg-red-100 dark:bg-red-950 dark:text-red-300 dark:hover:bg-red-900",
        softInfo:
          "border-transparent bg-cyan-50 text-cyan-700 hover:bg-cyan-100 dark:bg-cyan-950 dark:text-cyan-300 dark:hover:bg-cyan-900",

        // Outline variants with modern borders
        outline:
          "border-slate-300 bg-transparent text-slate-700 hover:bg-slate-50 hover:border-slate-400 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:border-slate-500",
        outlinePrimary:
          "border-blue-300 bg-transparent text-blue-700 hover:bg-blue-50 hover:border-blue-400 dark:border-blue-600 dark:text-blue-300 dark:hover:bg-blue-950 dark:hover:border-blue-500",
        outlineSecondary:
          "border-purple-300 bg-transparent text-purple-700 hover:bg-purple-50 hover:border-purple-400 dark:border-purple-600 dark:text-purple-300 dark:hover:bg-purple-950 dark:hover:border-purple-500",
        outlineSuccess:
          "border-emerald-300 bg-transparent text-emerald-700 hover:bg-emerald-50 hover:border-emerald-400 dark:border-emerald-600 dark:text-emerald-300 dark:hover:bg-emerald-950 dark:hover:border-emerald-500",
        outlineWarning:
          "border-amber-300 bg-transparent text-amber-700 hover:bg-amber-50 hover:border-amber-400 dark:border-amber-600 dark:text-amber-300 dark:hover:bg-amber-950 dark:hover:border-amber-500",
        outlineDanger:
          "border-red-300 bg-transparent text-red-700 hover:bg-red-50 hover:border-red-400 dark:border-red-600 dark:text-red-300 dark:hover:bg-red-950 dark:hover:border-red-500",
        outlineInfo:
          "border-cyan-300 bg-transparent text-cyan-700 hover:bg-cyan-50 hover:border-cyan-400 dark:border-cyan-600 dark:text-cyan-300 dark:hover:bg-cyan-950 dark:hover:border-cyan-500",

        // Glass/frosted variants for modern UI
        glass:
          "border-white/20 bg-white/10 text-slate-700 backdrop-blur-sm hover:bg-white/20 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:bg-white/10",
        glassPrimary:
          "border-blue-300/30 bg-blue-500/10 text-blue-700 backdrop-blur-sm hover:bg-blue-500/20 dark:border-blue-400/20 dark:bg-blue-400/10 dark:text-blue-300 dark:hover:bg-blue-400/15",
        glassSecondary:
          "border-purple-300/30 bg-purple-500/10 text-purple-700 backdrop-blur-sm hover:bg-purple-500/20 dark:border-purple-400/20 dark:bg-purple-400/10 dark:text-purple-300 dark:hover:bg-purple-400/15",
        glassSuccess:
          "border-emerald-300/30 bg-emerald-500/10 text-emerald-700 backdrop-blur-sm hover:bg-emerald-500/20 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-300 dark:hover:bg-emerald-400/15",
        glassWarning:
          "border-amber-300/30 bg-amber-500/10 text-amber-700 backdrop-blur-sm hover:bg-amber-500/20 dark:border-amber-400/20 dark:bg-amber-400/10 dark:text-amber-300 dark:hover:bg-amber-400/15",
        glassDanger:
          "border-red-300/30 bg-red-500/10 text-red-700 backdrop-blur-sm hover:bg-red-500/20 dark:border-red-400/20 dark:bg-red-400/10 dark:text-red-300 dark:hover:bg-red-400/15",
        glassInfo:
          "border-cyan-300/30 bg-cyan-500/10 text-cyan-700 backdrop-blur-sm hover:bg-cyan-500/20 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-300 dark:hover:bg-cyan-400/15",
        // Modern gradient variants for a sleek look
        gradient:
          "border-transparent bg-gradient-to-r from-slate-900 to-slate-700 text-white shadow-md shadow-slate-900/25 hover:shadow-lg hover:shadow-slate-900/30",
        gradientPrimary:
          "border-transparent bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/30",
        gradientSecondary:
          "border-transparent bg-gradient-to-r from-purple-600 to-purple-500 text-white shadow-md shadow-purple-500/25 hover:shadow-lg hover:shadow-purple-500/30",
        gradientSuccess:
          "border-transparent bg-gradient-to-r from-emerald-600 to-emerald-500 text-white shadow-md shadow-emerald-500/25 hover:shadow-lg hover:shadow-emerald-500/30",
        gradientWarning:
          "border-transparent bg-gradient-to-r from-amber-500 to-yellow-500 text-white shadow-md shadow-amber-500/25 hover:shadow-lg hover:shadow-amber-500/30",
        gradientDanger:
          "border-transparent bg-gradient-to-r from-red-600 to-red-500 text-white shadow-md shadow-red-500/25 hover:shadow-lg hover:shadow-red-500/30",
        gradientInfo:
          "border-transparent bg-gradient-to-r from-cyan-600 to-cyan-500 text-white shadow-md shadow-cyan-500/25 hover:shadow-lg hover:shadow-cyan-500/30",

        // Outline gradient variants for a modern touch
        outlineGradient:
          "border-transparent bg-gradient-to-r from-slate-300 to-slate-200 text-slate-700 hover:bg-gradient-to-r hover:from-slate-400 hover:to-slate-300 dark:bg-gradient-to-r dark:from-slate-700 dark:to-slate-600 dark:text-slate-300 dark:hover:bg-gradient-to-r dark:hover:from-slate-800 dark:hover:to-slate-700",
        outlineGradientPrimary:
          "border-transparent bg-gradient-to-r from-blue-300 to-blue-200 text-blue-700 hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-300 dark:bg-gradient-to-r dark:from-blue-700 dark:to-blue-600 dark:text-blue-300 dark:hover:bg-gradient-to-r dark:hover:from-blue-800 dark:hover:to-blue-700",
        outlineGradientSecondary:
          "border-transparent bg-gradient-to-r from-purple-300 to-purple-200 text-purple-700 hover:bg-gradient-to-r hover:from-purple-400 hover:to-purple-300 dark:bg-gradient-to-r dark:from-purple-700 dark:to-purple-600 dark:text-purple-300 dark:hover:bg-gradient-to-r dark:hover:from-purple-800 dark:hover:to-purple-700",
        outlineGradientSuccess:
          "border-transparent bg-gradient-to-r from-emerald-300 to-emerald-200 text-emerald-700 hover:bg-gradient-to-r hover:from-emerald-400 hover:to-emerald-300 dark:bg-gradient-to-r dark:from-emerald-700 dark:to-emerald-600 dark:text-emerald-300 dark:hover:bg-gradient-to-r dark:hover:from-emerald-800 dark:hover:to-emerald-700",
        outlineGradientWarning:
          "border-transparent bg-gradient-to-r from-amber-300 to-amber-200 text-amber-700 hover:bg-gradient-to-r hover:from-amber-400 hover:to-amber-300 dark:bg-gradient-to-r dark:from-amber-700 dark:to-amber-600 dark:text-amber-300 dark:hover:bg-gradient-to-r dark:hover:from-amber-800 dark:hover:to-amber-700",
        outlineGradientDanger:
          "border-transparent bg-gradient-to-r from-red-300 to-red-200 text-red-700 hover:bg-gradient-to-r hover:from-red-400 hover:to-red-300 dark:bg-gradient-to-r dark:from-red-700 dark:to-red-600 dark:text-red-300 dark:hover:bg-gradient-to-r dark:hover:from-red-800 dark:hover:to-red-700",
        outlineGradientInfo:
          "border-transparent bg-gradient-to-r from-cyan-300 to-cyan-200 text-cyan-700 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-cyan-300 dark:bg-gradient-to-r dark:from-cyan-700 dark:to-cyan-600 dark:text-cyan-300 dark:hover:bg-gradient-to-r dark:hover:from-cyan-800 dark:hover:to-cyan-700",

        // Premium metallic variants
        premium:
          "border-transparent bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-yellow-900 shadow-md shadow-yellow-500/25 hover:shadow-lg hover:shadow-yellow-500/30",
        platinum:
          "border-transparent bg-gradient-to-r from-slate-400 via-slate-500 to-slate-600 text-white shadow-md shadow-slate-500/25 hover:shadow-lg hover:shadow-slate-500/30",

        // Status variants for professional applications
        active:
          "border-transparent bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-md shadow-green-500/25 animate-pulse",
        inactive: "border-transparent bg-gray-400 text-white opacity-75",
        pending:
          "border-transparent bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md shadow-orange-500/25",

        // Legacy variants for backward compatibility
        destructive:
          "border-transparent bg-gradient-to-r from-red-600 to-red-500 text-white shadow-md shadow-red-500/25 hover:shadow-lg hover:shadow-red-500/30",
      },
      size: {
        xs: "px-2 py-0.5 text-[10px] gap-1 [&>svg]:size-2.5",
        sm: "px-2.5 py-0.5 text-xs gap-1 [&>svg]:size-3",
        md: "px-3 py-1 text-xs gap-1.5 [&>svg]:size-3.5",
        lg: "px-4 py-1.5 text-sm gap-1.5 [&>svg]:size-4",
        xl: "px-5 py-2 text-sm gap-2 [&>svg]:size-4",
        "2xl": "px-6 py-2.5 text-base gap-2 [&>svg]:size-5",
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
