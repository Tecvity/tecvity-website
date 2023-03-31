import React from 'react';
import Card from '../components/BlogCard';
import Img from '../assets/images/portfolio/dinghysailing.jpg'
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const App = () => {
  return (
      <div className="p-24">
           <motion.h1
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="text-7xl mb-24 lg:mb-12 lg:mt-24  mt-12 lg:text-8xl 
         text-center text-main ">
        Blog
      </motion.h1>
      <Card
        title="How to Build a React App with Tailwind CSS"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed
            dapibus leo nec ornare diam sed commodo nibh ante facilisis bibendum
            dolor feugiat at. Nullam id quam auctor, suscipit quam at, vehicula
            velit."
        image={Img}
          />  
           <Card
        title="How to Build a React App with Tailwind CSS"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed
            dapibus leo nec ornare diam sed commodo nibh ante facilisis bibendum
            dolor feugiat at. Nullam id quam auctor, suscipit quam at, vehicula
            velit."
        image={Img}
          />  
           <Card
        title="How to Build a React App with Tailwind CSS"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed
            dapibus leo nec ornare diam sed commodo nibh ante facilisis bibendum
            dolor feugiat at. Nullam id quam auctor, suscipit quam at, vehicula
            velit."
        image={Img}
          />  
    </div>
  );
};

export default App;
