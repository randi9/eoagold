import React from "react";

function Sosmed() {
  return (
    <div className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-center gap-8">
        {/* Instagram Card */}
        <a
          href="https://www.instagram.com/eoagold.official"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-6 border border-yellow-300 rounded-2xl shadow-md bg-white w-full md:w-96"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
            alt="Instagram"
            className="w-12 h-12"
          />
          <div>
            <h3 className="text-lg font-semibold text-blue-700">@Instagram</h3>
            <p className="text-sm text-gray-600">
              Ikuti akun instagram resmi kami dan dapatkan berita terbaru setiap
              harinya
            </p>
          </div>
        </a>

        {/* Facebook Card */}
        <a
          href="https://www.facebook.com/eoagold.official"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-6 border border-yellow-300 rounded-2xl shadow-md bg-white w-full md:w-96"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
            alt="Facebook"
            className="w-12 h-12"
          />
          <div>
            <h3 className="text-lg font-semibold text-blue-700">Facebook</h3>
            <p className="text-sm text-gray-600">
              Ikuti akun facebook resmi kami dan dapatkan berita terbaru setiap
              harinya
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Sosmed;
