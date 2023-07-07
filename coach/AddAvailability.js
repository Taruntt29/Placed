import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { IoTimeSharp } from "react-icons/io5";
import { RiArrowLeftSLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { AddAvailabilityApi } from "../../../api/coachFunctions";
import { toast } from "react-toastify";
import { BiChevronLeft } from "react-icons/bi";

const AddAvailability = () => {
  const [value1, onChange1] = useState(new Date());
  const [dateArr, setDateArr] = useState([]);
  const [selectTime, setSelectTime] = useState(false);
  const { userDetails } = useSelector((state) => state.flightReducer);
  const coachId = userDetails._id;
  // Returns an array of dates between the two dates
  function getDates(startDate, endDate) {
    const dates = [];
    let currentDate = startDate;
    const addDays = function (days) {
      const date = new Date(this.valueOf());
      date.setDate(date.getDate() + days);
      return date;
    };
    while (currentDate <= endDate) {
      dates.push(currentDate);
      currentDate = addDays.call(currentDate, 1);
    }
    return dates;
  }
  const navigate = useNavigate();
  // return dayName from date
  function getDayName(dateStr, locale) {
    var date = new Date(dateStr);
    return date.toLocaleDateString(locale, { weekday: "long" });
  }
  const createSlots = () => {
    const dates = getDates(value1[0], value1[1]);
    const finalDates = dates.map((item) => {
      // const dateSent =
      //   item.getDate() + "-" + (item.getMonth() + 1) + "-" + item.getFullYear();
      // console.log("dateSent", dateSent);
      return {
        date: item,
        slots: [{ opensAt: "", closedAt: "" }],
        Notapplicable: false,
      };
    });
    setDateArr(finalDates);
    setSelectTime(true);
  };

  const saveSlots = async () => {
    const dateFrom =
      value1[0].getDate() +
      "-" +
      (value1[0].getMonth() + 1) +
      "-" +
      value1[0].getFullYear();
    const dateTo =
      value1[1].getDate() +
      "-" +
      (value1[1].getMonth() + 1) +
      "-" +
      value1[1].getFullYear();
    const statePost = {
      coachId: coachId,
      startdate: dateFrom,
      enddate: dateTo,
      timeing: dateArr,
    };
    if (userDetails.accountstatus === "Active") {
      try {
        const response = await AddAvailabilityApi(statePost);
        if (response.status) {
          toast(response.message);
          navigate("/coach/view-availability");
        } else {
          toast(response.message);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      toast("Please Activate your account to add Slots!!");
    }
  };

  return (
    <div className="bg-inputcolor">
      <div className="container mx-auto py-10  ">
      <div className="flex items-center mb-4 font-s-medium text-secondary text-lg">
          <Link to="/coach/my-profile">  <BiChevronLeft className="text-3xl" /> </Link>
            Availability
          </div>
        
        <div className="flex flex-col space-y-10 px-4 md:px-0">
          <div className="bg-white rounded-md py-3 ">
            <div className="lg:flex justify-between items-center py-3">
              <div className="lg:flex flex-col">
                <div className="flex space-x-4  px-5 ">
                  <IoTimeSharp className="text-secondary" size={32} />
                  <div className="descri">
                    <h3 className="font-bold text-xl  flex ">
                      Add Availability
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Morbi non quam commodo, dictum justo a, varius nisl.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <hr className="w-full h-[0.10rem] bg-inputcolor" />

            <div className="lg:px-8  py-10">
              <div className="lg:grid lg:grid-cols-1 justify-items-center items-center">
                <div className="lg:px-0 px-8 lg:pt-0 pt-10 w-full justify-center items-center ">
                  <h3 className="text-lg font-s-medium">Select Dates</h3>
                  <Calendar
                    onChange={onChange1}
                    value={value1}
                    className="border-white border mx-auto"
                    // minDate={}
                    // maxDate={}
                    // formatLongDate={}
                    showDoubleView
                    selectRange
                  />
                </div>
              </div>
              <div className="flex justify-end py-4">
                <button
                  onClick={createSlots}
                  className="bg-secondary text-white px-6 py-3 rounded-md font-s-medium text-sm"
                >
                  Create Slots
                </button>
              </div>

              <div className="pt-5">
                {selectTime ? (
                  <h3 className="text-lg font-s-medium">Select Time</h3>
                ) : null}
                {dateArr?.map((item, index) => {
                  return (
                    <div className=" flex space-x-10 px-16 py-5" key={index}>
                      <div>
                        <p className="font-semibold ">
                          {`${item.date.getDate()}-${
                            item.date.getMonth() + 1
                          }-${item.date.getFullYear()}`}
                        </p>
                        <p className="font-semibold">{getDayName(item.date)}</p>
                        <div>
                          <input
                            onChange={(e, i) => {
                              const newState = dateArr.map((i, ind) => {
                                if (ind == index) {
                                  if (item.Notapplicable) {
                                    return {
                                      ...i,
                                      Notapplicable: !item.Notapplicable,
                                      // slots: newSlot,55
                                    };
                                  } else {
                                    return {
                                      ...i,
                                      Notapplicable: !item.Notapplicable,
                                      slots: [],
                                    };
                                  }
                                } else {
                                  return i;
                                }
                              });
                              setDateArr(newState);
                            }}
                            type="checkbox"
                            id={index}
                            name="Notapplicable"
                            value={dateArr.Notapplicable}
                          />
                          <label className="pl-2" htmlFor={index}>
                            {" "}
                            Not Available
                          </label>
                        </div>
                      </div>
                      {/* add slot fields */}
                      <>
                        <div className="flex flex-col gap-3">
                          {!item.Notapplicable &&
                            item.slots?.map((element, index) => (
                              <>
                                <SlotField
                                  index={index}
                                  setOpenAt={(e) => {
                                    const newState = dateArr.map((i, ind) => {
                                      if (i.date == item.date) {
                                        const newSlot = i.slots.map(
                                          (s, isx) => {
                                            if (isx == index) {
                                              return {
                                                ...s,
                                                opensAt: e.target.value,
                                              };
                                            } else {
                                              return s;
                                            }
                                          }
                                        );
                                        return {
                                          ...i,
                                          slots: newSlot,
                                        };
                                      } else {
                                        return i;
                                      }
                                    });
                                    setDateArr(newState);
                                  }}
                                  setCloseAt={(e) => {
                                    const newState = dateArr.map((i, ind) => {
                                      if (i.date == item.date) {
                                        const newSlot = i.slots.map(
                                          (s, isx) => {
                                            if (isx == index) {
                                              return {
                                                ...s,
                                                closedAt: e.target.value,
                                              };
                                            } else {
                                              return s;
                                            }
                                          }
                                        );
                                        return {
                                          ...i,
                                          slots: newSlot,
                                        };
                                      } else {
                                        return i;
                                      }
                                    });
                                    setDateArr(newState);
                                  }}
                                  openAt={element.opensAt}
                                  closedAt={element.closedAt}
                                  onRemove={(e) => {
                                    const newState = dateArr.map((i, ind) => {
                                      if (i.date == item.date) {
                                        const newSlot = i.slots.filter(
                                          (x, dd) => index != dd
                                        );
                                        return {
                                          ...i,
                                          slots: newSlot,
                                        };
                                      } else {
                                        return i;
                                      }
                                    });
                                    setDateArr(newState);
                                  }}
                                />
                              </>
                            ))}
                        </div>
                        <div className="w-[5%] mt-7">
                          {!item.Notapplicable ? (
                            <button
                              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                              type="button"
                              onClick={() => {
                                const newState = dateArr.map((i, ind) => {
                                  if (ind == index) {
                                    return {
                                      ...i,
                                      slots: [
                                        ...i.slots,
                                        { opensAt: "", closedAt: "" },
                                      ],
                                    };
                                  } else {
                                    return i;
                                  }
                                });
                                setDateArr(newState);
                              }}
                            >
                              +
                            </button>
                          ) : null}
                        </div>
                      </>
                    </div>
                  );
                })}
              </div>

              <button
                onClick={saveSlots}
                className="text-white bg-secondary text-sm px-10 py-2 rounded-md lg:mx-0 mx-5"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SlotField = ({
  index,
  openAt,
  closedAt,
  onRemove,
  setOpenAt,
  setCloseAt,
}) => {
  return (
    <div className="flex gap-3 justify-items-start items-center">
      <div>
        <p> Opens At</p>
        <input
          value={openAt}
          onChange={setOpenAt}
          className=" border-2 border-gray-500 py-2 px-5 rounded-md"
          type="time"
          id="opensAt"
          name="opensAt"
        ></input>
      </div>
      <div>
        <p> Closes At</p>
        <input
          value={closedAt}
          onChange={setCloseAt}
          className=" border-2 border-gray-500 py-2 px-5 rounded-md"
          type="time"
          id="closedAt"
          name="closedAt"
        ></input>
      </div>
      {index > 0 ? (
        <div className="">
          <button
            type="button"
            className="bg-secondary text-white font-bold py-2 px-4 rounded-full"
            onClick={onRemove}
          >
            -
          </button>
        </div>
      ) : null}
    </div>
  );
};
export default AddAvailability;
