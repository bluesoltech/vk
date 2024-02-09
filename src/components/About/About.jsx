import React from "react";

function About() {
  return (
    <section className="md:w-[700px] lg:w-[900px] h-screen snap-start flex flex-col items-center justify-center gap-10 pt-[80px] mx-auto">
      <div className="flex gap-[100px] justify-around">
        <div className="w-full flex justify-end rounded-3xl">
          <img
            loading="lazy"
            className=" max-w-full h-auto object-contain rounded-3xl"
            src="/assets/Asset1.png"
          ></img>
        </div>
        <div className="w-full">
          <div className="flex flex-col items-start gap-5">
            <div>
              <h1 className="uppercase text-white text-2xl font-bold">
                Vishnu kamaliya
              </h1>
              <h1 className="uppercase text-[#fff500] text-2xl font-bold">
                Ultra Marathoner
              </h1>
            </div>
            <p className="text-gray-500 w-[90%] text-justify">
              Vishnu Kamaliya is ultra-marathoner. Provides a marvelious lens to
              the sport. Participated in more than 18+ marathon events. Also
              organized, managed and directed more than 25+ Government and Pvt.
              Events of Sports and Marathon
            </p>
          </div>
        </div>
      </div>
      <h1 className="text-8xl text-justify text-white">
        Looking for a Race Director?
      </h1>
      <p className="text-gray-500 text-lg text-justify">
        who not only understands the intricacies of endurance sports but also
        possesses the organizational prowess to execute flawless events? Look no
        further than Vishnu Kamaliya. With his extensive background in both
        participating in and managing events, Vishnu brings a unique perspective
        that ensures every race is not just a competition, but an unforgettable
        experience for all involved. Whether you're a seasoned athlete seeking a
        new challenge or an event organizer aiming to elevate your race to new
        heights, Vishnu Kamaliya is the partner you need to make it happen.
      </p>
      <button className="bg-blue-500 text-white py-1 px-4 text-xl rounded-xl self-end">
        <a href="/Profile.pdf" download="Vishnu.pdf">
          Get Profile
        </a>
      </button>
      <div className=""></div>
    </section>
  );
}

export default About;
