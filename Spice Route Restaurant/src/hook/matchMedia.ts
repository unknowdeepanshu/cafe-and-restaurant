import { useState, useEffect } from "react";

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  const [isMaxTablet, setIsMaxTablet] = useState(false);
  const [isMinTablet, setIsMinTablet] = useState(false);
  const [isDesktop, setIsDisDesktop] = useState(false);

  const [isLargeDesktop, setIsDLargeisDesktop] = useState(false);
  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 425px)");
    const tabletMaxQuery = window.matchMedia("(max-width: 768px)");
    const tabletMinQuery = window.matchMedia("(min-width: 768px)");
    const desktopQuery = window.matchMedia("(min-width: 1024px)");

    const LargedesktopQuery = window.matchMedia("(min-width: 1503px)");
    const handleChange = () => {
      setIsMobile(mobileQuery.matches);
      setIsMaxTablet(tabletMaxQuery.matches);
      setIsDisDesktop(desktopQuery.matches);
      setIsMinTablet(tabletMinQuery.matches);
      setIsDLargeisDesktop(LargedesktopQuery.matches);
    };

    handleChange();
    mobileQuery.addEventListener("change", handleChange);
    tabletMaxQuery.addEventListener("change", handleChange);
    desktopQuery.addEventListener("change", handleChange);
    tabletMinQuery.addEventListener("change", handleChange);
    LargedesktopQuery.addEventListener("change", handleChange);
    return () => {
      mobileQuery.removeEventListener("change", handleChange);
      tabletMaxQuery.removeEventListener("change", handleChange);
      desktopQuery.removeEventListener("change", handleChange);
      tabletMinQuery.addEventListener("change", handleChange);

      LargedesktopQuery.addEventListener("change", handleChange);
    };
  }, []);

  return { isMobile, isMaxTablet, isDesktop, isMinTablet, isLargeDesktop };
}
