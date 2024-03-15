import React from "react";
import HeroImage from "../assets/IMG_4110(JPG).jpg";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-[100%] pt-[28%] md:pt-[15%] md:pb-[30%]  w-full  bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row pb-[10%] gap-10">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm A Half Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I have a 2 years of experience building and designing software.
            Currently I love to love on web applications using technologies like
            React, Tailwind and different Libraries.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className=" rounded-2xl mx-auto w-[100%] h-[60%] md:w-[50%] md:h-[60%] "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
