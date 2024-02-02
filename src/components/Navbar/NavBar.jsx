import React from "react";
import logo from "../images/Logo.png";
import logo1 from "../images/logo1.png";
import { NavLink } from "react-router-dom";
import { FaFacebook } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import "./navstyle.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";
const NavBar = () => {
  const [show, setshow] = useState(true)
  const  handleShow=()=>{
    show?setshow(false):setshow(true);
  }
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  
  return (
    <>
      <div className="bg-orange-400 flex items-center justify-center">
        <div
          className="text-center heading md:text-2xl lg:text-3xl text-sm p-4 font-semibold  "
          style={{ color: "rgb(98, 62, 8)" }}
        >
          A Free Night Education Center By Students Of JGEC{" "}
        </div>
        <div className="text-3xl lg:flex md:flex gap-4 text-[#ffffffc4] lg:absolute md:absolute hidden right-10">
          <a
            href="https://www.facebook.com/jgecjyoti?mibextid=ZbWKwL"
            target="_blank"
            rel="noreferrer"
            className=" cursor-pointer hover:scale-110 transition-all"
          >
            <FaFacebook />
          </a>
          <a
            href="/"
            className=" cursor-pointer hover:scale-110 transition-all"
          >
            <MdEmail />
          </a>
        </div>
      </div>
      <div className=" flex  backgroundnav lg:justify-center md:justify-center w-full lg:px-8 px-4 items-center bg-slate-200 ">
        <div className="lg:block md:block hidden">

        <img
          src={logo}
          className="z-20 lg:w-[12%] md:w-[15%] w-[20%] lg:absolute md:absolute md:left-4 lg:left-10 lg:my-[-90px] md:my-[-70px]  "
          alt=""
          />
          </div>
          <img
          src={logo}
          className="z-20 lg:w-[12%] lg:hidden md:hidden block md:w-[15%] w-[20%] lg:absolute md:absolute md:left-4 lg:left-10 lg:my-[-90px] md:my-[-70px]  "
          alt=""
          />

        <div className="py-4 font-semibold heading md:ml-[2.5rem] lg:ml-10 lg:text-5xl md:text-4xl text-2xl text-center  text-[#d65b4b] ">
          JYOTI - A RAY OF HOPE
        </div>
        <img
          src={logo1}
          className="lg:w-[5%] md:absolute w-[12%] md:w-[8%] lg:absolute md:right-8 lg:right-14"
          alt=""
        />
      </div>
      <div className="lg:hidden bg-orange-400 w-full md:hidden absolute  text-3xl font-medium pl-4 " onClick={handleShow}>
        <RxHamburgerMenu />
      </div>

      <nav className=" top-0 w-full bg-orange-400 z-10 lg:block md:block hidden sticky overflow-hidden">
        <div className="lg:hidden pt-2 bg-orange-400 w-full md:hidden absolute -right-72  text-3xl font-medium pl-4 ">
          <RxCross1 />
        </div>

        <ul className=" md:flex lg:pt-0 md:pt-0 pt-10 lg:flex block">
          <li>
            <NavLink
              to="/"
              className="md:text-xl  lg:text-2xl"
              style={({ isActive }) =>
                isActive ? { backgroundColor: "rgba(189, 125, 30, 0.587)" } : {}
              }
              onClick={scrollToTop}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/gallery"
              className="md:text-xl lg:text-2xl"
              style={({ isActive }) =>
                isActive ? { backgroundColor: "rgba(189, 125, 30, 0.587)" } : {}
              }
              onClick={scrollToTop}
            >
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/team"
              className="md:text-xl lg:text-2xl"
              style={({ isActive }) =>
                isActive ? { backgroundColor: "rgba(189, 125, 30, 0.587)" } : {}
              }
              onClick={scrollToTop}
            >
              Team
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/notice"
              className="md:text-xl lg:text-2xl"
              style={({ isActive }) =>
                isActive ? { backgroundColor: "rgba(189, 125, 30, 0.587)" } : {}
              }
              onClick={scrollToTop}
            >
              Notice
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/support"
              className="md:text-xl lg:text-2xl"
              style={({ isActive }) =>
                isActive ? { backgroundColor: "rgba(189, 125, 30, 0.587)" } : {}
              }
              onClick={scrollToTop}
            >
              Support
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="md:text-xl lg:text-2xl"
              style={({ isActive }) =>
                isActive ? { backgroundColor: "rgba(189, 125, 30, 0.587)" } : {}
              }
              onClick={scrollToTop}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      {!show?<nav className=" top-0 w-full bg-orange-400 z-10 sticky overflow-hidden">
        <div className="lg:hidden pt-2 bg-orange-400 w-full md:hidden absolute -right-72  text-3xl font-medium pl-4 " onClick={handleShow}>
          <RxCross1 />
        </div>

        <ul className=" md:flex lg:pt-0 md:pt-0 pt-10 lg:flex block">
          <li>
            <NavLink
              to="/"
              className="md:text-xl text-[20px] lg:text-2xl"
              style={({ isActive }) =>
                isActive ? { backgroundColor: "rgba(189, 125, 30, 0.587)" } : {}
              }
              onClick={scrollToTop}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/gallery"
              className="md:text-xl text-[20px] lg:text-2xl"
              style={({ isActive }) =>
                isActive ? { backgroundColor: "rgba(189, 125, 30, 0.587)" } : {}
              }
              onClick={scrollToTop}
            >
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/team"
              className="md:text-xl text-[20px] lg:text-2xl"
              style={({ isActive }) =>
                isActive ? { backgroundColor: "rgba(189, 125, 30, 0.587)" } : {}
              }
              onClick={scrollToTop}
            >
              Team
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/notice"
              className="md:text-xl  text-[20px] lg:text-2xl"
              style={({ isActive }) =>
                isActive ? { backgroundColor: "rgba(189, 125, 30, 0.587)" } : {}
              }
              onClick={scrollToTop}
            >
              Notice
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/support"
              className="md:text-xl text-[20px] lg:text-2xl"
              style={({ isActive }) =>
                isActive ? { backgroundColor: "rgba(189, 125, 30, 0.587)" } : {}
              }
              onClick={scrollToTop}
            >
              Support
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="md:text-xl text-[20px] lg:text-2xl"
              style={({ isActive }) =>
                isActive ? { backgroundColor: "rgba(189, 125, 30, 0.587)" } : {}
              }
              onClick={scrollToTop}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>:null}
      <div className="w-full h-[6px] bg-[#412913]"></div>
    </>
  );
};

export default NavBar;
