import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Typewriter } from "react-simple-typewriter";

function Hero() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        id="home"
        className="min-h-screen flex items-center pt-20 pb-16"
      >
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          {/* -------- LEFT Side Content -------- */}
          <div className="md:w-1/2 mb-8 mt-5 md:mb-0 !order-2 md:!order-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi! <br /> I'm{" "}
              <span className="text-teal-600">Nikita Chauhan</span>
            </h1>

            {/* Slide-up animation */}
<div className="h-12 md:h-16 flex items-center justify-center md:justify-start text-2xl font-bold text-gray-700 mt-2">              <Typewriter
                words={["Full Stack Developer", "Computer Science Engineer"]}
                loop={0} // infinite
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </div>
            {/* Social Icons */}
            <div className="flex justify-center md:justify-start space-x-6 text-2xl mb-4 mt-4">
              <a
                href="https://github.com/missnikita04"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-teal-500 transition"
              >
                <FaGithub />
              </a>
              <a
                href="mailto:nikitachauhan3802@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-teal-500 transition"
              >
                <MdEmail />
              </a>
              <a
                href="https://www.linkedin.com/in/nikita-chauhan-2b91b32a1/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-teal-500 transition"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://instagram.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-teal-500 transition"
              >
                <FaInstagram />
              </a>
            </div>

            {/* Download CV Button */}
            <div className="flex justify-center md:justify-start mt-2">
              <a
                href={assets.cv}
                download
                className="px-6 py-3 text-white bg-teal-600 rounded-lg font-medium border-2 border-transparent hover:bg-white hover:border-teal-500 hover:text-gray-800 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* -------- RIGHT Side Content -------- */}
          <div className="md:w-1/2 flex justify-center !order-1 md:!order-2">
            <div className="relative mt-5 w-64 h-64 md:w-80 md:h-80">
              <img
                className="relative border-2 border-gray-100 shadow-lg rounded-full w-64 h-64 md:w-80 md:h-80 object-cover"
                src={assets.profileImg}
                alt="profile"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Hero;
