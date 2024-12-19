/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from "react";
import Fade from "react-awesome-reveal";

export default function Advantage() {
  // Data dipindahkan langsung ke dalam komponen
  const data = [
    {
      title: "Visi Misi",
      description:
        "EOA GOLD berkomitmen untuk meningkatkan kesejahteraan ekonomi yang terbina dengan nilai-nilai Islami",
      icon: "🤖",
    },
    {
      title: "Kemurnian 99,9% (24 Karat)",
      description:
        "Emas batangan EOA GOLD memberikan jaminan keaslian dan kemurnian tertinggi 24 Karat",
      icon: "🏅",
    },
    {
      title: "Ekosistem/Support Bisnis",
      description:
        "EOA GOLD didukung oleh berbagai macam support untuk perkembangan bisnis para agent dan juga kenyamanan konsumen",
      icon: "📊",
    },
    {
      title: "Komunitas Besar",
      description:
        "EOA GOLD didukung oleh salah satu komunitas terbesar di Indonesia sehingga tercipta lingkungan yang kondusif",
      icon: "👥",
    },
    {
      title: "Sebaran Luas",
      description:
        "EOA GOLD memiliki puluhan ribu mitra dan puluhan cabang yang tersebar di wilayah di Indonesia",
      icon: "🌍",
    },
    {
      title: "Buy Back",
      description:
        "Jaminan Beli Kembali (Buyback) terbaik di kelasnya dengan harga dan tawaran yang menarik",
      icon: "💸",
    },
    {
      title: "Design Elegan",
      description:
        "Memiliki design yang elegan, indah dan sarat akan makna memberikan kesan mewah dan luar biasa",
      icon: "🎨",
    },
    {
      title: "Peluang Bisnis",
      description:
        "Memiliki kesempatan menjadi pebisnis emas dimanapun anda berada",
      icon: "🏠",
    },
    {
      title: "EOA GOLD Academy",
      description:
        "Satu-satunya dan Pertama di dunia pembelajaran sistematis tentang emas secara online dan offline mulai dari product, sejarah, benefit, potensi, dll.",
      icon: "🎓",
    },
  ];

  return (
    <div className="bg-gray-50 py-20 mb-24 sm:mb-18 xl:mb-16">
      <div className="container mx-auto">
        <Fade bottom triggerOnce>
          <h1 className="text-5xl text-theme-blue text-center font-bold">
            Kenapa Memilih Kami
          </h1>
          <p className="font-light text-lg text-gray-400 text-center mb-12 sm:mb-5 xl:mb-0">
            Amankan Masa Depan Anda dengan EOA Gold
          </p>
        </Fade>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-gray-50">
          {data.map((item) => (
            <div
              key={item.title} // Gunakan properti unik sebagai key
              className="flex flex-col items-start p-4 bg-white rounded-lg shadow-md"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
