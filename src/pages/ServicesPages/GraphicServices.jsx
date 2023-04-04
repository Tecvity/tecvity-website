import React from "react";
import Lottie from "lottie-react";
import button from "../../assets/mainbutton.json";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import BgVideo from "../../assets/videos/DesingVideo.mp4";
import { Link } from "react-scroll";
import ServiceCard from "../../components/ServiceCard";
import { FaMobileAlt, FaDesktop, FaPaintBrush } from "react-icons/fa";
import Design from "../../assets/design.json";
import WhyChooseUs from "../../components/WhyChooseUs";

function GraphicServices() {
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
              Graphic Design
            </p>
            <h1 className="bg-gradient-to-r from-main bg-clip-text via-blue-200 to-green-800 inline-block text-transparent font-bold py-4 lg:pb-14 text-5xl hover:text-main lg:text-7xl">
              Friendly Designs for All Your Graphic Design Needs{" "}
            </h1>
            <p className="text-2xl py-4 text-white hover:text-main">
              Your one-stop shop for all your graphic design requirements.
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
          <h1 className="text-3xl lg:text-5xl mb-8 mt-14  lg:mb-12">
            Secure, Fast, and User-Friendly Designs for All Your Graphic Design
            Needs{" "}
          </h1>
          <p className="text-xl mr-0 mb-5 lg:mr-24 text-slate-300">
            Your one-stop shop for all your graphic design requirements.
          </p>
          <p className="text-md mr-0 mb-5 lg:mr-24 text-white">
            Tecvity offers comprehensive graphic design services for businesses
            of all sizes. We provide design solutions for branding, marketing
            materials, print media, and web design. Our designs are engineered
            to be secure, fast, and user-friendly, ensuring that they are
            visually appealing and functionally effective. We start our design
            process by understanding your brand, target audience, and
            objectives. We define metrics and key performance indicators to
            ensure that our designs meet your expectations and drive your
            business success. Our team of experienced designers conducts
            extensive user research, usability testing, and competitive analysis
            to develop a brand strategy that aligns with your goals.
          </p>
        </motion.div>
        <motion.div
          variants={fadeIn("right", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="w-1/2 lg:w-1/3 flex mx-auto flex-col lg:flex-row justify-center ">
          <Lottie animationData={Design} loop={true} />
        </motion.div>
      </div>
      <div className="py-60 lg:mx-12">
        <h1 className="text-2xl mt-30 text-center mb-4 lg:mb-8 text-main lg:text-4xl">
          Our Mobile App Development Services{" "}
        </h1>
        <p className="text-md mt-30 text-center mb-4 lg:mb-8 text-white lg:text-xl">
          Delight your customers with feature-rich, expressive apps that are
          native to their devices{" "}
        </p>
        <div className="flex flex-col lg:flex-row">
          <ServiceCard
            icon={FaPaintBrush}
            iconColor="text-blue-600"
            title="Graphic Design Services"
            description="Our graphic design team offers a wide range of services, including branding, marketing materials, print media, and web design."
          />
          <ServiceCard
            icon={FaMobileAlt}
            iconColor="text-blue-600"
            title="Responsive Web Design"
            description="Our web design experts can create stunning, responsive websites that are optimized for all devices and screen sizes."
          />
          <ServiceCard
            icon={FaDesktop}
            iconColor="text-blue-600"
            title="UI/UX Design"
            description="We help you create intuitive and user-friendly interfaces that enhance user experience and engagement."
          />
        </div>
        <div>
          <Link to="contact">
            <motion.button
              variants={fadeIn("right", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              type="button"
              className="text-black mt-12 pb-42 mx-auto flex justify-center font-first bg-main hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm lg:text-lg px-6 lg:px-8 py-4 lg:py-4 text-center">
              Get in Touch
            </motion.button>
          </Link>
        </div>
      </div>
      <WhyChooseUs />
    </div>
  );
}

export default GraphicServices;
