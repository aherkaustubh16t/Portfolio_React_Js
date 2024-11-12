import React, { useState } from "react";
import { Link } from "react-router-dom";
import menuopen from "../assets/menu_open.svg";

function Header({ setSideBar }) {
  const [headervalue, setHeaderValue] = useState("home");

  return (
    <div className="h-14 w-full flex justify-between py-2 px-2 lg:px-10 xl:px-14 fixed z-30 bg-black text-white">
      {/* Logo */}
      <Link to="/" className="" onClick={() => setHeaderValue("home")}>
        <div className="textanimation h-full text-xl md:text-lg lg:text-3xl font-semibold cursor-pointer">
          Kaustubh Aher
        </div>
      </Link>

      {/* All Header Buttons */}
      <div className="h-0 w-0 md:h-auto md:w-auto invisible md:visible flex">
        <li className="headerBtn text-base list-none relative">
          <Link
            to="/"
            onClick={() => setHeaderValue("home")}
            className={`underlinearrow ${
              headervalue === "home" ? "solidunderline" : ""
            } cursor-pointer`}
          >
            Home
          </Link>
        </li>
        <li className="headerBtn text-base list-none relative md:ml-5 lg:ml-12">
          <Link
            to="/about"
            onClick={() => setHeaderValue("about")}
            className={`underlinearrow ${
              headervalue === "about" ? "solidunderline" : ""
            } cursor-pointer`}
          >
            About Us
          </Link>
        </li>
        <li className="headerBtn text-base list-none relative md:ml-5 lg:ml-12">
          <Link
            to="/latestwork"
            onClick={() => setHeaderValue("latestwork")}
            className={`underlinearrow ${
              headervalue === "latestwork" ? "solidunderline" : ""
            } cursor-pointer`}
          >
            Latest Work
          </Link>
        </li>
        <li className="headerBtn text-base list-none relative md:ml-5 lg:ml-12">
          <Link
            to="/contact"
            onClick={() => setHeaderValue("contact")}
            className={`underlinearrow ${
              headervalue === "contact" ? "solidunderline" : ""
            } cursor-pointer`}
          >
            Contact
          </Link>
        </li>
      </div>

      {/* Hamburger Menu */}
      <img
        onClick={() => setSideBar(true)}
        className="h-10 w-10 md:h-0 md:w-0 absolute right-4 visible md:invisible cursor-pointer"
        src={menuopen}
        alt="Menu"
      />

      {/* Resume & Contact me button */}
      <div className="h-0 w-0 md:h-10 md:w-auto">
        <a
          href="https://drive.google.com/file/d/1xSHb1Vp6xCyHtRNwGMi-j801j4IbOOAF/view?usp=drive_link"
          className="h-0 w-0 md:h-auto md:w-auto invisible md:visible"
        >
          <button className="btn h-0 w-0 md:h-8 md:w-20 lg:h-10 lg:w-28 md:mr-2 md:text-sm lg:text-base font-bold invisible md:visible border-2 border-purple-800 rounded-full">
            Resume
          </button>
        </a>
        <Link to="/contact" className="h-0 w-0 md:h-auto md:w-auto">
          <button className="btn h-0 w-0 md:h-8 md:w-24 lg:h-10 lg:w-36 md:text-sm lg:text-base invisible md:visible bg-purple-700 rounded-full">
            Contact Me
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
