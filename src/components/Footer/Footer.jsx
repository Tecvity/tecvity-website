import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaMastodon,
} from "react-icons/fa";
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-main via-green-500 to-main font-first  py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 text-black md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg underline text-black  hover:text-green-900 font-bold mb-4">
              Services
            </h3>
            <ul>
              <Link to="/services/webdevelopment">
                <li className="hover:text-green-600 ">Web App Development</li>
              </Link>
              <Link to="/services/mobiledevelopment">
                <li className="hover:text-green-600 ">
                  Mobile App Development
                </li>
              </Link>
              <Link to="/services/userinterface">
                <li className="hover:text-green-600 ">
                  User Interface
                </li>
              </Link>
              <Link to="/services/graphicdesign">
                <li className="hover:text-green-600 ">UI/UX Design</li>
              </Link>
            </ul>
          </div>
          <div>
            <h3 className="text-lg underline hover:text-green-600 text-black font-bold mb-4">
              Solutions
            </h3>
            <ul>
              <li className="hover:text-green-600 ">Azure</li>
              <li className="hover:text-green-600 ">AWS</li>
              <li className="hover:text-green-600 ">Cloud Migration</li>
              <li className="hover:text-green-600 ">Cyber Security</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg underline hover:text-green-600  text-black font-bold mb-4">
              Contact Us
            </h3>
            <p className="mb-2 hover:text-green-600 ">
              <FaPhone className="inline-block mr-2" /> +92-308-8438733
            </p>
            <p className="mb-2 hover:text-green-600 ">
              <FaEnvelope className="inline-block mr-2" /> hello@tecvity.co
            </p>
            <p>Gujranwala, Pakistan</p>
            <div className="flex mt-4">
              <a
                href="https://github.com/tecvity"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4">
                <FaGithub className="hover:text-green-600" />
              </a>
              <a
                href="https://www.linkedin.com/company/tecvity"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4">
                <FaLinkedin className="hover:text-green-600" />
              </a>
              <a
                href="https://twitter.com/tecvity"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4">
                <FaTwitter className="hover:text-green-600" />
              </a>
              <a
                href="https://www.instagram.com/tecvity/"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4">
                <FaInstagram className="hover:text-green-600" />
              </a>
              <a
                href="https://www.youtube.com/channel/your-channel"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4">
                <FaYoutube className="hover:text-green-600" />
              </a>
              <a
                href="https://mastodon.social/@your-username"
                target="_blank"
                rel="noopener noreferrer">
                <FaMastodon className="hover:text-green-600" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
