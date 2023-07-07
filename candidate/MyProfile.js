import React, { useRef, useState, useEffect } from "react";

import {
  MdMailOutline,
  MdOutlineGroups,
  MdUploadFile,
  MdPhone,
  MdEdit,
} from "react-icons/md";
import { GiStabbedNote } from "react-icons/gi";
import { RiArrowLeftSLine, RiSuitcaseLine } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { BsLink45Deg, BsWhatsapp } from "react-icons/bs";
import { ImCross } from "react-icons/im";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import {
  candidateProfileGetAPI,
  updateCandidateBanner,
  getBannerImageById,
  getShareLink,
} from "../../../api/authCandidate";
import { async } from "q";

const MyProfile = () => {
  const [uploadimagetwo, setUploadImageTwo] = useState();
  const fileRef2 = useRef();

  const { userDetails } = useSelector((state) => state.flightReducer);
  const candidateId = userDetails._id;

  console.log("User Details Data", userDetails);

  console.log("Candidate Data Profile Id", candidateId);

  const [candidateData, setCandidateData] = useState();

  const handleUpload = (event) => {
    setUploadImageTwo(event.target.files[0]);
  };

  const [profileImg, setProfileImg] = useState();

  const updateBanner = async () => {
    const formdata = new FormData();
    formdata.append("bannerImage", profileImg);
    try {
      const response = await updateCandidateBanner(formdata);
      if (response.status) {
        console.log(response.data);
        getCandidateData();
        toast(response.message);
      } else {
        toast(response.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getCandidateData = async () => {
    const { data, status, message } = await getBannerImageById(candidateId);
    console.log("Data Img", data);
    if (status) {
      setProfilePic(data.bannerImage[0]);
    } else {
      toast(message);
    }
  };

  const education = [
    {
      id: "1",
      src: "/assets/images/eduLogo.png",
      university: "Monad University",
      degree: "Bachelor of Fine Arts - BFA, Design and Applied Arts",
      year: "2022 - 2025",
    },
  ];

  const workexperience = [
    {
      id: "1",
      src: "/assets/images/Logo1.png",
      title: " UI UX Designer",
      company: " 360 Connect Inc · Full-time",
      time: "Feb 2022 - Present · 9 months ",
      location: "London Area, United Kingdom",
    },
  ];

  const getLink = async () => {
    try {
      const response = await getShareLink(userDetails._id);
    } catch (error) {
      console.log(error);
    }
  };

  const base_url = window.location.origin;

  const [profilePic, setProfilePic] = useState();
  const [dummy, setDummy] = useState();
  const handleProfilePic = (e) => {
    console.log(e.target.files);
    setProfilePic(URL.createObjectURL(e.target.files[0]));
    setProfileImg(e.target.files[0]);
    setDummy(e.target.files[0]);
  };

  let [isOpenShare, setIsOpenShare] = React.useState(false);

  function closeModalShare() {
    setIsOpenShare(false);
  }

  useEffect(() => {
    setProfileImg(dummy);
    updateBanner();
    getCandidateData();
  }, [dummy]);

  function openModalShare() {
    setIsOpenShare(true);
  }

  useEffect(() => {
    GetCandidateProfile();
  }, []);

  console.log("Candiate Data", candidateData);

  const GetCandidateProfile = async () => {
    try {
      const response = await candidateProfileGetAPI(candidateId);
      console.log("Candidate Data Show", response);
      setCandidateData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-inputcolor">
      <div className="container mx-auto py-10  ">
        <div className="flex space-x-2 items-center pb-6 lg:px-0 px-5 ">
          {" "}
          <RiArrowLeftSLine className="text-secondary w-5 h-5 " />{" "}
          <p className="text-secondary font-s-medium text-base"> My Profile </p>{" "}
        </div>
        <div className="flex flex-col space-y-10 px-4 md:px-0">
          <div className="bg-white rounded-md ">
            <div className="inline-flex flex-col   justify-end items-end gap-2 rounded-[6px] ">
              <div className="p-4 flex  flex-col gap-2 ">
                <img
                  alt="profile-banner"
                  src={
                    profilePic
                      // ? profilePic
                      // : "/assets/images/background-profile.png"
                  }
                  className="w-[90vw]  max-h-60 object-cover"
                />

                <div className=" p-4  rounded-xl  ">
                  <img
                    src={candidateData && candidateData.images?.[0]}
                    alt={candidateData && candidateData.images?.[0]}
                    width={120}
                    className="-mt-20 flex items-start justify-start"
                  />
                </div>
                <input
                  type="file"
                  name="uploadfile"
                  id="img"
                  className="hidden w-[70%]"
                  onChange={handleProfilePic}
                />
                <label for="img">
                  <MdEdit
                    className="text-secondary -mt-60 shadow-xl bg-white rounded p-1  float-right cursor-pointer"
                    size={32}
                  />
                </label>
              </div>
            </div>

            <div className="bg-white md:flex items-center md:justify-end justify-center md:space-x-6   px-10">
              <div>
                <NavLink
                  to={`/candidate/edit-candidate-profile/${candidateId}`}
                >
                  <button className="text-sm bg-secondary  text-white font-s-medium  px-10 py-2 rounded-full shadow-sm shadow-slate-700 ">
                    Edit Profile
                  </button>
                </NavLink>
              </div>
              <div>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(
                      `${base_url}/candidate-detail/${userDetails._id}`
                    );
                    toast("Link Successfully Copied!!");
                  }}
                  className="text-sm border border-secondary  text-secondary font-s-medium  px-10 py-2 rounded-full shadow-slate-700 md:mt-0 mt-4"
                >
                  Share Profile
                </button>
              </div>
            </div>

            <div>
              <div className="bg-white  px-10 flex flex-col space-y-5 rounded-b-md">
                <div className="felx flex-col space-y-1 md:mt-0 mt-3">
                  <div className="text-black text-opacity-80  font-s-bold text-4xl ">
                    {" "}
                    {candidateData && candidateData.candidateName}{" "}
                  </div>
                  <div className="text-black text-opacity-80 text-[20px] font-s-bold ">
                    {" "}
                    {candidateData && candidateData.categoryId.name}{" "}
                  </div>
                  {/* <div className="text-black pt-1 font-s-medium text-[13px] ">
                    UI-UX Designer at 360 Connect INC
                  </div> */}
                  <div className="text-black text-opacity-60 font-s-medium text-[13px] pt-1 ">
                    {candidateData && candidateData.state},{" "}
                    {candidateData && candidateData.country}
                  </div>
                </div>

                <div className=" flex-col pb-6 flex md:flex-row md:space-x-10 space-x-0 md:space-y-0 space-y-10 pt-3">
                  <div className="flex items-center space-x-2">
                    <MdMailOutline className=" w-6 h-6 text-secondary" />
                    <div className=" text-sm font-s-medium ">
                      {" "}
                      {candidateData && candidateData.email}
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <RiSuitcaseLine className=" w-6 h-6 text-secondary" />
                    <div className=" text-sm font-s-medium ">
                      {" "}
                      {candidateData && candidateData.experience}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MdPhone className=" w-6 h-6 text-secondary" />
                    <div className=" text-sm font-s-medium ">
                      {" "}
                      {candidateData && candidateData.phoneNumber}{" "}
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <GiStabbedNote className=" w-6 h-6 text-secondary" />
                    <div className=" text-sm font-s-medium ">
                      {" "}
                      {candidateData && candidateData.availability
                        ? "Immediate joinee / Serving Notice Period"
                        : "Not Available immediately"}{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-md py-3 ">
            <div className="lg:px-10 px-5 py-3 flex justify-between">
              <div className="lg:text-2xl text-xl font-s-medium">Bio</div>
              {/* <Link to="/candidate/edit-candidate-profile">
                {" "}
                <MdEdit
                  className="text-secondary rounded bg-primary p-1 "
                  size={32}
                />
              </Link> */}
            </div>
            <hr className="w-full h-[0.10rem] bg-inputcolor" />
            <div className="lg:px-10 px-5 py-4">
              <div className="text-base font-s-medium text-black opacity-50  text-justify">
                {candidateData &&
                  candidateData?.bio?.replace(/<\/?[^>]+(>|$)/g, "")}
                {/* <span className="font-s-bold">see more</span> */}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-md py-3 ">
            <div className="lg:px-10 px-5 py-3 flex justify-between">
              <div className="lg:text-2xl text-xl font-s-medium">Featured</div>
              {/* <Link to="/candidate/edit-candidate-profile">
                {" "}
                <MdEdit
                  className="text-secondary rounded bg-primary p-1 "
                  size={32}
                />
              </Link> */}
            </div>
            <hr className="w-full h-[0.10rem] bg-inputcolor" />
            <div className="flex px-5 space-x-5 mt-5">
              <div className="bg-gray-300">
                <div className="flex items-center justify-center mx-auto">
                  <input
                    className="hidden"
                    ref={fileRef2}
                    onChange={handleUpload}
                    type="file"
                  />

                  <div className="flex flex-col  items-center justify-center py-3">
                    {" "}
                    <button
                      className="  "
                      onClick={(e) => fileRef2.current.click()}
                    >
                      {uploadimagetwo ? (
                        <img
                          alt="upload"
                          src={URL.createObjectURL(uploadimagetwo)}
                        />
                      ) : (
                        <img
                          alt="upload"
                          src="/assets/images/portfolio.png"
                          className="w-16"
                        />
                      )}
                    </button>
                    <h6 className="px-3 text-sm py-4">Upload your Document</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-md py-3 ">
            <div className="lg:px-10 px-5 py-3 flex justify-between">
              <div className="lg:text-2xl text-xl font-s-medium">
                Work Experience
              </div>
              {/* <Link to="/candidate/edit-candidate-profile">
                {" "}
                <MdEdit
                  className="text-secondary rounded bg-primary p-1 "
                  size={32}
                />
              </Link> */}
            </div>
            <hr className="w-full h-[0.10rem] bg-inputcolor" />
            <div className="py-5 lg:px-10 px-5 grid grid-cols-1 ">
              <div className="py-5  flex flex-col lg:px-10 px-5  grid-cols-1 ">
                {candidateData &&
                  candidateData.workExperience.map((item) => (
                    <div className="w-full" key={item._id}>
                      <div className="flex space-x-5  items-center">
                        <img src={workexperience[0].src} />
                        {/* <div className="bg-white p-2 shadow-md shadow-slate-400 rounded-xl ">
                        <img src={item.src} alt="/" className="w-16 h-16 " />
                      </div> */}
                        <div className="p-5">
                          <p className="text-lg font-s-medium text-secondary">
                            {item.designation}
                          </p>
                          <p className="text-base font-s-medium">
                            {item.companyName}
                          </p>
                          <p className="text-sm font-s-medium text-black opacity-60">
                            {item.startDate} - {item.endDate}
                          </p>
                          <p className="text-sm font-s-medium text-black opacity-60">
                            {item.location}{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-md py-3 ">
            <div className="lg:px-10 px-5 py-3 flex justify-between">
              <div className="lg:text-2xl text-xl font-s-medium">Education</div>
              {/* <Link to="/candidate/edit-candidate-profile">
                {" "}
                <MdEdit
                  className="text-secondary rounded bg-primary p-1 "
                  size={32}
                />
              </Link> */}
            </div>
            <hr className="w-full h-[0.10rem] bg-inputcolor" />
            <div className="py-5 lg:px-10 px-5 grid grid-cols-1 md:space-x-2 space-x-5">
              <h4 className="w-full mb-2 text-left text-lg font-bold">
                {" "}
                Class X details
              </h4>
              <div className="py-5  flex flex-wrap lg:px-10 px-5  grid-cols-1 md:space-x-2 space-x-5">
                <div className="w-[35%]">
                  <div className="flex space-x-5  items-center">
                    {/* <div className="bg-white p-2 shadow-md shadow-slate-400 rounded-xl ">
                      <img src={item.src} alt="/" className="w-16 h-16 " />
                    </div> */}
                    <img src={education[0].src} />

                    <div className="">
                      <p className="text-lg font-s-medium text-secondary">
                        School & University :{" "}
                        {candidateData &&
                          candidateData.classXdetails.schoolUniversityX}
                      </p>
                      <p className="text-base font-s-medium">
                        Passing Year :{" "}
                        {candidateData &&
                          candidateData.classXdetails.passingYearX}
                      </p>
                      <p className="text-sm font-s-medium text-black opacity-60">
                        Percentage :{" "}
                        {candidateData &&
                          candidateData.classXdetails.percentageX}{" "}
                        %
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <h4 className="w-full mb-2 text-left text-lg font-bold">
                {" "}
                Class XII details
              </h4>
              <div className="py-5  flex flex-wrap lg:px-10 px-5  grid-cols-1 md:space-x-2 space-x-5">
                <div className="w-[35%]">
                  <div className="flex space-x-5  items-center">
                    {/* <div className="bg-white p-2 shadow-md shadow-slate-400 rounded-xl ">
                      <img src={item.src} alt="/" className="w-16 h-16 " />
                    </div> */}
                    <img src={education[0].src} />

                    <div className="">
                      <p className="text-lg font-s-medium text-secondary">
                        School & University :{" "}
                        {candidateData &&
                          candidateData.classXIIdetails.schoolUniversityXii}
                      </p>
                      <p className="text-base font-s-medium">
                        Course Type :{" "}
                        {candidateData &&
                          candidateData.classXIIdetails.courseTypeXii}
                      </p>
                      <p className="text-base font-s-medium">
                        Passing Year :{" "}
                        {candidateData &&
                          candidateData.classXIIdetails.passingYearXii}
                      </p>
                      <p className="text-sm font-s-medium text-black opacity-60">
                        Percentage :{" "}
                        {candidateData &&
                          candidateData.classXIIdetails.percentageXii}{" "}
                        %
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {candidateData?.graduationDetails?.length > 0 ? (
                <>
                  <h4 className="w-full mb-2 text-left text-lg font-bold">
                    {" "}
                    Graduation Details
                  </h4>
                  <div className="py-5  flex flex-wrap lg:px-10 px-5  grid-cols-1 md:space-x-2 space-x-5">
                    {candidateData &&
                      candidateData.graduationDetails.map((item) => (
                        <div className="w-[35%]" key={item._id}>
                          <div className="flex space-x-5  items-center">
                            {/* <div className="bg-white p-2 shadow-md shadow-slate-400 rounded-xl ">
                      <img src={item.src} alt="/" className="w-16 h-16 " />
                    </div> */}
                            <img src={education[0].src} />

                            <div className="">
                              <p className="text-lg font-s-medium text-secondary">
                                School & University : {item.schoolUniversity}
                              </p>
                              <p className="text-base font-s-medium">
                                Course Type : {item.courseType}
                              </p>
                              <p className="text-base font-s-medium">
                                Course Name : {item.courseName}
                              </p>
                              <p className="text-sm font-s-medium text-black opacity-60">
                                Passing Year : {item.passingYear}
                              </p>
                              <p className="text-sm font-s-medium text-black opacity-60">
                                Percentage : {item.percentage} %
                              </p>
                              <p className="text-sm font-s-medium text-black opacity-60">
                                specialization : {item.specialization}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </>
              ) : null}

              {candidateData?.postGraduationDetails?.length > 0 ? (
                <>
                  <h4 className="w-full mb-2 text-left text-lg font-bold">
                    {" "}
                    Post Graduation Details
                  </h4>

                  <div className="py-5  flex flex-wrap lg:px-10 px-5  grid-cols-1 md:space-x-2 space-x-5">
                    {candidateData &&
                      candidateData.postGraduationDetails.map((item) => (
                        <div className="w-[35%]" key={item._id}>
                          <div className="flex space-x-5  items-center">
                            {/* <div className="bg-white p-2 shadow-md shadow-slate-400 rounded-xl ">
                      <img src={item.src} alt="/" className="w-16 h-16 " />
                    </div> */}
                            <img src={education[0].src} />

                            <div className="">
                              <p className="text-lg font-s-medium text-secondary">
                                School & University : {item.schoolUniversityPs}
                              </p>
                              <p className="text-base font-s-medium">
                                Course Type : {item.courseTypePs}
                              </p>
                              <p className="text-base font-s-medium">
                                Course Name : {item.courseNamePs}
                              </p>
                              <p className="text-sm font-s-medium text-black opacity-60">
                                Passing Year : {item.passingYearPs}
                              </p>
                              <p className="text-sm font-s-medium text-black opacity-60">
                                Percentage : {item.percentagePs} %
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </>
              ) : null}

              {candidateData?.additionalEducation?.length > 0 ? (
                <>
                  <h4 className="w-full mb-2 text-left text-lg font-bold">
                    {" "}
                    Additional Education
                  </h4>
                  <div className="py-5  flex flex-wrap lg:px-10 px-5  grid-cols-1 md:space-x-2 space-x-5">
                    {candidateData &&
                      candidateData.additionalEducation.map((item) => (
                        <div className="w-[35%]" key={item._id}>
                          <div className="flex space-x-5  items-center">
                            {/* <div className="bg-white p-2 shadow-md shadow-slate-400 rounded-xl ">
                      <img src={item.src} alt="/" className="w-16 h-16 " />
                    </div> */}
                            <img src={education[0].src} />
                            <div className="">
                              <p className="text-lg font-s-medium text-secondary">
                                School & University : {item.schoolUniversityAd}
                              </p>
                              <p className="text-base font-s-medium">
                                Course Type : {item.courseTypeAd}
                              </p>
                              <p className="text-base font-s-medium">
                                Course Name : {item.courseNameAd}
                              </p>
                              <p className="text-sm font-s-medium text-black opacity-60">
                                Passing Year : {item.passingYearAd}
                              </p>
                              <p className="text-sm font-s-medium text-black opacity-60">
                                Percentage : {item.percentageAd} %
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </>
              ) : null}
            </div>
          </div>

          <div className="bg-white rounded-md py-3 ">
            <div className="lg:px-10 px-5 py-3 flex justify-between">
              <div className="lg:text-2xl text-xl font-s-medium">Skills</div>
              {/* <Link to="/candidate/edit-candidate-profile">
                {" "}
                <MdEdit
                  className="text-secondary rounded bg-primary p-1 "
                  size={32}
                />
              </Link> */}
            </div>

            <hr className="w-full h-[0.10rem] bg-inputcolor" />
            <div className="py-5 lg:px-10 px-5  ">
              <div className="md:flex md:space-x-5 ">
                {candidateData &&
                  candidateData.skills.map((skills) => (
                    <p className="bg-secondary p-2 text-white rounded-full text-center md:my-0 my-2">
                      {skills.skill} - {skills.skilllevel}
                    </p>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
