import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <div className="bg-[#f1f1f1] w-full h-screen">
      <Navbar />

      {/*------ Home text start here -----*/}
      <div className="relative px-10 pt-[120px] capitalize">
        <h1 className="text-8xl font-extrabold leading-[77px] tracking-tight">
          WE ARE
        </h1>
        <div className="flex items-center gap-1 mb-10">
          <div className="bg-green-900 h-[68px] w-[100px] rounded flex "></div>
          <h1 className="text-8xl font-extrabold leading-[77px] tracking-tight">
            OCHI DESIGN
          </h1>
        </div>
      </div>
      {/*------ Home text End here -----*/}

      {/*------ Underline start here -----*/}
      <div className=" pt-24">
        <div className="border border-[#d8cfcf]"></div>
      </div>
      {/*------ Underline End here -----*/}

      {/*----- Home Buttom text start here------ */}
      <div className="pt-4 cursor-pointer pb-[70px] ">
        <div className="flex justify-between items-center px-10">
          <p>For public and private companies</p>
          <p>For public and private companies</p>
          <div className="flex items-center gap-1">
            <button className="px-4 py-1 border-2 bg-transparent border-[#898080] rounded-full">
              OUR WORK
            </button>
            <FaArrowRightLong className="h-9 w-9 p-2 rounded-full border-2 border-[#3f3d3d] -rotate-45" />
          </div>
        </div>
      </div>
      {/*----- Home Buttom text End here------ */}
    </div>
  );
};

export default About;
