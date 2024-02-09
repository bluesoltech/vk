import React from "react";
import { motion } from "framer-motion";
const containerVariants = {
  exit: {
    opacity: 0,
    x: "-45vw",
    transition: { ease: "easeInOut" },
  },
};
function Ball3({ refer }) {
  return (
    <motion.div
      variants={containerVariants}
      exit="exit"
      className={`absolute h-[25px] w-[25px] md:h-[50px] md:w-[50px] bg-white rounded-[50%] z-[10] top-[150px] right-[50px] bg-gradient-to-t to-[#FDC898] from-[#B517FF] rotate-[120deg]`}
      drag
      dragConstraints={refer}
    ></motion.div>
  );
}

export default Ball3;
