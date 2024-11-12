import React from "react";
import Footer from "../Footer";
import {
  BiCodeBlock,
  BiCoinStack,
  BiCross,
  BiSolidBookContent,
} from "react-icons/bi";
import { Link } from "react-router-dom"; // Import Link from React Router for navigation

function About() {
  return (
    <div className="h-full w-full mt-20 md:mt-6 lg:mt-2 text-white">
      <div className="relative">
        <h1 className="text-4xl md:text-6xl text-center font-bold">About Me</h1>
        <BiCross className="animate-spin text-5xl absolute -bottom-10 right-10" />
        <BiCross className="animate-bounce text-3xl absolute -bottom-96" />
      </div>

      <h1 className="w-full md:w-4/5 lg:w-3/5 xl:w-1/2 my-10 m-auto text-base text-center">
        I’m a passionate front-end developer with strong expertise in React.js,
        JavaScript, CSS, Tailwind CSS, Bootstrap, and HTML5. I have practical
        experience using state management tools like React Redux and Context
        API, along with navigation libraries like React Router DOM.
        <br />
        Additionally, I’m proficient with development tools such as NPM, Git,
        GitHub, and deployment platforms like Netlify.
        <br />
        <br />I specialize in building responsive and user-friendly web
        applications, focusing on delivering high-quality, efficient solutions.
        I enjoy working in teams and I am always ready to learn, adapt, and take
        on new challenges in web development.
      </h1>

      {/* Services */}
      <div className="min-h-60 w-full lg:w-11/12 m-auto flex flex-wrap justify-around items-center">
        <div className="h-48 w-72 sm:h-56 lg:h-52 lg:w-72 cursor-pointer my-4 lg:my-0 mx-4 sm:mx-0 box duration-300 rounded-lg shadow-xl shadow-gray-900">
          <BiCodeBlock className="text-4xl md:text-5xl pt-4 rounded-full m-auto" />
          <h1 className="text-lg md:text-xl text-center font-semibold py-2">
            Web Development
          </h1>
          <p className="text-xs sm:text-sm px-1 text-gray-400 text-center">
            Creative web developer skilled in React.js, JavaScript, HTML, CSS,
            Tailwind CSS, and Bootstrap, crafting dynamic, responsive, and
            user-friendly websites.
          </p>
        </div>
        <div className="h-48 w-72 sm:h-56 lg:h-52 lg:w-72 cursor-pointer my-4 lg:my-0 mx-4 sm:mx-0 box duration-300 rounded-lg shadow-xl shadow-gray-800">
          <BiCoinStack className="text-4xl md:text-5xl pt-4 rounded-full m-auto" />
          <h1 className="text-lg md:text-xl text-center font-semibold py-2">
            Web Design
          </h1>
          <p className="text-xs sm:text-sm px-1 text-gray-400 text-center">
            Skilled web designer with expertise in HTML, CSS, TailwindCSS, and
            Bootstrap, creating clean, attractive, and user-friendly website
            designs.
          </p>
        </div>
        {/* <div className="h-48 w-72 sm:h-56 lg:h-52 lg:w-72 cursor-pointer my-4 lg:my-0 mx-4 sm:mx-0 box duration-300 rounded-lg shadow-xl shadow-gray-900">
          <BiSolidBookContent className="text-4xl md:text-5xl pt-4 rounded-full m-auto" />
          <h1 className="text-lg md:text-xl text-center font-semibold py-2">
            Content Writing
          </h1>
          <p className="text-xs sm:text-sm px-1 text-gray-400 text-center">
            Experienced content writer creating clear, engaging, and
            SEO-friendly text to boost audience interest and brand visibility.
          </p>
        </div> */}
      </div>

      {/* Adding a link to contact page */}
      <div className="flex justify-center my-10">
        <Link
          to="/contact"
          className="text-lg text-purple-700 font-semibold hover:underline"
        >
          Get in Touch
        </Link>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default About;
