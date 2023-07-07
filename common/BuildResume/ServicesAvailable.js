import React from "react";
import { Link } from "react-router-dom";

import { MdVideoCall } from "react-icons/md";

import { IoCall } from "react-icons/io5";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const ServicesAvailable = () => {
  const services = [
    {
      id: 1,
      button: "Buy Now",
      serviceName: "Learn to Build a Resume",
      byname: "By Ronald Richards",
      price: "$613",
      duration: "1 Hour",
    },
    {
      id: 2,
      button: "Buy Now",
      serviceName: "Learn to Build a Resume",
      byname: "By Ronald Richards",
      price: "$613",
      duration: "1 Hour",
    },
    {
      id: 3,
      button: "Buy Now",
      serviceName: "Learn to Build a Resume",
      byname: "By Ronald Richards",
      price: "$613",
      duration: "1 Hour",
    },
    {
      id: 4,
      button: "Buy Now",
      serviceName: "Learn to Build a Resume",
      byname: "By Ronald Richards",
      price: "$613",
      duration: "1 Hour",
    },
  ];

  return (
    <div className="container mx-auto pt-10">
      <div>
        <div className="flex flex-col items-center justify-center  pt-6 lg:px-0 px-5">
          <div className="font-s-bold  text-secondary ">
            Learn to Build a Resume
          </div>
          <div className="font-s-bold pb-2 text-2xl">Services Available</div>
        </div>
        <div className="grid lg:grid-cols-2 gap-5 px-5 lg:px-0">
          {services.map((item) => (
            <div className="bg-inputcolor my-1 py-2 rounded-lg">
              <div className="text-end px-5 ">
                <button className="text-white font-s-medium px-10 py-1.5 bg-secondary text-sm rounded-full">
                  {item.button}
                </button>
              </div>

              <div className="px-5 ">
                <p className="font-s-medium text-lg">{item.serviceName} </p>
                <div className="flex pt-2 space-x-2">
                  <p className="text-sm whitespace-nowrap pb-3">
                    {" "}
                    {item.byname}
                  </p>
                  <div className="flex">
                    <AiFillStar fill="#eaba45" />
                    <AiFillStar fill="#eaba45" />
                    <AiFillStar fill="#eaba45" />
                    <AiFillStar fill="#eaba45" />
                    <AiOutlineStar />
                  </div>
                </div>
              </div>

              <hr className="w-full h-[0.10rem] bg-inputcolor" />

              <div className="md:flex py-3 px-5 space-x-5">
                <div className="bg-white rounded-full text-sm py-2  items-center justify-center lg:px-5 flex font-s-medium">
                  Special Price : {item.price}
                </div>
                <div className="bg-white rounded-full text-sm px-2 py-2  lg:my-0 my-3 font-s-medium flex  items-center justify-center ">
                  <div>Medium :</div>
                  <div className="flex space-x-3">
                    {" "}
                    <IoCall
                      size={24}
                      className="bg-secondary text-white rounded-full p-1 "
                    />
                    <MdVideoCall
                      size={24}
                      className="bg-secondary text-white rounded-full p-1 "
                    />
                  </div>
                </div>
                <div className="bg-white text-sm rounded-full flex items-center justify-center lg:px-5  py-2 font-s-medium">
                  Duration : {item.duration}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesAvailable;
