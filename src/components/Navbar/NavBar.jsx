import React from "react";
import logo from "../images/Logo.png";
import logo1 from "../images/logo1.png"
import { NavLink } from "react-router-dom";
import { FaFacebook } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import "./navstyle.css";
const NavBar = () => {
  return (
    <>
      <div className="bg-orange-400 flex items-center justify-center">
        <div
          className="text-center heading md:text-2xl lg:text-3xl p-4 font-semibold  "
          style={{ color: "rgb(98, 62, 8)" }}
        >
          A Free Night Education Center By Students Of JGEC{" "}
        </div>
        <div className="text-3xl flex gap-8 text-[#ffffffc4] absolute right-10">

          <a href="https://www.facebook.com/jgecjyoti?mibextid=ZbWKwL" target="_blank" rel="noreferrer" className=" cursor-pointer hover:scale-110 transition-all"><FaFacebook /></a>
          <a href="/" className=" cursor-pointer hover:scale-110 transition-all"><MdEmail /></a>
        </div>
      </div>
      <div className=" flex  backgroundnav justify-center w-full lg:px-8 px-4 items-center bg-slate-200" >
        
        <div className="z-20">
          <img src={logo} className=" lg:w-[12%] md:w-[15%] absolute md:left-4 lg:left-10 lg:my-[-90px] md:my-[-80px]  " alt="" />
        </div>

        <div className="py-4 font-[400] heading ml-10 text-5xl text-[#d65b4b] ">
          JYOTI - A RAY OF NEW HOPE
        </div>
        <img src={logo1} className="lg:w-[5%] md:w-[8%] absolute md:right-8 lg:right-14" alt="" />
      </div>

      <nav className=" top-0 z-10 sticky overflow-hidden">
        <ul>
          <li>
            <NavLink to="/" className="md:text-xl lg:text-2xl" style={({ isActive }) =>
              isActive ? { backgroundColor: "rgba(189, 125, 30, 0.587)" } : {}
            }>Home</NavLink>
          </li>
          <li>
            <NavLink to="/gallery" className="md:text-xl lg:text-2xl" style={({ isActive }) =>
              isActive ? { backgroundColor: "rgba(189, 125, 30, 0.587)" } : {}
            }>Gallery</NavLink>
          </li>
          <li>
            <NavLink to="/team" className="md:text-xl lg:text-2xl" style={({ isActive }) =>
              isActive ? { backgroundColor: "rgba(189, 125, 30, 0.587)" } : {}
            }>Team</NavLink>
          </li>
          <li>
            <NavLink to="/notice" className="md:text-xl lg:text-2xl" style={({ isActive }) =>
              isActive ? { backgroundColor: "rgba(189, 125, 30, 0.587)" } : {}
            }>Notice</NavLink>
          </li>
          <li>
            <NavLink to="/support" className="md:text-xl lg:text-2xl" style={({ isActive }) =>
              isActive ? { backgroundColor: "rgba(189, 125, 30, 0.587)" } : {}
            }>Support</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="md:text-xl lg:text-2xl" style={({ isActive }) =>
              isActive ? { backgroundColor: "rgba(189, 125, 30, 0.587)" } : {}
            }>Contact</NavLink>
          </li>
        </ul>
      </nav>
      <div className="w-full h-[6px] bg-[#412913]"></div>
    </>
  );
};

export default NavBar;
