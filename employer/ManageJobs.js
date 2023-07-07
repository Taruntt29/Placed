import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BiChevronLeft } from "react-icons/bi";
import { BsFillBagFill } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { BiChevronUp } from "react-icons/bi";
import { BiChevronDown } from "react-icons/bi";
import { BsPencilFill } from "react-icons/bs";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import {
  deletePostJobEmployerAPI,
  getAllEmployerPostedJobAPI,
} from "../../../api/authService";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import moment from "moment";
import ReactPaginate from "react-paginate";

const ManageJobs = () => {
  const { userDetails } = useSelector((state) => state.flightReducer);

  const navigate = useNavigate();
  const [darkup1, setDarkup1] = useState(true);
  const [darkdown1, setDarkdown1] = useState(false);
  const [darkup2, setDarkup2] = useState(true);
  const [darkDown2, setDarkdown2] = useState(false);
  const [darkup3, setDarkup3] = useState(true);
  const [darkDown3, setDarkdown3] = useState(false);
  const [darkup4, setDarkup4] = useState(true);
  const [darkDown4, setDarkdown4] = useState(false);
  const [darkup5, setDarkup5] = useState(true);
  const [darkDown5, setDarkdown5] = useState(false);
  const [darkup6, setDarkup6] = useState(true);
  const [darkDown6, setDarkdown6] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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

  const handeldarkup5 = () => {
    setDarkup5(true);
    setDarkdown5(false);
  };

  const handeldarkdown5 = () => {
    setDarkup5(false);
    setDarkdown5(true);
  };

  const handeldarkup6 = () => {
    setDarkup6(true);
    setDarkdown6(false);
  };

  const handeldarkdown6 = () => {
    setDarkup6(false);
    setDarkdown6(true);
  };

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  // console.log(userDetails);

  // Api
  const [pageNo, setPageNo] = useState("1");
  const [pageCount, setPageCount] = useState("");
  // Api
  const [pageSize, setPageSize] = useState("10");

  const [employerId, setEmployerId] = useState("");

  const [jobListData, setJobListData] = useState([]);
  // const [currentPage, setCurrentPage] = useState(4);
  const [date, setDate] = useState("");
  const [searchText, setSearchText] = useState("");

  const totalPages = 17;

  const getManageJobs = async () => {
    const { data, status, message } = await getAllEmployerPostedJobAPI(
      pageNo,
      pageSize,
      "All",
      userDetails._id,
      searchText
      // date
    );

    if (status) {
      setJobListData(data);
    } else {
      toast(message);
    }
  };

  useEffect(() => {
    getManageJobs();
  }, []);

  // delete api
  const deletePostedJobs = async () => {
    try {
      const { response, status, message } = await deletePostJobEmployerAPI(
        employerId
      );
      // console.log(response);
      if (status) {
        toast(message);
        getManageJobs();
        setIsOpen(false);
      } else {
        toast(response);
        getManageJobs();
      }
    } catch (error) {
      console.log(error);
    }
  };

  // paginate
  const handlePageClick = async (data) => {
    // console.log(data.selected);
    const currentPage = data.selected + 1;
    // console.log(currentPage);
    getManageJobs(currentPage);
  };

  return (
    <div>
      <div className="bg-inputcolor py-16">
        <div className="mx-auto max-w-[1150px]">
          <div className="flex items-center mb-4 font-s-medium text-secondary text-lg">
            <BiChevronLeft className="text-3xl" /> Manage Jobs
          </div>

          <div className="bg-[#fff] px-8  rounded-2xl py-6">
            <div className="lg:flex justify-between">
              <div className="flex mb-8 items-center  space-x-4  text-xl">
                <BsFillBagFill className="text-secondary " />
                <div>
                  <h6 className="text-2xl text-[#000] font-s-medium">
                    {" "}
                    Manage All Jobs
                  </h6>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>

              <div className="px-4 lg:py-2 pb-7">
                <input
                  type="date"
                  value={date}
                  onChange={(e) => {
                    setDate(e.target.value);
                    getManageJobs();
                  }}
                  className="border border-black rounded-md px-4 py-3"
                />
              </div>
            </div>
            <hr className="mb-8" />
            <div className="sm:flex space-y-6 sm:space-y-0 sm:items-center mb-8 w-full justify-center sm:justify-between">
              <div className="flex items-center space-x-3">
                <span>Search:</span>
                <div className="bg-primary  flex items-center px-2 rounded-md">
                  <AiOutlineSearch className="text-2xl opacity-40" />
                  <input
                    type="search"
                    id="search"
                    className="w-full bg-primary p-2"
                    onChange={(e) => {
                      setSearchText(e.target.value);
                      getManageJobs();
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="border-2 overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2">
                    <th className="border-r-2">
                      <div className="font-s-medium py-2 px-1 sm:px-3 flex items-center justify-between text-sm sm:text-[18px]">
                        Job Title{" "}
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
                    <th className="border-r-2">
                      <div className="font-s-medium py-2 px-1 sm:px-3 flex items-center justify-between text-sm sm:text-[18px]">
                        Applications{" "}
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
                    <th className="border-r-2">
                      <div className="font-s-medium py-2 px-1 sm:px-3 flex items-center justify-between text-sm sm:text-[18px]">
                        Status{" "}
                        <div>
                          <BiChevronUp
                            className={
                              darkup5
                                ? "text-[#71777F] opacity-100"
                                : "text-[#71777F] opacity-30"
                            }
                            onClick={handeldarkup5}
                          />
                          <BiChevronDown
                            className={
                              darkDown5
                                ? "text-[#71777F] opacity-100"
                                : "text-[#71777F] opacity-30"
                            }
                            onClick={handeldarkdown5}
                          />
                        </div>
                      </div>
                    </th>
                    <th>
                      <div className="font-s-medium py-2 px-1 sm:px-3 flex items-center text-sm sm:text-[18px] justify-between">
                        Action{" "}
                        <div>
                          <BiChevronUp
                            className={
                              darkup6
                                ? "text-[#71777F] opacity-100"
                                : "text-[#71777F] opacity-30"
                            }
                            onClick={handeldarkup6}
                          />
                          <BiChevronDown
                            className={
                              darkDown6
                                ? "text-[#71777F] opacity-100"
                                : "text-[#71777F] opacity-30"
                            }
                            onClick={handeldarkdown6}
                          />
                        </div>
                      </div>
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {console.log("jobListData", jobListData)}
                  {jobListData.length > 0 &&
                    jobListData?.map((item, index) => {
                      return (
                        <>
                          <tr className="border-b-2" key={index}>
                            {" "}
                            <td className="border-r-2 py-6 pr-4 sm:pr-10 pl-2  text-[13px] sm:text-[15px] ">
                              <Link to="/employer/all-applicants">
                                {" "}
                                <p className="text-secondary font-s-bold">
                                  {item?.jobTitle}
                                </p>
                                <p className="text-gray-500 text-sm">
                                  {moment(item?.createdAt).format(
                                    "DD/MM/YYYY | dddd"
                                  )}
                                </p>
                              </Link>
                            </td>
                            <td className="border-r-2 text-[13px] sm:text-[15px] pl-4 font-s-medium">
                              {item?.categoryId[0].name}
                            </td>
                            <td className="border-r-2 text-[13px] sm:text-[15px]  pl-4">
                              <span
                                className={`text-white py-2 pl-3 pr-6 font-s-medium rounded-md ${
                                  item.jobType === "Freelance"
                                    ? "bg-[#2D9BB3]"
                                    : item.jobType === "Full-Time"
                                    ? "bg-[#8C82EA]"
                                    : item.jobType === "Part-Time"
                                    ? "bg-[#D2628C]"
                                    : "bg-[#AB6B35]"
                                }`}
                              >
                                {item?.jobType}
                              </span>
                            </td>
                            <td className="cursor-pointer border-r-2 text-[13px] sm:text-[15px] pl-4 font-s-medium text-secondary">
                              <p
                                onClick={() =>
                                  navigate("/employer/candidates", {
                                    state: {
                                      appNum: item?.totalApplicants,
                                      jobId: item?._id,
                                    },
                                  })
                                }
                              >
                                {" "}
                                {item?.totalApplicants} Applicants
                              </p>
                            </td>
                            <td
                              className={`border-r-2 text-[13px] sm:text-[15px] pl-4 font-s-medium ${
                                item.status === "Active"
                                  ? "text-[#17BB05]"
                                  : item.status === "Draft"
                                  ? "text-[#E87E05]"
                                  : item.status === "Closed"
                                  ? "text-[#FF0303]"
                                  : "text-[#FFCC00]"
                              }`}
                            >
                              {item.status}
                            </td>
                            <td>
                              <div className="flex space-x-3 items-center justify-center text-xl sm:text-3xl">
                                <button
                                  onClick={() =>
                                    navigate(`/employer/job-edit/${item._id}`)
                                  }
                                >
                                  <BsPencilFill className="bg-primary cursor-pointer text-secondary p-[4px]" />
                                </button>
                                <RiDeleteBin5Line
                                  className="bg-primary cursor-pointer text-secondary p-[4px]"
                                  // onClick={openModal}
                                  onClick={() => {
                                    setEmployerId(item._id);
                                    openModal();
                                  }}
                                />
                              </div>
                            </td>
                          </tr>
                        </>
                      );
                    })}
                </tbody>
              </table>
            </div>
            <div className="p-2 flex justify-end items-center">
              <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                breakLabel={"..."}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                onPageChange={handlePageClick}
                containerClassName="border inline-flex bg-primary items-center  justify-center font-s-medium rounded"
                pageClassName="py-2"
                pageLinkClassName="bg-head  py-2 text-white border  px-4 hover:bg-secondary"
                previousClassName="rounded-l"
                previousLinkClassName="rounded-l bg-head py-2 px-3 border text-white"
                nextClassName=""
                nextLinkClassName="rounded-r bg-head py-2 px-3 border text-white"
                breakClassName=""
                breakLinkClassName="py-2 text-secondary"
                activeClassName="bg-secondary "
              />
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-s-medium leading-6  pb-4 text-gray-900"
                  >
                    Are you sure to delete ?
                  </Dialog.Title>
                  <div className="mt-4 flex space-x-8">
                    <button
                      type="button"
                      className=" rounded-[8px] border border-transparent bg-[#D2628C] px-8 sm:px-16 py-2 text-[20px] font-medium text-white"
                      // onClick={closeModal}
                      onClick={deletePostedJobs}
                    >
                      Yes
                    </button>

                    <button
                      type="button"
                      className=" rounded-[8px] border border-transparent bg-[#69b7b1] px-8 sm:px-16 py-2 text-[20px] font-medium text-[#fff] "
                      onClick={closeModal}
                    >
                      No
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default ManageJobs;
