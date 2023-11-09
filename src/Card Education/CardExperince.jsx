import React from "react";
// import hof from "../images/Hof_University_of_Applied_Sciences_Logo.jpg"
import {FaLocationDot} from "react-icons/fa6"
import {BiSolidTimeFive} from "react-icons/bi"
import {BsBagFill} from "react-icons/bs"
import {RiComputerFill} from "react-icons/ri"


const CardExperince = ({compnayname,location,designation,discription,worktype,experince,skills,icon}) =>{
    return(
        <div className=" flex bg-[#232323] flex-col lg:ml-32 w-[86vw] lg:w-auto lg:h-[34vh] h-auto mt-2  py-2 rounded-md group overflow-hidden ">

            <div className="  flex lg:flex-row flex-col gap-3 pl-4 overflow-x-hidden overflow-y-hidden justify-evenly  ">
                <div className="flex mt-2">
                <img alt="ICON" src={icon} className=" w-[50px] h-[50px] rounded-md group-hover:scale-110 transition-all delay-100 duration-500  "/>
                </div>
                <div className="lg:text-[20px] text-white flex justify-between lg:gap-2 gap-1  lg:flex-col flex-col">
                    <div className="">
                    <p className="border-red-900">{compnayname}</p>
                    </div>
                    <div className="flex lg:flex-row gap-2">
                        <FaLocationDot/><p>{location}</p>
                    </div>
                </div>
            </div>
           <div>
           <div className="text-[#ff004f]   flex flex-wrap lg:flex-col text-center  font-semibold">
                <p className=" pl-20 lg:pl-8 group-hover:scale-110 transition-all delay-100 duration-500">{designation}</p>
            </div>
            <div className="flex flex-wrap mb-2 border-b-2 border-[#ff004f]">
                <p className=" text-white lg:pl-8 pl-8 text-left mb-2">
                    {discription}
                </p>
            </div>
           </div> 
           <div className="flex lg:flex-row text-white pl-4 lg:pl-8  ">
                <div className="flex lg:flex-row gap-2 mt-2">
                    <BiSolidTimeFive/><p>{worktype}</p>
                    <BsBagFill/><p>{experince}</p>
                </div>
            </div>
            <div className="flex lg:flex-row text-white pl-4 lg:pl-8">
                <div className="flex lg:flex-row gap-2 mt-2">
                    <RiComputerFill/><p>{skills}</p>
                </div>
            </div>
        </div>
    )
}

export default CardExperince