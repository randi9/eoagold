import React from "react";
import SuratIzin from "../assets/images/surat-izin-usaha.jpeg";
import Sni from "../assets/images/sni.jpg";
import Tup from "../assets/images/tuv.jpg";

export default function LegalitasPerusahaan() {
  return (
    <section className="container mx-auto my-16">
      <h2 className="text-3xl font-bold text-center text-yellow-600 mb-8">
        Uji Legalitas Perusahaan
      </h2>
      <div className="flex justify-center">
        <img
          src={SuratIzin}
          alt="surat izin"
          className="w-full max-w-3xl h-auto object-cover"
        />
      </div>
      <div className="flex justify-center my-8">
        <img
          src={Sni}
          alt="Sni"
          className="w-full max-w-3xl h-auto object-cover"
        />
      </div>
      <div className="flex justify-center">
        <img
          src={Tup}
          alt="Tup"
          className="w-full max-w-3xl h-auto object-cover"
        />
      </div>
      <br />
      <h2 className="text-3xl font-bold text-center text-yellow-600 mb-8">
        Uji Legalitas Perusahaan
      </h2>
      <div className="flex justify-center mt-8">
        <iframe
          width="1170"
          height="515"
          src="https://www.youtube.com/embed/3JoG4EZK-eM"
          title="PENGUJIAN EMAS 24 KARAT EOA GOLD MENGGUNAKAN KARATIMETER. HASIL 99.99%."
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </section>
  );
}
