import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

const HeroButton = () => {
  return (
    <div className="pt-4 cursor-pointer pb-[70px] ">
    <div className="flex justify-between items-center px-10">
      <p>For public and private companies</p>
      <p>For public and private companies</p>
      <div className="flex items-center gap-1">
        <button className="px-4 py-1 border-2 bg-transparent border-[#898080] rounded-full">
          START THE PROJECT
        </button>
        <FaArrowRightLong className="h-9 w-9 p-2 rounded-full border-2 border-[#3f3d3d] -rotate-45" />
      </div>
    </div>
  </div>
  )
}

export default HeroButton