import React from "react";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 0.1, duration: 0.1 },
  },
  exit: {
    x: "-47vw",
    transition: { ease: "easeInOut", duration: 0.1 },
  },
};

function Home() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="pt-[80px]"
    >
      <Hero />
      <About />
    </motion.div>
  );
}

export default Home;
