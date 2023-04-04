import React, { useState, useRef } from "react";
import { nav } from "../../data";
import { FaCaretDown } from "react-icons/fa";

const Nav = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownTimeoutRef = useRef(null);

  function handleMouseLeave() {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 2000);
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
                  className={`${
                    isDropdownOpen ? "block" : "hidden"
                  } absolute mt-2 py-2 font-first w-max bg-white rounded-md shadow-lg z-50`}>
                  <div className="flex mt-4 px-8 flex-row w-full">
                    <div className="mx-4">
                      <span className="text-black underline">
                        Software Services
                      </span>
                      <li>
                        <a
                          href="/services/mobiledevelopment"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition duration-150 ease-in-out">
                          Mobile Development
                        </a>
                      </li>
                      <li>
                        <a
                          href="/services/webdevelopment"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition duration-150 ease-in-out">
                          Web Development
                        </a>
                      </li>
                      <li>
                        <a
                          href="/services/customservices"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition duration-150 ease-in-out">
                          Custom Software
                        </a>
                      </li>
                    </div>
                    <div className="mx-4">
                      <span className="text-black underline">
                        Engineering Services
                      </span>
                      <li>
                        <a
                          href="/services/qatesting"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition duration-150 ease-in-out">
                          QA&Testing
                        </a>
                      </li>

                      <li>
                        <a
                          href="/services/devops"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition duration-150 ease-in-out">
                          Devops
                        </a>
                      </li>
                      <li>
                        <a
                          href="/services/cybersecurity"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition duration-150 ease-in-out">
                          Cyber Security
                        </a>
                      </li>
                    </div>
                    <div className="mx-4">
                      <span className="text-black underline">
                        Design Services
                      </span>
                      <li>
                        <a
                          href="/services/graphicdesign"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition duration-150 ease-in-out">
                          Graphic Design
                        </a>
                      </li>
                      <li>
                        <a
                          href="/services/userinterface"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition duration-150 ease-in-out">
                          UI/UX Design
                        </a>
                      </li>
                    </div>
                  </div>
                  <div className="mx-auto flex justify-center">
                    <li>
                      <a
                        href="/services"
                        className="block text-green-500 underline px-4 py-2 text-xl mt-4 hover:bg-gray-100 transition duration-150 ease-in-out">
                        See more..
                      </a>
                    </li>
                  </div>
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
