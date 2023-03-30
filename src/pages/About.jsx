import React from "react";
import Vision from "./Vision";
import Values from "./Values";
import Lottie from "lottie-react";
import Team from "../assets/team.json";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

function About() {
  return (
    <div>
      <motion.h1
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="text-7xl lg:text-8xl -mb-8 text-center text-main mt-24">
        About Us
      </motion.h1>
      <div className="flex-col bg-black flex mb-24 lg:flex-row lg:justify-center lg:mx-8 my-32">
        {/* Left Side div */}
        <motion.div
          variants={fadeIn("right", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="w-1/2 lg:w-1/3 flex mx-auto justify-center ">
          <Lottie animationData={Team} loop={true} />
        </motion.div>
        {/* Right Side Div */}
        <motion.div
          variants={fadeIn("left", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="font-first flex flex-col text-center lg:text-left text-main lg:w-1/2  lg:py-6">
          <p className="text-lg mr-0 lg:mr-24 mt-0 lg:mt-28 text-white">
            At Tecvity, we are committed to providing the highest quality
            software solutions to our clients. Our team of engineers and
            designers are highly skilled and professional, ensuring that our
            services are of the highest standard. We take pride in delivering
            solutions that exceed our clients' expectations.
          </p>
        </motion.div>
      </div>
      <Vision />
      <span></span>
      <Values />
    </div>
  );
}

export default About;
