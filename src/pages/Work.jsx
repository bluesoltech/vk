import React, { useRef } from "react";
import Hero from "../components/Work/Hero";

import { motion } from "framer-motion";
import Contact from "../components/Contact/Contact";

const containerVariants = {
  exit: {
    x: "47vw",
    transition: { ease: "easeInOut", delay: 0.0, duration: 0.1 },
  },
};

function Work() {
  const targetRef = useRef(null);
  return (
    <>
      <motion.section
        ref={targetRef}
        variants={containerVariants}
        exit="exit"
        className="relative h-[300vh] oveflow-x-hidden"
      >
        <Hero refer={targetRef} />
      </motion.section>
      <Contact />
    </>
  );
}

export default Work;
