import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BsFillCalendarDateFill, BsBuilding } from "react-icons/bs";
import { FaCalendarAlt } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { RiSuitcaseFill } from "react-icons/ri";
import moment from "moment";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import {
  employerPostaJobAPI,
  getAllbenefitsAPI,
  getAllIndustryAPI,
  getAllSkillsAPI,
  getEmployerEditProfileAPI,
  getPreviewProfileByJobId,
  getSupplementAPI,
} from "../../../api/authService";

const PreviewJob = () => {
  const { state } = useLocation();

  console.log("jobData", state);
  const { userDetails } = useSelector((state) => state.flightReducer);
  console.log("user", userDetails);

  const [stateData, setStateData] = useState({});
  const [previewData, setPreviewData] = useState([]);
  //Get Api
  const getEditProfileApi = async () => {
    const { data, status, message } = await getEmployerEditProfileAPI(
      userDetails._id
    );
    if (status) {
      // console.log("data state", data);
      setStateData(data);
    } else {
      toast(message);
    }
  };

  // preview data get api
  const getPreview = async () => {
    const { data, status, message } = await getPreviewProfileByJobId(
      state.jobId
    );
    if (status) {
      setPreviewData(data[0]);
    } else {
      toast(message);
    }
  };
  const getDays = () => {
    // To set two dates to two variables
    // const updatedDate = previewData?.updatedAt.subtring(0, 10);
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    // console.log("updatedDate", updatedDate);
    // let upday = updatedDate.getDate();
    // let upmonth = updatedDate.getMonth() + 1;
    // let upyear = updatedDate.getFullYear();

    // This arrangement can be altered based on how we want the date's format to appear.
    let currDate = `${month}/${day}/${year}`;
    // let upDate = `${upmonth}/${upday}/${upyear}`;
    // console.log("updatedDate", upDate);
    console.log("currentDate", currDate);
    var date1 = new Date("06/30/2019");
    var date2 = new Date("07/30/2019");

    // To calculate the time difference of two dates
    var Difference_In_Time = date1.getTime() - date2.getTime();

    // To calculate the no. of days between two dates
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

    //To display the final no. of days (result)
    console.log(
      "Total number of days between dates  <br>" +
        currDate +
        "<br> and <br>" +
        // upDate +
        " is: <br> " +
        Difference_In_Days
    );
  };
  useEffect(() => {
    getEditProfileApi();
    getPreview();
    getDays();
  }, []);

  //jobSkill
  const [skillData, setSkillData] = useState([]);
  const getJobSkillsData = async () => {
    try {
      const { data, status, message } = await getAllSkillsAPI();
      console.log(data);
      if (status) {
        setSkillData(data);
      } else {
        toast(message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getJobSkillsData();
  }, []);

  // supplement pay API
  const [supplementPayData, setSupplementPayData] = useState([]);
  const getsupplementPay = async () => {
    try {
      const { data, status, message } = await getSupplementAPI();
      // console.log("supplemental", data);
      if (status) {
        setSupplementPayData(data);
      } else {
        toast(message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getsupplementPay();
  }, []);

  // benefits API
  const [benefits, setBenefits] = useState([]);
  const benefitsData = async () => {
    try {
      const { data, status, message } = await getAllbenefitsAPI();
      if (status) {
        console.log("benfits", data);
        setBenefits(data);
      } else {
        toast(message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    benefitsData();
  }, []);

  // industry API
  const [industryData, setIndustryData] = useState([]);

  const getIndustryField = async () => {
    const { data, status, message } = await getAllIndustryAPI();
    if (status) {
      setIndustryData(data);
    } else {
      toast(message);
    }
  };

  useEffect(() => {
    getIndustryField();
  }, []);

  const navigate = useNavigate();
  // API
  const publishJob = async () => {
    if (userDetails.accountstatus === "Active") {
      try {
        const { data, status, message } = await employerPostaJobAPI({
          employerId: userDetails._id,
          jobTitle: previewData.jobTitle,
          jobType: previewData.jobType,
          categoryId: previewData.categoryId,
          jobSkill: previewData.jobSkill,
          description: previewData.description,
          numberofHiring: previewData.numberofHiring,
          gender: previewData.gender,
          jobExpiryDate: previewData.jobExpiryDate,
          currency: previewData.currency,
          salaryPeriod: previewData.salaryPeriod,
          salaryFrom: previewData.salaryFrom,
          salaryTo: previewData.salaryTo,
          country: previewData.country,
          state: previewData.state,
          city: previewData.city,
          location: previewData.location,
          careerLevel: previewData.careerLevel,
          jobShift: previewData.jobShift,
          qualification: previewData.qualification,
          jobExperience: previewData.jobExperience,
          companywebsite: previewData.companywebsite,
          supplementalpay: previewData.supplementalpay,
          benefitsoffered: previewData.benefitsoffered,
          applycompanywebsite: previewData.applycompanywebsite,
          hidesalary: previewData.hidesalary,
          ispublish: true,
          // status: "Active",
        });

        if (status) {
          toast(message);
          navigate("/employer/manage-jobs");
        } else {
          toast(message);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      toast("Please activate your account to post a new job!!");
    }
  };
  return (
    <div className="container mx-auto py-16">
      <div className=" grid lg:grid-cols-7 grid-cols-1 gap-8">
        <div className="lg:col-span-5 px-5 md:px-0">
          <div
            className="rounded-md bg-no-repeat relative h-80 bg-cover w-full"
            style={{
              // backgroundImage: `url(${userDetails?.bannerImage[0]})`,
              backgroundImage: `url(${stateData?.bannerImage})`,
            }}
          >
            <div className="bg-[#8C82EA] px-10 font-s-medium py-1 text-white inline-flex rounded-md absolute top-5 left-5">
              {previewData?.jobType}
              {/* {console.log(previewData?.jobType)} */}
            </div>
            <div className="bg-white p-1 shadow-md shadow-slate-400 rounded-md absolute -bottom-12 left-10">
              <img
                src={stateData?.image}
                alt="/"
                className="w-24 h-24 rounded-md"
              />
            </div>
          </div>
          <div>
            <div className="bg-[#8C82EA] px-10  font-s-medium py-1 text-white inline-flex rounded-md absolute top-5 left-5">
              {previewData?.jobType}
            </div>
          </div>

          <div className="pt-20  flex flex-col gap-5">
            <div className="text-black text-opacity-80 text-[20px] font-s-medium">
              {previewData?.jobTitle}/
              <span className="text-[#41B249] font-s-medium text-opacity-100">
                &nbsp;0 days ago
              </span>
            </div>
            <div className="text-black text-opacity-70 font-s-medium text-[15px]">
              {/* {previewData?.jobData?.address}, */}
              {previewData?.city},{previewData?.state},{previewData?.country}
            </div>
            <div className="font-s-medium text-[15px]">
              {previewData?.companywebsite ? (
                <span className="text-secondary">
                  {previewData?.companywebsite}
                </span>
              ) : null}

              {/* <span className="text-black">$2000 - $2500 / Month</span> */}
            </div>
            <div className="font-s-bold  text-[18px]">Salary Range:</div>
            <div className="text-black font-s-medium text-[15px]">
              {previewData.currency} {previewData?.salaryFrom}-
              {previewData.currency} {previewData?.salaryTo}/
              {previewData.salaryPeriod}
            </div>
            <div className="font-s-bold  text-[18px]">Job Skills:</div>
            <div className="font-s-medium text-[15px]">
              <ul className="list-disc">
                {previewData?.jobSkill?.map((item) => {
                  return (
                    <>
                      {skillData?.map((item2) => {
                        return (
                          <>
                            {item2._id === item ? (
                              <li className="">{item2.skill}</li>
                            ) : null}
                          </>
                        );
                      })}
                    </>
                  );
                })}
              </ul>
            </div>
            <div className="font-s-bold  text-[18px]">Job Description:</div>
            <p className="text-black text-opacity-70 font-semibold text-[15px] text-justify">
              {/* {state?.jobData?.benefitsoffered[0]} */}
              <div
                dangerouslySetInnerHTML={{
                  __html: previewData?.description,
                }}
              />
            </p>

            <div>
              <div className="font-s-bold py-2 text-[18px]">
                Additional Benefits:
              </div>
              <div className=" text-black text-opacity-70 font-semibold text-[15px] text-justify">
                {/* {state?.jobData?.benefitsoffered?.[1]?.name} */}
                <div className="flex flex-col">
                  <ul className="list-disc">
                    {previewData?.benefitsoffered?.map((item) => {
                      return (
                        <>
                          {benefits?.map((item2) => {
                            return (
                              <>
                                {item2._id === item ? (
                                  <li className="">{item2.name}</li>
                                ) : null}
                              </>
                            );
                          })}
                        </>
                      );
                    })}
                  </ul>
                  <ul className="list-disc">
                    {previewData?.supplementalpay?.map((item) => {
                      return (
                        <>
                          {supplementPayData?.map((item2) => {
                            return (
                              <>
                                {item2._id === item ? (
                                  <li className="">{item2.name}</li>
                                ) : null}
                              </>
                            );
                          })}
                        </>
                      );
                    })}
                  </ul>
                </div>
                <div className="mt-5">
                  <button
                    className="bg-secondary text-primary px-4 py-3 rounded"
                    onClick={publishJob}
                  >
                    Publish Job
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* <div>
            <button
              onClick={handlePostaJob}
              className="text-sm w-40 lg:mt-0 mt-6  border border-white bg-secondary  text-white font-s-medium   py-3 rounded-md  "
            >
              Publish Job
            </button>
          </div> */}
        </div>
        <div className="lg:col-span-2 lg:px-0 px-5">
          <div className="bg-[#EFF5FF] rounded-lg py-6 px-5 ">
            <div className="font-s-medium">Job Information</div>
            <div className="flex flex-col gap-5 pt-5">
              <div className=" flex py-3 px-3 items-start justify-items-start gap-2 rounded-md">
                <FaCalendarAlt className="text-secondary" size={18} />
                <div className="col-span-3 text-sm font-s-medium ">
                  Expired on:{" "}
                  <span className="text-black text-opacity-70">
                    {previewData?.jobExpiryDate}
                  </span>
                </div>
              </div>

              {/* <div className="bg-white flex py-3 px-3 items-start justify-items-start gap-2 rounded-md">
                <HiUserGroup className="text-secondary" size={18} />
                <div className="col-span-3 text-sm font-s-medium ">
                  {state?.jobData?.hiring} Candidate Hiring
                </div>
              </div> */}
              {/* <div className="bg-white flex py-3 px-3 items-start justify-items-start gap-2 rounded-md">
                <HiUserGroup className="text-secondary" size={18} />
                <div className="col-span-3 text-sm font-s-medium ">
                  6 Applicant
                </div>
              </div> */}
            </div>
            <div className="pt-5 flex flex-col justify-start items-start gap-8">
              <div className=" flex py-3 px-3 items-start justify-items-start gap-2 rounded-md">
                <BsFillCalendarDateFill className="text-secondary" size={20} />
                <div className="">
                  <p className="text-black text-opacity-70 text-sm font-semibold">
                    Date Posted
                  </p>
                  <p className="font-s-medium ">
                    {/* {previewData?.updatedAt} */}
                    {moment(previewData?.updatedAt).format("DD/MM/YYYY | dddd")}
                    {/* {previewData?.updatedAt.substring(0, 10)} */}
                  </p>
                </div>
              </div>
              <div className="flex justify-start items-center gap-3 px-3 py-1 ">
                <BsBuilding className="text-secondary" size={20} />
                <div className="">
                  <p className="text-black text-opacity-70 text-sm font-semibold">
                    Industry
                  </p>
                  <p className="font-s-medium ">
                    {industryData?.map((item) => {
                      return (
                        <>
                          {item._id === stateData?.industryId
                            ? item.name
                            : null}
                        </>
                      );
                    })}
                  </p>
                </div>
              </div>
              <div className="flex justify-start items-center gap-3 px-3 py-1">
                <MdLocationPin className="text-secondary" size={20} />
                <div className="">
                  <p className="text-black text-opacity-70 text-sm font-semibold">
                    Location
                  </p>
                  <p className="font-s-medium ">
                    {previewData?.city},{previewData?.state},
                    {previewData?.country}
                  </p>
                </div>
              </div>
              <div className="flex justify-start items-center gap-3 px-3 py-1">
                <img
                  src="/assets/images/webdev.png"
                  alt="webdev"
                  className="w-[22px]"
                />
                <div className="">
                  <p className="text-black text-opacity-70 text-sm font-semibold">
                    Job Title
                  </p>
                  <div className="font-s-medium ">{previewData?.jobTitle}</div>
                </div>
              </div>
              <div className="flex justify-start items-center gap-3 px-3 py-1">
                <img
                  src="/assets/images/experience.png"
                  alt="experience"
                  className="w-[20px]"
                />
                <div className="">
                  <p className="text-black text-opacity-70 text-sm font-semibold">
                    Experience
                  </p>
                  <p className="font-s-medium ">{previewData?.jobExperience}</p>
                </div>
              </div>
              <div className="flex justify-start items-center gap-3 px-3 py-1">
                <RiSuitcaseFill className="text-secondary" size={20} />
                <div className="">
                  <p className="text-black text-opacity-70 text-sm font-semibold">
                    Qualification
                  </p>
                  <p className="font-s-medium ">{previewData?.qualification}</p>
                </div>
              </div>
              <div className="flex justify-start items-center gap-3 px-3 py-1">
                <img
                  src="/assets/images/bigender.png"
                  alt="webdev"
                  className="w-[18px]"
                />
                <div className="">
                  <p className="text-black text-opacity-70 text-sm font-semibold">
                    Gender
                  </p>
                  <p className="font-s-medium ">{previewData?.gender}</p>
                </div>
              </div>
              {/* <div className="flex justify-start items-center gap-3 px-3 py-1">
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
              </div> */}

              {/* <div>{state?.jobData.map((item) => item.skill)}</div> */}

              <div>
                <h6 className="text-xl font-s-bold">Tags</h6>

                <div>
                  {previewData?.jobSkill?.map((item) => {
                    return (
                      <>
                        {skillData?.map((item2) => {
                          return (
                            <>
                              {item2._id === item ? (
                                <div className=" py-1.5 px-2  grid-cols-2 my-2 text-center grid bg-primary text-xs font-s-bold rounded capitalize">
                                  {item2.skill}
                                </div>
                              ) : null}
                            </>
                          );
                        })}
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewJob;
