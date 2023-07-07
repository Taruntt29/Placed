import React from "react";
import { Link } from "react-router-dom";
import { RiArrowLeftSLine } from "react-icons/ri";
import { CgNotes } from "react-icons/cg";

import { GrFormSubtract } from "react-icons/gr";

const CarrerAssessment = () => {
  return (
    <div>
      <div className="container mx-auto py-10  ">
        <div className="flex flex-col items-center pb-6 lg:px-0 px-5 ">
          {" "}
          <h5 className="text-secondary font-s-medium text-lg">
            {" "}
            Career Assessment Test
          </h5>{" "}
          <p className="lg:text-3xl text-xl font-s-bold lg:px-24  lg:text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className="flex flex-col space-y-10 px-4 md:px-0">
          <div className="bg-white rounded-md py-3 ">
            <hr className="w-full h-[0.10rem] bg-inputcolor" />

            <div className=" px-5">
              <div>
                <div className="pt-4">
                  <h5 className="font-s-medium text-xl">
                    PPLACD Assessment Test
                  </h5>

                  <p className="py-2 ">
                    Topics: Interoperability, Nondestructive Editing, Output,
                    Photoshop Fundamentals, Productivity Enhancements
                  </p>

                  <div className="py-2">
                    <div className="flex space-x-4 py-2">
                      <div>
                        <CgNotes size={20} />
                      </div>
                      <div className="font-s-medium">
                        50 multiple choice questions
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="w-full h-[0.10rem] bg-inputcolor" />

            <div className=" px-5 py-5">
              <div>
                <h2 className="font-s-medium text-xl">Before you start</h2>

                <div className=" ">
                  <div className="flex space-x-4 py-2">
                    <div>
                      <GrFormSubtract size={20} />
                    </div>
                    <div className="font-s-normal">
                      You must complete this assessment in one session — make
                      sure your internet is reliable.
                    </div>
                  </div>

                  <div className="flex space-x-4 py-2">
                    <div>
                      <GrFormSubtract size={20} />
                    </div>
                    <div className="font-s-normal">
                      You can retake this assessment once if you don't get
                      certificate.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <hr className="w-full h-[0.10rem] bg-inputcolor" />

            <div className=" px-5">
              <div className="flex justify-between  py-5">
                <div className="flex space-x-2">
                  {" "}
                  <div className="">Language:</div>
                  <div className="font-s-medium"> English</div>
                </div>
                <div>
                  <Link to="/assessment-test">
                    <button className="px-8 py-2 font-semibold rounded text-white bg-secondary">
                      Start
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarrerAssessment;
