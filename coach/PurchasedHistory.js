import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiChevronLeft } from "react-icons/bi";
import { BsWalletFill } from "react-icons/bs";
import { getAllPurchaseHistory } from "../../../api/coachFunctions";
import { useEffect } from "react";
import { toast } from "react-toastify";
import ReactPaginate from "react-paginate";
import { useSelector } from "react-redux";

let tablearr = [
  {
    id: "1",
    time: "11:00 AM",
    serviceFee: "$613",
    color: "bg-[#F5F7F9]",
    serviceName: "Adobe Photoshop ",
    candidateName: "Wanda Montgomery (11101)",
    date: "17/10/22",
  },

  {
    id: "2",
    time: "11:00 AM",
    serviceFee: "$613",
    color: "bg-[#fff]",
    serviceName: "Adobe Photoshop ",
    candidateName: "Wanda Montgomery (11101)",
    date: "17/10/22",
  },

  {
    id: "3",
    time: "11:00 AM",
    serviceFee: "$613",
    color: "bg-[#F5F7F9]",
    serviceName: "Adobe Photoshop ",
    candidateName: "Wanda Montgomery (11101)",
    date: "17/10/22",
  },

  {
    id: "4",
    time: "11:00 AM",
    serviceFee: "$613",
    color: "bg-[#fff]",
    serviceName: "Adobe Photoshop ",
    candidateName: "Wanda Montgomery (11101)",
    date: "17/10/22",
  },

  {
    id: "5",
    time: "11:00 AM",
    serviceFee: "$613",
    color: "bg-[#F5F7F9]",
    serviceName: "Adobe Photoshop ",
    candidateName: "Wanda Montgomery (11101)",
    date: "17/10/22",
  },

  {
    id: "6",
    time: "11:00 AM",
    serviceFee: "$613",
    color: "bg-[#fff]",
    serviceName: "Adobe Photoshop ",
    candidateName: "Wanda Montgomery (11101)",
    date: "17/10/22",
  },
  {
    id: "7",
    time: "11:00 AM",
    serviceFee: "$613",
    color: "bg-[#F5F7F9]",
    serviceName: "Adobe Photoshop ",
    candidateName: "Wanda Montgomery (11101)",
    date: "17/10/22",
  },
];

const PurchasedHistory = () => {
  const [purchaseData, setPurchaseData] = useState([]);
  const [withdrawRequestDate, setWithdrawRequestDate] = useState("");
  const [pageCount, setPageCount] = useState("");
  const [pageSize, setPageSize] = useState("10");
  const { userDetails } = useSelector((state) => state.flightReducer);
  const coachId = userDetails._id;
  const handlePageClick = async (data) => {
    console.log(data.selected);
    const currentPage = data.selected + 1;
    console.log("currentPage", currentPage);
    getPurchaseHistoryData(currentPage);
  };

  const getPurchaseHistoryData = async (currentPage) => {
    const { data, status, message } = await getAllPurchaseHistory(
      pageSize,
      // page no
      currentPage,
      coachId,
      withdrawRequestDate
    );
    if (status) {
      setPurchaseData(data);
      console.log("data", data);
      const dataLen = data.length;
      // console.log("dataLen", dataLen);
      setPageCount(dataLen);
    } else {
      toast(message);
    }
  };

  useEffect(() => {
    getPurchaseHistoryData();
  }, []);
  return (
    <div>
      <div className="bg-inputcolor lg:px-0 px-5">
      <div className="py-20 container mx-auto">
      <div className="flex items-center mb-4 font-s-medium text-secondary text-lg">
          <Link to="/coach/my-profile">  <BiChevronLeft className="text-3xl" /> </Link>
          Purchase History
          </div>

          <div className="bg-[#fff] px-8 rounded-2xl py-6">
            <div className="lg:flex justify-between">
              <div className="flex mb-4  text-[#000] space-x-4  ">
                <BsWalletFill className="text-secondary " size={24} />
                <div className="flex flex-col">
                  <h6 className="text-lg font-s-medium">Purchase History</h6>
                </div>
              </div>

              <div className="lg:px-4 lg:pb-0 pb-3">
                {" "}
                {/* <select className="bg-primary rounded-md lg:px-4 px-20 py-2">
                  <option value="1">Sort by Date</option>
                  <option value="dummy">dummy</option>
                  <option value="dummy">dummy</option>
                </select> */}
                <input
                  type="date"
                  onChange={(e) => {
                    setWithdrawRequestDate(e.target.value);
                    console.log(withdrawRequestDate);
                    getPurchaseHistoryData();
                  }}
                  value={withdrawRequestDate}
                  className="bg-primary rounded-md lg:px-4 px-20 py-2"
                />
              </div>
            </div>
            <hr className="" />

            <div className=" overflow-x-auto">
              <table className="w-full">
                <thead className="bg-primary rounded-t overflow-hidden">
                  <tr className="">
                    <th className="py-3">
                      <div className="font-s-medium py-2 px-1 sm:px-3 flex items-center justify-between text-sm sm:text-[18px]">
                        Candidate Name
                      </div>
                    </th>
                    <th className="py-3">
                      <div className="font-s-medium py-2 px-1 sm:px-3 flex items-center justify-between text-sm sm:text-[18px]">
                        Service Name
                      </div>
                    </th>
                    <th className="py-3">
                      <div className="font-s-medium py-2 px-1 sm:px-3 flex items-center justify-between text-sm sm:text-[18px]">
                        Service Fee
                      </div>
                    </th>

                    <th className="py-3">
                      <div className="font-s-medium py-2 px-1 sm:px-3 flex items-center justify-between text-sm sm:text-[18px]">
                        Date
                      </div>
                    </th>
                    <th className="py-3">
                      <div className="font-s-medium py-2 px-1 sm:px-3 flex items-center justify-between text-sm sm:text-[18px]">
                        Time
                      </div>
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {purchaseData ? (
                    purchaseData?.map((item, index) => {
                      return (
                        <>
                          <tr key={index} className="border-y">
                            <td className=" text-[13px] sm:text-[15px] pl-4 font-s-medium text-secondary">
                              {item?.candidateId?.candidateName}
                              <br />({item?.candidateId?._id})
                            </td>
                            <td className=" py-6 pr-4 sm:pr-10 pl-2  text-[13px] sm:text-[15px] ">
                              <div>
                                {" "}
                                <p className=" font-s-medium">
                                  {item?.serviceId?.serviceName}
                                </p>
                              </div>
                            </td>
                            <td className=" text-[13px] sm:text-[15px] pl-4 font-s-medium">
                              {item?.serviceId?.earnedPrice
                                ? item?.serviceId?.earnedPrice
                                : "Free"}
                            </td>
                            <td className=" text-[13px] sm:text-[15px] pl-4 font-s-medium ">
                              {" "}
                              {item?.updatedAt.substring(0, 10)}
                            </td>
                            <td className=" text-[13px] sm:text-[15px] pl-4 font-s-medium ">
                              {" "}
                              {item?.updatedAt.substring(11, 16)}
                              {/* {new Date(item?.updatedAt)} */}
                              {/* {moment(time, item?.updatedAt)
                                .tz(zone)
                                .format(item?.updatedAt)} */}
                            </td>
                          </tr>
                        </>
                      );
                    })
                  ) : (
                    <div className="text-secondary font-s-medium">
                      No Data Found!!
                    </div>
                  )}
                </tbody>
              </table>
            </div>
            {/* pagination start */}
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
    </div>
  );
};

export default PurchasedHistory;
