/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import LogoEoagold from "../assets/images/eoa-gold.jpg";
import ApaEoagold from "../assets/images/mengapa-harus-eoa-gold.jpg";

export default function HeroTeam() {
  return (
    <div className="bg-gray-50 text-gray-700">
      {/* Header Section */}
      <div className="container mx-auto px-6 py-12 text-center">
        <div className="flex flex-wrap items-center justify-center">
          <img
            src={LogoEoagold}
            alt="Apa Itu EOA GOLD"
            className="w-40 h-40 mx-auto rounded-full"
          />
        </div>
        <h1 className="text-4xl font-bold text-yellow-600 mt-6 mb-4">
          Apa itu EOA GOLD?
        </h1>
        <p className="text-lg leading-relaxed">
          EOA Gold adalah Logam Mulia (LM) yang dikeluarkan oleh PT. Emas
          Optimasi Abadi (EOA) untuk meningkatkan nilai lebih (value) berupa
          perlindungan dan keamanan bagi investasi Anda. Logam Mulia EOA GOLD
          terus diuji dan diverifikasi kemurniannya yang menjadikannya memiliki
          kadar terpercaya, puritas tertinggi 99% atau setara 24 karat, sehingga
          memberikan nilai yang tinggi bagi aset investasi Anda.
        </p>
      </div>

      {/* Visi & Misi Section */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-yellow-600 mb-6">
            PT Emas Optimasi Abadi
          </h2>
          <h3 className="text-2xl font-semibold mb-4">Visi & Misi</h3>
          <p className="text-lg font-semibold mb-2">Visi:</p>
          <p className="text-lg mb-4">
            Menjadi Perusahaan Terkemuka Dengan Tujuan Mengembalikan Kejayaan
            Dengan Emas
          </p>
          <p className="text-lg font-semibold mb-2">Misi:</p>
          <ul className="list-decimal list-inside text-lg space-y-2">
            <li>Membuat manajemen yang kuat dan profesional</li>
            <li>Melakukan inovasi produk dan program EOA GOLD</li>
            <li>Membuat ekosistem support EOA GOLD</li>
            <li>Melakukan pembinaan agent, member, dan konsumen EOA GOLD</li>
            <li>Membangun kerjasama dalam menguatkan ekosistem</li>
            <li>
              Culture EOA GOLD dibuat sedemikian rupa agar baik konsumen,
              member, dan agen memiliki spirit yang sama yaitu berkontribusi
              sebanyak-banyaknya untuk sebanyak mungkin orang dengan
              pemberdayaan secara terstruktur dalam dimensi ekonomi.
            </li>
          </ul>
        </div>
      </div>

      {/* Mengapa Harus EOA GOLD */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-yellow-600 mb-6">
            Mengapa Harus EOA GOLD?
          </h2>
          <div className="flex flex-wrap justify-between items-center">
            <div className="w-full md:w-2/3 mb-6 md:mb-0">
              <h3 className="text-xl font-semibold mb-4">
                9 Keunggulan EOA GOLD
              </h3>
              <ul className="list-decimal list-inside text-lg space-y-2">
                <li>
                  EOA Gold memiliki visi misi besar membangun peradaban dan
                  berkomitmen kuat untuk turut berkontribusi dalam menguatkan
                  ekonomi umat.
                </li>
                <li>
                  Logam Mulia EOA GOLD memiliki puritas tertinggi yaitu 99%
                  sehingga diterima secara luas di dalam dan luar negeri.
                </li>
                <li>
                  Memiliki ratusan cabang se-Indonesia dan puluhan ribu mitra
                  toko emas (non-fisik) yang tersebar se-Indonesia sehingga
                  memudahkan dalam bertransaksi.
                </li>
                <li>Jaminan Beli Kembali (Buyback) terbaik di kelasnya.</li>
                <li>
                  Memiliki desain yang elegan dengan logo EOA yang indah dan
                  sarat dengan makna.
                </li>
                <li>
                  Disupport oleh salah satu komunitas training terbesar di
                  Indonesia (PPA-Pola Pertolongan Allah).
                </li>
                <li>
                  Memiliki kesempatan menjadi pebisnis emas dengan potensi
                  miliaran.
                </li>
                <li>Memiliki program pembinaan secara sistematis.</li>
                <li>
                  Disupport oleh ekosistem bisnis #PeradabanEOA yang akan
                  menguatkan dan meluaskan kebermanfaatan dari emas yang
                  dimiliki.
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/3">
              <img
                src={ApaEoagold}
                alt="Mengapa Harus EOA GOLD"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
