import { useEffect, useState } from "react";
import { debounce } from "./debounce";

/**
 * Custom hook to determine if the screen size is small (<= 640px).
 *
 * @returns {boolean} - Returns true if the screen width is less than or equal to 640px, otherwise false.
 */
const useSmallScreen = (): boolean => {
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);

  const handleResize = () => {
    setIsSmallScreen(window.innerWidth <= 640);
  };

  useEffect(() => {
    const debouncedHandleResize = debounce(handleResize, 100);

    window.addEventListener("resize", debouncedHandleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  }, []);

  return isSmallScreen;
};

export default useSmallScreen;
