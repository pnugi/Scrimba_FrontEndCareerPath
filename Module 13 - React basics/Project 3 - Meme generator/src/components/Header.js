import React from "react";
import headerlogo from "../images/troll-face.png";

export default function Header() {
  return (
    <header class="flex justify-around items-center text-white p-6 bg-gradient-to-r  from-indigo-500 to-purple-600 shadow-lg">
      <div class="flex gap-2 items-center">
        <img class="h-8" src={headerlogo} alt="trollface" />
        <h2 class="text-2xl">Meme Generator</h2>
      </div>
      <div>
        <small class="">React Course - Project 3</small>
      </div>
    </header>
  );
}
