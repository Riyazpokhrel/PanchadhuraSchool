import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !event.target.closest(".navbar-menu") &&
        !event.target.closest(".menu-button")
      ) {
        setIsMenuOpen(false);
        setActiveDropdown(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-blue-600 text-white p-2 flex flex-wrap justify-between items-start md:flex-row flex-col">
        <div className="flex items-center mb-2 md:mb-0">
          <img className="h-6 sm:h-8 mr-" src="dist/calllogo.png" alt="Phone" />
          <span>+977-9817605215</span>
        </div>
        <div className="flex items-center mb-2 md:mb-0 ml-1.5">
          <Link to="mailto:panchadhura99@gmail.com">
            <img
              className="h-4 sm:h-5 mr-2"
              src="dist/emaillogo.png"
              alt="Email"
            />
          </Link>
          <span>
            <Link
              className="text-white no-underline "
              to="mailto:Panchadhura99@gmail.com"
            >
              Panchadhura@gmail.com
            </Link>
          </span>
        </div>
        <div className="flex items-center ml-1.5">
          <img
            className="h-4 sm:h-6 mr-2"
            src="dist/locationlogo.png"
            alt="Location"
          />
          <span>Bardibas, Mahottari</span>
        </div>
      </div>

      {/* Navbar */}
      <div className="flex justify-between items-center p-4 bg-white border-b border-gray-300 relative">
        <img className="h-16" src="dist/Schoollogo.png" alt="Logo" />

        {/* Hamburger Menu Button */}
        <button
          className="menu-button md:hidden block text-black focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>

        {/* Menu */}
        <div
          className={`navbar-menu ${
            isMenuOpen ? "block" : "hidden"
          } absolute top-16 left-0 w-full bg-white shadow-lg z-10 md:static md:flex md:w-auto md:shadow-none`}
        >
          <Link
            className="block px-4 py-2 text-black hover:bg-gray-200 transition"
            to="/"
          >
            Home
          </Link>

          {/* About Us Dropdown */}
          <div
            className="relative group"
            onClick={() => toggleDropdown("about")}
          >
            <button className="px-4 py-2 text-black hover:bg-gray-200 transition flex items-center w-full">
              About Us
              <svg
                className="h-4 w-4 ml-1 mt-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={`absolute left-0 mt-2 w-48 bg-white shadow-lg border border-gray-200 z-20 ${
                activeDropdown === "about" ? "block" : "hidden"
              } md:group-hover:block`}
            >
              <Link
                className="block px-4 py-2 text-black hover:bg-gray-100 transition"
                to="/panchadhura-profile"
              >
                Introduction
              </Link>
              <Link
                className="block px-4 py-2 text-black hover:bg-gray-100 transition"
                to="/principal-message"
              >
                Message From Principal
              </Link>
            </div>
          </div>

          {/* Gallery Dropdown */}
          <div
            className="relative group"
            onClick={() => toggleDropdown("gallery")}
          >
            <button className="px-4 py-2 text-black hover:bg-gray-200 transition flex items-center w-full">
              Gallery
              <svg
                className="h-4 w-4 ml-1 mt-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={`absolute left-0 mt-2 w-48 bg-white shadow-lg border border-gray-200 z-20 ${
                activeDropdown === "gallery" ? "block" : "hidden"
              } md:group-hover:block`}
            >
              <Link
                className="block px-4 py-2 text-black hover:bg-gray-100 transition"
                to="/gallery/first-gallery"
              >
                Photos
              </Link>
              <Link
                className="block px-4 py-2 text-black hover:bg-gray-100 transition"
                to="/gallery/videos"
              >
                Videos
              </Link>
            </div>
          </div>

          <Link
            className="block px-4 py-2 text-black hover:bg-gray-200 transition"
            to="/contactus"
          >
            Contact Us
          </Link>
          <Link
            className="block px-4 py-2 text-black hover:bg-gray-200 transition"
            to="/callender"
          >
            <img src="src/assets/callender.png" className="h-[25px]" alt="" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
