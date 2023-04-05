import React from "react";
import Lottie from "lottie-react";
import button from "../../assets/mainbutton.json";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import BgVideo from "../../assets/videos/mainVideo.mp4";
import { Link } from "react-scroll";
import ServiceCard from "../../components/ServiceCard";
import MainServiceCard from "../../components/MainServiceCard";
import { FaArrowRight } from "react-icons/fa";
import WhyChooseUs from "../../components/WhyChooseUs";

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
      {/* LEFT SİDE DİV */}
      <div className="font-first mt-36 lg:mx-8 py-60 flex flex-col lg:flex-row ">
        <div className="flex lg:w-1/2 my-auto flex-col">
          <div className="text-main lg:ml-5 my-4 text-center text-3xl lg:text-6xl">
            <h1>Software Development</h1>
          </div>
          <div className="text-white lg:ml-5 my-4 text-center  text-xl lg:text-3xl">
            <p>
              Named among top 1% global companies by Clutch, we have the trust
              of 500+ companies when it comes to bespoke software solutions.
            </p>
          </div>
          <Link to="contact">
            <button
              type="button"
              className="text-black flex justify-center mx-auto  my-4 font-first bg-main hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm lg:text-lg px-6 lg:px-8 py-4 lg:py-4 text-center">
              Explore Our Digital Solutions
            </button>
          </Link>
        </div>
        {/* RİGHT SİDE DİV */}
        <div className="flex justify-items-end mx-auto flex-col lg:flex-row">
          <div className="mt-24 lg:my-auto">
            <div className="flex-col lg:flex-row flex">
              <MainServiceCard
                icon={FaArrowRight}
                iconColor="text-blue-700"
                title="Web Development"
              />
              <MainServiceCard
                icon={FaArrowRight}
                iconColor="text-blue-700"
                title="Mobile Development"
              />
            </div>
            <div className="flex-col lg:flex-row flex">
              <MainServiceCard
                icon={FaArrowRight}
                iconColor="text-blue-700"
                title="Custom Software"
              />
              <MainServiceCard
                icon={FaArrowRight}
                iconColor="text-blue-700"
                title="QA & Testing"
              />
            </div>
            <div className="flex-col lg:flex-row flex">
              <MainServiceCard
                icon={FaArrowRight}
                iconColor="text-blue-700"
                title="DevOps"
              />
              <MainServiceCard
                icon={FaArrowRight}
                iconColor="text-blue-700"
                title="Cyber Security"
              />
            </div>
            <div className="flex-col lg:flex-row flex">
              <MainServiceCard
                icon={FaArrowRight}
                iconColor="text-blue-700"
                title="Graphic Design"
              />
              <MainServiceCard
                icon={FaArrowRight}
                iconColor="text-blue-700"
                title="User Interface"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="py-60 lg:mx-24">
        <h1 className="text-3xl font-bold mt-30 text-center mb-4 lg:mb-8 text-main lg:text-6xl">
          Tecvity Services For You
        </h1>
        <div className="flex flex-col lg:flex-row">
          <ServiceCard
            icon={FaArrowRight}
            iconColor="text-blue-600"
            title="Web Development"
            description="We build modern, secure and scalable web applications to simplify business processes for you."
          />
          <ServiceCard
            icon={FaArrowRight}
            iconColor="text-blue-600"
            title="Mobile Development"
            description="We deliver more than just apps. We deliver experiences, fast, responsive and highly scalable mobile apps."
          />
          <ServiceCard
            icon={FaArrowRight}
            iconColor="text-blue-600"
            title="Custom Software"
            description="
Our full-stack engineering experts develop enterprise-grade solutions tailored to your specific business needs."
          />
        </div>
        <div className="flex flex-col lg:flex-row">
          <ServiceCard
            icon={FaArrowRight}
            iconColor="text-blue-600"
            title="QA & Testing"
            description="Spend less time troubleshooting issues and more time developing products that people love to use!"
          />
          <ServiceCard
            icon={FaArrowRight}
            iconColor="text-blue-600"
            title="DevOps"
            description="We’ll speed up your deployment, simplify updates and upgrades, and help you achieve guaranteed higher uptime."
          />
          <ServiceCard
            icon={FaArrowRight}
            iconColor="text-blue-600"
            title="Cyber Security"
            description="From proactive planning to crisis management, we will help you overcome your most complex cybersecurity issues."
          />
        </div>
        <div className="flex mx-auto justify-center flex-col lg:flex-row">
          <ServiceCard
            icon={FaArrowRight}
            iconColor="text-blue-600"
            title="Graphic Design"
            description="Your one-stop shop for all your graphic design requirments"
          />
          <ServiceCard
            icon={FaArrowRight}
            iconColor="text-blue-600"
            title="User Interface"
            description="Want to build a remarkable product that is an instant win? We create meaningful experiences and turn them into tangible business results."
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

export default MainServices;
