import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import axios from "axios";
import {
  BsCheckCircleFill,
  BsFillCalendarDateFill,
  BsBuilding,
} from "react-icons/bs";
import { AiFillQuestionCircle } from "react-icons/ai";
import { FaCalendarAlt } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";
import { HiUserGroup } from "react-icons/hi";
import { MdLocationPin, MdVideoCall } from "react-icons/md";
// import { useSelector } from "react-redux";
import { RiSuitcaseFill } from "react-icons/ri";
import { IoCall } from "react-icons/io5";
import {
  candidateJobDetailsAPI,
  ApplyJobData,
  AddFavouriteJob,
  candidateJobListAPI,
  getCoachServicesById,
  getAllServices,
  getApplicants,
} from "../../../api/authCandidate";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import {
  FaFacebookF,
  FaInstagramSquare,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
import RecommendCoaches from "../../common/RecommendCoaches";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { BsCameraVideoFill } from "react-icons/bs";

import { async } from "q";
import { getJobViews, postJobViews } from "../../../api/authService";
const CandidateJobDetail = () => {
  const { userDetails } = useSelector((state) => state.flightReducer);

  let CandidateId, categoryId;
  if (userDetails) {
    CandidateId = userDetails._id;
    categoryId = userDetails.categoryId;
  }

  const [dataService, setDataService] = useState([]);

  console.log("Category Id", categoryId);
  const navigate = useNavigate();

  console.log("Candidate Id", CandidateId);

  const id = useParams();
  const jobid = id.jobid;
  console.log("Data Id", jobid);

  const [jobDetails, setJobDetails] = useState([]);

  const [isActive, setIsActive] = useState(false);

  const [simlarJobDetails, setsimilarJobDetails] = useState([]);

  const handleClick = async () => {
    const response = await AddFavouriteJob({
      jobId: jobid,
      candidateId: CandidateId,
    });
    if (response.status) {
      toast(response.message);
      setIsActive((current) => !current);
    } else {
      toast(response.message);
    }
  };

  const CandidateJobDetails = async () => {
    try {
      const response = await candidateJobDetailsAPI(jobid);
      console.log("Data Found", response.data);
      setJobDetails(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getCoachServices = async () => {
    try {
      const response = await getAllServices();
      //   console.log(response.data);
      setDataService(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const [jobDataSet, setJobDataSet] = useState([]);
  const getJobs = async () => {
    try {
      const response = await candidateJobListAPI();
      //   console.log(response.data);
      setJobDataSet(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log("Job Details Done", jobDetails);

  // const CandidateJobListing = async () => {
  //   try {
  //     const response = await candidateJobListAPI(categoryId);
  //     console.log("Data Found", response.data);
  //     setsimilarJobDetails(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const [numberofApps, setNumberofApps] = useState(0);
  const getApps = async () => {
    try {
      const response = await getApplicants(jobid);
      setNumberofApps(response?.data?.length);
    } catch (error) {
      console.log(error);
    }
  };
  const [views, setViews] = useState([]);
  const getViews = async () => {
    try {
      const response = await getJobViews(jobid);
      setViews(response.data.length);
    } catch (error) {
      console.log(error);
    }
  };
  const [ip, setIP] = useState("");

  //creating function to load ip address from the API
  const getData = async () => {
    const res = await axios.get("https://geolocation-db.com/json/");
    console.log(res.data);
    try {
      const response = await postJobViews({
        jobId: jobid,
        ipAddress: res.data.IPv4,
      });
    } catch (error) {
      console.log(error);
    }
    // setIP(res.data.IPv4, postViewJob());
  };
  // const postViewJob = async () => {
  //   if(ip){

    
  //   try {
  //     const response = await postJobViews({
  //       jobId: jobid,
  //       ipAddress: ip,
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  // };

  useEffect(() => {
    // CandidateJobListing();
    getData();
    CandidateJobDetails();
    getCoachServices();
    getJobs();

    getViews();
  }, []);

  // simlarJobDetails

  var array = simlarJobDetails;
  var itemShow = jobid;

  if (simlarJobDetails) {
    var index = array.indexOf(itemShow);
    array.splice(index, 1);
  }

  console.log("DtaValllll", array);

  var arr = simlarJobDetails;

  // Remove item 'seven' from array
  var filteredArray11 = simlarJobDetails
    ? arr.filter(function (e) {
        return e !== itemShow;
      })
    : null;

  //=> ["three", "eleven"]

  console.log("DataFlter", filteredArray11);
  // var index = simlarJobDetails.indexOf(jobid);
  // console.log("Index Data", index);
  // simlarJobDetails.splice(index, 1);

  // console.log("Simlar Job Globe", simlarJobDetails);

  const ApplyJobPost = async () => {
    const response = await ApplyJobData({
      jobId: jobid,
      candidateId: CandidateId,
    });

    if (response.status) {
      toast(response.message);
    } else {
      toast(response.message);
    }
  };

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
      post: "Senior Rolling Stock Technician ",
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
      post: "Senior Rolling Stock Technician ",
      address: "1363-1385 Sunset Blvd Los Angeles, CA 90026, USA",
      link: "https://www.webmax.com",
      jobdetaillink: "/job-detail",
      minsal: "$2000",
      maxsal: "$2500",
      time: "Month",
    },
  ];

  const flightData = useSelector((state) => state.flightReducer);

  const viewAllService = () => {
    if (flightData.isLogin) {
      navigate("/candidate/all-services");
    } else {
      toast("Please login to view all services");
    }
  };

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
    <div className="container mx-auto py-10">
      <div className=" grid lg:grid-cols-7 grid-cols-1 gap-8">
        <div className="lg:col-span-5 px-5 md:px-0">
          <div
            className="rounded-md bg-no-repeat relative h-80 bg-cover w-full"
            style={{
              backgroundImage: `url(${jobDetails?.[0]?.employerId?.bannerImage})`,
            }}
          >
            {/* <img
                            className="h-80 object-cover"
                            src={jobDetails?.[0]?.employerId?.image}
                        /> */}
            <div className="bg-[#8C82EA] px-10 font-s-medium py-1 text-white inline-flex rounded-md absolute top-5 left-5">
              Fulltime
            </div>
            {/* <img src={}/> */}
            <div className="bg-white p-4 h-[100px] w-[100px] shadow-md shadow-slate-400 rounded-xl absolute -bottom-9 left-10">
              <img
                className=""
                src={jobDetails?.[0]?.employerId?.image}
                alt="/"
              />
            </div>
          </div>
          <div className="lg:float-right lg:py-4 pt-16">
            <button className="text-white font-s-medium rounded-md px-5 py-2 btnstr">
              <svg
                onClick={handleClick}
                className={
                  isActive ? "w-[30px] h-[30px] bg-salmon" : "w-[30px] h-[30px]"
                }
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
              </svg>
            </button>
            <button
              onClick={ApplyJobPost}
              className="text-white font-s-medium rounded-md bg-secondary px-5 py-2"
            >
              Apply Now
            </button>
          </div>
          <div className="lg:pt-20 pt-5 flex flex-col gap-5">
            <div className="text-black text-opacity-80 text-[20px] font-s-medium">
              {jobDetails && jobDetails?.[0]?.employerId?.companyName}
            </div>
            <div className="text-black text-opacity-80 text-[20px] font-s-medium">
              {jobDetails && jobDetails?.[0]?.jobTitle} ,
              {jobDetails && jobDetails?.[0]?.jobType}
              <span className="text-[#41B249] font-s-medium text-opacity-100">
                &nbsp;{" "}
                {CurrentDate(
                  jobDetails && jobDetails?.[0]?.updatedAt?.substring(0, 10)
                )}{" "}
                Days Ago
              </span>
            </div>
            <div className="text-black text-opacity-70 font-s-medium text-[15px]">
              {/* {jobDetails && jobDetails[0].employerId.address} */}
              {jobDetails && jobDetails?.[0]?.employerId == null
                ? ""
                : jobDetails && jobDetails?.[0]?.employerId?.address}
            </div>
            <div className="font-s-medium text-[15px]">
              <span className="text-secondary mr-2">
                <NavLink
                  target="_blank"
                  to={jobDetails && jobDetails?.[0]?.companywebsite}
                >
                  {" "}
                  {jobDetails && jobDetails?.[0]?.companywebsite}
                </NavLink>
              </span>
              &nbsp;
              <span className="text-black">
                {jobDetails && jobDetails?.[0]?.currency}{" "}
                {jobDetails && jobDetails?.[0]?.salaryFrom} -{" "}
                {jobDetails && jobDetails?.[0]?.salaryTo} /{" "}
                {jobDetails && jobDetails?.[0]?.salaryPeriod}
              </span>
            </div>
            <div className="font-s-bold py-4 text-[18px]">Job Description</div>
            <p className="text-black text-opacity-70 font-semibold text-[15px] text-justify">
              {jobDetails &&
                jobDetails?.[0]?.description.replace(/<[^>]*>?/gm, "")}
            </p>

            {/* <div className="font-s-bold py-4 text-[18px]">
              Supplemental Pay{" "}
            </div> */}
            {/* <ul className="text-black text-opacity-70 font-semibold text-[15px] flex flex-col justify-start items-start gap-2">
              {jobDetails.supplementalpay &&
                jobDetails[0].supplementalpay.map((DataSubmlt) => (
                  <li className="flex justify-start items-start gap-2">
                    <BsCheckCircleFill
                      className="text-secondary font-s-bold "
                      size={15}
                    />
                    <span>{DataSubmlt}</span>
                  </li>
                ))}
            </ul> */}
          </div>

          <div>
            {" "}
            <div className="font-s-bold py-4 text-[18px]">
              Additional Benefits
            </div>
            <ul className="text-black text-opacity-70 font-semibold text-[15px] flex flex-col justify-start items-start gap-2">
              {jobDetails &&
                jobDetails?.[0]?.benefitsoffered?.map((Dtashow) => (
                  <li className="flex justify-start items-start gap-2">
                    <BsCheckCircleFill
                      className="text-secondary font-s-bold "
                      size={15}
                    />
                    <span>{Dtashow.name}</span>
                  </li>
                ))}
              {jobDetails &&
                jobDetails?.[0]?.supplementalpay?.map((Dtashow) => (
                  <li className="flex justify-start items-start gap-2">
                    <BsCheckCircleFill
                      className="text-secondary font-s-bold "
                      size={15}
                    />
                    <span>{Dtashow.name}</span>
                  </li>
                ))}
            </ul>
          </div>

          <div className="flex py-5 space-x-3">
            <div className="font-s-bold  text-[18px]">Share </div>

            <div className="flex space-x-5 ">
              <WhatsappShareButton
                url={window.location.href}
                separator=" "
                title={jobDetails?.[0]?.jobTitle}
                hashtag="#pplacd"
              >
                <WhatsappIcon size={32} round />
              </WhatsappShareButton>

              <FacebookShareButton
                url={window.location.href}
                quote={jobDetails?.[0]?.jobTitle}
                hashtag="#pplacd"
              >
                <FacebookIcon size={32} round />
              </FacebookShareButton>

              <TwitterShareButton
                url={window.location.href}
                title={jobDetails?.[0]?.jobTitle}
                hashtag={["#pplacd", "#article", "#news"]}
              >
                <TwitterIcon size={32} round />
              </TwitterShareButton>
              <LinkedinShareButton
                source={window.location.href}
                title={jobDetails?.[0]?.jobTitle}
                summary={jobDetails?.[0]?.description}
                hashtag="#pplacd"
              >
                <LinkedinIcon size={32} round />
              </LinkedinShareButton>
            </div>
          </div>
          <div className="flex space-x-4 py-3 items-end justify-end">
            {jobDetails?.[0]?.applycompanywebsite?.toLowerCase() !== "no" ? (
              <>
                <button className="px-3 py-1.5  border-2 text-secondary font-s-medium border-secondary rounded-md">
                  Website Apply
                </button>
                <button
                  onClick={ApplyJobPost}
                  className="px-5 py-1.5   text-white font-s-medium bg-secondary rounded-md"
                >
                  Apply Now
                </button>
              </>
            ) : null}
          </div>
        </div>
        <div className="lg:col-span-2 lg:px-0 px-5">
          <div className="bg-[#EFF5FF] rounded-lg py-6 px-5 ">
            <div className="font-s-medium">Job Information</div>
            <div className="flex flex-col gap-5 pt-5">
              <div className="bg-white flex py-3 px-3 items-start justify-items-start gap-2 rounded-md">
                <FaCalendarAlt className="text-secondary" size={18} />
                <div className="col-span-3 text-sm font-s-medium ">
                  Date Posted:{" "}
                  <span className="text-black text-opacity-70">
                    {jobDetails && jobDetails?.[0]?.updatedAt?.substring(0, 10)}
                  </span>
                </div>
              </div>
              <div className="bg-white flex py-3 px-3 items-start justify-items-start gap-2 rounded-md">
                <AiFillEye className="text-secondary" size={18} />
                <div className="col-span-3 text-sm font-s-medium ">
                  {" "}
                  {views}{"  "} Views
                </div>
              </div>
              <div className="bg-white flex py-3 px-3 items-start justify-items-start gap-2 rounded-md">
                <HiUserGroup className="text-secondary" size={18} />
                <div className="col-span-3 text-sm font-s-medium ">
                  {jobDetails && jobDetails?.[0]?.numberofHiring} Candidate
                  Hiring
                </div>
              </div>
              <div className="bg-white flex py-3 px-3 items-start justify-items-start gap-2 rounded-md">
                <HiUserGroup className="text-secondary" size={18} />
                <div className="col-span-3 text-sm font-s-medium ">
                  {numberofApps} Applicant
                </div>
              </div>
            </div>
            <div className="pt-10 flex flex-col justify-start items-start gap-8">
              <div className="flex justify-start items-center gap-3 px-3 py-2">
                <BsFillCalendarDateFill className="text-secondary" size={20} />
                <div className="">
                  <p className="text-black text-opacity-70 text-sm font-semibold">
                    Date Posted
                  </p>
                  <p className="font-s-medium ">
                    {jobDetails && jobDetails?.[0]?.updatedAt.substring(0, 10)}
                  </p>
                </div>
              </div>
              <div className="flex justify-start items-center gap-3 px-3 py-2">
                <BsBuilding className="text-secondary" size={20} />
                <div className="">
                  <p className="text-black text-opacity-70 text-sm font-semibold">
                    Industry
                  </p>

                  <p className="font-s-medium ">
                    {" "}
                    {jobDetails &&
                      jobDetails?.[0]?.employerId?.industryId?.name}
                  </p>
                </div>
              </div>
              <div className="flex justify-start items-center gap-3 px-3 py-2">
                <MdLocationPin className="text-secondary" size={20} />
                <div className="">
                  <p className="text-black text-opacity-70 text-sm font-semibold">
                    Location
                  </p>
                  <p className="font-s-medium ">
                    {jobDetails && jobDetails?.[0]?.city},{" "}
                    {jobDetails && jobDetails?.[0]?.state},{" "}
                    {jobDetails && jobDetails?.[0]?.country}{" "}
                  </p>
                </div>
              </div>
              <div className="flex justify-start items-center gap-3 px-3 py-2">
                <img
                  src="/assets/images/webdev.png"
                  alt="webdev"
                  className="w-[22px]"
                />
                <div className="">
                  <p className="text-black text-opacity-70 text-sm font-semibold">
                    Job Title
                  </p>
                  <p className="font-s-medium ">
                    {jobDetails && jobDetails?.[0]?.jobTitle}{" "}
                  </p>
                </div>
              </div>
              <div className="flex justify-start items-center gap-3 px-3 py-2">
                <img
                  src="/assets/images/experience.png"
                  alt="experience"
                  className="w-[20px]"
                />
                <div className="">
                  <p className="text-black text-opacity-70 text-sm font-semibold">
                    Experience
                  </p>
                  <p className="font-s-medium ">
                    {" "}
                    {jobDetails && jobDetails?.[0]?.jobExperience}{" "}
                  </p>
                </div>
              </div>
              <div className="flex justify-start items-center gap-3 px-3 py-2">
                <RiSuitcaseFill className="text-secondary" size={20} />
                <div className="">
                  <p className="text-black text-opacity-70 text-sm font-semibold">
                    Qualification
                  </p>
                  <p className="font-s-medium ">
                    {jobDetails && jobDetails?.[0]?.qualification}
                  </p>
                </div>
              </div>
              <div className="flex justify-start items-center gap-3 px-3 py-2">
                <img
                  src="/assets/images/bigender.png"
                  alt="webdev"
                  className="w-[18px]"
                />
                <div className="">
                  <p className="text-black text-opacity-70 text-sm font-semibold">
                    Gender
                  </p>
                  <p className="font-s-medium ">
                    {" "}
                    {jobDetails && jobDetails?.[0]?.gender}
                  </p>
                </div>
              </div>
              <div className="flex justify-start items-center gap-3 px-3 py-2">
                <img
                  src="/assets/images/salary.png"
                  alt="webdev"
                  className="w-[18px]"
                />
                <div className="">
                  <p className="text-black text-opacity-70 text-sm font-semibold">
                    Offered Salary
                  </p>
                  <p className="font-s-medium ">
                    {jobDetails && jobDetails?.[0]?.currency}{" "}
                    {jobDetails && jobDetails?.[0]?.salaryFrom}-
                    {jobDetails && jobDetails?.[0]?.salaryTo} /
                    {jobDetails && jobDetails?.[0]?.salaryPeriod}
                  </p>
                </div>
              </div>

              <div>
                <h6 className="text-xl font-s-bold">Tags</h6>
                <div className="grid grid-cols-3 space-y-2 space-x-2 py-2">
                  {jobDetails &&
                    jobDetails?.[0]?.jobSkill?.map((item) => (
                      <h5 className="px-3 py-1.5 bg-primary text-xs font-s-bold rounded">
                        {item.skill}
                      </h5>
                    ))}
                </div>
              </div>
            </div>
          </div>

          <div className="py-6">
            <h6 className="font-s-medium">Similar Jobs</h6>

            <div className="">
              <div className="grid grid-cols-1    pt-2 gap-8  ">
                {jobDataSet.slice(0, 4).map((item, index) => {
                  return (
                    <div
                      className="bg-white shadow-md shadow-[#2544EE30] rounded-xl relative "
                      key={index}
                    >
                      <div className="flex px-2">
                        <div
                          className={`{ text-black font-s-medium text-sm absolute  top-2 right-3 px-6 rounded-md py-1 ${
                            item?.jobType?.toString() === "Internship"
                              ? "bg-[#AB6B35]"
                              : item?.jobType?.toString() === "Fulltime"
                              ? "bg-[#8C82EA]"
                              : item?.jobType?.toString() === "Freelancer"
                              ? "bg-[#2D9BB3]"
                              : "bg-[#41B249]"
                          }`}
                        >
                          {item?.jobType?.toString()}
                        </div>
                        <img
                          alt="JobPost"
                          src={item?.employerId?.image}
                          width={80}
                          height={80}
                        />
                      </div>

                      <div className="flex flex-col pt-1 px-5 pb-3">
                        <Link to={`/job-details/${item._id}`}>
                          <p className="text-sm font-s-medium pb-3">
                            {item.jobTitle}
                            <span className="text-[#41B249]">
                              {" "}
                              posted on{" "}
                              {new Date(item.updatedAt).toLocaleDateString()}
                            </span>
                          </p>
                        </Link>

                        <div className="font-s-medium text-sm">
                          {item.salaryFrom} - {item.salaryTo} /{" "}
                          {item.salaryPeriod}
                        </div>
                        <div className="flex items-end justify-end">
                          <Link
                            to={item.jobdetaillink}
                            className="font-s-bold text-secondary "
                          >
                            Browse Job
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className=""></div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className=" pb-10">
          <div className=" container mx-auto  pb-5">
            <div className="flex justify-between lg:pt-6 lg:px-0 px-5">
              <div className="font-s-bold  text-[18px] ">
                Recommended Coches
              </div>
              <div className="text-secondary font-s-medium underline">
                <Link to="/coach-list">View More</Link>
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

export default CandidateJobDetail;
