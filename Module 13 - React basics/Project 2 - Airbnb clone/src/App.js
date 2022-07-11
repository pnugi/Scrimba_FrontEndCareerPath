import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./array";

export default function App() {
  const cards = data.map((item) => {
    return (
      <Card
        key={item.id}
        {...item} // ES6 way to do it

        /* title={item.title}
        desc={item.description}
        price={item.price}
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        openSpots={item.openSpots} */
      />
    );
  });

  return (
    <div>
      <Navbar />
      <Hero />
      <div class="flex gap-4 justify-center">{cards}</div>
    </div>
  );
}
