import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Lottie from "lottie-react";
import about1 from "../assets/about1.json";
import about3 from "../assets/hero-left.json";

function AboutHero() {
  

  return (
    <section id="about">
      <div className="bg-yellow mx-18 pt-12 lg:mx-48">
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="font-first mt-24 lg:mt-64 text-4xl text-main text-center lg:text-7xl">
          <h1>Delivering Creative Technological Solutions</h1>
        </motion.div>
        <motion.div
          variants={fadeIn("right", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="font-first text-xl mx-12 my-14 text-white text-center">
          <p>
            Tecvity is a leading software development company located in
            Pakistan. We are committed to develop innovative
            software solutions for leading enterprises in the world, helping
            them grow their businesses using latest technology solutions. 
          </p>
        </motion.div>
        <motion.div
          variants={fadeIn("right", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="w-1/6 lg:w-2/12 absolute top-20 left-10 lg:top-48">
          <Lottie animationData={about1} loop={true} />
        </motion.div>
        <motion.div variants={fadeIn("right", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }} className="w-1/4 lg:w-1/5 hidden lg:block absolute bottom-5 right-10 lg:right-24 lg:-bottom-20">
          <Lottie animationData={about3} loop={true} />
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex-row text-main mx-auto pb-32 justify-center flex">
          <div>
            <div className="text-[40px] mx-2 lg:mx-8 font-first mb-2">
               <CountUp start={0} end={5} duration={9} />
            </div>
            <div className="font-first text-sm mx-2 lg:mx-8 lg:tex-xl tracking-[2px]">
              Years of <br />
              Experience
            </div>
          </div>
          <div>
            <div className="text-[40px] mx-2 lg:mx-8 font-first mb-2">
               <CountUp start={0} end={25} duration={10} />
            </div>
            <div className="font-first text-sm mx-2 lg:mx-8 lg:tex-xl tracking-[2px]">
              Projects <br />
              Completed
            </div>
          </div>
          <div>
            <div className="text-[40px] mx-2 lg:mx-8 font-first  mb-2">
              <CountUp start={0} end={20} duration={12} />
            </div>
            <div className="font-first text-sm mx-2 lg:mx-8 lg:tex-xl tracking-[2px]">
              Satisfied <br />
              Clients
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutHero;
