import React from "react";
import Footer from "../Footer";
import Hero from "./Hero";
import LatestWork from "./LatestWork";
import Contact from "./Contact";
import About from "./About";
import { Link } from "react-router-dom"; // Import Link for navigation

function Home() {
  return (
    <div className="fullbackgroundcolor px-4 xl:px-12 relative">
      {/* Hero Section */}
      <Hero />

      {/* Navigation Links */}
      <div className="w-full text-center py-4">
        <Link
          to="/about"
          className="btn text-base font-semibold bg-purple-700 text-white px-6 py-2 rounded-md"
        >
          About
        </Link>
        <Link
          to="/latest-work"
          className="btn text-base font-semibold bg-purple-700 text-white px-6 py-2 rounded-md mx-4"
        >
          Latest Work
        </Link>
        <Link
          to="/contact"
          className="btn text-base font-semibold bg-purple-700 text-white px-6 py-2 rounded-md"
        >
          Contact
        </Link>
      </div>

      {/* About Section */}
      <About />

      {/* Latest Work Section */}
      <LatestWork />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
