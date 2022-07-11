import React from "react";
import navlogo from "../images/airbnb-logo.png";

export default function Navbar() {
  return (
    <nav class="h-20 flex">
      <img class="w-max-12 my-6 ml-10" src={navlogo} alt="airbnblogo" />
    </nav>
  );
}
