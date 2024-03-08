import React from "react";
import Navbar from "./Navbar";
import Main from "./Main";
function Hero() {
  return (
    <section className="relative h-[calc(80vh)] flex items-center justify-center ">
      <Main />
      <Navbar />
    </section>
  );
}

export default Hero;
