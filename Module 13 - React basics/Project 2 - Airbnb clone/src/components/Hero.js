import React from "react";
import heroimg from "../images/photo-grid.png";

export default function Hero() {
  return (
    <section class="my-8 mx-24">
      <img class="" src={heroimg} alt="heroimg" />
      <h1 class="-ml-8 mt-10 text-4xl font-bold">Online Experiences</h1>
      <p class="-ml-8 my-4 w-2/3">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
    </section>
  );
}
