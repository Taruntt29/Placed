import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { RiArrowLeftSLine } from "react-icons/ri";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { getQuestionById } from "../../../api/coachFunctions";
const ViewQuestionResponse = () => {
  const { state } = useLocation();
  console.log("state", state);
  const [questionData, setQuestionData] = useState();
  const getAllQuestionData = async () => {
    const { data, message, status } = await getQuestionById(state.questionId);
    if (status) {
      setQuestionData(data);
    } else {
      toast(message);
    }
  };
  useEffect(() => {
    getAllQuestionData();
  }, []);
  console.log("Question Data", questionData);
  return (
    <div className="bg-inputcolor">
      <div className="container mx-auto py-10  ">
        <div className="flex space-x-2 items-center pb-6 lg:px-0 px-5 ">
          {" "}
          <RiArrowLeftSLine className="text-secondary w-5 h-5 " />{" "}
          <p className="text-secondary font-s-medium text-base"> Service</p>{" "}
        </div>

        <div className="flex flex-col space-y-10 px-4 md:px-0">
          <div className="bg-white rounded-md py-3 ">
            <div className="lg:flex justify-between items-center pb-4">
              <div className="lg:flex flex-col">
                <div className="flex space-x-2  px-5 ">
                  <img alt="icon" src="/assets/images/response.png" />
                  <h3 className="font-bold  text-lg flex pt-1">
                    View Candidate Response
                  </h3>
                </div>

                <div className="px-16">
                  Lorem Ipsum is simply dummy text of the printing and{" "}
                </div>
              </div>
            </div>
            <hr className="w-full h-[0.10rem] bg-inputcolor" />
            {/* {questionData?.map((item, index) => {
              return ( */}
            <div className=" px-5">
              <div className="bg-inputcolor my-5 py-2 rounded-lg">
                <div className="lg:flex justify-between">
                  {" "}
                  <div className="flex items-center  px-5 space-x-4 ">
                    <img
                      alt="images"
                      src="/assets/images/chat-img3.png"
                      className="rounded-full"
                    />
                    <p className="text-secondary font-s-medium">
                      {questionData?.candidateName}
                    </p>
                  </div>
                  <div className="flex space-x-3 px-6 items-center lg:py-0 py-3">
                    <p className="font-s-medium text-secondary text-sm">
                      {questionData?.date}
                    </p>
                  </div>
                </div>
                <Link to="#">
                  <div className="px-5 md:flex md:space-x-20">
                    <p className="font-s-medium text-lg">
                      Adobe Photoshop Training for Beginner
                    </p>
                  </div>
                </Link>

                <p className="px-5 lg:w-[90%] w-full pt-2  text-justify">
                  {questionData?.questionsName}
                  {/* {item.questionsfromCandidate} */}
                </p>

                <div className=" px-5 lg:py-5 py-3">
                  <p className="px-5 lg:w-[90%] w-full pt-2  text-justify bg-white rounded-md py-5 border">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: questionData?.response,
                      }}
                    />
                  </p>
                </div>
              </div>
            </div>
            {/* ); })} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewQuestionResponse;
