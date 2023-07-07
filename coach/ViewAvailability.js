import React, { useState } from "react";
import { Link } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { IoTimeSharp } from "react-icons/io5";
import { RiArrowLeftSLine } from "react-icons/ri";
import {
  getAllAvailableSlots,
  getAllAvailableSlotsFilter,
} from "../../../api/coachFunctions";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { BiChevronLeft } from "react-icons/bi";

const ViewAvailability = () => {
  const { userDetails } = useSelector((state) => state.flightReducer);
  const [slotsData, setSlotsData] = useState([]);
  const getAllAvailabilities = async () => {
    const { data, message, status } = await getAllAvailableSlots(
      userDetails._id
    );
    if (status) {
      // console.log("Actual data recieved", data);
      setSlotsData(data);
    } else {
      toast(message);
    }
  };
  useEffect(() => {
    getAllAvailabilities();
  }, []);

  // console.log("Mail Data", slotsData);
  const [fromDate, setFromDate] = useState();
  const [toDate, setToDate] = useState();
  const applyFilter = async () => {
    const { data, message, status } = await getAllAvailableSlotsFilter();
    if (status) {
      // console.log("Actual data recieved after filter", data);
      setSlotsData(data);
    } else {
      toast(message);
    }
  };
  return (
    <div className="bg-inputcolor lg:px-0 px-5">
      <div className="container mx-auto py-20  ">
      <div className="flex items-center mb-4 font-s-medium text-secondary text-lg">
          <Link to="/coach/my-profile">  <BiChevronLeft className="text-3xl" /> </Link>
            Availability
          </div>

        <div className="flex flex-col space-y-10 px-4 ">
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
                                        className="border-secondary hover:bg-secondary hover:text-white border-2  w-full rounded-full py-2 font-s-medium duration-400"
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
        </div>
      </div>
    </div>
  );
};

export default ViewAvailability;
