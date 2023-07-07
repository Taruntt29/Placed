import React from "react";
import { RiArrowLeftSLine } from "react-icons/ri";
import { VscFeedback } from "react-icons/vsc";
import { AiOutlineStar } from "react-icons/ai";

const FeedbackForm = () => {
  return (
    <div className="bg-inputcolor">
      <div className="container mx-auto pt-10 pb-10 lg:px-10 ">
        <div className="flex space-x-2 items-center pb-3 lg:px-0 px-5">
          {" "}
          <RiArrowLeftSLine className="text-secondary w-5 h-5 " />{" "}
          <p className="text-secondary font-s-medium text-base">
            {" "}
            Feedback and Suggestions{" "}
          </p>{" "}
        </div>
        <div className=" rounded-md p-5">
          <div className="bg-white rounded-md ">
            <div className="flex items-center space-x-3 lg:px-7 px-5 py-4 ">
              <VscFeedback className="text-secondary" size={30} />
              <div className="text-2xl font-s-medium">
                Feedback and Suggestions
              </div>
            </div>
            <hr className="w-full h-[0.10rem] bg-inputcolor" />
            <div className="p-3">
              <div className="bg-white rounded-[15px]">
                <div className=" px-5 ">
                  <div className="w-full py-5">
                    <div className="flex justify-start flex-col space-y-1 w-full">
                      <div className="font-semibold text-[15px]">Name</div>
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
                      <div className="font-semibold text-[15px]">Email Id</div>
                      <input
                        type="text"
                        name="email"
                        placeholder="Enter Email"
                        className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                      />
                    </div>
                  </div>

                  <div className="w-full py-4">
                    <div className="flex justify-start flex-col space-y-1 w-full">
                      <div className="font-semibold text-[15px]">
                        Feedback and Suggestion
                      </div>
                      <textarea
                        type="text"
                        name="email"
                        placeholder="Feedback and Suggestion"
                        className="w-full resize-none outline-none bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                      />
                    </div>
                  </div>

                  <div className="w-full py-1">
                    <div className="flex justify-start flex-col space-y-1 w-full">
                      <div className="font-semibold text-[15px]">Rating</div>

                      <div className="flex space-x-2 py-2">
                        <AiOutlineStar size={20} />
                        <AiOutlineStar size={20} />
                        <AiOutlineStar size={20} />
                        <AiOutlineStar size={20} />
                        <AiOutlineStar size={20} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" flex space-x-3 py-2 px-6">
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

export default FeedbackForm;
