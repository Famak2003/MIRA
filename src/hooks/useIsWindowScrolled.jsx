import { useEffect, useState } from "react";

function useIsWindowScrolled() {
  const [isHalfwayScrolled, setIsHalfwayScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY;
      const halfwayPoint = windowHeight / 6;

      setIsHalfwayScrolled(scrollPosition >= halfwayPoint);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHalfwayScrolled]);
  return isHalfwayScrolled;
}

export default useIsWindowScrolled;
