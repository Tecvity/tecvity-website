import React from "react";
import Vision from "./Vision";
import Values from "./Values";

function About() {
  return (
    <div>
      <h1 className="text-7xl lg:text-8xl text-center text-main mt-24">
        About Us
      </h1>
      <Values />
      <span></span>
      <Vision />
    </div>
  );
}

export default About;
