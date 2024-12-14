/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from "react";

import { Services, Advantages, Testimonials } from "json/landingPageData";
import Header from "parts/Header";
import Hero from "parts/Hero";
import Service from "parts/Service";
import Advantage from "parts/Advantage";
import Testimonial from "parts/Testimonial";
import Footer from "parts/Footer";

export default class LandingPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Header />
        <Hero />
        <Service data={Services} />
        <Advantage data={Advantages} />
        <Testimonial data={Testimonials} />
        <Footer />
      </>
    );
  }
}
