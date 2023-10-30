import { useEffect, useState } from "react";

export const useResponsive = () => {
  const [screen, setScreen] = useState<"mobile" | "tablet" | "desktop">(
    typeof window === "undefined"
      ? "desktop"
      : window.innerWidth < 768
      ? "mobile"
      : window.innerWidth < 1024
      ? "tablet"
      : "desktop"
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setScreen("mobile");
      } else if (window.innerWidth < 1024) {
        setScreen("tablet");
      } else {
        setScreen("desktop");
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    screen,
    isMobile: screen === "mobile",
    isTablet: screen === "tablet",
    isDesktop: screen === "desktop",
  };
};
