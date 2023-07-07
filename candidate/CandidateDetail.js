import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import {
  MdEmail,
  MdLocationPin,
  MdLocationOn,
  MdVideoCall,
  MdOutlineMessage,
} from "react-icons/md";
import { BsFillHandbagFill } from "react-icons/bs";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { IoCall } from "react-icons/io5";
import {
  getCandidateByIdAPI,
  putfavoriteCandidateAPI,
} from "../../api/authService";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { postaddContactAPI } from "../../api/authCandidate";
import { saveAs } from "file-saver";

const CandidateDetail = () => {
  const services = [
    {
      id: 1,
      button: "Buy Now",
      serviceName: "Adobe Photoshop Training for Beginner",
      byname: "By Ronald Richards",
      price: "$613",
      duration: "1 Hour",
    },
    {
      id: 2,
      button: "Buy Now",
      serviceName: "Adobe Photoshop Training for Beginner",
      byname: "By Ronald Richards",
      price: "$613",
      duration: "1 Hour",
    },
  ];

  const jobData = [
    {
      id: 1,
      logourl: "/assets/images/profile1.png",
      text: "Featured",
      name: "Wanda Montgomery",
      post: "Charted Accountant",
      profile: "View Profile",
      location: "Mumbai, Maharastra",
      cost: "$20k/month",
    },
    {
      id: 2,
      logourl: "/assets/images/profile2.png",
      text: "Featured",
      name: "Wanda Montgomery",
      post: "Charted Accountant",
      profile: "View Profile",
      location: "Mumbai, Maharastra",
      cost: "$20k/month",
    },
    {
      id: 3,
      logourl: "/assets/images/profile3.png",
      text: "Featured",
      name: "Wanda Montgomery",
      post: "Charted Accountant",
      profile: "View Profile",
      location: "Mumbai, Maharastra",
      cost: "$20k/month",
    },
    {
      id: 4,
      logourl: "/assets/images/profile1.png",
      text: "Featured",
      name: "Wanda Montgomery",
      post: "Charted Accountant",
      profile: "View Profile",
      location: "Mumbai, Maharastra",
      cost: "$20k/month",
    },
  ];

  const Data = [
    {
      id: 1,
      logourl: "/assets/images/logo1.png",
      days: "01",
      category: "New",
      post: "Senior Rolling Stock Technician ",
      address: "1363-1385 Sunset Blvd Los Angeles, CA 90026, USA",
      link: "https://www.webmax.com",
      jobdetaillink: "/job-detail",
      minsal: "$2000",
      maxsal: "$2500",
      time: "Month",
    },
    {
      id: 2,
      logourl: "/assets/images/logo2.png",
      days: "01",
      category: "Internship",
      post: "Senior Rolling Stock Technician ",
      address: "1363-1385 Sunset Blvd Los Angeles, CA 90026, USA",
      link: "https://www.webmax.com",
      jobdetaillink: "/job-detail",
      minsal: "$2000",
      maxsal: "$2500",
      time: "Month",
    },
    {
      id: 3,
      logourl: "/assets/images/logo2.png",
      days: "01",
      category: "Internship",
      post: "Senior Rolling Stock Technician ",
      address: "1363-1385 Sunset Blvd Los Angeles, CA 90026, USA",
      link: "https://www.webmax.com",
      jobdetaillink: "/job-detail",
      minsal: "$2000",
      maxsal: "$2500",
      time: "Month",
    },
  ];

  const data = [
    {
      id: 1,
      img: "/assets/images/pic-3.png",
      title: "Google Technology company",
      coachname: "Ronald Richards",
      desc: " New Managers, Executives, Career Changers, Relocating New Managers, Executives",
    },
    {
      id: 2,
      img: "/assets/images/pic-3.png",
      title: "Google Technology company",
      coachname: "Ronald Richards",
      desc: " New Managers, Executives, Career Changers, Relocating New Managers, Executives",
    },
    {
      id: 3,
      img: "/assets/images/pic-3.png",
      title: "Google Technology company",
      coachname: "Ronald Richards",
      desc: " New Managers, Executives, Career Changers, Relocating New Managers, Executives",
    },
    {
      id: 4,
      img: "/assets/images/pic-3.png",
      title: "Google Technology company",
      coachname: "Ronald Richards",
      desc: " New Managers, Executives, Career Changers, Relocating New Managers, Executives",
    },
  ];

  const [candidateDetail, setCandidateDetail] = useState([]);

  // API

  const { state } = useLocation();
  console.log("state", state);

  const getCandidateData = async () => {
    const { data, status, message } = await getCandidateByIdAPI(state.id);

    if (status) {
      setCandidateDetail(data);
    } else {
      toast(message);
    }
  };

  useEffect(() => {
    getCandidateData();
  }, []);

  // favorite candidate Api
  const { userDetails } = useSelector((state) => state.flightReducer);

  const [fillStar, setFillStar] = useState(false);

  const putupdatefavoritecandidate = async () => {
    try {
      const { data, status, message } = await putfavoriteCandidateAPI({
        employerId: userDetails._id,
        isFavorite: !fillStar,
        id: state.id,
        candidateId: state.id,
      });
      if (status) {
        setFillStar(!fillStar);
        toast(message);
      } else {
        toast(message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [messagebox, setMessagebox] = useState("");

  // API
  const notifyCandidate = async () => {
    try {
      const { data, message, status } = await postaddContactAPI({
        type: "contact",
        name: name,
        email: email,
        phoneNumber: phonenumber,
        message: messagebox,
        agreewithTerms: true,
      });
      if (status) {
        toast(message);
      } else {
        toast(message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="container mx-auto py-16">
        <div className=" grid lg:grid-cols-7 grid-cols-1 gap-8">
          {candidateDetail &&
            candidateDetail.map((item) => (
              <>
                <div className="lg:col-span-5 px-5 md:px-0">
                  <div
                    className="rounded-md bg-no-repeat bg-secondary relative h-80 bg-cover w-full"
                    style={{
                      backgroundImage: `url(${"/assets/images/background-candidate.png"})`,
                    }}
                  >
                    <div className=" relative  ">
                      <div className="py-10">
                        <div className=" flex items-center justify-center shadow-md shadow-[#2544EE30] rounded-xl ">
                          <img
                            src={item.images[0]}
                            alt="/"
                            width={100}
                            height={100}
                            className=" border-2 border-white rounded-2xl"
                          />
                        </div>
                        <div className="flex flex-col gap-2 md:mt-3">
                          <div className="text-center font-s-medium text-white text-base">
                            {" "}
                            {item.candidateName}
                          </div>
                          <div className="text-center font-s-normal text-sm text-white">
                            Product Designer at Google INC
                          </div>
                        </div>

                        <div className="flex items-center justify-center pt-10">
                          <MdLocationPin className="text-white w-6 h-6" />
                          <div className="text-sm font-s-medium text-white">
                            {item.city},{item.state}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="absolute md:bottom-5 bottom-3 w-full px-3 ">
                      <div className="flex items-end md:justify-between justify-center gap-2  ">
                        <div>
                          <button className="text-sm border border-white  text-white font-s-medium  px-10 py-2 rounded-md shadow-sm shadow-slate-700 ">
                            Hire Me Now
                          </button>
                        </div>
                        <div>
                          <button
                            onClick={() =>
                              saveAs(candidateDetail?.uploadfiles, "test.jpeg")
                            }
                            className="text-sm bg-white text-secondary font-s-medium  px-6 py-3 rounded-md shadow-sm shadow-slate-700 w-40"
                          >
                            Download CV
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-5 flex flex-col gap-5">
                    <div className="flex  justify-between">
                      <div className="font-s-bold py-4 text-[18px]">
                        About Me
                      </div>
                      <div className="flex space-x-4 pt-5">
                        {fillStar ? (
                          <AiFillStar
                            onClick={putupdatefavoritecandidate}
                            size={28}
                            className="text-secondary"
                          />
                        ) : (
                          <AiOutlineStar
                            onClick={putupdatefavoritecandidate}
                            className="text-secondary "
                            size={28}
                          />
                        )}
                        <MdOutlineMessage
                          className="bg-secondary text-white rounded-full p-1"
                          size={28}
                        />
                      </div>
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: item.bio }}></div>
                    {/* {item.bio} */}
                    <p className="text-black text-opacity-70 font-semibold text-[15px] text-justify"></p>

                    <div className="">
                      <div className="font-s-bold py-2 text-[18px]">Skills</div>

                      <div className="grid lg:grid-cols-4 grid-cols-1 gap-2">
                        {item.skills.map((item) => (
                          <div className="bg-primary py-2  rounded-md text-center font-s-medium">
                            {item.skill}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="font-s-bold py-8 text-[18px]">
                    Work experience
                  </div>
                  <div className=" border border-[#bcc7c9] rounded-md px-5 py-6">
                    <div className="grid grid-cols-1  mx-auto  gap-12 items-center justify-items-start ">
                      {item.workExperience.map((item) => (
                        <div className="flex gap-3 items-start jusity-center">
                          <div className="">
                            <img alt="icon" src="/assets/images/icon-set.png" />
                          </div>
                          <div className="flex flex-col">
                            <div className="flex gap-4">
                              {item.startDate} , {item.endDate}
                            </div>
                            <div className="text-secondary font-s-medium capitalize">
                              {item.companyName}
                            </div>
                            <div className="flex flex-col gap-3 font-s-medium ">
                              {item.designation}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="font-s-bold py-8 text-[18px]">
                    Education & Training
                  </div>
                  <div className=" border border-[#bcc7c9] rounded-md px-5 py-6">
                    <div className="grid grid-cols-1  mx-auto  gap-3 items-center justify-items-start ">
                      {/* map */}
                      {item.graduationDetails.map((item) => (
                        <div className="flex flex-col gap-3 pt-6">
                          <div className="flex gap-4 px-10 font-s-medium">
                            {item.passingYear} , {item.yearOfDegree}
                          </div>

                          <div className="flex gap-2 items-center">
                            <div className="rounded-full w-4 h-4 bg-secondary"></div>
                            <hr className="w-4 h-[0.12rem] bg-secondary -ml-2" />
                            <div className="text-sm font-s-medium text-secondary">
                              {item.courseName}
                            </div>
                          </div>

                          <div className="font-s-medium text-sm lg:pl-10 pl-8 ">
                            {item.specialization} - {item.schoolUniversity}
                          </div>
                          <div className="font-s-normal text-sm lg:pl-10 pl-8 ">
                            {item.para}
                          </div>
                        </div>
                      ))}
                      {item.postGraduationDetails.map((item) => (
                        <div className="flex flex-col gap-3 pt-6">
                          <div className="flex gap-4 px-10 font-s-medium">
                            {item.passingYearPs} , {item.yearOfDegreePs}
                          </div>

                          <div className="flex gap-2 items-center">
                            <div className="rounded-full w-4 h-4 bg-secondary"></div>
                            <hr className="w-4 h-[0.12rem] bg-secondary -ml-2" />
                            <div className="text-sm font-s-medium text-secondary">
                              {item.courseNamePs}
                            </div>
                          </div>

                          <div className="font-s-medium text-sm lg:pl-10 pl-8 ">
                            {item.specializationPs} - {item.schoolUniversityPs}
                          </div>
                          <div className="font-s-normal text-sm lg:pl-10 pl-8 ">
                            {item.para}
                          </div>
                        </div>
                      ))}
                      {item.additionalEducation.map((item) => (
                        <div className="flex flex-col gap-3 pt-6">
                          <div className="flex gap-4 px-10 font-s-medium">
                            {item.passingYearAd} , {item.yearOfDegreeAd}
                          </div>

                          <div className="flex gap-2 items-center">
                            <div className="rounded-full w-4 h-4 bg-secondary"></div>
                            <hr className="w-4 h-[0.12rem] bg-secondary -ml-2" />
                            <div className="text-sm font-s-medium text-secondary">
                              {item.courseNameAd}
                            </div>
                          </div>

                          <div className="font-s-medium text-sm lg:pl-10 pl-8 ">
                            {item.specializationAd} - {item.schoolUniversityAd}
                          </div>
                          <div className="font-s-normal text-sm lg:pl-10 pl-8 ">
                            {item.para}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-2 lg:px-0 px-5">
                  <div className="bg-[#EFF5FF] rounded-lg py-6 px-5 ">
                    <div className="font-s-medium">Profile Info</div>

                    <div className="pt-3 flex flex-col justify-start items-start gap-8">
                      {/* <div className="flex justify-start items-center gap-3 px-3 py-2">
                        <img
                          src="/assets/images/salary.png"
                          alt="webdev"
                          className="w-[22px]"
                        />
                        <div className="">
                          <p className="text-black text-opacity-70 text-sm font-semibold">
                            Current Salary
                          </p>
                          <p className="font-s-medium ">$200 / Month</p>
                        </div>
                      </div> */}
                      {/* <div className="flex justify-start items-center gap-3 px-3 py-2">
                        <img
                          src="/assets/images/salary.png"
                          alt="webdev"
                          className="w-[22px]"
                        />
                        <div className="">
                          <p className="text-black text-opacity-70 text-sm font-semibold">
                            Expected Salary
                          </p>
                          <p className="font-s-medium ">$200 / Month</p>
                        </div>
                      </div> */}
                      <div className="flex justify-start items-center gap-3 px-3 py-2">
                        <img
                          src="/assets/images/bigender.png"
                          alt="webdev"
                          className="w-[18px]"
                        />
                        <div className="">
                          <p className="text-black text-opacity-70 text-sm font-semibold">
                            Gender
                          </p>
                          <p className="font-s-medium capitalize">
                            {" "}
                            {item.gender}
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-start items-center gap-3 px-3 py-2">
                        <img
                          src="/assets/images/experience.png"
                          alt="experience"
                          className="w-[20px]"
                        />
                        <div className="">
                          <p className="text-black text-opacity-70 text-sm font-semibold">
                            Total Experience
                          </p>
                          <p className="font-s-medium ">{item.experience}</p>
                        </div>
                      </div>
                      <div className="flex justify-start items-center gap-3 px-3 py-2">
                        <img
                          src="/assets/images/iphone.png"
                          alt="webdev"
                          className="w-[18px]"
                        />
                        <div className="">
                          <p className="text-black text-opacity-70 text-sm font-semibold">
                            Phone
                          </p>
                          <p className="font-s-medium "> {item.phoneNumber}</p>
                        </div>
                      </div>

                      <div className="flex justify-start items-center gap-3 px-3 py-2">
                        <MdEmail className="text-secondary" size={18} />
                        <div className="">
                          <p className="text-black text-opacity-70 text-sm font-semibold">
                            Email
                          </p>
                          <p className="font-s-medium "> {item.email}</p>
                        </div>
                      </div>

                      <div className="flex justify-start items-center gap-3 px-3 py-2">
                        <BsFillHandbagFill
                          className="text-secondary"
                          size={20}
                        />

                        <div className="">
                          <p className="text-black text-opacity-70 text-sm font-semibold">
                            Qualification
                          </p>
                          <p className="font-s-medium ">
                            {" "}
                            BFA ( Bachelor of Fine Art)
                          </p>
                        </div>
                      </div>

                      <div className="flex justify-start items-center gap-3 px-3 py-2">
                        <MdLocationOn className="text-secondary" size={30} />
                        <div className="">
                          <p className="text-black text-opacity-70 text-sm font-semibold">
                            Address
                          </p>
                          <p className="font-s-medium "> {item.address}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="box-shadow1 mt-10 mb-5 p-2 rounded-md shadow-md">
                    <div className="pt-3 font-s-bold">Notify Candidate</div>
                    <div className="w-full pt-4">
                      <div className="flex justify-start flex-col gap-1 w-full">
                        <div className=" text-[15px]">Name</div>
                        <input
                          name="name"
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Enter Name"
                          className=" px-3 py-[10px] rounded-[7px] text-sm border"
                        />
                      </div>
                    </div>
                    <div className="w-full pt-4">
                      <div className="flex justify-start flex-col gap-1 w-full">
                        <div className=" text-[15px]">Email</div>
                        <input
                          name="email"
                          type="text"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email"
                          className=" px-3 py-[10px] rounded-[7px] text-sm border"
                        />
                      </div>
                    </div>

                    <div className="w-full pt-4">
                      <div className="flex justify-start flex-col gap-1 w-full">
                        <div className="text-[15px]">Phone Number</div>
                        <input
                          name="phone"
                          type="text"
                          value={phonenumber}
                          onChange={(e) => setPhonenumber(e.target.value)}
                          placeholder="Enter your Phone Number"
                          className=" px-3 py-[10px] rounded-[7px] text-sm border"
                        />
                      </div>
                    </div>
                    <div className="w-full pt-4 ">
                      <div className="flex justify-start flex-col gap-1 w-full">
                        <div className="text-[15px]">Message</div>
                        <textarea
                          name="message"
                          value={messagebox}
                          onChange={(e) => setMessagebox(e.target.value)}
                          type="text"
                          placeholder="Write something here"
                          className=" px-3 py-[10px] rounded-[7px] text-sm border"
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-center my-3">
                      <button
                        onClick={notifyCandidate}
                        className="text-white bg-secondary rounded-md text-center py-1.5 px-20"
                      >
                        Submit Now
                      </button>
                    </div>
                  </div>

                  {/* <div className="py-10">
                    <h6 className="font-s-medium">Recommended Jobs</h6>

                    <div className="">
                      <div className="grid grid-cols-1    pt-6 gap-10  ">
                        {Data.map((item, index) => {
                          return (
                            <div
                              className="bg-white shadow-md shadow-[#2544EE30] rounded-xl relative "
                              key={index}
                            >
                              <div className="flex px-2">
                                <div
                                  className={`{ text-white font-s-medium text-sm absolute  top-2 right-3 px-6 rounded-md py-1 ${
                                    item.category === "Internship"
                                      ? "bg-[#AB6B35]"
                                      : item.category === "Fulltime"
                                      ? "bg-[#8C82EA]"
                                      : item.category === "Freelancer"
                                      ? "bg-[#2D9BB3]"
                                      : "bg-[#41B249]"
                                  }`}
                                >
                                  {item.category}
                                </div>
                                <img
                                  alt="JobPost"
                                  src={item.logourl}
                                  width={80}
                                  height={80}
                                />
                              </div>

                              <div className="flex flex-col pt-1 px-5 pb-3">
                                <p className="text-sm font-s-medium pb-3 whitespace-nowrap">
                                  {item.post}
                                  <span className="text-[#41B249]">
                                    {" "}
                                    {item.days}/days
                                  </span>
                                </p>

                                <div className="font-s-medium text-sm">
                                  {item.minsal} - {item.maxsal} / {item.time}
                                </div>
                                <div className="flex items-end justify-end">
                                  <Link
                                    to={item.jobdetaillink}
                                    className="font-s-bold text-secondary "
                                  >
                                    Browse Job
                                  </Link>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      <div className=""></div>
                    </div>
                  </div> */}
                </div>
              </>
            ))}
        </div>

        <div className="">
          <div className="flex justify-between pt-12">
            <div className="font-s-bold  text-[18px] ">Similar Candidate</div>
            <Link to="/candidate-list">
              <div className="text-secondary font-s-medium underline">
                View More
              </div>
            </Link>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-2  grid-cols-1   mx-auto lg:pt-10 gap-3 gap-y-10   items-center justify-items-center">
            {jobData.map((item, id) => {
              return (
                <>
                  <div
                    className="bg-white shadow-md shadow-[#2544EE30] rounded-xl relative mt-6 border border-[#bcc7c9] "
                    key={id}
                  >
                    <div className="">
                      <div className="absolute flex bg-white shadow-md shadow-[#2544EE30] rounded-xl -top-10 left-[4.5rem]">
                        <img
                          src={item.logourl}
                          alt="/"
                          width={100}
                          height={100}
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <div className=" mt-7 md:mt-16">
                          {" "}
                          <div className="bg-primary text-secondary rounded-md font-s-medium text-center px-3 text-sm py-1">
                            {item.text}
                          </div>{" "}
                        </div>

                        <div className="text-center font-s-medium text-base">
                          {" "}
                          {item.name}
                        </div>
                        <div className="text-center font-s-normal text-sm text-gray-400">
                          {item.post}
                        </div>
                        <Link to="/candidate-detail">
                          <div className="text-center font-s-bold text-base text-secondary">
                            {item.profile}
                          </div>
                        </Link>
                      </div>
                      <div className="bg-[#2544EE30] rounded-b-xl py-1 lg:mt-4">
                        <div className="grid grid-cols-2 gap-2 px-3">
                          <div className="flex ">
                            <MdLocationPin />
                            <div className="text-[0.6rem] whitespace-nowrap font-s-normal">
                              {item.location}
                            </div>
                          </div>

                          <div className="flex justify-end font-s-normal text-sm">
                            {item.cost}{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>

        {/* <div className="bg-[#fff] container mx-auto lg:px-5 px-5 py-8">
          <div className="flex justify-between pb-3 pt-6 lg:px-0 px-5">
            <div className="font-s-bold  text-[18px] ">Services Available</div>
            <div className="text-secondary font-s-medium underline">
              View More
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-5  lg:px-0">
            {services.map((item) => (
              <div className="bg-inputcolor  py-2 rounded-lg">
                <div className="text-end px-5 ">
                  <button className="text-white font-s-medium px-10 py-1.5 bg-secondary text-sm rounded-full">
                    {item.button}
                  </button>
                </div>

                <div className="px-5 ">
                  <p className="font-s-medium text-lg">{item.serviceName} </p>
                  <div className="flex pt-2 space-x-2">
                    <p className="text-sm whitespace-nowrap"> {item.byname}</p>
                    <div className="flex">
                      <AiFillStar fill="#eaba45" />
                      <AiFillStar fill="#eaba45" />
                      <AiFillStar fill="#eaba45" />
                      <AiFillStar fill="#eaba45" />
                      <AiOutlineStar />
                    </div>
                  </div>
                </div>

                <hr className="w-full h-[0.10rem] bg-inputcolor" />

                <div className="grid lg:grid-cols-3 px-3 space-x-2">
                  <div className="bg-[#fff] py-2 px-1 rounded-full my-3 flex items-center justify-center font-s-medium">
                    Special Price :{" "}
                    <span className="text-secondary font-s-bold">
                      {item.price}
                    </span>
                  </div>
                  <div className="bg-[#fff] py-2  rounded-full my-3 flex items-center justify-center space-x-2 font-s-medium">
                    Medium :
                    <div className="flex space-x-5">
                      {" "}
                      <IoCall
                        size={24}
                        className="bg-secondary text-white rounded-full p-1 "
                      />
                      <MdVideoCall
                        size={24}
                        className="bg-secondary text-white rounded-full p-1 "
                      />
                    </div>
                  </div>
                  <div className="bg-[#fff] py-2 rounded-full my-3 flex items-center justify-center font-s-medium">
                    Duration :
                    <span className="text-secondary font-s-bold">
                      {item.duration}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* <div className="flex justify-between pt-8">
          <div className="font-s-bold  text-[18px] ">Recommended Coches</div>
          <Link to="/coach-list">
            <div className="text-secondary font-s-medium underline">
              View More
            </div>
          </Link>
        </div> */}
        {/* <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 text-center  container mx-auto lg:pt-5 gap-12 gap-y-10   items-center justify-items-center">
          {data.map((item, id) => {
            return (
              <div className="shadow-2xl  h-72 rounded-xl border border-secondary bg-inputcolor ">
                <div className="flex space-x-3 items-center justify-center ">
                  {" "}
                  <img
                    alt="CoachImage"
                    src={item.img}
                    className="pt-2 w-24 h-24"
                  />
                  {item.recommend ? (
                    <div className="text-end ">
                      <p className="text-xs text-white bg-green-600 py-1 px-3 rounded-md">
                        {item.recommend}
                      </p>
                    </div>
                  ) : null}
                </div>

                <h6 className="text-xl font-bold pt-4">{item.coachname}</h6>
                <div className="flex items-center justify-center py-2">
                  <AiFillStar className="text-yellow-600" />
                  <AiFillStar className="text-yellow-600" />
                  <AiFillStar className="text-yellow-600" />
                  <AiFillStar className="text-yellow-600" />
                  <AiOutlineStar className="text-yellow-600" />
                </div>

                <p className="text-xs py-1 text-center">{item.desc}</p>
                <Link to="/coach-detail">
                  <button className="px-6 py-1 text-sm my-2 text-white bg-secondary rounded-md">
                    View Profile
                  </button>
                </Link>
              </div>
            );
          })}
        </div> */}
      </div>
    </div>
  );
};

export default CandidateDetail;
