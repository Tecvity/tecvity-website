import React from "react";
import UI from "../assets/user-interface.json";
import Lottie from "lottie-react";
import Mobile from "../assets/mobil.json";
import Web from "../assets/web-dev.json";
import Graphic from "../assets/Services/graphic.json";
import qa from "../assets/images/test.jpg";
import cyber from "../assets/images/cyber.jpg";
import custom from "../assets/images/custom.jpg";
import devops from "../assets/images/devops.png";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";

function Services() {
  return (
    <div className="bg-black">
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
          <Link to="/services/userinterface">
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
          </Link>
          <Link to="/services/webdevelopment">
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
          </Link>
        </div>
        <div className="flex-row mt-4 lg:mt-0   flex">
          <Link to="/services/mobiledevelopment">
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
          </Link>
          <Link to="/services/graphicdesign">
            <motion.div
              variants={fadeIn("left", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}>
              <div className="text-white font-first text-center text-sm xl:text-xl ">
                <h1 className="">Graphic Design</h1>
              </div>
              <div className="w-3/4 mb-8 lg:mb-12  mx-auto mt-2 lg:mt-8 lg:w-3/5">
                <Lottie animationData={Graphic} loop={true} />
              </div>
            </motion.div>
          </Link>
        </div>
      </div>
      <div className="lg:flex pt-4 px-4 lg:px-8">
        <div className="flex-row  mt-8 lg:mt-0  flex">
          <Link to="/services/qatesting">
            <motion.div
              variants={fadeIn("left", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}>
              <div className="text-white font-first text-center text-sm xl:text-xl ">
                <h1 className="">Qa Testing</h1>
              </div>
              <div className="w-1/2 mb-8 lg:mb-12  mx-auto mt-2 lg:mt-8 lg:w-3/5">
                <img src={qa} alt="Qa-testing" />
              </div>
            </motion.div>
          </Link>
          <Link to="/services/devops">
            <motion.div
              variants={fadeIn("left", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}>
              <div className="text-white font-first text-center text-sm xl:text-xl ">
                <h1 className="">Devops</h1>
              </div>
              <div className="w-1/2 mb-8 lg:mb-12  mx-auto mt-2 lg:mt-8 lg:w-3/5">
                <img src={devops} alt="" />
              </div>
            </motion.div>
          </Link>
        </div>
        <div className="flex-row pb-36 mt-8 lg:mt-0  flex">
          <Link to="/services/cybersecurity">
            <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}>
              <div className="text-white font-first text-center text-sm xl:text-xl ">
                <h1 className="">CyberSecurity</h1>
              </div>
              <div className="w-1/2 mb-8 lg:mb-12  mx-auto mt-2 lg:mt-8 lg:w-3/5">
                <img src={cyber} alt="" />
              </div>
            </motion.div>
          </Link>
          <Link to="/services/customservices">
            <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}>
              <div className="text-white font-first text-center text-sm xl:text-xl ">
                <h1 className="">Custom Software Development</h1>
              </div>
              <div className="w-1/2 mx-auto mb-8 lg:mb-12 mt-2 lg:mt-8 lg:w-3/5">
                <img src={custom} alt="" />
              </div>
            </motion.div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Services;
