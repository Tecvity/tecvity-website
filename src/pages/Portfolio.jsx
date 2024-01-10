import React from "react";
import FeaturedWork from "../components/FeaturedWork";
// import CustomServices from "../components/CustomServices";
import WhatWeDo from "../components/WhatWeDo";
import { useEffect } from "react";
import ReactGA from "react-ga4";
function Portfolio() {
    useEffect(() => {
         ReactGA.send({
           hitType: "pageView",
           page: window.location.pathname + window.location.search,
           title: "Portfolio",
         });
    }, []);
  return (
    <div>
      <FeaturedWork />

      <WhatWeDo />

      <div className="-mt-96">

      {/* <CustomServices /> */}
      </div>
    </div>
  );
}

export default Portfolio;
