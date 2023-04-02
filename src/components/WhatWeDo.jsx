import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";
import Lottie from "lottie-react";
import WhatWe from "../assets/WhatWeDo.json";

const services = [
  {
    name: "UI/UX Design",
    description:
      "We create user-friendly and visually appealing interfaces that meet your goals. Our focus is on user experience and design principles.",
    link: "Learn More",
  },
  {
    name: "Mobile Development",
    description:
      "We bring your website to life with efficient, optimized code. We offer full-service web development fast, secure, and search engine friendly.",
    link: "Learn More",
  },
  {
    name: "Graphic Design",
    description:
      "We offer services to help you reach your target audience and achieve your goals. We develop custom strategies for search engine optimization, social media, and pay-per-click advertising.",
    link: "Learn More",
  },
  {
    name: "Web Development",
    description:
      "We create unique and consistent visual identities that accurately reflect your brand. I offer product branding services to help you launch or rebrand your product effectively.",
    link: "Learn More",
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
            <h2 className="lg:text-7xl text-4xl text-accent mb-6">
              What We Do
            </h2>
            <h3 className="max-w[455px] mb-16">
              Solve Your Toughest Challenges
            </h3>
            <div className="left-0 top-0 hidden lg:block">
              <Lottie animationData={WhatWe} loop={true} />
            </div>
          </motion.div>
          {/* services */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 ">
            {/* service list */}
            <div>
              {services.map((service, index) => {
                const { name, description, link } = service;
                return (
                  <div
                    className="border-b border-white/20 h-[146px] mb-[38px] flex"
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
                        to="contact"
                        className="btn w-9 h-9 mb-[42px] flex justify-center items-center">
                        <BsArrowUpRight />
                      </Link>
                      <Link to="contact" className="text-gradient text-sm">
                        {link}
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default WhatWeDo;
