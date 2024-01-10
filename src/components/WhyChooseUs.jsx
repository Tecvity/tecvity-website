import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

function WhyChooseUs() {
  return (
    <motion.div
      variants={fadeIn("left", 0.4)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
      className="bg-main mx-4 lg:mx-48 py-12 my-60 rounded-2xl text-black font-first text-center ">
      <h1 className="text-3xl  mb-6 lg:text-6xl">Why Choose Us?</h1>
      <p className="text-lg font-bold mb-6 mx-8 lg:mx-12 lg:text-2xl">
        We have developed an efficient design & development process that brings solid results
        to our clients in less time.
      </p>
      <h1 className="text-2xl mt-2 lg:text-4xl">3x</h1>
      <p className="text-lg mb-8 lg:text-2xl">less development time</p>
      <h1 className="text-2xl lg:text-4xl">40%</h1>
      <p className="text-lg mb-8 lg:text-2xl">faster design delivery</p>
      <h1 className="text-2xl lg:text-4xl">20%</h1>
      <p className="text-lg lg:text-2xl">less time on deployment</p>
    </motion.div>
  );
}

export default WhyChooseUs;
