import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import {Link ,Element} from 'react-scroll';
import {assets} from '../assets/assets'

function Navbar() {
  //toggle fun\
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div>
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-sm py-2 sm:py-3 px-4 sm:px-8 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <img className=" w-30 md:w-64" src={assets.LogoImg} alt="logo..." />
          </div>
          <div className=" hidden md:flex space-x-8">
            <Link
              to="home"
              smooth={true} duration={800}
               offset={-80} 
              className="relative text-black cursor-pointer transition duration-300 hover:text-teal-700 group"
            >
              <span>Home</span>
            </Link>
            <Link
              to="about"
              smooth={true} duration={800}
               offset={-80} 
              className="relative text-black cursor-pointer transition duration-300 hover:text-teal-700 group"
            >
              <span>About</span>
            </Link>
            <Link
              to="education"
              smooth={true} duration={800}
               offset={-80} 
              className="relative text-black cursor-pointer transition duration-300 hover:text-teal-700 group"
            >
              <span>Education</span>
            </Link>
            <Link
              to="skills"
              smooth={true} duration={800}
               offset={-80} 
              className="relative text-black cursor-pointer transition duration-300 hover:text-teal-700 group"
            >
              <span>Skills</span>
            </Link>
            <Link
              to="project"
              className="relative text-black cursor-pointer transition duration-300 hover:text-teal-700 group"
            >
              <span>Projects</span>
            </Link>
            <Link
              smooth={true} duration={800}
               offset={-80} 
              to="contact"
            
              className="relative text-black cursor-pointer transition duration-300 hover:text-teal-700 group"
            >
              <span>Contact</span>
            </Link>
          </div>

          {/* hamburger */}
          <div className="md:hidden">
            {/* use state hook */}
            {showMenu ? (
              <FaTimes
                onClick={() => {
                  setShowMenu(!showMenu);
                }}
                className=" text-2xl cursor-pointer"
              />
            ) : (
              <FaBars
                onClick={() => {
                  setShowMenu(!showMenu);
                }}
                className="text-2xl cursor-pointer"
              />
            )}
          </div>
        </div>

        {/* Mobile menus */}
        {showMenu && (
          <div className="md:hidden mt-2 bg-gray-50 rounded-lg text-center justify-center h-1/2 p-4 flex flex-col space-y-3 hover:text-teal-600  hover:cursor-pointer hover:bg-white">
            <Link
            smooth={true} duration={900}
             offset={-80} 
              onClick={() => {
                  setShowMenu(!showMenu);
                }}
              to="home"
              className="relative text-black cursor-pointer transition duration-300 hover:text-teal-700 group"
            >
              <span>Home</span>
            </Link>{" "}
            <Link
              onClick={() => {
                  setShowMenu(!showMenu);
                }}
              to="about"
              smooth={true} duration={900}
               offset={-80} 
              className="relative text-black cursor-pointer transition duration-300 hover:text-teal-700 group"
            >
              <span>About</span>
            </Link>
            <Link
              onClick={() => {
                  setShowMenu(!showMenu);
                }}
              to="education"
              smooth={true} duration={900}
               offset={-80} 
              className="relative text-black cursor-pointer transition duration-300 hover:text-teal-700 group"
            >
              <span>Education</span>
            </Link>
            <Link
              onClick={() => {
                  setShowMenu(!showMenu);
                }}
              to="skills"
              smooth={true} duration={900}
               offset={-80} 
              className="relative text-black cursor-pointer transition duration-300 hover:text-teal-700 group"
            >
              <span>Skills</span>
            </Link>
            <Link
              onClick={() => {
                  setShowMenu(!showMenu);
                }}
              to="project"
              smooth={true} duration={900}
               offset={-80} 
              className="relative text-black cursor-pointer transition duration-300 hover:text-teal-700 group"
            >
              <span>Projects</span>
            </Link>
            <Link
              onClick={() => {
                  setShowMenu(!showMenu);
                }}
              to="contact"
              smooth={true} duration={900}
               offset={-80} 
              className="relative text-black cursor-pointer transition duration-300 hover:text-teal-700 group"
            >
              <span>Contact</span>
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
