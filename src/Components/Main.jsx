import React from "react";
import Carousel from "./Carousel";

export default function Main() {
  return (
    <div class="flex flex-col">
      <div class="flex items-center justify-center text-white my-12">
        <img class="my-5" src="images/avatar.png" />
        <div class="flex w-1/4 ml-10 space-y-10 flex-col ">
          <h1 class="text-6xl">Hi! I’m Kwan</h1>
          <h2 class="text-2xl font-sans">
            I am a 3D artist based in Vancouver, BC, Canada. I enjoy taking
            ideas from head and creating them from scratch. I am dedicated to
            learning and improving my skills. Check out my work!
          </h2>
          <a
            class="active:translate-y-0.5 text-center shadow-sm shadow-white p-2 w-1/3 bg-red-500 rounded-md"
            href="#mywork"
          >
            Check out my work!
          </a>
        </div>
      </div>

      <div class="flex-col items-center justify-center my-5 text-white text-center">
        <h1 class="text-6xl">My Work</h1>
      </div>

{/* Shrink Carousels to house less images */}

      <div class="flex justify-between text-center">
      <div class="2xl:15 2xl:mx-auto 2xl:px-0 py-3 px-10">
        <Carousel name="Characters"/>
      </div>
      <div class="2xl:15 2xl:mx-auto 2xl:px-0 py-3 px-10">
        <Carousel name="Environments"/>
      </div>
      <div class="2xl:15 2xl:mx-auto 2xl:px-0 py-3 px-10">
        <Carousel name="Assets"/>
      </div>
      </div>
    </div>
  );
}
