"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-4 backdrop-blur-md bg-[#001233]/40 border-b border-white/10">
      <Link href={"/"} onClick={closeMenu} className="relative z-50">
        <img
          src="/solutionwings.webp"
          alt="Solution wings Logo"
          className="h-12 w-auto object-contain"
        />
      </Link>

      <ul className="hidden md:flex space-x-8 font-medium text-sm lg:text-base text-white relative z-50">
        <li>
          <Link
            href={"/"}
            className="hover:text-blue-300 transition-colors uppercase tracking-wider"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href={"/services"}
            className="hover:text-blue-300 transition-colors uppercase tracking-wider"
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            href={"/about"}
            className="hover:text-blue-300 transition-colors uppercase tracking-wider"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href={"/contact"}
            className="hover:text-blue-300 transition-colors uppercase tracking-wider"
          >
            Contact
          </Link>
        </li>
      </ul>

      <div className="md:hidden relative z-50">
        <button
          onClick={toggleMenu}
          className="text-white hover:text-blue-300 transition-colors focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed top-0 left-0 min-h-dvh w-full bg-[#001233]/95 backdrop-blur-xl md:hidden transition-all duration-300 ease-in-out flex flex-col items-center justify-center space-y-8 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } -z-10`}
      >
        <Link
          href={"/"}
          onClick={closeMenu}
          className={`text-2xl font-medium text-white hover:text-blue-300 transition-all duration-500 uppercase tracking-wider ${isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"} delay-100`}
        >
          Home
        </Link>
        <Link
          href={"/services"}
          onClick={closeMenu}
          className={`text-2xl font-medium text-white hover:text-blue-300 transition-all duration-500 uppercase tracking-wider ${isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"} delay-150`}
        >
          Services
        </Link>
        <Link
          href={"/about"}
          onClick={closeMenu}
          className={`text-2xl font-medium text-white hover:text-blue-300 transition-all duration-500 uppercase tracking-wider ${isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"} delay-200`}
        >
          About
        </Link>
        <Link
          href={"/contact"}
          onClick={closeMenu}
          className={`text-2xl font-medium text-white hover:text-blue-300 transition-all duration-500 uppercase tracking-wider ${isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"} delay-250`}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
