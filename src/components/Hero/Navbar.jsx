import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

import { motion } from "framer-motion";

const containerVariants = {
  exit: {
    opacity: 0,
    x: "-30vw",
    transition: { ease: "easeInOut" },
  },
};

function Navbar() {
  return (
    <motion.ul
      variants={containerVariants}
      exit="exit"
      className="absolute h-[calc(100vh-80px)] w-[150px] right-0 flex flex-col justify-center items-center text-lg gap-10"
    >
      <li className="active">
        <div className="heading">Home</div>
      </li>
      <li>
        <Link to="/work" className="heading">
          Work
        </Link>
      </li>
    </motion.ul>
  );
}

export default Navbar;
