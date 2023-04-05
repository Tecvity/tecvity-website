import React from "react";
import FeaturedWork from "../components/FeaturedWork";
import CustomServices from "../components/CustomServices";
import WhatWeDo from "../components/WhatWeDo";

function Portfolio() {
  return (
    <div>
      <FeaturedWork />

      <WhatWeDo />

      <div className="-mt-96">

      <CustomServices />
      </div>
    </div>
  );
}

export default Portfolio;
