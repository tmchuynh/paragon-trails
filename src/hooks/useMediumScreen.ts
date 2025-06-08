import { useEffect, useState } from "react";

/**
 * Custom hook that determines if the current screen width is considered "medium".
 *
 * This hook sets up an event listener for the window resize event and updates
 * the state to indicate whether the screen width is less than or equal to the specified breakpoint.
 *
 * @param {number} [breakpoint=768] - The breakpoint in pixels to consider as medium screen.
 * @returns {boolean} - A boolean value indicating if the screen width is medium (<= breakpoint).
 *
 * @example
 * const isMediumScreen = useMediumScreen(); // Uses default breakpoint of 768px
 * const isCustomMediumScreen = useMediumScreen(800); // Uses custom breakpoint of 800px
 *
 * if (isMediumScreen) {
 *   // Do something for medium screens
 * }
 */
const useMediumScreen = (breakpoint = 768): boolean => {
  const [isMediumScreen, setIsMediumScreen] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMediumScreen(window.innerWidth <= breakpoint);
    };

    // Set the initial state
    handleResize();

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [breakpoint]);

  return isMediumScreen;
};

export default useMediumScreen;
