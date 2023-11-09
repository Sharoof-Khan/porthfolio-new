import React from "react";
import CardEducation from "../../Card Education/CardEducation";
import hof from "../../images/Hof_University_of_Applied_Sciences_Logo.jpg";
import kpb from "../../images/images.png";
import { motion } from "framer-motion";

const education = [
  {
    degree: "Full Stack Developement (MERN)",
    university: "Masai School",
    duration: "Apr 2021 - Apr 2022",
    imageicon: "https://www.masaischool.com/images/footer/masai-logo-dark.svg",
  },
  {
    degree: "Bsc IT",
    university: "Vidyalankar School OF Information Technologies",
    duration: "july 2017 - Nov 2020",
    imageicon:
      "https://vidyalankar.edu.in/wp-content/uploads/2014/03/VSIT-1.png",
  },
];

const PageTransion = {
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: "-100vh",
  },
};

const Education = () => {
  return (
    <motion.div
      animate="in"
      initial="out"
      exit="out"
      variants={PageTransion}
      className="  flex px-8 lg:px-16 py-8 overflow-y-hidden  lg:min-h-[69vh]"
    >
      <div className=" grid lg:grid-cols-2 gap-4 mx-auto   ">
        {/* <CardEducation />
        <CardEducation />
        <CardEducation /> */}
        {education.map((item, index) => (
          <>
            <CardEducation
              key={index}
              degree={item.degree}
              university={item.university}
              duration={item.duration}
              imageicon={item.imageicon}
            />
          </>
        ))}
      </div>
    </motion.div>
  );
};

export default Education;
// export default Education;
