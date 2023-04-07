import React from "react";
import ExpertCard from "../components/ExpertCard";
import export1 from "../assets/expertLottie/expert1.json";
import export2 from "../assets/expertLottie/expert2.json";
import export3 from "../assets/expertLottie/expert3.json";
import export4 from "../assets/hero-left.json";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Lottie from "lottie-react";

function WhatMakesUsExpert() {
  return (
    <div className="mt-48 mb-80">
      <motion.h1
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="text-5xl my-12 text-main lg:mt-16 mt-48 text-center font-first lg:text-7xl "
      >
        What Makes Us an Expert
      </motion.h1>
      <motion.p
        variants={fadeIn("left", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="text-lg mx-8 lg:mx-12 text-white lg:my-12 mt-4 text-center font-first lg:text-xl "
      >
        Tecvity is an expert software company with 13 years of experience, a
        workforce of 100+ top-notch engineers, hardcore competence, and multiple
        award-winning services.{" "}
      </motion.p>
      <motion.div
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="flex flex-col mx-2 lg:mx-24 lg:flex-row items-center"
      >
        <div>
          <ExpertCard
            icon={<Lottie animationData={export1} loop={true} />}
            title="Agile Methodology"
            description="We use an Agile methodology to ensure efficient and effective project management, enabling us to deliver high-quality solutions on time and within budget."
          />
        </div>
        <div>
          <ExpertCard
            icon={<Lottie animationData={export2} loop={true} />}
            title="Continuous Learning"
            description="Our team is committed to continuous learning and development, staying up-to-date with the latest trends and techniques in the industry to provide the best solutions."
          />
        </div>
      </motion.div>
      <motion.div
        variants={fadeIn("left", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="flex flex-col mx-2 lg:mx-24  lg:flex-row items-center"
      >
        <div>
          <ExpertCard
            icon={<Lottie animationData={export4} loop={true} />}
            title="Hardcore Competence"
            description="Pursuing solutions where others fail, we’ve served in the most diverse set of vertical spectrums. Our development heritage of over a decade has given us the expertise to solve any product development challenge in any industry."
          />
        </div>
        <div cla>
          <ExpertCard
            icon={<Lottie animationData={export3} loop={true} />}
            title="Experienced Professionals"
            description="Our team of developers and designers are highly skilled and experienced, with years of industry experience working with leading enterprises. They bring a wealth of knowledge and expertise to each project."
          />
        </div>
      </motion.div>
    </div>
  );
}

export default WhatMakesUsExpert;
