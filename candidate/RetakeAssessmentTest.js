import React from "react";

import { AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import { RiArrowLeftSLine } from "react-icons/ri";

const RetakeAssessmentTest = () => {
  return (
    <div className="bg-inputcolor">
      <div className="container mx-auto py-10  ">
        <div className="flex space-x-2 items-center pb-6 lg:px-0 px-5 ">
          {" "}
          <RiArrowLeftSLine className="text-secondary w-5 h-5 " />{" "}
          <p className="text-secondary font-s-medium text-base">
            {" "}
            Assessment Test{" "}
          </p>{" "}
        </div>
        <div className="flex flex-col space-y-10 px-4 md:px-0">
          <div className="bg-white rounded-md py-3 ">
            <div className="flex items-center justify-between  px-5 pb-5">
              <h3 className="font-bold text-center text-lg flex pt-1">
                Adobe Photoshop Assessments
              </h3>
              <div className="flex items-center justify-center space-x-2">
                <h6 className="font-s-medium">Status:</h6>
                <button className="px-5 bg-red-600 text-white rounded py-0.5">
                  Fail
                </button>
              </div>
            </div>
            <hr className="w-full h-[0.10rem] bg-inputcolor" />

            <div className=" px-5 py-4">
              <div>
                <h5 className="font-s-medium text-xl">
                  Unfortunately, you didn’t pass.
                </h5>

                <p className="py-2 ">
                  You’ll get another chance to retake the assessment.
                </p>

                <div className="flex space-x-4 py-2">
                  <div>
                    <AiFillEye size={20} />
                  </div>
                  <div className="font-s-medium">Private to you</div>
                </div>
                <p>
                  Your score is in the bottom 30%. Score in the top 30% to earn
                  a Certificate.
                </p>
              </div>
            </div>
            <hr className="w-full h-[0.10rem] bg-inputcolor" />

            <div className="float-right flex space-x-6 py-3 px-5">
              <Link to="/retake-skilltest">
                <button className="text-secondary font-s-medium border-2 border-secondary px-5 py-1.5 rounded-md">
                  Retake
                </button>
              </Link>
              <button className="bg-secondary text-white font-s-medium border-2 border-secondary px-5 py-1.5 rounded-md">
                Done
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetakeAssessmentTest;
