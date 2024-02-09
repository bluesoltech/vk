import React, { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Loading from "../components/Loading/Loading";

const Home = lazy(() => import("../pages/Home"));
const Work = lazy(() => import("../pages/Work"));
const NoPage = lazy(() => import("../pages/NoPage"));
const HomeM = lazy(() => import("../pages/HomeM"));
const WorkM = lazy(() => import("../pages/WorkM"));

function Routers({ isMobile }) {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.key}>
        <Route
          path="/"
          element={
            isMobile ? (
              <Suspense fallback={<Loading />}>
                <HomeM />
              </Suspense>
            ) : (
              <Suspense fallback={<Loading />}>
                <Home />
              </Suspense>
            )
          }
        />
        <Route
          path="/work"
          element={
            isMobile ? (
              <Suspense fallback={<Loading />}>
                <WorkM />
              </Suspense>
            ) : (
              <Suspense fallback={<Loading />}>
                <Work />
              </Suspense>
            )
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<Loading />}>
              <NoPage />
            </Suspense>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default Routers;
