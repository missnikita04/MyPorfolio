import React from 'react'
import { FaGithub, FaTwitter, FaLinkedin , FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md"; // Material Design Email Icon

function Footer() {
  return (
 <footer className="bg-gray-900 text-white py-20">
      <div className="container mx-auto flex flex-col items-center space-y-4">
        <div className="flex space-x-6 text-2xl">
          <a
            href="https://github.com/missnikita04"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-500 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=nikitachauhan3802@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-500 transition"
          >
           < MdEmail/>
          </a>
          <a
            href="https://www.linkedin.com/in/nikita-chauhan-2b91b32a1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-500 transition"
          >
             <FaLinkedin />
          </a>
          <a
            href="https://instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-500 transition"
          >
            <FaInstagram />
          </a>
        </div>
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Nikita Chauhan. All rights reserved.
        </p>
      </div>
    </footer>  )
}

export default Footer
