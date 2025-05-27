"use client";

import useMediumScreen from "@/hooks/useMediumScreen";
import useSmallScreen from "@/hooks/useSmallScreen";
import { capitalize } from "@/lib/utils/format";
import { generateRandomString } from "@/lib/utils/sort";
import { usePathname } from "next/navigation";
import { JSX, useMemo } from "react";
import { PiPaperPlaneRightLight } from "react-icons/pi";
import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";

export default function DynamicBreadcrumb(): JSX.Element | null {
  const isSmallScreen = useSmallScreen();
  const isMediumScreen = useMediumScreen();
  const pathname = usePathname();

  const pathSegments = useMemo(
    () =>
      pathname
        .split("/")
        .filter(Boolean)
        .map((segment) => decodeURIComponent(segment)),
    [pathname]
  );

  // Detect if this is a 404 page based on known structure
  const isNotFoundPage = pathSegments.includes("not-found");

  const capitalizedSegments = useMemo(
    () =>
      pathSegments.map((segment, index) =>
        index === pathSegments.length - 1 && isNotFoundPage
          ? "Not Found"
          : segment.length === 2
          ? segment.toUpperCase()
          : capitalize(segment)
      ),
    [pathSegments, isNotFoundPage]
  );

  const breadcrumbItems = useMemo(() => {
    if (pathname === "/") return null;

    const items: JSX.Element[] = [];

    const renderItem = (
      href: string,
      segment: string,
      index: number,
      isLast: boolean
    ) => {
      const r = generateRandomString(5);

      return (
        <BreadcrumbItem
          key={`${href}-${segment}-${index}-${isLast}=${r}`}
          className="mx-1"
        >
          {segment}
        </BreadcrumbItem>
      );
    };

    if (isSmallScreen) {
      items.push(
        <BreadcrumbItem key="dots" className="-mx-1">
          <span className="rounded-md">...</span>
        </BreadcrumbItem>
      );

      const currentHref = `/${pathSegments.join("/")}`;
      const currentSegment = capitalizedSegments[pathSegments.length - 1];

      items.push(
        <BreadcrumbSeparator
          key={`sep-${currentHref}`}
          className="ml-1 text-primary"
        >
          <PiPaperPlaneRightLight />
        </BreadcrumbSeparator>
      );

      items.push(
        renderItem(currentHref, currentSegment, pathSegments.length - 1, true)
      );
    } else if (isMediumScreen && !isSmallScreen) {
      items.push(
        <BreadcrumbItem key="home" className="mx-1">
          <BreadcrumbLink
            href="/"
            className="px-1 py-1 rounded-md dark:text-foreground underline-offset-4 hover:underline hover:decoration-secondary"
          >
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
      );

      if (pathSegments.length > 2) {
        const href = `/${pathSegments.slice(0, 2).join("/")}`;
        const segment = capitalizedSegments[1];

        items.push(
          <BreadcrumbSeparator key="sep-2" className="ml-1 text-primary">
            <PiPaperPlaneRightLight />
          </BreadcrumbSeparator>
        );

        items.push(renderItem(href, segment, 1, false));
      } else if (pathSegments.length > 1) {
        const href = `/${pathSegments.join("/")}`;
        const lastSegment = capitalizedSegments[capitalizedSegments.length - 1];

        items.push(
          <BreadcrumbSeparator key="sep-last" className="ml-1 text-primary">
            <PiPaperPlaneRightLight />
          </BreadcrumbSeparator>
        );

        items.push(
          renderItem(href, lastSegment, pathSegments.length - 1, true)
        );
      }

      if (pathSegments.length > 0) {
        const href = `/${pathSegments.join("/")}`;
        const lastSegment = capitalizedSegments[capitalizedSegments.length - 1];
        items.push(
          <BreadcrumbSeparator key="sep-1" className="ml-1 text-primary">
            <PiPaperPlaneRightLight />
          </BreadcrumbSeparator>
        );

        items.push(
          renderItem(href, lastSegment, pathSegments.length - 1, true)
        );
      }
    } else {
      items.push(
        <BreadcrumbItem key="home" className="mx-1">
          <BreadcrumbLink
            href="/"
            className="px-1 py-1 rounded-md dark:text-foreground underline-offset-4 hover:underline hover:decoration-secondary"
          >
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
      );

      pathSegments.forEach((_, index) => {
        const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
        const segment = capitalizedSegments[index];

        items.push(
          <BreadcrumbSeparator
            key={`sep-${href}`}
            className="mx-4 text-primary"
          >
            <PiPaperPlaneRightLight />
          </BreadcrumbSeparator>
        );

        items.push(
          renderItem(href, segment, index, index === pathSegments.length - 1)
        );
      });
    }

    return items;
  }, [
    pathname,
    pathSegments,
    capitalizedSegments,
    isSmallScreen,
    isMediumScreen,
    isNotFoundPage,
  ]);

  if (!breadcrumbItems) return null;

  return (
    <div className="mx-auto pt-3 md:pt-5 lg:pt-9 w-10/12 md:w-11/12">
      <nav
        aria-label="Breadcrumb"
        className="flex flex-row items-center gap-2 w-full text-xs lg:text-sm"
      >
        <ul className="flex flex-row items-center gap-2 font-[EncodeSans]">
          {breadcrumbItems}
        </ul>
      </nav>
    </div>
  );
}
