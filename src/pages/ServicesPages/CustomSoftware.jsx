import React from "react";
import Lottie from "lottie-react";
import button from "../../assets/mainbutton.json";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import BgVideo from "../../assets/videos/CustomSoftwareVideo.mp4";
import { Link } from "react-scroll";
import Custom from "../../assets/Services/customsofware.json";
import ServiceCardList from "../../components/ServiceCardList";
import { FaShieldAlt } from "react-icons/fa";
import WhyChooseUs from "../../components/WhyChooseUs";


function CustomSoftware() {
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
              Custom Software Development
            </p>
            <h1 className="bg-gradient-to-r from-main bg-clip-text via-blue-200 to-green-800 inline-block text-transparent font-bold py-4 lg:pb-14 text-5xl hover:text-main lg:text-7xl">
              Your Vision, Our Expertise{" "}
            </h1>
            <p className="text-2xl py-4 text-white hover:text-main">
              Our full-stack engineering experts develop enterprise-grade
              solutions tailored to your specific business needs.
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
            Your Custom Software Development Partner{" "}
          </h1>
          <p className="text-lg mr-0 mb-5 lg:mr-24 text-white">
            tecvity is a digital innovation hub that can bring your
            world-changing ideas to life. With us on your side, you get access
            to the best of both worlds: top 2% talent on one side, and an
            innovative value-driven approach on the other. We’ve got hundreds of
            emerging tools and technologies that can rocket-launch your product
            into the marketplace. Whether you are an enterprise or a startup we
            will help you craft digital strategies that start with MVPs and end
            with large-scale product development. Our goal is simple: To engage
            your customers, deliver business value and gain competitive
            advantage. Not resting on our laurels, we leverage our years of
            expertise to build future-proof software systems for you. We help
            our clients build user-friendly products that set them up for
            success in the long run.
          </p>
        </motion.div>
        <motion.div
          variants={fadeIn("right", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="w-4/5 lg:w-1/2 flex mx-auto flex-col lg:flex-row justify-center ">
          <Lottie animationData={Custom} loop={true} />
        </motion.div>
      </div>
      <div className="py-60 lg:mx-24">
        <h1 className="text-2xl mt-30 text-center mb-4 lg:mb-8 text-main lg:text-6xl">
          Custom Software Solutions For Business Of Any Size
        </h1>
        <div className="flex flex-col lg:flex-row">
          <ServiceCardList
            icon={FaShieldAlt}
            iconColor="text-blue-600"
            title="Startups"
            description="MVP for quick launch to market"
            description1="Fixed price estimates for clear budgeting."
            description2="Agile practices to accelerate project delivery"
          />
          <ServiceCardList
            icon={FaShieldAlt}
            iconColor="text-blue-600"
            title="SMBs"
            description="Flexible engagement models"
            description1="In-depth domain expertise & industry knowledge"
            description2="Tried-and-tested environment optimization methods"
          />
          <ServiceCardList
            icon={FaShieldAlt}
            iconColor="text-blue-600"
            title="Enterprises"
            description="Consultancy to chalk out a future roadmap"
            description1="Compliance with industry standards and regulations"
            description2="Leverage emerging technologies"
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

export default CustomSoftware;
