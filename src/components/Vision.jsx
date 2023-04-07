import React from "react";
import VisionImg from "../assets/visionlottie.json";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Vision = () => {
  return (
    <div className="-mb-20">
      <div className=" bg-black flex-col lg:flex-row flex pt-24 mb-24 lg:justify-center lg:mx-8 my-32">
        {/* Left Side div */}

        {/* Right Side Div */}
        <motion.div
          variants={fadeIn("left", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="font-first flex flex-col text-center lg:text-left text-main lg:w-1/2  lg:py-8"
        >
          <h1 className="text-5xl lg:text-8xl lg:ml-24 mb-8 mt-14  lg:mb-12">
            Our Vision
          </h1>
          <p className="text-lg mr-0 mb-5 lg:ml-24 text-white">
            At Tecvity, we believe in the transformative power of technology to
            drive innovation and growth for businesses around the world. Our
            vision is to be a global leader in software development, providing
            cutting-edge solutions that empower our clients to achieve their
            goals and stay ahead of the competition. By leveraging the latest
            technological approaches and industry expertise, we are committed to
            driving digital transformation for companies of all sizes and
            industries. Our passion for technology and commitment to excellence
            make us the ideal partner for organizations looking to harness the
            full potential of the digital age.
          </p>
        </motion.div>
        <motion.div
          variants={fadeIn("right", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="w-full lg:w-1/2 flex mx-auto flex-col lg:flex-row justify-center "
        >
          <Lottie animationData={VisionImg} loop={true} />
        </motion.div>
      </div>
    </div>
  );
};

export default Vision;
