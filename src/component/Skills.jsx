import React from "react";
import { motion } from "framer-motion";
// import CardSkills from "../Card Education/CardSkills";
import TextSpan from "../Card Education/TextSpan";
import CardSkills from "../Card Education/CardSkills";

const skills = "Skills";
const skillstext = skills.split("");

console.log("skillstext", skillstext);
const PageTransion = {
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: "-100%",
  },
};

const Skills = () => {
  return (
    <motion.div
      animate="in"
      initial="out"
      exit="out"
      variants={PageTransion}
      className="  flex text-white flex-col  justify-center   px-8 lg:px-16 lg:py-1 py-4 lg:min-h-[70vh]"
    >
      <div className="flex flex-wrap justify-center flex-col ">
        <div className="flex flex-wrap flex-col space-y-2">
          <div>
            <p className="text-center">
              A PROBLEM IS A CHANCE FOR YOU TO DO YOUR BEST.
            </p>
          </div>
          <div className="w-fit mx-auto flex text-6xl ">
            {skillstext.map((latter, index) => {
              return (
                <>
                  <TextSpan  key={index}>
                   
                   {/* condistion for the space */}
                {latter === " "? "\u00A0": latter}    
                </TextSpan>
                </>
              );   
            })}
          </div>
          <dib>
            <p className="text-center">
              React, JS, building small and medium web applications with
              React, custom plugins, features, animations, and coding
              interactive layouts. I am also{" "}
              <span className="text-[#ff004f]  font-bold">full-stack</span>{" "}
              developer by experience.
            </p>
          </dib>
          <div>
            <p className="text-center">
              Visit my{" "}
              <span className="text-[#ff004f] font-bold cursor-pointer ">
                <a
                  href="https://www.linkedin.com/in/abhishek-bhoir-0a242212b/"
                  target="_blank"
                >
                  Linkedin
                </a>
              </span>{" "}
              for more details.
            </p>
          </div>
        </div>
      </div>
      <CardSkills/>
    </motion.div>
  );
};

export default Skills;
