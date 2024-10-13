import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import MoreButton from "../components/MoreButton";
import ClientReview from "../components/ClientReview";
import OchiBox from "../components/OchiBox";
import ReadyToStart from "../components/ReadyToStart";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import HeroUnder from "../components/HeroUnder";
import HeroButton from "../components/HeroButton";
import Ochi from "../components/Ochi";

const Home = () => {
  return (
    <>
      <div className="bg-[#f1f1f1] w-full h-screen">
        <Navbar />

        {/*------ Hero text start here -----*/}
        <Hero />

        {/*------ Underline start here -----*/}
        <HeroUnder />

        {/*----- Home Buttom text start here------ */}
        <HeroButton />
        
      </div>

      {/*----- We are ochi Start here------ */}
      <Ochi />

      <div className="bg-[#cdea68] py-[55px]">
        <div className="p-10">
          <p className="text-[55px] leading-[54px] underline ">
            Ochi is a strategic presentation agency for forward-thinking
            businesses that need to raise funds, sell products, explains complex
            ideas, and hire great people.
          </p>
        </div>

        <div className="pt-9">
          <div className="border border-[#545d34]"></div>
        </div>

        <div>
          <div className="flex justify-between pt-5 px-10 text-[13px]">
            <p>What you can expect:</p>
            <div className="pl-[25%]">
              <p>
                We create tailored presentations to help <br /> you persuade
                your colleagues, clients,
                <br /> or investors. Whether it live or digital,
                <br />
                delivered for one or a hundred people.
              </p>
              <br />
              <p>
                We create tailored presentations to help you persuade your{" "}
                <br />
                colleagues, clients, or investors. Whether it live or digital,
                delivered <br /> for one or a hundred people.We believe the mix
                of strategy and <br />
                design (with a bit of coffee) is what makes your message <br />{" "}
                clear, convincing, and captivating.
              </p>
            </div>
            <div className="pt-28">
              <p>S:</p>
              <p>Behance Facebook Linkedin</p>
            </div>
          </div>
        </div>

        <div className="pt-[12%]">
          <div className="border border-[#676f4b]"></div>
        </div>

        {/*------ Our approach start -----*/}
        <div>
          <div className="flex justify-between items-center gap-4 px-10 py-5  ">
            <div className=" rounded-xl w-1/2 h-[430px]">
              <div>
                <h1 className="text-[52px] tracking-tight">Our approach:</h1>
                <button className="bg-black px-7  py-2 rounded-full text-white flex items-center gap-2">
                  Read More <span className="text-xl">.</span>
                </button>
              </div>
            </div>
            <div className="rounded- w-1/2 h-[430px]">
              <img
                src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg"
                alt=""
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
        {/*------ Our approach End -----*/}
      </div>

      {/*----- Featured projects start------- */}
      <div className="bg-[#f1f1f1] py-10  ">
        <h1 className="text-[40px] mb-2 pl-10">Featured projects</h1>

        {/*------ Underline start here -----*/}
        <div className="">
          <div className="border border-[#bdafaf]"></div>
        </div>
        {/*------ Underline End here -----*/}
      </div>

      <div className="bg-[#f1f1f1] flex justify-between items-center  gap-5 px-10">
        <div className="w-1/23 rounded-xl">
          <div className="flex items-center pl-2">
            <div className="bg-black w-3 h-3 rounded-full"></div>
            <p className="pl-2 py-4">Cardboard Spaceship</p>
          </div>
          <div>
            <img
              src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png"
              alt=""
              className="rounded-xl mb-3"
            />
          </div>
        </div>
        <div className="w-1/2  rounded-xl ">
          <div className="flex items-center pl-2">
            <div className="bg-black w-3 h-3 rounded-full"></div>
            <p className="pl-2 py-4">AH2 & Matt Horn</p>
          </div>
          <div>
            <img
              src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png"
              alt=""
              className="rounded-xl mb-3"
            />
          </div>
        </div>
      </div>

      {/*----- Featured projects End------- */}

      {/*------ More button ------*/}
      <MoreButton />

      {/*------ Client review ------*/}
      <ClientReview />

      {/*------ ochi box  ------*/}
      <OchiBox />

      {/*------ Ready to Start  ------*/}
      <ReadyToStart />

      {/*------ Footer Section  ------*/}
      <Footer />
    </>
  );
};

export default Home;
