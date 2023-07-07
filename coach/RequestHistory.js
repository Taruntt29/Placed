import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { BiChevronLeft } from "react-icons/bi";
import { TbAlignJustified } from "react-icons/tb";
import { BiChevronUp } from "react-icons/bi";
import { BiChevronDown } from "react-icons/bi";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Calendar from "react-calendar";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import {
  getAllRequestHistoryApi,
  getAllRequestHistoryApiWithFilter,
  getAllWalletInfo,
  getAllWalletInfoWithFilter,
  getWalletAmount,
  withDrawAmountApi,
} from "../../../api/coachFunctions";
import { Link } from "react-router-dom";

const RequestHistory = () => {
  const [value, onChange] = useState(new Date());
  const [calender, setCalender] = useState();
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

  const { userDetails } = useSelector((state) => state.flightReducer);
  const coachId = userDetails._id;
  // console.log("value of date", value);
  const [requestHistoryData, setRequestHistoryData] = useState([]);
  const pageSize = "10";
  // const pageNo = "1";
  const [pageCount, setPageCount] = useState();
  const handlePageClick = async (data) => {
    console.log(data.selected);
    const currentPage = data.selected + 1;
    console.log(currentPage);
    getAllWalletInfoData(currentPage);
  };
  const getAllWalletInfoData = async (currentPage) => {
    const { data, message, status } = await getAllWalletInfo(
      pageSize,
      currentPage,
      coachId
      // startdate,
      // enddate
    );
    if (status) {
      setRequestHistoryData(data);
      const dataLen = data.length;
      console.log("data len", dataLen);
      setPageCount(dataLen);
      // console.log("request history data", data);
    } else {
      toast(message);
    }
  };

  const getAllWalletInfoFilter = async (currentPage) => {
    const startDate =
      value[0].getDate() +
      "-" +
      (value[0].getMonth() + 1) +
      "-" +
      value[0].getFullYear();
    const endDate =
      value[1].getDate() +
      "-" +
      (value[1].getMonth() + 1) +
      "-" +
      value[1].getFullYear();
    console.log("startdate", startDate);
    console.log("enddate", endDate);
    const { data, message, status } = await getAllWalletInfoWithFilter(
      pageSize,
      currentPage,
      coachId,
      startDate,
      endDate
    );
    if (status) {
      setRequestHistoryData(data);
      console.log("request history data", data);
    } else {
      toast(message);
    }
  };

  let [isOpenDelete, setIsOpenDelete] = React.useState(false);

  function closeModalDelete() {
    setIsOpenDelete(false);
  }

  function openModalDelete() {
    setIsOpenDelete(true);
  }
  const [withdrawnAmountInput, setWithdrawnAmountInput] = useState("");
  const [walletAmount, setWalletAmount] = useState();
  const getWalletAmountFunc = async () => {
    const { data, message, status } = await getWalletAmount(coachId);
    if (status) {
      setWalletAmount(data);
    } else {
      toast(message);
    }
  };
  const deductAmount = (e) => {
    setWithdrawnAmountInput(e);
  };
  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  let currentDate = `${day}-${month}-${year}`;
  // console.log(currentDate);
  const postWithDrawnAmount = async () => {
    if (withdrawnAmountInput < walletAmount) {
      try {
        const { status, message } = await withDrawAmountApi({
          coachId: userDetails._id,
          // totalwithdrawAmount: totalWithdrawAmount.toString(),
          // withdrawAmount: withdrawnAmountInput,
          // withdrawRequestDate: currentDate,
          amount: withdrawnAmountInput,
          transcationType: "debit",
          requestedStatus: "Pending",
          requestedDate: currentDate,
          remarks: "Debit Request",
        });
        if (status) {
          toast(message);
          closeModalDelete();
          getAllWalletInfoData();
          // navigate("/coach/support-inbox-mail");
        } else {
          toast(message);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      toast("Your entered amount should not exceed total withdraw amount!!");
    }
  };

  useEffect(() => {
    getAllWalletInfoData();
    getWalletAmountFunc();
  }, []);

  return (
    <div>
      <div className="bg-inputcolor lg:px-0 px-5">
      <div className="container mx-auto py-20  ">
      <div className="flex items-center mb-4 font-s-medium text-secondary text-lg">
          <Link to="/coach/my-profile">  <BiChevronLeft className="text-3xl" /> </Link>
          Wallet
          </div>
          

          <div className="bg-[#fff] lg:px-8 px-5 rounded-2xl py-6">
            <div className="lg:flex justify-between">
              <div className="flex mb-8  text-[#000] space-x-2  ">
                <div className="px-1">
                  {" "}
                  <TbAlignJustified
                    className="text-white bg-secondary px-1 rounded-full lg:w-6 lg:h-6 w-9 h-9"
                    size={44}
                  />
                </div>
                <div className="flex flex-col">
                  <h6 className="text-xl font-s-medium">Wallet History</h6>
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
                Select Requested Date
              </button>

              <button
                onClick={openModalDelete}
                className="bg-secondary rounded-md text-white px-4 py-3  w-52"
              >
                Wallet-{walletAmount}
              </button>
            </div>
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
                    onClick={getAllWalletInfoFilter}
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
                        Sr. No.
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
                        Amount
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
                        Type(Cr./Dr.)
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
                        Requested Status
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
                        Transaction Status
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
                        Withdraw
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
                        Requested Date{" "}
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
                    <th className="border-r-2">
                      <div className="font-s-medium py-2 px-1 sm:px-3 flex items-center justify-between text-sm sm:text-[18px]">
                        Transaction Date{" "}
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
                    <th className="">
                      <div className="font-s-medium py-2 px-1 sm:px-3 flex items-center justify-between text-sm sm:text-[18px]">
                        Remarks{" "}
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
                  {requestHistoryData.length > 0 ? (
                    requestHistoryData?.map((item, index) => {
                      return (
                        <>
                          <tr className="border-b-2" key={index}>
                            {" "}
                            <td className="border-r-2 py-6 pr-4 sm:pr-10 pl-2  text-[13px] sm:text-[15px] ">
                              <div>
                                {" "}
                                <p className="text-secondary font-s-bold">
                                  {index + 1}
                                </p>
                              </div>
                            </td>
                            <td className="border-r-2 text-[13px] sm:text-[15px] pl-4 font-s-medium">
                              {item?.amount}
                            </td>
                            {/* <td className="border-r-2 text-[13px] sm:text-[15px] pl-4 font-s-medium">
                            {item?.serviceId?.serviceFee
                              ? item?.serviceId?.serviceFee
                              : "No Service Fee"}
                          </td>
                          <td className="border-r-2 text-[13px] sm:text-[15px] pl-4 font-s-medium ">
                            {" "}
                            {item?.serviceId?.earnedPrice}
                          </td> */}
                            <td
                              className={`border-r-2 text-[13px] sm:text-[15px] pl-4 font-s-medium  ${
                                item?.transcationType === "credit"
                                  ? "text-[#17BB05]"
                                  : "text-red-500"
                              } `}
                            >
                              {" "}
                              {item?.transcationType}
                            </td>
                            <td
                              className={`border-r-2 text-[13px] sm:text-[15px] lg:pl-4 px-2 font-s-medium ${
                                item.requestedStatus === "Approved"
                                  ? "text-[#17BB05]"
                                  : "text-[#FFCC00]"
                              }`}
                            >
                              {item.requestedStatus}
                            </td>
                            <td
                              className={`border-r-2 text-[13px] sm:text-[15px] lg:pl-4 px-2 font-s-medium ${
                                item.transcationStatus === "Approved"
                                  ? "text-[#17BB05]"
                                  : item.transcationStatus === "pending"
                                  ? "text-[#FFCC00]"
                                  : "text-black"
                              }`}
                            >
                              {item.transcationStatus
                                ? item.transcationStatus
                                : "NA"}
                            </td>
                            <td className="border-r-2  text-[13px] sm:text-[15px]  font-s-medium text-secondary mx-auto pl-2">
                              {" "}
                              {item?.transcationType === "debit" ? (
                                <button
                                  disabled={
                                    item.requestedStatus === "Approved"
                                      ? false
                                      : true
                                  }
                                  className={`bg-secondary text-primary px-5 py-2 rounded  ${
                                    item.requestedStatus === "Approved"
                                      ? "bg-secondary"
                                      : "bg-gray-400"
                                  }`}
                                >
                                  Withdraw
                                </button>
                              ) : (
                                "-"
                              )}
                            </td>
                            <td className="border-r-2 text-[13px] sm:text-[15px] pl-4 font-s-medium text-secondary">
                              {" "}
                              {item?.requestedDate}
                            </td>
                            <td
                              className={`border-r-2 text-[13px] sm:text-[15px] pl-4 font-s-medium ${
                                item.transcationDate
                                  ? "text-secondary"
                                  : "text-black"
                              }`}
                            >
                              {" "}
                              {item.transcationDate
                                ? item.transcationDate
                                : "NA"}
                            </td>
                            <td className="border-r-2 text-[13px] sm:text-[15px] pl-4 font-s-medium text-secondary">
                              {" "}
                              {item?.remarks}
                            </td>
                          </tr>
                        </>
                      );
                    })
                  ) : (
                    <div className="w-full flex justify-center text-secondary font-s-medium">
                      No Data Found
                    </div>
                  )}
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

      {/* modal  */}
      <Transition appear show={isOpenDelete} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModalDelete}>
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
                <Dialog.Panel className="w-full lg:w-[50%]   lg:mx-0 mx-3 transform overflow-hidden rounded-md bg-white  text-left align-middle shadow-xl transition-all">
                  <div className="flex flex-col ">
                    {" "}
                    <div className="flex px-5 space-x-4 py-2">
                      <FaMoneyCheckAlt className="text-secondary" size={24} />
                      <h3 className="text-black">Withdraw Amount </h3>
                    </div>
                  </div>
                  <hr className="w-full h-[1px] bg-black" />
                  <div className="px-8">
                    <div className="">
                      <h5 className="capitalize text-center py-6 lg:whitespace-nowrap w-full">
                        kindly Enter how much amount you want to withdraw
                      </h5>
                    </div>

                    <div className="flex flex-col">
                      <div className="flex flex-col ">
                        <label className="text-sm">Total Withdraw Amount</label>
                        <input
                          className="bg-[#C2DAFF] py-2 rounded-md text-sm px-4 my-1"
                          placeholder="Total Withdrawn Amount"
                          value={walletAmount}
                          disabled
                        />
                      </div>
                      <div className="flex flex-col py-3 ">
                        <label className="text-sm">Withdraw Amount</label>
                        <input
                          className="bg-[#E3EEFF] py-2 rounded-md text-sm px-4 my-1"
                          placeholder="Withdrawn Amount"
                          value={withdrawnAmountInput}
                          onChange={(e) => deductAmount(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="py-5  ">
                    <div className=" flex gap-8 px-8">
                      <button
                        type="button"
                        className=" rounded-[8px] border border-white bg-secondary px-6 py-1 text-sm font-medium text-white"
                        onClick={postWithDrawnAmount}
                      >
                        Withdraw
                      </button>

                      <button
                        type="button"
                        className=" rounded-[8px] border border-secondary bg-white px-6 py-1 text-sm font-medium text-secondary "
                        onClick={closeModalDelete}
                      >
                        Cancel
                      </button>
                    </div>
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

export default RequestHistory;
