import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Lottie from "lottie-react";
import Graphic from "../../assets/Services/graphic.json";
import Innovaton from "../../components/Innovaton";
import FeaturedWork from "../../components/FeaturedWork"


import CustomServices from "../../components/CustomServices";

function GraphicServices() {
  return (
    <div className="mt-12 lg:mt-64 ml-3 lg:ml-24  mb-80">
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="w-1/3 lg:w-2/5 mt-8 absolute right-3 top-28 lg:right-20 flex">
        <Lottie animationData={Graphic} loop={true} />
      </motion.div>
      <motion.div
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="font-first underline text-slate-400 text-left text-md lg:text-xl">
        <h4>Graphic Designs</h4>
      </motion.div>
      <motion.div
        variants={fadeIn("left", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="font-first text-main text-left text-4xl lg:text-8xl">
        <h1>
          Your Vision <br />
          Our Expertise
        </h1>
      </motion.div>
      <motion.div
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="font-first leading-5 lg:leading-7 mt-2 text-white  w-4/5 lg:w-1/2 text-left text-sm lg:text-md">
        <p>
          At Tecvity, we create customized web development solutions that meet
          the unique needs of your business. Our experienced team of full-stack
          developers uses the latest tools and technologies to build fast,
          responsive, and visually stunning websites. We offer a range of
          services, including website design and development, e-commerce
          solutions, and mobile-responsive design. We work closely with you to
          understand your goals and requirements and provide ongoing maintenance
          and support to ensure your website stays secure and performs at its
          best.
        </p>
      </motion.div>
      <button className="flex mt-4 font-first  text-black bg-main border-0 py-2 px-8 focus:outline-none hover:bg-green-500 rounded text-lg">
        Let's Talk
      </button>
      {/* Aciton */}
      <CustomServices />
      <Innovaton />
            <FeaturedWork />

    </div>
  );
}

export default GraphicServices;
