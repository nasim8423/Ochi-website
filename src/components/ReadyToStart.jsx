import React from "react";

const ReadyToStart = () => {
  return (
    <div className="relative w-full h-[90vh] bg-[#cdea68]">
      <div className="flex flex-col justify-center items-center h-[400px] pt-[180px]">
        <h className="text-[24vh] leading-[18vh] font-extrabold tracking-tighter">
          READY
        </h>
        <h className="text-[24vh] leading-[18vh] font-extrabold tracking-tighter">
          TO START
        </h>
        <h className="text-[24vh] leading-[18vh] font-extrabold tracking-tighter">
          THE PROJECT ?
        </h>
      </div>

      <div className="relative">
        <div className="w-[450px] h-[200px] opacity- absolute left-[35%] -bottom-6 flex justify-between items-center gap-4 p-3">
          <div className="bg-white w-1/2 h-[200px]  flex justify-center items-center rounded-full">
          <div className="bg-black w-[120px] h-[120px] hover:scale-95 transition-all duration-300  rounded-full"></div>
          </div>
          <div className="bg-white w-1/2 h-[200px]  flex justify-center items-center rounded-full">
          <div className="bg-black w-[120px] h-[120px]  hover:scale-95 transition-all duration-300 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadyToStart;
