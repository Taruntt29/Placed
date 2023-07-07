import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IoCall } from "react-icons/io5";
import { RiArrowLeftSLine } from "react-icons/ri";
import { MdVideoCall, MdMessage } from "react-icons/md";
import { getPurchasedServicesDetail } from "../../../api/authCandidate";

const PurchaseDetail = () => {
  const services = [
    {
      id: 1,
      button: "Buy Now",
      serviceName: "Adobe Photoshop Training for Beginner",
      byname: "By Ronald Richards",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
      price: "$613",
      duration: "1 Hour",
      lang: " English",
    },
  ];

  const param = useParams();
  const id = param.id

  const [data,setData] = useState([])

  const getDetail = async () => {
    try {
      const response = await getPurchasedServicesDetail(id)
      setData(response.data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getDetail()
  },[])

  return (
    <div className="bg-inputcolor">
      <div className="container mx-auto py-10  ">
        <Link to="/candidate/recommended-coaches">
          <div className="flex space-x-2 items-center pb-6 lg:px-0 px-5 ">
            {" "}
            <RiArrowLeftSLine className="text-secondary w-5 h-5 " />{" "}
            <p className="text-secondary font-s-medium text-base">
              {" "}
              Accepted Request
            </p>{" "}
          </div>
        </Link>
        <div className="flex flex-col space-y-10 px-4 md:px-0">
          <div className="bg-white rounded-md py-3 ">
            <div className="flex justify-between items-center py-2">
              <div className="flex space-x-4  px-5 pb-5">
                <img alt="icon" src="/assets/images/upcoming.png" />
                <h3 className="font-bold  text-lg flex pt-1">
                  Upcoming Services
                </h3>
              </div>
            </div>
            <hr className="w-full h-[0.10rem] bg-inputcolor" />

            <div className=" px-5 my-3">
              <div className="bg-inputcolor py-4 lg:px-10 px-5 rounded-md">
                <h4 className="text-xl font-s-medium">
                  {data?.[0]?.serviceId?.serviceName} - {data?.[0]?.serviceId?.serviceTitle}
                </h4>
                <p className="py-2 text-justify">
                  {data?.[0]?.serviceId?.description}
                </p>
                <p className="py-2 text-justify">
                 {data?.[0]?.serviceId?.additionalDetail}{" "}
                </p>
               
                <div className=" px-5">
                  
                    <div className="bg-inputcolor py-2 rounded-lg">
                      <hr className="w-full h-[0.10rem] bg-inputcolor" />
                      <div className="grid lg:grid-cols-4 space-x-4 ">
                        <div className="bg-[#fff] py-2 px-10 rounded-full my-3 font-s-bold">
                          Special Price :
                          <span className="text-secondary font-s-bold">
                          {data?.[0]?.totalAmount}
                          </span>
                        </div>
                        <div className="bg-[#fff] py-2 px-10 rounded-full my-3 flex space-x-2 font-s-bold">
                          Medium :
                          <div className="flex space-x-5">
                            {data?.[0]?.serviceId?.medium?.toString()}
                            <MdMessage
                              size={24}
                              className="bg-secondary text-white rounded-full p-1 "
                            />
                            <MdVideoCall
                              size={24}
                              className="bg-secondary text-white rounded-full p-1 "
                            />
                          </div>
                        </div>
                        <div className="bg-[#fff] py-2 px-10 rounded-full my-3 font-s-bold">
                          Duration :
                          <span className="text-secondary font-s-bold">
                            {data?.[0]?.serviceId?.durationofSession}
                          </span>
                        </div>
                        <div className="bg-[#fff] py-2 px-10 rounded-full my-3 font-s-bold">
                          Language :
                          <span className="text-secondary font-s-bold">
                            {data?.[0]?.serviceId?.language.toString()}
                          </span>
                        </div>
                      </div>
                    </div>
                
                </div>
                <div className="flex items-end justify-end px-10">
                  <button className="text-red-400 rounded-full bg-white py-2 px-8 font-s-medium">
                    Report a Problem
                  </button>
                </div>
              </div>
              <hr className="w-full h-[0.10rem] bg-inputcolor pt-4" />
              <div className="bg-inputcolor px-10 py-3">
                <h5 className="font-s-medium text-xl">Schedule Date & Time</h5>
                {data?.[0] && data?.[0]?.bookingSlots.map((item, index) => {
                  return (
                    <>
                    
                <div className="py-5">
                  <label className="font-s-medium">Class {index + 1}</label>
                  <div className="lg:flex justify-between">
                    <div className="grid lg:grid-cols-2  space-x-4">
                      <div className="bg-[#fff] py-2 lg:px-10 px-12 rounded-full my-3 font-s-bold">
                        Date :{" "}
                        <span className="text-secondary font-s-bold">
                          {item.date}
                        </span>
                      </div>
                      <div className="bg-[#fff] py-2 lg:px-10 px-10 rounded-full my-3 font-s-bold">
                        Time :{" "}
                        <span className="text-secondary font-s-bold">
                          {item.timeStart} - {item.timeEnd}
                        </span>
                      </div>
                    </div>
                    <div className=" py-2 px-5 space-x-5 rounded-full my-3 flex  font-s-bold">
                      <p>Join </p>
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
                </div>
                    </>
                  )
                })}
                
                <button className="text-white bg-red-500 rounded-full px-10 py-1.5">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseDetail;
