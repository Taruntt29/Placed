import React, { Fragment, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdLocationPin } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { GiSettingsKnobs } from "react-icons/gi";
import { RiArrowRightSFill } from "react-icons/ri";
import { Dialog, Transition } from "@headlessui/react";
import {
  getAllCandidatesAPI,
  getAllIndustryAPI,
  getCategoryAPI,
} from "../../api/authService";
import { toast } from "react-toastify";
import Select from "react-select";

const CandidateGrid = () => {
  const [lastactive, setLastActive] = useState();
  const [company, setCompany] = useState("");
  const [industry, setIndustry] = useState("");
  const [salary, setSalary] = useState("");

  // const [state, setState] = useState({
  //   industry: "",
  //   experience: "",
  //   companyName: "",
  //   category: "",
  //   location: "",
  //   salary: "",
  // });
  // const handleChange = (e) => {
  //   setState({
  //     ...state,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  const [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  const [candidateData, setCandidateData] = useState([]);
  const [pageNo, setPageNo] = useState("1");
  const [pageCount, setPageCount] = useState("");
  const [pageSize, setPageSize] = useState("10");
  const [companyName, setCompanyName] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [industryId, setIndustryId] = useState("");
  const [location, setLocation] = useState("");
  const [employmentType, setEmploymentType] = useState("");

  //Candidate List Api

  const navigate = useNavigate();

  const candidateList = async () => {
    const { data, status, message } = await getAllCandidatesAPI(
      // pageSize,
      // pageNo,
      location,
      employmentType,
      // companyName,
      // candidateId,

      categoryId,
      industryId
    );
    if (status) {
      // toast(message);
      setCandidateData(data);
    } else {
      toast(message);
    }
  };

  useEffect(() => {
    candidateList();
  }, []);

  // catrgory
  const [category, setCategory] = useState([]);
  const getCategory = async () => {
    try {
      const { data, status, message } = await getCategoryAPI();
      if (status) {
        setCategory(data);
        console.log("category", data);
      } else {
        toast(message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategory();
  }, []);

  // industry API
  const [industryData, setIndustryData] = useState([]);

  const getIndustryField = async () => {
    const { data, status, message } = await getAllIndustryAPI();
    console.log("industry", data);
    if (status) {
      // toast(message);
      setIndustryData(data);
    } else {
      toast(message);
    }
  };

  useEffect(() => {
    getIndustryField();
  }, []);
  // const industryArr = [];

  useEffect(() => {
    candidateList();
  }, [employmentType, industryId, categoryId, location]);

  // Api

  return (
    <>
      <div className="container mx-auto py-10">
        <div className=" grid lg:grid-cols-7 grid-cols-1 gap-4 pt-10">
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
              <div className="pb-7">
                <p className="font-s-medium lg:text-lg text-base">
                  {" "}
                  {/* Company Name */} Search By keyword
                </p>
                <div className="flex pt-2 ">
                  <input
                    className="lg:px-3  lg:pl-2 pl-1 w-full py-2 lg:placeholder:text-sm placeholder:text-xs  rounded-l-[3px] "
                    type="text"
                    id="company"
                    name="Company"
                    placeholder="Search by keyword"
                    onChange={(e) => setCompanyName(e.target.value)}
                    value={companyName}
                  />
                  <div className=" py-3 lg:pr-3 pr-1  text-gray-400 bg-white rounded-r-[3px]">
                    <AiOutlineSearch />
                  </div>
                </div>
              </div>
              <div className="pb-5">
                <p className="font-s-medium lg:text-lg text-base ">
                  {" "}
                  Category{" "}
                </p>

                <Select
                  name="categoryId"
                  getOptionLabel={(option) => option.name}
                  getOptionValue={(option) => option._id}
                  value={category.filter((i) => i._id === categoryId)?.[0]}
                  options={category}
                  onChange={(e) => {
                    setCategoryId(e._id);
                  }}
                  classNamePrefix="select"
                />
              </div>
              {console.log("gdfgdfgCAT", categoryId)}
              <div className="pb-7">
                <p className="font-s-medium lg:text-lg text-base"> Location</p>
                <div className="flex pt-2 ">
                  <input
                    className="lg:px-3  lg:pl-2 pl-1 w-full py-2 lg:placeholder:text-sm placeholder:text-xs  rounded-l-[3px] "
                    type="text"
                    id="loation"
                    name="location"
                    placeholder=" Search Location"
                    value={location}
                    onChange={(e) => {
                      setLocation(e.target.value);
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

              <div className="pb-7">
                <p className="font-s-medium lg:text-lg text-base"> Job Type </p>

                <div className="flex flex-col gap-3 pt-3">
                  <div className="flex gap-2  ">
                    <input
                      onChange={() => setEmploymentType("freelance")}
                      type="radio"
                      id="text"
                      name="jobType"
                    />
                    <label className="text-sm font-s-medium" for="text">
                      {" "}
                      Freelance
                    </label>
                  </div>

                  <div className="flex gap-2 ">
                    <input
                      type="radio"
                      id="text"
                      name="jobType"
                      onChange={() => setEmploymentType("fulltime")}
                    />
                    <label className="text-sm font-s-medium" for="text">
                      {" "}
                      Full Time
                    </label>
                  </div>

                  <div className="flex gap-2 ">
                    <input
                      type="radio"
                      id="text"
                      name="jobType"
                      onChange={() => setEmploymentType("workfromhome")}
                    />
                    <label className="text-sm font-s-medium" for="text">
                      {" "}
                      Work from Home
                    </label>
                  </div>

                  <div className="flex gap-2 ">
                    <input
                      type="radio"
                      id="text"
                      name="jobType"
                      onChange={() => setEmploymentType("remotework")}
                    />
                    <label className="text-sm font-s-medium" for="text">
                      {" "}
                      Remote Work
                    </label>
                  </div>

                  <div className="flex gap-2 ">
                    <input
                      type="radio"
                      id="text"
                      name="jobType"
                      onChange={() => setEmploymentType("internship")}
                    />
                    <label className="text-sm font-s-medium" for="text">
                      {" "}
                      Internship
                    </label>
                  </div>

                  <div className="flex gap-2 ">
                    <input
                      type="radio"
                      id="text"
                      name="jobType"
                      onChange={() => setEmploymentType("parttime")}
                    />
                    <label className="text-sm font-s-medium" for="text">
                      {" "}
                      Part Time
                    </label>
                  </div>

                  <div className="flex gap-2 ">
                    <input
                      type="radio"
                      id="text"
                      name="jobType"
                      onChange={() => setEmploymentType("temporary")}
                    />
                    <label className="text-sm font-s-medium" for="text">
                      {" "}
                      Temporary
                    </label>
                  </div>

                  <div className="flex gap-2 ">
                    <input
                      type="radio"
                      id="text"
                      name="jobType"
                      onChange={() => setEmploymentType("volunteer")}
                    />
                    <label className="text-sm font-s-medium" for="text">
                      {" "}
                      Volunteer
                    </label>
                  </div>
                </div>
              </div>

              <div className="pb-5">
                <p className="font-s-medium lg:text-lg text-base">
                  {" "}
                  Last Active
                </p>

                <div className="flex flex-col gap-3 pt-3">
                  <div className="flex gap-2 ">
                    <input type="radio" id="html" />
                    <label className="text-sm font-s-medium" for="html">
                      Last Hour
                    </label>
                  </div>

                  <div className="flex gap-2 ">
                    <input type="radio" id="html" />
                    <label className="text-sm font-s-medium" for="html">
                      Last 24 Hours
                    </label>
                  </div>

                  <div className="flex gap-2 ">
                    <input type="radio" id="html" />
                    <label className="text-sm font-s-medium" for="html">
                      Last 7 Days
                    </label>
                  </div>

                  <div className="flex gap-2 ">
                    <input type="radio" id="html" />
                    <label className="text-sm font-s-medium" for="html">
                      Last 30 days
                    </label>
                  </div>

                  <div className="flex gap-2 ">
                    <input type="radio" id="html" />
                    <label className="text-sm font-s-medium" for="html">
                      All
                    </label>
                  </div>
                </div>

                <button
                  onClick={(e) => setLastActive(!lastactive)}
                  className="text-secondary font-s-medium text-sm flex py-1"
                >
                  View All <RiArrowRightSFill size={20} />
                </button>
                {lastactive ? (
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

              <div className="pb-7">
                <p className="font-s-medium lg:text-lg text-base">Industries</p>

                {industryData.map((item) => (
                  <>
                    {" "}
                    <div className="flex flex-col gap-3 pt-3">
                      <div className="flex gap-2  ">
                        <input
                          name="industry"
                          type="radio"
                          id="text"
                          onChange={() => setIndustryId(item._id)}
                        />
                        <label className="text-sm font-s-medium" for="text">
                          {item.name}
                        </label>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="grid md:grid-cols-3 px-10 lg:py-0 py-10">
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
                  >
                    <option value="category1">Show 10</option>
                    <option value="category2">Show 20</option>
                    <option value="category3">Show 30</option>
                    <option value="category4">Show 40</option>
                  </select>
                </div>
              </div>
            </div>

            <div>
              <div className="grid md:grid-cols-2 grid-cols-1   mx-auto lg:pt-20 gap-12 gap-y-10   items-center justify-items-center">
                {candidateData.map((item, id) => {
                  return (
                    <>
                      <div
                        className="bg-white shadow-md shadow-[#2544EE30] rounded-xl relative mt-6 border border-[#707070] "
                        key={id}
                      >
                        <div className="">
                          <div className="absolute flex  bg-white shadow-md shadow-[#2544EE30] rounded-xl -top-10 left-[7.5rem]">
                            <img
                              src={item.images[0]}
                              alt=""
                              width={100}
                              height={100}
                            />
                          </div>
                          <div className="flex flex-col gap-2 mt-7 lg:mt-12">
                            <div className="px-32 ">
                              {" "}
                              <div className="bg-primary mt-6 text-secondary rounded-md font-s-medium text-center px-3 text-sm py-1">
                                Featured
                              </div>{" "}
                            </div>

                            <div className="text-center font-s-medium text-base capitalize">
                              {" "}
                              {item.candidateName}
                            </div>
                            <div className="text-center font-s-normal text-sm text-gray-400">
                              {item.post}
                            </div>
                            <button
                              onClick={() =>
                                navigate("/candidate-detail", {
                                  state: { id: item._id },
                                })
                              }
                              // {
                              //   (() => navigate("/candidate-detail",
                              //   { state: { id: item._id }
                              // })
                            >
                              <div className="text-center font-s-bold text-base text-secondary">
                                View Profile
                              </div>
                            </button>
                          </div>
                          <div className="bg-[#2544EE30] rounded-b-xl py-1 lg:mt-4">
                            <div className="grid grid-cols-2 gap-2 px-3">
                              <div className="flex ">
                                <MdLocationPin />
                                <div className="text-sm font-s-normal capitalize">
                                  {item.city}
                                </div>
                                ,
                                <div className="text-sm font-s-normal capitalize">
                                  {item.state}
                                </div>
                              </div>

                              <div className="flex justify-end font-s-normal text-sm">
                                {item.cost}{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
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
                      <a
                        href="#"
                        className="relative inline-flex items-center rounded-l-md  bg-white px-2 py-2 text-sm font-medium text-grey hover:bg-gray-50 focus:z-20"
                      >
                        <span className="sr-only">Previous</span>
                        <BsChevronLeft className="h-5 w-5" aria-hidden="true" />
                      </a>
                      {/* Current: "z-10 bg-indigo-50 border-secondary text-indigo-600", Default: "bg-white text-grey hover:bg-gray-50" */}
                      <a
                        href="#"
                        aria-current="page"
                        className="relative z-10 inline-flex items-center  bg-secondary px-4 py-2 text-sm font-medium text-white focus:z-20"
                      >
                        1
                      </a>
                      <a
                        href="#"
                        className="relative inline-flex items-center  bg-white px-4 py-2 text-sm font-medium text-grey hover:bg-gray-50 focus:z-20"
                      >
                        2
                      </a>
                      <a
                        href="#"
                        className="relative hidden items-center  bg-white px-4 py-2 text-sm font-medium text-grey hover:bg-gray-50 focus:z-20 md:inline-flex"
                      >
                        3
                      </a>
                      <span className="relative inline-flex items-center  bg-white px-4 py-2 text-sm font-medium text-gray-700">
                        ...
                      </span>
                      <a
                        href="#"
                        className="relative hidden items-center bg-white px-4 py-2 text-sm font-medium text-grey hover:bg-gray-50 focus:z-20 md:inline-flex"
                      >
                        8
                      </a>
                      <a
                        href="#"
                        className="relative inline-flex items-center  bg-white px-4 py-2 text-sm font-medium text-grey hover:bg-gray-50 focus:z-20"
                      >
                        9
                      </a>
                      <a
                        href="#"
                        className="relative inline-flex items-center  bg-white px-4 py-2 text-sm font-medium text-grey hover:bg-gray-50 focus:z-20"
                      >
                        10
                      </a>
                      <a
                        href="#"
                        className="relative inline-flex items-center rounded-r-md  bg-white px-2 py-2 text-sm font-medium text-grey hover:bg-gray-50 focus:z-20"
                      >
                        <span className="sr-only">Next</span>
                        <BsChevronRight
                          className="h-5 w-5"
                          aria-hidden="true"
                        />
                      </a>
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
                          <div className="  ">
                            <div className="bg-primary p-5 rounded-lg">
                              <div className="pb-7">
                                <p className="font-s-medium lg:text-lg text-base">
                                  {" "}
                                  Company Name
                                </p>
                                <div className="flex pt-2 ">
                                  <input
                                    className="lg:px-3  lg:pl-2 pl-1 w-full py-2 lg:placeholder:text-sm placeholder:text-xs  rounded-l-[3px] "
                                    type="text"
                                    id="company"
                                    name="Company"
                                    placeholder="Company and Keyword"
                                    onChange={(e) =>
                                      setCompanyName(e.target.value)
                                    }
                                    value={companyName}
                                  />
                                  <div className=" py-3 lg:pr-3 pr-1  text-gray-400 bg-white rounded-r-[3px]">
                                    <AiOutlineSearch />
                                  </div>
                                </div>
                              </div>
                              <div className="pb-5">
                                <p className="font-s-medium lg:text-lg text-base ">
                                  {" "}
                                  Category{" "}
                                </p>

                                <select
                                  className="mt-2 px-2 w-full py-[13px] text-gray-400 text-sm text-left rounded-[3px]"
                                  id="category"
                                  name="category"
                                  value={categoryId}
                                  // onChange={handleChange}
                                >
                                  <option
                                    className="text-sm "
                                    value="category1"
                                  >
                                    Category 1
                                  </option>
                                  <option value="category2">Category 2</option>
                                  <option value="category3">Category 3</option>
                                  <option value="category4">Category 4</option>
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
                                    onChange={(e) =>
                                      setLocation(e.target.value)
                                    }
                                    value={location}
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

                              <div className="pb-7">
                                <p className="font-s-medium lg:text-lg text-base">
                                  {" "}
                                  Job Type{" "}
                                </p>

                                <div className="flex flex-col gap-3 pt-3">
                                  <div className="flex gap-2  ">
                                    <input type="radio" id="text" />
                                    <label
                                      className="text-sm font-s-medium"
                                      for="text"
                                    >
                                      {" "}
                                      Freelance
                                    </label>
                                  </div>

                                  <div className="flex gap-2 ">
                                    <input type="radio" id="text" />
                                    <label
                                      className="text-sm font-s-medium"
                                      for="text"
                                    >
                                      {" "}
                                      Full Time
                                    </label>
                                  </div>

                                  <div className="flex gap-2 ">
                                    <input type="radio" id="text" />
                                    <label
                                      className="text-sm font-s-medium"
                                      for="text"
                                    >
                                      {" "}
                                      Work from Home
                                    </label>
                                  </div>

                                  <div className="flex gap-2 ">
                                    <input type="radio" id="text" />
                                    <label
                                      className="text-sm font-s-medium"
                                      for="text"
                                    >
                                      {" "}
                                      Remote Work
                                    </label>
                                  </div>

                                  <div className="flex gap-2 ">
                                    <input type="radio" id="text" />
                                    <label
                                      className="text-sm font-s-medium"
                                      for="text"
                                    >
                                      {" "}
                                      Internship
                                    </label>
                                  </div>

                                  <div className="flex gap-2 ">
                                    <input type="radio" id="text" />
                                    <label
                                      className="text-sm font-s-medium"
                                      for="text"
                                    >
                                      {" "}
                                      Part Time
                                    </label>
                                  </div>

                                  <div className="flex gap-2 ">
                                    <input type="radio" id="text" />
                                    <label
                                      className="text-sm font-s-medium"
                                      for="text"
                                    >
                                      {" "}
                                      Temporary
                                    </label>
                                  </div>

                                  <div className="flex gap-2 ">
                                    <input type="radio" id="text" />
                                    <label
                                      className="text-sm font-s-medium"
                                      for="text"
                                    >
                                      {" "}
                                      Volunteer
                                    </label>
                                  </div>
                                </div>
                              </div>

                              <div className="pb-5">
                                <p className="font-s-medium lg:text-lg text-base">
                                  {" "}
                                  Last Active
                                </p>

                                <div className="flex flex-col gap-3 pt-3">
                                  <div className="flex gap-2 ">
                                    <input type="radio" id="html" />
                                    <label
                                      className="text-sm font-s-medium"
                                      for="html"
                                    >
                                      Last Hour
                                    </label>
                                  </div>

                                  <div className="flex gap-2 ">
                                    <input type="radio" id="html" />
                                    <label
                                      className="text-sm font-s-medium"
                                      for="html"
                                    >
                                      Last 24 Hours
                                    </label>
                                  </div>

                                  <div className="flex gap-2 ">
                                    <input type="radio" id="html" />
                                    <label
                                      className="text-sm font-s-medium"
                                      for="html"
                                    >
                                      Last 7 Days
                                    </label>
                                  </div>

                                  <div className="flex gap-2 ">
                                    <input type="radio" id="html" />
                                    <label
                                      className="text-sm font-s-medium"
                                      for="html"
                                    >
                                      Last 30 days
                                    </label>
                                  </div>

                                  <div className="flex gap-2 ">
                                    <input type="radio" id="html" />
                                    <label
                                      className="text-sm font-s-medium"
                                      for="html"
                                    >
                                      All
                                    </label>
                                  </div>
                                </div>

                                <button
                                  onClick={(e) => setLastActive(!lastactive)}
                                  className="text-secondary font-s-medium text-sm flex py-1"
                                >
                                  View All <RiArrowRightSFill size={20} />
                                </button>
                                {lastactive ? (
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

                              <div className="pb-5">
                                <p className="font-s-medium lg:text-lg text-base">
                                  {" "}
                                  Company
                                </p>

                                <div className="grid grid-cols-2">
                                  <div className="flex flex-col gap-3 pt-3">
                                    <div className="flex gap-2 ">
                                      <input type="radio" id="html" />
                                      <label
                                        className="text-sm font-s-medium"
                                        for="html"
                                      >
                                        CIEL HR
                                      </label>
                                    </div>

                                    <div className="flex gap-2 ">
                                      <input type="radio" id="html" />
                                      <label
                                        className="text-sm font-s-medium"
                                        for="html"
                                      >
                                        Accenture in India
                                      </label>
                                    </div>

                                    <div className="flex gap-2 ">
                                      <input type="radio" id="html" />
                                      <label
                                        className="text-sm font-s-medium"
                                        for="html"
                                      >
                                        Unnati
                                      </label>
                                    </div>

                                    <div className="flex gap-2 ">
                                      <input type="radio" id="html" />
                                      <label
                                        className="text-sm font-s-medium"
                                        for="html"
                                      >
                                        Prime Video
                                      </label>
                                    </div>

                                    <div className="flex gap-2 ">
                                      <input type="radio" id="html" />
                                      <label
                                        className="text-sm font-s-medium"
                                        for="html"
                                      >
                                        Microsoft
                                      </label>
                                    </div>
                                  </div>
                                  <div className="flex flex-col gap-3 pt-3">
                                    <div className="flex gap-2 ">
                                      <input type="radio" id="html" />
                                      <label
                                        className="text-sm font-s-medium"
                                        for="html"
                                      >
                                        CIEL HR
                                      </label>
                                    </div>

                                    <div className="flex gap-2 ">
                                      <input type="radio" id="html" />
                                      <label
                                        className="text-sm font-s-medium"
                                        for="html"
                                      >
                                        Accenture in India
                                      </label>
                                    </div>

                                    <div className="flex gap-2 ">
                                      <input type="radio" id="html" />
                                      <label
                                        className="text-sm font-s-medium"
                                        for="html"
                                      >
                                        Unnati
                                      </label>
                                    </div>

                                    <div className="flex gap-2 ">
                                      <input type="radio" id="html" />
                                      <label
                                        className="text-sm font-s-medium"
                                        for="html"
                                      >
                                        Prime Video
                                      </label>
                                    </div>

                                    <div className="flex gap-2 ">
                                      <input type="radio" id="html" />
                                      <label
                                        className="text-sm font-s-medium"
                                        for="html"
                                      >
                                        Microsoft
                                      </label>
                                    </div>
                                  </div>
                                </div>

                                <button
                                  onClick={(e) => setCompany(!company)}
                                  className="text-secondary font-s-medium text-sm flex py-1"
                                >
                                  View All <RiArrowRightSFill size={20} />
                                </button>
                                {company ? (
                                  <div className="pb-5">
                                    <div className="flex flex-col gap-3 pt-3">
                                      <div className="flex gap-2 ">
                                        <input type="radio" id="html" />
                                        <label
                                          className="text-sm font-s-medium"
                                          for="html"
                                        >
                                          10,000 -20,000 Employees
                                        </label>
                                      </div>

                                      <div className="flex gap-2 ">
                                        <input type="radio" id="html" />
                                        <label
                                          className="text-sm font-s-medium"
                                          for="html"
                                        >
                                          20,000 -30,000 Employees
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                ) : null}
                              </div>

                              <div className="pb-7">
                                <p className="font-s-medium lg:text-lg text-base">
                                  Industries
                                </p>

                                <div className="flex flex-col gap-3 pt-3">
                                  <div className="flex gap-2  ">
                                    <input type="radio" id="text" />
                                    <label
                                      className="text-sm font-s-medium"
                                      for="text"
                                    >
                                      {" "}
                                      Software Development
                                    </label>
                                  </div>

                                  <div className="flex gap-2 ">
                                    <input type="radio" id="text" />
                                    <label
                                      className="text-sm font-s-medium"
                                      for="text"
                                    >
                                      {" "}
                                      Media Production
                                    </label>
                                  </div>

                                  <div className="flex gap-2 ">
                                    <input type="radio" id="text" />
                                    <label
                                      className="text-sm font-s-medium"
                                      for="text"
                                    >
                                      {" "}
                                      Writing and Editing
                                    </label>
                                  </div>

                                  <div className="flex gap-2 ">
                                    <input type="radio" id="text" />
                                    <label
                                      className="text-sm font-s-medium"
                                      for="text"
                                    >
                                      {" "}
                                      Advertising Services
                                    </label>
                                  </div>

                                  <div className="flex gap-2 ">
                                    <input type="radio" id="text" />
                                    <label
                                      className="text-sm font-s-medium"
                                      for="text"
                                    >
                                      {" "}
                                      Human Resources Services
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

                              <div className="pb-5">
                                <p className="font-s-medium lg:text-lg text-base">
                                  {" "}
                                  Expected Salary
                                </p>

                                <div className="flex flex-col gap-3 pt-3">
                                  <div className="flex gap-2 ">
                                    <input type="radio" id="html" />
                                    <label
                                      className="text-sm font-s-medium"
                                      for="html"
                                    >
                                      15-20k/Month
                                    </label>
                                  </div>

                                  <div className="flex gap-2 ">
                                    <input type="radio" id="html" />
                                    <label
                                      className="text-sm font-s-medium"
                                      for="html"
                                    >
                                      35-40k/Month
                                    </label>
                                  </div>

                                  <div className="flex gap-2 ">
                                    <input type="radio" id="html" />
                                    <label
                                      className="text-sm font-s-medium"
                                      for="html"
                                    >
                                      45-50k/Month
                                    </label>
                                  </div>

                                  <div className="flex gap-2 ">
                                    <input type="radio" id="html" />
                                    <label
                                      className="text-sm font-s-medium"
                                      for="html"
                                    >
                                      55-70k/Month
                                    </label>
                                  </div>
                                  <button
                                    onClick={(e) => setSalary(!salary)}
                                    className="text-secondary font-s-medium text-sm flex py-1"
                                  >
                                    View All <RiArrowRightSFill size={20} />
                                  </button>
                                  {salary ? (
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
          </div>
        </div>
      </div>
    </>
  );
};

export default CandidateGrid;
