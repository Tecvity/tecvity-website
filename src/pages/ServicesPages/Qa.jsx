import React from "react";
import Lottie from "lottie-react";
import button from "../../assets/mainbutton.json";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import BgVideo from "../../assets/videos/QaVideo.mp4";
import { Link } from "react-scroll";
import Test from "../../assets/Services/test.json";
import ServiceCard from "../../components/ServiceCard";
import {
  FaBug,
  FaChartLine,
  FaCheckCircle,
  FaShieldAlt,
  FaUser,
} from "react-icons/fa";
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
      <div className="pt-60">
        <h1 className="text-2xl mt-30 text-center mb-4 lg:mb-8 text-main lg:text-4xl">
          Our Services
        </h1>
        <div className="flex flex-col lg:flex-row">
          <ServiceCard
            icon={FaBug}
            iconColor="text-red-600"
            title="Functional Testing"
            description="Test the software's functionality, usability, and compatibility."
          />
          <ServiceCard
            icon={FaChartLine}
            iconColor="text-blue-600"
            title="Performance Testing"
            description="Evaluate the software's performance under different loads and environments."
          />
          <ServiceCard
            icon={FaCheckCircle}
            iconColor="text-purple-600"
            title="Prototyping"
            description="Create a working model of the product for testing and demonstration purposes."
          />
        </div>
        <div className="flex flex-col lg:flex-row">
          <ServiceCard
            icon={FaCheckCircle}
            iconColor="text-green-600"
            title="Unit Testing"
            description="Test individual units and components such as functions and methods."
          />
          <ServiceCard
            icon={FaUser}
            iconColor="text-blue-600"
            title="Integration Testing"
            description="Verify that software components are integrated as specified."
          />
          <ServiceCard
            icon={FaShieldAlt}
            iconColor="text-yellow-600"
            title="System Testing"
            description="Verify that the entire software system meets specified requirements."
          />
        </div>
        <div className="flex mx-auto justify-center flex-col lg:flex-row">
          <ServiceCard
            icon={FaShieldAlt}
            iconColor="text-indigo-600"
            title="Acceptance Testing"
            description="Verify your customer's acceptance criteria."
          />
          <ServiceCard
            icon={FaUser}
            iconColor="text-blue-600"
            title="Regression Testing"
            description="Ensure that changes and updates do not introduce new bugs."
          />
        <ServiceCard
          icon={FaUser}
          iconColor="text-blue-600"
          title="User Acceptance Testing (UAT)"
          description="Evaluate if your software meets end-users' needs."
        />
        </div>
        <div className="flex mx-auto justify-center flex-col lg:flex-row">
          <ServiceCard
            icon={FaCheckCircle}
            iconColor="text-pink-600"
            title="Security Testing"
            description="Evaluate the software's security and identify vulnerabilities."
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
            className="text-black mt-12 mb-80 mx-auto flex justify-center font-first bg-main hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm lg:text-lg px-6 lg:px-8 py-4 lg:py-4 text-center">
            Get in Touch
          </motion.button>
        </Link>
      </div>
      <WhyChooseUs />
    </div>
  );
}

export default MobileServices;
