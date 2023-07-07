import React from "react";
import { RiArrowLeftSLine } from "react-icons/ri";
import { BiMessageDetail } from "react-icons/bi";
import { AiOutlineStar } from "react-icons/ai";

import "react-calendar/dist/Calendar.css";

const RequestForTraining = () => {
  return (
    <div className="bg-inputcolor">
      <div className="container mx-auto pt-10 pb-10 lg:px-10 ">
        <div className="flex space-x-2 items-center pb-3 lg:px-0 px-5">
          {" "}
          <RiArrowLeftSLine className="text-secondary w-5 h-5 " />{" "}
          <p className="text-secondary font-s-medium text-base">
            {" "}
            Request for Training{" "}
          </p>{" "}
        </div>
        <div className=" rounded-md p-5">
          <div className="bg-white rounded-md ">
            <div className="flex items-center space-x-3 lg:px-7 px-5 py-4 ">
              <BiMessageDetail className="text-secondary" size={30} />
              <div className="text-2xl font-s-medium">
                Request for New Training
              </div>
            </div>
            <hr className="w-full h-[0.10rem] bg-inputcolor" />
            <div className="p-3">
              <div className="bg-white rounded-[15px]">
                <div className=" px-5 ">
                  <div className="w-full py-5">
                    <div className="flex justify-start flex-col space-y-1 w-full">
                      <div className="font-semibold text-[15px]">
                        Training Name
                      </div>
                      <input
                        type="text"
                        placeholder="Enter  Name"
                        name="name"
                        className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                      />
                    </div>
                  </div>

                  <div className="w-full">
                    <div className="flex justify-start flex-col space-y-1 w-full">
                      <div className="font-semibold text-[15px]">
                        Description
                      </div>
                      <input
                        type="text"
                        name="email"
                        placeholder="Enter Description"
                        className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                      />
                    </div>
                  </div>

                  <div className="w-full py-4">
                    <div className="flex justify-start flex-col space-y-1 w-full">
                      <div className="font-semibold text-[15px]">Date</div>
                      <input
                        type="date"
                        placeholder="Enter  Name"
                        name="name"
                        className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                      />
                    </div>
                  </div>

                  <div className="w-full py-4">
                    <div className="flex justify-start flex-col space-y-1 w-full">
                      <div className="font-semibold text-[15px]">Time Slot</div>
                      <input
                        type="time"
                        placeholder="Enter  Name"
                        name="name"
                        className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                      />
                    </div>
                  </div>

                  <div className="w-full py-4">
                    <div className="flex justify-start flex-col space-y-1 w-full">
                      <div className="font-semibold text-[15px]">Duration</div>
                      <input
                        type="time"
                        placeholder="Enter  Name"
                        name="name"
                        className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                      />
                    </div>
                  </div>

                  <div className="w-full py-4">
                    <div className="flex justify-start flex-col space-y-1 w-full">
                      <div className="font-semibold text-[15px]">Coach</div>
                      <select
                        name="cars"
                        id="cars"
                        className="py-1.5 bg-inputcolor rounded-md px-2"
                      >
                        <option value="coach1">Coach1</option>
                        <option value="coach2">Coach2</option>
                        <option value="coach3">Coach3</option>
                        <option value="coach4">Coach4</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" flex space-y-3 py-2 px-6">
                <div className="">
                  <button className="bg-secondary text-white font-s-medium px-8 py-3 rounded-[7px] text-sm">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestForTraining;
