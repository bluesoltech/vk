import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  // Extracts pathname property(key) from an object
  const { pathname } = useLocation();

  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    document.documentElement.style.scrollSnapType = "none";

    // Scroll to the top
    window.scrollTo(0, 0);

    // Re-enable scroll snapping after a short delay
    setTimeout(function () {
      document.documentElement.style.scrollSnapType = "y mandatory"; // Or whatever your original value was
    }, 1000);
  }, [pathname]);
};

export default ScrollToTop;
