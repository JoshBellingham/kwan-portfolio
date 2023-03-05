import React from "react";

export default function Main() {
  return (
    <div class="flex items-center justify-center text-white my-12">
      <img class="my-5" src="src/assets/avatar.png" />
      <div class="flex w-1/3 ml-10 space-y-10 flex-col ">
        <h1 class="text-6xl">Hi! I’m Kwan</h1>
        <h2 class="text-2xl font-sans">
          I am a 3D artist based in Vancouver, BC, Canada. I enjoy taking ideas
          from head and creating them from scratch. I am dedicated to learning
          and improving my skills. Check out my work!
        </h2>
      <a class="text-center shadow-sm shadow-white p-2 w-1/4 bg-red-500 rounded-md" href="#mywork">
        Check out my work!
      </a>
    </div>
    </div>
  );
}
