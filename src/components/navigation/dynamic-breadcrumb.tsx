"use client";

import { cn } from "@/lib/utils";
import { kebabToTitle } from "@/lib/utils/format";
import { ChevronRight, Home, MoreHorizontal } from "lucide-react";
import { usePathname } from "next/navigation";
import React, { JSX, useMemo } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";

export default function DynamicBreadcrumb(): JSX.Element | null {
  const pathname = usePathname();

  const pathSegments = useMemo(
    () =>
      pathname
        .split("/")
        .filter(Boolean)
        .map((segment) => decodeURIComponent(segment)),
    [pathname]
  );

  // Don't show breadcrumb on home page
  if (pathname === "/" || pathSegments.length === 0) return null;

  // Detect if this is a 404 page
  const isNotFoundPage = pathSegments.includes("not-found");

  const formatSegment = (segment: string, isLast: boolean): string => {
    if (isLast && isNotFoundPage) return "Page Not Found";
    if (segment.length === 2) return kebabToTitle(segment).toUpperCase();
    return kebabToTitle(segment);
  };

  const buildHref = (index: number): string => {
    return `/${pathSegments.slice(0, index + 1).join("/")}`;
  };

  // Smart collapsing for better UX
  const shouldCollapse = pathSegments.length > 4;
  const displaySegments = shouldCollapse
    ? [pathSegments[0], pathSegments[1], ...pathSegments.slice(-2)]
    : pathSegments;

  return (
    <div className="z-40 sticky supports-[backdrop-filter]:bg-background/60 backdrop-blur pt-9 border-b border-border/40 w-full">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-7xl">
        <div className="flex items-center py-2 md:py-3 min-h-[3rem]">
          <Breadcrumb>
            <BreadcrumbList className="flex items-center font-medium text-sm">
              {/* Home link */}
              <BreadcrumbItem>
                <BreadcrumbLink
                  href="/"
                  className={cn(
                    "group flex items-center gap-2 text-muted-foreground/80",
                    "rounded-lg px-2.5 py-1.5 transition-all duration-200 ease-in-out",
                    "hover:text-foreground "
                  )}
                >
                  <Home className="w-4 h-4 group-hover:text-accent transition-all duration-200 group-hover:scale-120" />
                  <span className="sm:inline hidden font-medium">Home</span>
                </BreadcrumbLink>
              </BreadcrumbItem>

              {/* Show ellipsis if path is collapsed */}
              {shouldCollapse && pathSegments.length > 2 && (
                <>
                  <BreadcrumbSeparator className="mx-1">
                    <ChevronRight className="w-3.5 h-3.5 text-muted-foreground/50" />
                  </BreadcrumbSeparator>
                  <BreadcrumbItem>
                    <div className="flex justify-center items-center rounded-md w-8 h-8 text-muted-foreground/60 hover:text-muted-foreground transition-colors">
                      <MoreHorizontal className="w-4 h-4" />
                    </div>
                  </BreadcrumbItem>
                </>
              )}

              {/* Path segments */}
              {displaySegments.map((segment, index) => {
                const actualIndex =
                  shouldCollapse && index > 1
                    ? pathSegments.length - (displaySegments.length - index)
                    : index;
                const isLast = actualIndex === pathSegments.length - 1;
                const href = buildHref(actualIndex);
                const displayText = formatSegment(segment, isLast);

                return (
                  <React.Fragment key={`${href}-${actualIndex}`}>
                    <BreadcrumbSeparator className="mx-1">
                      <ChevronRight className="w-3.5 h-3.5 text-muted-foreground/50 transition-colors" />
                    </BreadcrumbSeparator>

                    <BreadcrumbItem className="flex items-center">
                      {isLast ? (
                        <BreadcrumbPage
                          className={cn(
                            "max-w-[8rem] truncate font-semibold text-foreground sm:max-w-none",
                            "rounded-lg bg-primary/8 px-2.5 py-1.5 ring-1 ring-primary/20"
                          )}
                        >
                          {displayText}
                        </BreadcrumbPage>
                      ) : (
                        <BreadcrumbLink
                          href={href}
                          className={cn(
                            "max-w-[6rem] truncate text-muted-foreground/80 sm:max-w-none",
                            "rounded-lg px-2.5 py-1.5 font-medium transition-all duration-200 ease-in-out",
                            "hover:text-foreground hover:underline decoration-fancy decoration-2 underline-offset-2",
                            "focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-2"
                          )}
                        >
                          {displayText}
                        </BreadcrumbLink>
                      )}
                    </BreadcrumbItem>
                  </React.Fragment>
                );
              })}
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </div>
  );
}
