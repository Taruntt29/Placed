import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { RiMiniProgramLine } from "react-icons/ri";
import { SiProgate } from "react-icons/si";
import { useState, useEffect } from "react";
import { CgNotes } from "react-icons/cg";
import { AiOutlineSearch } from "react-icons/ai";
import { BiChevronLeft } from "react-icons/bi";

const data = [
  {
    id: "1",
    recommended: true,
    heading: "PPLACD Assessment Test",
    date: "30 Oct 2022",
    status: "Failed",
    score: "Your score is 60%",
    para: "Topics: Interoperability, Nondestructive Editing, Output, Photoshop Fundamentals, Productivity Enhancements",
  },

  {
    id: "2",
    recommended: true,
    heading: "PPLACD Assessment Test",
    date: "30 Oct 2022",
    status: "Passed",
    score: "Your score is 60%",
    para: "Topics: Interoperability, Nondestructive Editing, Output, Photoshop Fundamentals, Productivity Enhancements",
  },
  {
    id: "3",
    recommended: false,
    heading: "PPLACD Assessment Test",
    date: "30 Oct 2022",
    status: "Passed",
    score: "Your score is 60%",
    para: "Topics: Interoperability, Nondestructive Editing, Output, Photoshop Fundamentals, Productivity Enhancements",
  },

  {
    id: "4",
    recommended: false,
    heading: "PPLACD Assessment Test",
    date: "30 Oct 2022",
    status: "Passed",
    score: "Your score is 60%",
    icons: <AiOutlineCheckCircle />,
    para: "Topics: Interoperability, Nondestructive Editing, Output, Photoshop Fundamentals, Productivity Enhancements",
  },
  {
    id: "5",
    recommended: true,
    heading: "PPLACD Assessment Test",
    date: "30 Oct 2022",
    status: "Passed",
    score: "Your score is 60%",
    para: "Topics: Interoperability, Nondestructive Editing, Output, Photoshop Fundamentals, Productivity Enhancements",
  },

  {
    id: "6",
    recommended: false,
    heading: "PPLACD Assessment Test",
    date: "30 Oct 2022",
    status: "Passed",
    score: "Your score is 20%",
    para: "Topics: Interoperability, Nondestructive Editing, Output, Photoshop Fundamentals, Productivity Enhancements",
  },
];

const Status = () => {
  const [arrData, setArrdata] = useState(data);
  const [tabs, setTabs] = useState("All");

  return (
    <div className="bg-[#F5F7F9]">
      <div className="max-w-[1150px] py-16 mx-auto">
        <div className="flex items-center mb-2 font-s-medium text-secondary text-lg">
          <BiChevronLeft className="text-3xl" />
          Assessment Test
        </div>

        <div className="bg-[#fff]  rounded-2xl">
          <div className="px-10 flex items-center space-x-3 font-s-medium text-2xl pt-10 pb-5">
            <CgNotes className="text-secondary" />
            <p> All Assessments Status </p>
          </div>
          <hr />

          <div className="px-4 sm:px-10 py-5">
            {arrData.map((item) => {
              return (
                <>
                  <div className="space-y-4 relative md:space-y-0 block sm:flex  md:space-x-6 mb-8 bg-[#F5F7F9] px-6 py-4 rounded-2xl">
                    {/* {item.heading === "Adobe Photoshop" ? <img src='/assets/images/photoshop.png'/> : <img src='/assets/images/Xd.png'/>} */}
                    <div className="space-y-2">
                      <div className="text-[#000] font-s-medium text-[20px] flex space-x-4">
                        <div className="text-[#000] font-s-medium text-[20px] ">
                          {item.heading}{" "}
                        </div>
                        <div className="text-xs text-gray-400 pt-1">
                          {item.date}
                        </div>
                      </div>
                      <div className="flex space-x-40 ">
                        <div className="text-sm">{item.para}</div>
                        <div className="text-sm font-semibold">
                          {item.score}
                        </div>
                      </div>
                    </div>
                    <div
                      className={`right-10 top-4 text-[13px] border-[1px] px-3 py-[2px] rounded-lg flex items-center  space-y-10 absolute ${
                        item.status == "Passed"
                          ? "bg-[#DBFBD7] border-[#17BB05]"
                          : item.status == "In Progress"
                          ? "bg-[#E9F1FF] border-[#0055FF]"
                          : item.status == "Failed"
                          ? "bg-[#FFE8E8] border-[#FF0000]"
                          : "bg-[#DCD9FB] border-[#8C82EA]"
                      }`}
                    >
                      {item.status == "Passed" ? (
                        <AiOutlineCheckCircle className="text-[#fff] rounded-[50%] bg-[#17BB05] mr-1" />
                      ) : item.status == "In Progress" ? (
                        <RiMiniProgramLine className="text-[#fff] rounded-[50%] bg-[#0055FF] mr-1" />
                      ) : item.status == "Failed" ? (
                        <AiOutlineExclamationCircle className="text-[#fff] rounded-[50%] bg-[#FF0000] mr-1" />
                      ) : (
                        <SiProgate className="text-[#fff] rounded-[50%] bg-[#8C82EA] mr-1" />
                      )}{" "}
                      {item.status}
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Status;
