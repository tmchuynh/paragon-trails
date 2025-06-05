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
        className="flex justify-center items-center bg-tertiary hover:bg-secondary dark:bg-secondary dark:hover:bg-primary text-tertiary-foreground hover:text-secondary-foreground dark:hover:text-primary-foreground dark:text-secondary-foreground"
        pressed={currentTheme === "dark"}
      >
        {currentTheme === "dark" ? (
          <>
            <p className="sr-only">Toggle to light mode</p>
            <FiMoon className="w-4 h-4" />
          </>
        ) : (
          <>
            <p className="sr-only">Toggle to dark mode</p>
            <FiSun className="w-4 h-4" />
          </>
        )}
      </Toggle>
    ),
    [currentTheme, toggleTheme],
  );

  return (
    <div className="flex items-center mx-4">
      {mounted ? <div className="flex items-center">{toggleButton}</div> : null}
    </div>
  );
};
