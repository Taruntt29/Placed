import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { IoCall } from "react-icons/io5";
import { BsFillBagFill, BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { MdVideoCall } from "react-icons/md";
import { BiChevronLeft } from "react-icons/bi";
import RecommendCoaches from "../../common/RecommendCoaches";
import { useSelector } from "react-redux";
import { candidateFavouriteJobListAPI } from "../../../api/authCandidate";
const FavoriteJobs = () => {
  const { userDetails } = useSelector((state) => state.flightReducer);

  console.log("User Details Apply Job_____________", userDetails);

  const [FavJobListingData, setJobFavouruteListingDetails] = useState([]);

  const CandidateId = userDetails._id;

  console.log("Candidate Data", CandidateId);

  const CandidateFavouriteJobListing = async () => {
    try {
      const response = await candidateFavouriteJobListAPI(CandidateId);
      console.log("Data Found", response.data);
      setJobFavouruteListingDetails(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    CandidateFavouriteJobListing();
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

  console.log("Favourite Job Listing", FavJobListingData);

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
                <h6 className="font-s-medium text-2xl">All Favorite Jobs </h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  non quam commodo, dictum justo a, varius nisl.
                </p>
              </div>
            </div>
            <hr className="mb-4" />
          </div>

          <div className="pt-4">
            <div className="grid grid-cols-1 gap-10 lg:px-10 px-5">
              {FavJobListingData &&
                FavJobListingData.map((item, id) => {
                  return (
                    <>
                      <div className="">
                        <div
                          className="bg-white box-shadow  rounded-xl relative  pb-7"
                          key={id}
                        >
                          <div className="grid md:grid-cols-12 gap-2">
                            <div className="md:col-span-2">
                              <div className="absolute flex md:p-5 bg-white box-shadow1 rounded-xl lg:left-[1%] left-[5%] lg:my-0 my-3 lg:-bottom-3   md:left-2">
                                <img
                                  src={item?.jobId?.employerId?.image}
                                  alt="/"
                                  width={100}
                                  height={100}
                                />
                              </div>
                              <AiFillStar
                                className="text-secondary absolute lg:bottom-28 lg:left-32 left-24"
                                size={28}
                              />
                            </div>
                            <div className="md:col-span-5 lg:pl-8 pl-3 md:pt-8 pt-10">
                              <div className="flex flex-col gap-3 lg:pt-0 pt-16 ">
                                <div className=" ">
                                  <Link
                                    to={`/candidate/job-details/${item._id}`}
                                  >
                                    <p className="text-base font-s-medium text-secondary ">
                                      {/* {item.jobId.jobTitle} */}

                                      {item.jobId ? item.jobId.jobTitle : null}
                                    </p>
                                  </Link>
                                </div>
                                <div className="">
                                  <p className="text-[#060606] text-sm  font-s-medium text-opacity-70">
                                    {item.jobId ? item.jobId.city : null} ,{" "}
                                    {item.jobId ? item.jobId.state : null} ,{" "}
                                    {item.jobId ? item.jobId.country : null}
                                  </p>
                                </div>
                                <div className="">
                                  <p className="text-secondary text-sm font-s-medium ">
                                    {item.jobId
                                      ? item.jobId.companywebsite
                                      : null}
                                    {/* {item.jobId.companywebsite} */}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="md:col-span-2  flex md:justify-center md:items-start lg:pt-8 md:px-0 px-4">
                              <div className="text-[#41B249] font-s-medium ">
                                {CurrentDate(item.updatedAt.substring(0, 10))}{" "}
                                Days Ago
                              </div>
                            </div>
                            <div className="md:col-span-3 md:pr-3 gap-3 md:pt-0  md:px-0 px-4 flex flex-col md:justify-end md:items-end">
                              <div className="">
                                <div
                                  className={`{ text-white font-s-medium text-sm px-3 mt-2 text-center rounded-md py-[0.32rem] mb-7  ${
                                    item?.jobId?.jobType?.[0] === "WFH" 
                                    ?"bg-[#AB6B35]"
                                    : item?.jobId?.jobType?.[0] === "WHO"   
                                    ? " bg-[#D2628C]"
                                    : item?.jobId?.jobType?.[0] === "FullTime"
                                    ? "bg-[#8C82EA]"
                                    :item?.jobId?.jobType?.[0] === "Freelance"
                                    ? " bg-[#2D9BB3]"
                                    :item?.jobId?.jobType?.[0] === "Internship"
                                    ? "bg-[#41B249]"
                                    :item?.jobId?.jobType?.[0] === "PartTime"
                                    ? "bg-[#41B249]"
                                    : "bg-gray-500"

                                     
                                  }`}
                                >
                                  {item?.jobId?.jobType?.[0]}
                                  {/* {item.jobId.jobType} */}
                                </div>
                              </div>
                              <div className="font-s-medium  text-[13px]">
                                {item.jobId ? item.jobId.salaryFrom : null} -{" "}
                                {item.jobId ? item.jobId.salaryTo : null} /{" "}
                                {item.jobId ? item.jobId.salaryPeriod : null}
                              </div>
                              <div className="">
                                <Link
                                  to={`/candidate/job-details/${item._id}`}
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
                    href="#"
                    className="relative inline-flex items-center rounded-l-md  bg-white px-2 py-2 text-sm font-medium text-grey hover:bg-gray-50 focus:z-20"
                  >
                    <span className="sr-only">Previous</span>
                    <BsChevronLeft className="h-5 w-5" aria-hidden="true" />
                  </NavLink>
                  {/* Current: "z-10 bg-indigo-50 border-secondary text-indigo-600", Default: "bg-white text-grey hover:bg-gray-50" */}
                  <NavLink
                    to="#"
                    aria-current="page"
                    className="relative z-10 inline-flex items-center  bg-secondary px-4 py-2 text-sm font-medium text-white focus:z-20"
                  >
                    1
                  </NavLink>
                  <NavLink
                    to="#"
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
                    to="#"
                    className="relative hidden items-center bg-white px-4 py-2 text-sm font-medium text-grey hover:bg-gray-50 focus:z-20 md:inline-flex"
                  >
                    8
                  </NavLink>
                  <NavLink
                    to="#"
                    className="relative inline-flex items-center  bg-white px-4 py-2 text-sm font-medium text-grey hover:bg-gray-50 focus:z-20"
                  >
                    9
                  </NavLink>
                  <NavLink
                    to="#"
                    className="relative inline-flex items-center  bg-white px-4 py-2 text-sm font-medium text-grey hover:bg-gray-50 focus:z-20"
                  >
                    10
                  </NavLink>
                  <NavLink
                    to="#"
                    className="relative inline-flex items-center rounded-r-md  bg-white px-2 py-2 text-sm font-medium text-grey hover:bg-gray-50 focus:z-20"
                  >
                    <span className="sr-only">Next</span>
                    <BsChevronRight className="h-5 w-5" aria-hidden="true" />
                  </NavLink>
                </nav>
              </div>
            </div>
          </div>
        </div>

        <div className=" bg-[#fff] container mx-auto lg:px-10 px-0 lg:pt-0 pt-10">
          <div className=" container mx-auto  pb-5">
            <div className="flex justify-between lg:pt-12 lg:px-0 px-5">
              <div className="font-s-bold  lg:text-[18px] text-sm">
                Recommended Coches
              </div>
              <Link to="/coach-list">
                <div className="text-secondary font-s-medium underline">
                  View More
                </div>
              </Link>
            </div>
          </div>

          <RecommendCoaches />
        </div>

        <div className="bg-[#fff] container mx-auto lg:px-10 px-5 py-8">
          <div className="flex justify-between pb-3 pt-6 lg:px-0 ">
            <div className="font-s-bold  text-[18px] ">Services Available</div>
            <Link to="/coach-list">
                <div className="text-secondary font-s-medium underline">
                  View More
                </div>
              </Link>
          </div>
          <div className="grid lg:grid-cols-2 gap-5  lg:px-0">
            {services.map((item) => (
              <div className="bg-inputcolor  py-2 rounded-lg">
                <div className="text-end px-5 ">
                  <button className="text-white font-s-medium px-10 py-1.5 bg-secondary text-sm rounded-full">
                    {item.button}
                  </button>
                </div>

                <div className="px-5 ">
                  <p className="font-s-medium text-lg">{item.serviceName} </p>
                  <div className="flex pt-2 space-x-2">
                    <p className="text-sm whitespace-nowrap"> {item.byname}</p>
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

                <div className="grid lg:grid-cols-3 px-3 space-x-2">
                  <div className="bg-[#fff] py-2 px-1 rounded-full my-3 flex items-center justify-center font-s-medium">
                    Special Price :{" "}
                    <span className="text-secondary font-s-bold">
                      {item.price}
                    </span>
                  </div>
                  <div className="bg-[#fff] py-2  rounded-full my-3 flex items-center justify-center space-x-2 font-s-medium">
                    Medium :
                    <div className="flex space-x-5">
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
                  <div className="bg-[#fff] py-2 rounded-full my-3 flex items-center justify-center font-s-medium">
                    Duration :
                    <span className="text-secondary font-s-bold">
                      {item.duration}
                    </span>
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

export default FavoriteJobs;
