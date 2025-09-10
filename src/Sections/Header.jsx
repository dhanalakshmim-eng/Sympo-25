import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCalendarDays, faPhone, faHouse } from "@fortawesome/free-solid-svg-icons";
// import TechLogo from '../utils/Img/TechLogo.jpg';
import logo from "../assets/symposium/NewTechLOGO.png";
import "animate.css";

const Header = () => {
  // State to manage the menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to handle menu toggle
  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to close the menu when a link is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Get current pathname from location
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-md border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
  <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
    <div className="flex items-center glitch-wrapper">
      <img
        src={logo}
        alt="Technovanza Logo"
        className=" w-20 h-10 sm:w-22 sm:h-10 md:w-22 md:h-10 lg:w-24 lg:h-12 xl:w-24 xl:h-12 mr-2 object-cover"
      />
      {/* <span className="self-center text-2xl font-semibold whitespace-nowrap font-collegefont text-white">
        TECHNOVANZA
      </span> */}
    </div>
          </a>
          <button
      onClick={handleToggle}
      type="button"
      className="inline-flex items-center p-2 w-10 h-10 bg-transparent justify-center text-sm text-white md:hidden"
      aria-controls="navbar-default"
      aria-expanded={isMenuOpen}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        className={`w-6 h-6 transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'rotate-180' : ''}`}
      >
        {/* Hamburger Icon */}
        {!isMenuOpen ? (
          <path
            fill="#ffffff"
            d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"
          />
        ) : (
          // Close (X) Icon
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#ffffff" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
        )}
      </svg>
    </button>
    <div
  className={`${
    isMenuOpen ? "block animate__animated animate__fadeInDown duration-500" : "hidden animate__animated animate__fadeInDown"
  } w-full flex justify-center items-center md:block md:w-auto transition-all duration-300 ease-in-out bg-transparent md:bg-transparent`}
  id="navbar-default"
>
  <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 text-2xl rounded-lg bg-transparent md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent">
    <li>
      <Link
        to="/"
        className={`font-collegefont block py-2 px-3 rounded md:bg-transparent md:p-0 ${
          currentPath === "/" ? "text-[#fc03e3] bg-gradient-to-br from-[#fc03e3] to-[#a6033c] bg-clip-text text-transparent" : "text-white"
        } hover:bg-gradient-to-br hover:from-[#fc03e3] hover:to-[#a6033c] hover:bg-clip-text hover:text-transparent `}
        aria-current={currentPath === "/" ? "page" : undefined}
        onClick={ () => {
          closeMenu();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      >
        HOME
      </Link>
    </li>
    <li>
      <Link
        to="/about"
        className={`font-collegefont block py-2 px-3 rounded md:bg-transparent md:p-0 ${
          currentPath === "/about" ? "text-[#fc03e3] bg-gradient-to-br from-[#fc03e3] to-[#a6033c] bg-clip-text text-transparent" : "text-white"
        } hover:bg-gradient-to-br hover:from-[#fc03e3] hover:to-[#a6033c] hover:bg-clip-text hover:text-transparent`}
        onClick={closeMenu}
      >
        ABOUT
      </Link>
    </li>
    <li>
      <Link
        to="/events"
        className={`font-collegefont block py-2 px-3 rounded md:bg-transparent md:p-0 ${
          currentPath === "/events" ? "text-[#fc03e3] bg-gradient-to-br from-[#fc03e3] to-[#a6033c] bg-clip-text text-transparent" : "text-white"
        } hover:bg-gradient-to-br hover:from-[#fc03e3] hover:to-[#a6033c] hover:bg-clip-text hover:text-transparent`}
        onClick={() => {
          closeMenu();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      >
        EVENTS
      </Link>
    </li>
    <li>
      <Link
        to="/contact"
        className={`font-collegefont block py-2 px-3 rounded md:bg-transparent md:p-0 ${
          currentPath === "/contact" ? "text-[#fc03e3] bg-gradient-to-br from-[#fc03e3] to-[#a6033c] bg-clip-text text-transparent" : "text-white"
        } hover:bg-gradient-to-br hover:from-[#fc03e3] hover:to-[#a6033c] hover:bg-clip-text hover:text-transparent`}
        onClick={() => {
          closeMenu();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      >
        CONTACT
      </Link>
    </li>
  </ul>
</div>

        </div>
      </nav>
      {/* Add padding to the main content to avoid overlap */}
      <div className="pt-16">
        {/* Main content goes here */}
      </div>
    </>
  );
};

export default Header;
