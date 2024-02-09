import React, { useRef } from "react";
import "./Main.css";
import Ball from "../Ball/Ball";
import Ball2 from "../Ball/Ball2";
import Ball3 from "../Ball/Ball3";
import Ball4 from "../Ball/Ball4";

function Main() {
  const mainRef = useRef(null);
  return (
    <div
      ref={mainRef}
      className="relative w-full md:w-[80%] h-full flex flex-col md:flex-row items-center "
    >
      <Ball refer={mainRef} />
      <Ball2 refer={mainRef} />
      <Ball3 refer={mainRef} />
      <Ball4 refer={mainRef} />
      <div
        className="absolute inset-x-0 top-[-10rem] z-6 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="md:absolute text-white md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold">
        <h1>
          NEVER GIVE UP <br></br>KEEP RUNNING
        </h1>
        <p className="md:text-sm lg:text-lg xl:text-xl text-[#FFF500] uppercase lg:tracking-normal xl:tracking-wide 2xl:tracking-widest">
          ENJOY RUNNING ENJOY FREEDOM
        </p>
      </div>
      <div className="relative top-[0px] md:top-[0px] w-[250px] h-[250px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] xl:w-[600px] xl:h-[600px] rounded-[50%] border-t-[1px] border-r-[1px] border-gray-500 rotate-[45deg] mx-auto z-1 flex items-center justify-center">
        <div className="absolute spinLoader w-full h-full rounded-[50%] border-t-[5px] rotate-[45deg] z-2"></div>
        <div className="relative w-[50%] h-[50%]">
          <img
            className="w-full h-full rounded-[50%] rotate-[-45deg] object-contain bg-gradient-to-t to-[#FDC898] from-[#B517FF]"
            src="/assets/Sir.png"
          ></img>
          <div className="absolute top-0 w-full h-full rounded-[50%] rotate-[-45deg] z-3 bg-gradient-to-t to-[#FDC898] from-[#B517FF] opacity-20"></div>
        </div>
      </div>
    </div>
  );
}

export default Main;
