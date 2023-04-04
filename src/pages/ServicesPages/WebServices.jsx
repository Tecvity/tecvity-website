import React from "react";
import Lottie from "lottie-react";
import button from "../../assets/mainbutton.json";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import BgVideo from "../../assets/videos/WebVideo.mp4";
import { Link } from "react-scroll";
import Web from "../../assets/Services/webb.json";
import { FaLaptopCode, FaShoppingCart, FaTools } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";
import { IoIosPhonePortrait } from "react-icons/io";
import ServiceCard from "../../components/ServiceCard";
import WhyChooseUs from "../../components/WhyChooseUs";

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
              Web App Development
            </p>
            <h1 className="bg-gradient-to-r from-main bg-clip-text via-blue-200 to-green-800 inline-block text-transparent font-bold py-4 lg:pb-14 text-5xl hover:text-main lg:text-7xl">
              Power Your Business With Future Ready Web Apps{" "}
            </h1>
            <p className="text-2xl py-4 text-white hover:text-main">
              We build modern, secure and scalable web applications to simplify
              business processes for you.
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
          <Lottie animationData={Web} loop={true} />
        </motion.div>
      </div>
      <div className="pt-60">
        <h1 className="text-2xl mt-30 text-center mb-4 lg:mb-8 text-main lg:text-4xl">
          Our Services
        </h1>
        <div className="flex flex-col lg:flex-row">
          <ServiceCard
            icon={FaLaptopCode}
            iconColor="text-blue-600"
            title="Experience Design"
            description="Our extensive expertise in UI/UX design and front-end development allows us to create delightful user experiences."
          />
          <ServiceCard
            icon={FaLaptopCode}
            iconColor="text-blue-600"
            title="Frontend Development"
            description="We offer full-stack front-end expertise to create innovative, human-centric and goal-oriented web & mobile solutions."
          />
          <ServiceCard
            icon={FaLaptopCode}
            iconColor="text-blue-600"
            title="Backend Development"
            description="We build back-end solutions that are extensible, scalable, and easy to maintain."
          />
        </div>
        <div className="flex flex-col lg:flex-row">
          <ServiceCard
            icon={FaTools}
            iconColor="text-blue-600"
            title="Security Monitoring"
            description="Constantly monitoring a company's network and systems for signs of cyber attacks or intrusions."
          />
          <ServiceCard
            icon={FaLaptopCode}
            iconColor="text-blue-600"
            title="Full Stack Development"
            description="We provide full-spectrum software engineering for the simple to high-performing backend."
          />
          <ServiceCard
            icon={FaShoppingCart}
            iconColor="text-blue-600"
            title="E-Commerce Web Development"
            description="Tkxel can build web apps for e-commerce businesses, including online stores, shopping carts, and payment gateway integration."
          />
        </div>
        <div className="flex mx-auto justify-center flex-col lg:flex-row">
          <ServiceCard
            icon={RiComputerLine}
            iconColor="text-blue-600"
            title="Web App Maintenance And Updates"
            description="After the launch of the app, we provide services to maintain and update the app to fix bugs, improve performance, and add new features."
          />
          <ServiceCard
            icon={IoIosPhonePortrait}
            iconColor="text-blue-600"
            title="Web App Testing"
            description="We test web apps for bugs and other issues before it is launched in the market to ensure that it runs smoothly and is free of any issues."
          />
        </div>
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
      <WhyChooseUs />
    </div>
  );
}

export default Hero;
