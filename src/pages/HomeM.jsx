import React from "react";
import "../components/Hero/Main.css";

function HomeM() {
  return (
    <section className="relative ">
      <div className="flex flex-col p-5 gap-3 items-center">
        <div className="relative w-[200px] h-[200px] flex items-center justify-center">
          <div className="absolute spinLoader w-full h-full rounded-[50%] border-t-[5px] rotate-[45deg] z-2"></div>
          <div className="absolute w-full h-full rounded-[50%] border-t-[1px] border-r-[1px] rotate-[45deg] z-2"></div>
          <img
            loading="lazy"
            className="w-[150px] h-[150px] rounded-[50%] object-contain bg-gradient-to-t to-[#FDC898] from-[#B517FF]"
            src="/assets/Sir.png"
          ></img>
        </div>
        <div className="">
          <h1 className="text-3xl text-center text-[#ffffff] font-bold uppercase">
            Never Give Up <br /> Keep Running
          </h1>
          <h1 className="text-md text-[#fff500] font-bold uppercase">
            Enjoy Running enjoy freedom
          </h1>
        </div>
      </div>
      <div className="flex flex-col p-5">
        <img
          loading="lazy"
          className=" max-w-full h-[200px] object-cover object-top rounded-3xl"
          src="/assets/Asset1.png"
        />
        <div className="flex flex-col gap-4">
          <div className="flex justify-between min-[400px]:text-xl min-[518px]:text-2xl">
            <h1 className="text-white font-bold text-center">
              VISHNU KAMALIYA
            </h1>
            <p className="text-[#fff500] font-bold text-center">
              ULTRA MARATHONER
            </p>
          </div>
          <p className="text-gray-500 text-justify text-sm">
            Vishnu Kamaliya is ultra-marathoner. Provides a marvelious lens to
            the sport. Participated in more than 18+ marathon events. Also
            organized, managed and directed more than 25+ Government and Pvt.
            Events of Sports and Marathon
          </p>
        </div>
      </div>
      <div className="flex flex-col p-5 gap-2">
        <h1 className="text-white text-5xl">Looking for a Race Director?</h1>
        <p className="text-gray-500 text-sm text-justify mt-2">
          who not only understands the intricacies of endurance sports but also
          possesses the organizational prowess to execute flawless events? Look
          no further than Vishnu Kamaliya. With his extensive background in both
          participating in and managing events, Vishnu brings a unique
          perspective that ensures every race is not just a competition, but an
          unforgettable experience for all involved. Whether you're a seasoned
          athlete seeking a new challenge or an event organizer aiming to
          elevate your race to new heights, Vishnu Kamaliya is the partner you
          need to make it happen.
        </p>
        <div className="flex justify-end mb-5">
          <button className="text-lg py-1 px-3 bg-blue-500 text-white rounded-xl">
            <a href="/Profile.pdf" download="Vishnu.pdf">
              Get Profile
            </a>
          </button>
        </div>
      </div>
    </section>
  );
}

export default HomeM;
