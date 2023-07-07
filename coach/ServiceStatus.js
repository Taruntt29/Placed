import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillEye } from "react-icons/ai";
import { BiChevronUp, BiChevronLeft } from "react-icons/bi";
import { BiChevronDown } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { BsPencilFill, BsFillBagFill, BsCameraVideoFill } from "react-icons/bs";
import { IoCall } from "react-icons/io5";
import { toast } from "react-toastify";
import {
  deleteServiveById,
  getAllService,
  getAllServiceCount,
  getAllServiceWithStatus,
} from "../../../api/coachFunctions";
import { useEffect } from "react";
import ReactPaginate from "react-paginate";
import { useSelector } from "react-redux";

const ServiceStatus = () => {
  const [darkup1, setDarkup1] = useState(true);
  const [darkdown1, setDarkdown1] = useState(false);
  const [darkup2, setDarkup2] = useState(true);
  const [darkDown2, setDarkdown2] = useState(false);
  const [darkup3, setDarkup3] = useState(true);
  const [darkDown3, setDarkdown3] = useState(false);
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

  const [serviceData, setServiceData] = useState([]);
  // const [pageNo, setPageNo] = useState("1");
  const [pageCount, setPageCount] = useState("");
  const [pageSize, setPageSize] = useState("10");
  const [serviceId, setServiceId] = useState([]);

  const getServiceData = async (currentPage) => {
    const { data, status, message } = await getAllService(
      currentPage,
      pageSize,
      coachId
    );
    if (status) {
      setServiceData(data);
      // console.log("setPageCount", data.length);
    } else {
      toast(message);
    }
  };
  const { userDetails } = useSelector((state) => state.flightReducer);
  const coachId = userDetails._id;
  const getServiceCount = async () => {
    const { data, status, message } = await getAllServiceCount(coachId);
    if (status) {
      const count = data / pageSize;
      setPageCount(count);
    } else {
      toast(message);
    }
  };

  const handlePageClick = async (data) => {
    console.log(data.selected);
    const currentPage = data.selected + 1;
    console.log(currentPage);
    getServiceData(currentPage);
  };
  const [statusService, setStatusService] = useState("");
  const getServiceDataWithFilter = async (currentPage) => {
    const { data, status, message } = await getAllServiceWithStatus(
      currentPage,
      pageSize,
      coachId,
      statusService
    );
    if (status) {
      setServiceData(data);
      // console.log("setPageCount", data.length);
    } else {
      toast(message);
    }
  };

  useEffect(() => {
    getServiceCount();
  }, []);
  useEffect(() => {
    getServiceData();
  }, []);
  useEffect(() => {
    getServiceDataWithFilter();
  }, [statusService]);
  const deleteThisService = async () => {
    try {
      const response = await deleteServiveById(serviceId);
      console.log(response);
      if (response.status) {
        toast(response.message);
        setIsOpen(false);
      } else {
        toast(response.message);
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="bg-inputcolor lg:px-0 px-5">
      <div className="py-20 container mx-auto">
      <div className="flex items-center mb-4 font-s-medium text-secondary text-lg">
          <Link to="/coach/my-profile">  <BiChevronLeft className="text-3xl" /> </Link>
          Service
          </div>

          <div className="bg-[#fff] px-8 rounded-2xl py-6">
            <div className="lg:flex justify-between pb-3">
              <div className="lg:flex flex-col space-x-4">
                <div className="flex space-x-4  px-5 ">
                  <BsFillBagFill className="text-secondary " size={20} />
                  <h6 className="lg:text-2xl text-lg font-s-medium">
                    Service Status
                  </h6>
                </div>

                <div className="lg:px-10 px-6 pt-1">
                  Lorem Ipsum is simply dummy text of the printing and{" "}
                </div>
              </div>

              <div className="px-4 py-2">
                {" "}
                <select
                  className="bg-primary rounded-md px-4 py-2"
                  onChange={(e) => {
                    setStatusService(e.target.value);
                  }}
                >
                  <option value=" ">Filter Status</option>
                  <option value="Approved">Approved</option>
                  <option value="Rejected">Rejected</option>
                  <option value="Pending">Pending</option>
                </select>
              </div>
            </div>
            <hr className="mb-8" />
            <div className="border-2 overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2">
                    <th className="border-r-2">
                      <div className="font-s-medium py-2 px-1 sm:px-3 flex items-center justify-between text-sm sm:text-[18px]">
                        Service Name
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
                        Medium
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
                        Service Fee
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
                      <div className="font-s-medium py-2 px-4 sm:px-3 flex items-center text-sm sm:text-[18px] justify-between">
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
                  {serviceData &&
                    serviceData.map((item, index) => {
                      return (
                        <>
                          <tr className="border-b-2" key={index}>
                            {" "}
                            <td className="border-r-2 py-2 px-4  text-[13px] sm:text-[15px] ">
                              <div>
                                {" "}
                                <p className="text-secondary font-s-bold">
                                  {item.serviceName}
                                </p>
                              </div>
                            </td>
                            <td className=" border-r-2 py-7 px-4  text-[13px] sm:text-[15px] ">
                              <div className="flex space-x-3 items-center ">
                                {item.medium.map((option) => {
                                  return (
                                    <>
                                      {option === "Call" ? (
                                        <IoCall
                                          className="bg-primary cursor-pointer text-secondary p-0.5"
                                          size={20}
                                        />
                                      ) : option === "Video Call" ? (
                                        <BsCameraVideoFill
                                          className="bg-primary cursor-pointer text-secondary p-0.5"
                                          size={20}
                                        />
                                      ) : null}
                                    </>
                                  );
                                })}
                              </div>
                            </td>
                            <td className="border-r-2 py-8 px-4  text-[13px] sm:text-[15px] ">
                              {" "}
                              <p className=" font-s-bold">
                                {item.currency}
                                {item.enterPrice}
                              </p>
                            </td>
                            <td
                              className={`border-r-2 text-[13px] sm:text-[15px] pl-4 font-s-medium ${
                                item.status === "Active"
                                  ? "text-[#17BB05]"
                                  : item.status === "draft"
                                  ? "text-[#E87E05]"
                                  : item.status === "closed"
                                  ? "text-[#FFCC00]"
                                  : "text-[#FF0303]"
                              }`}
                            >
                              {item.status}
                            </td>
                            <td>
                              <div className="flex space-x-3 items-center pl-4 text-xl sm:text-3xl">
                                <Link
                                  to={`/coach/service-detail-section/${item._id}`}
                                >
                                  <AiFillEye className="bg-primary cursor-pointer text-secondary p-[4px]" />
                                </Link>
                                <Link to={`/coach/edit-service/${item._id}`}>
                                  <BsPencilFill className="bg-primary cursor-pointer text-secondary p-[4px]" />
                                </Link>
                                <RiDeleteBin5Line
                                  className="bg-primary cursor-pointer text-secondary p-[4px]"
                                  onClick={() => {
                                    setServiceId(item._id);
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
            {/* pagination start */}
            {/* <div className="flex items-center justify-between py-4 ">
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
            </div> */}
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
            {/* pagination close */}
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
                      onClick={deleteThisService}
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
      {/* modal */}
    </div>
  );
};

export default ServiceStatus;
