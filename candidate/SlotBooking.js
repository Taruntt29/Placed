import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { IoTimeSharp } from "react-icons/io5";
import { RiArrowLeftSLine } from "react-icons/ri";
import { getAllAvailableSlotsFilter } from "../../../api/coachFunctions";
import { useEffect } from "react";
import { toast } from "react-toastify";
import {
  bookSlots,
  getAllSlotsByCoachId,
  reserveSlots,
  serviceDeliver,
} from "../../../api/candidateFunctions";
import { useSelector } from "react-redux";

const SlotBooking = () => {
  const [slotsData, setSlotsData] = useState([]);
  const [activeState, setActiveState] = useState([]);
  const { state } = useLocation();
  const { userDetails } = useSelector((state) => state.flightReducer);
  const candidateId = userDetails._id;
  const OpenCloseData = [];
  const IdDataSlotBook = [];
  console.log("state recieved", state);
  console.log("state?.totalwithdrawAmount", state?.totalwithdrawAmount);
  const slotState = {
    serviceId: state?.serviceId,
    candidateId: candidateId,
    totalwithdrawAmount: state?.totalwithdrawAmount,
    bookingSlots: OpenCloseData,
  };

  const [slotBookRes, setSlotBookRes] = useState([]);

  const [fromDate, setFromDate] = useState();
  const [toDate, setToDate] = useState();
  const navigate = useNavigate();
  const applyFilter = async () => {
    const { data, message, status } = await getAllAvailableSlotsFilter();
    if (status) {
      // console.log("Actual data recieved after filter", data);
      setSlotsData(data);
    } else {
      toast(message);
    }
  };
  const getAllAvailabilities = async () => {
    const { data, message, status } = await getAllSlotsByCoachId(state.coachId);
    if (status) {
      setSlotsData(data);
      // toast(message);
    } else {
      toast(message);
    }
  };
  useEffect(() => {
    getAllAvailabilities();
  }, []);

  const reserveSlotById = async () => {
    // console.log("ID CONSOLE", IdDataSlotBook);
    if (
      OpenCloseData.length > parseInt(state.noOfSession) ||
      OpenCloseData.length < parseInt(state.noOfSession)
    ) {
      toast(`Please select ${state.noOfSession} slots to continue!!`);
    } else {
      const responses = await Promise.allSettled(
        IdDataSlotBook.map(async (idx) => {
          const res = await reserveSlots(idx.slotId, idx.recordId, idx.timeId);
          // console.log("idx", idx);
          // Sending request for each id
        })
      );
    }
  };

  const saveSlots = async () => {
    if (
      OpenCloseData.length > parseInt(state.noOfSession) ||
      OpenCloseData.length < parseInt(state.noOfSession)
    ) {
      toast(`Please select ${state.noOfSession} slots to continue!!`);
    } else {
      try {
        const response = await bookSlots(slotState);
        if (response.status) {
          setSlotBookRes(response.data);
          toast(response.message);
          // getAllAvailabilities();
          // navigate("/coach-list");
        } else {
          toast(response.message);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const slots = [];

  // service deliver function
  const serviceDeliverData = {
    slots: slots,
  };

  const [serviceDeliverRes, setServiceDeliverRes] = useState([]);
  const deliverService = async () => {
    if (
      OpenCloseData.length > parseInt(state.noOfSession) ||
      OpenCloseData.length < parseInt(state.noOfSession)
    ) {
      toast(`Please select ${state.noOfSession} slots to continue!!`);
    } else {
      console.log("serviceDeliverData", serviceDeliverData);
      try {
        const response = await serviceDeliver(serviceDeliverData);
        if (response.status) {
          setServiceDeliverRes(response.data);
          toast(response.message);

          // getAllAvailabilities();
          // navigate("/coach-list");
        } else {
          toast(response.message);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="bg-inputcolor">
      <div className="container mx-auto py-20  ">
        <Link to="/coach/add-availability">
          <div className="flex space-x-2 items-center pb-6 lg:px-20 px-5 ">
            {" "}
            <RiArrowLeftSLine className="text-secondary w-5 h-5 " />{" "}
            <p className="text-secondary font-s-medium text-base">
              {" "}
              Availability
            </p>{" "}
          </div>
        </Link>

        <div className="flex flex-col space-y-10 px-4 md:px-20">
          <div className="bg-white rounded-md py-3 ">
            <div className="lg:flex justify-between items-center py-3">
              <div className="lg:flex flex-col">
                <div className="flex space-x-4  px-5 ">
                  <IoTimeSharp className="text-secondary" size={24} />
                  <h3 className="font-bold text-xl  flex ">
                    View Availability
                  </h3>
                </div>

                <div className="lg:px-16 px-6 pt-1">
                  Lorem Ipsum is simply dummy text of the printing and{" "}
                </div>
              </div>
              <div className="pr-4 flex gap-4 ">
                <div className="flex flex-col">
                  <div className="font-s-medium">From</div>
                  <input
                    type="date"
                    className="border border-secondary rounded p-2"
                    name="fromDate"
                    value={fromDate}
                    onChange={(e) => setFromDate(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <div className="font-s-medium">To</div>
                  <input
                    type="date"
                    className="border border-secondary p-2 rounded"
                    name="toDate"
                    value={toDate}
                    onChange={(e) => setToDate(e.target.value)}
                  />
                </div>
                <div className="flex justify-end items-end">
                  <button
                    className="bg-secondary text-white rounded py-2.5 px-4"
                    onClick={applyFilter}
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>
            <hr className="w-full h-[0.10rem] bg-inputcolor" />
            <div className=" p-4 flex flex-col gap-4">
              {slotsData.length > 0 ? (
                slotsData.map((item1, i) => {
                  return (
                    <>
                      {" "}
                      {item1.timeing?.map((item2, j) => {
                        return (
                          <div
                            className="border-2 border-secondary p-2 rounded-md"
                            key={j}
                          >
                            <div>
                              <div className="px-5">
                                <p className="font-semibold text-xl py-2">
                                  Date :
                                </p>
                                <button className="text-white bg-secondary text-base px-10 py-[0.7rem] rounded-md font-semibold mx-3">
                                  {item2?.date.substring(0, 10)}
                                </button>
                              </div>
                              <div>
                                <div className="grid lg:grid-cols-5 grid-cols-1 my-6 gap-4 justify-item2s-center px-8">
                                  {item2.slots?.map((x, k) => {
                                    return (
                                      <button
                                        disabled={
                                          x.status !== "Open" ? true : false
                                        }
                                        className={`${
                                          activeState.includes(x)
                                            ? "bg-secondary text-white"
                                            : x.status != "Open"
                                            ? "bg-gray-400 text-black"
                                            : "bg-primary text-black"
                                        } +"border-secondary   border-2  w-full rounded-full py-2 font-s-medium duration-400"`}
                                        onClick={(e) => {
                                          // console.log("indexes", i);
                                          // console.log("indexes", j);
                                          // console.log("indexes", k);

                                          // const newState = slotsData.map(
                                          //   (val1, in1) => {
                                          //     val1.timeing.map((val2, in2) => {
                                          //       if (
                                          //         val2.date ==
                                          //         item2?.date.substring(0, 10)
                                          //       ) {
                                          //         in2.slots.map((val3, in3) => {
                                          //           if (
                                          //             val3.opensAt === x.opensAt
                                          //           ) {
                                          //             return val3.opensAt;
                                          //           } else {
                                          //             return x.opensAt;
                                          //           }
                                          //         });
                                          //       }
                                          //     });
                                          //   }
                                          // );
                                          // console.log("newState", newState);
                                          OpenCloseData.push({
                                            date: item2?.date.substring(0, 10),
                                            timeStart: x.opensAt,
                                            timeEnd: x.closedAt,
                                          });
                                          slots.push({
                                            serviceId: state.serviceId,
                                            candidateId: candidateId,
                                            date: item2?.date.substring(0, 10),
                                            timeStart: x.opensAt,
                                            timeEnd: x.closedAt,
                                          });

                                          IdDataSlotBook.push({
                                            slotId: x._id,
                                            recordId: item1._id,
                                            timeId: item2._id,
                                          });

                                          // setActiveState([...activeState, x]);
                                        }}
                                        // onClick={(e) => {
                                        //   const newState = slotTiming.map(
                                        //     (t) => {
                                        //       if (
                                        //         t.date ==
                                        //         item2?.date.substring(0, 10)
                                        //       ) {
                                        //         return {
                                        //           ...t,
                                        //           slots: [
                                        //             ...slotTiming.slots,
                                        //             x,
                                        //           ],
                                        //         };
                                        //       } else if (
                                        //         t.date !=
                                        //         item2?.date.substring(0, 10)
                                        //       ) {
                                        //         return {
                                        //           ...t,
                                        //           date: item2?.date.substring(
                                        //             0,
                                        //             10
                                        //           ),
                                        //           slots: [x],
                                        //         };
                                        //       } else {
                                        //         return t;
                                        //       }
                                        //     }
                                        //   );
                                        //   console.log(newState);
                                        // }}

                                        key={k}
                                      >
                                        {x?.opensAt}-{x?.closedAt}
                                      </button>
                                    );
                                  })}
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </>
                  );
                })
              ) : (
                <p className="text-secondary flex justify-center text-lg">
                  No data found!!!!{" "}
                </p>
              )}
            </div>
          </div>
          <button
            className="bg-secondary text-primary rounded px-4 py-3 font-s-medium"
            onClick={(e) => {
              saveSlots();
              reserveSlotById();
              deliverService();
            }}
          >
            {" "}
            Save Slots
          </button>
        </div>
      </div>
    </div>
  );
};

export default SlotBooking;
