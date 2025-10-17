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
      className="p-20 "
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">Education</h2>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-12">
            {Educationdata.map((data, index) => {
              return (
                /*for vertical line */ <div
                  key={index}
                  className="relative pl-12 before:content-[''] before:absolute before:left-0 before:top-0 before:w-[2px] before:h-full before:bg-teal-700 cursor-pointer hover:translate-y-2 transition-all duration-300"
                >
                  {/*---- -----Timeline dot  + vertical line ------------ */}
                  {/* for the dot */}{" "}
                  <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-teal-700"></div>
                  {/* ------Education Box------- */}
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold ">{data.study}</h3>
                      <span className="px-3 py-1 bg-teal-700 text-white rounded-full text-xs md:text-sm">
                        {data.duration}
                      </span>
                    </div>
                    <p className="text-gray-700 mb-2">{data.grad}</p>
                    <p className="mb-2">{data.organization}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Education;
