import React from "react";
import office from "../assets/office.jpg";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

function Offices() {
  return (
    <div className="font-first my-80 text-center">
      <motion.div
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="text-7xl lg:text-8xl text-center text-main mt-48">
        <h1>Our Offices</h1>
      </motion.div>
      <motion.div
        variants={fadeIn("left", 0.5)}
        initial="hidden"g
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="text-center text-white mt-4 underline m-8 py-4 text-lg lg:text-2xl">
        <p>Come Meet With Us</p>
      </motion.div>
      <motion.div
        variants={fadeIn("right", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="text-7xl lg:text-8xl -mb-8 text-center text-main mt-4 border-4 rounded-xl justify-center mx-auto w-full lg:w-3/5 ">
        <img src={office} alt="Gujranwala, Pakistan" />
      </motion.div>
      <motion.div
        variants={fadeIn("down", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className=" text-center text-md lg:text-lg text-white mt-12">
        <p>Gujranwala, Pakistan</p>
      </motion.div>
    </div>
  );
}

export default Offices;
