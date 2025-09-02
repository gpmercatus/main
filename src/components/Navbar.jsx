import React, { useState } from "react";
import gplogo from "../assets/gplogo.png";
import Button from "./Button";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Define nav links properly
  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "ideal-for", label: "Ideal For" },
    { id: "services", label: "Services" },
    { id: "contact", label: "Contact" },
    ,
  ];

  return (
    <nav className="bg-white dark:bg-[#FFF8E1] fixed w-full z-50 top-0 start-0 border-b border-gray-200 dark:border-gray-200 shadow-sm">
      <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto px-4 py-3">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <img src={gplogo} className="h-9 w-auto" alt="GP Mercatus Logo" />
          <span className="text-lg md:text-xl font-semibold text-black">
            GP Mercatus
          </span>
        </a>

        {/* Button + Hamburger */}
        <div className="flex items-center gap-3 md:order-2">
          <a href="#contact">
            <Button btntext="Get Started" />
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            aria-controls="navbar-sticky"
            aria-expanded={isOpen}
            className="inline-flex items-center justify-center p-2 w-10 h-10 text-gray-600 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
          >
            <span className="sr-only">Toggle navigation</span>
            {isOpen ? (
              /* Close Icon */
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              /* Hamburger Icon */
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Nav Links */}
        <div
          className={`${
            isOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0 md:max-h-full md:opacity-100"
          } w-full md:flex md:w-auto md:order-1 overflow-hidden transition-all duration-300 ease-in-out`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col md:flex-row p-4 md:p-0 mt-4 md:mt-0 font-medium bg-white dark:bg-[#FFF8E1] md:bg-transparent rounded-lg md:rounded-none md:space-x-8">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="block py-2 px-3 md:text-lg text-base text-black hover:text-gray-600 rounded md:p-0 transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
