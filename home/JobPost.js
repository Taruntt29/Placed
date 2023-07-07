import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { candidateJobSearchAPI } from "../../api/authCandidate";
const jobData = [
  {
    id: 1,
    logourl: "/assets/images/logo1.png",
    days: "01",
    category: "New",
    post: "Senior Web Designer , Developer",
    address: "1363-1385 Sunset Blvd Los Angeles, CA 90026, USA",
    link: "https://www.webmax.com",
    jobdetaillink: "/job-detail",
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
    jobdetaillink: "/job-detail",
    minsal: "$2000",
    maxsal: "$2500",
    time: "Month",
  },
  {
    id: 3,
    logourl: "/assets/images/logo3.png",
    days: "01",
    category: "Fulltime",
    post: "Senior Web Designer , Developer",
    address: "1363-1385 Sunset Blvd Los Angeles, CA 90026, USA",
    link: "https://www.webmax.com",
    jobdetaillink: "/job-detail",
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
    jobdetaillink: "/job-detail",
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
    jobdetaillink: "/job-detail",
    minsal: "$2000",
    maxsal: "$2500",
    time: "Month",
  },
  {
    id: 6,
    logourl: "/assets/images/logo2.png",
    days: "01",
    category: "Fulltime",
    post: "Senior Web Designer , Developer",
    address: "1363-1385 Sunset Blvd Los Angeles, CA 90026, USA",
    link: "https://www.webmax.com",
    jobdetaillink: "/job-detail",
    minsal: "$2000",
    maxsal: "$2500",
    time: "Month",
  },
];
const JobPost = () => {
  const [data , setData] = useState([])
  const getJobs = async () => {
    try {
      const response = await candidateJobSearchAPI() 
      setData(response.data)
      
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getJobs()
  } , [])
  return (
    <div className="bg-[#E3EEFF8F]  relative">
      <div className="py-32">
        <div className="flex flex-col md:flex-row gap-8 md:gap-0 justify-between items-center container mx-auto px-5">
          <div className="">
            <p className="text-secondary font-s-medium">All Job Post</p>
            <div className="font-s-bold text-4xl ">
              Find Your Career <br /> You Deserve it
            </div>
          </div>
          <Link to="/job-search" className="">
            <button className="text-white bg-secondary font-s-medium  px-10 py-4 rounded-md shadow-sm shadow-slate-700 ">
              Browse All Jobs
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 container mx-auto pt-32 gap-8 gap-y-20 px-5">
          {data && data.slice(0,6).map((item, index) => {
            return (
              <div
                className="bg-white shadow-md shadow-[#2544EE30] rounded-xl relative "
                key={index}
              >
                <div className="">
                  <div className="absolute flex bg-white shadow-md shadow-[#2544EE30] rounded-xl p-2 -top-10 left-5">
                    <img src={item?.employerId?.image} alt="/" width={80} height={80} />
                  </div>
                  <div
                    className={`{ text-white font-s-medium text-sm absolute -right-3 top-2 px-4 rounded-md py-1 ${
                      item?.jobType?.[0] === "Internship"
                        ? "bg-[#AB6B35]"
                        : item?.jobType?.[0] === "Fulltime"
                        ? "bg-[#8C82EA]"
                        : item?.jobType?.[0] === "Freelancer"
                        ? "bg-[#2D9BB3]"
                        : "bg-[#41B249]"
                    }`}
                  >
                    {item?.jobType?.[0]}
                  </div>
                </div>
                <div className="text-[#41B249] font-s-medium flex justify-center items-center pt-3 pl-5">
                  {/* {item.days} days ago */}
                </div>
                <div className="flex flex-col pt-12 px-5 pb-10">
                  <Link to="/job-detail">
                    <p className="text-lg font-s-medium pb-3 text-secondary">
                      {item?.jobTitle}
                    </p>
                  </Link>
                  <p className="text-[#060606] font-s-medium text-opacity-70">
                    {item?.location}{", "}{item?.city}{", "}{item?.state}{", "}{item?.country}
                  </p>
                  <p className="text-secondary pt-4 font-s-medium py-5">
                    {item?.employerId.website}
                  </p>
                  <div className="flex justify-between">
                    <div className="font-s-medium">
                      {item?.salaryFrom} - {item?.salaryTo} / {item?.salaryPeriod}
                    </div>
                    <Link
                      to={`/job-details/${item._id}`}
                      className="font-s-bold text-secondary"
                    >
                      Browse Job
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className=""></div>
    </div>
  );
};

export default JobPost;
