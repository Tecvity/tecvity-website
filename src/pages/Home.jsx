import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import FeaturedWork from "../components/FeaturedWork";
import Vision from "../components/Vision";

function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <FeaturedWork />
     <Vision />
    </div>
  );
}

export default Home;
