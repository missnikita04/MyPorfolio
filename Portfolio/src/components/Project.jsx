import React from "react";
import { projects } from "../assets/assets";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

export default function Project() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    centerPadding: "0px",
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 1, centerMode: false } },
      { breakpoint: 1024, settings: { slidesToShow: 1, centerMode: false } },
      { breakpoint: 768, settings: { slidesToShow: 1, centerMode: false } },
      { breakpoint: 640, settings: { slidesToShow: 1, centerMode: false } },
    ],
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id="project"
    >
      <div className="p-8 bg-white">
        <div className="w-full max-w-6xl mx-auto my-20 px-2 sm:px-4">
          <h2 className="text-3xl font-bold text-center mb-10">
            My <span className="text-teal-600">Projects</span>
          </h2>

          <Slider {...settings}>
            {projects.map((project, idx) => (
              <div key={idx} className="px-2">
                <div className="bg-gray-50 h-[450px] text-black rounded-xl shadow-lg">
                  <div className="rounded-t-xl bg-white flex justify-center items-center h-56">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-44 w-44 object-cover rounded-full"
                    />
                  </div>

                  <div className="flex flex-col justify-center items-center gap-4 p-4 text-center">
                    <p className="text-xl font-semibold">{project.title}</p>
                    <p>{project.description}</p>

                    <a
                      href={project.link || "https://github.com/missnikita04"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline text-gray-700 mt-1 hover:text-teal-500 transition"
                    >
                      Get the code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </Slider>

          <div className="flex justify-center mt-10">
            <a
              href="https://github.com/missnikita04"
              target="_blank"
              className="px-6 py-2 text-white bg-teal-600 rounded-lg font-medium border-2 border-transparent hover:bg-white hover:border-teal-500 hover:text-gray-800 transition-colors duration-300"
            >
              See More
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
