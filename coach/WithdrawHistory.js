import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BiChevronUp, BiChevronLeft, BiChevronDown } from "react-icons/bi";
import Calendar from "react-calendar";
import { BsChevronLeft, BsChevronRight, BsWalletFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  getAllWithdrawHistoryApi,
  getAllWithdrawHistoryApiWithFilterApi,
} from "../../../api/coachFunctions";

let tablearr = [
  {
    id: "1",
    transction: "1102334565545",
    requestdate: "20/10/22",
    date: "17/10/22",
    amount: "$600",
    closingBalance: "$200",
  },

  {
    id: "2",
    transction: "1102334565545",
    requestdate: "20/10/22",
    date: "17/10/22",
    amount: "$600",
    closingBalance: "$200",
  },

  {
    id: "3",
    transction: "1102334565545",
    requestdate: "20/10/22",
    date: "17/10/22",
    amount: "$600",
    closingBalance: "$200",
  },

  {
    id: "4",
    transction: "1102334565545",
    requestdate: "20/10/22",
    date: "17/10/22",
    amount: "$600",
    closingBalance: "$200",
  },

  {
    id: "5",
    transction: "1102334565545",
    requestdate: "20/10/22",
    date: "17/10/22",
    amount: "$600",
    closingBalance: "$200",
  },

  {
    id: "6",
    transction: "1102334565545",
    requestdate: "20/10/22",
    date: "17/10/22",
    amount: "$600",
    closingBalance: "$200",
  },
  {
    id: "7",
    transction: "1102334565545",
    requestdate: "20/10/22",
    date: "17/10/22",
    amount: "$600",
    closingBalance: "$200",
  },
];
const WithdrawHistory = () => {
  const [value, onChange] = useState(new Date());
  const [calender, setCalender] = useState();

  const [darkup1, setDarkup1] = useState(true);
  const [darkdown1, setDarkdown1] = useState(false);
  const [darkup2, setDarkup2] = useState(true);
  const [darkDown2, setDarkdown2] = useState(false);
  const [darkup4, setDarkup4] = useState(true);
  const [darkDown4, setDarkdown4] = useState(false);
  const [darkup5, setDarkup5] = useState(true);
  const [darkDown5, setDarkdown5] = useState(false);

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

  const { userDetails } = useSelector((state) => state.flightReducer);
  const coachId = userDetails._id;
  console.log("value of date", value);

  const [withdrawHistoryData, setWithdrawHistoryData] = useState([]);
  const pageSize = "10";
  const pageNo = "1";
  const getAllWithdrawHistoryData = async () => {
    const { data, message, status } = await getAllWithdrawHistoryApi(
      pageSize,
      pageNo,
      coachId
      // startdate,
      // enddate
    );
    if (status) {
      setWithdrawHistoryData(data);
      console.log("request history data", data);
    } else {
      toast(message);
    }
  };

  useEffect(() => {
    getAllWithdrawHistoryData();
  }, []);

  const getAllWithdrawHistoryDataWithFilter = async () => {
    const startdate =
      value[0].getDate() +
      "-" +
      (value[0].getMonth() + 1) +
      "-" +
      value[0].getFullYear();
    const enddate =
      value[1].getDate() +
      "-" +
      (value[1].getMonth() + 1) +
      "-" +
      value[1].getFullYear();
    console.log("startdate", startdate);
    console.log("enddate", enddate);
    const { data, message, status } =
      await getAllWithdrawHistoryApiWithFilterApi(
        pageSize,
        pageNo,
        coachId,
        startdate,
        enddate
      );
    if (status) {
      setWithdrawHistoryData(data);
      console.log("withdraw history data", data);
    } else {
      toast(message);
    }
  };

  return (
    <div>
      <div className="bg-inputcolor py-16">
        <div className="mx-auto max-w-[1150px]">
          <Link to="/coach/request-history">
            <div className="flex items-center mb-4 font-s-medium text-secondary text-lg">
              <BiChevronLeft className="text-3xl" /> Wallet
            </div>
          </Link>

          <div className="bg-[#fff] px-8 rounded-2xl py-6">
            <div className="lg:flex justify-between">
              <div className="flex mb-8  text-[#000] space-x-2  ">
                <div className="px-1">
                  {" "}
                  <BsWalletFill
                    className=" text-secondary px-1 lg:w-8 lg:h-8 w-9 h-9"
                    size={44}
                  />
                </div>
                <div className="flex flex-col">
                  <h6 className="text-xl font-s-medium">Withdraw History</h6>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting
                  </p>
                </div>
              </div>
            </div>
            <hr className="mb-8" />

            <div className="lg:flex space-y-6 sm:space-y-0 sm:items-center mb-8 w-full justify-center sm:justify-between">
              <button
                onClick={() => setCalender(!calender)}
                className="text-secondary font-s-medium border border-secondary px-2 py-1  w-52 rounded-md"
              >
                Select Service Period
              </button>

              {/* <button className="bg-secondary rounded-md text-white px-4 py-2  w-52">
                Wallet - $1000
              </button> */}
            </div>
            <div className="mb-6">
              {" "}
              {calender ? (
                <>
                  <Calendar
                    onChange={onChange}
                    value={value}
                    className="shadow-2xl py-3"
                    showDoubleView
                    selectRange
                  />
                  <button
                    className="bg-secondary text-primary rounded px-5 py-3 mt-4"
                    onClick={getAllWithdrawHistoryDataWithFilter}
                  >
                    Apply Filter
                  </button>
                </>
              ) : null}
            </div>

            <div className="border-2 overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2">
                    <th className="border-r-2">
                      <div className="font-s-medium py-2 px-1 sm:px-3 flex items-center justify-between text-sm sm:text-[18px]">
                        Date
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
                        Transaction ID
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
                        Withdraw Request Date
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
                        Withdraw Amount
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
                    <th className="">
                      <div className="font-s-medium py-2 px-1 sm:px-3 flex items-center justify-between text-sm sm:text-[18px]">
                        Closing Balance{" "}
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
                  {withdrawHistoryData?.map((item, index) => {
                    return (
                      <>
                        <tr className="" key={index}>
                          {" "}
                          <td className="border-r-2 text-[13px] sm:text-[15px] lg:pl-4 px-3 font-s-medium">
                            {item.date}
                          </td>
                          <td className="border-r-2 py-6 pr-4 sm:pr-10 pl-2  text-[13px] sm:text-[15px] ">
                            <div>
                              {" "}
                              <p className="text-secondary font-s-bold">
                                {item?.transactionId}
                              </p>
                            </div>
                          </td>
                          <td className="border-r-2 text-[13px] sm:text-[15px] pl-4 font-s-medium">
                            {item?.withdrawRequestDate}
                          </td>
                          <td className="border-r-2 text-[13px] sm:text-[15px] pl-4 font-s-medium text-secondary">
                            {" "}
                            {item?.totalwithdrawAmount}
                          </td>
                          <td className=" text-[13px] sm:text-[15px] pl-4 font-s-medium text-red-500">
                            {" "}
                            {item.closingBalance ? item.closingBalance : "-"}
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="flex items-center justify-between py-4 ">
              <div className="font-s-medium">Showing 1 to 3 of 7 entries</div>
              <div className=" hidden md:flex  bg-white  ">
                <div className="flex flex-1 justify-between sm:hidden">
                  <a
                    href="/request-history"
                    className="relative inline-flex items-center rounded-md border bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    Previous
                  </a>
                  <a
                    href="/request-history"
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
      </div>
    </div>
  );
};

export default WithdrawHistory;
