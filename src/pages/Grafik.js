/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from "react";

import Header from "parts/Header";
import Footer from "parts/Footer";
import Service from "parts/Service";

export default class Grafik extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Header />
        <Service />
        <Footer />
      </>
    );
  }
}
