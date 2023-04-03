import React from "react";
import Lottie from "lottie-react";
import Mobile from "../assets/mobil.json";
import Web from "../assets/web-dev.json";

function Innovaton() {
  return (
    <div className="flex flex-col pb-80 pt-80 font-first lg:flex-row">
      <div className="text-2xl mb-12 lg:mb-0 ml-0 lg:ml-14 text-center lg:text-left  mt-8 w-full lg:w-1/3 text-main lg:text-5xl ">
        <h1>
          Innovative Solutions <br /> For Reliable <br /> Growth
        </h1>
      </div>
      <div className="w-full lg:w-1/3 pr-0 lg:pr-12 text-center ml-0 lg:-ml-10">
        <div className="w-1/4 justify-center mx-auto">
          <Lottie animationData={Mobile} loop={true} />
        </div>
        <div></div>
        <div className="text-main py-3 text-xl lg:text-3xl">
          <h1>Mobile App Development</h1>
        </div>
        <div>
          <p>
            Our experts can adapt to any industry and develop world-class mobile
            apps that can be synchronized across multiple platforms.
          </p>
        </div>
      </div>
      <div className="w-full lg:w-1/3 pl-0 mt-4 lg:pl-12 text-center mr-0 lg:mr-24">
        <div className="w-1/4 justify-center mx-auto">
          <Lottie animationData={Web} loop={true} />
        </div>
        <div className="text-main text-xl lg:text-3xl">
          <h1>Web App <br /> Development</h1>
        </div>
        <div>
          <p>
            We will help you develop interactive and intuitive web applications
            that are ready to handle millions of users daily.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Innovaton;
