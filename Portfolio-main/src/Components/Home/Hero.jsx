import React from "react";
import { BiArrowBack, BiLogoGithub, BiLogoLinkedin } from "react-icons/bi";
import { Link } from "react-router-dom";
import arrowicon from "../../assets/arrow_icon.svg";
import mailicon from "../../assets/mail_icon.svg";
import profileimage from "../../assets/profile.jpg";

function Hero() {
  return (
    <div
      id="home"
      className="flex flex-col-reverse lg:flex-row justify-around items-center pt-0 sm:pt-10 lg:py-36"
    >
      {/* Left side */}
      <div className="w-full lg:w-1/2 xl:w-2/5 text-center lg:text-start">
        <h1 className="w-[95%] text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          I'm <span className="textcolor">Kaustubh Aher</span> <br /> React js
          Developer.
        </h1>
        <p className="text-sm md:w-10/12 m-auto lg:w-auto text-gray-400">
          Seeking opportunities to grow and contribute to organizational
          success. Experienced in web development with React.js, JavaScript,
          CSS, Tailwind CSS, Bootstrap, HTML5. Passionate about UI/UX design and
          responsive design.
        </p>

        {/* LinkedIn & Github logos */}
        <div className="w-full flex justify-center lg:justify-start items-center mt-4">
          <a
            href="https://www.linkedin.com/in/aher-kaustubh-990003233/"
            className="text-2xl"
          >
            <BiLogoLinkedin />
          </a>
          <a
            href="https://github.com/aherkaustubh16t"
            className="text-2xl mx-2"
          >
            <BiLogoGithub />
          </a>
        </div>

        {/* Contact me button */}
        <div className="w-full mt-5">
          <Link
            to="/contact" // React Router Link to the Contact page
            className="btn h-10 w-36 mt-5 m-auto lg:ml-0 rounded-md flex justify-center items-center text-base font-semibold bg-purple-700 text-white cursor-pointer"
          >
            Contact Me <BiArrowBack className="text-xl font-bold ml-2" />
          </Link>
        </div>
      </div>

      {/* Right side */}
      <div className="h-full w-full sm:w-2/3 lg:w-1/2 flex justify-between sm:mb-4 lg:mb-0 relative">
        {/* Decorative Arrow & Mail Icons */}
        <div className="absolute top-0 left-0">
          <img
            className="sm:h-10 sm:w-20 lg:h-24 lg:w-24"
            src={arrowicon}
            alt="Arrow Icon"
          />
          <img
            className="sm:h-10 sm:w-20 lg:h-24 lg:w-24 absolute bottom-20 left-4"
            src={mailicon}
            alt="Mail Icon"
          />
        </div>

        {/* Profile Image */}
        <div className="relative flex justify-center items-center">
          <img
            className="h-64 w-64 sm:h-72 lg:h-80 sm:w-72 lg:w-80 relative left-28 top-8 lg:bottom-16 rounded-full text-white bg-gray-400 border-none outline-none"
            src={profileimage}
            alt="Kaustubh Aher"
          />
        </div>

        {/* Decorative Arrow & Mail Icons (Right Side) */}
        <div className="absolute top-4 right-10">
          <img
            className="sm:h-10 sm:w-20 lg:h-24 lg:w-24"
            src={mailicon}
            alt="Mail Icon"
          />
          <img
            className="sm:h-10 sm:w-20 lg:h-24 lg:w-24 absolute -bottom-4 right-8"
            src={arrowicon}
            alt="Arrow Icon"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
