import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { AiFillStar, AiOutlineStar, AiOutlineSearch } from "react-icons/ai";
import { RiArrowRightSFill } from "react-icons/ri";
import { GiSettingsKnobs } from "react-icons/gi";
import { Dialog, Transition } from "@headlessui/react";
import { useEffect } from "react";
import { candidateCoachList, getAdminServiceForCoachpage, getCoachWhichFilterFromService, getIndustrymasterForCoach } from "../../api/authCandidate";

const CandidateGrid = () => {
  const [serviceName, setServiceName] = useState();
  const [costRange, setCostRange] = useState();
  const [industry, setIndustry] = useState();
  const [timeSlot, setTimeSlot] = useState();

  const [state, setState] = useState({
    experience: "",
    companyName: "",
    category: "",
    location: "",
  });
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const data = [
    {
      id: 1,
      img: "/assets/images/pic-3.png",
      title: "Google Technology company",
      coachname: "Ronald Richards",
      desc: " New Managers, Executives, Career Changers, Relocating New Managers, Executives",
      recommend: "Recommended",
    },
    {
      id: 2,
      img: "/assets/images/pic-3.png",
      title: "Google Technology company",
      coachname: "Ronald Richards",
      desc: " New Managers, Executives, Career Changers, Relocating New Managers, Executives",
    },
    {
      id: 3,
      img: "/assets/images/pic-3.png",
      title: "Google Technology company",
      coachname: "Ronald Richards",
      desc: " New Managers, Executives, Career Changers, Relocating New Managers, Executives",
      recommend: "Recommended",
    },
    {
      id: 4,
      img: "/assets/images/pic-3.png",
      title: "Google Technology company",
      coachname: "Ronald Richards",
      desc: " New Managers, Executives, Career Changers, Relocating New Managers, Executives",
    },
    {
      id: 5,
      img: "/assets/images/pic-3.png",
      title: "Google Technology company",
      coachname: "Ronald Richards",
      desc: " New Managers, Executives, Career Changers, Relocating New  Managers, Executives",
    },
    {
      id: 6,
      img: "/assets/images/pic-3.png",
      title: "Google Technology company",
      coachname: "Ronald Richards",
      desc: " New Managers, Executives, Career Changers, Relocating New Managers, Executives",
      recommend: "Recommended",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const [dataSet , setDataSet] = useState([])
  const [params , setParams] = useState({})
  const [trigger , setTrigger] = useState(false)
  const getCoaches = async (params) => {
    try {
    const response = await getCoachWhichFilterFromService(params)
      setDataSet(response.data)
      setTrigger(false)
    } catch (error) {
      console.log(error);
    }
  }

  const [serviceData, setServiceData] = useState([])
  const [industryData, setIndustryData] = useState([])


  const getServicesListing = async () => {
    try {
      const response = await getAdminServiceForCoachpage();
      setServiceData(response.data)
    } catch (error) {
      console.log(error);
    }
  }
  const getIndustryListing = async () => {
    try {
      const response = await getIndustrymasterForCoach();
      setIndustryData(response.data)
    } catch (error) {
      console.log(error);
    }
  }
  const clearFilters = () => {
    setParams({});
    getCoaches({})
  }

  useEffect(() => {
    getCoaches(params)
  },[trigger])

  useEffect(() => {
    getCoaches(); getServicesListing() ; getIndustryListing()
  } , [])

  return (
    <>
      <div className="container mx-auto py-10">
        <div className=" grid lg:grid-cols-7 grid-cols-1 gap-8 pt-10">
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
            <button onClick={clearFilters}  className="bg-red-600 w-full hover:bg-red-800 font-s-medium py-3 rounded text-white">
              Clear Filters
            </button>
          </div>
              <div className="pb-7">
                <p className="font-s-medium lg:text-lg text-base">
                  {" "}
                  Coach Name
                </p>
                <div className="flex pt-2 ">
                  <input
                    className="lg:px-3  lg:pl-2 pl-1 w-full py-2 lg:placeholder:text-sm placeholder:text-xs  rounded-l-[3px] "
                    type="text"
                    id="company"
                    name="Company"
                    placeholder="Company and Keyword"
                    onChange={handleChange}
                    value={state.companyName}
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

              <div className="pb-7">
                <p className="font-s-medium lg:text-lg text-base"> Location</p>
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

              <div className="pb-7">
                <p className="font-s-medium lg:text-lg text-base">
                  {" "}
                  Service Name{" "}
                </p>

                <div className="flex flex-col gap-3 pt-3">
                  {serviceData && serviceData.map((item,index) => {
                    return (
                      <>
                  <div className="flex gap-2  ">
                    <input type="radio" id={index + 1000} name="radioG" value={item.serviceName} onChange={(e) => {setParams({...params , serviceName : e.target.value}) ; setTrigger(true)}} />
                    <label className="text-sm font-s-medium" for={index + 1000}>
                      {" "}
                      {item.serviceName}
                    </label>
                  </div>
                      </>
                    )
                  })}

                  {/* <div className="flex gap-2 ">
                    <input type="radio" id="text" />
                    <label className="text-sm font-s-medium" for="text">
                      {" "}
                      Resume and Cover Writing
                    </label>
                  </div> */}

                  {/* <div className="flex gap-2 ">
                    <input type="radio" id="text" />
                    <label className="text-sm font-s-medium" for="text">
                      {" "}
                      Job Search Strategy
                    </label>
                  </div> */}

                  {/* <div className="flex gap-2 ">
                    <input type="radio" id="text" />
                    <label className="text-sm font-s-medium" for="text">
                      {" "}
                      Mentorship
                    </label>
                  </div> */}

                  {/* <div className="flex gap-2 ">
                    <input type="radio" id="text" />
                    <label className="text-sm font-s-medium" for="text">
                      {" "}
                      Soft Skills
                    </label>
                  </div> */}
                </div>
{/* 
                <button
                  onClick={(e) => setServiceName(!serviceName)}
                  className="text-secondary font-s-medium text-sm flex py-1"
                >
                  View All <RiArrowRightSFill size={20} />
                </button>
                {serviceName ? (
                  <div className="pb-5">
                    <div className="flex flex-col gap-3 pt-3">
                      <div className="flex gap-2 ">
                        <input type="radio" id="html" />
                        <label className="text-sm font-s-medium" for="html">
                          Photoshop
                        </label>
                      </div>
                    </div>
                  </div>
                ) : null} */}
              </div>

              <div className="pb-5">
                <p className="font-s-medium lg:text-lg text-base">
                  {" "}
                  Price Range
                </p>

                <div className="flex flex-col gap-3 pt-3">
                  <div className="flex gap-2 ">
                    <input type="radio" id="1" value="100-500" name="x" onChange={(e) => {setParams({...params , minPrice : e.target.value.split("-")[0] , maxPrice : e.target.value.split("-")[1]}) ; setTrigger(true)}} />
                    <label className="text-sm font-s-medium" for="1">
                      $100 - $500
                    </label>
                  </div>

                  <div className="flex gap-2 ">
                    <input type="radio" id="2" value="500-1000" name="x" onChange={(e) => {setParams({...params , minPrice : e.target.value.split("-")[0] , maxPrice : e.target.value.split("-")[1]}) ; setTrigger(true)}} />
                    <label className="text-sm font-s-medium" for="2">
                      $500 - $1000
                    </label>
                  </div>

                  <div className="flex gap-2 ">
                    <input type="radio" id="3" value="1000-2000" name="x" onChange={(e) => {setParams({...params , minPrice : e.target.value.split("-")[0] , maxPrice : e.target.value.split("-")[1]}) ; setTrigger(true)}} />
                    <label className="text-sm font-s-medium" for="3">
                      $1000 - $2000
                    </label>
                  </div>

                  <div className="flex gap-2 ">
                    <input type="radio" id="4" value="2000-5000" name="x" onChange={(e) => {setParams({...params , minPrice : e.target.value.split("-")[0] , maxPrice : e.target.value.split("-")[1]}) ; setTrigger(true)}} />
                    <label className="text-sm font-s-medium" for="4">
                      $2000 - $5000
                    </label>
                  </div>

                  <div className="flex gap-2 ">
                    <input type="radio" id="5" value="5000-10000" name="x" onChange={(e) => {setParams({...params , minPrice : e.target.value.split("-")[0] , maxPrice : e.target.value.split("-")[1]}) ; setTrigger(true)}} />
                    <label className="text-sm font-s-medium" for="5">
                      $5000 - $10000
                    </label>
                  </div>
                  <div className="flex gap-2 ">
                    <input type="radio" id="6" value="10000-50000" name="x" onChange={(e) => {setParams({...params , minPrice : e.target.value.split("-")[0] , maxPrice : e.target.value.split("-")[1]}) ; setTrigger(true)}} />
                    <label className="text-sm font-s-medium" for="6">
                      $10000 - $50000
                    </label>
                  </div>
                </div>

                <button
                  onClick={(e) => setCostRange(!costRange)}
                  className="text-secondary font-s-medium text-sm flex py-1"
                >
                  View All <RiArrowRightSFill size={20} />
                </button>
                {costRange ? (
                  <div className="pb-5">
                    <div className="flex flex-col gap-3 pt-3">
                      <div className="flex gap-2 ">
                        <input type="radio" id="html" />
                        <label className="text-sm font-s-medium" for="html">
                          $150 - $200
                        </label>
                      </div>

                      <div className="flex gap-2 ">
                        <input type="radio" id="html" />
                        <label className="text-sm font-s-medium" for="html">
                          $150 - $200
                        </label>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>

              <div className="pb-7">
                <p className="font-s-medium lg:text-lg text-base">Industries</p>

                <div className="flex flex-col gap-3 pt-3">
                  {industryData && industryData.map((item,index) => {
                    return (
                      <>
                  <div className="flex gap-2  ">
                    <input type="radio" id={index + 100} name="radioGroup" value={item.name} onClick={(e) => {setParams({...params , industry : e.target.value}) ; setTrigger(true)}} />
                    <label className="text-sm font-s-medium" for={index + 100} >
                      {" "}
                      {item.name}
                    </label>
                    
                  </div>
                      </>
                    )
                  })}

                  {/* <div className="flex gap-2 ">
                    <input type="radio" id="text" />
                    <label className="text-sm font-s-medium" for="text">
                      {" "}
                      Media Production
                    </label>
                  </div> */}

                  {/* <div className="flex gap-2 ">
                    <input type="radio" id="text" />
                    <label className="text-sm font-s-medium" for="text">
                      {" "}
                      Writing and Editing
                    </label>
                  </div> */}

                  {/* <div className="flex gap-2 ">
                    <input type="radio" id="text" />
                    <label className="text-sm font-s-medium" for="text">
                      {" "}
                      Advertising Services
                    </label>
                  </div> */}

                  {/* <div className="flex gap-2 ">
                    <input type="radio" id="text" />
                    <label className="text-sm font-s-medium" for="text">
                      {" "}
                      Human Resources Services
                    </label>
                  </div> */}
                </div>

                <button
                  onClick={(e) => setIndustry(!industry)}
                  className="text-secondary font-s-medium text-sm flex py-1"
                >
                  View All <RiArrowRightSFill size={20} />
                </button>
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
                  </div>
                ) : null} */}
              </div>

              <div className="pb-5">
                <p className="font-s-medium lg:text-lg text-base"> Time Slot</p>

                <div className="flex flex-col gap-3 pt-3">
                  <div className="flex gap-2 ">
                    <input type="radio" id="html" />
                    <label className="text-sm font-s-medium" for="html">
                      12:00 PM - 01:00 PM
                    </label>
                  </div>

                  <div className="flex gap-2 ">
                    <input type="radio" id="html" />
                    <label className="text-sm font-s-medium" for="html">
                      02:00 PM - 03:00 PM
                    </label>
                  </div>

                  <div className="flex gap-2 ">
                    <input type="radio" id="html" />
                    <label className="text-sm font-s-medium" for="html">
                      04:00 PM - 05:00 PM
                    </label>
                  </div>

                  <button
                    onClick={(e) => setTimeSlot(!timeSlot)}
                    className="text-secondary font-s-medium text-sm flex py-1"
                  >
                    View All <RiArrowRightSFill size={20} />
                  </button>
                  {timeSlot ? (
                    <div className="pb-5">
                      <div className="flex flex-col gap-3 pt-3">
                        <div className="flex gap-2 ">
                          <input type="radio" id="html" />
                          <label className="text-sm font-s-medium" for="html">
                            05:00 PM - 06:00 PM
                          </label>
                        </div>

                        <div className="flex gap-2 ">
                          <input type="radio" id="html" />
                          <label className="text-sm font-s-medium" for="html">
                            06:00 PM - 07:00 PM
                          </label>
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 lg:px-0 px-5">
            <div className="grid md:grid-cols-3  lg:py-0 py-10">
              <p className="md:col-span-1 text-lg font-s-medium  flex items-end">
                {" "}
                Showing 2,150 Coaches{" "}
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

            <div className="lg:px-0 px-5">
              <div className="grid md:grid-cols-2 grid-cols-1 text-center  mx-auto lg:pt-20 gap-12 gap-y-10   items-center justify-items-center">
                {dataSet.map((item, id) => {
                  return (
                    <div className="shadow-2xl p-2.5 h-72 rounded-xl border border-secondary bg-inputcolor ">
                      <div className="flex space-x-3 lg:px-32  px-16">
                        {" "}
                        <img alt="CoachImage" src={item?.coachId?.images?.[0]} />
                        {item?.coachId?.isRecommended ? (
                          <div className="text-end">
                            <p className="lg:text-xs text-[10px] text-white bg-green-600 py-1 px-3 rounded-md">
                              "Recommended" 
                            </p>
                          </div>
                        ) : null}
                      </div>

                      <h6 className="text-xl font-bold">{item?.coachId?.coachName}</h6>
                      <div className="flex items-center justify-center py-2">
                        <AiFillStar className="text-yellow-600" />
                        <AiFillStar className="text-yellow-600" />
                        <AiFillStar className="text-yellow-600" />
                        <AiFillStar className="text-yellow-600" />
                        <AiOutlineStar className="text-yellow-600" />
                      </div>

                      <p className="text-xs py-1 text-center">{item?.coachId?.BioData?.slice(0,200)}</p>
                      <Link to={`/coach-detail/${item?.coachId?._id}`}>
                        <button className="px-6 py-1 my-2 text-white bg-secondary rounded-md">
                          View Profile
                        </button>
                      </Link>
                    </div>
                  );
                })}
              </div>
              <div className=" hidden md:flex items-center justify-center pt-16 bg-white px-10 py-3 sm:px-6">
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
                <div className=" flex  ">
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
                          <div className="bg-primary p-5 rounded-lg">
                            <div className="pb-7">
                              <p className="font-s-medium lg:text-lg text-base">
                                {" "}
                                Coach Name
                              </p>
                              <div className="flex pt-2 ">
                                <input
                                  className="lg:px-3  lg:pl-2 pl-1 w-full py-2 lg:placeholder:text-sm placeholder:text-xs  rounded-l-[3px] "
                                  type="text"
                                  id="company"
                                  name="Company"
                                  placeholder="Company and Keyword"
                                  onChange={handleChange}
                                  value={state.companyName}
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

                            <div className="pb-7">
                              <p className="font-s-medium lg:text-lg text-base">
                                {" "}
                                Service Name{" "}
                              </p>

                              <div className="flex flex-col gap-3 pt-3">
                                <div className="flex gap-2  ">
                                  <input type="radio" id="text" />
                                  <label
                                    className="text-sm font-s-medium"
                                    for="text"
                                  >
                                    {" "}
                                    Carrer Guidance
                                  </label>
                                </div>

                                <div className="flex gap-2 ">
                                  <input type="radio" id="text" />
                                  <label
                                    className="text-sm font-s-medium"
                                    for="text"
                                  >
                                    {" "}
                                    Resume and Cover Writing
                                  </label>
                                </div>

                                <div className="flex gap-2 ">
                                  <input type="radio" id="text" />
                                  <label
                                    className="text-sm font-s-medium"
                                    for="text"
                                  >
                                    {" "}
                                    Job Search Strategy
                                  </label>
                                </div>

                                <div className="flex gap-2 ">
                                  <input type="radio" id="text" />
                                  <label
                                    className="text-sm font-s-medium"
                                    for="text"
                                  >
                                    {" "}
                                    Mentorship
                                  </label>
                                </div>

                                <div className="flex gap-2 ">
                                  <input type="radio" id="text" />
                                  <label
                                    className="text-sm font-s-medium"
                                    for="text"
                                  >
                                    {" "}
                                    Soft Skills
                                  </label>
                                </div>
                              </div>

                              <button
                                onClick={(e) => setServiceName(!serviceName)}
                                className="text-secondary font-s-medium text-sm flex py-1"
                              >
                                View All <RiArrowRightSFill size={20} />
                              </button>
                              {serviceName ? (
                                <div className="pb-5">
                                  <div className="flex flex-col gap-3 pt-3">
                                    <div className="flex gap-2 ">
                                      <input type="radio" id="html" />
                                      <label
                                        className="text-sm font-s-medium"
                                        for="html"
                                      >
                                        Photoshop
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              ) : null}
                            </div>

                            <div className="pb-5">
                              <p className="font-s-medium lg:text-lg text-base">
                                {" "}
                                Cost Range
                              </p>

                              <div className="flex flex-col gap-3 pt-3">
                                <div className="flex gap-2 ">
                                  <input type="radio" id="html" />
                                  <label
                                    className="text-sm font-s-medium"
                                    for="html"
                                  >
                                    $15 - $25
                                  </label>
                                </div>

                                <div className="flex gap-2 ">
                                  <input type="radio" id="html" />
                                  <label
                                    className="text-sm font-s-medium"
                                    for="html"
                                  >
                                    $30 - $50
                                  </label>
                                </div>

                                <div className="flex gap-2 ">
                                  <input type="radio" id="html" />
                                  <label
                                    className="text-sm font-s-medium"
                                    for="html"
                                  >
                                    $50 - $100
                                  </label>
                                </div>

                                <div className="flex gap-2 ">
                                  <input type="radio" id="html" />
                                  <label
                                    className="text-sm font-s-medium"
                                    for="html"
                                  >
                                    $100 - $150
                                  </label>
                                </div>

                                <div className="flex gap-2 ">
                                  <input type="radio" id="html" />
                                  <label
                                    className="text-sm font-s-medium"
                                    for="html"
                                  >
                                    $150 - $200
                                  </label>
                                </div>
                              </div>

                              <button
                                onClick={(e) => setCostRange(!costRange)}
                                className="text-secondary font-s-medium text-sm flex py-1"
                              >
                                View All <RiArrowRightSFill size={20} />
                              </button>
                              {costRange ? (
                                <div className="pb-5">
                                  <div className="flex flex-col gap-3 pt-3">
                                    <div className="flex gap-2 ">
                                      <input type="radio" id="html" />
                                      <label
                                        className="text-sm font-s-medium"
                                        for="html"
                                      >
                                        $150 - $200
                                      </label>
                                    </div>

                                    <div className="flex gap-2 ">
                                      <input type="radio" id="html" />
                                      <label
                                        className="text-sm font-s-medium"
                                        for="html"
                                      >
                                        $150 - $200
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
                                Time Slot
                              </p>

                              <div className="flex flex-col gap-3 pt-3">
                                <div className="flex gap-2 ">
                                  <input type="radio" id="html" />
                                  <label
                                    className="text-sm font-s-medium"
                                    for="html"
                                  >
                                    12:00 PM - 01:00 PM
                                  </label>
                                </div>

                                <div className="flex gap-2 ">
                                  <input type="radio" id="html" />
                                  <label
                                    className="text-sm font-s-medium"
                                    for="html"
                                  >
                                    02:00 PM - 03:00 PM
                                  </label>
                                </div>

                                <div className="flex gap-2 ">
                                  <input type="radio" id="html" />
                                  <label
                                    className="text-sm font-s-medium"
                                    for="html"
                                  >
                                    04:00 PM - 05:00 PM
                                  </label>
                                </div>

                                <button
                                  onClick={(e) => setTimeSlot(!timeSlot)}
                                  className="text-secondary font-s-medium text-sm flex py-1"
                                >
                                  View All <RiArrowRightSFill size={20} />
                                </button>
                                {timeSlot ? (
                                  <div className="pb-5">
                                    <div className="flex flex-col gap-3 pt-3">
                                      <div className="flex gap-2 ">
                                        <input type="radio" id="html" />
                                        <label
                                          className="text-sm font-s-medium"
                                          for="html"
                                        >
                                          05:00 PM - 06:00 PM
                                        </label>
                                      </div>

                                      <div className="flex gap-2 ">
                                        <input type="radio" id="html" />
                                        <label
                                          className="text-sm font-s-medium"
                                          for="html"
                                        >
                                          06:00 PM - 07:00 PM
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                ) : null}
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
