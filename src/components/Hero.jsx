import React from 'react'

const Hero = () => {
  return (
    <div className="relative px-10 pt-[120px] capitalize">
    <h1 className="text-8xl font-extrabold leading-[77px] tracking-tight">
      We create
    </h1>
    <div className="flex items-center gap-1">
      <div className="bg-green-900 h-[68px] w-[100px] rounded flex "></div>
      <h1 className="text-8xl font-extrabold leading-[77px] tracking-tight">
        Eye-opening
      </h1>
    </div>
    <h1 className="text-8xl font-extrabold leading-[77px] tracking-tight">
      Presentations
    </h1>

    <div className="bg-[#e73c37] w-[150px] px-3 py-4 text-xs text-white font-medium absolute top-[130px] -right-[57px] rotate-90">
      <h1 className="text-xl pl-2 ">
        W . <span className="pl-4 text-xs">Site of day</span>
      </h1>
    </div>
  </div>
  )
}

export default Hero