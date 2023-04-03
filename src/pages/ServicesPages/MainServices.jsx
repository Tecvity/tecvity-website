import React from "react";
import CustomServices from "../../components/CustomServices";
import Services from "../../components/Services";
import FeaturedWork from "../../components/FeaturedWork";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { Link } from "react-router-dom";

function MainServices() {
  return (
    <div>
      <div className="ml-16 -mt-72">
        <CustomServices />
      </div>
      <Services />
      <div className="py-40"></div>
      <FeaturedWork />
      <Link to="/portfolio">
        <motion.button
          variants={fadeIn("right", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          type="button"
          className="text-black mx-auto flex justify-center font-first bg-main hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm lg:text-lg px-6 lg:px-8 py-4 lg:py-4 text-center">
          See more
        </motion.button>
      </Link>
      <div className=" pb-80" />
    </div>
  );
}

export default MainServices;
