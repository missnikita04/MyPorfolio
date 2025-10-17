import React from "react";
import { motion } from "framer-motion";
import { skills } from "../assets/assets";

function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id="skills"
      className="py-20 bg-gray-50 "
    >
      {/* ----Skills Heading--------------- */}
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          My <span className="text-teal-600">Skills</span>
        </h2>
        <h3 className="text-gray-700 text-center max-w-2xl mx-auto mb-16">
          WHAT I AM DOING
        </h3>

        {/* ----------Skills div------------ */}

        <div className="bg-white grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto p-6 rounded-2xl">
          {skills.map((skill, index) => {
            return (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-6 hover:-translate-y-2 transition-transform duration-300 cursor-pointer"
              >
                <div className="flex items-center mb-4">
                  <skill.icon className="w-12 h-12 mr-6 text-teal-600" />
                  <h3 className="text-xl font-semibold">{skill.title}</h3>
                </div>
                <p className="text-gray-700 mb-4">{skill.description}</p>
                <div className="flex flex-wrap gap-2">
                  {skill.tags.map((tech) => {
                    return (
                      <span
                        className="px-3 py-1 text-white bg-teal-600 border shadow-lg border-white rounded-full text-sm"
                        key={tech}
                      >
                        {tech}
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

export default Skills;
