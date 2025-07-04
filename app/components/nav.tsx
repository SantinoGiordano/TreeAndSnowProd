"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

const Nav = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav className="bg-gray-800/20 backdrop-blur-md text-white px-4 py-4 md:px-8 md:py-4 flex justify-between items-center fixed top-0 left-0 w-full z-50 shadow-lg">
        <div className="flex items-center">
          <Image
            draggable="false"
            src="/logo.jpg"
            width={140}
            height={140}
            alt="Logo"
            className="w-16 h-16 md:w-24 md:h-24 object-contain"
            priority
          />
          <div className="ml-3 text-lg md:text-2xl font-bold">Agawam Ma</div>
        </div>
        {/* Hamburger Icon */}
        <button
          className="md:hidden ml-4 focus:outline-none"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 8h16M4 16h16"}
            />
          </svg>
        </button>
        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-4 md:space-x-8 relative">
          <li>
            <Link
              href="/"
              className="hover:text-gray-400 transition-colors font-medium text-base md:text-lg drop-shadow text-outline-black shadow-lg"
            >
              Home
            </Link>
          </li>
          <li
            className="relative"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <Link
              href="/services"
              className="hover:text-gray-400 transition-colors font-medium text-base md:text-lg drop-shadow shadow-lg"
            >
              Services
            </Link>
            {showDropdown && (
              <ul className="absolute bg-black border border-gray-700 rounded shadow-lg min-w-[160px] z-10">
                <li>
                  <Link
                    href="/services#tree-removal"
                    className="block px-4 py-2 hover:bg-gray-800 transition-colors"
                  >
                    Tree Removal
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services#snow-removal"
                    className="block px-4 py-2 hover:bg-gray-800 transition-colors"
                  >
                    Snow Plowing
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-gray-400 transition-colors font-medium text-base md:text-lg drop-shadow"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="hover:text-gray-400 transition-colors font-medium text-base md:text-lg drop-shadow"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      {/* Mobile Nav Overlay OUTSIDE nav */}
      {mobileOpen && (
        <div className=" text-white fixed inset-0 bg-black z-[9999] flex flex-col items-center pt-24 md:hidden transition-all">
          <button
            className="absolute top-6 right-6"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <Link
            href="/"
            className="block py-3 px-6 text-lg font-medium hover:text-gray-400 drop-shadow"
            onClick={() => setMobileOpen(false)}
          >
            Home
          </Link>
          <div className="w-full flex flex-col items-center">
            <Link
              href="/services"
              className="block py-3 px-6 text-lg font-medium hover:text-gray-400 focus:outline-none drop-shadow"
              onClick={(e) => {
                e.preventDefault();
                setShowDropdown((prev) => !prev);
              }}
            >
              Services
            </Link>
            {showDropdown && (
              <ul className="w-full bg-black border border-gray-700 rounded shadow-lg mb-2">
                <li>
                  <Link
                    href="/services/#tree-removal"
                    className="block px-6 py-2 hover:bg-gray-800 transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    Tree Removal
                  </Link>
                </li>
                <li>
                  <Link
                    href="#snow-plowing"
                    className="block px-6 py-2 hover:bg-gray-800 transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    Snow Plowing
                  </Link>
                </li>
              </ul>
            )}
          </div>
          <Link
            href="/about"
            className="block py-3 px-6 text-lg font-medium hover:text-gray-400 drop-shadow"
            onClick={() => setMobileOpen(false)}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="block py-3 px-6 text-lg font-medium hover:text-gray-400 drop-shadow"
            onClick={() => setMobileOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </>
  );
};

export default Nav;
