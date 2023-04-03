import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Lottie from "lottie-react";
import Mobile from "../../assets/Services/MobileServices.json";
import CustomServices from "../../components/CustomServices";
import Innovaton from "../../components/Innovaton";

function MobileServices() {
  return (
    <div className="mt-12 lg:mt-64 ml-3 lg:ml-24  mb-80">
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="w-1/3 lg:w-2/5 mt-8 absolute right-3 top-30 lg:right-20 flex">
        <Lottie animationData={Mobile} loop={true} />
      </motion.div>
      <motion.div
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="font-first underline text-slate-400 text-left text-md lg:text-xl">
        <h4>Mobile Development</h4>
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
          Tecvity is a leading company that specializes in delivering innovative
          technology solutions to businesses across various industries. Our team
          of experienced full-stack engineering experts is dedicated to
          developing top-of-the-line enterprise-grade solutions that are
          customized to meet your unique business needs. Whether you are looking
          to enhance your existing technology infrastructure or looking to
          implement new solutions from scratch, our skilled professionals are
          well-equipped to deliver outstanding results that drive growth and
          success for your organization. At Tecvity, we pride ourselves on our
          commitment to delivering exceptional service and support to our
          clients every step of the way.
        </p>
      </motion.div>
      <button className="flex mt-4 font-first  text-black bg-main border-0 py-2 px-8 focus:outline-none hover:bg-green-500 rounded text-lg">
        Let's Talk
      </button>
      {/* Aciton */ }
      
      <CustomServices />
      <Innovaton />
     </div>
  );
}

export default MobileServices;
