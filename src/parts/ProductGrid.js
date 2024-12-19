import React from "react";
import { Container } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { Fade } from "react-awesome-reveal";
import ProductCard from "./ProductCard";

export default function ProductCarousel() {
  const cards = Array.from({ length: 8 }, (_, index) => `ProductCard-${index}`);

  return (
    <Container>
      {/* Tambahkan teks di bagian atas */}
      <div className="text-center my-8">
        <Fade direction="right" triggerOnce>
          <h1 className="text-5xl text-theme-blue text-center font-bold">
            Produk Unggulan
          </h1>
        </Fade>
        <Fade direction="left" triggerOnce>
          <p className="font-light text-lg text-gray-400 text-center mb-12">
            Amankan Masa Depan Anda dengan EOA Gold
          </p>
        </Fade>
      </div>
      <Swiper
        spaceBetween={30}
        slidesPerView={4} // Menampilkan 4 card sekaligus
        navigation
        pagination={{ clickable: true }}
        loop // Tambahkan properti ini untuk looping
        modules={[Pagination, Navigation]}
        breakpoints={{
          640: { slidesPerView: 1 }, // 1 slide pada layar kecil
          768: { slidesPerView: 2 }, // 2 slide pada layar sedang
          1024: { slidesPerView: 3 }, // 3 slide pada layar besar
          1280: { slidesPerView: 4 }, // 4 slide pada layar ekstra besar
        }}
      >
        {/* Tambahkan ProductCard ke dalam slide */}
        {cards.map((cardKey) => (
          <SwiperSlide key={cardKey}>
            <div className="flex justify-center">
              <ProductCard />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}
