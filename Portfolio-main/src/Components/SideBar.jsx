import React from "react";
import { Link } from "react-router-dom"; // Changed from 'react-scroll'
import menuClose from "../assets/menu_close.svg";

function SideBar({ setSideBar }) {
  return (
    <div className="sidebarbgcolor min-h-[200vh] w-48 visible md:invisible relative">
      {/* Close Button */}
      <div onClick={() => setSideBar(false)}>
        <img
          src={menuClose}
          className="headerBtn h-6 w-6 absolute top-4 right-4 cursor-pointer"
        />
      </div>

      {/* Navigation Links */}
      <div className="flex flex-col pt-14">
        <Link
          to="/"
          onClick={() => setSideBar(false)}
          className="headerBtn text-center text-2xl mb-10 font-bold cursor-pointer"
        >
          Home
        </Link>
        <Link
          to="/aboutus"
          onClick={() => setSideBar(false)}
          className="headerBtn text-center text-2xl mb-10 font-bold cursor-pointer"
        >
          About Us
        </Link>
        <Link
          to="/latestwork"
          onClick={() => setSideBar(false)}
          className="headerBtn text-center text-2xl mb-10 font-bold cursor-pointer"
        >
          Latest Work
        </Link>
        <Link
          to="/contact"
          onClick={() => setSideBar(false)}
          className="headerBtn text-center text-2xl mb-10 font-bold cursor-pointer"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}

export default SideBar;
