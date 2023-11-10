import React, { useEffect, useRef } from "react";
import img from "../../images/animation_lmuefj2f.json";
import Lottie from "lottie-react";
import Typewriter from "typewriter-effect/dist/core";
import { motion } from "framer-motion";
import { description, name } from "../../constent/constent";

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
      <div className="flex  flex-col font-extrabold justify-center  h-64 lg:h-96 lg:mb-4  lg:flex-col  lg:ml-36 lg:mt-36 lg:justify-start ">
        <div className="flex flex-col border-0">
          <h1 className=" flex justify-center border-0 text-[30px] text-[#ff004f] lg:text-[40px]">
            Hey,I am {name}
          </h1>
          <h2 className=" flex justify-center text-[#4ee2ceb6] border-0">
            <span className="ml-2 lg:font-semibold" ref={typewriterRef}></span>
          </h2>
          {/* <p className=" border border-red-900 flex    text-ellipsis mt-2 text-white  lg:ml-10 leading-2  lg:max-w-[25vw]  text-start italic   "> */}
          <p className=" border-0 border-red-900  lg:max-w-[25vw]  px-8 md:px-8 lg:px-0 mt-2 text-white   lg:leading-[30px] lg:text-[20px]">
            {description}
          </p>
        </div>
      </div>
      <div className=" ml-8 mr-10 mt-8 lg:mt-5 lg:mr-8">
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
