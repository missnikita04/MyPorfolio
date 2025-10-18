import React from "react";
import { projects } from "../assets/assets";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaSquareArrowUpRight } from "react-icons/fa6";
import { motion } from "framer-motion";


function NextArrow(props) {
  const { onClick } = props;
  return (

    // prev button 
    <div
      className="absolute top-1/2 right-[-40px] -translate-y-1/2 z-20 cursor-pointer"
      onClick={onClick}
    >
      <button className=" !text-2xl !bg-transparent bordern-none font-bold !text-teal-600 rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:!bg-teal-600 hover:!text-white transition">
        {" "}
        &gt;{" "}
      </button>
    </div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 left-[-40px] -translate-y-1/2 z-20 cursor-pointer"
      onClick={onClick}
    >
      <button className=" !text-2xl !bg-transparent bordern-none font-bold !text-teal-600 rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:!bg-teal-600 hover:!text-white transition">
        {" "}
        &lt;{" "}
      </button>
    </div>
  );
}

export default function Project() {
     
  var settings = {
    dots: true, //we want dots
    infinite: true, //how mani time scroll we set infinite time
    speed: 500, //speedd of scrolling
    slidesToShow: 3, ///how manu slide show in ui
    slidesToScroll: 1, //how manu slide scroll
    centerPadding: "0px",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,

    //customize the dots color
    customPaging: () => (
<div className="w-4  h-3 p-3 overflow-hidden rounded-full bg-teal-600 opacity-60 hover:opacity-100 transition-all relative top-4"></div>
    ),
    dotsClass: "slick-dots custom-dots",
    arrows: true, // make sure arrows are enabled

    // responsive: [
    //   { breakpoint: 1024, settings: { slidesToShow: 2 } },
    //   { breakpoint: 640, settings: { slidesToShow: 1 } },
    // ],
    //  className:"p-20 bg-gray-50"\

    // responsive card

    responsive: [
      {
      breakpoint: 1280, // large desktop
      settings: {
        slidesToShow: 2,
        centerMode: false,
      },
    },

  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 1,
      centerMode: false,
    },
  },
  {
    breakpoint: 640,
    settings: {
      slidesToShow: 1,
      centerMode: false, // Disable only on small screens
    },
  },
],
  };
  return (
     <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        id="project"
        // className="min-h-screen flex items-center pt-20 pb-16 "
      >

    <div className="p-8 bg-white">
      <div className=" w-full md:w-3/4 mx-auto my-20 px-4 relative">
        <div className="relative">
          <h2 className="text-3xl font-bold text-center mb-10">
            My <span className="text-teal-600">Projects</span>
          </h2>

          <Slider {...settings}>
            {projects.map((project, idx) => {
              return (
                <div key={idx} className="px-2">
                  <div className="bg-gray-50 h-[450px] text-black rounded-xl shadow-lg ">
                    <div className="rounded-t-xl bg-white flex justify-center items-center h-56">
                      <img
                        src={project.image}
                        alt="Porject-img"
                        className="h-44 w-44 object-cover"
                      />
                    </div>

                    <div className="flex flex-col justify-center items-center gap-4 p-4">
                      <p className="text-xl font-semibold">{project.title}</p>
                      <p>{project.description}</p>

                      {/* get link */}
                      <div className="flex space-x-2  mb-2 ">
                        <a className='underline text-gray-700 mt-1 hover:text-teal-500 transition' href="https://github.com/missnikita04">get the code</a>

                         <a
                        href="https://github.com/missnikita04"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="  text-gray-700 mt-2 hover:text-teal-500 transition"
                      >
                        <FaSquareArrowUpRight />
                      </a>

                      </div>
                     
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
          <div className='flex justify-center mt-10' >
<button className=" !mt-3 !px-6 !py-2 !text-white !bg-teal-600 !rounded-lg !font-medium !border-2 !border-transparent hover:!bg-white  hover:!border-teal-500 hover:!text-gray-800 transition-colors duration-300">
  See More
</button>     
     </div>
        </div>
      </div>
    </div>
     </motion.div>
  );
}
