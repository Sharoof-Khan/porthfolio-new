import React from "react";

const CardEducation = ({ degree, university, duration, imageicon }) => {
  console.log(
    "degree,university,duration,imageicon",
    degree,
    university,
    duration,
    imageicon
  );
  return (
    <div className=" flex bg-[#232323] flex-col lg:h-44 lg:px-20 px-10 py-4 rounded-md group overflow-y-hidden ">
      <div className="flex justify-start border-0">
        {/* <img alt="ICON" src={imageicon} className=" w-[40px] h-[40px] rounded-md group-hover:scale-110 transition-all delay-100 duration-500  "/> */}
        <img
          alt="ICON"
          src={imageicon}
          className="w-auto h-[40px] rounded-md group-hover:scale-110 transition-all delay-100 duration-500 -ml-2 "
        />
      </div>
      <p className="text-ellipsis  text-white text-[17px] py-2 group-hover:scale-110 transition-all delay-100 duration-500 group-hover:text-[#ff004f]">
        {degree}
      </p>
      <p className=" text-ellipsis font-bold  text-[#ff004f] ">{university}</p>
      <p className="text-ellipsis py-2 text-white">{duration}</p>
    </div>
  );
};

export default CardEducation;
