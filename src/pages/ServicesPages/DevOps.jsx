import React from "react";
import Lottie from "lottie-react";
import button from "../../assets/mainbutton.json";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import BgVideo from "../../assets/videos/DevOpsVideo.mp4";
import { Link } from "react-scroll";
import DevOpsLottie from "../../assets/Services/devops.json";

function DevOps() {
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
              DevOps{" "}
            </p>
            <h1 className="bg-gradient-to-r from-main bg-clip-text via-blue-200 to-green-800 inline-block text-transparent font-bold py-4 lg:pb-14 text-5xl hover:text-main lg:text-7xl">
              Automate, Integrate & Deliver Faster{" "}
            </h1>
            <p className="text-2xl py-4 text-white hover:text-main">
              We’ll speed up your deployment, simplify updates and upgrades, and
              help you achieve guaranteed higher uptime.
            </p>
            <div className="w-1/2 lg:w-3/12 mt-8 items-center justify-center flex">
              <Link to="contact">
                <Lottie animationData={button} loop={true} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <div className=" bg-black mt-14 flex-col lg:flex-row flex pt-24 mb-24 lg:justify-center lg:mx-8 my-32">
        {/* Left Side div */}

        {/* Right Side Div */}
        <motion.div
          variants={fadeIn("right", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="w-4/5  lg:w-1/2 flex mx-auto flex-col lg:flex-row justify-center ">
          <Lottie animationData={DevOpsLottie} loop={true} />
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="font-first flex flex-col text-center ml-0 lg:ml-12 lg:text-left text-main lg:w-1/2  lg:py-8">
          <h1 className="text-4xl lg:text-6xl mb-8   lg:mb-12">
            Achieve High-Velocity Operational Efficiency
          </h1>
          <p className="text-lg mr-0 mb-5 lg:mr-24 text-white">
            DevOps implementation is a complicated process that requires a
            well-thought-out strategy and a carefully planned approach. By
            implementing DevOps, your company can streamline development and
            release processes. As a result, you avoid errors, increase
            productivity, and improve customer satisfaction. If you want to
            succeed in a competitive market, make your operations more
            efficient, and improve your deployment quality, then our DevOps
            professional services can help you get there. Our experts have
            experience helping many organizations successfully implement DevOps
            practices, and are highly qualified to help you automate and
            standardize processes for infrastructure deployment.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default DevOps;
