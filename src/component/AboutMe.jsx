import React from "react";
import { motion } from "framer-motion";
import img from "../images/about_me.json";
import Lottie from "lottie-react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import CardSocial from "../Card Education/CardSocical";

// const aboutme =
//   "With more than several years of experience working as a software engineer, I've developed skills and expertise to analyse businesses problems quickly, identify business needs, develop solutions and implement systems. I have an analytical mindset for solving problems which I consider as my strongest qualities. My interest includes new technologies and research and Cascading Style Sheets CSS algorithms. Im used to working in dynamic environment with tight deadlines, where my communication and organizational skills can make things happen. Also, I am quick learner and can adapt to any situation.";

// const textTwo = aboutme.split("");

const social = [
  {
    title: "Linkedin",
    icon: <AiFillLinkedin size={35} />,
    url: "https://www.linkedin.com/in/sharoof-khan-0703/",
  },
  // {
  //   title:"Facebook",
  //   icon:<AiFillFacebook size={35}/>,
  //   url:" "
  // },
  // {
  //   title:"Instgram",
  //   icon:<AiFillInstagram size={35}/>,
  //   url:""
  // },
  {
    title: "GitHub",
    icon: <AiFillGithub size={35} />,
    url: "https://github.com/sharoof-khan",
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

const AboutMe = () => {
  const handleOnclik = (url) => {
    window.open(url, "_blank");
  };

  return (
    <motion.div
      animate="in"
      initial="out"
      exit="out"
      variants={PageTransion}
      className=" flex lg:min-h-[50vh]"
    >
      <div className=" flex flex-wrap  justify-between lg:flex-row flex-col  gap-5  ">
        <div className="lg:w-[30%] mt-3 lg:ml-36 lg:mb-28  lg:mt-16 ml-7 mr-7 lg:border-b-2 ">
          <p className=" text-justify text-gray-300">
            With more than several years of experience working as a software
            engineer, I've developed skills and expertise to analyse businesses
            problems quickly, identify business needs, develop solutions and
            implement systems. I have an analytical mindset for solving problems
            which I consider as my strongest qualities. My interest includes new
            technologies and Observant and details oriented React and React
            Native developer with specialization in MERN Stack. Im used to
            working in dynamic environment with tight deadlines, where my
            communication and organizational skills can make things happen.
            Also, I am quick learner and can adapt to any situation.
          </p>
        </div>
        <div className=" flex  lg:w-[40%] justify-center flex-col  lg:mt-2 lg:mr-36 ml-7 mr-7 lg:border-b-2  ">
          <Lottie animationData={img} />
          <div className=" flex flex-wrap  absolute top-[89%] left-[10%] text-red-700  lg:text-white lg:left-auto lg:top-[74%] lg:right-[28%] justify-end lg:gap-4 gap-5  cursor-pointer w-fit lg:mt-3 mt-3">
            {social.map((list, index) => (
              <>
                <CardSocial
                  key={index}
                  icon={list.icon}
                  url={list.url}
                  handleOnclik={handleOnclik}
                />
              </>
            ))}
            <p></p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutMe;
