import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Work from "../pages/Work";
import NoPage from "../pages/NoPage";

import { AnimatePresence } from "framer-motion";
import HomeM from "../pages/HomeM";
import WorkM from "../pages/WorkM";

function Routers({ isMobile }) {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.key}>
        <Route path="/" element={isMobile ? <HomeM /> : <Home />} />
        <Route path="/work" element={isMobile ? <WorkM /> : <Work />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default Routers;
