import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoCall } from "react-icons/io5";
import { RiArrowLeftSLine } from "react-icons/ri";
import { BsCameraVideoFill } from "react-icons/bs";

import "react-calendar/dist/Calendar.css";
import { getAllServiceDataById } from "../../../api/candidateFunctions";

const ServiceDetail = () => {
  const [value, onChange] = useState(new Date());
  const navigate = useNavigate();
  const { state } = useLocation();
  const [dataMain, setDataMain] = useState([]);
  const getServiceData = async () => {
    try {
      const response = await getAllServiceDataById(state.serviceId);
      setDataMain(response.data[0]);
      console.log("djfhj", response.data[0]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getServiceData();
  }, []);
  // console.log("navigated state", state.serviceId);
  return (
    <div className="bg-inputcolor">
      <div className="container mx-auto py-10  ">
        <Link to="/candidate/all-services">
          <div className="flex space-x-2 items-center pb-6 lg:px-0 px-5 ">
            {" "}
            <RiArrowLeftSLine className="text-secondary w-5 h-5 " />{" "}
            <p className="text-secondary font-s-medium text-base">
              {" "}
              Services Details
            </p>{" "}
          </div>
        </Link>
        <div className="flex flex-col space-y-10 px-4 md:px-0">
          <div className="bg-white rounded-md py-3 ">
            <div className="lg:flex justify-between items-center py-2">
              <div className="flex space-x-4  px-5 pb-5">
                <img alt="icon" src="/assets/images/service-detail.png" />
                <h3 className="font-bold  text-lg flex pt-1">Services</h3>
              </div>
              <div className="flex items-center lg:justify-center lg:px-10 px-5 space-x-4">
                <img
                  alt="images"
                  src={dataMain?.coachId?.images?.[0]}
                  className="rounded-full w-[45px] h-[45px]"
                />
                <p className="text-secondary font-s-medium">
                  {dataMain?.coachId?.fullName}({dataMain?.coachId?._id})
                </p>
              </div>
            </div>
            <hr className="w-full h-[0.10rem] bg-inputcolor" />

            <div className=" px-5 my-3">
              <div className="bg-inputcolor py-4 lg:px-10 px-5 rounded-md">
                <h4 className="text-xl font-s-medium">
                  {dataMain?.serviceName}
                </h4>
                <p className="py-2 text-justify">{dataMain?.description}</p>
                <p className="py-2 text-justify">{dataMain?.additionalDetail}</p>
                {/* <p className="py-2 text-justify">
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, Lorem Ipsum is simply dummy text. Lorem Ipsum
                  has been the industry's standard Lorem Ipsum is simply dummy
                  text of the printing and typesetting industry.{" "}
                </p>
                <p className="py-2 text-justify">
                  Lorem Ipsum has been the industrys standard dummy text ever
                  since the 1500s, Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry.{" "}
                </p> */}
                {/* <p className="py-2 text-justify">
                  Lorem Ipsum has been the industry's standard Dummy text ever
                  since the 1500s, Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s
                </p> */}

                <div className=" px-5">
                  {/* {dataMain?.map((item) => ( */}
                  <div className="bg-inputcolor py-2 rounded-lg">
                    <hr className="w-full h-[0.10rem] bg-inputcolor" />
                    <div className="grid lg:grid-cols-4 space-x-4 ">
                      <div className="bg-[#fff] py-2 px-10 rounded-full my-3 font-s-bold">
                        Special Price :{" "}
                        {parseInt(dataMain?.enterPrice) +
                          parseInt(dataMain?.gst)}
                        <span className="text-secondary font-s-bold">
                          {dataMain?.price}
                        </span>
                      </div>
                      <div className="bg-[#fff] py-2 px-10 rounded-full my-3 flex space-x-2 font-s-bold">
                        Medium :
                        <div className="flex space-x-5">
                          {dataMain?.medium?.map((option) => {
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
                      </div>
                      <div className="bg-[#fff] py-2 px-10 rounded-full my-3 font-s-bold">
                        Service Duration :
                        <span className="text-secondary font-s-bold">
                          {dataMain?.serviceduration}
                        </span>
                      </div>
                      <div className="bg-[#fff] py-2 px-10 rounded-full my-3 font-s-bold">
                        Duration per Session :
                        <span className="text-secondary font-s-bold">
                          {dataMain?.durationofSession}
                        </span>
                      </div>
                      <div className="bg-[#fff] py-2 px-10 rounded-full my-3 font-s-bold">
                        Language :
                        <span className="text-secondary font-s-bold">
                         {dataMain?.language?.toString(" , ")}
                        </span>
                      </div>
                      <div className="bg-[#fff] py-2 px-10 rounded-full my-3 font-s-bold">
                        Number of sessions :
                        <span className="text-secondary font-s-bold">
                         {dataMain?.NoofSession}
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* ))} */}
                </div>
              </div>
              <hr className="w-full h-[0.10rem] bg-inputcolor mb-4" />
              <button
                className="px-5 py-3 bg-secondary text-primary rounded"
                onClick={() => {
                  navigate("/candidate/slot-booking", {
                    state: {
                      coachId: dataMain?.coachId?._id,
                      serviceId: dataMain?._id,
                      noOfSession: dataMain?.NoofSession,
                      totalwithdrawAmount: dataMain?.withdrawnAmount,
                    },
                  });
                }}
              >
                Buy Now
              </button>

              {/* <div className="md:flex block lg:space-x-36 space-y-10 bg-inputcolor pb-10 md:space-y-0 pt-10 px-6 md:px-10 w-full">
             
                <div className="">
                  <h3 className="text-2xl font-s-medium ">Availability</h3>
                  <div className="my-6">
                    <Calendar
                      onChange={onChange}
                      value={value}
                      className="shadow-xl mx-auto md:m-0 px-6 py-4 "
                    />
                  </div>

                  <button className="py-2 bg-secondary text-white px-10  rounded-full">
                    Buy Now
                  </button>
                </div>

                <div className="pt-12">
                  <h5 className="font-s-medium text-xl">Pick Up Time</h5>
                  <div className="pt-4 grid grid-cols-2 gap-5">
                    <button className="bg-white py-2 lg:px-10 px-2 rounded-full hover:bg-secondary hover:text-white">
                      12:00 PM
                    </button>
                    <button className="bg-white py-2 lg:px-10 px-2 rounded-full hover:bg-secondary hover:text-white">
                      12:00 PM
                    </button>
                    <button className="bg-white py-2 lg:px-10 px-2 rounded-full hover:bg-secondary hover:text-white">
                      12:00 PM
                    </button>
                    <button className="bg-white py-2 lg:px-10 px-2 rounded-full hover:bg-secondary hover:text-white">
                      12:00 PM
                    </button>
                    <button className="bg-white py-2 lg:px-10 px-2 rounded-full hover:bg-secondary hover:text-white">
                      12:00 PM
                    </button>
                    <button className="bg-white py-2 lg:px-10 px-2 rounded-full hover:bg-secondary hover:text-white">
                      12:00 PM
                    </button>
                    <button className="bg-white py-2 lg:px-10 px-2 rounded-full hover:bg-secondary hover:text-white">
                      12:00 PM
                    </button>
                    <button className="bg-white py-2 lg:px-10 px-2 rounded-full hover:bg-secondary hover:text-white">
                      12:00 PM
                    </button>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
