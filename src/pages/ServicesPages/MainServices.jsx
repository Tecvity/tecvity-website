import React from "react";
import CustomServices from "../../components/CustomServices";
import Services from "../../components/Services";
import Innovaton from "../../components/Innovaton";
import FeaturedWork from "../../components/FeaturedWork";

function MainServices() {
  return (
    <div>
      <div className="ml-16 -mt-72">
        <CustomServices />
      </div>
      <Services />
      <div className="">
        <Innovaton />
      </div>
      <FeaturedWork />
    </div>
  );
}

export default MainServices;
