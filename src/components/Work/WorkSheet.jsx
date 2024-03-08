import React, { useState, useEffect } from "react";
import { motion, useTransform, useScroll } from "framer-motion";

const WorkVariants = {
  hidden: {
    opacity: 0,
    y: "200vh",
  },
  visible: {
    opacity: 1,
    y: "0px",
    transition: { ease: "easeInOut", delay: 0.1, duration: 1.0 },
  },
};

function WorkSheet({ refer }) {
  const [width, setWidth] = useState(window.innerWidth);
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);
  const isTab = width <= 1024;
  const { scrollYProgress } = useScroll({
    target: refer,
    layoutEffect: false,
  });
  let y;
  if (isTab) {
    y = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  } else {
    y = useTransform(scrollYProgress, [0, 1], ["0%", "-180%"]);
  }

  return (
    <motion.div
      variants={WorkVariants}
      style={{ y }}
      initial="hidden"
      animate="visible"
      className="text-4xl text-white md:w-[78%] xl:w-[60%] h-full p-5 xl:mr-[10%] flex flex-col gap-[40px]"
    >
      <div className="flex gap-10 w-full">
        <img
          loading="lazy"
          src="/assets/VK Photos/VKPhotos03.webp"
          className="md:w-[300px] md:h-[200px] lg:w-[500px] lg:h-[300px] object-cover rounded-xl"
          alt=""
        />
        <div className="w-[50%] flex flex-col justify-between items-end">
          <h1 className="md:text-8xl lg:text-9xl">2016</h1>
          <p className="text-end text-sm text-gray-500">
            B Safari Marathon {"(21KM)"} <br></br>Surat City Marathon {"(21KM)"}
          </p>
        </div>
      </div>
      <div className="flex gap-10 w-full">
        <img
          loading="lazy"
          src="/assets/VK Photos/VK Photos-02.webp"
          className="md:w-[300px] md:h-[200px] lg:w-[500px] lg:h-[300px] object-cover order-last rounded-xl"
          alt=""
        />
        <div className="w-[50%] flex flex-col justify-between items-start">
          <h1 className="md:text-8xl lg:text-9xl">2017</h1>
          <p className="text-start text-sm text-gray-500">
            Jamnagar Marathon {"(21KM)"} <br></br>Valsad Marathon {"(21KM)"}
            <br></br>Surat City Marathon {"(21KM)"}
          </p>
        </div>
      </div>
      <div className="flex gap-10 w-full">
        <img
          loading="lazy"
          src="/assets/VK Photos/VK Photos-06.webp"
          className="md:w-[300px] md:h-[200px] lg:w-[500px] lg:h-[300px] object-cover rounded-xl"
          alt=""
        />
        <div className="w-[50%] flex flex-col justify-between items-end ">
          <h1 className="md:text-8xl lg:text-9xl">2018</h1>
          <p className="text-end text-sm text-gray-500">
            Surat City Marathon {"(21KM)"} <br></br>Dadi Prakash Mani Mount Abu
            Half Marathon {"(21KM)"}
            <br></br>International Trillionth {"(Ultra 50KM)"}
          </p>
        </div>
      </div>
      <div className="flex gap-10 w-full">
        <img
          loading="lazy"
          src="/assets/VK Photos/VK Photos-04.webp"
          className="md:w-[300px] md:h-[200px] lg:w-[500px] lg:h-[300px] object-cover order-last rounded-xl"
          alt=""
        />
        <div className="w-[50%] flex flex-col justify-between items-start ">
          <h1 className="md:text-8xl lg:text-9xl">2019</h1>
          <p className="text-start text-sm text-gray-500">
            Indian Running {"(Independence Day)"} {"(10KM)"} <br></br>Hot Ultra{" "}
            {"(Ultra 53KM)"}
            <br></br>Run for Unity {"(Ahmedabad Police) "}
            {"(10KM)"} <br></br>Tour d Pawnage {"(Cycling 100KM) "} <br></br>
            Run for Army {"(21KM) "} <br></br>STR Ultra Marathon{" "}
            {"(Ultra 53KM) "}
          </p>
        </div>
      </div>
      <div className="flex gap-10 w-full">
        <img
          loading="lazy"
          src="/assets/VK Photos/VK Photos-01.webp"
          className="md:w-[300px] md:h-[200px] lg:w-[500px] lg:h-[300px] object-cover object-top rounded-xl"
          alt=""
        />
        <div className="w-[50%] flex flex-col justify-between items-end">
          <h1 className="md:text-8xl lg:text-9xl">2020</h1>
          <p className="text-end text-sm text-gray-500">
            Deccan Ultra {"(Ultra 80KM)"} <br></br>Never Give Up Backyard Ultra{" "}
            <br></br>Best of India world record by running 12Hr {"(82KM)"}{" "}
            inside home during lockdown
          </p>
        </div>
      </div>
      <div className="flex gap-10 w-full">
        <img
          loading="lazy"
          src="/assets/VK Photos/VK Photos-05.webp"
          className="md:w-[300px] md:h-[200px] lg:w-[400px] lg:h-[300px] object-cover order-last rounded-xl"
          alt=""
        />
        <div className="w-[50%] flex justify-center items-center">
          <p className="md:text-3xl lg:text-5xl uppercase font-bold leading-[50px]">
            Ultra <br /> <span className="text-[#fff500]">Marathoner</span>
          </p>
        </div>
      </div>
      <div className="flex gap-10 w-full">
        <img
          loading="lazy"
          src="/assets/VK Photos/VK Photos-07.webp"
          className="md:w-[300px] md:h-[200px] lg:w-[500px] lg:h-[300px] object-cover rounded-xl"
          alt=""
        />
        <div className="w-[50%] flex flex-col justify-between items-end ">
          <h1 className="md:text-8xl lg:text-9xl">2022</h1>
          <p className="text-end text-sm text-gray-500">
            SRT Ultra {"(53KM)-11Hr50min"} <br></br>Adani Half Marathon{" "}
            {"(21KM)-3hr12min with Blind Runner"}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default WorkSheet;
