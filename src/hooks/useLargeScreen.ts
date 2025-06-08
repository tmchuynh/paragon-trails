"use client";

import { useState, useEffect } from "react";

const useLargeScreen = (breakpoint = 1024) => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= breakpoint);
    };

    // Set the initial state
    handleResize();

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [breakpoint]);

  return isLargeScreen;
};

export default useLargeScreen;
