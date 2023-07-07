import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CgNotes } from "react-icons/cg";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { RiArrowLeftSLine } from "react-icons/ri";
import { IoCall } from "react-icons/io5";
import { BsCameraVideoFill } from "react-icons/bs";
import { AiFillQuestionCircle } from "react-icons/ai";
import { useSelector } from "react-redux";

import {
  getCoachDetails,
  getCoachServicesById,
} from "../../../api/authCandidate";

const AllServices = () => {
  const { userDetails } = useSelector((state) => state.flightReducer);

  // console.log("userdETAILS", userDetails);
  // coachId = userDetails._id;
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
    {
      id: 2,
      button: "Buy Now",
      serviceName: "Adobe Photoshop Training for Beginner",
      byname: "By Ronald Richards",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
      price: "$613",
      duration: "1 Hour",
      lang: " English",
    },
    {
      id: 3,
      button: "Buy Now",
      serviceName: "Adobe Photoshop Training for Beginner",
      byname: "By Ronald Richards",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
      price: "$613",
      duration: "1 Hour",
      lang: " English",
    },
    {
      id: 4,
      button: "Buy Now",
      serviceName: "Adobe Photoshop Training for Beginner",
      byname: "By Ronald Richards",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
      price: "$613",
      duration: "1 Hour",
      lang: " English",
    },
  ];
  const [dataService, setDataService] = useState([]);
  const { state } = useLocation();
  console.log("state" , state)
  // console.log("sdjh", state);
  const getCoachServices = async () => {
    try {
      const response = await getCoachServicesById(state?.coachId);
      //   console.log(response.data);
      setDataService(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const [dataCoach, setDataCoach] = useState([]);
  const navigate = useNavigate();
  const getCoachDetail = async () => {
    try {
      const response = await getCoachDetails(state.coachId);
      //   console.log(response.data);
      setDataCoach(response?.data?.[0]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCoachServices();
    getCoachDetail();
  }, []);

  return (
    <div className="bg-inputcolor">
      <div className="container mx-auto py-10  ">
        <Link to="/candidate/recommended-coaches">
          <div className="flex space-x-2 items-center pb-6 lg:px-0 px-5 ">
            {" "}
            <RiArrowLeftSLine className="text-secondary w-5 h-5 " />{" "}
            <p className="text-secondary font-s-medium text-base">
              {" "}
              Service Details
            </p>{" "}
          </div>
        </Link>
        <div className="flex flex-col space-y-10 px-4 md:px-0">
          <div className="bg-white rounded-md py-3 ">
            <div className="flex justify-between items-center py-2">
              <div className="flex space-x-4  px-5 pb-5">
                <img alt="icon" src="/assets/images/service-detail.png" />
                <h3 className="font-bold  text-lg flex pt-1">Services</h3>
              </div>
             
            </div>
            <hr className="w-full h-[0.10rem] bg-inputcolor" />

            <div className=" px-5">
              {dataService.map((item) => (
                <div className="bg-inputcolor my-5 py-2 rounded-lg">
                  <div className="text-end px-5 lg:py-0 py-3 flex items-center justify-between">
                   
                  <div className="flex items-center justify-center space-x-4">
                <img
                  alt="images"
                  src="/assets/images/chat-img3.png"
                  // src={dataCoach.images[0]}
                  className="rounded-full"
                />
                <p className="text-secondary font-s-medium">
                  {dataCoach.fullName} ({dataCoach._id})
                </p>
              </div>
                   
                    <button
                      onClick={() => {
                        navigate("/candidate/slot-booking", {
                          state: {
                            coachId: state.coachId,
                            serviceId: item?._id,
                            noOfSession: item?.NoofSession,
                            totalwithdrawAmount: item?.withdrawnAmount,
                          },
                        });
                      }}
                      className="text-white font-s-medium px-10 py-1.5 bg-secondary text-sm rounded-full"
                    >
                      Buy Now
                    </button>
                  </div>

                  {/* <Link to="/candidate/service-detail"> */}
                  <div
                    className="px-5 md:flex md:space-x-20 cursor-pointer"
                    onClick={() => {
                      navigate("/candidate/service-detail", {
                        state: {
                          serviceId: item._id,
                        },
                      });
                      console.log("jkhd", item._id);
                    }}
                  >
                    <p className="font-s-medium text-lg">
                      {item?.serviceName}{" "}
                    </p>
                  </div>
                  {/* </Link> */}

                  <p className="px-5 lg:w-[90%] w-full pt-2  text-justify">
                    {item?.description}
                  </p>

                  <div onClick={() => {
                      navigate("/candidate/ask-me-question", {
                        state: {
                          serviceId: item._id,
                          coachId : item.coachId._id,
                          coachName : item.coachId.coachName,
                          image : item.coachId.images
                        }
                      })}}  className="flex items-end justify-end px-6 pb-3">
                    {" "}
                    <AiFillQuestionCircle
                      size={28}
                      className="text-secondary "
                    />
                  </div>

                  <hr className="w-full h-[0.10rem] bg-inputcolor" />
                  <div className="grid lg:grid-cols-3 justify-items-center px-5 gap-4">
                    <div className="bg-[#fff] py-3 px-10 rounded-full my-3 font-s-bold w-full">
                      Special Price :{" "}
                      <span className="text-secondary font-s-bold">
                        {parseInt(item?.enterPrice) + parseInt(item?.gst)}
                      </span>
                    </div>
                    <div className="bg-[#fff] py-3 px-10 rounded-full my-3 flex space-x-2 font-s-bold w-full">
                      Medium :
                      <div className="flex space-x-5">
                        {" "}
                        {item?.medium?.map((option) => {
                          return (
                            <>
                              {option === "Call" ? (
                                <IoCall
                                  className="bg-primary cursor-pointer text-secondary p-0.5"
                                  size={20}
                                />
                              ) : option === "Video Call" ? (
                                <BsCameraVideoFill
                                  className="bg-primary cursor-pointer text-secondary p-0.5"
                                  size={20}
                                />
                              ) : null}
                            </>
                          );
                        })}
                      </div>
                    </div>
                    <div className="bg-[#fff] py-3 px-10 rounded-full my-3 font-s-bold w-full">
                      Service Duration :
                      <span className="text-secondary font-s-bold">
                        {item?.serviceduration}
                      </span>
                    </div>
                    <div className="bg-[#fff] py-3 px-10 rounded-full my-3 font-s-bold w-full">
                      Duration of Session :
                      <span className="text-secondary font-s-bold">
                        {item?.durationofSession}
                      </span>
                    </div>
                    <div className="bg-[#fff] py-3 px-10 rounded-full my-3 font-s-bold w-full">
                      Language :
                      <span className="text-secondary font-s-bold bg-primary rounded-full p-2 mr-2 text-sm">
                        {/* {item?.language?.map((val) => {
                          return {val};
                        })} */}
                        {item?.language?.toString(" , ")}
                      </span>
                    </div>
                    <div className="bg-[#fff] py-3 px-10 rounded-full my-3 font-s-bold w-full">
                      Number of sessions :
                      <span className="text-secondary font-s-bold bg-primary rounded-full p-2 mr-2">
                        {/* {item?.language?.map((val) => {
                          return {val};
                        })} */}
                        {item?.NoofSession}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-end justify-end py-4 px-5">
              <div className=" hidden md:flex  bg-white  ">
                <div className="flex flex-1 justify-between sm:hidden">
                  <a
                    href="/manage-jobs"
                    className="relative inline-flex items-center rounded-md border bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    Previous
                  </a>
                  <a
                    href="/manage-jobs"
                    className="relative ml-3 inline-flex items-center rounded-md border bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    Next
                  </a>
                </div>
                <div className=" flex  ">
                  <div>
                    <nav
                      className="isolate inline-flex gap-2  rounded-md "
                      aria-label="Pagination"
                    >
                      <a
                        href="#"
                        className="relative inline-flex items-center rounded-l-md  bg-white px-2 py-2 text-sm font-medium text-grey hover:bg-gray-50 focus:z-20"
                      >
                        <span className="sr-only">Previous</span>
                        <BsChevronLeft className="h-5 w-5" aria-hidden="true" />
                      </a>
                      {/* Current: "z-10 bg-indigo-50 border-secondary text-indigo-600", Default: "bg-white text-grey hover:bg-gray-50" */}
                      <a
                        href="#"
                        aria-current="page"
                        className="relative z-10 inline-flex items-center  bg-secondary px-4 py-2 text-sm font-medium text-white focus:z-20"
                      >
                        1
                      </a>
                      <a
                        href="#"
                        className="relative inline-flex items-center  bg-white px-4 py-2 text-sm font-medium text-grey hover:bg-gray-50 focus:z-20"
                      >
                        2
                      </a>
                      <a
                        href="#"
                        className="relative hidden items-center  bg-white px-4 py-2 text-sm font-medium text-grey hover:bg-gray-50 focus:z-20 md:inline-flex"
                      >
                        3
                      </a>
                      <span className="relative inline-flex items-center  bg-white px-4 py-2 text-sm font-medium text-gray-700">
                        ...
                      </span>
                      <a
                        href="#"
                        className="relative hidden items-center bg-white px-4 py-2 text-sm font-medium text-grey hover:bg-gray-50 focus:z-20 md:inline-flex"
                      >
                        8
                      </a>
                      <a
                        href="#"
                        className="relative inline-flex items-center  bg-white px-4 py-2 text-sm font-medium text-grey hover:bg-gray-50 focus:z-20"
                      >
                        9
                      </a>
                      <a
                        href="#"
                        className="relative inline-flex items-center  bg-white px-4 py-2 text-sm font-medium text-grey hover:bg-gray-50 focus:z-20"
                      >
                        10
                      </a>
                      <a
                        href="#"
                        className="relative inline-flex items-center rounded-r-md  bg-white px-2 py-2 text-sm font-medium text-grey hover:bg-gray-50 focus:z-20"
                      >
                        <span className="sr-only">Next</span>
                        <BsChevronRight
                          className="h-5 w-5"
                          aria-hidden="true"
                        />
                      </a>
                    </nav>
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

export default AllServices;
