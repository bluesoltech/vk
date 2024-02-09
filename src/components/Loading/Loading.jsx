import React from "react";

function Loading() {
  return (
    <section className="snap-start w-full h-screen bg-white flex flex-col items-center justify-center">
      <img
        src="https://clipart-library.com/images/pcod9Mjxi.gif"
        width="192"
        height="120"
      />
      <p className="text-center text-gray-500">Loading..</p>
    </section>
  );
}

export default Loading;
