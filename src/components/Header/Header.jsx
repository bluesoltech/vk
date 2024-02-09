import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
function Header() {
  const [active, setActive] = useState("");
  let location = useLocation();
  useEffect(() => {
    if (location.pathname == "/") setActive("/");
    if (location.pathname == "/work") setActive("/work");
  }, [location]);

  return (
    <div className="w-full sticky top-0 h-[80px] flex justify-between border-b-[1px] border-gray-700 z-[999] bg-[#0F0E0E]">
      <div className="w-full h-full pl-2">
        <Link to="/">
          <img
            loading="lazy"
            src="/assets/logo.png"
            className="h-full w-auto"
          ></img>
        </Link>
      </div>
      <div className="flex justify-end items-center gap-4 text-gray-500 text-xl md:opacity-0">
        <Link to="/">
          <div className={active == "/" ? "text-white" : "hover:text-white"}>
            Home
          </div>
        </Link>
        <Link to="/work">
          <div
            className={active == "/work" ? "text-white" : "hover:text-white"}
          >
            Work
          </div>
        </Link>

        <div></div>
      </div>
    </div>
  );
}

export default Header;
