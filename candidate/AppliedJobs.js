import React, { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillBagFill } from "react-icons/bs";
import { BiChevronLeft } from "react-icons/bi";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { BiChevronUp } from "react-icons/bi";
import { BiChevronDown } from "react-icons/bi";
import { TiLocation } from "react-icons/ti";
import { useSelector } from "react-redux";
import { candidateAppliedJobListAPI , candidateCategoryAPI } from "../../../api/authCandidate";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
const AppliedJobs = () => {
  const appliedData = [
    {
      Company: "Galaxy Software Development",
      Category: "Product Designer",
      JobsType: "Freelance",
      Applied: "24 Oct 2022",
    },

    {
      Company: "Galaxy Software Development",
      Category: "Senior UI-UX Designer",
      JobsType: "Full-Time",
      Applied: "24 Oct 2022",
    },

    {
      Company: "Galaxy Software Development",
      Category: "Senior UI-UX Designer",
      JobsType: "Part-Time",
      Applied: "24 Oct 2022",
    },

    {
      Company: "Galaxy Software Development",
      Category: "Senior UI-UX Designer",
      JobsType: "Full-Time",
      Applied: "24 Oct 2022",
    },
  ];

  const [darkup1, setDarkup1] = useState(true);
  const [darkdown1, setDarkdown1] = useState(false);
  const [darkup2, setDarkup2] = useState(true);
  const [darkDown2, setDarkdown2] = useState(false);
  const [darkup3, setDarkup3] = useState(true);
  const [darkDown3, setDarkdown3] = useState(false);
  const [darkup4, setDarkup4] = useState(true);
  const [darkDown4, setDarkdown4] = useState(false);
  const [jobApplied, setJobAppliedListingDetails] = useState([]);
  const [term, SetTerm] = useState("");
  const [appliedJobMn, setAppliedJob] = useState(10);

  const { userDetails } = useSelector((state) => state.flightReducer);
  const CandidateId = userDetails._id;

  const CandidateAppliedJobListing = async () => {
    try {
      const response = await candidateAppliedJobListAPI(CandidateId);
      console.log("Data Found", response.data);
      setJobAppliedListingDetails(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const [cats , setCats] = useState([])
  const cat = async () => {
    try {
      const response = await candidateCategoryAPI()
      setCats(response.data)
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const FlterDta = jobApplied.slice(0, appliedJobMn);
  console.log("Filter Data Applied Job", FlterDta);

  useEffect(() => {
    CandidateAppliedJobListing(); cat()
  }, []);

  const handeldarkup1 = () => {
    setDarkup1(true);
    setDarkdown1(false);
  };

  const handeldarkdown1 = () => {
    setDarkup1(false);
    setDarkdown1(true);
  };

  const handeldarkup2 = () => {
    setDarkup2(true);
    setDarkdown2(false);
  };

  const handeldarkdown2 = () => {
    setDarkup2(false);
    setDarkdown2(true);
  };

  const handeldarkup3 = () => {
    setDarkup3(true);
    setDarkdown3(false);
  };

  const handeldarkdown3 = () => {
    setDarkup3(false);
    setDarkdown3(true);
  };

  const handeldarkup4 = () => {
    setDarkup4(true);
    setDarkdown4(false);
  };

  const handeldarkdown4 = () => {
    setDarkup4(false);
    setDarkdown4(true);
  };

 

  return (
    <div>
      <div className="bg-inputcolor py-16">
        <div className="mx-auto max-w-[1150px]">
          <div className="flex items-center mb-4 font-s-medium text-secondary text-lg">
            <BiChevronLeft className="text-3xl" /> Applied Jobs
          </div>

          <div className="bg-[#fff] px-8 py-10 rounded-2xl">
            <div className="flex pb-8 items-center text-[#000] space-x-4 ">
              <BsFillBagFill className="text-secondary " size={32} />
              <div className="descri">
                <h6 className=" text-2xl font-s-medium">All Applied Jobs</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  non quam commodo, dictum justo a, varius nisl.
                </p>
              </div>
            </div>
            <hr className="mb-8" />
            <div className="sm:flex space-y-6 sm:space-y-0 sm:items-center mb-8 w-full justify-center sm:justify-between">
              <div className="flex items-center space-x-3">
                <span>Show</span>
                <select
                  onChange={(e) => setAppliedJob(e.target.value)}
                  className="bg-primary p-3 rounded-md"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
                <span>Entries</span>
              </div>

              <div className="flex items-center space-x-3">
                <span>Search:</span>
                <div className="bg-primary  flex items-center px-2 rounded-md">
                  <AiOutlineSearch className="text-2xl opacity-40" />
                  <input
                    type="text"
                    id="search"
                    value={term}
                    onChange={(e) => SetTerm(e.target.value)}
                    className="w-full bg-primary p-2"
                  />
                </div>
              </div>
            </div>
            <div className="border-t-2 border-l-2 border-r-2 overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2">
                    <th className="border-r-2">
                      <div className="font-s-medium py-2 px-1 sm:px-3 flex items-center justify-between text-sm sm:text-[18px]">
                        Company{" "}
                        <div>
                          <BiChevronUp
                            className={
                              darkup1
                                ? "text-[#71777F] opacity-100"
                                : "text-[#71777F] opacity-30"
                            }
                            onClick={handeldarkup1}
                          />
                          <BiChevronDown
                            className={
                              darkdown1
                                ? "text-[#71777F] opacity-100"
                                : "text-[#71777F] opacity-30"
                            }
                            onClick={handeldarkdown1}
                          />
                        </div>
                      </div>
                    </th>
                    <th className="border-r-2">
                      <div className="font-s-medium py-2 px-1 sm:px-3 flex items-center justify-between text-sm sm:text-[18px]">
                        Category{" "}
                        <div>
                          <BiChevronUp
                            className={
                              darkup2
                                ? "text-[#71777F] opacity-100"
                                : "text-[#71777F] opacity-30"
                            }
                            onClick={handeldarkup2}
                          />
                          <BiChevronDown
                            className={
                              darkDown2
                                ? "text-[#71777F] opacity-100"
                                : "text-[#71777F] opacity-30"
                            }
                            onClick={handeldarkdown2}
                          />
                        </div>
                      </div>
                    </th>
                    <th className="border-r-2">
                      <div className="font-s-medium py-2 px-1 sm:px-3 flex items-center justify-between text-sm sm:text-[18px]">
                        Job Types{" "}
                        <div>
                          <BiChevronUp
                            className={
                              darkup3
                                ? "text-[#71777F] opacity-100"
                                : "text-[#71777F] opacity-30"
                            }
                            onClick={handeldarkup3}
                          />
                          <BiChevronDown
                            className={
                              darkDown3
                                ? "text-[#71777F] opacity-100"
                                : "text-[#71777F] opacity-30"
                            }
                            onClick={handeldarkdown3}
                          />
                        </div>
                      </div>
                    </th>
                    <th>
                      <div className="font-s-medium py-2 px-1 sm:px-3 flex items-center justify-between text-sm sm:text-[18px]">
                        Applied On{" "}
                        <div>
                          <BiChevronUp
                            className={
                              darkup4
                                ? "text-[#71777F] opacity-100"
                                : "text-[#71777F] opacity-30"
                            }
                            onClick={handeldarkup4}
                          />
                          <BiChevronDown
                            className={
                              darkDown4
                                ? "text-[#71777F] opacity-100"
                                : "text-[#71777F] opacity-30"
                            }
                            onClick={handeldarkdown4}
                          />
                        </div>
                      </div>
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {/* {FlterDta.filter(({ jobId }) => {
                    return jobId?.employerId?.companyName?.indexOf(term) >= 0;
                  }) */}
                  
                  {jobApplied.size===0 ? "You have not applied to any jobs" : jobApplied.map((CategoryData) => {
                    return (
                      <tr className="border-b-2">
                        <td className="border-r-2 pl-8 pr-4 py-10 text-secondary font-s-bold">
                          {CategoryData?.jobId?.employerId?.companyName},{" "}
                          {CategoryData?.jobId?.jobTitle}
                          <div className="flex items-center mt-4 gap-x-2 text-[#000] font-s-normal">
                            <TiLocation className="text-secondary text-xl" />
                            {CategoryData?.jobId?.city},{CategoryData?.jobId?.state}
                            , {CategoryData?.jobId?.country}
                          </div>
                        </td>
                        <td  className="border-r-2 pr-4 pl-8 font-s-medium">
                          <Link to={`/job-details/${CategoryData?.jobId?._id}`}>
                          {CategoryData?.jobId?.categoryId?.name}
                          </Link>
                          {/* { cats && cats.filter(x => {
                            if(x._id === CategoryData?.jobId?.categoryId){
                              return x.name
                            }
                          })} */}
                        </td>
                        <td className="border-r-2 pr-4 pl-8 font-s-medium">
                          <span
                            className={`inline-block text-white px-4 py-2 rounded-lg ${
                              CategoryData?.jobId?.jobType === "Freelance"
                                ? "bg-[#2D9BB3]"
                                : CategoryData?.jobId?.jobType === "Full-Time"
                                ? "bg-[#8C82EA]"
                                : "bg-[#D2628C]"
                            }`}
                          >
                            {CategoryData?.jobId?.jobType}
                          </span>
                        </td>
                        <td className="border-r-2 pr-4 pl-8 font-s-medium">
                          {CategoryData?.createdAt?.substring(0, 10)}
                        </td>
                        {/* <td
                          className={`pl-8 pr-4 font-s-medium ${
                            item.Status === "Shortlist"
                              ? "text-[#F28203]"
                              : item.Status === "Reviewed"
                              ? "text-[#2544EE]"
                              : item.Status === "Reject"
                              ? "text-[#FF0707]"
                              : "text-[#D5C000]"
                          }`}
                        >
                          {item.Status}
                          {item.Status === "Reviewed" ? (
                            <div className="text-[12px] text-black text-opacity-50 font-s-normal">
                              Resume downloaded <br />a day ago
                            </div>
                          ) : null}
                        </td> */}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="flex items-center justify-between py-4 ">
              <div className="font-s-medium">Showing 1 to 3 of 7 entries</div>
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
                      <NavLink
                        href="#"
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
                        href="#"
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
                        <BsChevronRight
                          className="h-5 w-5"
                          aria-hidden="true"
                        />
                      </NavLink>
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

export default AppliedJobs;
