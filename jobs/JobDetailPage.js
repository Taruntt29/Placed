import React from "react";
import { Link } from "react-router-dom";
import {
  BsCheckCircleFill,
  BsFillCalendarDateFill,
  BsBuilding,
} from "react-icons/bs";
import { FaCalendarAlt } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";
import { HiUserGroup } from "react-icons/hi";
import { MdLocationPin, MdVideoCall } from "react-icons/md";
import { RiSuitcaseFill } from "react-icons/ri";
import { IoCall } from "react-icons/io5";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import {
  FaFacebookF,
  FaInstagramSquare,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import RecommendCoaches from "../common/RecommendCoaches";
const JobDetailPage = () => {
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
  const jobOpening = [
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
    {
      id: 3,
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
              backgroundImage: `url(${"/assets/images/jobdetailbanner.png"})`,
            }}
          >
            <div className="bg-[#8C82EA] px-10 font-s-medium py-1 text-white inline-flex rounded-md absolute top-5 left-5">
              Fulltime
            </div>
            <div className="bg-white p-4 shadow-md shadow-slate-400 rounded-xl absolute -bottom-9 left-10">
              <img src="/assets/images/logo1.png" alt="/" />
            </div>
          </div>
          <div className="flex space-x-4 py-3 items-end justify-end">
            <button className="px-3 py-1.5  border-2 text-secondary font-s-medium border-secondary rounded-md">
              Website Apply
            </button>
            <button className="px-5 py-1.5   text-white font-s-medium bg-secondary rounded-md">
              Apply Now
            </button>
          </div>
          <div className="lg:pt-10 pt-5 flex flex-col gap-5">
            <div className="text-black text-opacity-80 text-[20px] font-s-medium">
              Senior Web Designer,Developer /
              <span className="text-[#41B249] font-s-medium text-opacity-100">
                &nbsp;1 days ago
              </span>
            </div>
            <div className="text-black text-opacity-70 font-s-medium text-[15px]">
              1363-1385 Sunset Blvd Los Angeles, CA 90026, USA
            </div>
            <div className="font-s-medium text-[15px]">
              <span className="text-secondary">https://thewebmax.com</span>
              &nbsp;
              <span className="text-black">$2000 - $2500 / Month</span>
            </div>
            <div className="font-s-bold py-4 text-[18px]">Job Description</div>
            <p className="text-black text-opacity-70 font-semibold text-[15px] text-justify">
              Ut enim ad minima veniam, quis nostrum exercitationem ullam
              corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
              consequatur? Quis autem vel eum iure reprehenderit qui in ea
              voluptate velit esse quam nihil molestiae consequatur, vel illum
              qui dolorem eum fugiat quo voluptas nulla pariatur?
            </p>

            <p className="text-black text-opacity-70 font-semibold text-[15px] text-justify">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi.
            </p>

            <div className="font-s-bold py-8 text-[18px]">Requirements</div>
            <ul className="text-black text-opacity-70 font-semibold text-[15px] flex flex-col justify-start items-start gap-2">
              <li className="flex justify-start items-start gap-2">
                <BsCheckCircleFill
                  className="text-secondary font-s-bold "
                  size={15}
                />
                <span>
                  Must be able to communicate with others to convey information
                  effectively.
                </span>
              </li>
              <li className="flex justify-start items-start gap-2">
                <BsCheckCircleFill className="text-secondary font-s-bold " />
                <span>
                  Personally passionate and up to date with current trends and
                  technologies.
                </span>
              </li>
              <li className="flex justify-start items-start gap-2">
                <BsCheckCircleFill className="text-secondary font-s-bold " />
                <span>
                  Bachelor or Master degree level educational background.
                </span>
              </li>
              <li className="flex justify-start items-start gap-2">
                <BsCheckCircleFill className="text-secondary font-s-bold " />
                <span>4 years relevant PHP dev experience.</span>
              </li>
              <li className="flex justify-start items-start gap-2">
                <BsCheckCircleFill className="text-secondary font-s-bold " />
                <span>
                  Troubleshooting, testing and maintaining the core product
                  software and databases.
                </span>
              </li>
            </ul>
          </div>
          <div className="font-s-bold py-4 text-[18px]">Responsibilities</div>
          <ul className="text-black text-opacity-70 font-semibold text-[15px] flex flex-col justify-start items-start gap-2">
            <li className="flex justify-start items-start gap-2">
              <BsCheckCircleFill
                className="text-secondary font-s-bold "
                size={15}
              />
              <span>
                Establish and promote design guidelines, best practices and
                standards.
              </span>
            </li>
            <li className="flex justify-start items-start gap-2">
              <BsCheckCircleFill
                className="text-secondary font-s-bold "
                size={15}
              />
              <span>
                Accurately estimate design tickets during planning sessions.
              </span>
            </li>
            <li className="flex justify-start items-start gap-2">
              <BsCheckCircleFill
                className="text-secondary font-s-bold "
                size={15}
              />
              <span>
                Partnering with product and engineering to translate business
                into elegant and practical designs.
              </span>
            </li>
            <li className="flex justify-start items-start gap-2">
              <BsCheckCircleFill
                className="text-secondary font-s-bold "
                size={15}
              />
              <span>
                Create wireframes, process flows and site maps to communicate
                interaction and design.
              </span>
            </li>
            <li className="flex justify-start items-start gap-2">
              <BsCheckCircleFill
                className="text-secondary font-s-bold "
                size={15}
              />
              <span>
                Present and defend designs and key deliverables to peers and
                executive level stakeholders.
              </span>
            </li>
            <li className="flex justify-start items-start gap-2">
              <BsCheckCircleFill
                className="text-secondary font-s-bold "
                size={15}
              />
              <span>
                Execute all visual design stages from concept to final hand-off
                to engineering.
              </span>
            </li>
          </ul>

          <div>
            {" "}
            <div className="font-s-bold py-4 text-[18px]">
              Additional Benefits
            </div>
            <ul className="text-black text-opacity-70 font-semibold text-[15px] flex flex-col justify-start items-start gap-2">
              <li className="flex justify-start items-start gap-2">
                <BsCheckCircleFill
                  className="text-secondary font-s-bold "
                  size={15}
                />
                <span>
                  Establish and promote design guidelines, best practices and
                  standards.
                </span>
              </li>
              <li className="flex justify-start items-start gap-2">
                <BsCheckCircleFill
                  className="text-secondary font-s-bold "
                  size={15}
                />
                <span>
                  Accurately estimate design tickets during planning sessions.
                </span>
              </li>
              <li className="flex justify-start items-start gap-2">
                <BsCheckCircleFill
                  className="text-secondary font-s-bold "
                  size={15}
                />
                <span>
                  Partnering with product and engineering to translate business
                  into elegant and practical designs.
                </span>
              </li>
              <li className="flex justify-start items-start gap-2">
                <BsCheckCircleFill
                  className="text-secondary font-s-bold "
                  size={15}
                />
                <span>
                  Create wireframes, process flows and site maps to communicate
                  interaction and design.
                </span>
              </li>
              <li className="flex justify-start items-start gap-2">
                <BsCheckCircleFill
                  className="text-secondary font-s-bold "
                  size={15}
                />
                <span>
                  Present and defend designs and key deliverables to peers and
                  executive level stakeholders.
                </span>
              </li>
              <li className="flex justify-start items-start gap-2">
                <BsCheckCircleFill
                  className="text-secondary font-s-bold "
                  size={15}
                />
                <span>
                  Execute all visual design stages from concept to final
                  hand-off to engineering.
                </span>
              </li>
            </ul>
          </div>

          <div className="flex py-5 space-x-3">
            <div className="font-s-bold  text-[18px]">Share </div>

            <div className="flex space-x-5 ">
              <FaFacebookF
                className="bg-secondary text-white p-1 rounded-full"
                size={24}
              />
              <FaInstagramSquare
                className="bg-secondary text-white p-1 rounded-full"
                size={24}
              />
              <FaTwitter
                className="bg-secondary text-white p-1 rounded-full"
                size={24}
              />
              <FaLinkedinIn
                className="bg-secondary text-white p-1 rounded-full"
                size={24}
              />
            </div>
          </div>
          <div className="flex space-x-4 py-3 items-end justify-end">
            <button className="px-3 py-1.5  border-2 text-secondary font-s-medium border-secondary rounded-md">
              Website Apply
            </button>
            <button className="px-5 py-1.5   text-white font-s-medium bg-secondary rounded-md">
              Apply Now
            </button>
          </div>
        </div>
        <div className="lg:col-span-2 lg:px-0 px-5">
          <div className="bg-[#EFF5FF] rounded-lg py-6 px-5 ">
            <div className="font-s-medium">Job Information</div>
            <div className="flex flex-col gap-5 pt-5">
              <div className="bg-white flex py-3 px-3 items-start justify-items-start gap-2 rounded-md">
                <FaCalendarAlt className="text-secondary" size={18} />
                <div className="col-span-3 text-sm font-s-medium ">
                  Expired on:{" "}
                  <span className="text-black text-opacity-70">
                    20 October 2022
                  </span>
                </div>
              </div>
              <div className="bg-white flex py-3 px-3 items-start justify-items-start gap-2 rounded-md">
                <AiFillEye className="text-secondary" size={18} />
                <div className="col-span-3 text-sm font-s-medium ">
                  8160 Views{" "}
                </div>
              </div>
              <div className="bg-white flex py-3 px-3 items-start justify-items-start gap-2 rounded-md">
                <HiUserGroup className="text-secondary" size={18} />
                <div className="col-span-3 text-sm font-s-medium ">
                  4 Candidate Hiring
                </div>
              </div>
              <div className="bg-white flex py-3 px-3 items-start justify-items-start gap-2 rounded-md">
                <HiUserGroup className="text-secondary" size={18} />
                <div className="col-span-3 text-sm font-s-medium ">
                  6 Applicant
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
                  <p className="font-s-medium ">April 22, 2022</p>
                </div>
              </div>
              <div className="flex justify-start items-center gap-3 px-3 py-2">
                <BsBuilding className="text-secondary" size={20} />
                <div className="">
                  <p className="text-black text-opacity-70 text-sm font-semibold">
                    Industry
                  </p>
                  <p className="font-s-medium ">IT& Software</p>
                </div>
              </div>
              <div className="flex justify-start items-center gap-3 px-3 py-2">
                <MdLocationPin className="text-secondary" size={20} />
                <div className="">
                  <p className="text-black text-opacity-70 text-sm font-semibold">
                    Location
                  </p>
                  <p className="font-s-medium ">Mumbai, Maharashtra</p>
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
                  <p className="font-s-medium ">Web Developer</p>
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
                  <p className="font-s-medium ">3-4 Years</p>
                </div>
              </div>
              <div className="flex justify-start items-center gap-3 px-3 py-2">
                <RiSuitcaseFill className="text-secondary" size={20} />
                <div className="">
                  <p className="text-black text-opacity-70 text-sm font-semibold">
                    Qualification
                  </p>
                  <p className="font-s-medium ">Bachelor Degree</p>
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
                  <p className="font-s-medium ">All</p>
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
                  <p className="font-s-medium ">40-50k /Month</p>
                </div>
              </div>

              <div>
                <h6 className="text-xl font-s-bold">Tags</h6>
                <div className="flex space-x-2 py-2">
                  <h5 className="px-3 py-1.5 bg-primary text-xs font-s-bold rounded">
                    HTML
                  </h5>
                  <h5 className="px-3 py-1.5 bg-primary text-xs font-s-bold rounded">
                    Python
                  </h5>
                  <h5 className="px-3 py-1.5 bg-primary text-xs font-s-bold rounded">
                    WordPress
                  </h5>
                </div>
                <div className="flex space-x-2 py-2">
                  <h5 className="px-5 py-1.5 bg-primary text-xs font-s-bold rounded">
                    JavaScript
                  </h5>
                  <h5 className="px-3 py-1.5 bg-primary text-xs font-s-bold rounded">
                    Figma
                  </h5>
                  <h5 className="px-3 py-1.5 bg-primary text-xs font-s-bold rounded">
                    Angular
                  </h5>
                </div>
                <div className="flex space-x-2 py-2">
                  <h5 className="px-5 py-1.5 bg-primary text-xs font-s-bold rounded">
                    Reactjs
                  </h5>
                  <h5 className="px-3 py-1.5 bg-primary text-xs font-s-bold rounded">
                    Drupal
                  </h5>
                  <h5 className="px-3 py-1.5 bg-primary text-xs font-s-bold rounded">
                    Joomla
                  </h5>
                </div>
              </div>
            </div>
          </div>

          <div className="py-6">
            <h6 className="font-s-medium">Similar Jobs</h6>

            <div className="">
              <div className="grid grid-cols-1    pt-2 gap-8  ">
                {jobData.map((item, index) => {
                  return (
                    <div
                      className="bg-white shadow-md shadow-[#2544EE30] rounded-xl relative "
                      key={index}
                    >
                      <div className="flex px-2">
                        <div
                          className={`{ text-white font-s-medium text-sm absolute  top-2 right-3 px-6 rounded-md py-1 ${
                            item.category === "Internship"
                              ? "bg-[#AB6B35]"
                              : item.category === "Fulltime"
                              ? "bg-[#8C82EA]"
                              : item.category === "Freelancer"
                              ? "bg-[#2D9BB3]"
                              : "bg-[#41B249]"
                          }`}
                        >
                          {item.category}
                        </div>
                        <img
                          alt="JobPost"
                          src={item.logourl}
                          width={80}
                          height={80}
                        />
                      </div>

                      <div className="flex flex-col pt-1 px-5 pb-3">
                        <p className="text-sm font-s-medium pb-3">
                          {item.post}
                          <span className="text-[#41B249]">
                            {" "}
                            {item.days} days
                          </span>
                        </p>

                        <div className="font-s-medium text-sm">
                          {item.minsal} - {item.maxsal} / {item.time}
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
        <div className="py-6 lg:px-0 px-5">
          <div className="flex justify-between lg:pt-12 lg:px-0 px-5">
            <div className="font-s-bold  text-[18px] ">Our Job Opening</div>
            <Link to="/job-search">
              {" "}
              <div className="text-secondary font-s-medium underline">
                View More
              </div>
            </Link>
          </div>

          <div className="pt-4 lg:pt-0">
            <div className="grid lg:grid-cols-3  md:grid-cols-2   pt-2 gap-8  ">
              {jobOpening.map((item, index) => {
                return (
                  <div
                    className="bg-white shadow-md shadow-[#2544EE30] rounded-xl relative "
                    key={index}
                  >
                    <div className="flex px-2">
                      <div
                        className={`{ text-white font-s-medium text-sm absolute  top-2 right-3 px-6 rounded-md py-1 ${
                          item.category === "Internship"
                            ? "bg-[#AB6B35]"
                            : item.category === "Fulltime"
                            ? "bg-[#8C82EA]"
                            : item.category === "Freelancer"
                            ? "bg-[#2D9BB3]"
                            : "bg-[#41B249]"
                        }`}
                      >
                        {item.category}
                      </div>
                      <img
                        alt="JobPost"
                        src={item.logourl}
                        width={80}
                        height={80}
                      />
                    </div>

                    <div className="flex flex-col pt-1 px-5 pb-3">
                      <Link to="/job-detail">
                        <p className="text-sm font-s-medium pb-3">
                          {item.post}
                          <span className="text-[#41B249]">
                            {" "}
                            {item.days} days
                          </span>
                        </p>
                      </Link>

                      <div className="font-s-medium text-sm">
                        {item.minsal} - {item.maxsal} / {item.time}
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
        <div className=" ">
          <div className="flex justify-between lg:pt-12 pt-6 lg:px-0 px-5">
            <div className="font-s-bold  text-[18px] ">Services Available</div>
            <div className="text-secondary font-s-medium underline">
              View More
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-5 px-5 lg:px-0">
            {services.map((item) => (
              <div className="bg-inputcolor my-5 py-2 rounded-lg">
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
        <div className=" pb-10">
          <div className=" container mx-auto  pb-5">
            <div className="flex justify-between lg:pt-12 lg:px-0 px-5">
              <div className="font-s-bold  text-[18px] ">
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
      </div>
    </div>
  );
};

export default JobDetailPage;
