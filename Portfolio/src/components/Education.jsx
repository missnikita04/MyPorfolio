import React from "react";
import { motion } from "framer-motion";
import { Educationdata } from "../assets/assets";

function Education() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id="education"
      className="p-8 sm:p-20" // smaller padding on mobile
    >
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Education</h2>

        <div className="max-w-4xl mx-auto w-full">
          <div className="space-y-12">
            {Educationdata.map((data, index) => (
              <div
                key={index}
                className="
                  relative
                  pl-8 sm:pl-12
                  before:content-['']
                  before:absolute
                  before:left-4 sm:before:left-0
                  before:top-0
                  before:w-[2px]
                  before:h-full
                  before:bg-teal-700
                  cursor-pointer
                  hover:translate-y-2
                  transition-all
                  duration-300
                "
              >
                {/* Timeline dot */}
                <div className="absolute left-0 sm:left-[-3px] top-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-teal-700"></div>

                {/* Education Card */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2">
                    <h3 className="text-lg sm:text-xl font-semibold">
                      {data.study}
                    </h3>
                    <span className="self-start sm:self-center px-3 py-1 bg-teal-700 text-white rounded-full text-xs sm:text-sm">
                      {data.duration}
                    </span>
                  </div>
                  <p className="text-gray-700 mb-2">{data.grad}</p>
                  <p>{data.organization}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Education;
