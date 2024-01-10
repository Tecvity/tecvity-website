import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

function MainServiceCard({ icon, href, iconColor, title, description }) {
  const Icon = icon;
  return (
    <motion.a href={href}
      variants={fadeIn("right", 0.4)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
      className="bg-main lg:w-4/5 hover:animate-bounce rounded-lg p-2 flex flex-row  my-3 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-900 shadow-lg shadow-green-500/50 dark:shadow-lg lg:mx-8 dark:shadow-green-800/80">
      <div className="flex flex-col justify-center">
        <h2 className="text-xl text-center text-black font-bold">{title}</h2>
      </div>
      <Icon className={`text-xl ml-auto my-auto  ${iconColor}`} />
    </motion.a>
  );
}

export default MainServiceCard;
