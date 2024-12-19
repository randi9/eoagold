import React from "react";
import igold from "../assets/images/eoa_1080.png";
import pts from "../assets/images/pt.png";
import wakaf from "../assets/images/wakaf.png";
import sni from "../assets/images/sni_1080.png";
import tuf from "../assets/images/tuf_1080.png";
import sss from "../assets/images/ess.png";

export default function HubungiKami() {
  return (
    <div className="bg-gray-100 text-gray-700">
      {/* Kontak Header */}
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-yellow-600 mb-4">
          Hubungi Kami
        </h2>
        <p className="mb-4">
          Silakan hubungi kami melalui alamat dan info berikut. Anda juga dapat
          mengirimkan pesan melalui form dibawah ini, Insya Allah kami membalas
          setiap pesan yang masuk.
        </p>
        <div className="flex flex-wrap justify-between items-start">
          {/* Informasi Kontak */}
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <p className="mb-2">
              📍 <strong>Alamat:</strong> SENTRA TIMUR RESIDENCE COMMERCIAL PARK
              2 NO. 15, RW.6, Pulo Gebang, Cakung, Jakarta Timur, DKI Jakarta
              13950
            </p>
            <p className="mb-2">
              📞 <strong>Telepon:</strong> (+62) 82211967626
            </p>
            <p className="mb-2">
              📧 <strong>Email:</strong> infoeoagold@gmail.com
            </p>
          </div>
          {/* Google Map */}
          <div className="w-full md:w-1/2">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.504226645919!2d115.21666591427558!3d-8.65001339097845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd247f7cf7c23ad%3A0x8f76d8bd828aba6b!2sPPA%20Institute!5e0!3m2!1sid!2sid!4v1697697376294!5m2!1sid!2sid"
              width="100%"
              height="200"
              className="border-0 rounded-lg"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <footer className="bg-white py-8">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Produk dan Layanan */}
          <div>
            <h3 className="text-lg font-bold text-yellow-600 mb-4">
              Produk dan Layanan
            </h3>
            <ul>
              <li className="mb-2">Halaman Utama</li>
              <li className="mb-2">Brankas EOA GOLD</li>
              <li className="mb-2">Product Lain</li>
              <li className="mb-2">Layanan</li>
            </ul>
          </div>

          {/* Informasi */}
          <div>
            <h3 className="text-lg font-bold text-yellow-600 mb-4">
              Informasi
            </h3>
            <ul>
              <li className="mb-2">Pertanyaan Umum</li>
              <li className="mb-2">Profile EOA GOLD</li>
              <li className="mb-2">Event</li>
              <li className="mb-2">Promo</li>
            </ul>
          </div>

          {/* Logo */}
          <div>
            <h3 className="text-lg font-bold text-yellow-600 mb-4">Logo</h3>
            <div className="flex flex-wrap gap-4">
              <img src={igold} alt="EOA GOLD Logo" className="w-12 h-12" />
              <img src={pts} alt="pt mas" className="w-12 h-12" />
              <img src={wakaf} alt="wakaf" className="w-12 h-12" />
              <img src={sni} alt="sni" className="w-12 h-12" />
              <img src={tuf} alt="tuf" className="w-12 h-12" />
              <img src={sss} alt="ess" className="w-12 h-12" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
