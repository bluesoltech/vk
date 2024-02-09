import React from "react";

function HomeM() {
  return (
    <section className="relative snap-start pt-[80px]">
      <div className="flex flex-col p-5 gap-3 items-center">
        <img
          className="w-[150px] h-[150px] rounded-[50%] object-contain bg-gradient-to-t to-[#FDC898] from-[#B517FF]"
          src="/assets/Sir.png"
        ></img>
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
        <p className="text-gray-500 text-sm text-justify">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quo, quae eius minus eligendi qui dolorem animi delectus, ad dolor
          voluptas excepturi ducimus eum vero. Accusamus mollitia tenetur quasi
          corporis autem soluta libero laboriosam adipisci sequi sint ratione
          nostrum ea hic, quaerat vero? Qui quos ad atque, similique numquam
          aut?
        </p>
        <div className="flex justify-end mb-5">
          <button className="text-lg py-1 px-3 bg-blue-500 text-white rounded-xl">
            <a
              href="/Profile
            "
            >
              Get Profile
            </a>
          </button>
        </div>
      </div>
    </section>
  );
}

export default HomeM;
