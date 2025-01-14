import React from "react";

import pic from "../../public/navbar.avif";

import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";

import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";

import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <style>
        {`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes zoomIn {
          from {
            transform: scale(0.8);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes floatAnimation {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(-20px);
          }
        }

        .animate-fadeInLeft {
          animation: fadeInLeft 1s ease-out;
        }

        .animate-fadeInRight {
          animation: fadeInRight 1s ease-out;
        }

        .animate-zoomIn {
          animation: zoomIn 1s ease-out;
        }

        .animate-float {
          animation: floatAnimation 2s ease-in-out infinite alternate;
        }

        .text-gradient {
          background: linear-gradient(90deg, #ff6b6b, #ff8b8b);
          -webkit-background-clip: text;
          color: transparent;
        }

        .bg-gradient {
          background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
        }

        .hero {
          background-image: url('https://via.placeholder.com/1500x800');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
        }

        .hover-effect:hover {
          transform: translateY(-10px);
          transition: 0.3s;
        }

        .hover-scale:hover {
          transform: scale(1.05);
          transition: 0.3s ease;
        }

        .section-title {
          font-size: 2rem;
          font-weight: bold;
          color: #333;
        }
        `}
      </style>

      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28 hero bg-gradient"
      >
        <div className="flex flex-col md:flex-row">
          {/* Left Section */}
          <div
            className="md:w-1/2 mt-12 md:mt-24 space-y-6 order-2 md:order-1 animate-fadeInLeft"
          >
            <span className="text-xl font-semibold text-gray-600">
              Welcome to My Professional Feed
            </span>
            <div className="flex space-x-2 text-2xl md:text-4xl">
              <h1 className="font-bold">Hello, I'm a</h1>
              <ReactTyped
                className="text-gradient font-bold"
                strings={["Developer", "Programmer", "Coder", "Problem-Solver"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <p className="text-sm md:text-md text-black text-justify">
              As a passionate and innovative Front-End Developer, I bring a keen
              eye for detail and an ability to design intuitive user interfaces.
              My goal is to deliver seamless, scalable, and visually appealing
              web experiences that not only meet but exceed expectations. Let's
              collaborate and build solutions that truly make a difference in the
              digital world!
            </p>

            {/* Social Media Icons */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="space-y-4">
                <h1 className="font-bold text-center text-black">
                  Let's Connect
                </h1>
                <ul className="flex space-x-6">
                  <li>
                    <a href="https://www.linkedin.com/" target="_blank">
                      <FaLinkedin className="text-3xl cursor-pointer text-blue-700 hover:text-blue-500 transform transition-all duration-300 hover:scale-125" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank">
                      <FaInstagram className="text-3xl cursor-pointer text-pink-500 hover:text-pink-300 transform transition-all duration-300 hover:scale-125" />
                    </a>
                  </li>
                  <li>
                    <a href="https://t.me/" target="_blank">
                      <FaTelegram className="text-3xl cursor-pointer text-blue-500 hover:text-blue-300 transform transition-all duration-300 hover:scale-125" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h1 className="font-bold text-center text-black">
                  Currently Working With
                </h1>
                <div className="flex space-x-6">
                  <SiMongodb className="text-3xl text-green-600 hover:text-green-400 transform transition-all duration-300 hover:scale-125 cursor-pointer" />
                  <SiExpress className="text-3xl text-gray-800 hover:text-gray-600 transform transition-all duration-300 hover:scale-125 cursor-pointer" />
                  <FaReact className="text-3xl text-blue-500 hover:text-blue-400 transform transition-all duration-300 hover:rotate-180 cursor-pointer" />
                  <FaNodeJs className="text-3xl text-green-700 hover:text-green-500 transform transition-all duration-300 hover:scale-125 cursor-pointer" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div
            className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1 animate-zoomIn"
          >
            <img
              src={pic}
              className="rounded-full shadow-xl hover:scale-110 transform transition-all duration-300 md:w-[450px] md:h-[450px] border-[6px] border-gray-300 hover-effect"
              alt="Profile"
            />
          </div>
        </div>
      </div>

      <hr />
    </>
  );
}

export default Home;
