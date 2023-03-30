import React from "react";
import Hero from "../pages/Hero";
import Services from "../pages/Services";
import FeaturedWork from "../pages/FeaturedWork";
import ContactUs from "../components/ContactUs";
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
