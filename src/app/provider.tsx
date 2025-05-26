"use client";

import { NotFoundProvider } from "@/context/NotFoundContext";
import { ThemeProvider } from "next-themes";
import { JSX, ReactNode } from "react";

/**
 * Providers component that wraps its children with a ThemeProvider.
 *
 * @param {Object} props - The props object.
 * @param {ReactNode} props.children - The child components to be wrapped by the ThemeProvider.
 *
 * @returns {JSX.Element} The ThemeProvider component wrapping the children.
 */
export function Providers({ children }: { children: ReactNode }): JSX.Element {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={true}>
      <NotFoundProvider>{children}</NotFoundProvider>
    </ThemeProvider>
  );
}
