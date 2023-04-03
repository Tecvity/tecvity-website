import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Lottie from "lottie-react";
import Global from "../assets/Services/business.json";
import { Link } from "react-scroll";

function CustomServices() {
  return (
    <div className="mt-72 lg:mt-96 pt-32  mb-80">
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="w-1/3 lg:w-2/5 hidden lg:block mt-48 absolute right-3  lg:right-20">
        <Lottie animationData={Global} loop={true} />
      </motion.div>
      <motion.div
        variants={fadeIn("left", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="font-first text-main text-left text-4xl lg:text-8xl">
        <h1>
          Your Custom Software <br /> Development Partner
        </h1>
      </motion.div>
      <motion.div
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="font-first text-slate-400 text-left text-md lg:text-xl">
        <h4>Empowering your Business</h4>
      </motion.div>
      <motion.div
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="font-first leading-5 lg:leading-7 mt-2 text-white  w-4/5 lg:w-1/2 text-left text-sm lg:text-md">
        <p>
          Tecvity is a digital innovation hub that can bring your world-changing
          ideas to life. With us on your side, you get access to the best of
          both worlds: top 2% talent on one side, and an innovative value-driven
          approach on the other. We’ve got hundreds of emerging tools and
          technologies that can rocket-launch your product into the marketplace.
          Whether you are an enterprise or a startup we will help you craft
          digital strategies that start with MVPs and end with large-scale
          product development. Our goal is simple: To engage your customers,
          deliver business value and gain competitive advantage. Not resting on
          our laurels, we leverage our years of expertise to build future-proof
          software systems for you. We help our clients build user-friendly
          products that set them up for success in the long run.
        </p>
      </motion.div>
      <Link to="contact">
        <motion.button
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex mt-4 font-first  text-black bg-main border-0 py-2 px-8 focus:outline-none hover:bg-green-500 rounded text-lg">
          Get in Touch
        </motion.button>
      </Link>
      {/* Aciton */}
    </div>
  );
}

export default CustomServices;
