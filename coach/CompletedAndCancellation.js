import React, { useEffect, useState } from "react";
import { BiChevronLeft, BiChevronDown, BiChevronUp } from "react-icons/bi";
import { FaUsers, FaMoneyCheckAlt } from "react-icons/fa";
import ReactPaginate from "react-paginate";
import Calendar from "react-calendar";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  getAllCompletedCancelledServices,
  getAllCompletedCancelledServicesWithDate,
} from "../../../api/coachFunctions";
import { Link } from "react-router-dom";

const CompletedAndCancellation = () => {
  const [value, onChange] = useState(new Date());
  const [calender, setCalender] = useState();
  const [pageCount, setPageCount] = useState("");
  const [darkup1, setDarkup1] = useState(true);
  const [darkdown1, setDarkdown1] = useState(false);
  const [darkup2, setDarkup2] = useState(true);
  const [darkDown2, setDarkdown2] = useState(false);
  // const [darkup3, setDarkup3] = useState(true);
  // const [darkDown3, setDarkdown3] = useState(false);
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

  const [pageSize, setPageSize] = useState(3);
  const [pageNo, setPageNo] = useState(1);
  const [filterDate, setFilterDate] = useState();
  const [completedAndCancellationData, setCompletedAndCancellationData] =
    useState([]);
  const { userDetails } = useSelector((state) => state.flightReducer);
  const coachId = userDetails._id;
  const [totalWithdrawAmount, setTotalWithdrawAmount] = useState("");

  const getCompletedAndCancellationData = async () => {
    const { data, status, message } = await getAllCompletedCancelledServices(
      // currentPage,
      pageNo,
      pageSize,
      coachId
    );
    if (status) {
      setCompletedAndCancellationData(data);
      setTotalWithdrawAmount(data[0].Grandtotalamount[0].totalwithdrawAmount);
      const dataLen = data.length;
      // console.log("dataLen", dataLen);
      setPageCount(dataLen);
      // console.log("setPageCount", data.length);
      // console.log("Completed and Cancelled Data", data);
    } else {
      toast(message);
    }
  };
  // console.log("total amount", totalWithdrawAmount);
  const getDataWithFilter = async () => {
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
    const { data, status, message } =
      await getAllCompletedCancelledServicesWithDate(
        // currentPage,
        pageNo,
        pageSize,
        coachId,
        filterDate
        // startdate,
        // enddate
      );
    if (status) {
      setCompletedAndCancellationData(data);
      // console.log("setPageCount", data.length);
      // console.log("Completed and Cancelled Data", data);
    } else {
      toast(message);
    }
  };

  const handlePageClick = async (data) => {
    console.log(data.selected);
    const currentPage = data.selected + 1;
    console.log(currentPage);
    getCompletedAndCancellationData(currentPage);
  };

  useEffect(() => {
    getCompletedAndCancellationData();
  }, []);
  // console.log("completedAndCancellationData", completedAndCancellationData);
  return (
    <div>
      <div className="bg-inputcolor lg:px-0 px-5">
      <div className="container mx-auto py-20  ">
      <div className="flex items-center mb-4 font-s-medium text-secondary text-lg">
          <Link to="/coach/my-profile">  <BiChevronLeft className="text-3xl" /> </Link>
          Manage Students
          </div>

          <div className="bg-[#fff] lg:px-8 px-5 rounded-2xl py-6">
            <div className="lg:flex justify-between">
              <div className="flex mb-8  text-[#000] space-x-4  ">
                <FaUsers className="text-secondary " size={32} />
                <div className="flex flex-col">
                  <h6 className="lg:text-xl  font-s-medium">
                    Completed & Cancelled Services
                  </h6>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting
                  </p>
                </div>
              </div>

              {/* <div className="lg:px-4 lg:py-2">
                {" "}
                <p>
                  Total Amount -{" "}
                  <span className="text-secondary font-s-medium">
                    {" "}
                    {totalWithdrawAmount}
                  </span>
                </p>
              </div> */}
            </div>
            <hr className="mb-8" />

            <div className="lg:flex flex-col space-y-6 sm:space-y-0 sm:items-start mb-8 w-full justify-start ">
              <button
                onClick={() => setCalender(!calender)}
                className="text-secondary font-s-medium border border-secondary px-2 py-1  w-52 rounded-md"
              >
                Select Service Period
              </button>
              <div className="mb-6">
                {" "}
                {calender ? (
                  <>
                    {" "}
                    <Calendar
                      onChange={onChange}
                      value={value}
                      className="shadow-2xl py-3"
                      showDoubleView
                      selectRange
                    />
                    <button
                      className="bg-secondary text-primary rounded px-5 py-3 mt-4"
                      onClick={getDataWithFilter}
                    >
                      Apply Filter
                    </button>
                  </>
                ) : null}
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
                        Date
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
                        Service Fee
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
                        Earned Fee
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
                        Tax
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
                        Withdrawn Amount
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
                  {completedAndCancellationData &&
                    completedAndCancellationData.map((item, index) => {
                      return (
                        <>
                          <tr className="border-b-2" key={index}>
                            {" "}
                            <td className="border-r-2 py-6 pr-4 sm:pr-10 pl-2  text-[13px] sm:text-[15px] ">
                              <div>
                                {" "}
                                <p className="text-secondary font-s-bold text-center">
                                  {item?.candidateId?.candidateName}
                                  <br></br>
                                  {item.candidateId?._id}
                                </p>
                              </div>
                            </td>
                            <td className="border-r-2 text-sm sm:text-[15px] font-s-medium text-center px-2">
                              {item?.serviceId?.serviceName}
                              <br />({item?.serviceId?.trainingName})
                            </td>
                            <td className="border-r-2 text-sm  text-center font-s-medium text-secondary">
                              {item?.updatedAt?.substring(0, 10)}
                            </td>
                            <td className="border-r-2 text-sm text-center font-s-medium text-black">
                              {item?.serviceId?.serviceFee
                                ? item?.serviceId?.serviceFee
                                : "No Service Fee"}
                            </td>
                            <td className="border-r-2 text-sm text-center font-s-medium text-black">
                              {item?.serviceId?.earnedPrice}
                            </td>
                            <td className="border-r-2 text-sm text-center font-s-medium text-secondary">
                              TDS:{" "}
                              <span className="text-black">
                                {item?.serviceId?.tds}
                              </span>
                              <br />
                              GST:{" "}
                              <span className="text-black">
                                {item?.serviceId?.gst}
                              </span>
                            </td>
                            <td className="border-r-2 text-sm text-center font-s-medium text-secondary">
                              {item?.totalwithdrawAmount}
                            </td>
                            <td
                              className={` text-[13px] sm:text-[15px] lg:pl-4 px-2 lg:px-0 font-s-medium ${
                                item.status === "Cancelled"
                                  ? "text-[#FF0303]"
                                  : item.status === "Completed"
                                  ? "text-[#17BB05]"
                                  : "text-secondary"
                              }`}
                            >
                              {item?.serviceId?.status}
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
                activeClassName="bg-secondary focus:ring-inset-2 focus:ring ring-secondary"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompletedAndCancellation;
