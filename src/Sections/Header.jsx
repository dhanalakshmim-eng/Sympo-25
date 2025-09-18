import React, { useState } from "react"; 
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/symposium/Logo/spidy logo.png"; 
import "animate.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-md border-gray-700">
        <div className="flex items-center justify-between w-full px-0 py-0">
          {/* Logo - Stick to top-left */}
          {/* <div className="max-w-screen-xl flex items-left"> */}
          <a href="/" className="h-20 flex items-center ml-4">
            <img
              src={logo}
              alt="Technovanza Logo"
              className="w-16 h-20 sm:w-16 sm:h-20 md:w-20 md:h-24 object-contain"
            />
          </a>
          {/* </div> */}

          {/* Right Side Nav */}
          <div className="flex items-center">
            {/* Hamburger Button */}
            <button
              onClick={handleToggle}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 bg-transparent justify-center text-sm text-white md:hidden"
              aria-controls="navbar-default"
              aria-expanded={isMenuOpen}
            >
              {!isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                  className="w-6 h-6">
                  <path
                    fill="#ffffff"
                    d="M0 96c0-17.7 14.3-32 32-32h384c17.7 
                       0 32 14.3 32 32s-14.3 32-32 32H32C14.3 
                       128 0 113.7 0 96zm0 160c0-17.7 
                       14.3-32 32-32h384c17.7 0 32 14.3 
                       32 32s-14.3 32-32 32H32c-17.7 
                       0-32-14.3-32-32zm416 192H32c-17.7 
                       0-32-14.3-32-32s14.3-32 
                       32-32h384c17.7 0 32 14.3 
                       32 32s-14.3 32-32 32z"
                  />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"
                  className="w-6 h-6">
                  <path
                    fill="#ffffff"
                    d="M342.6 150.6c12.5-12.5 
                       12.5-32.8 0-45.3s-32.8-12.5-45.3 
                       0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 
                       0s-12.5 32.8 0 45.3L146.7 256 41.4 
                       361.4c-12.5 12.5-12.5 32.8 0 
                       45.3s32.8 12.5 45.3 0L192 
                       301.3 297.4 406.6c12.5 12.5 
                       32.8 12.5 45.3 0s12.5-32.8 
                       0-45.3L237.3 256 342.6 150.6z"
                  />
                </svg>
              )}
            </button>

            {/* Navbar Links */}
            <div
              className={`${
                isMenuOpen
                  ? "block animate__animated animate__fadeInDown duration-500"
                  : "hidden"
              } md:block`}
              id="navbar-default"
            >
              <ul className="flex flex-col md:flex-row md:space-x-8 text-2xl md:mt-0 mt-4 p-4 md:p-0">
                {["/", "/about", "/events", "/contact"].map((path, idx) => {
                  const labels = ["HOME", "ABOUT", "EVENTS", "CONTACT"];
                  return (
                    <li key={path}>
                      <Link
                        to={path}
                        className={`font-collegefont block py-2 px-3 md:p-0 ${
                          currentPath === path
                            ? "text-[#E8BCB9] bg-gradient-to-br from-[#E8BCB9] to-[#AE445A] bg-clip-text text-transparent"
                            : "text-white"
                        } hover:bg-gradient-to-br hover:from-[#E8BCB9] hover:to-[#AE445A] hover:bg-clip-text hover:text-transparent 
                        font-bold transition duration-300`}
                        onClick={closeMenu}
                      >
                        {labels[idx]}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* Prevent content overlap */}
      <div className="pt-16"></div>
    </>
  );
};

export default Header;
