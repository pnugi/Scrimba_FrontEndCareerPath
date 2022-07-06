import React from "react";
import reactlogo from "../images/react-icon-small.png";

export default function Navbar() {
  return (
    <header class="bg-gray-900">
      <nav class="flex items-center justify-between p-4 text-white ">
        <div class="flex items-center">
          <img class="w-14 mr-2" src={reactlogo} alt="reactlogo" />
          <h3 class="text-2xl font-bold">ReactFacts</h3>
        </div>
        <h4 class="text-base lg:text-xl ">React Course - Project 1</h4>
      </nav>
    </header>
  );
}
