import React, { Component } from "react";
import Header from "./components/Header";
import About from "./components/AboutUptown";
import Total from "./components/TotalLand";
import OurOffring from "./components/OurOffering";
import Locatio from "./components/Location";
import Floor from "./components/FloorPlans";
import Affordable from "./components/Affordable";
import Price from "./components/PriceList";
import Amenities from "./components/Amenities";
import Gallery from "./components/Gallery";
import Loan from "./components/Loan";
import Contactus from "./components/Contactus";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
import FaqSection from "./components/FaqSection";

export default class Main extends Component {
  render() {
    return (
      <div className="main overflow-hidden">
        <Header />
        <About />
        <Total />
        <OurOffring />
        <Locatio />
        <Floor />
        <Affordable />
        <Price />
        <Amenities />
        <Gallery />
        <FaqSection />
        <Loan />
        <Contactus />
        <Testimonial />
        <Footer />
      </div>
    );
  }
}
