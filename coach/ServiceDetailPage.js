import React from "react";
import { Link } from "react-router-dom";
import { IoCall } from "react-icons/io5";
import { RiArrowLeftSLine } from "react-icons/ri";
import { MdVideoCall, MdMessage } from "react-icons/md";
 
const ServiceDetailPage = () => {
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

  return (
    <div className="bg-inputcolor">
      <div className="container mx-auto py-10  ">
        <Link to="/candidate/upcoming-services">
          <div className="flex space-x-2 items-center pb-6 lg:px-0 px-5 ">
            {" "}
            <RiArrowLeftSLine className="text-secondary w-5 h-5 " />{" "}
            <p className="text-secondary font-s-medium text-base">
              {" "}
              Active Candidate
            </p>{" "}
          </div>
        </Link>
        <div className="flex flex-col space-y-10 px-4 md:px-0">
          <div className="bg-white rounded-md py-3 ">
            <div className="lg:flex justify-between items-center py-2">
              <div className="flex space-x-4  px-5 pb-5">
                <img alt="icon" src="/assets/images/service-detail.png" />
                <h3 className="font-bold  text-lg flex pt-1">
                  Services Detail
                </h3>
              </div>
              <div className="flex items-center justify-center px-10 space-x-4">
                <img
                  alt="images"
                  src="/assets/images/chat-img3.png"
                  className="rounded-full"
                />
                <p className="text-secondary font-s-medium">
                  Ronald Richards (560798)
                </p>
              </div>
            </div>

            <hr className="w-full h-[0.10rem] bg-inputcolor" />

            <div className=" px-5 my-3">
              <div className="bg-inputcolor py-4 lg:px-10 px-5 rounded-md">
                <h4 className="text-xl font-s-medium">
                  Adobe Photoshop Training for Beginner
                </h4>
                <p className="py-2 text-justify">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, Lorem Ipsum is
                  simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard Lorem Ipsum is
                  simply dummy text of the printing and typesetting industry.
                </p>
                <p className="py-2 text-justify">
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, Lorem Ipsum is simply dummy text. Lorem Ipsum
                  has been the industry's standard Lorem Ipsum is simply dummy
                  text of the printing and typesetting industry.{" "}
                </p>
                <p className="py-2 text-justify">
                  Lorem Ipsum has been the industrys standard dummy text ever
                  since the 1500s, Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry.{" "}
                </p>
                <p className="py-2 text-justify">
                  Lorem Ipsum has been the industry's standard Dummy text ever
                  since the 1500s, Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s
                </p>

                <div className=" px-5">
                  {services.map((item) => (
                    <div className="bg-inputcolor py-2 rounded-lg">
                      <hr className="w-full h-[0.10rem] bg-inputcolor" />
                      <div className="grid lg:grid-cols-4 space-x-4 ">
                        <div className="bg-[#fff] py-2 flex items-center justify-center rounded-full my-3 font-s-bold">
                          Special Price :{" "}
                          <span className="text-secondary font-s-bold">
                            {item.price}
                          </span>
                        </div>
                        <div className="bg-[#fff] py-2  items-center justify-center rounded-full my-3 flex space-x-2 font-s-bold">
                          Medium :
                          <div className="flex space-x-5">
                            {" "}
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
                        <div className="bg-[#fff] py-2 flex items-center justify-center rounded-full my-3 font-s-bold">
                          Duration :
                          <span className="text-secondary font-s-bold">
                            {item.duration}
                          </span>
                        </div>
                        <div className="bg-[#fff] py-2 flex items-center justify-center rounded-full my-3 font-s-bold">
                          Language :
                          <span className="text-secondary font-s-bold">
                            {item.lang}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex items-end justify-end lg:px-10 px-5">
                  <button className="text-red-400 rounded-full bg-white py-2 px-8 font-s-medium">
                    Report a Problem
                  </button>
                </div>
              </div>
              <hr className="w-full h-[0.10rem] bg-inputcolor pt-4" />
              <div className="bg-inputcolor lg:px-10 px-5 py-3">
                <h5 className="font-s-medium text-xl">Schedule Date & Time</h5>
                <div className="py-5">
                  <label className="font-s-medium">Class 1</label>
                  <div className="lg:flex justify-between">
                    <div className="grid lg:grid-cols-2  space-x-4">
                      <div className="bg-[#fff] py-2 px-10 rounded-full my-3 font-s-bold">
                        Date :{" "}
                        <span className="text-secondary font-s-bold">
                          23 Jan 2022
                        </span>
                      </div>
                      <div className="bg-[#fff] py-2 px-10 rounded-full my-3 font-s-bold">
                        Time :{" "}
                        <span className="text-secondary font-s-bold">
                          10:00 AM
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
                <div className="py-5">
                  <label className="font-s-medium">Class 2</label>
                  <div className="lg:flex justify-between">
                    <div className="grid lg:grid-cols-2  space-x-4">
                      <div className="bg-[#fff] py-2 px-10 rounded-full my-3 font-s-bold">
                        Date :{" "}
                        <span className="text-secondary font-s-bold">
                          23 Jan 2022
                        </span>
                      </div>
                      <div className="bg-[#fff] py-2 px-10 rounded-full my-3 font-s-bold">
                        Time :{" "}
                        <span className="text-secondary font-s-bold">
                          10:00 AM
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;
