import React from "react";
import bigreactlogo from "../images/react-icon-large.png";

export default function Main() {
  return (
    <div class=" text-white">
      <h1 className="text-4xl font-bold container pt-12 pb-6 ml-12">
        Fun facts about react
      </h1>
      <ul class="ml-20 list-disc text-blue-400 text-lg font-400">
        <li>
          <span class="text-white">Was first released 2013</span>
        </li>
        <li>
          <span class="text-white">Was originally created by Jordan Walke</span>
        </li>
        <li>
          <span class="text-white">Has well over 100K stars on GitHub</span>
        </li>
        <li>
          <span class="text-white">Is maintained by Facebook</span>
        </li>
        <li>
          <span class="text-white">
            Powers thousands of enterprise apps, including mobile apps
          </span>
        </li>
      </ul>
      <img
        class="fixed right-0 w-32  md:-mt-52 lg:-mt-52 lg:w-42"
        src={bigreactlogo}
        alt="reactlogo"
      />
    </div>
  );
}
