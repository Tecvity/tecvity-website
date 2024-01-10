import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import WhatWe from "../assets/WhatWeDo.json";
import WhatWe2 from "../assets/hero-left.json";

const services = [
  {
    name: "UI/UX Design",
    description:
      "We create user-friendly and visually appealing interfaces that meet your goals. Our focus is on user experience and design principles.",
    link: "Learn More",
    href: "/services/userinterface",
  },
  {
    name: "Mobile Development",
    description:
      "Custom development of mobile applications for iOS and Android platforms",
    link: "Learn More",
    href: "/services/mobiledevelopment",
  },
  {
    name: "Graphic Design",
    description:
      "Creation of visually stunning graphics and designs for branding, marketing, and web applications.",
    link: "Learn More",
    href: "/services/graphicdesign",
  },
  {
    name: "Web Development",
    description:
      "We bring your website to life with efficient, optimized code. We offer full-service web development fast, secure, and search engine friendly.",
    link: "Learn More",
    href: "/services/webdevelopment",
  },
  {
    name: "CyberSecurity",
    description:
      "Comprehensive cybersecurity services to ensure the security and protection of your software systems and data.",
    link: "Learn More",
    href: "/services/cybersecurity",
  },
  {
    name: "DevOps",
    description:
      "Streamlined and efficient software development and deployment processes through automation and collaboration.",
    link: "Learn More",
    href: "/services/devops",
  },
  {
    name: "QA & Testing",
    description:
      "Rigorous testing and quality assurance services to ensure the reliability and functionality of software solutions.",
    link: "Learn More",
    href: "/services/qatesting",
  },
  {
    name: "Custom Software Development",
    description:
      "Customized software development services to meet the unique needs and requirements of each client.",
    link: "Learn More",
    href: "/services/customservices",
  },
];

function WhatWeDo() {
  return (
    <div id="services" className="font-first pt-64 pb-64">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row ">
          {/* text and image */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0">
            <h2 className="lg:text-7xl text-5xl text-center lg:text-left text-main mb-6">
              What We Do
            </h2>
            <h3 className="max-w[455px] text-center lg:text-left mb-16">
              Solve Your Toughest Challenges
            </h3>
            <div className="left-0 top-0 mt-12 hidden lg:block">
              <Lottie animationData={WhatWe} loop={true} />
            </div>
            <div
              className="left-0 top-0 mt-40
              hidden lg:block">
              <Lottie animationData={WhatWe2} loop={true} />
            </div>
          </motion.div>
          {/* services */}
          <div>
            {/* service list */}
            <div>
              {services.map((service, index) => {
                const { name, description, link, href } = service;
                return (
                  <motion.div
                    variants={fadeIn("right", 0.3)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.3 }}
                    className="border-b border-white/20 h-[200px] lg:h-[146px] mb-[38px] flex"
                    key={index}>
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] text-main tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      <Link
                        to={href}
                        className="btn w-9 h-9 mb-[42px] flex justify-center items-center">
                        <BsArrowUpRight />
                      </Link>
                      <Link
                        to={href}
                        className="text-gradient hover:text-xl text-xs border-2 p-2 ml-3 lg:border-0 rounded-full border-main">
                        {link}
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatWeDo;
