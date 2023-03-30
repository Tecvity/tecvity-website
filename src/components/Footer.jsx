import React from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-main via-green-700 to-green-900 font-first  py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 text-white md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg underline text-white  hover:text-green-900 font-bold mb-4">
              Services
            </h3>
            <ul>
              <li className="hover:text-green-900 ">Web App Development</li>
              <li className="hover:text-green-900 ">Mobile App Development</li>
              <li className="hover:text-green-900 ">Custom Software Development</li>
              <li className="hover:text-green-900 ">UI/UX Design</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg underline hover:text-green-900 text-white font-bold mb-4">
              Solutions
            </h3>
            <ul>
              <li className="hover:text-green-900 ">Azure</li>
              <li className="hover:text-green-900 ">AWS</li>
              <li className="hover:text-green-900 ">Cloud Migration</li>
              <li className="hover:text-green-900 ">Cyber Security</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg underline hover:text-green-900  text-white font-bold mb-4">
              Contact Us
            </h3>
            <p className="mb-2 hover:text-green-900 ">
              <FaPhone className="inline-block mr-2" /> +92-308-8438733
            </p>
            <p className="mb-2 hover:text-green-900 ">
              <FaEnvelope className="inline-block mr-2" /> hello@tecvity.co
            </p>
            <p c>Gujranwala, Pakistan</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
