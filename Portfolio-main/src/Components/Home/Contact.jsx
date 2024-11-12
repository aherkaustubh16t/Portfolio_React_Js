import React, { useRef } from "react";
import { BiCircle, BiCross } from "react-icons/bi";
import mail_icon from "../../assets/mail_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import location_icon from "../../assets/location_icon.svg";

function Contact() {
  // Form reference
  const formRef = useRef(null);

  // Handle form submission
  const onSubmit = async (event) => {
    event.preventDefault();
    alert("Form Data Submitted Successfully");

    const formData = new FormData(event.target);

    formData.append("access_key", "08f8765f-73dd-4744-bbd5-6acfca14dee3");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    formRef.current.reset();
  };

  return (
    <div id="contact" className="relative">
      <div className="h-full w-full m-auto text-center">
        <h1 className="text-3xl md:text-5xl font-semibold py-7">
          Get in Touch
        </h1>
      </div>

      {/* Decorative Icons */}
      <BiCircle className="text-5xl animate-pulse absolute bottom-1 left-0 sm:bottom-24 sm:left-10" />
      <BiCircle className="text-4xl animate-pulse absolute bottom-0 left-6 sm:bottom-20 sm:left-14" />
      <BiCross className="text-xl animate-spin absolute right-10" />
      <BiCross className="text-4xl animate-spin absolute right-10 bottom-2" />

      <div className="flex flex-col sm:flex-row justify-between md:px-10">
        {/* Left Side: Contact Info */}
        <div className="h-full w-full sm:w-3/5 lg:w-1/2 sm:pt-8 text-center sm:text-start">
          <h1 className="text-xl md:text-4xl font-semibold invisible sm:visible">
            Let's Talk
          </h1>
          <p className="w-full sm:w-11/12 lg:w-3/4 pb-10 sm:py-4 text-sm">
            <span className="font-bold text-lg">Hey there!</span>
            <br />
            Thank you for visiting my portfolio. If you have any feedback or
            thoughts, I’d love to hear them! Feel free to drop me a message
            anytime.
            <br />{" "}
            <span className="text-lg sm:text-xl font-bold">
              Thanks for visiting!😊
            </span>
          </p>

          {/* Contact Details */}
          <div className="flex justify-start mb-4 sm:my-4">
            <img
              src={mail_icon}
              alt="Email"
              className="h-3 w-10 mt-1 cursor-pointer"
            />
            <p className="sm:px-2 text-sm cursor-pointer">
              aherkaustubhramesh16@gmail.com
            </p>
          </div>
          <div className="flex justify-start my-2 sm:my-4">
            <img
              src={call_icon}
              alt="Phone"
              className="h-4 w-10 mt-1 cursor-pointer"
            />
            <p className="sm:px-2 text-sm cursor-pointer">+91 7249734437</p>
          </div>
          <div className="flex justify-start sm:my-4">
            <img
              src={location_icon}
              alt="Location"
              className="h-4 w-10 mt-1 cursor-pointer"
            />
            <p className="sm:px-2 text-sm cursor-pointer">
              Loni Kh, A.Nagar Maharashtra 413713
            </p>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <form
          ref={formRef}
          onSubmit={onSubmit}
          className="h-full w-full sm:w-2/5 lg:w-1/2 mt-10 sm:mt-0"
        >
          <div className="flex flex-col">
            <label htmlFor="name" className="sm:py-4 text-base">
              Your Name
            </label>
            <input
              name="name"
              type="text"
              placeholder="Enter your name"
              className="h-10 w-full lg:w-4/5 bg-gray-900 pl-3 text-sm border-none outline-none text-white rounded"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="pt-4 text-base sm:pb-2">
              Your Email
            </label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              className="h-10 w-full lg:w-4/5 bg-gray-900 pl-3 text-sm border-none outline-none text-white rounded"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="pt-4 text-base sm:pb-2">
              Write Your message here
            </label>
            <textarea
              name="message"
              placeholder="Enter your message"
              className="h-48 md:h-52 w-full lg:w-4/5 pt-4 bg-gray-900 pl-3 text-sm border-none outline-none text-white rounded overflow-hidden"
            />
          </div>
          <div className="my-4 sm:my-8">
            <button
              className="btn h-10 w-36 bg-purple-700 rounded-md font-semibold mb-10 text-base"
              type="submit"
            >
              Submit Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
