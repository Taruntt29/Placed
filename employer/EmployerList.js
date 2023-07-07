import React, { Fragment, useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Slider from "react-slick";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { RiArrowRightSFill } from "react-icons/ri";
import { GiSettingsKnobs } from "react-icons/gi";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Dialog, Transition } from "@headlessui/react";
import {
  candidateIndustryAPI,
  candidateEmployeeJobSearchAPI,
  setFavEmployer,
} from "../../api/authCandidate";
import { useSelector } from "react-redux";
const EmployerList = () => {
  const [industry, setIndustry] = useState();
  const [companySize, setCompanySize] = useState();
  const [establish, setEstablish] = useState();
  const [candidateIndustry, setCandidateIndustry] = useState([]);
  const [parameterEmployee, setParameters] = useState({});
  const [age, setAge] = useState({ minYear: 0, maxYear: 20 });
  const [EmployeeListData, setEmployeeListJob] = useState([]);
  const [numberSetShow, setJobNumber] = useState(10);
  const [term, SetTerm] = useState("");
  const [state, setState] = useState({
    experience: "0",
    keyWord: "",
    category: "",
    location: "",
  });
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const { userDetails } = useSelector((state) => state.flightReducer)

  const setFavComp = async (empId) => {
    try {
      const response = await setFavEmployer(
        {
          candidateId : userDetails._id,
          employerId : empId
        }
      )
    } catch (error) {
      console.log(error);
    }
  }

  console.log("Min Max Age Data", age);

  console.log(parameterEmployee);

  const CandidateInDustry = async () => {
    try {
      const response = await candidateIndustryAPI();
      console.log("Data Found", response.data);
      setCandidateIndustry(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const CandidateEmployeeSearch = async (parameterEmployee) => {
    try {
      const response = await candidateEmployeeJobSearchAPI(parameterEmployee);
      console.log("Data Found", response.data);
      setEmployeeListJob(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const Estbyear = [
    {
      id: 1,
      minYear: 1995,
      maxYear: 2000,
      label: "1995 - 2000",
    },
    {
      id: 2,
      minYear: 2000,
      maxYear: 2005,
      label: "2000 - 2005",
    },
    {
      id: 3,
      minYear: 2005,
      maxYear: 2010,
      label: "2005 - 2010",
    },
    {
      id: 4,
      minYear: 2010,
      maxYear: 2015,
      label: "2010 - 2015",
    },
    {
      id: 5,
      minYear: 2015,
      maxYear: 2020,
      label: "2015 - 2020",
    },
    {
      id: 6,
      minYear: 2020,
      maxYear: 2025,
      label: "2020 - 2025",
    },
  ];

  const clearFilters = () => {
    setParameters({});
    CandidateEmployeeSearch()
  }

  useEffect(() => {
    CandidateInDustry();
    CandidateEmployeeSearch(parameterEmployee);
  }, [parameterEmployee]);

  const jobData = [
    {
      id: 1,
      logourl: "/assets/images/logo1.png",
      name: "Baldota Group",
      text1: "Corporate",
      text2: "Industrial/ Machinery",
      rating: "4 | 274 reviews",
    },
    {
      id: 2,
      logourl: "/assets/images/logo2.png",
      name: "Baldota Group",
      text1: "Corporate",
      text2: "Industrial/ Machinery",
      rating: "4 | 274 reviews",
    },
    {
      id: 3,
      logourl: "/assets/images/logo3.png",
      name: "Baldota Group",
      text1: "Corporate",
      text2: "Industrial/ Machinery",
      rating: "4 | 274 reviews",
    },
    {
      id: 4,
      logourl: "/assets/images/logo5.png",
      name: "Baldota Group",
      text1: "Corporate",
      text2: "Industrial/ Machinery",
      rating: "4 | 274 reviews",
    },
    {
      id: 5,
      logourl: "/assets/images/logo6.png",
      name: "Baldota Group",
      text1: "Corporate",
      text2: "Industrial/ Machinery",
      rating: "4 | 274 reviews",
    },
    {
      id: 6,
      logourl: "/assets/images/logo2.png",
      name: "Baldota Group",
      text1: "Corporate",
      text2: "Industrial/ Machinery",
      rating: "4 | 274 reviews",
    },
    {
      id: 7,
      logourl: "/assets/images/logo3.png",
      name: "Baldota Group",
      text1: "Corporate",
      text2: "Industrial/ Machinery",
      rating: "4 | 274 reviews",
    },
    {
      id: 8,
      logourl: "/assets/images/logo5.png",
      name: "Baldota Group",
      text1: "Corporate",
      text2: "Industrial/ Machinery",
      rating: "4 | 274 reviews",
    },
    {
      id: 9,
      logourl: "/assets/images/logo1.png",
      name: "Baldota Group",
      text1: "Corporate",
      text2: "Industrial/ Machinery",
      rating: "4 | 274 reviews",
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

  return (
    <>
      <div className="container mx-auto py-10">
        <div className="pt-10">
          <p className="text-4xl text-grey font-s-bold text-center">
            {" "}
            Top Companies List
          </p>
          <div className="py-10">
            <Slider
              {...settingTestominal}
              className="p-0 w-[70%] md:w-full mx-auto bg-primary px-7 rounded-md"
            >
              {tData.map((t) => (
                <>
                  <div className=" bg-white p-2 mx-6 my-3 rounded-md">
                    <p className="font-s-medium"> {t.title} </p>
                    <Link>
                      {" "}
                      <div className="flex items-center  gap-5">
                        <p className="font-s-normal text-sm text-secondary">
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

        <div className=" grid lg:grid-cols-7 grid-cols-1 gap-4 pt-10">
          <div className="bg-slate-50 p-2 md:hidden block lg:mx-0 mx-10">
            <button
              type="button"
              onClick={openModal}
              className="w-full flex items-center gap-2 justify-center  "
            >
              <GiSettingsKnobs />
              <span>Edit Filter</span>
            </button>
          </div>
          <div className="lg:col-span-2 lg:px-0 px-5 md:block hidden">
            <div className="bg-primary p-5 rounded-lg">
              <div className="pb-5 hidden">
                <p className="font-s-medium lg:text-lg text-base ">
                  {" "}
                  Category{" "}
                </p>

                <select
                  className="mt-2 px-2 w-full py-[13px] text-gray-400 text-sm text-left rounded-[3px]"
                  name="category"
                  id="category"
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
              <div className="flex items-center">
            <button onClick={clearFilters} className="bg-red-600 w-full hover:bg-red-800 font-s-medium py-3 rounded text-white">
              Clear Filters
            </button>
          </div>

              <div className="pb-5">
                <p className="font-s-medium lg:text-lg text-base"> Keywords</p>
                <div className="flex pt-2  ">
                  <input
                    className="lg:px-3  lg:pl-2 pl-1  py-2 w-full lg:placeholder:text-sm placeholder:text-xs rouneded-l-[3px]"
                    type="text"
                    id="job"
                    name="companyName"
                    value={term}
                    onChange={(e) => SetTerm(e.target.value)}
                  />
                  <div className="  py-3 lg:pr-2 pr-1 bg-white rounded-r-[3px]">
                    <img
                      alt="search bar"
                      src="/assets/images/magnifying-glass.png"
                    />
                  </div>
                </div>
              </div>

              <div className="pb-7">
                <p className="font-s-medium lg:text-lg text-base"> Location</p>
                <div className="flex pt-2 ">
                  <input
                    className="lg:px-3  lg:pl-2 pl-1 w-full py-2 lg:placeholder:text-sm placeholder:text-xs rounded-l-[3px]  "
                    type="text"
                    id="loation"
                    name="location"
                    value={parameterEmployee.location}
                    placeholder=" Search Location"
                    onChange={(e) => {
                      setParameters({
                        ...parameterEmployee,
                        city: e.target.value,
                      });
                    }}
                  />
                  <div className=" py-3 lg:pr-3 pr-1   bg-white rounded-r-[3px]">
                    <img
                      src="/assets/images/location.png "
                      alt="Logo"
                      className="pt-1"
                    />
                  </div>
                </div>
              </div>

              <div className="pb-7 hidden">
                <p className="font-s-medium lg:text-lg text-base">
                  {" "}
                  Company Type{" "}
                </p>

                <div className="flex flex-col gap-3 pt-3">
                  <div className="flex gap-2 ">
                    <input type="checkbox" id="text" />
                    <label className="text-sm font-s-medium" for="text">
                      {" "}
                      MNCs
                    </label>
                  </div>

                  <div className="flex gap-2 ">
                    <input type="checkbox" id="text" />
                    <label className="text-sm font-s-medium" for="text">
                      {" "}
                      Partnerships
                    </label>
                  </div>

                  <div className="flex gap-2 ">
                    <input type="checkbox" id="text" />
                    <label className="text-sm font-s-medium" for="text">
                      {" "}
                      Limited Liability Company
                    </label>
                  </div>

                  <div className="flex gap-2 ">
                    <input type="checkbox" id="text" />
                    <label className="text-sm font-s-medium" for="text">
                      {" "}
                      Sole proprietorship
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
              </div>

              <div className="pb-5">
                <p className="font-s-medium lg:text-lg text-base"> Industry </p>

                <div className="flex flex-col gap-3 pt-3">
                  {candidateIndustry &&
                    candidateIndustry.map((IndustryData, index) => (
                      <div className="flex gap-2 " for={index}>
                        <input
                          type="radio"
                          name="industryId"
                          onChange={(e) => {
                            setParameters({
                              ...parameterEmployee,
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
                          Engineering and Construction (876)
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

              <div className="pb-5">
                <p className="font-s-medium lg:text-lg text-base">
                  {" "}
                  Estabilished Years
                </p>

                <div className="flex flex-col gap-3 pt-3">
                  {/* <div className="flex gap-2 ">
                    <input type="radio" id="html" />
                    <label className="text-sm font-s-medium" for="html">
                      1997 - 2000
                    </label>
                  </div> */}

                  {/* <div className="flex gap-2 ">
                    <input type="radio" id="html" />
                    <label className="text-sm font-s-medium" for="html">
                      2001 - 2005
                    </label>
                  </div> */}

                  {/* <div className="flex gap-2 ">
                    <input type="radio" id="html" />
                    <label className="text-sm font-s-medium" for="html">
                      2006 - 2010
                    </label>
                  </div> */}

                  {/* <div className="flex gap-2 ">
                    <input type="radio" id="html" />
                    <label className="text-sm font-s-medium" for="html">
                      2011 - 2015
                    </label>
                  </div> */}
                  {Estbyear.map((EsYearData) => (
                    <div className="flex gap-2 ">
                      <input
                        type="radio"
                        min={EsYearData}
                        name="estbyear"
                        max={99}
                        onChange={({ minYear, maxYear }) => {
                          setAge({
                            minYear: EsYearData.minYear,
                            maxYear: EsYearData.maxYear,
                          });
                          setParameters({
                            ...parameterEmployee,
                            minYear: EsYearData.minYear,
                            maxYear: EsYearData.maxYear,
                          });
                        }}
                        id={EsYearData.id}
                      />
                      <label
                        className="text-sm font-s-medium"
                        for={EsYearData.id}
                      >
                        {EsYearData.label}
                      </label>
                    </div>
                  ))}
                </div>

                {/* <button
                  onClick={(e) => setEstablish(!establish)}
                  className="text-secondary font-s-medium text-sm flex py-1"
                >
                  View All <RiArrowRightSFill size={20} />
                </button> */}
                {/* {establish ? (
                  <div className="pb-5">
                    <div className="flex flex-col gap-3 pt-3">
                      <div className="flex gap-2 ">
                        <input type="radio" id="html" />
                        <label className="text-sm font-s-medium" for="html">
                          2016-2020 Years
                        </label>
                      </div>
                    </div>
                  </div>
                ) : null} */}
              </div>
            </div>

            <div className="pt-8 pb-12">
              <div
                className="bg-cover h-[45vh] w-full"
                style={{
                  backgroundImage: `url("/assets/images/recruiting.png")`,
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
                     <Link to="/candidate-signup"> <button className="bg-white text-secondary px-6 py-1 rounded-md">
                        {" "}
                        Read More{" "}
                      </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="grid md:grid-cols-3 lg:px-10 px-10 lg:py-0 py-10">
              <p className="md:col-span-1 text-lg font-s-medium  flex items-end">
                {" "}
                Showing 2,150 jobs{" "}
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
              <div className="grid md:grid-cols-2 grid-cols-1 mx-auto md:pt-20 md:gap-8 gap-y-10   items-center justify-items-center">
                {/* {jobData.map((item, id) => { */}

                {EmployeeListData &&
                  EmployeeListData.filter(({ companyName }) => {
                    return companyName.indexOf(term) >= 0;
                  }).map((item, id) => {
                    return (
                      <>
                        {id % 4 === 0 && id > 1 && (
                          <div className="md:col-span-2">
                            {" "}
                            <div className="pt-10 ">
                              <div className="bg-secondary  grid grid-cols-5 items-center justify-center px-10 py-8 rounded-md">
                                <img
                                  className="col-span-1"
                                  src="/assets/images/icon-extra.png"
                                  alt="images"
                                />
                                <p className="font-s-normal text-white col-span-3">
                                  {" "}
                                  Create your{" "}
                                  <span className="font-s-medium">
                                    Job Profile
                                  </span>{" "}
                                  for free on Naukri to explore top{" "}
                                  <span className="font-s-medium"> Jobs </span>{" "}
                                  applied by your peers!
                                </p>
                                <div className=" col-span-1 rounded-md bg-white">
                                  {" "}
                                <Link to="/candidate-signup">  <p className=" text-secondary font-s-normal text-sm text-center py-2">
                                    {" "}
                                    Register Now{" "}
                                  </p>{" "}
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                        <div className="w-full">
                          <div
                            className="bg-white box-shadow  rounded-xl relative  pb-7"
                            key={id}
                          >
                            <div className="grid md:grid-cols-10 gap-2 ">
                              <div className="md:col-span-3">
                                <div className="absolute flex md:p-2 bg-white box-shadow1 rounded-xl left-[34%]  lg:-bottom-3   md:left-2">
                                  <img
                                    src={item.image}
                                    alt="/"
                                    width={80}
                                    height={80}
                                  />
                                </div>
                              </div>
                              <div className="md:col-span-7  md:pt-8 pt-20">
                              <div className="" onClick={(e) => setFavComp(item._id)}>
                            <AiFillStar
                              className="text-secondary absolute lg:bottom-28 bottom-56 right-2 "
                              size={28}
                            />
                          </div>
                                <div className="flex flex-col gap-3 ">
                                  <Link to={`/employer-detail/${item._id}`}>
                                    <p className="text-base text-center md:text-left font-s-medium text-black ">
                                      {item.companyName}
                                    </p>
                                  </Link>
                                  <small>
                                    {" "}
                                    {item.city}, {item.state}, {item.country}{" "}
                                  </small>
                                  {/* <div className="flex gap-2 items-center justify-center lg:justify-start">
                                  <img
                                    className="w-4 h-4"
                                    src="assets/images/star.png"
                                    alt=""
                                  />
                                  <p className="text-[#060606] text-sm  font-s-medium text-opacity-70">
                                    {item.rating}
                                  </p>
                                </div> */}

                                  <div className="grid grid-cols-3 gap-1 pr-2">
                                    <div className="col-span-2">
                                      <p className="text-[#707070] text-[13px] font-s-medium px-1 py-1 border border-[#707070] rounded-md bg-white ">
                                        {item.industryId
                                          ? item.industryId.name
                                          : null}
                                      </p>
                                    </div>
                                    <div className="col-span-1">
                                      <p className="text-[#707070] text-[13px] font-s-medium px-1 py-1  border border-[#707070] rounded-md bg-white ">
                                        {/* {item.ownershipType} */}
                                        {item.ownershipType
                                          ? item.ownershipType
                                          : null}
                                      </p>
                                    </div>
                                  </div>
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
        </div>

        <div className=" hidden md:flex items-center justify-center pt-16 bg-white px-4 py-3 sm:px-6">
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
                    <div className="bg-primary p-5 rounded-lg">
                      <div className="pb-5">
                        <p className="font-s-medium lg:text-lg text-base ">
                          {" "}
                          Category{" "}
                        </p>

                        <select
                          className="mt-2 px-2 w-full py-[13px] text-gray-400 text-sm text-left rounded-[3px]"
                          name="category"
                          id="category"
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
                        <p className="font-s-medium lg:text-lg text-base">
                          {" "}
                          Keywords
                        </p>
                        <div className="flex pt-2  ">
                          <input
                            className="lg:px-3  lg:pl-2 pl-1  py-2 w-full lg:placeholder:text-sm placeholder:text-xs rouneded-l-[3px]"
                            type="text"
                            id="job"
                            name="keyWord"
                            value={state.keyWord}
                            placeholder=" Job Title and Keyword"
                            onChange={handleChange}
                          />
                          <div className="  py-3 lg:pr-2 pr-1 bg-white rounded-r-[3px]">
                            <img
                              alt="search bar"
                              src="/assets/images/magnifying-glass.png"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="pb-7">
                        <p className="font-s-medium lg:text-lg text-base">
                          {" "}
                          Location
                        </p>
                        <div className="flex pt-2 ">
                          <input
                            className="lg:px-3  lg:pl-2 pl-1 w-full py-2 lg:placeholder:text-sm placeholder:text-xs rounded-l-[3px]  "
                            type="text"
                            id="loation"
                            name="location"
                            placeholder=" Search Location"
                            onChange={handleChange}
                            value={state.location}
                          />
                          <div className=" py-3 lg:pr-3 pr-1   bg-white rounded-r-[3px]">
                            <img
                              src="/assets/images/location.png "
                              className="pt-1"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="pb-7">
                        <p className="font-s-medium lg:text-lg text-base">
                          {" "}
                          Company Type{" "}
                        </p>

                        <div className="flex flex-col gap-3 pt-3">
                          <div className="flex gap-2 ">
                            <input type="checkbox" id="text" />
                            <label className="text-sm font-s-medium" for="text">
                              {" "}
                              MNCs (323)
                            </label>
                          </div>

                          <div className="flex gap-2 ">
                            <input type="checkbox" id="text" />
                            <label className="text-sm font-s-medium" for="text">
                              {" "}
                              Corporate (523)
                            </label>
                          </div>

                          <div className="flex gap-2 ">
                            <input type="checkbox" id="text" />
                            <label className="text-sm font-s-medium" for="text">
                              {" "}
                              Internship (173)
                            </label>
                          </div>

                          <div className="flex gap-2 ">
                            <input type="checkbox" id="text" />
                            <label className="text-sm font-s-medium" for="text">
                              {" "}
                              Part Time (223)
                            </label>
                          </div>

                          <div className="flex gap-2 ">
                            <input type="checkbox" id="text" />
                            <label className="text-sm font-s-medium" for="text">
                              {" "}
                              Temporary (323)
                            </label>
                          </div>

                          <div className="flex gap-2 ">
                            <input type="checkbox" id="text" />
                            <label className="text-sm font-s-medium" for="text">
                              {" "}
                              Volunteer (423)
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
                                <label
                                  className="text-sm font-s-medium"
                                  for="html"
                                >
                                  Engineering and Construction (876)
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

                      <div className="pb-5">
                        <p className="font-s-medium lg:text-lg text-base">
                          {" "}
                          Estabilished
                        </p>

                        <div className="flex flex-col gap-3 pt-3">
                          <div className="flex gap-2 ">
                            <input type="radio" id="html" />
                            <label className="text-sm font-s-medium" for="html">
                              1997-2000 Years
                            </label>
                          </div>

                          <div className="flex gap-2 ">
                            <input type="radio" id="html" />
                            <label className="text-sm font-s-medium" for="html">
                              2001-2005 Years
                            </label>
                          </div>

                          <div className="flex gap-2 ">
                            <input type="radio" id="html" />
                            <label className="text-sm font-s-medium" for="html">
                              2006-2010 Years
                            </label>
                          </div>

                          <div className="flex gap-2 ">
                            <input type="radio" id="html" />
                            <label className="text-sm font-s-medium" for="html">
                              2011-2015 Years
                            </label>
                          </div>
                        </div>

                        <button
                          onClick={(e) => setEstablish(!establish)}
                          className="text-secondary font-s-medium text-sm flex py-1"
                        >
                          View All <RiArrowRightSFill size={20} />
                        </button>
                        {establish ? (
                          <div className="pb-5">
                            <div className="flex flex-col gap-3 pt-3">
                              <div className="flex gap-2 ">
                                <input type="radio" id="html" />
                                <label
                                  className="text-sm font-s-medium"
                                  for="html"
                                >
                                  2016-2020 Years
                                </label>
                              </div>
                            </div>
                          </div>
                        ) : null}
                      </div>
                      <div className="mt-4">
                        <button
                          type="button"
                          className="inline-flex justify-center rounded-md text-white border border-transparent bg-secondary px-4 py-2 text-sm font-medium  hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          onClick={closeModal}
                        >
                          View Results
                        </button>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        {/* modal end */}
      </div>
    </>
  );
};

export default EmployerList;
