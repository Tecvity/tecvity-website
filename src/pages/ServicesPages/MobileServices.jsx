import React from "react";
import Lottie from "lottie-react";
import button from "../../assets/mainbutton.json";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import BgVideo from "../../assets/videos/MobileVideo.mp4";
import { Link } from "react-scroll";
import Mobile from "../../assets/mobile.json";
import ServiceCard from "../../components/ServiceCard";
import { FaMobileAlt, FaMicrochip } from 'react-icons/fa';
import WhyChooseUs from "../../components/WhyChooseUs";



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
            className="absolute top-64 left-0 right-0 bottom-0 font-first pb-4 lg:pb-24 text-white text-center items-center flex flex-col z-10">
            <p className="text-2xl py-4 text-slate-300 hover:text-main">
              Mobile App Development
            </p>
            <h1 className="bg-gradient-to-r from-main bg-clip-text via-blue-200 to-green-800 inline-block text-transparent font-bold py-4 lg:pb-14 text-5xl hover:text-main lg:text-7xl">
              We Build Appls People Love To Use
            </h1>
            <p className="text-2xl py-4 text-white hover:text-main">
              We deliver more than just apps. We deliver experiences. Our fast,
              responsive and highly scalable mobile app development will help
              you get ahead of the curve in no time!
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
            Our Mobile Apps Are Engineered To Be Secure, Fast & User Friendly{" "}
          </h1>
          <p className="text-xl mr-0 mb-5 lg:mr-24 text-slate-300">
            Your one-stop shop for all your mobile app needs.
          </p>
          <p className="text-lg mr-0 mb-5 lg:mr-24 text-white">
            Tecvity offers full-service mobile app development. Whether you need
            design, coding, management, or integration services, we'll build
            your product from scratch into a fully functioning application that
            meets your expectations. We start with the end in mind. We dig deep
            to make sure we understand your industry, user, and value
            proposition. Then we define the metrics and KPIs that guide our
            success. We help you create a product that delights your users. And
            we help you develop a brand strategy based on extensive user
            research, usability testing, and competitive analysis.
          </p>
        </motion.div>
        <motion.div
          variants={fadeIn("right", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="w-1/2 lg:w-1/3 flex mx-auto flex-col lg:flex-row justify-center ">
          <Lottie animationData={Mobile} loop={true} />
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
      icon={FaMobileAlt}
      iconColor="text-blue-600"
      title="Native Mobile App Development"
      description="Our native mobile app developers can build apps that fit all your needs, from security to design."
    />
    <ServiceCard
      icon={FaMobileAlt}
      iconColor="text-blue-600"
      title="Hybrid Mobile App Development"
      description="We help you develop apps that are fully functional on different devices, leveraging a unique blend of technologies."
    />
    <ServiceCard
      icon={FaMicrochip}
      iconColor="text-blue-600"
      title="Wearables and Embedded Software"
      description="We can create companion apps for a number of wearable devices, integrate with smart devices or proprietary peripherals."
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

export default MobileServices;
