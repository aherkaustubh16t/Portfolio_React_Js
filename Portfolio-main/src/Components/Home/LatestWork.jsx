import React from "react";
import { BiCircle, BiStar } from "react-icons/bi";
import project1 from "../../assets/OIP.jpg";
import project2 from "../../assets/quizApp.jpg";
import project3 from "../../assets/Screenshot_1.png";
import project4 from "../../assets/Portfolio.png";

function LatestWork() {
  return (
    <div id="latestwork" className="relative m-auto mt-10 mb-2">
      <div className="m-auto text-center relative">
        <h1 className="text-3xl md:text-5xl font-semibold py-7">Latest Work</h1>
        <BiStar className="animate-spin text-2xl absolute bottom-0" />
      </div>
      <BiCircle className="text-5xl animate-pulse absolute bottom-0 right-10" />
      <BiCircle className="text-4xl animate-pulse absolute bottom-6 right-10" />

      <div className="min-h-96 w-full xl:w-11/12 m-auto flex flex-wrap justify-between items-start">
        {/* First box */}
        <div className="h-96 w-96 sm:w-[48%] lg:h-64 m-auto rounded-lg flex flex-col lg:flex-row lg:pt-2 mb-16 sm:mb-4">
          <a href="" className="h-[60%] w-full lg:h-60 lg:w-[80%] m-auto">
            <img
              className="project h-[92%] w-11/12 m-auto duration-300 rounded-lg"
              src={project4}
              alt="YouTube Clone"
            />
          </a>
          <div className="h-[40%] w-full lg:w-1/2 pl-4 lg:pl-2">
            <h1 className="text-base font-semibold pb-1">Personal Portfolio</h1>
            <p>
              Developed a personal portfolio website using HTML, CSS,
              JavaScript, and React, with Tailwind CSS for a responsive and
              modern design. The website highlights my skills, projects, and
              experience, featuring interactive sections for easy navigation.
            </p>
            <div className="flex justify-start items-center my-2">
              <a
                href=""
                className="h-8 w-24 pt-1.5 text-sm text-center bg-purple-700 btn rounded-full"
              >
                View Code
              </a>
            </div>
          </div>
        </div>

        {/* Second box */}
        <div className="h-96 w-96 sm:w-[48%] lg:h-64 m-auto rounded-lg flex flex-col lg:flex-row lg:pt-2 mb-8 sm:mb-4">
          <a href="" className="h-[60%] w-full lg:h-60 lg:w-[80%] m-auto">
            <img
              className="project h-[92%] w-11/12 m-auto duration-300 rounded-lg"
              src={project1}
              alt="Expense Tracker"
            />
          </a>
          <div className="h-[40%] w-full lg:w-1/2 pl-4 lg:pl-2">
            <h1 className="text-base font-semibold pb-1">
              E Commerce Website{" "}
            </h1>
            <p>
              Developed a feature E-Commerce website for online shopping with
              functionalities such as product management, user registration, and
              checkout. Admins can manage products, categories, and user data,
              while users can browse, select, and purchase products.
            </p>
            <div className="flex justify-start items-center my-2">
              <a
                href="https://github.com/aherkaustubh16t/e-commerce-Website"
                className="btn h-8 w-24 pt-1.5 text-sm text-center bg-purple-700 rounded-full"
              >
                View Code
              </a>
            </div>
          </div>
        </div>

        {/* Third box */}
        <div className="h-96 w-96 sm:w-[48%] lg:h-64 m-auto rounded-lg flex flex-col lg:flex-row lg:pt-2 mb-8 sm:mb-4">
          <a href="" className="h-[60%] w-full lg:h-60 lg:w-[80%] m-auto">
            <img
              className="project h-[92%] w-11/12 m-auto duration-300 rounded-lg"
              src={project2}
              alt="Portfolio Website"
            />
          </a>
          <div className="h-[50%] w-full lg:w-1/2 pl-4 lg:pl-2">
            <h1 className="text-base font-semibold pb-1">Quiz App</h1>
            <p>
              Developed a quiz app using HTML, CSS, and JavaScript. The app
              allows users to answer a series of questions and displaying their
              score at the end. It features a clean, responsive design and
              interactive elements for an engaging user experience.
            </p>
            <div className="flex justify-start items-center my-2">
              <a
                href="https://github.com/aherkaustubh16t/javascript_mini_projects/tree/main/Mini%20Projects/Project_3(Quiz_App)"
                className="btn h-8 w-24 pt-1.5 text-sm text-center bg-purple-700 rounded-full"
              >
                View Code
              </a>
            </div>
          </div>
        </div>

        {/* Fourth box */}
        <div className="h-96 w-96 sm:w-[48%] lg:h-64 m-auto rounded-lg flex flex-col lg:flex-row lg:pt-2 mb-8 sm:mb-4">
          <a href="" className="h-[60%] w-full lg:h-60 lg:w-[80%] m-auto">
            <img
              className="project h-[92%] w-11/12 m-auto duration-300 rounded-lg"
              src={project3}
              alt="Currency Converter"
            />
          </a>
          <div className="h-[50%] w-full lg:w-1/2 pl-4 lg:pl-2">
            <h1 className="text-base font-semibold pb-1">To-Do App</h1>
            <p>
              Created a to-do list application using HTML, CSS, and JavaScript.
              The app allows users to add, edit, and delete tasks, keeping track
              of their to-do items with a simple and clean interface. It
              features interactive elements, and is fully responsive for various
              screen sizes.
            </p>
            <div className="flex justify-start items-center my-2">
              <a
                href="https://github.com/aherkaustubh16t/javascript_mini_projects/tree/main/Mini%20Projects/Project_2_(To-Do-List)"
                className="btn h-8 w-24 pt-1.5 text-sm text-center bg-purple-700 rounded-full"
              >
                View Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LatestWork;
