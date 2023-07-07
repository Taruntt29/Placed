import React, { useEffect, useState } from "react";
import { RiArrowLeftSLine } from "react-icons/ri";
import { FiClock } from "react-icons/fi";
import { IoIosTimer } from "react-icons/io";
import { MdOutlineMessage, MdMail } from "react-icons/md";
import { toast } from "react-toastify";
import {
  getAllApplicantsAPI,
  getAllApplicantsAPIWithDate,
  getAllApplicantsAPIWithStatus,
  getApplicantsById,
  updateStatusApplicant,
} from "../../../api/authService";
import moment from "moment";
import { postaddContactAPI } from "../../../api/authCandidate";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Select from "react-select";
import cities from "cities.json";
import { Document } from "react-pdf";
import { getAllCity, getAllCityNoFilter } from "../../../api/coachFunctions";
const AllCandidates = () => {
  const [showDetail, setShowDetail] = useState([]);

  const [allData, setAllData] = useState([]);
  const [pageNo, setPageNo] = useState("");
  const [pageSize, setPageSize] = useState("");
  const [candidateName, setCandidateName] = useState("");
  // const [search, setSearch] = useState("");
  const [statusData, setStatusData] = useState({});
  const [prevStatusData, setPrevStatusData] = useState({});
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const { state } = useLocation();
  console.log("state", state);
  const navigate = useNavigate();
  // console.log(statusData.value);
  // API
  const [applicantId, setApplicantId] = useState("");
  const [candidateId, setCandidateId] = useState("");
  console.log("candidateId", candidateId);
  const [jobId, setJobId] = useState("");
  const AllApplicants = async () => {
    try {
      const { data, status, message } = await getAllApplicantsAPI(
        state.jobId,
        pageNo,
        pageSize
        // statusData,
        // date
      );
      if (status) {
        setAllData(data);
        // setShowDetail(data);
      } else {
        toast(message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const AllApplicantsWithDate = async () => {
    try {
      const { data, status, message } = await getAllApplicantsAPIWithDate(
        state.jobId,
        pageNo,
        pageSize,
        date
      );
      if (status) {
        setAllData(data);
        // setShowDetail(data);
      } else {
        toast(message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    AllApplicantsWithDate();
  }, [date]);
  useEffect(() => {
    AllApplicants();
  }, []);

  // get applicants by id api
  const AllApplicantsById = async () => {
    try {
      const { data, status, message } = await getApplicantsById(applicantId);
      if (status) {
        setShowDetail(data[0]);
        // setStatusData({ value: data[0]?.status, label: data[0]?.status });
      } else {
        toast(message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    AllApplicantsById();
  }, [applicantId]);
  // API to update applicATION STATUS

  const updateApplicationStatus = async (e) => {
    try {
      const response = await updateStatusApplicant({
        candidateId: candidateId,
        jobId: jobId,
        status: e.label,
      });
      if (response.status) {
        toast(response.message);
        AllApplicants();
      } else {
        toast(response.message);
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  // useEffect(() => {
  //   updateApplicationStatus();
  // }, [statusData]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [messagebox, setMessagebox] = useState("");
  const notifyCandidate = async () => {
    try {
      const { data, message, status } = await postaddContactAPI({
        type: "contact",
        name: name,
        email: email,
        phoneNumber: phonenumber,
        message: messagebox,
        agreewithTerms: true,
      });
      if (status) {
        toast(message);
      } else {
        toast(message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const statusoptions = [
    { value: "Reviewed", label: "Reviewed" },
    { value: "Shortlisted", label: "Shortlisted" },
    { value: "Reject", label: "Reject " },
    { value: "Applied", label: "Applied" },
  ];

  // location data
  // const locationData = require("../../../utils/location.json");
  // const locationArr = locationData?.map((item) => {
  //   return { value: item.location, label: item.location };
  // });

  // console.log("location", locationArr);
  // const [locationData, setLocationData] = useState([]);
  // const getLocationList = async () => {
  //   try {
  //     const { data, status, message } = await getAllCityNoFilter();
  //     if (status) {
  //       setLocationData(data);
  //     } else {
  //       toast(message);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   getLocationList();
  // }, []);
  // const locationArr = locationData.map((item) => {
  //   return { value: item.state, label: item.state };
  // });
  // console.log("locationArr", locationArr);
  // const citiesData = cities.map((val) => val.name);
  // console.log(
  //   "cities",
  //   cities.map((val) => val.name)
  // );
  // const locationArr = citiesData?.map((item) => {
  //   return { value: item, label: item };
  // });
  // console.log("locationArr", locationArr);

  return (
    <div className="bg-[#F5F7F9]">
      <div className="container mx-auto pt-10 pb-10 ">
        <div className="flex justify-between pb-3 items-center">
          <div className="flex space-x-2 items-center pb-6 lg:px-0 px-5">
            {" "}
            <RiArrowLeftSLine className="text-secondary w-5 h-5 " />{" "}
            <p className="text-secondary font-s-medium text-base">
              {" "}
              All Candidates{" "}
            </p>{" "}
          </div>
        </div>
        <div className="grid grid-cols-10 gap-10  w-full">
          <div className="hidden md:block col-span-3 bg-white rounded-t-md overflow-y-scroll h-[700px]">
            <div className=" py-6  bg-white col-span-3 w-full ">
              {/* <Link to="/employer/all-applicants"> */}
              <div
                className="text-xl font-bold w-full px-3 text-secondary cursor-pointer"
                onClick={() => {
                  navigate("/employer/all-applicants", {
                    state: { jobId: state.jobId },
                  });
                }}
              >
                {state.appNum} Applicants
              </div>
              {/* </Link> */}
            </div>
            <div className="h-[1px] w-full bg-grey"></div>
            {allData ? (
              allData.map((item, index) => {
                return (
                  <>
                    <div
                      className=" px-3 py-3 flex flex-col justify-start space-x-[2px] bg-white hover:bg-[#DDECFB] cursor-pointer"
                      onClick={(e) => {
                        setApplicantId(item._id);
                        // AllApplicantsById();
                        setStatusData({
                          value: item?.status,
                          label: item?.status,
                        });
                        setJobId(item?.jobId[0]?._id);
                        setCandidateId(item?.candidateId[0]?._id);
                      }}
                      key={index}
                    >
                      <p className="text-xl font-s-medium capitalize">
                        {item?.candidateId[0]?.candidateName}
                      </p>
                      <p className="text-base font-s-medium capitalize ">
                        {/* {item?.jobId?.jobTitle} */}
                        {
                          item?.candidateId[0]?.workExperience[0]
                            ?.employmentType
                        }
                      </p>
                      <p className="text-base ">
                        {item?.candidateId[0]?.state},{" "}
                        {item?.candidateId[0]?.city}
                      </p>
                      <p className="text-base font-s-medium text-opacity-50 text-black ">
                        {item.status === "Applied" ? (
                          <p className="flex gap-1 items-center justify-start">
                            <IoIosTimer className="" size={22} />
                            Awaiting Review
                          </p>
                        ) : (
                          item.status
                        )}
                      </p>
                    </div>
                    <div className="h-[1px] w-full bg-grey"></div>
                  </>
                );
              })
            ) : (
              <div className="text-secondary text-lg">No Data Found!!!</div>
            )}
          </div>
          <div className="col-span-10 md:col-span-7 bg-white rounded-t-md">
            <div className="flex justify-end px-5 py-5 ">
              <div className="flex justify-end">
                <input
                  type="date"
                  value={date}
                  onChange={(e) => {
                    setDate(e.target.value);
                  }}
                  className="border border-black rounded-md px-4 py-3"
                />
                <p
                  className="text-secondary text-sm font-s-medium py-3 cursor-pointer"
                  onClick={() => {
                    setDate("");
                    AllApplicants();
                  }}
                >
                  × Remove Filter
                </p>
              </div>
            </div>
            <div className=" grid grid-cols-7 p-5 ">
              {/* resume content start */}
              {applicantId ? (
                <>
                  <div className="col-span-7 md:col-span-4 ">
                    <div className="border-[1px] border-secondary inline-flex rounded-[14px]">
                      <p className="font-s-medium text-base px-8 py-3 flex justify-center space-x-2">
                        <FiClock size={25} />
                        <span>
                          {" "}
                          Application expiring on{" "}
                          {showDetail?.jobId?.jobExpiryDate}{" "}
                        </span>
                      </p>
                    </div>
                    <div className=" flex flex-col justify-start space-x-1 mt-5">
                      <p className="text-3xl font-s-medium capitalize">
                        {showDetail?.candidateId?.candidateName}
                      </p>
                      <p className="text-lg font-s-medium">
                        {
                          showDetail?.candidateId?.workExperience[0]
                            ?.employmentType
                        }
                      </p>
                      <p>
                        <span className="text-secondary">
                          {showDetail?.candidateId?.email}
                        </span>
                        <br />
                        <span className="">
                          -{showDetail?.candidateId?.city},{" "}
                          {showDetail?.candidateId?.state}
                        </span>
                      </p>
                      <p>Applied to {showDetail?.jobId?.jobTitle}</p>
                      <p>
                        {showDetail?.jobId?.city}, {showDetail?.jobId?.state}
                      </p>
                    </div>
                  </div>

                  <div className="col-span-7 md:col-span-3 flex flex-col space-x-3 pb-6">
                    <div className="pt-3  flex flex-col justify-start space-x-3 items-start">
                      <Select
                        name="statusData"
                        value={statusData}
                        // defaultValue={prevStatusData}
                        options={statusoptions}
                        // onChange={(e) =>
                        //   setStatusData({ ...statusData, statusData: e.value })
                        // }
                        onChange={(e) => {
                          setStatusData(e);
                          updateApplicationStatus(e);
                        }}
                        classNamePrefix="select"
                        placeholder="Select Status"
                        className="w-80"
                      />

                      <div className="flex flex-col pt-5">
                        <p className="text-base font-s-medium">
                          {" "}
                          {moment(showDetail?.candidateId?.createdAt).format(
                            "DD/MM/YYYY | dddd"
                          )}
                        </p>
                        <p className="text-sm capitalize">
                          {showDetail?.candidateId?.candidateName} applied to{" "}
                          {showDetail?.jobId?.jobTitle}
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex space-x-4 pt-5">
                        <Link to="/employer/messages">
                          <MdOutlineMessage
                            className="bg-secondary text-white rounded-full p-1"
                            size={28}
                          />
                        </Link>
                        <Link to="/employer/compose-email">
                          {" "}
                          <MdMail
                            className="bg-secondary text-white rounded-full p-1"
                            size={28}
                          />
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* resume content close */}
                  <div className="w-[55%] bg-grey h-[1px] col-span-7 my-2 "></div>
                  <div className=" grid grid-cols-7 gap-4 col-span-7 pt-3">
                    <div className="col-span-7 md:col-span-4  ">
                      <div className="  flex flex-col justify-start space-y-4 items-start">
                        {/* <a
                      href={showDetail?.candidateId?.uploadfiles[0]}
                      download
                      className="text-sm flex justify-center bg-secondary text-white font-s-medium  px-6 py-3 rounded-md shadow-sm shadow-slate-700 w-40"
                    >
                      Download
                    </a> */}
                        <Link
                          to={showDetail?.candidateId?.uploadfiles[0]}
                          target="_blank"
                          download
                          className="text-sm flex justify-center bg-secondary text-white font-s-medium  px-6 py-3 rounded-md shadow-sm shadow-slate-700 w-40"
                        >
                          Download
                        </Link>
                      </div>
                      {/* <div className=" border border-grey mt-5">
                    {!showDetail.candidateId?.uploadfiles ? (
                      <img
                        src="/assets/images/resumedummy.png"
                        alt="/resume"
                        className="w-full h-full"
                      />
                    ) : (
                      <img
                        src={showDetail?.candidateId?.uploadfiles}
                        alt="/resume"
                        className="w-full h-full"
                      />
                    )}
                  </div> */}
                      <div>
                        <Document
                          file={showDetail?.candidateId?.uploadfiles[0]}
                          className="mt-5"
                        />
                      </div>
                    </div>
                    <div className="col-span-7 md:col-span-3 mb-2 mt-16  p-3 rounded-md">
                      <div className="box-shadow1 mt-10 mb-5 p-2 rounded-md shadow-md border">
                        <div className="pt-3 font-s-bold">Notify Candidate</div>
                        <div className="w-full pt-4">
                          <div className="flex justify-start flex-col gap-1 w-full">
                            <div className=" text-[15px]">Name</div>
                            <input
                              name="name"
                              type="text"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              placeholder="Enter Name"
                              className=" px-3 py-[10px] rounded-[7px] text-sm border"
                            />
                          </div>
                        </div>
                        <div className="w-full pt-4">
                          <div className="flex justify-start flex-col gap-1 w-full">
                            <div className=" text-[15px]">Email</div>
                            <input
                              name="email"
                              type="text"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              placeholder="Enter your email"
                              className=" px-3 py-[10px] rounded-[7px] text-sm border"
                            />
                          </div>
                        </div>

                        <div className="w-full pt-4">
                          <div className="flex justify-start flex-col gap-1 w-full">
                            <div className="text-[15px]">Phone Number</div>
                            <input
                              name="phone"
                              type="text"
                              value={phonenumber}
                              onChange={(e) => setPhonenumber(e.target.value)}
                              placeholder="Enter your Phone Number"
                              className=" px-3 py-[10px] rounded-[7px] text-sm border"
                            />
                          </div>
                        </div>
                        <div className="w-full pt-4 ">
                          <div className="flex justify-start flex-col gap-1 w-full">
                            <div className="text-[15px]">Message</div>
                            <textarea
                              name="message"
                              value={messagebox}
                              onChange={(e) => setMessagebox(e.target.value)}
                              type="text"
                              placeholder="Write something here"
                              className=" px-3 py-[10px] rounded-[7px] text-sm border"
                            />
                          </div>
                        </div>

                        <div className="flex items-center justify-center my-3">
                          <button
                            onClick={notifyCandidate}
                            className="text-white bg-secondary rounded-md text-center py-1.5 px-20"
                          >
                            Submit Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="text-secondary text-5xl flex justify-center  items-center  md:pt-10 col-span-7 ">
                  See Applicant Resume Here
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCandidates;
