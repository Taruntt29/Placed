import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BiChevronLeft } from "react-icons/bi";
import { BsFillBagFill } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { BiChevronUp } from "react-icons/bi";
import { BiChevronDown } from "react-icons/bi";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { BsTelephoneFill } from "react-icons/bs";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
// import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import {
  getAllUpcomingServiceCount,
  getAllUpcomingServices,
  getAllUpcomingServicesWithFilter,
} from "../../../api/coachFunctions";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import ReactPaginate from "react-paginate";

const UpcomingServicesPage = () => {
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
  const [withdrawRequestDate, setWithdrawRequestDate] = useState("");
  const [searchText, setSearchText] = useState();
  const [upcomingServiceData, setUpcomingServiceData] = useState([]);
  const [pageCount, setPageCount] = useState("");
  const [pageSize, setPageSize] = useState("10");

  const getUpcomingServiceData = async (currentPage) => {
    const { data, status, message } = await getAllUpcomingServices(
      currentPage,
      pageSize,
      coachId
    );
    if (status) {
      setUpcomingServiceData(data);
      // console.log("setPageCount", data.length);
      console.log("UpcomingServiceData", data);
    } else {
      toast(message);
    }
  };
  const getUpcomingServiceDataWithDate = async (currentPage) => {
    const { data, status, message } = await getAllUpcomingServicesWithFilter(
      currentPage,
      pageSize,
      coachId,
      withdrawRequestDate,
      searchText
    );
    if (status) {
      setUpcomingServiceData(data);
      // console.log("setPageCount", data.length);
      console.log("UpcomingServiceData", data);
    } else {
      toast(message);
    }
  };
  const getUpcomingServiceCount = async () => {
    const { data, status, message } = await getAllUpcomingServiceCount(coachId);
    if (status) {
      const count = data / pageSize;
      setPageCount(count);
    } else {
      toast(message);
    }
  };
  const { userDetails } = useSelector((state) => state.flightReducer);
  const coachId = userDetails._id;
  const handlePageClick = async (data) => {
    console.log(data.selected);
    const currentPage = data.selected + 1;
    console.log(currentPage);
    getUpcomingServiceData(currentPage);
  };
  useEffect(() => {
    getUpcomingServiceData();
  }, []);
  useEffect(() => {
    getUpcomingServiceDataWithDate();
  }, [withdrawRequestDate, searchText]);
  useEffect(() => {
    getUpcomingServiceCount();
  }, []);
  return (
    <div>
      <div className="bg-inputcolor lg:px-0 px-5">
      <div className="container mx-auto py-20  ">
      <div className="flex items-center mb-4 font-s-medium text-secondary text-lg">
          <Link to="/coach/my-profile">  <BiChevronLeft className="text-3xl" /> </Link>
          Manage Students
          </div>
          <div className="bg-[#fff] px-8 rounded-2xl py-4">
            <div className="lg:flex justify-between">
              <div className="flex mb-8 items-center text-[#000] space-x-4 font-s-medium text-xl">
                <BsFillBagFill className="text-secondary " />
                <h6 className="text-2xl"> Upcoming Service</h6>
              </div>

              <div className="px-4 py-2 gap-2">
                {" "}
                {/* <select className="bg-primary rounded-md lg:px-4 px-20 py-2">
                  <option value="1">Sort by Date</option>
                  <option value="dummy">dummy</option>
                  <option value="dummy">dummy</option>
                </select> */}
                <label for="sortDate">Sort By Date: </label>
                <input
                  type="date"
                  id="sortDate"
                  name="sortDate"
                  value={withdrawRequestDate}
                  onChange={(e) => setWithdrawRequestDate(e.target.value)}
                  className="rounded border bg-primary p-2"
                />
              </div>
            </div>
            <hr className="mb-8" />
            <div className="sm:flex space-y-6 sm:space-y-0 sm:items-center mb-8 w-full justify-center sm:justify-end">
              <div className="flex items-center space-x-3">
                <span>Search:</span>
                <div className="bg-primary  flex items-center px-2 rounded-md">
                  <AiOutlineSearch className="text-2xl opacity-40" />
                  <input
                    type="search"
                    id="search"
                    className="w-full bg-primary p-2"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="border-2 overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2">
                    <th className="border-r-2">
                      <div className="font-s-medium py-2 px-1 sm:px-3 flex items-center justify-between ">
                        Candidate
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
                      <div className="font-s-medium py-2 px-1 sm:px-3 flex items-center justify-between ">
                        Service
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
                      <div className="font-s-medium py-2 px-1 sm:px-3 flex items-center justify-between ">
                        Duration
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
                      <div className="font-s-medium py-2 px-1 sm:px-3 flex items-center justify-between ">
                        Date/Time
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
                      <div className="font-s-medium py-2 px-1 sm:px-3 flex items-center justify-between ">
                        Upcoming Session
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
                      <div className="font-s-medium py-2 px-1 sm:px-3 flex items-center justify-between ">
                        Join Here
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
                      <div className="font-s-medium py-2 px-1 sm:px-3 flex items-center justify-between ">
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
                  </tr>
                </thead>

                <tbody>
                  {/* {upcomingServiceData.map((item, index) => {  */}
                  {upcomingServiceData?.map((item, index) => {
                    return item?.bookingSlots?.map((item2, index2) => {
                      return (
                        <>
                          <tr className="border-b-2" key={index}>
                            {" "}
                            <td className="border-r-2 py-6 pr-4 sm:pr-10 pl-2  text-[13px] sm:text-[15px] ">
                              <div>
                                {" "}
                                <p className="text-secondary font-s-bold text-center">
                                  {item?.candidateId[0]?.candidateName}
                                  <br />({item?.candidateId[0]?._id})
                                </p>
                              </div>
                            </td>
                            <td className="border-r-2 text-[13px] sm:text-[15px] font-s-medium text-center lg:px-0 px-2">
                              {item?.serviceId[0]?.serviceName}
                            </td>
                            <td className="border-r-2 text-[13px] sm:text-[15px] font-s-medium text-center">
                              {item?.serviceId[0]?.serviceduration}
                            </td>
                            <td className="border-r-2 text-sm  text-center font-s-medium text-secondary">
                              {/* <Link to="#"> */} {item?.serviceId[0]?.date}
                              <br />
                              {/* {item?.availableTime} */}
                              {item?.serviceId[0]?.durationofSession}
                              {/* </Link> */}
                            </td>
                            <td className="border-r-2 text-[12px] sm:text-[15px] text-center font-s-medium text-secondary">
                              {/* {item?.bookingSlots.map((item2, index) => {
                              return (
                                <div>
                                  {item2?.date}
                                  <br />
                                  {item2?.timeStart}~
                                  {item2?.timeEnd}
                                </div>
                              );
                            })} */}
                              <>
                                {item2.date}
                                <br />
                                {item2.timeStart}~{item2.timeEnd}
                              </>
                            </td>
                            <td className="border-r-2 text-[12px] sm:text-[15px]  font-s-medium text-secondary ">
                              <div className="flex gap-2 justify-center items-center">
                                {item?.serviceId[0]?.medium.map((dx, index) => {
                                  return (
                                    <div className="" key={index}>
                                      {dx === "Call" ? (
                                        <div className="flex space-x-3 items-center justify-center text-xl sm:text-3xl">
                                          <BsTelephoneFill className="bg-primary cursor-pointer text-secondary p-[4px]" />
                                        </div>
                                      ) : dx === "video call" ? (
                                        <div className="flex space-x-3 items-center justify-center text-xl sm:text-3xl">
                                          <BsFillCameraVideoFill className="bg-primary cursor-pointer text-secondary p-[4px]" />
                                        </div>
                                      ) : null}
                                    </div>
                                  );
                                })}
                              </div>
                            </td>
                            <td className="border-r-2 text-[12px] sm:text-[15px] lg:px-4 px-2 text-center font-s-medium text-secondary">
                              {" "}
                              {/* <Select
                              options={options}
                              className="w-40"
                              // value={item.status}
                            /> */}
                              <div className="p-2 bg-primary text-secondary border rounded">
                                {item?.serviceId[0]?.status}
                              </div>
                            </td>
                          </tr>
                        </>
                      );
                    });
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
                activeClassName="bg-secondary focus:ring-inset-2 focus:ring ring-secondary"
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
                      onClick={closeModal}
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

export default UpcomingServicesPage;
