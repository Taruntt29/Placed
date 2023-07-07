import React, { useEffect, useState } from "react";

import { IoCartSharp } from "react-icons/io5";
import { BiChevronLeft } from "react-icons/bi";
import { BsCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { getAllPackagesAPI } from "../../../api/authService";
import { toast } from "react-toastify";
const AllPackages = () => {
  // API
  const [packagesData, setPackagesData] = useState([]);

  const getPackages = async () => {
    try {
      const { data, status, message } = await getAllPackagesAPI();
      if (status) {
        setPackagesData(data);
        console.log("packagesData", data);
        // toast(message);
      } else {
        toast(message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPackages();
  }, []);

  return (
    <div>
      <div className="bg-inputcolor pb-5 lg:px-0 px-5">
        <div className=" pt-12 lg:px-10 pb-2 ">
          <h3 className="font-bold  text-lg flex pt-1 text-secondary">
            <BiChevronLeft className="" size={32} />
            Buy Packages
          </h3>
        </div>
        <div className="container mx-auto  bg-white mb-10 rounded-md ">
          <div className="lg:flex justify-between border-b-2 border-gray-200 px-5 pt-5 pb-5">
            <div className="flex space-x-4   ">
              <IoCartSharp size={40} fill="#2544EE" />
              <h3 className="font-bold  text-lg flex pt-1">See All Packages</h3>
            </div>
            <Link to="/employer/view-packages" className="font-s-medium pt-3">
              View All
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 md:py-16 items-center lg:px-20 px-5">
            {packagesData?.map((item, index) => {
              return (
                <div key={index}>
                  {/* Gold Plan */}
                  <div className="justify-center flex ">
                    <div className="shadowspread  rounded-[31px] w-[100%] md:w-[90%]">
                      <div className="rounded-t-[31px] bg-secondary flex flex-col justify-center items-center py-10 ">
                        <p className="text-white text-3xl text-center capitalize">
                          {item.packageName}
                        </p>
                        <p className="text-white text-opacity-60 text-center text-sm">
                          {item.description}
                        </p>
                      </div>
                      <div className="px-7 py-4">
                        <ul className="flex flex-col ">
                          <li className="flex justify-start items-center  space-x-2 font-s-medium text-sm">
                            <BsCheckCircleFill className="text-secondary font-s-bold " />
                            <span>{item.longdescription}</span>
                          </li>
                          <li className="flex justify-start items-center  space-x-2 font-s-medium text-sm">
                            <BsCheckCircleFill className="text-secondary font-s-bold " />
                            <span>{item.longdescription}</span>
                          </li>
                          <li className="flex justify-start items-center  space-x-2 font-s-medium text-sm">
                            <BsCheckCircleFill className="text-secondary font-s-bold " />
                            <span>{item.longdescription}</span>
                          </li>
                        </ul>
                      </div>
                      <div className="h-[1px] bg-black bg-opacity-60"></div>
                      <div className="flex flex-col justify-center items-center space-x-1 pt-4 ">
                        <p className="font-s-bold text-3xl">
                          {" "}
                          {item.amount.replace("Per Month", " ")}
                        </p>
                        <p>Per Month</p>
                      </div>
                      <div className="flex flex-col space-y-3 justify-center items-center py-2">
                        <button className="text-sm bg-white border border-white text-secondary font-s-medium  px-6 py-2 rounded-md shadow-sm shadow-slate-700 lg:w-[40%] w-[80%]">
                          Buy Now
                        </button>
                        <button className="text-sm bg-secondary border border-secondary text-white font-s-medium  px-6 py-2 rounded-md shadow-sm shadow-slate-700 w-[40%]">
                          Upgrade
                        </button>
                      </div>
                      <p className="text-sm font-s-medium flex justify-center items-center pb-10 ">
                        {item.smalldescription}
                      </p>
                    </div>
                  </div>
                  {/* Silver Plan */}
                  {/* <div className="shadowspread  rounded-[31px]">
                    <div className="rounded-t-[31px] py-3 flex justify-center items-center text-white bg-[#05198B]">
                      Recommended
                    </div>
                    <div className=" bg-secondary flex flex-col justify-center items-center py-10 ">
                      <p className="text-white text-4xl text-center">
                        Silver Plan
                      </p>
                      <p className="text-white text-opacity-60 text-center">
                        The perfect all rounder
                      </p>
                    </div>
                    <div className="px-10 py-8">
                      <ul className="flex flex-col ">
                        <li className="flex justify-start items-center  space-x-2 font-s-medium ">
                          <BsCheckCircleFill className="text-secondary font-s-bold " />
                          <span>Trusted & Quality Jobs</span>
                        </li>
                        <li className="flex justify-start items-center  space-x-2 font-s-medium ">
                          <BsCheckCircleFill className="text-secondary font-s-bold " />
                          <span>International Job</span>
                        </li>
                        <li className="flex justify-start items-center  space-x-2 font-s-medium ">
                          <BsCheckCircleFill className="text-secondary font-s-bold " />
                          <span>No Extra Charge</span>
                        </li>
                        <li className="flex justify-start items-center  space-x-2 font-s-medium ">
                          <BsCheckCircleFill className="text-secondary font-s-bold " />
                          <span>Top Companies</span>
                        </li>
                      </ul>
                    </div>
                    <div className="h-[1px] bg-black bg-opacity-60"></div>
                    <div className="flex flex-col justify-center items-center space-x-1 pt-6 ">
                      <p className="font-s-bold text-4xl">$99</p>
                      <p className="text-secondary font-s-medium">Per Month</p>
                    </div>
                    <div className="flex flex-col space-y-3 justify-center items-center py-4">
                      <button className="text-sm bg-white border border-white text-secondary font-s-medium  px-6 py-3 rounded-md shadow-sm shadow-slate-700 w-[50%]">
                        Buy Now
                      </button>
                      <button className="text-sm bg-secondary border border-secondary text-white font-s-medium  px-6 py-3 rounded-md shadow-sm shadow-slate-700 w-[50%]">
                        Upgrade
                      </button>
                    </div>
                    <p className="text-sm font-s-medium flex justify-center items-center pb-10 ">
                      Minimum spend $16 over 12 months
                    </p>
                  </div> */}
                  {/* Platinum Plan */}
                  {/* <div className="justify-center flex ">
                    <div className="shadowspread  rounded-[31px] w-[100%] md:w-[90%]">
                      <div className="rounded-t-[31px] bg-secondary flex flex-col justify-center items-center py-10 ">
                        <p className="text-white text-3xl text-center">
                          Platinum Plan
                        </p>
                        <p className="text-white text-opacity-60 text-center text-sm">
                          For people serious about coding
                        </p>
                      </div>
                      <div className="px-10 py-4">
                        <ul className="flex flex-col ">
                          <li className="flex justify-start items-center  space-x-2 font-s-medium text-sm">
                            <BsCheckCircleFill className="text-secondary font-s-bold " />
                            <span>Trusted & Quality Jobs</span>
                          </li>
                          <li className="flex justify-start items-center  space-x-2 font-s-medium text-sm">
                            <BsCheckCircleFill className="text-secondary font-s-bold " />
                            <span>International Job</span>
                          </li>
                          <li className="flex justify-start items-center  space-x-2 font-s-medium text-sm">
                            <BsCheckCircleFill className="text-secondary font-s-bold " />
                            <span>No Extra Charge</span>
                          </li>
                          <li className="flex justify-start items-center  space-x-2 font-s-medium text-sm">
                            <BsCheckCircleFill className="text-secondary font-s-bold " />
                            <span>Top Companies</span>
                          </li>
                        </ul>
                      </div>
                      <div className="h-[1px] bg-black bg-opacity-60"></div>
                      <div className="flex flex-col justify-center items-center space-x-1 pt-4 ">
                        <p className="font-s-bold text-3xl">$250</p>
                        <p className="text-secondary font-s-medium text-sm">
                          Per Month
                        </p>
                      </div>
                      <div className="flex flex-col space-y-3 justify-center items-center py-2">
                        <button className="text-sm bg-white border border-white text-secondary font-s-medium  px-6 py-2 rounded-md shadow-sm shadow-slate-700 w-[40%]">
                          Buy Now
                        </button>
                        <button className="text-sm bg-secondary border border-secondary text-white font-s-medium  px-6 py-2 rounded-md shadow-sm shadow-slate-700 w-[40%]">
                          Upgrade
                        </button>
                      </div>
                      <p className="text-sm font-s-medium flex justify-center items-center pb-10 ">
                        Minimum spend $3,000 over 12 months
                      </p>
                    </div>
                  </div> */}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllPackages;
