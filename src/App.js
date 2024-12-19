/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable-next-line no-unused-vars */
import { Route, Routes } from "react-router-dom";

import LandingPage from "pages/LandingPage";
import Grafik from "pages/Grafik";
import Produk from "pages/Produk";
import Kontak from "pages/Kontak";

import NotFoundPage from "pages/NotFoundPage";
import Eoagold from "pages/Eoagold";
import "./assets/css/styles.css";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route exact path="/eoagold" element={<Eoagold />} />
      <Route exact path="/grafik" element={<Grafik />} />
      <Route exact path="/produk" element={<Produk />} />
      <Route exact path="/kontak" element={<Kontak />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
