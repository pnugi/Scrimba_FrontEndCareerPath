import React from "react";
/* import person from "../images/katie-zaferes.png";
import person2 from "../images/wedding-photography.png";
import person3 from "../images/mountain-bike.png"; */
import star from "../images/star.png";

export default function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "Sold Out";
  } else if (props.location === "Online") {
    badgeText = "Online";
  }

  return (
    <div class="w-52">
      <img
        class="rounded-xl mt-3"
        src={`../images/${props.coverImg}`}
        alt="katie zaferes"
      />

      {/* Some conditional logic from array.js -- Show sold out if openspots = 0 */}
      {badgeText && (
        <small class="bg-gray-500 text-white font-bold py-1 px-4 text-center ml-16 rounded-md">
          {badgeText}
        </small>
      )}

      <div class="flex gap-1 my-2">
        <img class="h-4 w-4 ml-1" src={star} alt="star" />
        <small>{props.stats.rating}</small>
        <small class="text-gray-400">({props.stats.reviewCount})</small>
        <small class="text-gray-400">• {props.location}</small>
      </div>
      <div class="flex flex-col text-sm gap-2">
        <p class="text-sm">{props.title}</p>
        <p>
          <span class="font-bold">From ${props.price}</span> / person
        </p>
      </div>
    </div>
  );
}
