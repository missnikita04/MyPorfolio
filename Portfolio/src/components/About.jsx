import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id="about"
      className="py-16 bg-gray-50"
    >
      <div className="px-4 md:px-10">
        {/*-------- Heading ----------*/}
        <h2 className="text-3xl font-bold text-center mb-8">
          About <span className="text-teal-600">Me</span>
        </h2>

        {/*-------- Responsive Shadow Card ----------*/}
        <div className="bg-white rounded-2xl shadow-lg shadow-gray-300 w-full md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto p-6 md:p-10">
          <p className="text-gray-700 text-lg leading-relaxed text-center">
            I’m Nikita Chauhan, a Computer Science graduate passionate about web development. 
            Skilled in Java, HTML, CSS, JavaScript, PHP, and MySQL. I’m learning the MERN stack to grow as a full-stack developer. 
            I enjoy solving problems, exploring new technologies, and building projects that 
            combine functionality with user-friendly design. 
          </p>
        </div>
      </div>
    </motion.div>
  );
}
