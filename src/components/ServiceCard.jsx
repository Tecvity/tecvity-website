import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

function ServiceCard({
  icon,
  iconColor,
  title,
  description,
  description1,
  description2,
}) {
  const Icon = icon;
  return (
    <motion.div
      variants={fadeIn("right", 0.5)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
      className="bg-main leading-7 mx-auto my-10 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-900 shadow-lg shadow-green-500/50 dark:shadow-lg lg:mx-8 dark:shadow-green-800/80 w-4/5 lg:w-2/5 rounded-lg pb-2 pt-6">
      <Icon className={`text-3xl  mx-auto flex ${iconColor} mb-4`} />
      <h2 className="text-xl text-center text-black font-bold mb-2">{title}</h2>
      <p className="font-first mx-2 text-center text-black">{description}</p>
    </motion.div>
  );
}

export default ServiceCard;
