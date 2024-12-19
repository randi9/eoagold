/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from "react";

import Header from "parts/Header";
import Footer from "parts/Footer";
import ProductGrid from "parts/ProductGrid";

export default class Produk extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Header />
        <ProductGrid />
        <Footer />
      </>
    );
  }
}
