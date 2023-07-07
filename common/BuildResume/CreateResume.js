import React from "react";
import { Link } from "react-router-dom";

const CreateResume = () => {
  const Resumedata = [
    {
      id: "1",
      Resumeimg: "assets/images/resume1.png",
      linkone:"/template-one",
      link:"/resume-edit-one",
    },

    {
      id: "2",
      Resumeimg: "assets/images/resume2.png",
    },

    {
      id: "3",
      Resumeimg: "assets/images/resume3.png",
    },

    {
      id: "4",
      Resumeimg: "assets/images/resume1.png",
    },

    {
      id: "5",
      Resumeimg: "assets/images/resume2.png",
    },

    {
      id: "6",
      Resumeimg: "assets/images/resume3.png",
    },
  ];

  return (
    <div>
      <div className="max-w-[1150px] mx-auto">
        <div className="w-full py-20 space-y-3">
          <div className="text-center font-s-medium  text-sm md:text-xl text-secondary">
            Recruiter preferred, effective and proven
          </div>
          <div className="text-center text-black font-s-bold text-2xl md:text-4xl">
            Create your Best Resume in Minutes
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-16 mb-20">
          {Resumedata.map((item, index) => {
            return (
              <div>
                <div className="shadow-lg w-[80%] md:w-full mx-auto rounded-md p-8 ">
                  <img
                    src={item.Resumeimg}
                    alt="ResumeImage"
                    className="mx-auto"
                  />
                </div>

                <div className="w-full mt-8">
                  <button className="mx-auto flex">
                    <Link
                      to={item.linkone}
                      className="flex px-10 text-secondary py-2 rounded-full border-[1px] border-secondary"
                    >
                      View
                    </Link>
                  </button>
                  <br />
                  <Link to={item.link}>
                    {" "}
                    <button className="flex mx-auto bg-secondary text-[#fff] px-10 py-2 rounded-full">
                      Use Template
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CreateResume;
