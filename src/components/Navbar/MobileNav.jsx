import React, { useState } from "react";
import { nav } from "../../data";
import { FaCaretDown } from "react-icons/fa";

const MobileNav = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="bg-gradient-to-b from-green-400 via-green-700 font-first to-green-900 w-full h-full">
      <ul className="h-full flex flex-col justify-center items-center gap-y-8">
        {nav.map((item, index) => {
          const { href, name } = item;

          if (name === "Services") {
            return (
              <li key={index} className="relative">
                <div className=" text-white hover:text-black">
                  <button
                    className="link text-white text-xl hover:text-black hover:underline transition focus:outline-none"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                    {name}
                    <FaCaretDown className="inline-block ml-1" />
                  </button>
                </div>
                <ul
                  className={`absolute mt-2 py-2 w-48 bg-white text-sm font-first rounded-md shadow-lg ${
                    isDropdownOpen ? "" : "hidden"
                  }`}>
                  <li>
                    <a
                      href="/"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                      Web Development
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                      UI/UX Design
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                      Graphic Design
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                      Mobile Development
                    </a>
                  </li>
                </ul>
              </li>
            );
          }

          return (
            <li key={index}>
              <a
                className="link text-white text-xl hover:text-black hover:underline transition"
                href={href}>
                {name}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MobileNav;
