import React from "react";
import Vision from "../components/Vision";
import Values from "../components/Values";
import Lottie from "lottie-react";
import Team from "../assets/team.json";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import AboutHero from "../components/AboutHero";
import WhatWeDo from "../components/WhatWeDo";
import WhatMakesUsExpert from "../components/WhatMakesUsExpert";
import Offices from "../components/Offices";
import { Link } from "react-scroll";

function About() {
  return (
    <div>
      <AboutHero />
      <motion.h1
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="text-6xl lg:text-7xl -mb-24 lg:-m-mb40 text-center text-main mt-48">
        About Us
      </motion.h1>
      <div className="flex-col bg-black flex mb-4 lg:flex-row lg:justify-center lg:mx-8 my-32">
        {/* Right Side Div */}
        <motion.div
          variants={fadeIn("left", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="font-first flex flex-row lg:flex-col text-center lg:text-left text-main lg:w-3/5 lg:py-6">
          <div className="flex items-center flex-col lg:flex-row justify-center lg:justify-start">
            <p className="text-lg mr-0 lg:mr-24 mt-0 text-white">
              At Tecvity, we are committed to providing the highest quality
              software solutions to our clients. Our team of engineers and
              designers are highly skilled and professional, ensuring that our
              services are of the highest standard. We take pride in delivering
              solutions that exceed our clients' expectations.
            </p>
            <Lottie
              animationData={Team}
              loop={true}
              style={{ maxWidth: "70%", marginLeft: "20px" }}
            />
          </div>
        </motion.div>
      </div>
      <Link to="contact">
        <motion.button
          variants={fadeIn("right", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          type="button"
          className="text-black mb-52 mx-auto flex justify-center font-first bg-main hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm lg:text-lg px-6 lg:px-8 py-4 lg:py-4 text-center">
          Learn More
        </motion.button>
      </Link>
      <Vision />
      <Link to="contact">
        <motion.button
          variants={fadeIn("right", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          type="button"
          className="text-black mx-auto flex justify-center font-first bg-main hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm lg:text-lg px-6 lg:px-8 py-4 lg:py-4 text-center">
          Get in Touch
        </motion.button>
      </Link>
      <div className="pt-32">
        <Values />
      </div>

      <WhatWeDo />
      <a href="/services">
        <motion.button
          variants={fadeIn("right", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          type="button"
          className="text-black -mt-60  mx-auto flex justify-center font-first bg-main hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm lg:text-lg px-6 lg:px-8 py-4 lg:py-4 text-center">
          See More Services
        </motion.button>
      </a>
      <div className="pb-60"> </div>
      <WhatMakesUsExpert />
      <Offices />
    </div>
  );
}

export default About;
