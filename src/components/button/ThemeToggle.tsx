"use client";
import { useTheme } from "next-themes";
import { JSX, useEffect, useMemo, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { Toggle } from "../ui/toggle";

/**
 * A component that provides a theme toggle button to switch between light and dark modes.
 *
 * @component
 * @example
 * ```tsx
 * <ThemeToggle />
 * ```
 *
 * @returns {JSX.Element | null} A toggle button component that switches between light/dark themes,
 * or null if the component hasn't mounted yet.
 *
 * @remarks
 * This component uses the useTheme hook to manage theme state.
 * It handles system theme preferences and persists user theme choices.
 * The component renders a toggle button with sun/moon icons depending on the current theme.
 * Component mounts with a null render to prevent hydration issues.
 */
export const ThemeToggle = (): JSX.Element | null => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (!theme || theme === "system") {
      setTheme(systemTheme || "light");
    }
  }, [systemTheme, theme, setTheme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const currentTheme = theme === "system" ? systemTheme : theme;

  // Memoize the toggle button content based on the theme
  const toggleButton = useMemo(
    () => (
      <Toggle
        aria-label="Toggle theme"
        onClick={toggleTheme}
        className="flex justify-center items-center bg-transparent data-[state=on]:bg-transparent dark:hover:bg-muted shadow-none rounded-lg w-9 h-9 text-accent hover:text-accent dark:text-accent transition-all duration-200 focus-visible:outline-none"
        pressed={currentTheme === "dark"}
      >
        {currentTheme === "dark" ? (
          <>
            <span className="sr-only">Toggle to light mode</span>
            <FiMoon className="w-4 h-4" />
          </>
        ) : (
          <>
            <span className="sr-only">Toggle to dark mode</span>
            <FiSun className="w-4 h-4" />
          </>
        )}
      </Toggle>
    ),
    [currentTheme, toggleTheme],
  );

  return mounted ? toggleButton : null;
};
