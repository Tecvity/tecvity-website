import React from "react";
import UI from "../assets/user-interface.json";
import Lottie from "lottie-react";
import Mobile from "../assets/mobil.json";
import Web from "../assets/web-dev.json";
import Design from "../assets/designn.json";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

function Services() {
  return (
    <div className="mb-32 bg-black pb-24">
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}>
        <h1 className="text-main text-center pt-48 mt-20 lg:pb-10  font-first text-3xl lg:text-7xl">
          What Tecvity Offers?
        </h1>
      </motion.div>
      <div className="lg:flex pt-4 px-4 lg:px-8">
        <div className="flex-row  mt-8 lg:mt-0  flex">
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="text-white font-first text-center text-sm xl:text-xl ">
            <h1 className="">UI Design</h1>
            <div className="w-3/4 mx-auto mt-2 lg:mt-8 lg:w-3/5">
              <Lottie animationData={UI} loop={true} />
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}>
            <div className="text-white font-first text-center text-sm xl:text-xl ">
              <h1 className="">Web Development</h1>
            </div>
            <div className="w-3/4 mx-auto mt-2 lg:mt-8 lg:w-3/5">
              <Lottie animationData={Web} loop={true} />
            </div>
          </motion.div>
        </div>
        <div className="flex-row mt-4 lg:mt-0   flex">
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="text-white font-first text-center text-sm xl:text-xl ">
            <h1 className="">Mobile Development</h1>
            <div className="w-3/4 mx-auto mt-2 lg:mt-8 lg:w-3/5">
              <Lottie animationData={Mobile} loop={true} />
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}>
            <div className="text-white font-first text-center text-sm xl:text-xl ">
              <h1 className="">Graphic Design</h1>
            </div>
            <div className="w-3/4 mb-8 lg:mb-12  mx-auto mt-2 lg:mt-8 lg:w-3/5">
              <Lottie animationData={Design} loop={true} />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="flex justify-center">
        <button
          type="button"
          className="text-black font-first bg-main hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm lg:text-lg px-6 lg:px-8 py-4 lg:py-4 text-center">
          More Services
        </button>
      </motion.div>
    </div>
  );
}

export default Services;
