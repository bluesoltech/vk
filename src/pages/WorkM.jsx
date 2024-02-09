import React from "react";
import Contact from "../components/Contact/Contact";

function WorkM() {
  return (
    <div className="">
      <section className="snap-start pt-[100px] sm grid grid-cols-1 min-[400px]:grid-cols-2">
        <div className="flex flex-col gap-4 p-5 w-full">
          <img
            loading="lazy"
            src="/assets/Asset1.png"
            className="w-full h-[200px] object-cover rounded-xl"
            alt=""
          />
          <div className="w-full flex justify-between items-center">
            <h1 className="text-4xl min-[400px]:text-2xl text-white">2016</h1>
            <p className="text-end text-sm text-gray-500">
              B Safari Marathon {"(21KM)"} <br></br>Surat City Marathon{" "}
              {"(21KM)"}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 p-5 w-full">
          <img
            loading="lazy"
            src="/assets/Asset2.png"
            className="w-full h-[200px] object-cover rounded-xl"
            alt=""
          />
          <div className="w-full flex justify-between items-center">
            <h1 className="text-4xl text-white min-[400px]:text-2xl order-last">
              2017
            </h1>
            <p className="text-start text-sm text-gray-500">
              Jamnagar Marathon {"(21KM)"} <br></br>Valsad Marathon {"(21KM)"}
              <br></br>Surat City Marathon {"(21KM)"}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 p-5 w-full">
          <img
            loading="lazy"
            src="/assets/Asset3.png"
            className="w-full h-[200px] object-cover rounded-xl"
            alt=""
          />
          <div className="w-full flex justify-between items-center">
            <h1 className="text-4xl min-[400px]:text-2xl text-white">2018</h1>
            <p className="text-end text-sm text-gray-500">
              Surat City Marathon {"(21KM)"} <br></br>Dadi Prakash Mani Mount
              Abu Half Marathon {"(21KM)"}
              <br></br>International Trillionth {"(Ultra 50KM)"}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 p-5 w-full">
          <img
            loading="lazy"
            src="/assets/Asset5.png"
            className="w-full h-[200px] object-cover rounded-xl"
            alt=""
          />
          <div className="w-full flex justify-between items-center">
            <h1 className="text-4xl text-white min-[400px]:text-2xl order-last">
              2019
            </h1>
            <p className="text-start text-sm text-gray-500">
              Indian Running {"(Independence Day)"} {"(10KM)"} <br></br>Hot
              Ultra {"(Ultra 53KM)"}
              <br></br>Run for Unity {"(Ahmedabad Police) "}
              {"(10KM)"} <br></br>Tour d Pawnage {"(Cycling 100KM) "} <br></br>
              Run for Army {"(21KM) "} <br></br>STR Ultra Marathon{" "}
              {"(Ultra 53KM) "}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 p-5 w-full">
          <img
            loading="lazy"
            src="/assets/Asset6.png"
            className="w-full h-[200px] object-cover object-top rounded-xl"
            alt=""
          />
          <div className="w-full flex justify-between items-center">
            <h1 className="text-4xl min-[400px]:text-2xl text-white">2020</h1>
            <p className="text-end text-sm text-gray-500">
              Deccan Ultra {"(Ultra 80KM)"} <br></br>Never Give Up Backyard
              Ultra <br></br>Best of India world record by running 12Hr{" "}
              {"(82KM)"} inside home during lockdown
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 p-5 w-full">
          <img
            loading="lazy"
            src="/assets/Asset7.png"
            className="w-full h-[200px] object-cover rounded-xl"
            alt=""
          />
          <div className="w-full flex justify-between items-center">
            <h1 className="text-4xl text-white min-[400px]:text-2xl order-last">
              2017
            </h1>
            <p className="text-start uppercase text-white text-2xl">
              Ultra <br /> <span className="text-[#fff500]">Marathoner</span>
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 p-5 w-full">
          <img
            loading="lazy"
            src="/assets/Asset1.png"
            className="w-full h-[200px] object-cover rounded-xl"
            alt=""
          />
          <div className="w-full flex justify-between items-center">
            <h1 className="text-4xl min-[400px]:text-2xl text-white">2022</h1>
            <p className="text-end text-sm text-gray-500">
              SRT Ultra {"(53KM)-11Hr50min"} <br></br>Adani Half Marathon{" "}
              {"(21KM)-3hr12min with Blind Runner"}
            </p>
          </div>
        </div>
        {/* 
        

        
        <div className="flex gap-10 w-full">
          <img
            src="/assets/IMG_4223.png"
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
        </div> */}
      </section>
      <Contact />
    </div>
  );
}

export default WorkM;
