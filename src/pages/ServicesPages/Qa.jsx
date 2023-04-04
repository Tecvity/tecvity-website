import React from "react";
import Lottie from "lottie-react";
import button from "../../assets/mainbutton.json";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import BgVideo from "../../assets/videos/QaVideo.mp4";
import { Link } from "react-scroll";
import Test from "../../assets/Services/test.json"

function MobileServices() {
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
              QA & Testing
            </p>
            <h1 className="bg-gradient-to-r from-main bg-clip-text via-blue-200 to-green-800 inline-block text-transparent font-bold py-4 lg:pb-14 text-5xl hover:text-main lg:text-7xl">
              Don’t Let Bugs Ruin Your Success Story
            </h1>
            <p className="text-2xl py-4 text-white hover:text-main">
              Spend less time troubleshooting issues and more time developing
              products that people love to use!
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
          variants={fadeIn("left", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="font-first flex flex-col text-center ml-0 lg:ml-12 lg:text-left text-main lg:w-1/2  lg:py-8">
          <h1 className="text-4xl lg:text-6xl mb-8   lg:mb-12">
            Raising The Bar For Software Reliability{" "}
          </h1>
          <p className="text-lg mr-0 mb-5 lg:mr-24 text-white">
            Did you know that 96% of users will not return to your website if
            they have a bad experience? You don’t have to worry about product
            quality anymore. You’ll know in advance if your product meets
            requirements and can help prevent PR debacles. Build trust and
            credibility with your customers by going live with a fully tested
            version of your product.Our enterprise-class quality assurance
            services enable you to deliver a robust, user-friendly product to
            market. We help you establish concrete control over your product’s
            life cycle, monitor every development stage, and give you accurate
            product quality information. We handle testing from all stages, from
            integration and compliance through performance, load testing, and
            usability. We empower you to increase the speed & efficiency of your
            development teams, while providing a quality assurance solution that
            helps you deliver fully functional, high-performance products up to
            80% faster and 20% cheaper.
          </p>
        </motion.div>
        <motion.div
          variants={fadeIn("right", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="w-4/5  lg:w-1/2 flex mx-auto flex-col lg:flex-row justify-center ">
          <Lottie animationData={Test} loop={true} />
        </motion.div>
      </div>
    </div>
  );
}

export default MobileServices;
