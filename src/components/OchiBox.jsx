import React from "react";
import { FaStar } from "react-icons/fa";

const OchiBox = () => {
  return (
    <div className="bg-[#f1f1f1] py-10">
      <div className="flex gap-4 px-10">
        <div className="bg-[#004d43] w-1/2 h-[380px] rounded-lg ">
          <div className="relative flex justify-center items-center h-[380px]">
            <h1 className="text-5xl font-medium text-[#cdea68]">Ochi</h1>
            <button
              className="text-[#cdea68] px-4 py-1 border rounded-full border-[#cdea68] absolute
            left-4 top-80"
            >
              @2019-2022
            </button>
          </div>
        </div>
        <div className=" w-1/2 h-[440px] rounded-lg flex gap-4 ">
          <div className="bg-[#212121] w-1/2 h-[380px] rounded-lg">
            <div className="relative flex justify-center items-center h-[380px]">
              <h1 className="text-5xl font-medium text-white">Clutch</h1> <br /><br /><br />
              <div className="text-[#cdea68] text-xs flex gap-[2px] absolute mt-16">
                <p><FaStar /></p>
                <p><FaStar /></p>
                <p><FaStar /></p>
                <p><FaStar /></p>
                <p><FaStar /></p>
              </div>

              <button
                className="text-white px-4 py-1 border rounded-full border-white absolute
            left-4 top-80"
              >
                Rating 5.0 on Clutch
              </button>
            </div>
          </div>
          <div className="bg-[#212121] w-1/2 h-[380px] rounded-lg ">
            <div className="relative flex justify-center items-center h-[380px]">
              {/* <h1 className="text-5xl font-medium text-white">Clutch</h1> */}
              <img src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" className="h-[100px]" alt="" />

              <button
                className="text-white px-4 py-1 border rounded-full border-white absolute
            left-4 top-80"
              >
                BUSINESS BOOTCAMP ALUMANI
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OchiBox;
