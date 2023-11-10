import React from "react";
import { motion } from "framer-motion";
import CardExperince from "../Card Education/CardExperince";
import babi from "../images/Babibai Enterprises - Visiting Card New Card 3.png";

const expeincearry = [
  {
    compnayname: "Don Bosco",
    location: "Navi Mumbai,Nerul",
    designation: "Software Developer",
    discription:
      "Work as an Fullstack Developer(MERN STACK). I had done all the backend work.Working in this project is more challening for me ",
    worktype: "Full-Time",
    // experince: "5 Months... Present",
    experince: "May 2023 - Present",
    skills: "React,Taildwindcss",
    icon: "https://media.licdn.com/dms/image/C4E0BAQHjRwwilm0LLg/company-logo_200_200/0/1661782672391?e=1704326400&v=beta&t=pFdzHRse-Hxamm4OPUkzXQQKJNeolPfndmf0RbLPT_E",
  },
  {
    compnayname: "Boppo Technologies",
    location: "Navi Mumbai,Bhandup",
    designation: "Software Developer",
    discription:
      "Working as an Frontend Developer.Creating the Design and API'S Integration.New Development Done while working.",
    worktype: "Full-Time",
    experince: "Aug 2022 - May 2023",
    skills: "React,React-Native,Javascript",
    icon: "https://www.boppotechnologies.com/images/illustrator/BoppoLogo.svg",
  },
];

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
const Experince = () => {
  return (
    <div>
      <motion.div
        animate="in"
        initial="out"
        exit="out"
        variants={PageTransion}
        className="flex px-8 mb-16 lg:px-16 lg:min-h-[70vh] "
      >
        <div className="grid lg:grid-cols-2 gap-4 lg:mr-36 ">
          {expeincearry.map((item, index) => (
            <>
              <CardExperince
                key={index}
                compnayname={item.compnayname}
                location={item.location}
                designation={item.designation}
                discription={item.discription}
                worktype={item.worktype}
                experince={item.experince}
                skills={item.skills}
                icon={item.icon}
              />
            </>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Experince;
