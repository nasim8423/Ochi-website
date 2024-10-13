import React from "react";
import Navbar from "../components/Navbar";

const Conatact = () => {
  return (
    <div className="bg-[#f1f1f1] w-full min-h-screen">
      <Navbar />

      {/*------ Contact text ---------*/}
      <div className="relative px-10 pt-[120px] capitalize">
        <div className="flex items-center gap-1 ">
          <div className="bg-green-900 h-[68px] w-[100px] rounded flex "></div>
          <h1 className="text-8xl font-extrabold leading-[70px] tracking-tighter">
            LETS'S START
          </h1>
        </div>
        <h1 className="text-8xl font-extrabold  tracking-tighter">
          A PROJECT TOGETHER
        </h1>
      </div>

      {/*------ Fill in below  ---------*/}
      <div className="pt-12 px-10 pb-6">
        <p>Fill the form below:</p>
      </div>

      {/*------ Fill text ---------*/}
      <div className="px-10 pb-10 ">
        <p className="text-[50px] font-[500] leading-[56px]">
          Hi! My name is{" "}
          <input
            type="text"
            className="bg-transparent px-4 border-b-2 border-gray-400 text-center focus:outline-none text-lg"
            placeholder="Enter your name"
          />{" "}
          and I work with
          <input
            type="text"
            className="bg-transparent px-16 ms-5 focus:outline-none border-b-2 border-gray-400 text-center text-lg"
            placeholder="Company name type here"
          />
          I’m looking for a partner to help me with{" "}
          <input
            type="text"
            className="bg-transparent px-20 ms-5 border-b-2 border-gray-400 text-center focus:outline-none text-lg"
            placeholder="Your goal type here"
          />
          With an idea of having that completed{" "}
          <input
            type="text"
            className="bg-transparent px-20 ms-7 border-b-2 border-gray-400 text-center focus:outline-none text-lg"
            placeholder="Date"
          />
          I am hoping to stay around a budget range of{" "}
          <input
            type=""
            className="bg-transparent px-20 ms-6 border-b-2 border-gray-400 text-center focus:outline-none text-lg"
            placeholder="select"
          />
          You can reach me at{" "}
          <input
            type=""
            className="bg-transparent px-20 ms-5 border-b-2 border-gray-400 text-center focus:outline-none text-lg"
            placeholder="name@example.com"
          />{" "}
          to start the conversation. <br /> Optionally, I’m sharing more: Product
          details type here...
        </p>
      </div>
    </div>
  );
};

export default Conatact;
