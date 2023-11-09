import React from "react";
import { GrReactjs } from "react-icons/gr";
import { IoLogoNodejs } from "react-icons/io";
import { AiOutlineHtml5 } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { SiAmazons3 } from "react-icons/si";
import { BiLogoTailwindCss } from "react-icons/bi";
import { DiMongodb } from "react-icons/di";
import { SiPostman } from "react-icons/si";
import { GrDocker } from "react-icons/gr";

const CardSkills = () => {
  return (
    <div className=" grid lg:grid-cols-4 grid-flow-row lg:gap-4 grid-cols-2 lg:mt-4 md:gap-4 mt-8 lg:ml-52 ml-12 ">
      <div className="  hover:text-[#61dafb] hover:scale-110 transition duration-700  w-fit ">
        <GrReactjs size={70} className="p-1 ml-2" />
        <p className="text-[25px] font-sans ">React Native</p>
      </div>
      <div className="  hover:text-[#61dafb] hover:scale-110 transition duration-700   w-fit ">
        <GrReactjs size={70} className="p-1 ml-2" />
        <p className="text-[25px] font-sans ">ReactJs</p>
      </div>

      <div className=" hover:text-[#61dafb] hover:scale-110 transition duration-700 w-fit ">
        <BiLogoTailwindCss size={70} className="p-1 ml-5" />
        <p className="text-[25px] font-sans ">Tailwindcss</p>
      </div>

      <div className="hover:text-yellow-500 hover:scale-110 transition duration-700 w-fit ">
        <SiJavascript size={70} className="p-1 ml-3" />
        <p className="text-[25px] font-sans    ">Javascript</p>
      </div>

      <div className="hover:text-[#f06529] hover:scale-110 transition duration-700 w-fit ">
        <AiOutlineHtml5 size={70} className="p-1 ml-0" />
        <p className="text-[25px] font-sans  ">HTML5</p>
      </div>

      <div className=" hover:text-[#2965f1] hover:scale-110 transition duration-700 w-fit ">
        <FaCss3Alt size={70} className="p-1 ml-0" />
        <p className="text-[25px] font-sans ml-3 ">CSS3</p>
      </div>

      {/* <div className=" hover:text-[#FF9900] hover:scale-110 transition duration-700 w-fit ">
          <SiAmazons3 size={70} className="p-1 ml-4" />
          <p className="text-[25px] font-sans ">Amazons3</p>
        </div> */}

      <div className="hover:text-[#5fe97d] hover:scale-110 transition duration-700 w-fit ">
        <DiMongodb size={70} className="p-1 ml-4" />
        <p className="text-[25px] font-sans  ">Mongodb</p>
      </div>

      <div className="hover:text-[#215732] hover:scale-110 transition duration-700 w-fit  ">
        <IoLogoNodejs size={70} className="p-1 ml-2" />
        <p className="text-[25px] font-sans   ">Express.Js</p>
      </div>

      {/* <div className=" hover:text-[#ef5b25] hover:scale-110 transition duration-700 w-fit ">
          <SiPostman size={70} className="p-1 ml-3"/>
          <p className="text-[25px] font-sans ">Postman</p>
        </div> */}

      {/* <div className=" hover:text-[#384d54] hover:scale-110 transition duration-700 w-fit ">
          <GrDocker size={70} className="p-1 ml-2"/>
          <p className="text-[25px] font-sans ">Docker</p>
        </div> */}
    </div>
  );
};

export default CardSkills;
