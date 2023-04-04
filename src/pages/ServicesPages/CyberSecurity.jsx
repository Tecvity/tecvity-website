import React from "react";
import Lottie from "lottie-react";
import button from "../../assets/mainbutton.json";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import BgVideo from "../../assets/videos/CyberSecurityVideo.mp4";
import { Link } from "react-scroll";
import Cyber from "../../assets/Services/Cyber.json";

function CyberSecurtiy() {
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
            className="absolute top-64 left-0 right-0 bottom-0 font-first pb-4 lg:pb-24 text-white text-center items-center flex flex-col z-10">
            <p className="text-2xl py-4 text-slate-300 hover:text-main">
              Cyber Security{" "}
            </p>
            <h1 className="bg-gradient-to-r from-main bg-clip-text via-blue-200 to-green-800 inline-block text-transparent font-bold py-4 lg:pb-14 text-5xl hover:text-main lg:text-7xl">
              Stay Steps Ahead Of Cyber Attacks{" "}
            </h1>
            <p className="text-2xl py-4 text-white hover:text-main">
              From proactive planning to crisis management, we will help you
              overcome your most complex cybersecurity issues.
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
        {/* Left Side div */}

        {/* Right Side Div */}
        <motion.div
          variants={fadeIn("left", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="font-first flex flex-col text-center ml-0 lg:ml-12 lg:text-left text-main lg:w-1/2  lg:py-8">
          <h1 className="text-5xl lg:text-8xl mb-8 mt-14  lg:mb-12">
            Secure Your Digital Assets
          </h1>
          <p className="text-lg mr-0 mb-5 lg:mr-24 text-white">
            Tecvity aims to spread the power of technology globally by helping
            businesses grow with innovative software solutions and digital
            transformation. Our mission is to enhance cybersecurity and protect
            valuable assets from evolving cyber threats, ensuring peace of mind
            for all clients.
          </p>
        </motion.div>
        <motion.div
          variants={fadeIn("right", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="w-1/3 lg:w-1/3 flex mx-auto flex-col lg:flex-row justify-center ">
          <Lottie animationData={Cyber} loop={true} />
        </motion.div>
      </div>
    </div>
  );
}

export default CyberSecurtiy;
