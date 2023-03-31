import React from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

function AboutHero() {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section id="about" className="section" ref={ref}>
      <div className="bg-yellow">
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="font-first mt-24 lg:mt-48 text-4xl text-main text-center lg:text-7xl">
          <h1>Delivering Exceptional Technology Solutions</h1>
        </motion.div>
        <motion.div  variants={fadeIn("right", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }} className="font-first text-xl mx-12 lg:mx-24 my-14 text-white text-center">
          <p>
            Tecvity is a leading software development company located in
            Gujranwala, Pakistan. We are committed to develop innovative
            software solutions for leading enterprises in the world, helping
            them grow their businesses using latest technology solutions. 4+
            Years In Business 50+ Clients Trust Us
          </p>
        </motion.div>
        <motion.div  variants={fadeIn("down", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }} className="flex-row text-main mx-auto justify-center flex">
          <div>
            <div className="text-[40px] mx-2 lg:mx-8 font-first mb-2">
              {inView ? <CountUp start={0} end={4} duration={3} /> : null}
            </div>
            <div className="font-first text-sm mx-2 lg:mx-8 lg:tex-xl tracking-[2px]">
              Years of <br />
              Experince
            </div>
          </div>
          <div>
            <div className="text-[40px] mx-2 lg:mx-8 font-first mb-2">
              {inView ? <CountUp start={0} end={74} duration={5} /> : null}
            </div>
            <div className="font-first text-sm mx-2 lg:mx-8 lg:tex-xl tracking-[2px]">
              Projects <br />
              Completed
            </div>
          </div>
          <div>
            <div className="text-[40px] mx-2 lg:mx-8 font-first  mb-2">
              {inView ? <CountUp start={0} end={52} duration={7} /> : null}
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
