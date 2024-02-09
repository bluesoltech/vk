import React from "react";
import Main from "./Main";
import WorkSheet from "./WorkSheet";

function Hero({ refer }) {
  return (
    <div className=" h-screen sticky top-[80px] flex flex-col items-end justify-center  overflow-y-hidden">
      <Main />
      <WorkSheet refer={refer} />
    </div>
  );
}

export default Hero;
