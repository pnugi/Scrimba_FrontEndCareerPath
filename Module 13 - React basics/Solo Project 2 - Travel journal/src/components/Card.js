import React from "react";
import logogps from "../images/gps.svg";

export default function Card(props) {
  return (
    <div class="mt-8 flex items-center justify-center border-b-2 border-gray-200 pb-8">
      <div class="">
        <img
          class="w-80 h-full object-contain rounded-xl"
          src={`../images/${props.imageUrl}`}
          alt="img"
        />
      </div>

      <div class="mx-4">
        <div class="flex h-12 items-center">
          <img class="w-5 mr-2" src={logogps} alt="gps" />
          <small class="mr-4 uppercase  tracking-widest text-gray-600">
            {props.location}
          </small>
          <a
            class="font-light text-xs underline text-gray-400"
            href={props.googleMapsUrl}
          >
            View on Google Maps
          </a>
        </div>

        <div class="">
          <h2 class="text-3xl font-bold tracking-wide mb-6">{props.title}</h2>
          <p class="font-bold text-xs mb-2">
            {props.startDate} - {props.endDate}
          </p>
          <p class="text-xs font-light">{props.description}</p>
        </div>
      </div>
    </div>
  );
}
