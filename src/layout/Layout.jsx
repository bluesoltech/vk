import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Routers from "../Router/Routers";

function Layout() {
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;
  return (
    <div>
      <Header isMobile={isMobile} />
      <main>
        <Routers isMobile={isMobile} />
      </main>
      <Footer isMobile={isMobile} />
    </div>
  );
}

export default Layout;
