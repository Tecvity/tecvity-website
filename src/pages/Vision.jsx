import React from "react";
import VisionImg from "./../assets/visionlottie.json";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Vision = () => {
  return (
    <div className="flex-col bg-black flex pt-24 mb-24 lg:flex-row lg:justify-center lg:mx-8 my-32">
      {/* Left Side div */}
      <motion.div
        variants={fadeIn("right", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="w-full lg:w-1/2 flex mx-auto justify-center ">
        <Lottie animationData={VisionImg} loop={true} />
      </motion.div>
      {/* Right Side Div */}
      <motion.div
        variants={fadeIn("left", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="font-first flex flex-col text-center lg:text-left text-green-500 lg:w-1/2  lg:py-8">
        <h1 className="text-5xl lg:text-8xl mb-8 mt-14  lg:mb-12">Our Vision</h1>
        <p className="text-lg mr-0 lg:mr-24 text-white">
          Our vision is to spread the power of technology across the globe. We
          want to help companies grow their businesses through innovative
          software solutions and digital transformation using the latest
          technological approaches.
        </p>
      </motion.div>
    </div>
  );
};

export default Vision;
