import { useEffect, useState } from "react";

/**
 * Custom hook to determine if the screen size is small.
 *
 * @param {number} [breakpoint=640] - The breakpoint in pixels to consider as small screen.
 * @returns {boolean} - Returns true if the screen width is less than or equal to the breakpoint, otherwise false.
 */
const useSmallScreen = (breakpoint = 640): boolean => {
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= breakpoint);
    };

    // Set the initial state
    handleResize();

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [breakpoint]);

  return isSmallScreen;
};

export default useSmallScreen;
