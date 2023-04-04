import React from "react";
import Lottie from "lottie-react";
import button from "../../assets/mainbutton.json";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import BgVideo from "../../assets/videos/mainVideo.mp4";
import { Link } from "react-scroll";
import Services from "../../components/Services";

function MainServices() {
  return (
    <div>
    <section className="page">
      <div className="overlay"></div>
      <video src={BgVideo} autoPlay loop muted></video>
      <div className="page__content text-2xl">
        <motion.div
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="absolute lg:top-64 left-0 right-0 bottom-0 font-first pb-4 lg:pb-24 text-white text-center items-center flex flex-col z-10">
          <p className="text-2xl py-4 text-slate-300 hover:text-main">
            Services
          </p>
          <h1 className="bg-gradient-to-r from-main bg-clip-text via-blue-200 to-green-800 inline-block text-transparent font-bold py-4 lg:pb-14 text-5xl hover:text-main lg:text-7xl">
            We Engineer Software Solutions{" "}
          </h1>
          <p className="text-2xl py-4 text-white hover:text-main">
            We help you envision technology that powers the future of your
            business
          </p>
          <div className="w-1/2 lg:w-3/12 mt-8 items-center justify-center flex">
            <Link to="contact">
              <Lottie animationData={button} loop={true} />
            </Link>
          </div>
        </motion.div>
      </div>
      </section>
      <Services />
    </div>
  );
}

export default MainServices;
