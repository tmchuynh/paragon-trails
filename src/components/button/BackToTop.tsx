"use client";

import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { JSX, useCallback, useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { Button } from "../ui/button";

/**
 * A React component that renders a "Back to Top" button which appears when the user scrolls down the page.
 * The button allows the user to smoothly scroll back to the top of the page when clicked.
 *
 * @component
 * @example
 * // Usage example:
 * <BackToTop />
 *
 * @returns {JSX.Element} The rendered "Back to Top" button component.
 *
 * @remarks
 * This component uses the `useState` hook to manage the visibility of the button and the `useEffect` hook to add and remove
 * a scroll event listener. The `useCallback` hook is used to memoize the scroll event handler.
 *
 * @function
 * @name BackToTop
 */
const BackToTop = (): JSX.Element => {
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, [theme]);

  const toggleVisibility = useCallback(() => {
    if (window.scrollY > 300) {
      setIsButtonVisible(true);
    } else {
      setIsButtonVisible(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <p className="sr-only">Scroll back to the top of the page</p>
      {isButtonVisible && (
        <Button
          onClick={scrollToTop}
          size={"icon"}
          className={cn(
            "fixed bottom-4 right-4 bg-primary hover:bg-accent transition duration-300 ease-in-out rounded-full shadow-lg",
            {
              "bg-secondary text-secondary-foreground": theme == "dark",
            }
          )}
          aria-label="Back to top"
        >
          <FaArrowUp />
        </Button>
      )}
    </div>
  );
};

export default BackToTop;
