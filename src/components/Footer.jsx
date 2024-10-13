import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#f1f1f1] w-[100%] h-screen">
      <div className="flex justify-between items-center gap-3">

        {/*-------- Left-section --------*/}
        <div className=" w-[47%] h-screen rounded-lg px-10 
        font-extrabold pt-[6%] ">
        <h1 className="capitalize  text-[100px] leading-[12vh] tracking-tighter">EYE- <br />
        OPENING</h1>
        <p className="pt-[65%] text-3xl">Ochi</p>
        </div>

         {/*-------- Right-section --------*/}
        <div className=" w-[53%] h-screen rounded-lg  
        font-extrabold pt-[6%] ">
        <h1 className="capitalize  text-[100px] leading-[14vh] tracking-tighter">PRESNTATIONS</h1>
        <div className="py-7 text-[15px] font-medium">
            <p className="">S:</p> <br />
            <p className="underline">Instagram</p>
            <p className="underline">Behance</p>
            <p className="underline">Facebook</p>
            <p className="underline">Linkedin</p>
        </div>

        <div className="flex justify-between items-center pr-16 mb-16 ">
           
          <div  className="text-[15px] font-medium">
          <p className="">L:</p> <br />
            <p className="underline">202-1965 W 4th Ave</p>
            <p className="underline">Vancouver, Canada</p> <br />
            <p className="underline">30 Chukarina St</p>
            <p className="underline">Lviv, Ukraine</p>
          </div>

           <div className="text-[15px] font-medium">
           <p className="">M:</p> <br />
            <p className="underline">Home</p>
            <p className="underline">Serivece</p> 
            <p className="underline">Our Work</p>
            <p className="underline">About Us</p>
            <p className="underline">Insights</p>
            <p className="underline">Contact Us</p>
           </div>

        </div>

        <div>
            <p className="text-[15px] font-medium text-[#212121] opacity-30">© ochi design 2024. Legal Terms</p>
        </div>
        </div>

      </div>
    </div>
  );
};

export default Footer;
