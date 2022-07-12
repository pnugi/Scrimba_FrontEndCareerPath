import React from "react";
import logotravel from "../images/travel.svg";

export default function Navbar() {
  return (
    <header class="bg-red-400 flex justify-center gap-2 py-4">
      <img class="w-6 py-2" src={logotravel} alt="travel logo" />
      <p class="text-white text-lg mt-1">my travel journal.</p>
    </header>
  );
}
