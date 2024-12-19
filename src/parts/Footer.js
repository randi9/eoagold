/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from "react";

import BrandIcon from "./BrandIcon";
import Button from "../elements/Button";

export default function Footer() {
  return (
    <div className="bg-gray-50 border-t border-gray-200 pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row mt-8 justify-center items-center">
          <div className="w-full sm:w-1/3 flex items-center justify-center mb-4 sm:mb-0">
            <BrandIcon />
          </div>
        </div>
        <div className="text-center mt-7">
          <p className="text-lg text-gray-400 font-light">
            Copyright 2024 - All rights reserved
          </p>
          <p className="text-lg text-gray-400 font-light">
            PT EMAS OPTIMASI ABADI
          </p>
          <div className="flex justify-center items-center">
            <p className="inline-block text-lg text-gray-400 font-light">
              Developed by -
            </p>
            <Button
              href="https://github.com/randi9"
              type="link"
              target="_blank"
              className="text-lg text-gold-400 font-light ml-1"
              isExternal
            >
              Randi
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
