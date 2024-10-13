import React from "react";
import Navbar from "../components/Navbar";

const Service = () => {
  return (
    <>
      <div className="bg-[#f1f1f1] w-full  min-h-screen">
        <Navbar />

        <div className="px-10 pt-10 pb-5">
          <h1 className="text-[14vh] font-extrabold tracking-tight">
            SERVICES
          </h1>
        </div>

        {/*----- Underline --------*/}
        <div className="">
          <div className="border border-[#bdafaf]"></div>
        </div>

        {/*----- Services text --------*/}
        <div className="px-10 pt-3">
          <p className="text-[40px] leading-[45px]">
            We create <span className="underline">eye-catching</span> and{" "}
            <span className="underline">eye-opening</span> <br /> presentations
            that educate, inspire and influence <br /> action.
          </p>
        </div>

        {/*----- Underline --------*/}
        <div className="pt-16">
          <div className="border border-[#bdafaf]"></div>
        </div>

        {/*----- Service text-bottom --------*/}
        <div className="py-5 px-10">

          <div className="flex justify-between ">
          <p>
            We do this by following <br />
            simple approach:
          </p>

          <div>
            <p className="underline mb-16">Goal defines it all</p>
            <p>
              What do you want to achieve? <br /> Understanding the purpose of
              your <br /> presentation allows us to tailor it to ensure it{" "}
              <br /> hits the mark and drives results.
            </p>
          </div>

          <div>
            <p className="underline mb-16">Context makes a difference</p>
            <p>
              When do you present? Online or live? At <br /> a sales meeting, at
              a conference, or just <br /> sending a cold email? We knit the
              context <br /> together to decide the style of the presentation.
            </p>
          </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
