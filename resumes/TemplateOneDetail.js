import React, { useEffect, useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { FaBeer } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { getResumeById } from "../../api/publicFunctions";
import ReactToPdf from "react-to-pdf";
const TemplateOneDetail = () => {
  const { state } = useLocation();
  const resumeId = state.resumeId;
  // const resumeId = "63f765c7c9f24e65bd27a93f";
  const [resumeData, setResumeData] = useState([]);
  // console.log("resumeId", resumeId);
  const getResumeData = async () => {
    const { data, status, message } = await getResumeById(resumeId);
    if (status) {
      setResumeData(data[0]);
      console.log("resume data", data[0]);
    } else {
      toast(message);
    }
  };
  useEffect(() => {
    getResumeData();
  }, []);
  const ref = React.createRef();
  return (
    <div className="bg-white pb-12">
      <div className="lg:px-32 pb-3 w-full flex justify-end">
        {/* <button className="bg-secondary text-white py-3 px-12 rounded font-s-medium"> */}
        <ReactToPdf targetRef={ref} filename="div-blue.pdf">
          {({ toPdf }) => (
            <button
              onClick={toPdf}
              className="bg-secondary text-white py-3 px-12 rounded font-s-medium"
            >
              Generate pdf
            </button>
          )}
        </ReactToPdf>
        {/* </button> */}
      </div>
      <div className="  relative container mx-auto shadow-2xl " ref={ref}>
        <div className="bg-[#8d4b55] relative px-10 py-6 ">
          {/* {console.log("uploadImage", resumeData.uploadImage)} */}
          <img
            src={
              resumeData.uploadImage
                ? resumeData.uploadImage
                : "/assets/images/person4.png"
            }
            alt=""
            className="rounded-full bg-white absolute w-40 h-40 object-cover object-top"
          />
          <div className="flex flex-col justify-end items-end">
            <h2 className="text-white text-4xl  font-semibold ">
              {resumeData?.fullName}{" "}
            </h2>
            <p className="text-white">{resumeData?.position}</p>
          </div>
        </div>
        <div className="grid grid-cols-9 gap-5 px-10">
          <div className="col-span-3 pt-24">
            <div>
              <h3 className="text-[#8d4b55] text-xl font-semibold">
                My Contact
              </h3>
              <hr className="bg-[#8d4b55] h-[4px] w-[32%]" />
              <div className="flex items-center pt-2 gap-3">
                {" "}
                <AiOutlineMail /> <p>{resumeData?.email}</p>
              </div>
              <div className="flex items-center gap-3 pt-2">
                {" "}
                <BsTelephone /> <p>{resumeData?.mobile}</p>
              </div>

              <div className="flex items-center gap-3 pt-2">
                {" "}
                <MdLocationOn />{" "}
                <p>
                  {resumeData?.address}, {resumeData?.city}, {resumeData?.state}
                  ,{resumeData?.country}
                </p>
              </div>
            </div>

            <div className="pt-5">
              <h3 className="text-[#8d4b55] text-xl font-semibold">
                Professional Skill
              </h3>
              <hr className="bg-[#8d4b55] h-[4px] w-[45%]" />
              <div className="pt-2">
                {resumeData?.professionalSkill?.map((item, index) => {
                  return (
                    <div className="">
                      <p> {item?.Skill}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="pt-5">
              <h3 className="text-[#8d4b55] text-xl font-semibold">
                Personal Skill
              </h3>
              <hr className="bg-[#8d4b55] h-[4px] w-[34%]" />
              <div className="pt-2">
                {resumeData?.personalSkill?.map((item, index) => {
                  return (
                    <div className="">
                      <p> {item?.Skill}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="pt-5 pb-5">
              <h3 className="text-[#8d4b55] text-xl font-semibold ">
                Education Background
              </h3>
              <hr className="bg-[#8d4b55] h-[4px] w-[62%]" />
              <ul className="decoration-none list-disc pt-3 ml-4">
                <li className="">
                  {resumeData &&
                    resumeData.addPostGraduationDetails?.map((item, index) => {
                      return (
                        <div className="">
                          <p> {item?.schoolUniversity}</p>
                          <p>{item?.courseName}</p>
                          <p>
                            Completed in {item?.passingYear.substring(0, 4)}
                          </p>
                        </div>
                      );
                    })}
                </li>
              </ul>
              <ul className="decoration-none list-disc pt-3 ml-4">
                <li className="">
                  {resumeData &&
                    resumeData.addGraduationDetails?.map((item, index) => {
                      return (
                        <div className="">
                          <p> {item?.schoolUniversity}</p>
                          <p>{item?.courseName}</p>
                          <p>
                            Completed in {item?.passingYear.substring(0, 4)}
                          </p>
                        </div>
                      );
                    })}
                </li>
              </ul>
              <ul className="decoration-none list-disc pt-3 ml-4">
                <li className="">
                  {resumeData &&
                    resumeData.addClassXIIDetails?.map((item, index) => {
                      return (
                        <div className="">
                          <p> {item?.schoolUniversity}</p>
                          <p>{item?.courseName}</p>
                          <p>
                            Completed in {item?.passingYear.substring(0, 4)}
                          </p>
                        </div>
                      );
                    })}
                </li>
              </ul>
              <ul className="decoration-none list-disc pt-3 ml-4">
                <li className="">
                  {resumeData &&
                    resumeData.addClassXDetails?.map((item, index) => {
                      return (
                        <div className="">
                          <p> {item?.schoolUniversity}</p>
                          <p>{item?.courseName}</p>
                          <p>
                            Completed in {item?.passingYear.substring(0, 4)}
                          </p>
                        </div>
                      );
                    })}
                </li>
              </ul>
            </div>
          </div>

          <div className="col-span-6">
            <div className="pt-10">
              <h3 className="text-[#8d4b55] text-xl font-semibold">About Me</h3>
              <hr className="bg-[#8d4b55] h-[4px] w-[13%]" />
              <p className="pt-2">{resumeData.aboutMe}</p>
            </div>

            <div className="pt-5">
              <h3 className="text-[#8d4b55] text-xl font-semibold">
                Professional Experience{" "}
              </h3>
              <hr className="bg-[#8d4b55] h-[4px] w-[33%]" />
              {resumeData?.workExperience?.map((item, index) => {
                return (
                  <div>
                    <p className="pt-3 font-semibold">
                      {" "}
                      {item.companyName}
                      <br />
                      {item.date}
                    </p>
                    <p>Designation:</p>
                    <p>{item.designation}</p>
                    <p>Key responsibilities:</p>
                    <p className="pt-2">{item.responsibilities}</p>
                  </div>
                );
              })}
            </div>

            <div className="pt-5 pb-5">
              <h3 className="text-[#8d4b55] text-xl font-semibold">
                Achievements
              </h3>
              <hr className="bg-[#8d4b55] h-[4px] w-[19%]" />
              <div className="grid-cols-5 grid  pt-3 ">
                {resumeData?.addAchievements?.map((item, index) => {
                  return (
                    <>
                      <p className="col-span-1">
                        {item?.year.substring(0, 4)}{" "}
                      </p>
                      <p className="col-span-4">{item?.aboutAchievements}</p>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateOneDetail;
