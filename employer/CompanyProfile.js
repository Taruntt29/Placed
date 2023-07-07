import React, { useState, useEffect } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import {
  MdMailOutline,
  MdOutlineGroups,
  MdLocationOn,
  MdPhone,
  MdEdit,
} from "react-icons/md";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

import { TbWorld, TbBuildingSkyscraper } from "react-icons/tb";
import { RiArrowLeftSLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import {
  getAllEmployerPostedJobAPI,
  getEmployerEditProfileAPI,
  putupdateBannerImage,
} from "../../../api/authService";
import { toast } from "react-toastify";
import moment from "moment";
const CompanyProfile = () => {
  const { userDetails } = useSelector((state) => state.flightReducer);

  const navigate = useNavigate();

  const [profilePic, setProfilePic] = useState();

  const handleProfilePic = (e) => {
    console.log(e.target.files);
    setProfilePic(URL.createObjectURL(e.target.files[0]));
  };

  const [state, setState] = useState({});

  //Get Api
  const getEditProfileApi = async () => {
    const { data, status, message } = await getEmployerEditProfileAPI(
      userDetails._id
    );
    if (status) {
      // console.log("profile", data[0]);
      // console.log("profile dfgdgdh", data);
      setState(data);
      // if (data.length > 0) {
      //   setState(data);
      // }
    } else {
      toast(message);
    }
  };

  useEffect(() => {
    getEditProfileApi();
  }, []);

  // Banner Api
  const putupdateBanner = async (e) => {
    const image = e.target.files[0];

    const formdata = new FormData();
    formdata.append("bannerImage", image);
    try {
      const { data, status, message } = await putupdateBannerImage(formdata);

      console.log(data);
      if (status) {
        // toast(message);
        getEditProfileApi();
      } else {
        toast(message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // recent jobs

  const [pageNo, setPageNo] = useState("1");
  const [pageCount, setPageCount] = useState("");
  // Api
  const [pageSize, setPageSize] = useState("10");

  const [employerId, setEmployerId] = useState("");

  const [jobListData, setJobListData] = useState([]);

  const getManageJobs = async () => {
    const { data, status, message } = await getAllEmployerPostedJobAPI(
      pageNo,
      pageSize,
      "All",
      userDetails._id
    );

    if (status) {
      setJobListData(data);
    } else {
      toast(message);
    }
  };

  useEffect(() => {
    getManageJobs();
  }, []);
  const base_url = window.location.origin;
  console.log(base_url);
  return (
    <div className="bg-inputcolor">
      <div className="container mx-auto py-10  ">
        <div className="flex space-x-4 items-center pb-6 lg:px-0 px-5 ">
          {" "}
          <RiArrowLeftSLine className="text-secondary w-5 h-5 " />{" "}
          <p className="text-secondary font-s-medium text-base"> My Profile </p>{" "}
        </div>
        {userDetails.accountstatus == "Deactive" ? (
          <p className="text-red-400 text-base pl-6 font-s-medium">
            Please reactivate your account, kindly go to Account and then click
            on activate account.
          </p>
        ) : (
          ""
        )}
        <div className="flex flex-col space-y-10 px-4 md:px-0">
          <div className="bg-white rounded-md ">
            <div className=" flex-col   justify-end items-end gap-2 rounded-[6px] ">
              <div className="p-4 flex  flex-col gap-2 ">
                <img
                  alt="profile-banner"
                  src={
                    state?.bannerImage && state?.bannerImage.length > 0
                      ? state?.bannerImage[0]
                      : "/assets/images/background-profile.png"
                  }
                  className="w-[90vw]  max-h-60 object-cover"
                />

                <div className=" pt-4 px-4 rounded-xl  ">
                  <img
                    src={state?.image}
                    alt="/"
                    width={140}
                    className="-mt-16 flex items-start justify-start rounded-md"
                  />
                </div>
                <input
                  type="file"
                  name="uploadfile"
                  id="img"
                  className="hidden w-[70%]"
                  onChange={putupdateBanner}
                />
                <label for="img">
                  <MdEdit
                    // onClick={putupdateBannerImage}
                    className="text-secondary lg:-mt-52 -mt-28  mx-2 shadow-xl bg-white rounded p-1  float-right cursor-pointer"
                    size={32}
                  />
                </label>
              </div>
            </div>

            <div className="bg-white md:flex items-center md:justify-end justify-center md:space-x-6   px-10">
              <div>
                <button
                  onClick={() => navigate(`/employer/edit-profile`)}
                  className="text-sm bg-secondary  text-white font-s-medium  px-10 py-2 rounded-full shadow-sm shadow-slate-700 "
                >
                  Edit Profile
                </button>
              </div>
              <div>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(
                      `${base_url}/employer-detail/${userDetails.employerId}`
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
              <div className="pt-3  flex flex-col space-x-5">
                <div className="flex flex-col space-x-1 md:mt-0 mt-3 lg:px-10 px-9">
                  <div className="text-black text-opacity-80 text-[20px] font-s-bold">
                    {state?.jobTitle}
                  </div>
                  <div className="text-black text-opacity-60 font-s-medium text-[13px] ">
                    {state?.jobCategory}
                  </div>
                </div>

                <div className=" grid lg:grid-cols-5 grid-cols-1  gap-8 lg:justify-between pt-3 px-5">
                  <div className="flex items-center ">
                    <MdMailOutline className=" w-7 h-7 text-secondary" />
                    <div className=" text-sm font-s-medium ">
                      {" "}
                      {state?.email}
                    </div>
                  </div>

                  <div className="flex items-center  ">
                    <TbWorld className=" w-6 h-6 text-secondary" />
                    <div className=" text-sm font-s-medium ">
                      {" "}
                      {state?.website}
                    </div>
                  </div>

                  <div className="flex items-center  ">
                    <TbBuildingSkyscraper className=" w-6 h-6 text-secondary" />
                    <div className=" text-sm font-s-medium ">
                      {/* {state?.establishedIn}{" "} */}
                      {moment(state?.establishedIn).format("DD/MM/YYYY | dddd")}
                    </div>
                  </div>

                  <div className="flex items-center  ">
                    <MdOutlineGroups className=" w-6 h-6 text-secondary" />
                    <div className=" text-sm font-s-medium ">
                      {state?.teamSize}{" "}
                    </div>
                  </div>

                  <div className="flex items-center  ">
                    <MdPhone className=" w-6 h-6 text-secondary" />
                    <div className=" text-sm font-s-medium ">
                      {state?.phoneNumber}{" "}
                    </div>
                  </div>
                </div>

                <div className="  lg:flex md:flex-row justify-between space-x-12 py-5 px-5">
                  <div className="flex lg:items-center space-x-2">
                    <MdLocationOn className=" w-6 h-6 text-secondary" />
                    <div className=" text-sm font-s-medium lg:flex gap-2">
                      {" "}
                      <div> {state?.address},</div>
                      <div>{state?.city},</div>
                      <div> {state?.state},</div>
                      <div>{state?.country}</div>
                    </div>
                  </div>
                  {/* <div className="flex gap-4 justify-center items-center">
                    <div className="bg-secondary hover:bg-grey hover:scale-105 duration-500 rounded-full p-1 cursor-pointer ">
                      <FaFacebookF className="text-white" size={16} />
                    </div>
                    <div className="bg-secondary hover:bg-grey hover:scale-105 duration-500 rounded-full p-1 cursor-pointer">
                      <FaInstagram className="text-white" size={16} />
                    </div>
                    <div className="bg-secondary hover:bg-grey hover:scale-105 duration-500 rounded-full p-1 cursor-pointer">
                      <FaTwitter className="text-white" size={16} />
                    </div>
                    <div className="bg-secondary hover:bg-grey hover:scale-105 duration-500 rounded-full p-1 cursor-pointer">
                      <FaLinkedinIn className="text-white" size={16} />
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-md py-5 ">
            <div className="lg:px-10 px-5 py-3 flex justify-between">
              <div className="lg:text-2xl text-xl font-s-medium">About</div>{" "}
            </div>
            <hr className="w-full h-[0.10rem] bg-inputcolor" />
            <div className="lg:px-10 px-5 py-4 ">
              <div className=" text-base font-s-medium text-black opacity-50 text-justify w-full">
                {/* {state?.description} */}
                <div
                  dangerouslySetInnerHTML={{
                    __html: state?.description,
                  }}
                />
                {/* <span className="font-s-bold cursor-pointer hover:text-secondary">
                  see more
                </span> */}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-md  ">
            <div className="lg:px-10 px-5 py-3 flex justify-between">
              <div className="lg:text-2xl text-xl font-s-medium">Document</div>
            </div>
            <hr className="w-full h-[0.10rem] bg-inputcolor" />
            <div className="lg:grid-cols-3 grid lg:px-10 px-5 gap-5   my-5">
              <img
                alt="GST"
                src={state?.gstNumberpdf}
                className="shadow-xl rounded-md lg:my-0 my-4 w-full h-36 "
              />

              <img
                alt="PAN"
                src={state?.panNumberpdf}
                className="shadow-xl rounded-md lg:my-0 my-4  w-full h-36"
              />
            </div>
          </div>

          <div className="bg-white rounded-md  ">
            <div className="lg:px-10 px-5 py-3 flex justify-between">
              <div className="lg:text-2xl text-xl font-s-medium">
                {" "}
                Life at Galaxy Software Development
              </div>
            </div>
            <hr className="w-full h-[0.10rem] bg-inputcolor" />
            <div className="py-5 lg:px-10 px-5 lg:grid-cols-4 grid gap-2">
              {state?.otherImages &&
                state?.otherImages.map((item) => (
                  <div>
                    <img
                      alt="Workload Videos ' Images"
                      src={item}
                      className="shadow-xl rounded-md w-full h-36"
                    />
                  </div>
                ))}
            </div>
          </div>

          <div className="bg-white rounded-md py-5 ">
            {jobListData.length > 0 ? (
              <div className="lg:px-10 px-5 py-3 flex justify-between">
                <div className="lg:text-2xl text-xl font-s-medium">
                  {" "}
                  Recent Job Openings
                </div>
                <Link
                  to="/employer/manage-jobs"
                  className="flex space-x-5 underline text-secondary font-s-medium"
                >
                  See All Jobs
                </Link>
              </div>
            ) : null}
            <hr className="w-full h-[0.10rem] bg-inputcolor" />
            <div className="py-5 lg:px-10 px-5 grid md:grid-cols-3 grid-cols-1 gap-4">
              {jobListData &&
                jobListData.slice(0, 3).map((item, index) => (
                  <div className="" key={item.id}>
                    <div className="flex space-x-5  items-center">
                      <div className="bg-white p-2 shadow-md shadow-slate-400 rounded-xl ">
                        <img
                          src="/assets/images/logo1.png"
                          alt="/"
                          className="w-16 h-16 "
                        />
                      </div>
                      <div className="">
                        <Link to="/job-detail">
                          <p className="text-xl font-s-medium">
                            {item?.jobTitle}
                          </p>
                        </Link>
                        <p className="text-base font-s-normal text-black opacity-60">
                          {item?.city},{item?.state}
                          {/* {item.location}{" "} */}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;
