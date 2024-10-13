import React from "react";
import Navbar from "../components/Navbar";
import HeroUnder from "../components/HeroUnder";

const Insights = () => {
  return (
    <div className="bg-[#f1f1f1] w-full h-screen">
      <Navbar />

      {/*-------- Insight text ---------*/}
      <div className="relative px-10 pt-[100px] capitalize">
        <h1 className="text-8xl font-extrabold leading-[77px] tracking-tight">
          INSIGHTS
        </h1>
      </div>

      {/*-------- Insight Underline ---------*/}
      <HeroUnder />

      {/*-------- Insight Buttom ---------*/}
      <div className="flex justify-between px-10 pt-5">
        <p>Latest insights:</p>
        <div>
          <button className="bg-transparent px-4 py-1 rounded-full mr-1 border border-gray-500  transition duration-300 ">ALL</button>
          <button className="bg-transparent px-4 py-1 rounded-full mr-1 border border-gray-500  transition duration-300 ">NEWS</button>
          <button className="bg-transparent px-4 py-1 rounded-full mr-1 border border-gray-500  transition duration-300 ">PITCH</button>
          <button className="bg-transparent px-4 py-1 rounded-full mr-1 border border-gray-500  transition duration-300 ">PRESNTATION AGENCY</button>
          <button className="bg-transparent px-4 py-1 rounded-full mr-1 border border-gray-500  transition duration-300 ">PRESNTATION TEMPLATE</button> <br />
          <div className="mt-2"></div>
          <button className="bg-transparent px-4 py-1 rounded-full mr-1 border border-gray-500  transition duration-300 ">PUBLIC SPEACKING</button>
          <button className="bg-transparent px-4 py-1 rounded-full mr-1 border border-gray-500  transition duration-300 ">STORYTELLING</button>
        </div>
      </div>
    </div>
  );
};

export default Insights;
