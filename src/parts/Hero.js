import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import goldslide from "../assets/images/3.jpg";
import goldslides from "../assets/images/5.jpg";

export default function Hero() {
  return (
    <Splide
      id="image-carousel"
      aria-label="My Favorite Images"
      options={{
        type: "loop",
        perPage: 1,
        perMove: 1,
        autoplay: true,
        breakpoints: {
          640: {
            perPage: 1,
          },
        },
      }}
    >
      <SplideSlide>
        <img
          src={goldslide}
          alt="Beautiful scenery"
          className="w-full h-auto"
        />
      </SplideSlide>
      <SplideSlide>
        <img src={goldslides} alt="City skyline" className="w-full h-auto" />
      </SplideSlide>
    </Splide>
  );
}
