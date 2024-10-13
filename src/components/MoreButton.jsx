import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

const MoreButton = () => {
  return (
    <div className='bg-[#f1f1f1]'>
        <div className='px-8 pb-5 '>
            <button className='bg-transparent  border border-gray-500 px-4 py-1 rounded-full ms-2   ease-out duration-300'>BRANDED TEMPLATE</button>
            <button className='bg-transparent   border border-gray-500 px-4 py-1 rounded-full ms-2   ease-out duration-300'>SALES DUCK</button>
            <button className='bg-transparent  border border-gray-500 px-4 py-1 rounded-full ms-2   ease-out duration-300'>SOCIAL MEDIA TEMPLATE</button>
            <button className='bg-transparent   border border-gray-500 px-4 py-1 rounded-full ms-[110px]   ease-out duration-300'>PICH DUCK</button>
        </div>


        <div className='flex items-center justify-center'>
            <div className='py-10 '>
            <button className='bg-black text-white px-5 py-2 rounded-full flex items-center gap-5'>VIEW ALL CASE STUDY
            <FaArrowRightLong className="h-9 w-9 p-2 rounded-full border-2 border-[#b6b2b2] -rotate-45" /></button>
            </div>
        </div>
    </div>

    
  )
}

export default MoreButton