import React from "react";
import usericon from "../assets/user_icon.svg";
import { BiLogoGithub, BiLogoLinkedin } from "react-icons/bi";
import { Link } from "react-router-dom"; // Changed from 'react-scroll'

function Footer() {
  return (
    <>
      <div className="w-full m-auto my-10 md:my-0 md:px-8">
        {/* Upper Side */}
        <div className="w-full m-auto flex flex-col md:flex-row justify-between items-center pb-4 md:pb-0  border-2 border-transparent border-b-white ">
          <div className="w-full md:w-1/2">
            <h1 className="text-3xl font-bold pb-2">Kaustubh Aher</h1>
            <p className="pb-4 text-base">
              "Get in touch for web development insights and projects. Connect
              with me through social media for updates."
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-start md:justify-end">
            <div className="h-10 w-72 flex justify-start bg-gray-800 rounded-3xl">
              <img src={usericon} alt="" className="mt-2 ml-3" />
              <input
                type="text"
                placeholder="Enter Your Email"
                className="h-full w-full text-sm border-none outline-none rounded-3xl bg-gray-800 pl-4"
              />
            </div>
            <button className="btn h-10 w-32 rounded-full font-semibold ml-2 text-base bg-purple-700">
              Submit
            </button>
          </div>
        </div>

        {/* Lower Side */}
        <div className="w-full sm:text-base flex flex-col md:flex-row mt-4">
          <div className="w-full md:w-1/4 pb-2 sm:pb-0 m-auto md:ml-0 mt-0 flex md:justify-start items-start">
            <a
              href="https://www.linkedin.com/in/aher-kaustubh-990003233/"
              className="text-xl"
            >
              <BiLogoLinkedin />
            </a>
            <a
              href="https://github.com/aherkaustubh16t"
              className="text-xl ml-6"
            >
              <BiLogoGithub />
            </a>
            {/* <a href="" className='text-xl ml-6'><BiLogoInstagram /></a>
            <a href="" className='text-xl ml-6'><BiLogoTwitter /> </a> */}
          </div>
          <div className="w-full md:w-3/4 flex flex-row justify-start md:justify-between lg:justify-end text-start pt-2 md:pt-0 md:pl-4 lg:pl-10">
            <li className="list-none text-gray-300 pb-3 md:pb-5 md:pl-7">
              <a href="#" className="cursor-pointer">
                Terms of Service
              </a>
            </li>
            <li className="list-none text-gray-300 pb-3 md:pb-5 pl-7">
              <a href="#" className="cursor-pointer">
                Privacy Policy
              </a>
            </li>
            <Link
              to="/contact"
              className="list-none text-gray-300 pb-3 md:pb-5 pl-7"
            >
              Contact With Me
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
