import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { IoCall } from "react-icons/io5";
import { BsFillBagFill, BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { MdVideoCall } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { BsCameraVideoFill } from "react-icons/bs";

import { toast } from "react-toastify";
import { BiChevronLeft } from "react-icons/bi";
import RecommendCoaches from "../../common/RecommendCoaches";
import {
  candidateJobListAPI,
  candidateCoachListAPI,
  getAllServices,
} from "../../../api/authCandidate";
import { AiFillQuestionCircle } from "react-icons/ai";
import { useSelector } from "react-redux";
const ApplyForJob = () => {
  const { userDetails } = useSelector((state) => state.flightReducer);

  const [dataService, setDataService] = useState([]);
  const getCoachServices = async () => {
    try {
      const response = await getAllServices();
      //   console.log(response.data);
      setDataService(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const viewAllService = () => {
    if (userDetails && userDetails.token) {
      navigate("/candidate/all-services");
    } else {
      toast("Please login to view all services");
    }
  };
  const navigate = useNavigate();

  // console.log("this is the issue" , userDetails)

  console.log("User Details Apply Job_____________", userDetails);

  const [JobListingData, setJobListingDetails] = useState([]);
  const [coachListing, setCoachListing] = useState([]);

  const categoryId = userDetails.categoryId._id;

  console.log("Category Id", categoryId);

  const CandidateJobListing = async () => {
    try {
      const response = await candidateJobListAPI(categoryId);
      console.log("Data Found", response.data);
      setJobListingDetails(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const CandidateCoachListing = async () => {
    try {
      const response = await candidateCoachListAPI();
      console.log("Data Found", response.data);
      setCoachListing(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log("Data Coach", coachListing);

  useEffect(() => {
    CandidateJobListing();
    CandidateCoachListing();
    getCoachServices();
  }, []);

  function CurrentDate(mydate) {
    let currentDate = new Date().toJSON().slice(0, 10);
    var date1 = new Date(currentDate);
    var date2 = new Date(mydate);
    var Difference_In_Time = date1.getTime() - date2.getTime();
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    return Difference_In_Days;
  }

  const jobData = [
    {
      id: 1,
      logourl: "/assets/images/logo1.png",
      days: "01",
      category: "New",
      post: "Senior Web Designer , Developer",
      address: "1363-1385 Sunset Blvd Los Angeles, CA 90026, USA",
      link: "https://www.webmax.com",
      jobdetaillink: "/",
      minsal: "$2000",
      maxsal: "$2500",
      time: "Month",
    },
    {
      id: 2,
      logourl: "/assets/images/logo2.png",
      days: "01",
      category: "Internship",
      post: "Senior Web Designer , Developer",
      address: "1363-1385 Sunset Blvd Los Angeles, CA 90026, USA",
      link: "https://www.webmax.com",
      jobdetaillink: "/",
      minsal: "$2000",
      maxsal: "$2500",
      time: "Month",
    },
    {
      id: 3,
      logourl: "/assets/images/logo3.png",
      days: "01",
      category: "Part-Time",
      post: "Senior Web Designer , Developer",
      address: "1363-1385 Sunset Blvd Los Angeles, CA 90026, USA",
      link: "https://www.webmax.com",
      jobdetaillink: "/",
      minsal: "$2000",
      maxsal: "$2500",
      time: "Month",
    },
    {
      id: 4,
      logourl: "/assets/images/logo5.png",
      days: "01",
      category: "Freelancer",
      post: "Senior Web Designer , Developer",
      address: "1363-1385 Sunset Blvd Los Angeles, CA 90026, USA",
      link: "https://www.webmax.com",
      jobdetaillink: "/",
      minsal: "$2000",
      maxsal: "$2500",
      time: "Month",
    },
    {
      id: 5,
      logourl: "/assets/images/logo6.png",
      days: "01",
      category: "Internship",
      post: "Senior Web Designer , Developer",
      address: "1363-1385 Sunset Blvd Los Angeles, CA 90026, USA",
      link: "https://www.webmax.com",
      jobdetaillink: "/",
      minsal: "$2000",
      maxsal: "$2500",
      time: "Month",
    },
    {
      id: 6,
      logourl: "/assets/images/logo2.png",
      days: "01",
      category: "Fulltime Sixth",
      post: "Senior Web Designer , Developer",
      address: "1363-1385 Sunset Blvd Los Angeles, CA 90026, USA",
      link: "https://www.webmax.com",
      jobdetaillink: "/",
      minsal: "$2000",
      maxsal: "$2500",
      time: "Month",
    },
  ];

  const services = [
    {
      id: 1,
      button: "Buy Now",
      serviceName: "Adobe Photoshop Training for Beginner",
      byname: "By Ronald Richards",
      price: "$613",
      duration: "1 Hour",
    },
    {
      id: 2,
      button: "Buy Now",
      serviceName: "Adobe Photoshop Training for Beginner",
      byname: "By Ronald Richards",
      price: "$613",
      duration: "1 Hour",
    },
  ];

  return (
    <div>
      <div className="bg-inputcolor py-16">
        <div className="mx-auto max-w-[1150px] bg-[#fff]  rounded-t-2xl">
          <div className="flex items-center mb-4 font-s-medium text-secondary text-lg bg-inputcolor">
            <BiChevronLeft className="text-3xl" /> Apply for Job
          </div>

          <div className="px-8 mt-5  rounded-2xl">
            <div className="flex pb-4 items-center text-[#000] space-x-4 ">
              <BsFillBagFill className="text-secondary " size={32} />
              <div className="descri">
                <h6 className=" text-2xl font-s-medium">All Jobs</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  non quam commodo, dictum justo a, varius nisl.
                </p>
              </div>
            </div>
            <hr className="mb-4" />
          </div>

          <div className="pt-4">
            <div className="grid grid-cols-1 gap-10 px-10">
              {JobListingData?.map((item, id) => {
                return (
                  <>
                    <div className="">
                      <div
                        className="bg-white box-shadow  rounded-xl relative  pb-7"
                        key={id}
                      >
                        <div className="grid md:grid-cols-12 gap-2">
                          <div className="md:col-span-2">
                            <div className="absolute flex md:p-5 bg-white box-shadow1 rounded-xl left-[34%]  lg:-bottom-3   md:left-2">
                              <img
                                src={
                                  item?.employerId == null
                                    ? ""
                                    : item?.employerId?.image
                                  // ? item?.employerId?.image
                                }
                                alt="/"
                                width={80}
                                height={80}
                              />
                            </div>
                          </div>
                          <div className="md:col-span-5 lg:pl-8 pl-3 md:pt-8 pt-10">
                            <div className="flex flex-col gap-3 lg:pt-0 pt-16 ">
                              <div className=" ">
                                <Link to={`/job-details/${item?._id}`}>
                                  <p className="text-base font-s-medium text-black ">
                                    {item?.jobTitle}
                                  </p>
                                </Link>
                              </div>
                              <div className="">
                                <p className="text-[#060606] text-sm  font-s-medium text-opacity-70">
                                  {item?.city}
                                  {", "}
                                  {item?.state}
                                  {", "}
                                  {item?.country}
                                </p>
                              </div>
                              <div className="">
                                <p className="text-secondary text-sm font-s-medium ">
                                  {item?.employerId?.website === null
                                    ? item.companywebsite
                                    : item?.employerId?.website}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="md:col-span-2  flex md:justify-center md:items-start lg:pt-8 md:px-0 px-4">
                            <div className="text-[#41B249] font-s-medium ">
                              {CurrentDate(item?.updatedAt?.substring(0, 10))}{" "}
                              Days Ago
                            </div>
                          </div>
                          <div className="md:col-span-3 md:pr-3 gap-3 md:pt-0  md:px-0 px-4 flex flex-col md:justify-end md:items-end">
                            <div className="">
                              <div
                                className={`{ text-white font-s-medium text-sm px-3 mt-2 text-center rounded-md py-[0.32rem] mb-7  ${
                                  item?.jobType === "Internship"
                                    ? "bg-[#AB6B35]"
                                    : item?.jobType === "Fulltime"
                                    ? "bg-[#8C82EA]"
                                    : item?.jobType === "Part-Time"
                                    ? " bg-[#D2628C]"
                                    : item?.jobType === "Freelance"
                                    ? " bg-[#2D9BB3]"
                                    : "bg-[#41B249]"
                                }`}
                              >
                                {item?.jobType}
                              </div>
                            </div>
                            <div className="font-s-medium  text-[13px]">
                              {item?.salaryFrom} - {item?.salaryTo} /{" "}
                              {item?.salaryPeriod}
                            </div>
                            <div className="">
                              <Link
                                to={`/job-details/${item._id}`}
                                className="font-s-bold  text-secondary "
                              >
                                Browse Job
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
        <div className="md:flex hidden items-center justify-center pt-16 bg-white mx-[3.6rem] py-3 sm:px-6">
          <div className="flex flex-1 justify-between sm:hidden">
            <a
              href="/job-search"
              className="relative inline-flex items-center rounded-md border bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Previous
            </a>
            <a
              href="/job-search"
              className="relative ml-3 inline-flex items-center rounded-md border bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Next
            </a>
          </div>
          <div className=" flex  items-center justify-between">
            <div>
              <nav
                className="isolate inline-flex gap-2 -space-x-px rounded-md "
                aria-label="Pagination"
              >
                <NavLink
                  to="#"
                  className="relative inline-flex items-center rounded-l-md  bg-white px-2 py-2 text-sm font-medium text-grey hover:bg-gray-50 focus:z-20"
                >
                  <span className="sr-only">Previous</span>
                  <BsChevronLeft className="h-5 w-5" aria-hidden="true" />
                </NavLink>
                {/* Current: "z-10 bg-indigo-50 border-secondary text-indigo-600", Default: "bg-white text-grey hover:bg-gray-50" */}
                <NavLink
                  href="#"
                  aria-current="page"
                  className="relative z-10 inline-flex items-center  bg-secondary px-4 py-2 text-sm font-medium text-white focus:z-20"
                >
                  1
                </NavLink>
                <NavLink
                  href="#"
                  className="relative inline-flex items-center  bg-white px-4 py-2 text-sm font-medium text-grey hover:bg-gray-50 focus:z-20"
                >
                  2
                </NavLink>
                <NavLink
                  to="#"
                  className="relative hidden items-center  bg-white px-4 py-2 text-sm font-medium text-grey hover:bg-gray-50 focus:z-20 md:inline-flex"
                >
                  3
                </NavLink>
                <span className="relative inline-flex items-center  bg-white px-4 py-2 text-sm font-medium text-gray-700">
                  ...
                </span>
                <NavLink
                  href="#"
                  className="relative hidden items-center bg-white px-4 py-2 text-sm font-medium text-grey hover:bg-gray-50 focus:z-20 md:inline-flex"
                >
                  8
                </NavLink>
                <NavLink
                  href="#"
                  className="relative inline-flex items-center  bg-white px-4 py-2 text-sm font-medium text-grey hover:bg-gray-50 focus:z-20"
                >
                  9
                </NavLink>
                <NavLink
                  href="#"
                  className="relative inline-flex items-center  bg-white px-4 py-2 text-sm font-medium text-grey hover:bg-gray-50 focus:z-20"
                >
                  10
                </NavLink>
                <NavLink
                  href="#"
                  className="relative inline-flex items-center rounded-r-md  bg-white px-2 py-2 text-sm font-medium text-grey hover:bg-gray-50 focus:z-20"
                >
                  <span className="sr-only">Next</span>
                  <BsChevronRight className="h-5 w-5" aria-hidden="true" />
                </NavLink>
              </nav>
            </div>
          </div>
        </div>

        <div className=" bg-[#fff] container mx-auto px-10">
          <div className=" container mx-auto  pb-5">
            <div className="flex justify-between lg:pt-12 lg:px-0 px-5">
              <div className="font-s-bold  text-[18px] ">
                Recommended Coches
              </div>
              <div className="text-secondary font-s-medium underline">
                View More
              </div>
            </div>
          </div>

          <RecommendCoaches />
        </div>

        <div className="bg-[#fff] container mx-auto px-10 py-8">
          <div className="container mx-auto  pb-5">
            <div className="flex justify-between  pt-3 lg:px-0 px-5">
              <div className="font-s-bold  text-[18px] ">
                Services Available
              </div>
              <div
                className="text-secondary font-s-medium underline cursor-pointer"
                onClick={(e) => viewAllService()}
              >
                View More
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-5 px-5 lg:px-0">
            {dataService?.slice(0, 4).map((item) => (
              <div className="bg-inputcolor  py-2 rounded-lg  items-center">
                <div className="flex justify-between">
                  <div className="px-5 ">
                    <p className="font-s-medium text-lg">{item.serviceName} </p>
                    <div className="flex pt-2 space-x-2">
                      <p className="text-sm whitespace-nowrap">
                        {" "}
                        {item.coachName}
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
                  <div className="flex flex-col">
                    <div className="text-end px-5 ">
                      <button
                        onClick={() => {
                          navigate("/candidate/slot-booking", {
                            state: {
                              coachId: item?.coachId?._id,
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
                    <div
                      onClick={() => {
                        navigate("/candidate/ask-me-question", {
                          state: {
                            serviceId: item._id,
                            coachId: item.coachId._id,
                            coachName: item.coachId.coachName,
                            image: item.coachId.images,
                          },
                        });
                      }}
                      className="flex items-end justify-end px-6 pb-3"
                    >
                      {" "}
                      <AiFillQuestionCircle
                        size={28}
                        className="text-secondary "
                      />
                    </div>
                  </div>
                </div>

                <hr className="w-full h-[0.10rem] bg-inputcolor" />

                <div className="md:flex py-3 items-center justify-center space-x-5">
                  <div className="bg-white rounded-full text-sm py-2  items-center justify-center lg:px-5 flex font-s-medium">
                    Special Price :{" "}
                    {parseInt(item.enterPrice) + parseInt(item.gst)}
                  </div>
                  <div className="bg-white rounded-full text-sm  py-2 px-2 lg:my-0 my-3 font-s-medium flex  items-center justify-center ">
                    <div>Medium :</div>
                    <div className="flex space-x-3">
                      {item.medium.map((option) => {
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
                  {/* <div className="bg-white text-sm rounded-full flex items-center justify-center lg:px-5  py-2 font-s-medium">
                    Service Duration : {item.serviceduration}
                  </div> */}
                  <div className="bg-white text-sm rounded-full flex items-center justify-center lg:px-5  py-2 font-s-medium">
                    Duration per session : {item.durationofSession}
                  </div>
                  <div className="bg-white text-sm rounded-full flex items-center justify-center lg:px-5  py-2 font-s-medium">
                    No. of sessions : {item.NoofSession}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyForJob;
