"use client";

import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

export default function BackdropButton({
  variant = "default",
  onClick,
  className,
  size,
  children,
}: {
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "accent"
    | "tertiary"
    | "fancy"
    | "destructive"
    | "ghost"
    | "link"
    | "icon"
    | "disabled";
  size?: "default" | "sm" | "lg";
  onClick: string | (() => void);
  className?: string;
  children: React.ReactNode;
}) {
  const router = useRouter();
  return (
    <Button
      variant={variant}
      onClick={() => {
        if (typeof onClick === "string") {
          router.push(onClick);
        } else if (onClick) {
          onClick();
        }
      }}
      size={size}
      className={cn(
        "backdrop-blur-lg px-4 py-2 rounded-lg transition duration-200 cursor-pointer",
        {
          "shadow-none hover:underline underline-offset-2 px-0 backdrop-blur-none":
            variant === "link",
        },
        { "hover:shadow-lg": variant !== "outline" && variant !== "link" },
        className
      )}
    >
      {children}
    </Button>
  );
}
