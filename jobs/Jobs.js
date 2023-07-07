import React, { Fragment, useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Slider from "react-slick";
import { MdOutlineKeyboardArrowRight, MdLocationPin } from "react-icons/md";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { GiSettingsKnobs } from "react-icons/gi";
import { RiArrowRightSFill } from "react-icons/ri";
import { Dialog, Transition } from "@headlessui/react";
import {
  candidateCategoryAPI,
  candidateSkillAPI,
  candidateIndustryAPI,
  candidateJobSearchAPI,
} from "../../api/authCandidate";

const Jobs = () => {
  const [jobType, setJobType] = useState();
  const [industry, setIndustry] = useState();
  const [companySize, setCompanySize] = useState();
  const [CandiateCatgoryData, setCandidateCategoryData] = useState([]);
  const [candidateSkills, setCandidateSkills] = useState([]);
  const [candidateIndustry, setCandidateIndustry] = useState([]);
  const [parameters, setParameters] = useState({});
  const [searchJobData, setCandidateSearchJob] = useState([]);
  const [numberSetShow, setJobNumber] = useState(10);
  const [setFterData, setShowingData] = useState([]);
  const [state, setState] = useState({
    salaryfrom: "0",
    salaryto: "0",
    career: "",
    gender: "",
    skill: "",
    category: "",
    location: "",
    benefits: "",
  });
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  console.log("ParaMeter Data", parameters);

  const CandidateJobSearch = async (parameters) => {
    try {
      const response = await candidateJobSearchAPI({ params: parameters });
      console.log("Data Found", response.data);
      setCandidateSearchJob(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(searchJobData);

  const FlterJobData = searchJobData?.slice(0, numberSetShow);
  console.log("Filter Data Applied Job", FlterJobData);
  let LngthData = FlterJobData?.length;
  console.log(LngthData);
  // setShowingData(LngthData);

  const CandidateCategory = async () => {
    try {
      const response = await candidateCategoryAPI();
      console.log("Data Found", response.data);
      setCandidateCategoryData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const CandidateSkill = async () => {
    try {
      const response = await candidateSkillAPI();
      console.log("Data Found", response.data);
      setCandidateSkills(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const CandidateInDustry = async () => {
    try {
      const response = await candidateIndustryAPI();
      console.log("Data Found", response.data);
      setCandidateIndustry(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(numberSetShow);

  const CareerLevel = [
    {
      name: "1 Years",
      value: "1years",
    },
    {
      name: "2 Years",
      value: "2years",
    },
    {
      name: "3 Years",
      value: "3years",
    },
    {
      name: "4 Years",
      value: "4years",
    },
    {
      name: "5 Years",
      value: "5years",
    },
    {
      name: "6 Years",
      value: "6years",
    },
    {
      name: "7 Years",
      value: "7years",
    },
    {
      name: "8 Years",
      value: "8years",
    },
    {
      name: "9 Years",
      value: "9years",
    },
    {
      name: "10 Years",
      value: "10years",
    },
    {
      name: "11 Years",
      value: "11years",
    },
    {
      name: "12 Years",
      value: "12years",
    },
    {
      name: "13 Years",
      value: "13years",
    },
    {
      name: "14 Years",
      value: "14years",
    },
    {
      name: "15 Years",
      value: "15years",
    },
  ];

  const JobTyeData = [
    {
      name: "Freelance",
      value: "Freelance",
    },
    {
      name: "Full-Time",
      value: "Full-Time",
    },
    {
      name: "Work from Home",
      value: "WorkfromHome",
    },
    {
      name: "Remote Work",
      value: "RemoteWork",
    },
    {
      name: "Internship",
      value: "Internship",
    },
    {
      name: "Part Time",
      value: "PartTime",
    },
    {
      name: "Temporary",
      value: "Temporary",
    },
    {
      name: "Volunteer",
      value: "Volunteer",
    },
  ];

  const CareerLevelData = [
    {
      name: "Beginner",
      value: "Beginner",
    },
    {
      name: "Intermediate",
      value: "Intermediate",
    },
    {
      name: "Expert",
      value: "Expert",
    },
    {
      name: "Advanced",
      value: "Advanced",
    },
  ];

  console.log("Job Type Data", JobTyeData);

  function CurrentDate(mydate) {
    let currentDate = new Date().toJSON().slice(0, 10);
    var date1 = new Date(currentDate);
    var date2 = new Date(mydate);
    var Difference_In_Time = date1.getTime() - date2.getTime();
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    return Difference_In_Days;
  }

  const [selectSkill, setSelectSkill] = useState("");

  useEffect(() => {
    CandidateCategory();
    CandidateSkill();
    CandidateInDustry();
    CandidateJobSearch(parameters);
  }, [parameters]);

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
    {
      id: 7,
      logourl: "/assets/images/logo3.png",
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
      id: 8,
      logourl: "/assets/images/logo5.png",
      days: "01",
      category: "Fulltime",
      post: "Senior Web Designer , Developer",
      address: "1363-1385 Sunset Blvd Los Angeles, CA 90026, USA",
      link: "https://www.webmax.com",
      jobdetaillink: "/",
      minsal: "$2000",
      maxsal: "$2500",
      time: "Month",
    },
    {
      id: 9,
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
  ];

  const tData = [
    {
      id: 1,
      title: " MNCs",
      subtext: " 1.3k+ Companies",
    },
    {
      id: 2,
      title: " MNCs",
      subtext: " 1.3k+ Companies",
    },
    {
      id: 3,
      title: " MNCs",
      subtext: " 1.3k+ Companies",
    },
    {
      id: 4,
      title: " MNCs",
      subtext: " 1.3k+ Companies",
    },
    {
      id: 5,
      title: " MNCs",
      subtext: " 1.3k+ Companies",
    },
    {
      id: 6,
      title: " MNCs",
      subtext: " 1.3k+ Companies",
    },
  ];

  const settingTestominal = {
    dots: false,
    infinite: true,
    speed: 1500,
    centerMode: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    loop: true,
    autoplay: true,
    autoplaySpeed: 4000,
    accessibility: true,
    cssEase: "linear",
    swipeToSlide: true,

    responsive: [
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          arrows: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          arrows: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  };

  const [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const clearFilters = () => {
    setParameters({});
    CandidateJobSearch();
  };

  const [placeHolder, setPlaceholder] = useState("");

  const [jTSearch, setJTSearch] = useState("");

  function filterByString() {
    setJTSearch(placeHolder);
  }

  return (
    <div className="container mx-auto py-10">
      <div className="pt-10">
        <p className="text-4xl text-grey font-s-bold text-center pb-6">
          {" "}
          Search your Dream Job
        </p>
        <div className="border-2 border-gray-400  space-x-auto  rounded-md lg:p-3 p-5 grid grid-cols-4 gap-5 mt-3 lg:mx-0 mx-5">
          <div className="mt-2 col-span-3  w-full py-[13px] px-2 text-gray-400 text-sm text-left border border-gray-400  rounded-xl">
            <input
            className="w-full px-5 "
              type="text"
              placeholder="search by keyword "
              value={jTSearch}
              onChange={(e) => setJTSearch(e.target.value)}
            />
          </div>

          <div className="flex items-center">
            <button
              onClick={filterByString}
              className="bg-secondary w-full hover:bg-secondary font-s-medium py-3 px-3 rounded text-white"
            >
              Find Job
            </button>
          </div>
        </div>
        <div className="py-10 ">
          <Slider
            {...settingTestominal}
            className="p-0 w-[80%]   md:w-full mx-auto bg-primary   rounded-md "
          >
            {tData.map((t) => (
              <>
                <div className=" bg-white p-2 mx-6 rounded-md my-3">
                  <p className="font-s-medium"> {t.title} </p>
                  <Link>
                    {" "}
                    <div className="flex items-center  gap-5">
                      <p className="font-s-normal text-sm text-secondary lg:whitespace-nowrap">
                        {" "}
                        {t.subtext}
                      </p>{" "}
                      <span className="">
                        {" "}
                        <MdOutlineKeyboardArrowRight className=" text-secondary" />{" "}
                      </span>
                    </div>{" "}
                  </Link>
                </div>
              </>
            ))}
          </Slider>
        </div>
      </div>

      <div className=" grid lg:grid-cols-7 grid-cols-1 gap-8 pt-10 ">
        <div className="bg-slate-50 p-2 md:hidden block lg:mx-0 mx-10">
          <button
            type="button"
            onClick={openModal}
            className="w-full flex items-center gap-2 justify-center "
          >
            <GiSettingsKnobs />
            <span>Edit Filter</span>
          </button>
        </div>
        <div className="lg:col-span-2 lg:px-0 px-5 hidden md:block">
          <div className="bg-primary p-5 rounded-lg">
            <div className="flex items-center">
              <button
                onClick={clearFilters}
                className="bg-red-600 w-full hover:bg-red-800 font-s-medium py-3 rounded text-white"
              >
                Clear Filters
              </button>
            </div>
            <div className="pb-5">
              <p className="font-s-medium lg:text-lg text-base "> Category </p>

              <select
                className="mt-2 px-2 w-full py-[13px] text-gray-400 text-sm text-left rounded-[3px]"
                id="category"
                name="categoryId"
                value={parameters.categoryId}
                onChange={(e) => {
                  setParameters({
                    ...parameters,
                    categoryId: e.target.value,
                  });
                }}
              >
                <option value="">Select Category</option>
                {/* {CandiateCatgoryData.map(() => ( */}
                {CandiateCatgoryData.map((catname, index) => (
                  <option value={catname._id} key={index}>
                    {" "}
                    {catname.name}{" "}
                  </option>
                ))}
              </select>
            </div>
            <div className="pb-5">
              <p className="font-s-medium lg:text-lg text-base "> Skill </p>

              <select
                className="mt-2  w-full py-[13px] px-2 text-gray-400 text-sm text-left rounded-[3px]"
                id="skill"
                name="jobSkill"
                value={parameters.jobSkill}
                onChange={(e) => {
                  setParameters({
                    ...parameters,
                    jobSkill: e.target.value,
                  });
                  setSelectSkill(e.target.name);
                  console.log(selectSkill);
                }}
              >
                <option className="text-sm " value="">
                  Select Skills
                </option>
                {candidateSkills.map((SkillData, index) => (
                  <option value={SkillData._id} name={SkillData.skill}>
                    {SkillData.skill}
                  </option>
                ))}
              </select>
            </div>

            <div className="pb-5">
              <p className="font-s-medium lg:text-lg text-base ">
                {" "}
                Experience Level{" "}
              </p>

              <select
                className="mt-2  w-full py-[13px] px-2 text-gray-400 text-sm text-left rounded-[3px]"
                id="career"
                name="jobExperience"
                value={parameters.jobExperience}
                onChange={(e) => {
                  setParameters({
                    ...parameters,
                    jobExperience: e.target.value,
                  });
                }}
              >
                <option>Select Experience Level</option>

                {CareerLevel.map((CareerLevelData, index) => (
                  <option value={CareerLevelData.value}>
                    {CareerLevelData.name}
                  </option>
                ))}

                {/* <option value="mid-senior">Mid Senior</option>
                <option value="senior">Senior</option> */}
              </select>
            </div>
            <div className="pb-5">
              <p className="font-s-medium lg:text-lg text-base "> Gender </p>

              <select
                className="mt-2  w-full py-[13px] px-2 text-gray-400 text-sm text-left rounded-[3px]"
                id="gender"
                name="gender"
                value={parameters.gender}
                onChange={(e) => {
                  setParameters({
                    ...parameters,
                    gender: e.target.value,
                  });
                }}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Others</option>
              </select>
            </div>

            <div className="pb-7">
              <p className="font-s-medium lg:text-lg text-base"> Location</p>
              <div className="flex pt-2 ">
                <input
                  className="lg:px-3  lg:pl-2 pl-1 w-full py-2 lg:placeholder:text-sm placeholder:text-xs  rounded-l-[3px] "
                  type="text"
                  id="loation"
                  name="location"
                  value={parameters.location}
                  placeholder=" Search Location"
                  onChange={(e) => {
                    setParameters({
                      ...parameters,
                      location: e.target.value,
                    });
                  }}
                />
                <div className=" py-3 lg:pr-3 pr-1   bg-white rounded-r-[3px]">
                  <img
                    alt="location"
                    src="assets/images/location.png "
                    className="pt-1"
                  />
                </div>
              </div>
            </div>

            <div className="pb-5 hidden">
              <p className="font-s-medium lg:text-lg text-base ">
                {" "}
                Perks and Benefits{" "}
              </p>

              <select
                className="mt-2  w-full py-[13px] px-2 text-gray-400 text-sm text-left rounded-[3px]"
                id="benefits"
                name="benefits"
                value={state.benefits}
                onChange={handleChange}
              >
                <option value="cafetaria">Cafetaria</option>
                <option value="flexible time">Flexible Time</option>
                <option value="insurance">Insurance</option>
              </select>
            </div>

            <div className="pb-7">
              <p className="font-s-medium lg:text-lg text-base"> Job Type </p>

              <div className="flex flex-col gap-3 pt-3">
                <>
                  {JobTyeData &&
                    JobTyeData.map((JobTypeData, index) => (
                      <>
                        <div className="flex gap-2  " key={index}>
                          <input
                            type="radio"
                            name="jobType"
                            onChange={(e) => {
                              setParameters({
                                ...parameters,
                                jobType: e.target.value,
                              });
                            }}
                            id={JobTypeData.value}
                            value={JobTypeData.value}
                          />
                          <label
                            className="text-sm font-s-medium"
                            for={JobTypeData.value}
                          >
                            {" "}
                            {JobTypeData.name}
                          </label>
                        </div>
                      </>
                    ))}

                  {/* <div className="flex gap-2  ">
                  <input type="radio" id="Freelance" />
                  <label className="text-sm font-s-medium" for="Freelance">
                    {" "}
                    Freelance
                  </label>
                </div> */}
                </>
              </div>
            </div>

            <div className="pb-5">
              <p className="font-s-medium lg:text-lg text-base"> Industry </p>

              <div className="flex flex-col gap-3 pt-3">
                {candidateIndustry &&
                  candidateIndustry.map((IndustryData, index) => (
                    <div className="flex gap-2 " for={index}>
                      <input
                        type="radio"
                        name="Industry"
                        onChange={(e) => {
                          setParameters({
                            ...parameters,
                            industryId: e.target.value,
                          });
                        }}
                        id={IndustryData._id}
                        value={IndustryData._id}
                      />
                      <label
                        className="text-sm font-s-medium"
                        for={IndustryData._id}
                      >
                        {IndustryData.name}
                      </label>
                    </div>
                  ))}
              </div>

              {/* <button
                onClick={(e) => setIndustry(!industry)}
                className="text-secondary font-s-medium text-sm flex py-1"
              >
                View All <RiArrowRightSFill size={20} />
              </button> */}
              {/* {industry ? (
                <div className="pb-5">
                  <div className="flex flex-col gap-3 pt-3">
                    <div className="flex gap-2 ">
                      <input type="radio" id="html" />
                      <label className="text-sm font-s-medium" for="html">
                        IT Services & Consulting (143)
                      </label>
                    </div>

                    <div className="flex gap-2 ">
                      <input type="radio" id="html" />
                      <label className="text-sm font-s-medium" for="html">
                        Service Product (354)
                      </label>
                    </div>
                  </div>
                </div>
              ) : null} */}
            </div>

            <div className="pb-5 hidden">
              <p className="font-s-medium lg:text-lg text-base">Salary From</p>
              <div className="slider">
                <div className="flex justify-between">
                  <p className=" border border-secondary rounded-md text-center w-[12%] h-full text-sm  px-1 lg:mt-2">
                    {" "}
                    {state.salaryfrom}{" "}
                  </p>
                  <p className=" border border-inputcolor h-full text-sm  px-1 lg:mt-2">
                    {" "}
                    150 000+
                  </p>
                </div>

                <input
                  className=" w-full lg:mt-2"
                  type="range"
                  value={state.salaryfrom}
                  name="salaryfrom"
                  onChange={handleChange}
                  step="1"
                  min="0"
                  max="150 000+"
                />
              </div>
            </div>
            <div className="pb-5 hidden">
              <p className="font-s-medium lg:text-lg text-base">Salary To</p>
              <div className="slider">
                <div className="flex justify-between">
                  <p className=" border border-secondary rounded-md text-center w-[12%] h-full text-sm  px-1 lg:mt-2">
                    {" "}
                    {state.salaryto}{" "}
                  </p>
                  <p className=" border border-inputcolor h-full text-sm  px-1 lg:mt-2">
                    {" "}
                    150 000+
                  </p>
                </div>

                <input
                  className=" w-full lg:mt-2"
                  type="range"
                  value={state.salaryto}
                  name="salaryto"
                  onChange={handleChange}
                  step="1"
                  min="0"
                  max="150 000+"
                />
              </div>
            </div>

            <div className="pb-5">
              <p className="font-s-medium lg:text-lg text-base">
                {" "}
                Career Level
              </p>

              <div className="flex flex-col gap-3 pt-3">
                {CareerLevelData &&
                  CareerLevelData.map((CareerLevel, index) => (
                    <div className="flex gap-2 ">
                      <input
                        type="radio"
                        name="careerLevel"
                        id={CareerLevel.name}
                        value={CareerLevel.name}
                        onChange={(e) => {
                          setParameters({
                            ...parameters,
                            careerLevel: e.target.value,
                          });
                        }}
                      />
                      <label
                        className="text-sm font-s-medium"
                        for={CareerLevel.name}
                      >
                        {CareerLevel.name}
                      </label>
                    </div>
                  ))}

                {/* <div className="flex gap-2 ">
                  <input type="radio" id="Intermediate" name="Experience" />
                  <label className="text-sm font-s-medium" for="Intermediate">
                    Intermediate
                  </label>
                </div> */}

                {/* <div className="flex gap-2 ">
                  <input type="radio" id="Expert" name="Experience" />
                  <label className="text-sm font-s-medium" for="Expert">
                    Expert
                  </label>
                </div> */}

                {/* <div className="flex gap-2 ">
                  <input type="radio" id="Advanced" name="Experience" />
                  <label className="text-sm font-s-medium" for="Advanced">
                    Advanced
                  </label>
                </div> */}
              </div>
            </div>

            <div className="hidden">
              <p className="font-s-medium lg:text-lg text-base"> Job Posted</p>

              <div className="grid grid-cols-3 space-x-5 py-2">
                <button className="bg-white rounded-md py-1.5 text-sm">
                  Recent
                </button>
                <button className="bg-white rounded-md py-1.5 text-sm">
                  {" "}
                  7 Days
                </button>
                <button className="bg-white rounded-md py-1.5 text-sm">
                  15 Days
                </button>
              </div>
            </div>
          </div>

          {/* <div className="pt-8 pb-12">
            <div
              className="bg-cover h-[45vh] w-full"
              style={{
                backgroundImage: `url("assets/images/recruiting.png")`,
              }}
            >
              <div className=" bg-[#2544eea6]  h-[45vh] relative flex md:justify-center rounded-lg ">
                <div>
                  <h3 className=" md:px-8 px-5 pt-16 text-white font-semibold text-4xl font-s-medium">
                    Recruiting?
                  </h3>
                  <p className=" md:px-8 px-5 pt-5 text-white font-s-normal">
                    {" "}
                    Get Best Matched Jobs On your Email. Add Resume NOW!{" "}
                  </p>
                  <div className="px-8 py-3">
                    <button className="bg-white text-secondary px-6 py-1 rounded-md">
                      {" "}
                      Read More{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>

        <div className="lg:col-span-5">
          <div className="grid md:grid-cols-3 px-10 lg:py-0 py-10">
            <p className="md:col-span-1 text-lg font-s-medium  flex items-end">
              {" "}
              Showing {LngthData} jobs{" "}
            </p>
            <div className="md:col-span-2 ">
              <div className="md:flex gap-4 md:pt-2 pt-4 items-end justify-end">
                <p className="text-lg  font-s-medium"> Sort By </p>
                <select
                  className="bg-[#EFF5FF] px-5 py-2 lg:mt-0 mt-2 md:w-[40%] w-full rounded-[3px]"
                  name="update"
                  id="update"
                >
                  <option value="category1">Most Recent</option>
                  <option value="category2">Last Updated</option>
                  <option value="category3">Category 3</option>
                  <option value="category4">Category 4</option>
                </select>
                <select
                  className="bg-[#EFF5FF] px-5 py-2 lg:mt-0 mt-5 md:w-[30%] w-full rounded-[3px]"
                  name="last"
                  id="last"
                  onChange={(e) => setJobNumber(e.target.value)}
                >
                  <option value="5">Show 5</option>
                  <option value="10">Show 10</option>
                  <option value="15">Show 15</option>
                  <option value="20">Show 20</option>
                  <option value="25">Show 25</option>
                  <option value="30">Show 30</option>
                  <option value="35">Show 35</option>
                  <option value="40">Show 40</option>
                  <option value="45">Show 45</option>
                  <option value="50">Show 50</option>
                  <option value="55">Show 55</option>
                  <option value="60">Show 60</option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <div className="grid grid-cols-1   mx-auto lg:pt-20 gap-8 gap-y-10 px-6  items-center justify-items-center">
              {searchJobData &&
                searchJobData
                  
                  
                  .map((item, id) => {
                    // console.log("Number", id);
                    return (
                      <>
                        {item.employerId !== null ? (
                          <>
                            {id % 4 === 0 && id > 1 && (
                              <div className="w-full block">
                                {" "}
                                <div className="pt-10">
                                  <div className="bg-secondary  grid md:grid-cols-5 items-center justify-center px-10 py-8 rounded-md">
                                    <img
                                      className="md:col-span-1"
                                      src="assets/images/icon-extra.png"
                                      alt="image"
                                    />
                                    <p className="font-s-normal text-white md:col-span-3">
                                      {" "}
                                      Create your{" "}
                                      <span className="font-s-medium">
                                        Job Profile
                                      </span>{" "}
                                      for free on Naukri to explore top{" "}
                                      <span className="font-s-medium">
                                        {" "}
                                        Jobs{" "}
                                      </span>{" "}
                                      applied by your peers!
                                    </p>

                                    <div className=" md:col-span-1 rounded-md bg-white">
                                      {" "}
                                      <p className=" text-secondary font-s-medium text-sm text-center py-2">
                                        {" "}
                                        Register Now{" "}
                                      </p>{" "}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                            <div className="w-full block">
                              <div
                                className="bg-white box-shadow  rounded-xl relative  pb-7"
                                key={id}
                              >
                                <div className="grid md:grid-cols-12 gap-2">
                                  <div className="md:col-span-2">
                                    <div className="absolute flex md:p-5 bg-white box-shadow1 rounded-xl left-[34%]  lg:-bottom-3   md:left-2">
                                      <img
                                        src={
                                          item.employerId
                                            ? item.employerId.image
                                            : null
                                        }
                                        alt="Image"
                                        width={100}
                                        height={100}
                                      />
                                    </div>
                                  </div>
                                  <div className="md:col-span-5 lg:pl-8 pl-3 md:pt-8 pt-10">
                                    <div className="flex flex-col gap-3 lg:pt-0 pt-16 ">
                                      <div className=" ">
                                        <Link to={`/job-details/${item._id}`}>
                                          <p className="text-base font-s-medium text-black ">
                                            {item.jobTitle}
                                          </p>
                                        </Link>
                                      </div>
                                      <div className="">
                                        <p className="text-[#060606] text-sm  font-s-medium text-opacity-70">
                                          {item.location}, {item.state},{" "}
                                          {item.country}
                                        </p>
                                      </div>
                                      <div className="">
                                        <p className="text-secondary text-sm font-s-medium ">
                                          {item?.employerId?.website}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="md:col-span-2  flex md:justify-center md:items-start lg:pt-8 md:px-0 px-4">
                                    <div className="text-[#41B249] font-s-medium ">
                                      {CurrentDate(
                                        item.updatedAt.substring(0, 10)
                                      )}{" "}
                                      days ago
                                    </div>
                                  </div>
                                  <div className="md:col-span-3 md:pr-3 gap-3 md:pt-0  md:px-0 px-4 flex flex-col md:justify-end md:items-end">
                                    <div className="">
                                      <div
                                        className={`{ text-white font-s-medium text-sm px-3  text-center rounded-md py-[0.32rem] mb-7  ${
                                          item.jobType[0] === "Internship"
                                            ? "bg-[#AB6B35]"
                                            : item.jobType[0] === "Fulltime"
                                            ? "bg-[#8C82EA]"
                                            : item.jobType[0] === "Part-Time"
                                            ? " bg-[#D2628C]"
                                            : item.jobType[0] === "Freelancer"
                                            ? " bg-[#2D9BB3]"
                                            : "bg-[#41B249]"
                                        }`}
                                      >
                                        {item.jobType[0]}
                                      </div>
                                    </div>
                                    <div className="font-s-medium  text-[13px]">
                                      {item.salaryFrom} - {item.salaryTo} /{" "}
                                      {item.salaryPeriod}
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
                        ) : null}
                      </>
                    );
                  })}     
            </div>
          </div>
        </div>
      </div>

      <div className="md:flex hidden items-center justify-center pt-16 bg-white px-4 py-3 sm:px-6">
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
                <BsChevronRight className="h-5 w-5" aria-hidden="true" />
              </NavLink>
            </nav>
          </div>
        </div>
      </div>
      {/* modal start */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full transform overflow-hidden mt-28 rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="pb-5 bg-primary">
                    <p className="font-s-medium lg:text-lg text-base ">
                      {" "}
                      Category{" "}
                    </p>

                    <select
                      className="mt-2 px-2 w-full py-[13px] text-gray-400 text-sm text-left rounded-[3px]"
                      id="category"
                      name="category"
                      value={state.category}
                      onChange={handleChange}
                    >
                      <option className="text-sm " value="category1">
                        Category 1
                      </option>
                      <option value="category2">Category 2</option>
                      <option value="category3">Category 3</option>
                      <option value="category4">Category 4</option>
                    </select>
                  </div>

                  <div className="pb-5">
                    <p className="font-s-medium lg:text-lg text-base ">
                      {" "}
                      Skill{" "}
                    </p>

                    <select
                      className="mt-2  w-full py-[13px] px-2 text-gray-400 text-sm text-left rounded-[3px]"
                      id="skill"
                      name="skill"
                      value={state.skill}
                      onChange={handleChange}
                    >
                      <option className="text-sm " value="skill1">
                        Skill 1
                      </option>
                      <option value="skill2">Skill 2</option>
                      <option value="skill3">Skill 3</option>
                      <option value="skill4">Skill 4</option>
                    </select>
                  </div>

                  <div className="pb-5">
                    <p className="font-s-medium lg:text-lg text-base ">
                      {" "}
                      Experience Level
                    </p>

                    <select
                      className="mt-2  w-full py-[13px] px-2 text-gray-400 text-sm text-left rounded-[3px]"
                      id="level"
                      name="level"
                      value={state.level}
                      onChange={handleChange}
                    >
                      <option className="text-sm " value="level1">
                        Career Level
                      </option>
                      <option value="level2">level 2</option>
                      <option value="level3">level 3</option>
                      <option value="level4">level 4</option>
                    </select>
                  </div>

                  <div className="pb-5">
                    <p className="font-s-medium lg:text-lg text-base ">
                      Gender{" "}
                    </p>

                    <select
                      className="mt-2  w-full py-[13px] px-2 text-gray-400 text-sm text-left rounded-[3px]"
                      id="gender"
                      name="gender"
                      value={state.gender}
                      onChange={handleChange}
                    >
                      <option className="text-sm " value="Gender1">
                        Gender
                      </option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>

                  <div className="pb-7">
                    <p className="font-s-medium lg:text-lg text-base">
                      {" "}
                      Location
                    </p>
                    <div className="flex pt-2 ">
                      <input
                        className="lg:px-3  lg:pl-2 pl-1 w-full py-2 lg:placeholder:text-sm placeholder:text-xs  rounded-l-[3px] "
                        type="text"
                        id="loation"
                        name="location"
                        placeholder=" Search Location"
                        onChange={handleChange}
                        value={state.location}
                      />
                      <div className=" py-3 lg:pr-3 pr-1   bg-white rounded-r-[3px]">
                        <img
                          alt="location"
                          src="assets/images/location.png "
                          className="pt-1"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="pb-5 hidden">
                    <p className="font-s-medium lg:text-lg text-base ">
                      {" "}
                      Perks and Benefits{" "}
                    </p>

                    <select
                      className="mt-2  w-full py-[13px] px-2 text-gray-400 text-sm text-left rounded-[3px]"
                      id="benefits"
                      name="benefits"
                      value={state.benefits}
                      onChange={handleChange}
                    >
                      <option value="cafetaria">Cafetaria</option>
                      <option value="flexible time">Flexible Time</option>
                      <option value="insurance">Insurance</option>
                    </select>
                  </div>

                  <div className="pb-7">
                    <p className="font-s-medium lg:text-lg text-base">
                      {" "}
                      Job Type{" "}
                    </p>

                    <div className="flex flex-col gap-3 pt-3">
                      <div className="flex gap-2  ">
                        <input type="checkbox" id="text" />
                        <label className="text-sm font-s-medium" for="text">
                          {" "}
                          Freelance
                        </label>
                      </div>

                      <div className="flex gap-2 ">
                        <input type="checkbox" id="text" />
                        <label className="text-sm font-s-medium" for="text">
                          {" "}
                          Full Time
                        </label>
                      </div>

                      <div className="flex gap-2 ">
                        <input type="checkbox" id="text" />
                        <label className="text-sm font-s-medium" for="text">
                          {" "}
                          Internship
                        </label>
                      </div>

                      <div className="flex gap-2 ">
                        <input type="checkbox" id="text" />
                        <label className="text-sm font-s-medium" for="text">
                          {" "}
                          Part Time
                        </label>
                      </div>

                      <div className="flex gap-2 ">
                        <input type="checkbox" id="text" />
                        <label className="text-sm font-s-medium" for="text">
                          {" "}
                          Temporary
                        </label>
                      </div>

                      <div className="flex gap-2 ">
                        <input type="checkbox" id="text" />
                        <label className="text-sm font-s-medium" for="text">
                          {" "}
                          Volunteer
                        </label>
                      </div>
                      <button
                        onClick={(e) => setJobType(!jobType)}
                        className="text-secondary font-s-medium text-sm flex py-1"
                      >
                        View All <RiArrowRightSFill size={20} />
                      </button>
                      {jobType ? (
                        <div className="pb-5">
                          <div className="flex flex-col gap-3 pt-3">
                            <div className="flex gap-2 ">
                              <input type="radio" id="html" />
                              <label
                                className="text-sm font-s-medium"
                                for="html"
                              >
                                IT Services & Consulting (143)
                              </label>
                            </div>

                            <div className="flex gap-2 ">
                              <input type="radio" id="html" />
                              <label
                                className="text-sm font-s-medium"
                                for="html"
                              >
                                Service Product (354)
                              </label>
                            </div>

                            <div className="flex gap-2 ">
                              <input type="radio" id="html" />
                              <label
                                className="text-sm font-s-medium"
                                for="html"
                              >
                                E-Learning/ EdTech (435)
                              </label>
                            </div>

                            <div className="flex gap-2 ">
                              <input type="radio" id="html" />
                              <label
                                className="text-sm font-s-medium"
                                for="html"
                              >
                                Financial Services (555)
                              </label>
                            </div>

                            <div className="flex gap-2 ">
                              <input type="radio" id="html" />
                              <label
                                className="text-sm font-s-medium"
                                for="html"
                              >
                                Engineering and Construction (876)
                              </label>
                            </div>
                          </div>
                        </div>
                      ) : null}
                    </div>
                  </div>

                  <div className="pb-5">
                    <p className="font-s-medium lg:text-lg text-base">
                      {" "}
                      Industry{" "}
                    </p>

                    <div className="flex flex-col gap-3 pt-3">
                      <div className="flex gap-2 ">
                        <input type="radio" id="html" />
                        <label className="text-sm font-s-medium" for="html">
                          IT Services & Consulting (143)
                        </label>
                      </div>

                      <div className="flex gap-2 ">
                        <input type="radio" id="html" />
                        <label className="text-sm font-s-medium" for="html">
                          Service Product (354)
                        </label>
                      </div>

                      <div className="flex gap-2 ">
                        <input type="radio" id="html" />
                        <label className="text-sm font-s-medium" for="html">
                          E-Learning/ EdTech (435)
                        </label>
                      </div>

                      <div className="flex gap-2 ">
                        <input type="radio" id="html" />
                        <label className="text-sm font-s-medium" for="html">
                          Financial Services (555)
                        </label>
                      </div>

                      <div className="flex gap-2 ">
                        <input type="radio" id="html" />
                        <label className="text-sm font-s-medium" for="html">
                          Engineering and Construction (876)
                        </label>
                      </div>
                    </div>

                    <button
                      onClick={(e) => setIndustry(!industry)}
                      className="text-secondary font-s-medium text-sm flex py-1"
                    >
                      View All <RiArrowRightSFill size={20} />
                    </button>
                    {industry ? (
                      <div className="pb-5">
                        <div className="flex flex-col gap-3 pt-3">
                          <div className="flex gap-2 ">
                            <input type="radio" id="html" />
                            <label className="text-sm font-s-medium" for="html">
                              IT Services & Consulting (143)
                            </label>
                          </div>

                          <div className="flex gap-2 ">
                            <input type="radio" id="html" />
                            <label className="text-sm font-s-medium" for="html">
                              Service Product (354)
                            </label>
                          </div>
                        </div>
                      </div>
                    ) : null}
                  </div>

                  <div className="pb-5">
                    <p className="font-s-medium lg:text-lg text-base">
                      {" "}
                      Salary{" "}
                    </p>

                    <div className="flex flex-col gap-3 pt-3">
                      <div className="flex gap-2 ">
                        <input
                          type="radio"
                          id="html"
                          name="fav_language"
                          value="HTML"
                        />
                        <label className="text-sm font-s-medium" for="html">
                          0-3 Lakhs
                        </label>
                      </div>

                      <div className="flex gap-2 ">
                        <input
                          type="radio"
                          id="html"
                          name="fav_language"
                          value="HTML"
                        />
                        <label className="text-sm font-s-medium" for="html">
                          3-6 Lakhs
                        </label>
                      </div>

                      <div className="flex gap-2 ">
                        <input
                          type="radio"
                          id="html"
                          name="fav_language"
                          value="HTML"
                        />
                        <label className="text-sm font-s-medium" for="html">
                          6-10 Lakhs
                        </label>
                      </div>

                      <div className="flex gap-2 ">
                        <input
                          type="radio"
                          id="html"
                          name="fav_language"
                          value="HTML"
                        />
                        <label className="text-sm font-s-medium" for="html">
                          10-15 Lakhs
                        </label>
                      </div>

                      <div className="flex gap-2 ">
                        <input
                          type="radio"
                          id="html"
                          name="fav_language"
                          value="HTML"
                        />
                        <label className="text-sm font-s-medium" for="html">
                          15-25 Lakhs
                        </label>
                      </div>
                      <div className="flex gap-2 ">
                        <input
                          type="radio"
                          id="html"
                          name="fav_language"
                          value="HTML"
                        />
                        <label className="text-sm font-s-medium" for="html">
                          More than 25 Lakhs
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="pb-5">
                    <p className="font-s-medium lg:text-lg text-base">
                      {" "}
                      Company Size{" "}
                    </p>

                    <div className="flex flex-col gap-3 pt-3">
                      <div className="flex gap-2 ">
                        <input type="radio" id="html" />
                        <label className="text-sm font-s-medium" for="html">
                          1-50 Employees
                        </label>
                      </div>

                      <div className="flex gap-2 ">
                        <input type="radio" id="html" />
                        <label className="text-sm font-s-medium" for="html">
                          50-200 Employees
                        </label>
                      </div>

                      <div className="flex gap-2 ">
                        <input type="radio" id="html" />
                        <label className="text-sm font-s-medium" for="html">
                          200-500 Employees
                        </label>
                      </div>

                      <div className="flex gap-2 ">
                        <input type="radio" id="html" />
                        <label className="text-sm font-s-medium" for="html">
                          500-1,000 Employees
                        </label>
                      </div>

                      <div className="flex gap-2 ">
                        <input type="radio" id="html" />
                        <label className="text-sm font-s-medium" for="html">
                          1,000-5,000 Employees
                        </label>
                      </div>

                      <div className="flex gap-2 ">
                        <input type="radio" id="html" />
                        <label className="text-sm font-s-medium" for="html">
                          10,000+ Employees
                        </label>
                      </div>
                      <button
                        onClick={(e) => setCompanySize(!companySize)}
                        className="text-secondary font-s-medium text-sm flex py-1"
                      >
                        View All <RiArrowRightSFill size={20} />
                      </button>
                      {companySize ? (
                        <div className="pb-5">
                          <div className="flex flex-col gap-3 pt-3">
                            <div className="flex gap-2 ">
                              <input type="radio" id="html" />
                              <label
                                className="text-sm font-s-medium"
                                for="html"
                              >
                                IT Services & Consulting (143)
                              </label>
                            </div>

                            <div className="flex gap-2 ">
                              <input type="radio" id="html" />
                              <label
                                className="text-sm font-s-medium"
                                for="html"
                              >
                                Service Product (354)
                              </label>
                            </div>
                          </div>
                        </div>
                      ) : null}
                    </div>
                  </div>

                  <div className="pb-5 hidden">
                    <p className="font-s-medium lg:text-lg text-base">
                      Salary From
                    </p>
                    <div className="slider py-1">
                      <div className="flex justify-between pb-3">
                        <p className=" border border-secondary rounded-md text-center w-[12%] h-full text-sm  px-1 lg:mt-2">
                          {" "}
                          {state.salaryfrom}{" "}
                        </p>
                        <p className=" border border-inputcolor h-full text-sm  px-1 lg:mt-2">
                          {" "}
                          150 000+
                        </p>
                      </div>

                      <input
                        className=" w-full lg:mt-2"
                        type="range"
                        value={state.salaryfrom}
                        name="salaryfrom"
                        onChange={handleChange}
                        step="1"
                        min="0"
                        max="150 000+"
                      />
                    </div>
                  </div>
                  <div className="pb-5 hidden">
                    <p className="font-s-medium lg:text-lg text-base ">
                      Salary To
                    </p>
                    <div className="slider py-2">
                      <div className="flex justify-between pb-3">
                        <p className=" border border-secondary rounded-md text-center w-[12%] h-full text-sm  px-1 lg:mt-2">
                          {" "}
                          {state.salaryto}{" "}
                        </p>
                        <p className=" border border-inputcolor h-full text-sm  px-1 lg:mt-2">
                          {" "}
                          150 000+
                        </p>
                      </div>

                      <input
                        className=" w-full lg:mt-2"
                        type="range"
                        value={state.salaryto}
                        name="salaryto"
                        onChange={handleChange}
                        step="1"
                        min="0"
                        max="150 000+"
                      />
                    </div>
                  </div>

                  <div className="pb-5">
                    <p className="font-s-medium lg:text-lg text-base">
                      {" "}
                      Experience Level
                    </p>

                    <div className="flex flex-col gap-3 pt-3">
                      <div className="flex gap-2 ">
                        <input type="radio" id="html" />
                        <label className="text-sm font-s-medium" for="html">
                          Begineer
                        </label>
                      </div>

                      <div className="flex gap-2 ">
                        <input type="radio" id="html" />
                        <label className="text-sm font-s-medium" for="html">
                          Intermidate
                        </label>
                      </div>

                      <div className="flex gap-2 ">
                        <input type="radio" id="html" />
                        <label className="text-sm font-s-medium" for="html">
                          Expert
                        </label>
                      </div>

                      <div className="flex gap-2 ">
                        <input type="radio" id="html" />
                        <label className="text-sm font-s-medium" for="html">
                          Advanced
                        </label>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="font-s-medium lg:text-lg text-base">
                      {" "}
                      Job Posted
                    </p>

                    <div className="grid grid-cols-3 space-x-5 py-2">
                      <button className="bg-inputcolor rounded-md py-1.5 text-sm">
                        Recent
                      </button>
                      <button className="bg-inputcolor rounded-md py-1.5 text-sm">
                        {" "}
                        7 Days
                      </button>
                      <button className="bg-inputcolor rounded-md py-1.5 text-sm">
                        15 Days
                      </button>
                    </div>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      View Results
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      {/* modal end */}
    </div>
  );
};

export default Jobs;
