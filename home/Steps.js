import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
const Steps = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-9 md:pt-4 pb-20 container mx-auto px-5 gap-8 justify-items-center  items-center">
        <div className="flex flex-col justify-start items-start gap-4 md:col-span-4">
          <p className="text-secondary text-xl font-s-medium">How it works</p>
          <h3 className="text-4xl font-s-bold">
            Follow our steps we will help you
          </h3>
          <ul className="font-s-medium flex flex-col justify-start items-start gap-4">
            <li className="flex justify-start gap-2 items-center">
              {" "}
              <BsCheckCircleFill className="text-secondary font-s-bold" />
              <span>Trusted & Quality Job</span>
            </li>
            <li className="flex justify-start gap-2 items-center">
              {" "}
              <BsCheckCircleFill className="text-secondary font-s-bold" />
              <span>International Job</span>
            </li>
            <li className="flex justify-start gap-2 items-center">
              {" "}
              <BsCheckCircleFill className="text-secondary font-s-bold" />
              <span>No Extra Charge</span>
            </li>
            <li className="flex justify-start gap-2 items-center">
              {" "}
              <BsCheckCircleFill className="text-secondary font-s-bold" />
              <span>Top Companies</span>
            </li>
          </ul>
        </div>
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:gap-10 gap-10 xxll:gap-20 md:col-span-5 px-5 md:px-0">
          <div className=" ">
            <div className="relative bg-[#85B4E9] shadow-md shadow-[#85b4E98F] rounded-xl flex justify-start items-start">
              <div className="absolute top-6 -left-8 shadow shadow-slate-700 bg-white p-4 rounded-xl w-[70px] h-[70px] flex justify-center items-center">
                <img
                  src="/assets/images/register.png"
                  alt="/register"
                  className=""
                />
              </div>
              <div className="pt-12 pl-5 pb-5 ">
                <div className=" text-white font-s-medium  pl-8 text-lg ">
                  Register <br /> Your Account
                </div>
                <div className="text-black text-opacity-70 font-s-medium pt-6 pr-5 text-justify text-sm">
                  You need to create an account to find the best and preferred
                  job.
                </div>
              </div>

              <div className="text-6xl text-[#4F96E0] font-s-bold pr-4 pt-4 absolute right-2">
                01
              </div>
            </div>
          </div>
          <div className="translate-y-4">
            <div className="relative bg-[#E6C97F] shadow-md shadow-[#E6C97F8F] rounded-xl flex justify-start items-start">
              <div className="absolute  top-6 -left-8 shadow shadow-slate-700 bg-white p-4 rounded-xl w-[70px] h-[70px] flex justify-center items-center">
                <img
                  src="/assets/images/search.png"
                  alt="/register"
                  className=""
                />
              </div>
              <div className="pt-12 pl-5 pb-5 ">
                <Link to="/job-search">
                  <div className=" text-white font-s-medium  pl-8 text-lg ">
                    Search <br /> Your Job
                  </div>
                </Link>
                <div className="text-black text-opacity-70 font-s-medium pt-6 pr-5 text-justify text-sm">
                  You need to create an account to find the best and preferred
                  job.
                </div>
              </div>

              <div className="text-6xl text-[#DDB540] font-s-bold pr-4 pt-4 absolute right-2">
                02
              </div>
            </div>
          </div>
          <div className="">
            <div className="relative bg-[#CCA8D8] shadow-md shadow-[#CCA8D88F] rounded-xl flex justify-start items-start">
              <div className="absolute top-6 -left-8 shadow shadow-slate-700 bg-white p-4 rounded-xl w-[70px] h-[70px] flex justify-center items-center">
                <img
                  src="/assets/images/dreamupload.png"
                  alt="/register"
                  className=""
                />
              </div>
              <div className="pt-12 pl-5 pb-5">
                <div className=" text-white font-s-medium  pl-8 text-lg ">
                  Apply <br /> For Dream Job
                </div>
                <div className="text-black text-opacity-70 font-s-medium pt-6 pr-5 text-justify text-sm">
                  You need to create an account to find the best and preferred
                  job.
                </div>
              </div>

              <div className="text-6xl text-[#BA85C9] font-s-bold pr-4 pt-4 absolute right-2">
                03
              </div>
            </div>
          </div>
          <div className="translate-y-4">
            <div className="relative bg-[#95E2C6] shadow-md shadow-[#95E2C6] rounded-xl flex justify-start items-start">
              <div className="absolute top-6 -left-8 shadow shadow-slate-700 bg-white p-4 rounded-xl w-[70px] h-[70px] flex justify-center items-center">
                <img
                  src="/assets/images/dreamupload.png"
                  alt="/register"
                  className=""
                />
              </div>
              <div className="pt-12 pl-5 pb-5">
                <Link to="/build-resume">
                  <div className=" text-white font-s-medium  pl-8 text-lg ">
                    Upload <br /> Your Resume
                  </div>
                </Link>
                <div className="text-black text-opacity-70 font-s-medium pt-6 pr-5 text-justify text-sm">
                  You need to create an account to find the best and preferred
                  job.
                </div>
              </div>

              <div className="text-6xl text-[#69D7B1] font-s-bold pr-4 pt-4 absolute right-2">
                04
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
