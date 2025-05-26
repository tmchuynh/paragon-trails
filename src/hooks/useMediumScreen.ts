import { useEffect, useState } from "react";
import { debounce } from "./debounce";

/**
 * Custom hook that determines if the current screen width is considered "medium".
 *
 * This hook sets up an event listener for the window resize event and updates
 * the state to indicate whether the screen width is less than or equal to 768 pixels.
 *
 * @returns {boolean} - A boolean value indicating if the screen width is medium (<= 768 pixels).
 *
 * @example
 * const isMediumScreen = useMediumScreen();
 *
 * if (isMediumScreen) {
 *   // Do something for medium screens
 * }
 */
const useMediumScreen = (): boolean => {
  const [isMediumScreen, setIsMediumScreen] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMediumScreen(window.innerWidth <= 768);
    };

    const debouncedHandleResize = debounce(handleResize, 200);

    window.addEventListener("resize", debouncedHandleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  }, []);

  return isMediumScreen;
};

export default useMediumScreen;
