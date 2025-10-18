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
      className="p-8 sm:p-2"
    >
      {/* ✅ Full width wrapper */}
      <div className="w-full px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Education</h2>

        <div className="w-full mx-auto md:max-w-5xl">
          <div className="space-y-8">
            {Educationdata.map((data, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-6 shadow-md shadow-gray-200"
              >
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
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Education;
