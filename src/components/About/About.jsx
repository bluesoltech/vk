import React from "react";

function About() {
  return (
    <section className="md:w-[700px] lg:w-[900px] h-screen snap-start flex flex-col items-center justify-center gap-10 pt-[80px] mx-auto">
      <div className="flex gap-[100px] justify-around">
        <div className="w-full flex justify-end rounded-3xl">
          <img
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
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
        quo, quae eius minus eligendi qui dolorem animi delectus, ad dolor
        voluptas excepturi ducimus eum vero. Accusamus mollitia tenetur quasi
        corporis autem soluta libero laboriosam adipisci sequi sint ratione
        nostrum ea hic, quaerat vero? Qui quos ad atque, similique numquam aut?{" "}
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
