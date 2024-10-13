import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 px-10">
          <Link to = {"/"}><div className="logo text-3xl font-bold">Ochi</div></Link>
          <div className="menu">
            <ul className="flex items-center gap-5">
              <li className="text-[#212121]  hover:underline transition-transform duration-300">
                <Link to={"/service"}>Service</Link>
              </li>
              <li className="text-[#212121] hover:underline transition-transform duration-300 ">
                <Link to={"/ourwork"}>Our Work</Link>
              </li>
              <li className="text-[#212121]  hover:underline transition-transform duration-300">
                <Link to={"/about"}>About</Link>
              </li>
              <li className="text-[#212121] hover:underline transition-transform duration-300">
                <Link to={"/insights"}>Insights</Link>
              </li>
              <li className=" pl-[240px] text-[#212121] hover:underline transition-transform duration-300 ">
                <Link to={"/contact"}>Contact Us</Link>
              </li>
            </ul>
          </div>
        </nav>
  )
}

export default Navbar