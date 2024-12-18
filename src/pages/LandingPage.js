/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from "react";

import { Advantages } from "json/landingPageData";
import Header from "parts/Header";
import Hero from "parts/Hero";
import Service from "parts/Service";
import Advantage from "parts/Advantage";
import Footer from "parts/Footer";
import ProductGrid from "parts/ProductGrid";
import Sosmed from "parts/Sosmed";
import HubungiKami from "parts/HubungiKami";

export default class LandingPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Header />
        <Hero />
        <Service />
        <ProductGrid />
        <Sosmed />
        <Advantage data={Advantages} />
        <HubungiKami />
        <Footer />
      </>
    );
  }
}
