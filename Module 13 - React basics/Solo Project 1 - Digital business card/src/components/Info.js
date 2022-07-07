import React from "react";
import imgperson from "../images/photo.jpg";
import svgemail from "../images/mail.svg";
import svglinkedin from "../images/linkedin.svg";

export default function Info() {
  return (
    <div>
      <div class="rounded-t-lg">
        <img
          class="rounded-t-xl h-1/3 w-full object-cover"
          src={imgperson}
          alt="person"
        />
        <div class="flex flex-col text-center my-6">
          <h2 class="text-2xl font-bold ">John Doe</h2>
          <p class="text-sm -mt-1 text-sky-400 text-light">
            Frontend Developer
          </p>
          <small class="mt-3 text-xs">johndoe.website</small>
        </div>
      </div>
      <div class="flex justify-evenly">
        <button
          href="index.html"
          class="btn text-sm bg-white hover:bg-sky-400/75 hover:text-white border-2 border-gray-200 shadow-sm py-2 px-6 flex rounded-lg"
        >
          <img class="w-3 mr-2" src={svgemail} alt="email" />
          <span class="">Email</span>
        </button>
        <button
          href="index.html"
          class="btn text-sm bg-white hover:bg-sky-400/75 hover:text-white border-2 border-gray-200 shadow-sm py-2 px-4 flex rounded-lg"
        >
          <img class="w-3 mr-2 " src={svglinkedin} alt="linkedin" />
          <span class="">LinkedIn</span>
        </button>
      </div>
    </div>
  );
}
