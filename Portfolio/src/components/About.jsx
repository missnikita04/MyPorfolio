import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function About() {

  // read MORE and Less
  const [readMore, setReadMore] = useState(false);

  // Sample content
  const shortText = "Hi, I’m nikita chauhan, a Computer Science graduate passionate about web development...";
  const longText = `
    I’m nikita chauhan, a Computer Science graduate passionate about web development. Skilled in Java,  HTML, CSS, JavaScript, PHP, MySQL ,React ,   I’ve built projects like , Aamrkunj website, Qr generator,Prepaid electric system with automation, Currently learning the MERN stack to grow as a full-stack developer. I enjoy solving problems, exploring new technologies, and building projects that combine functionality with user-friendly design. My goal is to create impactful digital solutions while continuously improving my skills
  `;

  const toggleReadMore = () => {
    setReadMore(!readMore);
  };

  return (

    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id="about"
      className="p-20 bg-gray-50"
    >
      <div className="container px-6">
        {/*-------- Heading ----------*/}
        <h2 className="text-3xl font-bold text-center mb-4">
          About <span className="text-teal-600">Me</span>
        </h2>
        <p className="text-gray-700 text-center max-w-2xl mx-auto mb-16">
          A passionate web developer dedicated to building responsive and
          creative digital experiences{" "}
        </p>
        {/* content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="md:w-full flex justify-center"
        >
          <div className="rounded-2xl p-8 shadow-lg shadow-gray-300 bg-white max-w-3xl">
            <p styleclassName="text-gray-700 mb-6 text-center">
              <span className="hidden md:inline">{longText}</span>
              <span className="md:hidden">{readMore ? longText : shortText}</span>
            </p>
             <button
        onClick={toggleReadMore}
        className="!text-gray-700 ml-30 border-none !cursor-pointer !bg-white hover:!text-gray-500  hover:!bg-white !font-semibold  md:!hidden"
        
      >
      
        {readMore ? "Read Less" : "Read More"}
      </button>
          </div>
        </motion.div>
        <div></div>
      </div>
    </motion.div>
  );
}
