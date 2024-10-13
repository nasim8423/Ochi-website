import React from "react";
import Underline from "./Underline";

const ClientReview = () => {
  return (
    <div>
      <div className="bg-[#f1f1f1] pt-10 ">
        <h1 className="text-[40px] mb-6 pl-10">Clients Review</h1>

        {/*------ Underline start here -----*/}
        <div className="">
          <div className="border border-[#bdafaf]"></div>
        </div>
        {/*------ Underline End here -----*/}
      </div>

      {/*------ Client text  -----*/}
      <div className="bg-[#f1f1f1] px-10">
        <div className="flex justify-between pt-5 pb-8 ">
          <p>Karman Ventures</p>
          <p>Services:</p>
          <div>
            <h1 className="mb-28">William Barnes</h1>
            <p>
              They were transparent about the time and the stages <br /> of the
              project. The end product is high quality, and I feel confident{" "}
              <br /> about how they were handholding the client through the
              process. I feel <br /> like I can introduce them to someone who
              needs to put a sales <br /> deck together from scratch, and they
              would be able to handhold <br /> the client experience from 0 to
              100 very effectively from story to design. 5/5
            </p>
          </div>
          <p>Read</p>
        </div>
      </div>


    {/*------ Underline text -----*/}
      <Underline/>
    </div>
  );
};

export default ClientReview;
