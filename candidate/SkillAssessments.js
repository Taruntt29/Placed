import React, { useEffect, useState } from "react";
import { BiChevronLeft } from "react-icons/bi";
import { CgNotes } from "react-icons/cg";
import { AiOutlineSearch } from "react-icons/ai";

const data = [
  {
    id: "1",
    recommended: true,
    heading: "Adobe Photoshop",
    para: "Topics: Interoperability, Nondestructive Editing, Output, Photoshop Fundamentals, Productivity Enhancements",
  },

  {
    id: "2",
    recommended: true,
    heading: "Adobe XD",
    para: "Topics: Adding and Formatting Content, Building Publications, Layout Fundamentals, Output",
  },

  {
    id: "3",
    recommended: false,
    heading: "Adobe Photoshop",
    para: "Topics: Interoperability, Nondestructive Editing, Output, Photoshop Fundamentals, Productivity Enhancements",
  },

  {
    id: "4",
    recommended: false,
    heading: "Adobe XD",
    para: "Topics: Adding and Formatting Content, Building Publications, Layout Fundamentals, Output",
  },

  {
    id: "5",
    recommended: true,
    heading: "Adobe Photoshop",
    para: "Topics: Interoperability, Nondestructive Editing, Output, Photoshop Fundamentals, Productivity Enhancements",
  },

  {
    id: "6",
    recommended: false,
    heading: "Adobe Photoshop",
    para: "Topics: Adding and Formatting Content, Building Publications, Layout Fundamentals, Output",
  },
];

const SkillAssessments = () => {
  const [skillData, setSkillData] = useState(data);
  const [tab, setTab] = useState("All");

  const handleFilterData = () => {
    if (tab == "All") {
      setSkillData(data);
    } else if (tab == "Recommended") {
      const newData = data.filter((item) => {
        return item.recommended == true;
      });
      setSkillData(newData);
    }
  };

  useEffect(() => {
    handleFilterData();
  }, [tab]);

  return (
    <div className="bg-[#F5F7F9]">
      <div className="max-w-[1150px] py-16 mx-auto">
        <div className="flex items-center mb-2 font-s-medium text-secondary text-lg">
          <BiChevronLeft className="text-3xl" />
          Assessment Test
        </div>

        <div className="bg-[#fff]  rounded-2xl">
          <div className="px-10 flex items-center space-x-3 font-s-medium text-[25px] pt-10 pb-5">
            <CgNotes className="text-secondary" />
          <p>Skill Assessments</p>  
          </div>
          <hr />

          <div className="block space-y-6 md:space-y-0 sm:flex justify-between px-4 sm:px-10 py-5 items-center">
            <div className="flex  items-center  space-x-4">
              <button
                onClick={() => setTab("All")}
                className={
                  tab == "All"
                    ? "bg-secondary text-white px-4 sm:px-8 py-2 rounded-full"
                    : "border-[1px] px-4 sm:px-8 py-2 font-s-medium text-black rounded-full border-secondary"
                }
              >
                All
              </button>
              <button
                onClick={() => setTab("Recommended")}
                className={
                  tab == "Recommended"
                    ? "bg-secondary text-white px-4 sm:px-8 py-2 rounded-full"
                    : "border-[1px] px-4 sm:px-8 py-2 font-s-medium text-black rounded-full border-secondary"
                }
              >
                Recommended
              </button>
            </div>

            <div className="flex  items-center bg-[#F5F7F9] rounded-full px-4 py-2">
              <input
                type="search"
                id="search"
                placeholder="Search"
                className="bg-transparent w-full placeholder:text-black placeholder:opacity-50"
              />
              <AiOutlineSearch className="text-xl text-black text-opacity-50" />
            </div>
          </div>

          <div className="px-4 sm:px-10 py-5">
            {skillData.map((item) => {
              return (
                <>
                  <div className="space-y-4 md:space-y-0 block sm:flex items-center md:space-x-6 mb-8 bg-[#F5F7F9] px-6 py-4 rounded-2xl">
                    {item.heading === "Adobe Photoshop" ? (
                      <img src="/assets/images/photoshop.png" />
                    ) : (
                      <img src="/assets/images/Xd.png" />
                    )}
                    <div className="space-y-2">
                      <div className="text-[#000] font-s-medium text-[20px]">
                        {item.heading}
                      </div>
                      <p>{item.para}</p>
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

export default SkillAssessments;
