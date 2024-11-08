import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Import useAuth

function Navbar() {
  const { isLoggedIn, logout } = useAuth(); // Access context values

  return (
    <nav className="sticky top-0 w-full bg-[#060B0F] py-4 z-50">
      <div className="container mx-auto px-4 flex items-center">
        {/* Hamburger menu for mobile */}
        <div className="md:hidden">
          <button className="text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Spacer for centered links */}
        <div className="flex-grow" />

        {/* Desktop menu centered */}
        <div className="hidden md:flex justify-center space-x-16 flex-grow-0">
          <Link to="/" className="text-white text-lg">
            Home
          </Link>
          <Link to="/fetch" className="text-white text-lg">
            Fetch All
          </Link>
          <Link to="/generate" className="text-white text-lg">
            Generate
          </Link>
          <Link to="/about" className="text-white text-lg">
            About Us
          </Link>
        </div>

        {/* Spacer to push buttons to the right */}
        <div className="flex-grow" />

        {/* Desktop buttons on the right */}
        <div className="hidden md:flex space-x-4">
          {!isLoggedIn ? (
            <>
              <Link
                to="/signup"
                className="bg-[#202d37] hover:bg-[#94a3ad] hover:text-[#202d37] text-white py-2 px-4 rounded-xl"
              >
                Sign Up
              </Link>
              <Link
                to="/login"
                className="bg-[#202d37] hover:bg-[#94a3ad] hover:text-[#202d37] text-white py-2 px-4 rounded-xl"
              >
                Login
              </Link>
            </>
          ) : (
            <button
              onClick={logout}
              className="bg-[#202d37] hover:bg-[#94a3ad] hover:text-[#202d37] text-white py-2 px-4 rounded-xl"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
