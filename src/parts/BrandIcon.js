/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from "react";

import Button from "../elements/Button";
import LogoIcon from "../assets/images/kerjaan-emas.png";

export default function BrandIcon() {
  return (
    <Button className="" type="link" href="/">
      <img
        src={LogoIcon}
        alt="Racx Studio Logo"
        className="h-10 w-auto" // Sesuaikan kelas ini untuk menyesuaikan ukuran gambar
      />
    </Button>
  );
}
