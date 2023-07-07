import React, { useState } from "react";
import { BiChevronLeft } from "react-icons/bi";
import { AiOutlineSearch, AiFillEye } from "react-icons/ai";
import { BiChevronUp } from "react-icons/bi";
import { BiChevronDown } from "react-icons/bi";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

let tablearr = [
  {
    id: "1",
    trainingTitle: "UI-UX Designing",
    timeslot: "10:00 AM",
    date: "25 Oct 2022",
    duration: "1 Hour",
    Status: "Upcoming",
  },

  {
    id: "2",
    trainingTitle: "UI-UX Designing",
    timeslot: "10:00 AM",
    date: "25 Oct 2022",
    duration: "1 Hour",
    Status: "Completed",
  },

  {
    id: "3",
    trainingTitle: "UI-UX Designing",
    timeslot: "10:00 AM",
    date: "25 Oct 2022",
    duration: "1 Hour",
    Status: "Pending",
  },

  {
    id: "4",
    trainingTitle: "UI-UX Designing",
    timeslot: "10:00 AM",
    date: "25 Oct 2022",
    duration: "1 Hour",
    Status: "Cancelled",
  },

  {
    id: "5",
    trainingTitle: "UI-UX Designing",
    timeslot: "10:00 AM",
    date: "25 Oct 2022",
    duration: "1 Hour",
    Status: "Upcoming",
  },

  {
    id: "6",
    trainingTitle: "UI-UX Designing",
    timeslot: "10:00 AM",
    date: "25 Oct 2022",
    duration: "1 Hour",
    Status: "Completed",
  },
  {
    id: "7",
    trainingTitle: "UI-UX Designing",
    timeslot: "10:00 AM",
    date: "25 Oct 2022",
    duration: "1 Hour",
    Status: "Cancelled",
  },
];
const AllTraining = () => {
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
  return (
    <div>
      <div className="bg-inputcolor py-16">
        <div className="mx-auto max-w-[1150px]">
          <div className="flex items-center mb-4 font-s-medium text-secondary text-lg">
            <BiChevronLeft className="text-3xl" /> Training History
          </div>

          <div className="bg-[#fff] px-8 py-10 rounded-2xl">
            <div className="flex pb-8 items-center text-[#000] space-x-4 font-s-medium text-2xl">
              <img src="/assets/images/comment.png" alt="asd" className="" />
              <h4>All Training</h4>
            </div>
            <hr className="mb-8" />
            <div className="sm:flex space-y-6 sm:space-y-0 sm:items-center mb-8 w-full justify-center sm:justify-between">
              <div className="flex items-center space-x-3">
                <span>Show</span>
                <select className="bg-primary p-3 rounded-md">
                  <option value="1">1</option>
                  <option value="dummy">dummy</option>
                  <option value="dummy">dummy</option>
                </select>
                <span>Entries</span>
              </div>

              <div className="flex items-center space-x-3">
                <span>Search:</span>
                <div className="bg-primary  flex items-center px-2 rounded-md">
                  <AiOutlineSearch className="text-2xl opacity-40" />
                  <input
                    type="search"
                    id="search"
                    className="w-full bg-primary p-2"
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
                        Training Name{" "}
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
                        Time Slot{" "}
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
                        Date{" "}
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
                        Duration{" "}
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
                  {tablearr.map((item, index) => {
                    return (
                      <>
                        <tr className="border-b-2" key={index}>
                          <td className="border-r-2 py-10 pr-4 sm:pr-10 pl-2 font-s-bold text-[13px] sm:text-[15px] text-secondary">
                            {item.trainingTitle}
                          </td>
                          <td className="border-r-2 text-[13px] sm:text-[15px] pl-4 font-s-medium">
                            {item.timeslot}
                          </td>
                          <td className="border-r-2 text-[13px] sm:text-[15px]  pl-4">
                            <span>{item.date}</span>
                          </td>

                          <td className="border-r-2 text-[13px] sm:text-[15px] pl-4 font-s-medium text-secondary">
                            {item.duration}
                          </td>
                          <td
                            className={`border-r-2 text-[13px] sm:text-[15px] pl-4 font-s-medium ${
                              item.Status === "Completed"
                                ? "text-[#17BB05]"
                                : item.Status === "Upcoming"
                                ? "text-[#E87E05]"
                                : item.Status === "Cancelled"
                                ? "text-[#FF0303]"
                                : "text-[#FFCC00]"
                            }`}
                          >
                            {item.Status}
                          </td>
                          <td>
                            <div className="flex space-x-3 items-center justify-center text-xl sm:text-3xl">
                              <AiFillEye className="bg-primary cursor-pointer text-secondary p-[4px]" />
                              <RiDeleteBin5Line
                                className="bg-primary cursor-pointer text-secondary p-[4px]"
                                onClick={openModal}
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
          </div>
        </div>

        <div className="md:flex hidden items-center justify-center pt-16  px-4 py-3 sm:px-6">
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
                className="isolate inline-flex  -space-x-px rounded-md "
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
                  <BsChevronRight className="h-5 w-5" aria-hidden="true" />
                </a>
              </nav>
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
            <div className="flex min-h-full items-center justify-center  text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className=" flex flex-col  py-5 items-center justify-center max-w-md transform overflow-hidden rounded-2xl  bg-white text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-s-medium leading-6 px-3 pb-4 text-gray-900"
                  >
                    Do you want to delete your Training?
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
                      onClick={closeModal}
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
  );
};

export default AllTraining;
