import React from "react";
import { Link } from "react-router-dom";

function Main() {
  return (
    <div className="absolute md:left-[-124px] lg:left-[-169px] xl:left-[-250px] md:pb-[160px] lg:pb-[160px] xl:pb-[160px] h-full flex items-center">
      <div className="relative w-[250px] h-[250px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] xl:w-[600px] xl:h-[600px] rounded-[50%] border-t-[1px] border-r-[1px] border-gray-500 rotate-[45deg] mx-auto z-1 flex items-center justify-center">
        <div className="absolute spinLoader w-full h-full rounded-[50%] border-t-[5px] rotate-[45deg] z-2"></div>
        <div className="relative w-[50%] h-[50%]">
          <img
            className="w-full h-full rounded-[50%] rotate-[-45deg] object-contain bg-gradient-to-t to-[#FDC898] from-[#B517FF]"
            src="/assets/Sir.png"
          ></img>
          <div className="absolute top-0 w-full h-full rounded-[50%] rotate-[-45deg] z-3 bg-gradient-to-t to-[#FDC898] from-[#B517FF] opacity-20"></div>
        </div>
        <ul className="">
          <li className="top-0 absolute rotate-[-45deg] md:top-[22%] md:left-[50%] lg:top-[20%] lg:left-[55%] xl:top-[25%] xl:left-[65%]">
            <Link to="/" className="heading absolute uppercase text-white ">
              Home
            </Link>
          </li>
          <li className="active right-0 absolute rotate-[-45deg] md:top-[20%] md:left-[58%] lg:top-[20%] lg:left-[63%] xl:top-[25%] xl:left-[71%]">
            <div className="heading cursor-pointer  absolute uppercase text-white ">
              Work
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Main;
