import React, { useEffect, useState } from "react";
import { BiChevronLeft } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { BiChevronUp } from "react-icons/bi";
import { BiChevronDown } from "react-icons/bi";
import { BsPeopleFill } from "react-icons/bs";
import { RiDeleteBin5Line } from "react-icons/ri";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import Select from "react-select";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import {
  deletecandidateAPI,
  getAllApplicantsAPI,
  getAllApplicantsAPIWithDate,
  getAllApplicantsAPIWithSearch,
  getAllApplicantsAPIWithStatus,
} from "../../../api/authService";
import { toast } from "react-toastify";
import moment from "moment";
import { getAllCity } from "../../../api/coachFunctions";

const AllApplicants = () => {
  const [dark1, setDark1] = useState(false);
  const [dark2, setDark2] = useState(false);
  const [dark3, setDark3] = useState(false);
  const [dark5, setDark5] = useState(false);
  const [dark6, setDark6] = useState(false);
  const [dark7, setDark7] = useState(false);
  let [isOpen, setIsOpen] = useState(false);
  const handeldark1 = () => {
    setDark1(!dark1);
  };
  const handeldark2 = () => {
    setDark2(!dark2);
  };
  const handeldark3 = () => {
    setDark3(!dark3);
  };

  const handeldark5 = () => {
    setDark5(!dark5);
  };
  const handeldark6 = () => {
    setDark6(!dark6);
  };

  const handeldark7 = () => {
    setDark7(!dark7);
  };

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  const { state } = useLocation();
  console.log("stateNest", state);
  const [allData, setAllData] = useState([]);
  const [pageNo, setPageNo] = useState("");
  const [pageSize, setPageSize] = useState("");
  const [candidateName, setCandidateName] = useState("");
  const [date, setDate] = useState("");
  const [statusData, setStatusData] = useState("");
  const [searchText, setSearchText] = useState("");
  const statusoptions = [
    { value: "Reviewed", label: "Reviewed" },
    { value: "Shortlisted", label: "Shortlisted" },
    { value: "Reject", label: "Reject " },
    { value: "Applied", label: "Applied" },
  ];
  //Get API
  const AllApplicants = async () => {
    try {
      const { data, status, message } = await getAllApplicantsAPI(
        state.jobId,
        pageNo,
        pageSize
      );
      if (status) {
        setAllData(data);
      } else {
        toast(message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    AllApplicants();
  }, []);

  // delete api
  const [emailId, setEmailId] = useState("");
  const deleteCandidate = async () => {
    try {
      const { response, status, message } = await deletecandidateAPI(emailId);
      console.log(response);
      if (status) {
        toast(message);
        AllApplicants();
        setIsOpen(false);
      } else {
        toast(response);
        AllApplicants();
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
  const AllApplicantsWithStatus = async () => {
    try {
      const { data, status, message } = await getAllApplicantsAPIWithStatus(
        state.jobId,
        pageNo,
        pageSize,
        statusData.label
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
    AllApplicantsWithStatus();
  }, [statusData]);
  const AllApplicantsWithSearch = async () => {
    try {
      const { data, status, message } = await getAllApplicantsAPIWithSearch(
        state.jobId,
        pageNo,
        pageSize,
        searchText
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
    AllApplicantsWithSearch();
  }, [searchText]);
  return (
    <div>
      <div className="bg-inputcolor py-16">
        <div className="mx-auto max-w-[1150px]">
          <Link
            to="/employer/manage-jobs"
            className="flex items-center mb-4 font-s-medium text-secondary text-lg"
          >
            <BiChevronLeft className="text-3xl" /> Manage Jobs
          </Link>

          <div className="bg-[#fff] px-8 py-10 rounded-2xl">
            <div className="lg:flex justify-between">
              <div className="flex  pb-8 items-center text-[#000] space-x-4 text-2xl">
                <div>
                  <BsPeopleFill size={35} className="text-secondary " />
                </div>
                <div className="descri">
                  <h4 className="font-s-medium ">All Applicants</h4>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi non quam commodo, dictum justo a, varius nisl.
                  </p>
                </div>
              </div>

              <div className="px-4 py-2">
                {" "}
                <input
                  type="date"
                  value={date}
                  onChange={(e) => {
                    setDate(e.target.value);
                    AllApplicants();
                  }}
                  className="border border-black rounded-md px-4 py-3"
                />
              </div>
            </div>

            <hr className="mb-8" />
            <div className="sm:flex space-y-6 sm:space-y-0 sm:items-center mb-8 w-full justify-center sm:justify-between">
              <div className="flex items-center space-x-3">
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
                    AllApplicants();
                  }}
                  classNamePrefix="select"
                  placeholder="Filter Status"
                  className="w-80"
                />
              </div>

              <div className="flex items-center space-x-3">
                <span>Search:</span>
                <div className="bg-primary  flex items-center px-2 rounded-md">
                  <AiOutlineSearch className="text-2xl opacity-40" />
                  <input
                    type="text"
                    id="search"
                    className="w-full bg-primary p-2"
                    onChange={(e) => {
                      setSearchText(e.target.value);
                      AllApplicants();
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="border-2 overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2">
                    <th className="border-r-2 py-4 flex space-x-3 pl-5 pt-2">
                      {/* <input type="checkbox" /> */}
                      Sr. No.
                      <div>
                        <BiChevronUp
                          className={
                            dark1
                              ? "text-[#71777F]"
                              : "text-[#71777F] opacity-30"
                          }
                          onClick={handeldark7}
                        />
                        <BiChevronDown
                          className={
                            dark1
                              ? "text-[#71777F] opacity-30"
                              : "text-[#71777F]"
                          }
                          onClick={handeldark7}
                        />
                      </div>
                    </th>
                    <th className="border-r-2">
                      <div className=" font-s-medium py-2 px-1 sm:px-3 flex items-center justify-between text-sm sm:text-[16px]">
                        <div className="md:pl-8"> Name </div>
                        <div>
                          <BiChevronUp
                            className={
                              dark1
                                ? "text-[#71777F]"
                                : "text-[#71777F] opacity-30"
                            }
                            onClick={handeldark1}
                          />
                          <BiChevronDown
                            className={
                              dark1
                                ? "text-[#71777F] opacity-30"
                                : "text-[#71777F]"
                            }
                            onClick={handeldark1}
                          />
                        </div>
                      </div>
                    </th>
                    <th className="border-r-2">
                      <div className="font-s-medium py-2 px-1 sm:px-3 flex items-center justify-between text-sm sm:text-[16px]">
                        Applied For
                        <div>
                          <BiChevronUp
                            className={
                              dark2
                                ? "text-[#71777F]"
                                : "text-[#71777F] opacity-30"
                            }
                            onClick={handeldark2}
                          />
                          <BiChevronDown
                            className={
                              dark2
                                ? "text-[#71777F] opacity-30"
                                : "text-[#71777F]"
                            }
                            onClick={handeldark2}
                          />
                        </div>
                      </div>
                    </th>
                    <th className="border-r-2">
                      <div className="font-s-medium py-2 px-1 sm:px-3 flex items-center justify-between text-sm sm:text-[16px]">
                        Date
                        <div>
                          <BiChevronUp
                            className={
                              dark3
                                ? "text-[#71777F]"
                                : "text-[#71777F] opacity-30"
                            }
                            onClick={handeldark3}
                          />
                          <BiChevronDown
                            className={
                              dark3
                                ? "text-[#71777F] opacity-30"
                                : "text-[#71777F]"
                            }
                            onClick={handeldark3}
                          />
                        </div>
                      </div>
                    </th>
                    <th className="border-r-2">
                      <div className="font-s-medium py-2 px-1 sm:px-3 flex items-center justify-between text-sm sm:text-[16px]">
                        Status{" "}
                        <div>
                          <BiChevronUp
                            className={
                              dark5
                                ? "text-[#71777F]"
                                : "text-[#71777F] opacity-30"
                            }
                            onClick={handeldark5}
                          />
                          <BiChevronDown
                            className={
                              dark5
                                ? "text-[#71777F] opacity-30"
                                : "text-[#71777F]"
                            }
                            onClick={handeldark5}
                          />
                        </div>
                      </div>
                    </th>
                    <th>
                      <div className="font-s-medium py-2 px-1 sm:px-3 flex items-center text-sm sm:text-[16px] justify-between">
                        Action{" "}
                        <div>
                          <BiChevronUp
                            className={
                              dark6
                                ? "text-[#71777F]"
                                : "text-[#71777F] opacity-30"
                            }
                            onClick={handeldark6}
                          />
                          <BiChevronDown
                            className={
                              dark6
                                ? "text-[#71777F] opacity-30"
                                : "text-[#71777F]"
                            }
                            onClick={handeldark6}
                          />
                        </div>
                      </div>
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {allData.length > 0 ? (
                    allData.map((item, index) => {
                      return (
                        <>
                          <tr className="border-b-2" key={index}>
                            <td className="border-r-2 py-8 px-3 pl-5  flex items-center font-s-medium">
                              {/* <input type="checkbox" /> */}
                              {index + 1}
                            </td>
                            <td className="border-r-2 py-2 pr-4 sm:pr-10  ">
                              <div className="md:flex space-x-4 items-center justify-center">
                                <div>
                                  <img
                                    src={item?.candidateId[0]?.images}
                                    alt="alt"
                                    className="w-14 h-14"
                                  />
                                </div>
                                <div className="flex flex-col">
                                  <div className="font-s-bold text-sm capitalize sm:text-[15px] text-secondary">
                                    {item?.candidateId[0]?.candidateName}{" "}
                                  </div>
                                  <div className="font-s-normal text-sm text-grey flex">
                                    {" "}
                                    <MdLocationOn className="text-secondary font-s-medium" />{" "}
                                    {item?.candidateId[0]?.city},
                                    {item?.candidateId[0]?.state},
                                    {item?.candidateId[0]?.country}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="border-r-2 text-[13px] sm:text-[15px] pl-4 font-s-medium">
                              {item?.jobId[0]?.jobTitle}
                            </td>
                            <td className="border-r-2 text-[13px] sm:text-[15px]  pl-4">
                              <span>
                                {moment(item.createdAt).format(
                                  "DD/MM/YYYY | dddd"
                                )}
                              </span>
                            </td>
                            <td
                              className={`border-r-2 text-[13px] sm:text-[15px] pl-4 font-s-medium ${
                                item.status === "Selected"
                                  ? "text-[#17BB05]"
                                  : item.Status === "Pending"
                                  ? "text-[#D5C000]"
                                  : item.Status === "Reviewed"
                                  ? "text-[#2544EE]"
                                  : item.Status === "Rejected"
                                  ? "text-[#f20f03]"
                                  : "text-[#F28203]"
                              }`}
                            >
                              {item?.status}
                            </td>
                            <td>
                              <div className="flex space-x-3 items-center justify-center text-xl sm:text-3xl">
                                <MdEmail className="bg-primary cursor-pointer text-secondary p-[4px]" />
                                <RiDeleteBin5Line
                                  className="bg-primary cursor-pointer text-secondary p-[4px]"
                                  // onClick={openModal}
                                  onClick={() => {
                                    setEmailId(item._id);
                                    openModal();
                                  }}
                                />
                              </div>
                            </td>
                          </tr>
                        </>
                      );
                    })
                  ) : (
                    <div className="text-secondary text-lg">
                      No Data Found!!!
                    </div>
                  )}
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
            </div>
          </div>
        </div>

        {/* modal */}

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
                  <Dialog.Panel className=" flex flex-col  p-5 items-center justify-center max-w-md transform overflow-hidden rounded-2xl  bg-white text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-s-medium leading-6 px-3 pb-4 text-gray-900"
                    >
                      Are you sure you want to delete ?
                    </Dialog.Title>
                    <div className="mt-4 flex gap-20 bg-secondary p-4 rounded">
                      <button
                        type="button"
                        className="rounded font-s-medium outline-none border border-transparent bg-white px-8  py-1.5 text-sm font-medium text-secondary"
                        onClick={closeModal}
                      >
                        No
                      </button>

                      <button
                        type="button"
                        className=" rounded font-s-medium border border-white bg-secondary px-8  py-1.5 text-sm font-medium text-[#fff] "
                        // onClick={closeDeleteModal}
                        onClick={deleteCandidate}
                      >
                        Yes
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
    </div>
  );
};

export default AllApplicants;
