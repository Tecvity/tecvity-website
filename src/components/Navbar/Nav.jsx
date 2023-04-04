import React, { useState, useRef } from "react";
import { nav } from "../../data";
import { FaCaretDown } from "react-icons/fa";

const Nav = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownTimeoutRef = useRef(null);

  function handleMouseLeave() {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 1500);
  }

  function handleMouseEnter() {
    if (dropdownTimeoutRef.current !== null) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setIsDropdownOpen(true);
  }

  function handleServiceClick() {
    window.location.href = "/services";
  }

  return (
    <nav>
      <ul className="flex gap-x-10">
        {nav.map((item, index) => {
          const { href, name } = item;

          if (name === "Services") {
            return (
              <li key={index} className="relative">
                <div className="text-white hover:text-black">
                  <button
                    className="transition focus:text-black focus:underline focus:outline-none hover:text-red hover:underline"
                    onMouseEnter={handleMouseEnter}
                    onClick={handleServiceClick}
                    onMouseLeave={handleMouseLeave}>
                    {name}
                    <FaCaretDown className="inline-block ml-1" />
                  </button>
                </div>
                <ul
                  className={`absolute mt-2 py-2 w-48 bg-white font-first text-sm rounded-md shadow-lg ${
                    isDropdownOpen ? "" : "hidden"
                  }`}>
                  <li>
                    <a
                      href="/services/mobiledevelopment"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                      Mobile Development
                    </a>
                  </li>
                  <li>
                    <a
                      href="/services/webdevelopment"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                      Web Development
                    </a>
                  </li>
                  <li>
                    <a
                      href="/services/graphicdesign"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                      Graphic Design
                    </a>
                  </li>
                  <li>
                    <a
                      href="/services/userinterface"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                      UI/UX Design
                    </a>
                  </li>
                   <li>
                    <a
                      href="/services/qatesting"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                      QA & Testing
                    </a>
                  </li>
                   <li>
                    <a
                      href="/services/customservices"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                      Custom Software
                    </a>
                  </li>
                   <li>
                    <a
                      href="/services/devops"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                      Devops
                    </a>
                  </li>
                   <li>
                    <a
                      href="/services/cybersecurity"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                      Cyber Security
                    </a>
                  </li>
                     <li>
                    <a
                      href="/services"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                      See more..
                    </a>
                  </li>
                </ul>
              </li>
            );
          }

          return (
            <li key={index}>
              <a
                className="hover:text-black hover:underline transition"
                href={href}>
                {name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
