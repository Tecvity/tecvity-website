import React, { useState, useEffect } from "react";
// import data
import { header } from "../../data";
// import icons
import { HiMenuAlt4, HiOutlineX } from "react-icons/hi";
// import components
import MobileNav from "./MobileNav";
import Nav from "./Nav";
import { Link } from "react-scroll";

const Header = () => {
  // mobile nav state
  const [mobileNav, setMobileNav] = useState(false);
  // header state
  const [isActive, setIsActive] = useState(false);
  // destructure header data
  const { logo } = header;
  // scroll event
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });
  return (
    <header
      className={`${
        isActive ? "lg:top-0  shadow-2xl" : "lg:top-[0px]"
      } py-6 lg:py-2 bg-transparent fixed top-0 w-full hover:bg-green-500 transition-all z-20`}>
      <div className="container sticky top-0 mx-auto flex justify-between items-center">
        {/* logo */}
        <a href="/" className=" w-2/5 lg:w-1/6">
          <img src={logo} alt="Tecvity Logo" />
        </a>
        {/* nav - initially hidden - show on desktop mode */}
        <div className="hidden text-lg font-first text-gray-200 w-2/5 lg:flex">
          <Nav />
        </div>
        <Link to="contact">
          <button
            type="button"
            className="text-black font-first bg-main hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-900 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-md px-8 py-3 hidden lg:flex text-center mr-4 mb-4">
            Contact Now
          </button>
        </Link>
        {/* cta button - initially hidden - show on desktop mode */}

        {/* mobile nav trigger btn - hidden on desktop */}
        <button className="lg:hidden" onClick={() => setMobileNav(!mobileNav)}>
          {mobileNav ? (
            <HiOutlineX className="text-3xl text-white" />
          ) : (
            <HiMenuAlt4 className="text-3xl text-white" />
          )}
        </button>
        {/* mobile nav - hidden on desktop */}
        <div
          className={`${
            mobileNav ? "left-0" : "-left-full"
          }  fixed top-0 bottom-0 w-[60vw] lg:hidden transition-all`}>
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
