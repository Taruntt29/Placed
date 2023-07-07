import React, { useEffect, useState } from "react";

import { IoCartSharp } from "react-icons/io5";
import { BiChevronLeft } from "react-icons/bi";
import { BsCheckCircleFill } from "react-icons/bs";
import { getAllPackagesAPI } from "../../../api/authService";
import { toast } from "react-toastify";
const ViewAllPackages = () => {
  // API
  const [packagesData, setPackagesData] = useState([]);

  const getPackages = async () => {
    try {
      const { data, status, message } = await getAllPackagesAPI();
      if (status) {
        setPackagesData(data);
        console.log("packagesData", data);
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
      <div className="bg-inputcolor pb-12 lg:px-0 px-5">
        <div className=" pt-12 lg:px-10 pb-2 ">
          <h3 className="font-bold  text-lg flex pt-1 text-secondary">
            <BiChevronLeft className="" size={32} />
            Buy Packages
          </h3>
        </div>
        <div className="container mx-auto  bg-white pb-10 rounded-md ">
          <div className="flex space-x-4 border-b-2 border-gray-200  px-5 pt-5 pb-5">
            <IoCartSharp size={40} fill="#2544EE" />
            <div className="descri">
              <h3 className="font-bold  text-lg flex pt-1">See All Packages</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                non quam commodo, dictum justo a, varius nisl.
              </p>
            </div>
          </div>

          {packagesData?.map((item, index) => {
            return (
              <div className="" key={index}>
                <div className="  py-8 md:py-10 items-center  px-8">
                  {/* Gold Plan */}
                  <div className="flex ">
                    <div className="shadowspread lg:flex rounded-[31px] w-[100%] ">
                      <div className=" lg:rounded-l-[31px] lg:rounded-none rounded-t-[31px] bg-secondary flex flex-col  py-8 px-5 ">
                        <p className="text-white text-2xl capitalize">
                          {item.packageName}
                        </p>

                        <p className="text-white text-opacity-60  text-sm">
                          {item.description}
                        </p>
                        <div className="flex space-x-1 pt-4 ">
                          <p className="font-s-bold text-white text-2xl">
                            {item.amount.replace("Per Month", " ")}
                          </p>
                          {/* <p className="text-white flex items-center justify-center font-s-medium text-sm">
                            Per Month
                          </p> */}
                        </div>
                      </div>
                      <div className="bg-[#05198B] px-5 items-center justify-center pt-20 text-gray-400 relative">
                        <p className="absolute lg:-right-10 lg:-rotate-90 bottom-6">
                          Recommended
                        </p>
                      </div>

                      <div className="lg:px-12 px-6 lg:py-6">
                        <ul className="flex flex-col ">
                          <li className="flex justify-start items-center py-2.5 space-x-2 font-s-medium text-sm">
                            <BsCheckCircleFill className="text-secondary font-s-bold " />
                            <span>{item.longdescription}</span>
                          </li>
                          <li className="flex justify-start items-center py-2.5 space-x-2 font-s-medium text-sm">
                            <BsCheckCircleFill className="text-secondary font-s-bold " />
                            <span>{item.longdescription}</span>
                          </li>
                          <li className="flex justify-start items-center py-2.5 space-x-2 font-s-medium text-sm">
                            <BsCheckCircleFill className="text-secondary font-s-bold " />
                            <span>{item.longdescription}</span>
                          </li>
                        </ul>
                      </div>

                      <div className="h-[1px] bg-black bg-opacity-60"></div>

                      <div className="flex flex-col pt-5 px-1">
                        {" "}
                        <div className="flex flex-col space-y-4 items-center justify-center py-2">
                          <button className="text-sm bg-white border border-white text-secondary font-s-medium lg:w-[80%] w-[75%]  py-1.5 rounded-md shadow-sm shadow-slate-700 ">
                            Buy Now
                          </button>
                          <button className="text-sm bg-secondary border border-secondary text-white font-s-medium lg:w-[80%]  w-[75%]  py-1.5 rounded-md shadow-sm shadow-slate-700 ">
                            Upgrade
                          </button>
                        </div>
                        <p className="text-sm font-s-medium flex justify-center items-center pb-5 ">
                          {item.smalldescription}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ViewAllPackages;
