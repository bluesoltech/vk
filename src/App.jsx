import React from "react";
import "./App.css";
import Layout from "./layout/Layout";
import ScrollToTop from "./ScrollToTop.js";

function App() {
  return (
    <div className="bg-[#0F0E0E]">
      <ScrollToTop />
      <Layout />
    </div>
  );
}

export default App;
