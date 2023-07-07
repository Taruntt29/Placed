import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FiChevronDown } from "react-icons/fi";
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { ValueChanged } from "../../../redux/actions/flightAction";
import { removeToken } from "../../../utils/localStorage";
const Navbar = ({ bgcolor }) => {
  const dispatch = useDispatch();
  const flightData = useSelector((state) => state.flightReducer);
  const navigate = useNavigate();
  console.log(flightData);
  // setting mobile nav
  const { LoginAs } = useSelector((state) => state.flightReducer);
  console.log("LoginAs", LoginAs);
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  // close menu on click
  const closeMenu = () => setClick(false);

  // change nav color when scrolling

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div
      className={
        // color || !bgcolor
        color || bgcolor
          ? "header bg-[#E3EEFF] z-40 pt-16 pb-12 duration-500 header-home"
          : "header bg-transparent z-40 pt-16 pb-12 duration-500 header-home"

        // : "header  bg-gradient-to-b from-black via-black bg-opacity-0 rajez"
      }
    >
      <nav className="navbar">
        <Link to="/" className="logo">
          <img
            src="/assets/images/Final-Logo.png"
            alt="logo"
            className="cursor-pointer md:w-28 w-24 z-50"
          />
        </Link>

        <ul
          className={
            click ? "nav-menu active md:space-y-0 space-y-4" : "nav-menu"
          }
        >
          <Link to="/">
            {" "}
            <li className="group dropdown drop-shadow-2xl md:flex hidden nav-item text-sm  font-semibold nav-desk  text-secondary hover:text-black group relative cursor-pointer">
              Home
            </li>
          </Link>
          {/* for mobile start */}
          <li className="md:hidden block">
            <Link to="/" className="text-white px-10">
              Home
            </Link>
          </li>
          {/* for mobile end */}
          <li className="group dropdown drop-shadow-2xl md:flex items-center hidden nav-item text-sm font-semibold nav-desk  text-secondary hover:text-black group relative cursor-pointer">
            <Link to="/job-search"> Find Jobs </Link>
            {/* <span>
              <FiChevronDown
                className="text-secondary group-hover:text-black"
                size={20}
              />
            </span> */}
            {/* <div className="group-hover:block dropdown-menu absolute hidden transition-all  duration-300 translate-y-2 h-auto top-10 md:-left-10 ">
              <div className="top-0 bg-secondary p-2 shadow-lg shadow-black/30 text-white text-xs w-52 flex flex-col rounded-[20px]">
                <Link
                  to="/"
                  className=" hover:bg-white hover:text-secondary   rounded-[20px] px-4 py-3"
                >
                  Lorem
                </Link>
                <Link
                  to="/"
                  className=" hover:bg-white hover:text-secondary py-3  rounded-[20px]  px-4"
                >
                  Lorem
                </Link>
                <Link
                  to="/"
                  className=" hover:bg-white hover:text-secondary py-3  rounded-[20px]  px-4"
                >
                  Lorem
                </Link>
              </div>
            </div> */}
          </li>
          {/* for mobile start */}
          <li className="md:hidden block">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="py-2 text-white flex items-start px-10 justify-start w-full">
                    <Link to="/job-search"> Find Jobs</Link>
                    {/* <RiArrowDropDownLine
                      className={
                        open ? "rotate-180 transform w-8 h-8" : "w-8 h-8"
                      }
                    /> */}
                  </Disclosure.Button>
                  {/* <Disclosure.Panel className="text-gray-500 px-10 ">
                    <div className=" text-white space-y-4  rounded">
                      <li className="">
                        <Link to="/"> Lorem</Link>
                      </li>
                      <li>
                        <Link to="/"> Lorem</Link>
                      </li>
                      <li>
                        <Link to="/"> Lorem</Link>
                      </li>
                    </div>
                  </Disclosure.Panel> */}
                </>
              )}
            </Disclosure>
          </li>
          {/* for mobile end */}
          <li className="group items-center dropdown drop-shadow-2xl md:flex hidden nav-item text-sm font-semibold nav-desk  text-secondary hover:text-black group relative cursor-pointer">
            Employers
            <span>
              <FiChevronDown
                className="text-secondary group-hover:text-black"
                size={20}
              />
            </span>
            <div className="group-hover:block dropdown-menu absolute hidden transition-all  duration-300 translate-y-2 h-auto top-10 md:-left-10 ">
              <div className="top-0 bg-secondary p-2 shadow-lg shadow-black/30 text-white text-xs w-52 flex flex-col rounded-[20px]">
                <Link
                  to="/company-overview"
                  className=" hover:bg-white hover:text-secondary   rounded-[20px] px-4 py-3"
                >
                  Overview
                </Link>
                <Link
                  to="/employer-list"
                  className=" hover:bg-white hover:text-secondary py-3  rounded-[20px]  px-4"
                >
                  Find Company
                </Link>
              </div>
            </div>
          </li>
          {/* for mobile start */}
          <li className="md:hidden block">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="py-2 text-white flex items-start px-10 justify-start w-full">
                  Employers
                    <RiArrowDropDownLine
                      className={
                        open ? "rotate-180 transform w-8 h-8" : "w-8 h-8"
                      }
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="text-gray-500 px-10 ">
                    <div className=" text-white space-y-4  rounded">
                      <li className="">
                        <Link to="/company-overview"> Overview</Link>
                      </li>
                      <li>
                        <Link to="/employer-list">Find Company</Link>
                      </li>
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </li>
          {/* for mobile end */}
          <li className="group dropdown drop-shadow-2xl  md:flex hidden nav-item text-sm font-semibold nav-desk  text-secondary hover:text-black group relative cursor-pointer">
            <Link className="flex items-center">
              Coach/Mentor{" "}
              <span>
                <FiChevronDown
                  className="text-secondary group-hover:text-black"
                  size={20}
                />
              </span>
              <div className="group-hover:block dropdown-menu absolute hidden transition-all  duration-300 translate-y-2 h-auto top-10 md:-left-10 ">
                <div className="top-0 bg-secondary p-2 shadow-lg shadow-black/30 text-white text-xs w-52 flex flex-col rounded-[20px]">
                  <Link
                    to="/coach-overview"
                    className=" hover:bg-white hover:text-secondary   rounded-[20px] px-4 py-3"
                  >
                    Overview
                  </Link>
                  <Link
                    to="/coach-list"
                    className=" hover:bg-white hover:text-secondary py-3  rounded-[20px]  px-4"
                  >
                    Find Coach
                  </Link>
                </div>
              </div>
            </Link>
          </li>
          {/* for mobile start */}
          <li className="md:hidden block">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="py-2 text-white flex items-start px-10 justify-start w-full">
                    Coach/Mentor
                    <RiArrowDropDownLine
                      className={
                        open ? "rotate-180 transform w-8 h-8" : "w-8 h-8"
                      }
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="text-gray-500 px-10 ">
                    <div className=" text-white space-y-4  rounded">
                      <li className="">
                        <Link to="/find-coach"> Overview</Link>
                      </li>
                      <li>
                        <Link to="/coach-list"> Find Coach</Link>
                      </li>
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </li>

          {/* for mobile end */}
          <li className="group dropdown drop-shadow-2xl  md:flex hidden nav-item text-sm font-semibold nav-desk  text-secondary hover:text-black group relative cursor-pointer">
            <Link className="flex items-center">
              Candidate{" "}
              <span>
                <FiChevronDown
                  className="text-secondary group-hover:text-black"
                  size={20}
                />
              </span>
              <div className="group-hover:block dropdown-menu absolute hidden transition-all  duration-300 translate-y-2 h-auto top-10 md:-left-10 ">
                <div className="top-0 bg-secondary p-2 shadow-lg shadow-black/30 text-white text-xs w-52 flex flex-col rounded-[20px]">
                  <Link
                    to="/career-assessment"
                    className=" hover:bg-white hover:text-secondary   rounded-[20px] px-4 py-3"
                  >
                    Assessment
                  </Link>
                  <Link
                    to="/build-resume"
                    className=" hover:bg-white hover:text-secondary py-3  rounded-[20px]  px-4"
                  >
                    Build Resume
                  </Link>
                </div>
              </div>
            </Link>
          </li>
          {/* for mobile start */}
          <li className="md:hidden block">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="py-2 text-white flex items-start px-10 justify-start w-full">
                    Candidate
                    <RiArrowDropDownLine
                      className={
                        open ? "rotate-180 transform w-8 h-8" : "w-8 h-8"
                      }
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="text-gray-500 px-10 ">
                    <div className=" text-white space-y-4  rounded">
                      <li className="">
                        <Link to="/career-assessment"> Assessment</Link>
                      </li>
                      <li>
                        <Link to="/build-resume">Build Resume</Link>
                      </li>
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </li>
          {/* for mobile end */}
          {/* <li className="group dropdown drop-shadow-2xl md:flex hidden nav-item text-sm font-semibold nav-desk  text-secondary hover:text-black group relative cursor-pointer">
            <Link to="/career" className="flex items-center">
              {" "}
              Build Resume{" "}
              <span>
                <FiChevronDown
                  className="text-secondary group-hover:text-black"
                  size={20}
                />
              </span>{" "}
            </Link>
            <div className="group-hover:block dropdown-menu absolute hidden transition-all  duration-300 translate-y-2 h-auto top-10 md:-left-10 ">
              <div className="top-0 bg-secondary p-2 shadow-lg shadow-black/30 text-white text-xs w-52 flex flex-col rounded-[20px]">
                <Link
                  to="/"
                  className=" hover:bg-white hover:text-secondary   rounded-[20px] px-4 py-3"
                >
                  Lorem
                </Link>
                <Link
                  to="/"
                  className=" hover:bg-white hover:text-secondary py-3  rounded-[20px]  px-4"
                >
                  Lorem
                </Link>
                <Link
                  to="/"
                  className=" hover:bg-white hover:text-secondary py-3  rounded-[20px]  px-4"
                >
                  Lorem
                </Link>
              </div>
            </div>
          </li> */}
          {/* for mobile start */}
          {/* <li className="md:hidden block">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="py-2 text-white flex items-start px-10 justify-start w-full">
                    Build Resume
                    <RiArrowDropDownLine
                      className={
                        open ? "rotate-180 transform w-8 h-8" : "w-8 h-8"
                      }
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="text-gray-500 px-10 ">
                    <div className=" text-white space-y-4  rounded">
                      <li className="">
                        <Link to="/"> Lorem</Link>
                      </li>
                      <li>
                        <Link to="/"> Lorem</Link>
                      </li>
                      <li>
                        <Link to="/"> Lorem</Link>
                      </li>
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </li> */}
          {/* for mobile start */}
          <li className="md:hidden block">
            <Link to="/login" className="px-10">
              <button className="text-sm bg-white border border-white text-secondary font-s-medium  px-6 py-3 rounded-md shadow-sm shadow-slate-700 ">
                Login
              </button>
            </Link>
          </li>
          <li className="md:hidden block">
            <Link to="/commonlogin" className="px-10">
              <button className="text-sm bg-white border border-white text-secondary font-s-medium  px-6 py-3 rounded-md shadow-sm shadow-slate-700 ">
                Register
              </button>
            </Link>
          </li>
          {/* for mobile end */}
        </ul>
        {flightData.isLogin ? (
          <div className="flex gap-4">
            <button
              onClick={() => {
                dispatch(ValueChanged("isLogin", false));
                removeToken();
                dispatch(ValueChanged("userDetails", null));
                navigate("/");
              }}
              className="text-sm bg-secondary border border-white text-white font-s-medium  px-10 py-3 rounded-md shadow-sm shadow-slate-700 "
            >
              Logout
            </button>
            <div
              onClick={(e) => {
                LoginAs === "Coach"
                  ? navigate("/coach/my-profile")
                  : LoginAs === "Candidate"
                  ? navigate("/candidate/my-profile")
                  : navigate("/employer/my-profile");
              }}
              className="text-sm cursor-pointer bg-secondary border border-white text-white font-s-medium  px-10 py-3 rounded-md shadow-sm shadow-slate-700 "
            >
              My Account
            </div>
          </div>
        ) : (
          <>
            <Link to="/login" className="drop-shadow-2xl md:block hidden group">
              <button className="text-sm bg-secondary border border-white text-white font-s-medium  px-10 py-3 rounded-md shadow-sm shadow-slate-700 ">
                Login
              </button>
            </Link>
            <div className="drop-shadow-2xl md:block hidden group">
              <Link
                to="/commonlogin"
                className="text-sm bg-white border border-white text-secondary font-s-medium  px-8 py-3 rounded-md shadow-sm shadow-slate-700 "
              >
                Register
              </Link>
            </div>
          </>
        )}

        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: "#000" }} />
          ) : (
            <FaBars size={30} style={{ color: "#000" }} />
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
