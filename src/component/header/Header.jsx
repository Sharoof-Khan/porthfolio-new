import React from "react";
import { IoMdSchool } from "react-icons/io";
import { GoOrganization } from "react-icons/go";
import { FaChild } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { BiSolidContact } from "react-icons/bi";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Icons = [
  {
    icon: <IoMdSchool />,
    url: "/education",
  },
  {
    icon: <GoOrganization />,
    url: "/experince",
  },
  {
    icon: <GiSkills />,
    url: "/skills",
  },
  {
    icon: <FaChild />,
    url: "/aboutme",
  },
  {
    icon: <BiSolidContact />,
    url: "/contactme",
  },
];

const Header = () => {
  // State to track the visibility of the mobile menu
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const navigate = useNavigate();
  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };

  const handleNavigation = (url) => {
    navigate(url);
  };

  return (
    <div className=" lg:flex lg:flex-row justify-between  my-8 mx-8 border-b-4 border-[#ff004f] pb-4 bg-slate-800 overflow-x-hidden">
      {/* lg:flex-wrap */}
      <div className="  flex items-center">
        {/* This div is visible on all screens */}
        <div
          className="first-letter:font-bold mt-4 text-[#ff004f] ml-3 text-3xl lg:text-3xl hover:text-[30px]  hover:scale-110 transition duration-500 cursor-pointer"
          onClick={() => {
            setMobileMenuVisible(false);
            handleNavigation("/");
          }}
        >
          Sharoof Khan
        </div>
        <div className="lg:hidden flex ml-auto ">
          {" "}
          {/* This div is visible only on small screens and aligned to the right */}
          <button
            onClick={toggleMobileMenu}
            className="text-white p-2 focus:outline-none "
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuVisible ? (
                <path d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              )}
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`lg:flex lg:flex-row lg:space-x-40 lg:mr-48 lg:mt-2 text-cyan-100 text-[25px] ${
          mobileMenuVisible ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col lg:flex-row flex-wrap lg:space-x-40 mt-2 space-y-4 text-cyan-100 text-[25px]">
          <li />
          {Icons.map((item, index) => (
            <Link
              key={index}
              className={`${
                item.url === window.location.pathname ? "text-[#ff004f]" : " "
              }  hover:text-[#ff004f] w-fit`}
              onClick={() => setMobileMenuVisible(false)}
              to={item.url}
            >
              {/* onClick={()=>{handleNavigation(item.url)}} */}
              {item.icon}
            </Link>
          ))}
          <li />
        </ul>
      </div>
    </div>
  );
};

export default Header;
