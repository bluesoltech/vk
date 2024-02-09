import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  exit: {
    opacity: 0,
    x: "-45vw",
    transition: { ease: "easeInOut" },
  },
};

function Ball({ refer }) {
  return (
    <motion.div
      variants={containerVariants}
      exit="exit"
      className={`absolute h-[20px] w-[20px] md:h-[50px] md:w-[50px] bg-white rounded-[50%] z-[10] top-[100px] bg-gradient-to-t to-[#FDC898] from-[#B517FF] `}
      drag
      dragConstraints={refer}
    ></motion.div>
  );
}

export default Ball;
