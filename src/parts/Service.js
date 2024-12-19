import React from "react";
import { Fade } from "react-awesome-reveal";
import goldImage from "../assets/images/eoagold.jpg";

export default function Service() {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto pt-20 pb-28 px-4 sm:px-6 lg:px-8">
        <Fade direction="right" triggerOnce>
          <h1 className="text-5xl text-theme-blue text-center font-bold">
            Grafik Emas
          </h1>
        </Fade>
        <Fade direction="left" triggerOnce>
          <p className="font-light text-lg text-gray-400 text-center mb-12">
            Amankan Masa Depan Anda dengan EOA Gold
          </p>
        </Fade>

        <div className="flex justify-center items-center">
          <div className="p-4 flex flex-col md:flex-col lg:flex-row w-full md:w-3/4 lg:w-1/2 items-center justify-center bg-white group rounded-2xl shadow-2xl border border-light-theme-purple transform transition duration-500 hover:scale-105">
            <div className="flex justify-center items-center w-full lg:w-1/2 mb-4 lg:mb-0">
              <img
                src={goldImage}
                alt="Service"
                className="w-full h-auto rounded-2xl"
              />
            </div>

            <div className="text-center lg:text-left flex flex-col items-center lg:items-start justify-center w-full lg:w-1/2 gap-4">
              <div className="w-full">
                <p className="text-gray-400 font-light text-lg">
                  Harga Terakhir
                </p>
                <p className="text-theme-blue text-sm font-semibold">
                  Rp 1.550.000,00/gram
                </p>
              </div>
              <div className="w-full">
                <div className="text-gray-400 font-light text-lg">
                  Perubahan
                </div>
                <h3 className="text-theme-blue text-sm font-semibold">
                  Rp -12.000,00
                </h3>
              </div>
              <div className="w-full">
                <div className="text-gray-400 font-light text-lg">
                  Perubahan Terakhir
                </div>
                <h3 className="text-theme-blue text-sm font-semibold">
                  13-12-2024 09:55:26
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
