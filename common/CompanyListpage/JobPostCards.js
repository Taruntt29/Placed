import React from "react";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { useState } from "react";
import { candidateEmployeeJobSearchAPI, candidateJobSearchAPI } from "../../../api/authCandidate";
import { useEffect } from "react";
const jobData = [
  {
    id: 1,
    logourl: "/assets/images/logo1.png",
    jobs: "20+",
    post: "Senior Web Designer , Developer",
    address: "1363-1385 Sunset Blvd Los Angeles, CA 90026, USA",
    link: "https://google.com",
    time: "Month",
    industry1: "Corporte",
    industry2: "Industrial Equipment/Machinery",
  },
  {
    id: 2,
    logourl: "/assets/images/logo2.png",
    jobs: "20+",
    post: "Senior Web Designer , Developer",
    address: "1363-1385 Sunset Blvd Los Angeles, CA 90026, USA",
    link: "https://google.com",
    time: "Month",
    industry1: "Corporte",
    industry2: "Industrial Equipment/Machinery",
  },
  {
    id: 3,
    logourl: "/assets/images/logo3.png",
    jobs: "20+",
    post: "Senior Web Designer , Developer",
    address: "1363-1385 Sunset Blvd Los Angeles, CA 90026, USA",
    link: "https://google.com",
    time: "Month",
    industry1: "Corporte",
    industry2: "Industrial Equipment/Machinery",
  },
  {
    id: 4,
    logourl: "/assets/images/logo5.png",
    jobs: "20+",
    post: "Senior Web Designer , Developer",
    address: "1363-1385 Sunset Blvd Los Angeles, CA 90026, USA",
    link: "https://google.com",
    time: "Month",
    industry1: "Corporte",
    industry2: "Industrial Equipment/Machinery",
  },
  {
    id: 5,
    logourl: "/assets/images/logo6.png",
    jobs: "20+",
    post: "Senior Web Designer , Developer",
    address: "1363-1385 Sunset Blvd Los Angeles, CA 90026, USA",
    link: "https://google.com",
    time: "Month",
    industry1: "Corporte",
    industry2: "Industrial Equipment/Machinery",
  },
  {
    id: 6,
    logourl: "/assets/images/logo2.png",
    jobs: "20+",
    post: "Senior Web Designer , Developer",
    address: "1363-1385 Sunset Blvd Los Angeles, CA 90026, USA",
    link: "https://google.com",
    time: "Month",
    industry1: "Corporte",
    industry2: "Industrial Equipment/Machinery",
  },
];
const JobPostCards = () => {

  const [data, setData] = useState([])
  const getJobsPreview = async () => {
    try {
      const response = await candidateJobSearchAPI ()
      setData(response.data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getJobsPreview()
  },[])

  
  return (
    <div className="  relative">
      <div className="pb-32 pt-10">
        <div className="flex flex-col gap-8 md:gap-0 justify-center items-center container mx-auto px-5">
          <p className="text-secondary font-s-medium">Get Hired</p>
          <div className="font-s-bold text-3xl ">Top Companies Hiring Now</div>
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
                </div>
                <div className="text-secondary font-s-medium text-right pt-3 px-5">
                  {item?.employerId?.companyName}
                </div>
                <div className="flex flex-col pt-12 px-5 pb-2">
                  <Link to="/employer-detail">
                    <p className="text-lg font-s-medium pb-3">{item?.jobTitle}</p>
                  </Link>
                  <p className="text-[#060606] font-s-medium text-opacity-70">
                    {item?.location}{", "}{item?.city}{", "}{item?.state}{", "}{item?.country}
                  </p>
                </div>
                <div className="px-5 pb-4 flex ">
                  <AiFillStar fill="#ffff14" />
                  <AiFillStar fill="#ffff14" />
                  <AiFillStar fill="#ffff14" />
                  <AiFillStar fill="#ffff14" />
                  <AiFillStar fill="#ffff14" />
                </div>
                <div className="flex px-5 space-x-2">
                  <p className="text-xs border border-gray-400 text-gray-600 px-1 rounded">
                    {item?.jobShift}
                  </p>
                  <p className="text-xs border border-gray-400 text-gray-600 px-1 rounded">
                    {item.salaryFrom} - {item.salaryTo} / {item.salaryPeriod}
                  </p>
                </div>
                <p className="text-secondary pt-4 font-s-medium px-5 py-5">
                  {item?.employerId?.website}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className=""></div>
    </div>
  );
};

export default JobPostCards;
