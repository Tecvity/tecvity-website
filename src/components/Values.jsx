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
        className="text-center py-8 px-2 font-first ">
        <h1 className="text-6xl lg:text-7xl py-4 text-main mb-8 mt-24">
          Our Core Values
        </h1>
        <p className="text-lg  text-white ">
          From The Last Many Years, We Have Been Building Great Software
          Products For Our Clients.
        </p>
      </motion.div>
      {/* header 2 */}
      <motion.div
        variants={fadeIn("down", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="flex  flex-col lg:flex-row justify-center space-y-6  mt-8 space-x-8">
        <div className="flex flex-col lg:flex-row justify-center items-center space-y-6 space-x-8">
          <div></div>
          <Card
            icon={FaLightbulb}
            iconColor="text-yellow-800"
            title="Be Curious"
            description="Learning never stops. Open your eyes and look around, the more curious you are, the more possibilities you will open throughout your lifetime."
          />
          <Card
            icon={FaHandsHelping}
            iconColor="text-blue-800"
            title="Be Empathetic"
            description="We believe in the unique human ability to understand and relate to others. Empathy helps us create more collaborative and respectful workspaces."
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
            title="Keep Promises"
            description="We believe that trust is the most important key in all our relationships and we take pride in delivering with Quality, precision and integrity."
          />
          <div></div>
        </div>
      </motion.div>
    </div>
  );
};

export default Values;
