import React, { useState } from "react";
import { nav } from "../../data";
import { FaCaretDown } from "react-icons/fa";

const MobileNav = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="bg-main font-first text-black w-full h-full">
      <ul className="h-full flex flex-col text-black justify-center items-center gap-y-8">
        {nav.map((item, index) => {
          const { href, name } = item;

          if (name === "Services") {
            return (
              <li key={index} className="text-black relative">
                <div className=" text-black ">
                  <button
                    className="link text-black text-xl hover:text-black hover:underline transition focus:outline-none"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                    {name}
                    <FaCaretDown className="inline-block ml-1" />
                  </button>
                </div>
                <ul
                  className={`absolute mt-2 py-2 w-48 bg-white text-sm font-first rounded-md shadow-lg ${
                    isDropdownOpen ? "" : "hidden"
                  }`}>
                  <div className="flex mt-1 ml-4 flex-col w-full">
                    <div className="">
                      <span className="text-black underline">
                        Software Services
                      </span>
                      <li>
                        <a
                          href="/services/mobiledevelopment"
                          className="block px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 transition duration-150 ease-in-out">
                          Mobile Development
                        </a>
                      </li>
                      <li>
                        <a
                          href="/services/webdevelopment"
                          className="block px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 transition duration-150 ease-in-out">
                          Web Development
                        </a>
                      </li>
                      <li>
                        <a
                          href="/services/customservices"
                          className="block px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 transition duration-150 ease-in-out">
                          Custom Software
                        </a>
                      </li>
                    </div>
                    <div className="">
                      <span className="text-black underline">
                        Engineering Services
                      </span>
                      <li>
                        <a
                          href="/services/qatesting"
                          className="block px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 transition duration-150 ease-in-out">
                          QA&Testing
                        </a>
                      </li>

                      <li>
                        <a
                          href="/services/devops"
                          className="block px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 transition duration-150 ease-in-out">
                          Devops
                        </a>
                      </li>
                      <li>
                        <a
                          href="/services/cybersecurity"
                          className="block px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 transition duration-150 ease-in-out">
                          Cyber Security
                        </a>
                      </li>
                    </div>
                    <div className="">
                      <span className="text-black underline">
                        Design Services
                      </span>
                      <li>
                        <a
                          href="/services/graphicdesign"
                          className="block px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 transition duration-150 ease-in-out">
                          Graphic Design
                        </a>
                      </li>
                      <li>
                        <a
                          href="/services/userinterface"
                          className="block px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 transition duration-150 ease-in-out">
                          UI/UX Design
                        </a>
                      </li>
                    </div>
                  </div>
                  <div className="mx-auto flex justify-center">
                    <li>
                      <a
                        href="/services"
                        className="block text-green-500 underline px-2 py-2 text-xl mt-4 hover:bg-gray-100 transition duration-150 ease-in-out">
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
                className="link text-black text-xl hover:text-black hover:underline transition"
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
