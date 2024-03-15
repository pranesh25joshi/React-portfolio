import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {Link} from "react-scroll"

const Navebar = () => {
  const [flip, SetFlip] = useState(false);

  function toggle() {
    SetFlip(!flip);
  }

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 fixed bg-black px-4 mb-56">
      <div>
        <h1 className="text-4xl font-bold font-signature text-white ml-2 ">
          Pranesh
        </h1>
      </div>

      <ul className="hidden md:flex">
        {links.map((link) => (
          <li
            key={link.id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
          >
            <Link to={link.link} smooth duration={500}>{link.link}</Link>
            
          </li>
        ))}
      </ul>

      <div
        className=" cursor-pointer pr-4 z-10  text-gray-400 md:hidden "
        onClick={toggle}
      >
        {/* <FaBars size={30} /> */}
        {flip ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {flip ? (
        <ul className="flex flex-col justify-center items-center absolute left-0 top-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 gap-6">
          {links.map((link) => (
            <li
              key={link.id}
              className="px-4 cursor-pointer capitalize font-medium text-gray-500 text-4xl hover:scale-105 duration-200" 
            >
              <Link onClick={(() =>
                SetFlip(!flip))}  to={link.link} smooth duration={500}>{link.link}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Navebar;
