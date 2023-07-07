import React, { Fragment, useState, useEffect } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import { FaCalendarAlt } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { AiFillPlayCircle } from "react-icons/ai";
import { Dialog, Transition } from "@headlessui/react";
import { ImCross } from "react-icons/im";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { candidateJobSearchAPI, candidatEmpDetailsAPI } from "../../api/authCandidate";
import { toast } from "react-toastify";
const EmployerDetail = () => {
  let DataId = useParams();

  console.log("Data Id", DataId);

  let EmplyeId = DataId.id;

  console.log("EmplyeeId", EmplyeId);

  const [BnnerDetails, setEmplyeeDetails] = useState([]);

  const [jobsData , setJobData] = useState([])

  const jobs = async () => {
    try {
      const response = await candidateJobSearchAPI({params : {employerId : EmplyeId}})
      setJobData(response.data)
    } catch (error) {
      console.log(error);
    }
  }

  const CandidateEmployeDetails = async () => {
    try {
      const response = await candidatEmpDetailsAPI(EmplyeId);
      setEmplyeeDetails(response.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    CandidateEmployeDetails();
    jobs()
  }, []);

  console.log("Bnner Details", BnnerDetails);
  const token = localStorage.getItem("pplacdtoken");

  console.log(token);

  const jobData = [
    {
      id: 1,
      logourl: "/assets/images/logo1.png",
      days: "01",
      category: "New",
      post: "Senior Web Designer , Developer",
      address: "1363-1385 Sunset Blvd Los Angeles, CA 90026, USA",
      link: "https://www.webmax.com",
      jobdetaillink: "/",
      minsal: "$2000",
      maxsal: "$2500",
      time: "Month",
    },
    {
      id: 2,
      logourl: "/assets/images/logo2.png",
      days: "01",
      category: "Internship",
      post: "Senior Web Designer , Developer",
      address: "1363-1385 Sunset Blvd Los Angeles, CA 90026, USA",
      link: "https://www.webmax.com",
      jobdetaillink: "/",
      minsal: "$2000",
      maxsal: "$2500",
      time: "Month",
    },
    {
      id: 3,
      logourl: "/assets/images/logo3.png",
      days: "01",
      category: "Part-Time",
      post: "Senior Web Designer , Developer",
      address: "1363-1385 Sunset Blvd Los Angeles, CA 90026, USA",
      link: "https://www.webmax.com",
      jobdetaillink: "/",
      minsal: "$2000",
      maxsal: "$2500",
      time: "Month",
    },
  ];

  const imgdata = [
    {
      id: 1,
      img: "/assets/images/office1.png",
    },
    {
      id: 2,
      img: "/assets/images/office2.png",
    },
    {
      id: 3,
      img: "/assets/images/office3.png",
    },
    {
      id: 4,
      img: "/assets/images/office4.png",
    },
    {
      id: 5,
      img: "/assets/images/office5.png",
    },
    {
      id: 6,
      img: "/assets/images/office6.png",
    },
    {
      id: 7,
      img: "/assets/images/office7.png",
    },
    {
      id: 8,
      img: "/assets/images/office8.png",
    },
    {
      id: 9,
      img: "/assets/images/office1.png",
    },
    {
      id: 10,
      img: "/assets/images/office2.png",
    },
    {
      id: 11,
      img: "/assets/images/office3.png",
    },
    {
      id: 12,
      img: "/assets/images/office4.png",
    },
  ];

  let [isOpenReview, setIsOpenReview] = React.useState(false);

  function closeModalReview() {
    setIsOpenReview(false);
  }

  function openModalReview() {
    // ;
    if (token == null || token == undefined || token == "") {
      toast("Please Login First");
    } else {
      setIsOpenReview(true);
    }
  }

  const [profilePic, setProfilePic] = React.useState();

  const handleProfilePic = (e) => {
    console.log(e.target.files);
    setProfilePic(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <>
      <div className="container mx-auto py-10">
        <div className=" grid lg:grid-cols-7 grid-cols-1 gap-8">
          <div className="lg:col-span-5 px-5 md:px-0">
            <div
              className="rounded-md bg-no-repeat relative h-80 bg-cover w-full"
              style={{
                backgroundImage: `url(${BnnerDetails.bannerImage})`,
              }}
            >
              <div className="bg-white w-[100px] h-[100px] p-4 shadow-md shadow-slate-400 rounded-xl absolute -bottom-9 left-10">
                <img src={BnnerDetails.image} alt="/" />
              </div>
            </div>
            <div className="flex items-center md:justify-end justify-center gap-6 md:mt-5 mt-16">
              <button
                onClick={openModalReview}
                className="text-sm border border-secondary  text-secondary font-s-medium  px-10 py-2 rounded-md shadow-sm shadow-slate-700 "
              >
                Add Review
              </button>

              {/* modal */}
              <Transition appear show={isOpenReview} as={Fragment}>
                <Dialog
                  as="div"
                  className="relative z-10"
                  onClose={closeModalReview}
                >
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                  </Transition.Child>

                  <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                      <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                      >
                        <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-secondary  text-left align-middle shadow-xl transition-all md:mt-20">
                          <div className="flex gap-2 justify-between px-6 pt-5">
                            <div className="flex gap-2  items-center">
                              <img
                                alt="review"
                                src="/assets/images/review.png"
                                className="w-10 h-10"
                              />
                              <Dialog.Title
                                as="h3"
                                className="text-xl py-7  pl-6 font-s-medium leading-6 text-center pb-4 text-white"
                              >
                                Rate and Review
                              </Dialog.Title>
                            </div>

                            <div>
                              <ImCross
                                className="cursor-pointer text-white"
                                onClick={closeModalReview}
                              />
                            </div>
                          </div>
                          <div className="bg-white px-6 py-4 ">
                            <div>
                              <div className="flex gap-3">
                                <img
                                  alt="review"
                                  src="/assets/images/reviewimage.png"
                                  className="w-16 h-16"
                                />
                                <div>
                                  <p className="font-s-medium text-lg">
                                    {" "}
                                    Betsy McLeod{" "}
                                  </p>
                                  <p className="font-s-normal text-sm">
                                    Your review will be posted publicly on the
                                    web.{" "}
                                    <span className="text-secondary">
                                      {" "}
                                      Learn more{" "}
                                    </span>{" "}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className=" flex gap-3  pl-20 pt-3">
                              <img
                                src="/assets/images/star1.png"
                                alt="images"
                                className="w-8 h-8"
                              />
                              <img
                                src="/assets/images/star1.png"
                                alt="images"
                                className="w-8 h-8"
                              />
                              <img
                                src="/assets/images/star1.png"
                                alt="images"
                                className="w-8 h-8"
                              />
                              <img
                                src="/assets/images/star1.png"
                                alt="images"
                                className="w-8 h-8"
                              />
                              <img
                                src="/assets/images/star1.png"
                                alt="images"
                                className="w-8 h-8"
                              />
                            </div>
                            <div className="pl-20 text-sm pt-4">
                              <p>
                                Share details of your own experience at this
                                place
                              </p>
                              <textarea className="w-full border-2 rounded-md border-inputcolor outline-none " placeholder="Type Here" id="" rows="4" />
                              <hr className="w-full h-[0.10rem] bg-[#707070]" />
                            </div>

                            <div className="pl-20">
                              <div className=" border-[1px] inline-flex flex-col border[#707070]  justify-end items-center gap-2 rounded-[6px] innershadow2 mt-5">
                                {/* <img src="/assets/images/uploadimage.png" className="w-16" /> */}
                                {profilePic ? (
                                  <>
                                    {" "}
                                    <input
                                      type="file"
                                      name="uploadfile"
                                      id="img"
                                      className="hidden"
                                      onChange={handleProfilePic}
                                    />
                                    <label for="img">
                                      <img
                                        alt="profilepic"
                                        src={profilePic}
                                        onChange={handleProfilePic}
                                        className="w-40 h-40 rounded-[6px] innershadow2 border-[1px] border[#707070] cursor-pointer"
                                      />
                                    </label>
                                  </>
                                ) : (
                                  <div className="p-6 flex justify-center items-center flex-col gap-2">
                                    <img
                                      alt="add-profile"
                                      src="/assets/images/add-photo.png"
                                      className="w-10"
                                    />
                                    <input
                                      type="file"
                                      name="uploadfile"
                                      id="img"
                                      className="hidden"
                                      onChange={handleProfilePic}
                                    />
                                    <label
                                      for="img"
                                      className="text-white cursor-pointer bg-secondary font-s-medium text-sm flex justify-center items-center px-4 py-2 rounded-[6px] "
                                    >
                                      Upload Image
                                    </label>
                                  </div>
                                )}
                              </div>
                            </div>

                            <div className=" grid grid-cols-8 justify-items-end items-center  gap-8">
                              <div></div>
                              <div></div>
                              <div></div>
                              <div></div>
                              <div></div>
                              <div></div>
                              <button
                                type="button"
                                className=" rounded-[8px] border border-transparent   text-base font-medium text-secondary"
                                onClick={closeModalReview}
                              >
                                Cancel
                              </button>

                              <button
                                type="button"
                                className=" rounded-[8px] border border-transparent  text-base font-medium text-secondary opacity-60"
                                onClick={closeModalReview}
                              >
                                Post
                              </button>
                            </div>
                          </div>
                        </Dialog.Panel>
                      </Transition.Child>
                    </div>
                  </div>
                </Dialog>
              </Transition>

              <button className="text-sm bg-secondary  text-white font-s-medium  px-10 py-2 rounded-md shadow-sm shadow-slate-700 ">
                Follow Us
              </button>
            </div>
            <div className="pt-5 flex flex-col gap-5">
              <div className="text-black text-opacity-80 text-[20px] font-s-medium">
                {BnnerDetails.companyName}
              </div>
              <div className="text-black text-opacity-70 font-s-medium text-[15px]">
                {BnnerDetails.address}
              </div>
              <div className="font-s-medium text-[15px]">
                <span className="text-secondary">{BnnerDetails.website}</span>
              </div>
              <div className="font-s-bold py-4 text-[18px]">About Company</div>
              <p className="text-black text-opacity-70 font-semibold text-[15px] text-justify">
                {BnnerDetails.description}
              </p>
              <div className="grid md:grid-cols-5 gap-10">
                <div className="md:col-span-3">
                  <div className="font-s-bold py-8 text-[18px]">
                    Office Photos
                  </div>
                  <div>
                    <div className="grid md:grid-cols-4 grid-cols-3  mx-auto  gap-3 items-center justify-items-center">
                      {BnnerDetails ? BnnerDetails.otherImages &&
                        BnnerDetails.otherImages.map((item, id) => {
                          return (
                            <>
                              <div key={id}>
                                <img src={item} alt="/" />
                              </div>
                            </>
                          );
                        }) : <span>There are no office photos available</span>}
                    </div>
                  </div>
                </div>
                {/* <div className="md:col-span-2">
                  <div className="font-s-bold py-8 text-[18px]">Video</div>
                  <div className=" ">
                    <div
                      className="w-full h-[240px]  bg-no-repeat bg-center bg-cover  bg-secondary rounded-md"
                      style={{
                        backgroundImage: `url(${"/assets/images/video-employer.png"})`,
                      }}
                    >
                      <div>
                        <div className="relative inline-flex">
                          <span className="flex h-10 w-10">
                            <span className="animate-ping absolute inline-flex h-full w-full top-24 md:left-[8.3rem] left-[10rem] rounded-full bg-white bg-opacity-50 opacity-75 duration-500"></span>
                            <span className="">
                              <AiFillPlayCircle className="text-secondary bg-white bg-opacity-60 p-0 border-none m-0 cursor-pointer relative top-24 md:left-[8.3rem] left-[10rem] inline-flex rounded-full h-10 w-10 " />
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div> 

            <div className="flex justify-between py-8">
              <h4 className="font-s-bold  text-[18px]">Our latest Jobs</h4>
              <Link to="/job-search">
                <p className="text-secondary font-s-medium underline">
                  View All
                </p>
              </Link>
            </div>
            <div className="pb-10">
              <div className="grid grid-cols-1   mx-auto  gap-8 gap-y-10   items-center justify-items-center">
                {jobsData.slice(0,4).map((item, id) => {
                  return (
                    <>
                      <div className="">
                        <div
                          className="bg-white box-shadow  rounded-xl relative  pb-7"
                          key={id}
                        >
                          <div className="grid md:grid-cols-12 gap-2">
                            <div className="md:col-span-2">
                              <div className="absolute flex md:p-5 bg-white box-shadow1 rounded-xl left-[34%]  lg:-bottom-3   md:left-2">
                                <img
                                  src={item?.employerId?.image}
                                  alt="/"
                                  width={100}
                                  height={100}
                                />
                              </div>
                            </div>
                            <div className="md:col-span-5 lg:pl-8 pl-3 md:pt-8 pt-10">
                              <div className="flex flex-col gap-3 lg:pt-0 pt-16">
                                <div className=" ">
                                  <Link to={`/job-details/${item._id}`}>
                                    <p className="text-base font-s-medium text-black ">
                                      {item?.jobTitle}
                                    </p>
                                  </Link>
                                </div>
                                <div className="">
                                  <p className="text-[#060606] text-sm  font-s-medium text-opacity-70">
                                    {item?.city}{" , "}{item?.state}{" , "}{item?.country}
                                  </p>
                                </div>
                                <div className="">
                                  <p className="text-secondary text-sm font-s-medium ">
                                    {item?.companywebsite}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="md:col-span-2  flex md:justify-center md:items-start lg:pt-8 md:px-0 px-4">
                              <div className="text-[#41B249] font-s-medium ">
                                Posted On{item.updatedAt.slice(0,10)}
                              </div>
                            </div>
                            <div className="md:col-span-3 md:pr-3 gap-3 md:pt-0  md:px-0 px-4 flex flex-col md:justify-end md:items-end">
                              <div className="">
                                <div
                                  className={`{ text-white font-s-medium text-sm px-3  text-center rounded-md py-[0.32rem] mb-7  ${
                                    item?.categoryId?.name === "Internship"
                                      ? "bg-[#AB6B35]"
                                      : item?.categoryId?.name === "Fulltime"
                                      ? "bg-[#8C82EA]" 
                                      : item?.categoryId?.name === "Part-Time"
                                      ? " bg-[#D2628C]"
                                      : item?.categoryId?.name === "Freelancer"
                                      ? " bg-[#2D9BB3]"
                                      : "bg-[#41B249]"
                                  }`}
                                >
                                  {item?.categoryId?.name}
                                </div>
                              </div>
                              <div className="font-s-medium  text-[13px]">
                                {item?.salaryFrom} - {item?.salaryTo} / {item?.salaryPeriod}
                              </div>
                              <div className="">
                                <Link
                                  to={`/job-details/${item._id}`}
                                  className="font-s-bold  text-secondary "
                                >
                                  Browse Job
                                </Link>
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
          </div>
          <div className="lg:col-span-2 lg:px-0 px-5">
            <div className="bg-[#EFF5FF] rounded-lg py-6 px-5 ">
              <div className="font-s-medium">Job Information</div>

              <div className="pt-10 flex flex-col justify-start items-start gap-8">
                <div className="flex justify-start items-center gap-3 px-3 py-2">
                  <img
                    src="/assets/images/salary.png"
                    alt="webdev"
                    className="w-[22px]"
                  />
                  <div className="">
                    <p className="text-black text-opacity-70 text-[13px] font-semibold">
                      Ownership:
                    </p>
                    <p className="font-s-medium text-sm">
                      {" "}
                      {BnnerDetails.ownershipType}
                    </p>
                  </div>
                </div>
                <div className="flex justify-start items-center gap-3 px-3 py-2">
                  <img
                    src="/assets/images/salary.png"
                    alt="webdev"
                    className="w-[22px]"
                  />
                  <div className="">
                    <p className="text-black text-opacity-70 text-[13px] font-semibold">
                      Industry:
                    </p>
                    <p className="font-s-medium text-sm">
                      {" "}
                      {BnnerDetails.industryId &&
                        BnnerDetails.industryId.name}{" "}
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
                    <p className="text-black text-opacity-70 text-[13px] font-semibold">
                      Company size:
                    </p>
                    <p className="font-s-medium text-sm">{BnnerDetails.teamSize}</p>
                  </div>
                </div>
                <div className="flex justify-start items-center gap-3 px-3 py-2">
                  <img
                    src="/assets/images/bigender.png"
                    alt="webdev"
                    className="w-[18px]"
                  />
                  <div className="">
                    <p className="text-black text-opacity-70 text-[13px] font-semibold">
                      Founded in:
                    </p>
                    <p className="font-s-medium text-sm">
                      {BnnerDetails.establishedIn}
                    </p>
                  </div>
                </div>
                <div className="flex justify-start items-center gap-3 px-3 py-2">
                  <FaCalendarAlt className="text-secondary" size={18} />
                  <div className="">
                    <p className="text-black text-opacity-70 text-[13px] font-semibold">
                      Email:
                    </p>
                    <p className="font-s-medium text-sm">{BnnerDetails.email}</p>
                  </div>
                </div>
                <div className="flex justify-start items-center gap-3 px-3 py-2">
                  <FiPhoneCall className="text-secondary" size={18} />
                  <div className="">
                    <p className="text-black text-opacity-70 text-[13px] font-semibold">
                      Phone:
                    </p>
                    <p className="font-s-medium text-sm">
                      {" "}
                      {BnnerDetails.phoneNumber}
                    </p>
                  </div>
                </div>
                <div className="flex justify-start items-center gap-3 px-3 py-2">
                  <MdOutlineLocationOn className="text-secondary" size={24} />
                  <div className="">
                    <p className="text-black text-opacity-70 text-[13px] font-semibold">
                      Location:
                    </p>
                    <p className="font-s-medium text-sm"> {BnnerDetails.country}</p>
                  </div>
                </div>

                <div>
                  <p className="font-s-medium ">Social Media</p>
                  <div className="flex gap-4 justify-center items-center pt-3">
                    <div className="bg-secondary hover:bg-grey hover:scale-105 duration-500 rounded-full p-2 cursor-pointer ">
                      <NavLink to={BnnerDetails.facebook}>
                        <FaFacebookF color="white" size={12} />
                      </NavLink>
                    </div>
                    <div className="bg-secondary hover:bg-grey hover:scale-105 duration-500 rounded-full p-2 cursor-pointer">
                      <NavLink to={BnnerDetails.instagram}>
                        <FaInstagram color="white" size={12} />
                      </NavLink>
                    </div>
                    <div className="bg-secondary hover:bg-grey hover:scale-105 duration-500 rounded-full p-2 cursor-pointer">
                      <NavLink to={BnnerDetails.twitter}>
                        <FaTwitter color="white" size={12} />
                      </NavLink>
                    </div>
                    <div className="bg-secondary hover:bg-grey hover:scale-105 duration-500 rounded-full p-2 cursor-pointer">
                      <NavLink to={BnnerDetails.linkedIn}>
                        <FaLinkedinIn color="white" size={12} />
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 pb-12">
              <div
                className="bg-cover h-[45vh] w-full"
                style={{
                  backgroundImage: `url("/assets/images/recruiting.png")`,
                }}
              >
                <div className=" bg-[#2544eea6]  h-[45vh] relative flex md:justify-center rounded-lg ">
                  <div>
                    <h3 className=" md:px-8 px-5 pt-16 text-white font-semibold text-4xl font-s-medium">
                      Recruiting?
                    </h3>
                    <p className=" md:px-8 px-5 pt-5 text-white font-s-normal">
                      {" "}
                      Get Best Matched Jobs On your Email. Add Resume NOW!{" "}
                    </p>
                    <div className="px-8 py-3">
                    <Link to="/candidate-signup">  <button className="bg-white text-secondary px-6 py-1 rounded-md">
                        {" "}
                        Read More{" "}
                      </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployerDetail;
