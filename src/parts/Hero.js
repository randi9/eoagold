import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import goldslide from "../assets/images/3.jpg";
import goldslides from "../assets/images/5.jpg";

export default function Hero() {
  return (
    <Splide id="image-carousel" aria-label="My Favorite Images">
      {" "}
      <SplideSlide>
        {" "}
        <img src={goldslide} alt="Beautiful scenery" />{" "}
      </SplideSlide>{" "}
      <SplideSlide>
        {" "}
        <img src={goldslides} alt="City skyline" />{" "}
      </SplideSlide>{" "}
    </Splide>
  );
}
