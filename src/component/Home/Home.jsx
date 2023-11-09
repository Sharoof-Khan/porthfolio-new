import React, { useEffect, useRef } from "react";
import img from "../../images/animation_lmuefj2f.json";
import Lottie from "lottie-react";
import Typewriter from "typewriter-effect/dist/core";
import { motion } from "framer-motion";
import { name } from "../../constent/constent";

const PageTransion = {
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

const Home = () => {
  const typewriterRef = useRef(null);

  useEffect(() => {
    const typewriter = new Typewriter(typewriterRef.current, {
      strings: [
        "I am a Computer Science Student",
        "I like coding",
        "I enjoy learing new things",
        "Keep scrolling!",
      ],
      autoStart: true,
      loop: true,
      typeSpeed: 30,
      deleteSpeed: 50,
    });

    typewriterRef.current.style.display = "flex";
    typewriterRef.current.style.flexWrap = "wrap";

    return () => {
      typewriter.stop();
    };
  }, []);

  return (
    <motion.div
      animate="in"
      initial="out"
      exit="out"
      variants={PageTransion}
      className="flex lg:min-h-[70vh] lg:justify-between flex-wrap md:justify-center"
    >
      <div className="flex  flex-col font-extrabold justify-center h-64 lg:h-96 lg:mb-4  lg:flex-col  lg:ml-36 lg:mt-48  lg:justify-start ">
        <div className="flex flex-col">
          <h1 className=" flex justify-center  text-[30px]  first:even: text-[#ff004f] lg:text-[40px] ">
            Hey,I am {name}
          </h1>
          <h2 className=" flex justify-center text-[#4ee2ceb6]">
            <span className="ml-2 lg:font-semibold" ref={typewriterRef}></span>
          </h2>
          <p className=" flex justify-center  px-8 text-ellipsis mt-2 text-white  lg:ml-10 leading-2  lg:w-[330px]  text-center italic   ">
            I'm currently a Full Stack Developer seeking many ways to improve my
            skills through problem-solving and creating various projects!
            Explore NavBar to learn more about me.
          </p>
        </div>
      </div>
      <div className="lg:mt-5 lg:mr-8 ml-8 mr-10 mt-5">
        <Lottie
          animationData={img}
          style={
            {
              // height: 500,
            }
          }
        />
      </div>
    </motion.div>
  );
};

export default Home;
