import React from "react";
import { Link } from "react-router-dom";
import { CgNotes } from "react-icons/cg";
import { FiClock } from "react-icons/fi";
import { GrScorecard, GrFormSubtract } from "react-icons/gr";
import { RiArrowLeftSLine } from "react-icons/ri";

const SkillAssessmentDetail = () => {
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
            <div className="flex space-x-4  px-5 pb-5 ">
              <CgNotes size={24} className="text-secondary mt-2" />
              <div className="descri"><h3 className="font-bold  text-lg flex pt-1">
                Skill Assessments
              </h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non quam commodo, dictum justo a, varius nisl.</p>
             </div>
              </div>
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

                  <p>3M people took this</p>

                  <div className="px-5 py-5">
                    <div className="flex space-x-4 py-2">
                      <div>
                        <CgNotes size={20} />
                      </div>
                      <div className="font-s-medium">
                        15 multiple choice questions
                      </div>
                    </div>

                    <div className="flex space-x-4 py-2">
                      <div>
                        <FiClock size={20} />
                      </div>
                      <div className="font-s-medium">
                        1.5 minutes per question
                      </div>
                    </div>

                    <div className="flex space-x-4 py-2">
                      <div>
                        <GrScorecard size={20} />
                      </div>
                      <div className=" font-s-medium">
                        Score in the top 30% to earn a certificate
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="w-full h-[0.10rem] bg-inputcolor" />

            <div className=" px-5 py-10">
              <div>
                <h2 className="font-s-medium text-xl">Before you start</h2>

                <div className=" py-5">
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

                  <div className="flex space-x-4 py-2">
                    <div>
                      <GrFormSubtract size={20} />
                    </div>
                    <div className=" font-s-normal">
                      We won’t show your results to anyone without your
                      permission.
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
                  <Link to="/candidate/assessment-test">
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

export default SkillAssessmentDetail;
