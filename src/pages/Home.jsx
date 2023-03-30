import React from "react";
import Header from "../components/Navbar/Header";
import Hero from "../pages/Hero";
import Services from "../pages/Services";
import FeaturedWork from "../pages/FeaturedWork";
import Footer from "../components/Footer";
import { ContactUs } from "../pages/ContactUs";
import Vision from "../pages/Vision";

function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <FeaturedWork />
      <Vision />
      <ContactUs />
    </div>
  );
}

export default Home;
