import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Lottie from "lottie-react";
import CustomServices from "../../components/CustomServices";
import Ui from "../../assets/Services/Ui.json";
import Innovaton from "../../components/Innovaton";
import FeaturedWork from "../../components/FeaturedWork"

function UıServices() {
  return (
    <div className="mt-12 lg:mt-64 ml-3 lg:ml-24  mb-80">
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="w-1/3 lg:w-2/7 mt-8 absolute right-3 top-30 lg:right-20 flex">
        <Lottie animationData={Ui} loop={true} />
      </motion.div>
      <motion.div
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="font-first underline text-slate-400 text-left text-md lg:text-xl">
        <h4>User Interface</h4>
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
          At Tecvity, we understand that a great User Interface (UI) is
          essential for a successful software application or website. Our UI
          design experts specialize in creating intuitive and visually appealing
          interfaces that enable users to interact with your system seamlessly.
          We combine creativity, technical expertise, and user research to
          develop custom UI solutions that meet the needs of your target
          audience and align with the goals of your business. Whether you need a
          responsive interface that works across multiple devices or a complex
          user experience that requires advanced functionality, we have the
          skills and experience to bring your vision to life.
        </p>
      </motion.div>
      <button className="flex mt-4 font-first  text-black bg-main border-0 py-2 px-8 focus:outline-none hover:bg-green-500 rounded text-lg">
        Let's Talk
      </button>
      {/* Aciton */}
    </div>
  );
}

export default UıServices;
