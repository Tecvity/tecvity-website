import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    const name = form.current.user_name.value;
    const email = form.current.user_email.value;
    const message = form.current.message.value;

    if (!name || !email || !message) {
      toast.error("Please fill in all fields.");
      return;
    }
    emailjs
      .sendForm(
        "service_kj89owr",
        "template_cbk7yl9",
        form.current,
        "hkQ-2hdK6LTVFgJnT"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Email sent successfully!");
        },
        (error) => {
          console.log(error.text);
          toast.error("Error sending email. Please try again.");
        }
      );
  };

  return (
    <div>
      <section className="text-white bg-black mb-16 font-first flex">
        <div className="px-5 py-24 mx-auto">
          <motion.div variants={fadeIn('left', 0.3)} initial="hidden" whileInView={"show"} viewport={{once:false, amount: 0.3}} className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-4xl lg:text-7xl mb-4 lg:mb-12 text-main">
              Contact Us
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed ">
              Have some ideas to discuss with Tecvity? Fill the form below!
            </p>
          </motion.div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <motion.form variants={fadeIn('right', 0.3)} initial="hidden" whileInView={"show"} viewport={{once:false, amount: 0.3}} ref={form} onSubmit={sendEmail} className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label for="name" className="leading-7 text-sm text-gray-300">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    for="email"
                    className="leading-7 text-sm text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    for="message"
                    className="leading-7 text-sm text-gray-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button typeof="submit" value="send" className="flex mx-auto text-black bg-main border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Send
                </button>
              </div>
            </motion.form>
            <ToastContainer />
          </div>
        </div>
      </section>
    </div>
  );
};


export default ContactUs