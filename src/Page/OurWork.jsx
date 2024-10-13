import React from "react";
import Navbar from "../components/Navbar";

const OurWork = () => {
  return (
    <div className="bg-[#cdea68] w-full h-screen">
      <Navbar />

      {/*--------- Work text --------*/}
      <div className="pt-20">
        <h1 className="px-10 text-[14vh] font-extrabold tracking-tight">WORK</h1>
      </div>

      <div className="relative ">
        <div className="bg-[#778546] h-11 w-[90%] mx-auto mt-[24%] " >
        <div className="relative ">
        <div className="w-[450px] h-[200px] opacity- absolute left-[35%] -bottom-6 flex justify-between items-center gap-4 p-3 ">
          <div className="bg-white w-1/2 h-[200px]  flex justify-center items-center rounded-full">
          <div className="bg-black w-[120px] h-[120px] hover:scale-95 transition-all duration-300  rounded-full"></div>
          </div>
          <div className="bg-white w-1/2 h-[200px]  flex justify-center items-center rounded-full">
          <div className="bg-black w-[120px] h-[120px]  hover:scale-95 transition-all duration-300 rounded-full"></div>
          </div>
        </div>
      </div>
        </div>
      </div>
    </div>
  );
};

export default OurWork;
