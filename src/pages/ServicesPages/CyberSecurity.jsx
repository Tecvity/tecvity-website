import React from "react";
import Lottie from "lottie-react";
import button from "../../assets/mainbutton.json";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import BgVideo from "../../assets/videos/CyberSecurityVideo.mp4";
import { Link } from "react-scroll";
import Cyber from "../../assets/Services/Cyber.json";
import ServiceCard from "../../components/ServiceCard";
import { FaShieldAlt } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";
import { MdSecurity } from "react-icons/md";
import { BiCloud } from "react-icons/bi";
import { IoIosPhonePortrait } from "react-icons/io";
import WhyChooseUs from "../../components/WhyChooseUs";

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
            className="absolute top-48 lg:top-64 left-0 right-0 bottom-0 font-first pb-4 lg:pb-24 text-white text-center items-center flex flex-col z-10">
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
          className="w-1/2 lg:w-1/3 flex mx-auto flex-col lg:flex-row justify-center ">
          <Lottie animationData={Cyber} loop={true} />
        </motion.div>
      </div>
      <div className="pt-60">
        <h1 className="text-2xl mt-30 text-center mb-4 lg:mb-8 text-main lg:text-4xl">
          Our Services
        </h1>
        <div className="flex flex-col lg:flex-row">
          <ServiceCard
            icon={FaShieldAlt}
            iconColor="text-blue-600"
            title="Penetration Testing"
            description="Simulating cyber attacks on a company's network or web applications to identify vulnerabilities and weaknesses."
          />
          <ServiceCard
            icon={FaShieldAlt }
            iconColor="text-blue-600"
            title="Vulnerability Management"
            description="Identifying and managing vulnerabilities in a company's network, software, and systems."
          />
          <ServiceCard
            icon={FaShieldAlt }
            iconColor="text-blue-600"
            title="Incident Response"
            description="Quickly identifying and responding to cyber security incidents to minimize damage and restore normal operations."
          />
        </div>
        <div className="flex flex-col lg:flex-row">
          <ServiceCard
            icon={FaShieldAlt }
            iconColor="text-blue-600"
            title="Security Monitoring"
            description="Constantly monitoring a company's network and systems for signs of cyber attacks or intrusions."
          />
          <ServiceCard
            icon={FaShieldAlt }
            iconColor="text-blue-600"
            title="Compliance Management"
            description="Ensuring that a company's security practices comply with relevant laws, regulations, and industry standards."
          />
          <ServiceCard
            icon={FaShieldAlt }
            iconColor="text-blue-600"
            title="Identity and Access Management (IAM)"
            description="Managing user identities and access rights to protect against unauthorized access to sensitive data."
          />
        </div>
        <div className="flex flex-col lg:flex-row">
          <ServiceCard
            icon={FaShieldAlt }
            iconColor="text-blue-600"
            title="Data Loss Prevention (DLP) Services"
            description="Identifying, monitoring, and protecting sensitive data from unauthorized access or loss."
          />
          <ServiceCard
            icon={MdSecurity }
            iconColor="text-blue-600"
            title="Security Information & Event Management (SIEM)"
            description="Collecting, analyzing, and responding to security-related data from various sources, such as network devices, servers, and applications."
          />
          <ServiceCard
            icon={BiCloud }
            iconColor="text-blue-600"
            title="Cloud Security Services"
            description="Securing the company's data and applications hosted on cloud platforms like AWS, Azure and GCP."
          />
        </div>
        <div className="flex mx-auto justify-center flex-col lg:flex-row">
          <ServiceCard
            icon={RiComputerLine }
            iconColor="text-blue-600"
            title="Endpoint Security Services"
            description="Protecting company's devices like laptops, smartphones, and tablets from security threats and vulnerabilities."
          />
          <ServiceCard
            icon={IoIosPhonePortrait }
            iconColor="text-blue-600"
            title="Uncover Your Risks Now!"
            description="Protect Your Sensitive Data"
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

export default CyberSecurtiy;
