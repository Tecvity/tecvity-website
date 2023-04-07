import React from "react";
import {
  FaLightbulb,
  FaHandsHelping,
  FaUserCheck,
  FaRegCheckCircle,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Card from "./Card";

const Values = () => {
  return (
    <div className="flex flex-col mb-32 items-center pt-8">
      {/* header */}
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="text-center py-8 px-2 font-first "
      >
        <h1 className="text-6xl lg:text-7xl py-4 text-main mb-8 mt-24">
          Our Core Values
        </h1>
        <p className="text-lg  text-white ">
          Here Are Some Of Our Core Values That We Take Pride In
        </p>
      </motion.div>
      {/* header 2 */}
      <motion.div
        variants={fadeIn("down", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="flex  flex-col lg:flex-row justify-center space-y-6  mt-8 space-x-8"
      >
        <div className="flex flex-col lg:flex-row  justify-center items-center space-y-6 lg:space-x-8">
          <div></div>
          <Card
            icon={FaLightbulb}
            iconColor="text-yellow-800"
            title="Innovation"
            description="We are committed to using the latest technology and exploring new ideas to drive growth and success for our clients, delivering cutting-edge solutions."
          />
          <Card
            icon={FaHandsHelping}
            iconColor="text-blue-800"
            title="Honesty"
            description="We believe in transparency, integrity, and ethical behavior in all aspects of our business, building lasting relationships with our clients based on trust and respect."
          />
          <Card
            icon={FaUserCheck}
            iconColor="text-red-800"
            title="Take Ownership"
            description="We have established a culture of personal accountability, where our employees possess the freedom and the courage to take initiatives."
          />
          <Card
            icon={FaRegCheckCircle}
            iconColor="text-purple-800"
            title="Collaboration"
            description="Our team works together with clients and partners to ensure project success through open communication, mutual respect, and teamwork."
          />
          <div></div>
        </div>
      </motion.div>
    </div>
  );
};

export default Values;
