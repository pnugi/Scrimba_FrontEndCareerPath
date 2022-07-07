import React from "react";
import svgtwitter from "../images/twitter.svg";
import svgfacebook from "../images/facebook.svg";
import svginstagram from "../images/instagram.svg";
import svggithub from "../images/github.svg";

export default function Footer() {
  return (
    <footer class="bg-gray-200 mt-auto px-16 py-4 rounded-b-xl bottom-0 absolute mb-12 w-80">
      <div class="flex gap-4 justify-around">
        <a href="index.html">
          <img class="w-6" src={svgtwitter} alt="img" />
        </a>
        <a href="index.html">
          <img class="w-6" src={svgfacebook} alt="img" />
        </a>
        <a href="index.html">
          <img class="w-6" src={svginstagram} alt="img" />
        </a>
        <a href="index.html">
          <img class="w-6" src={svggithub} alt="img" />
        </a>
      </div>
    </footer>
  );
}
