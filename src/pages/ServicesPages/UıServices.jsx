import React from "react";
import Lottie from "lottie-react";
import button from "../../assets/mainbutton.json";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import BgVideo from "../../assets/videos/UiVideo.mp4";
import { Link } from "react-scroll";
import Ui from "../../assets/Services/UİUx.json";

function Hero() {
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
              UI/UX Design
            </p>
            <h1 className="bg-gradient-to-r from-main bg-clip-text via-blue-200 to-green-800 inline-block text-transparent font-bold py-4 lg:pb-14 text-5xl hover:text-main lg:text-7xl">
              Transform The Way Users Interact With Your Product{" "}
            </h1>
            <p className="text-2xl py-4 text-white hover:text-main">
              Want to build a remarkable product that is an instant win? We
              create meaningful experiences and turn them into tangible business
              results.
            </p>
            <div className="w-1/2 lg:w-3/12 mt-8 items-center justify-center flex">
              <Link to="contact">
                <Lottie animationData={button} loop={true} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      <div className=" bg-black flex-col lg:flex-row flex pt-24 mb-24 lg:justify-center lg:mx-8 my-32">
        <motion.div
          variants={fadeIn("left", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="font-first flex flex-col text-center ml-0 lg:ml-12 lg:text-left text-main lg:w-1/2  lg:py-8">
          <h1 className="text-4xl lg:text-6xl mb-8   lg:mb-12">
            Tkxel Pivots On A Solid Foundation, One That Is Built On Your Vision
            & Our Expertise.{" "}
          </h1>
          <p className="text-lg mr-0 mb-5 lg:mr-24 text-white">
            We apply collaborative, human-centered design thinking to even the
            toughest of business challenges. With a relentless commitment to
            innovation and world-class craftsmanship, we deliver the most
            beautiful, meaningful and impactful experiences for your customers.
            Tkxel has a proven track record of delivering impactful customer
            experiences, unlocking the power of technology within organizations,
            and stimulating growth with brave new initiatives. We're a
            full-service design team. We'll do everything from giving you the
            scoop on what your customers want, to making sure that you're
            delivering them what they need. We are design-thinkers,
            problem-solvers and innovators offering fast-paced proof of concepts
            to large-scale design thinking-based service product design to
            maximize your return on investment.
          </p>
        </motion.div>
        <motion.div
          variants={fadeIn("right", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="w-4/5  lg:w-1/2 flex mx-auto flex-col lg:flex-row justify-center ">
          <Lottie animationData={Ui} loop={true} />
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
