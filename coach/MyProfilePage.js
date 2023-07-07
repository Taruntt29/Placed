import React, { useRef, useState, Fragment } from "react";
import { MdMailOutline, MdPhone, MdEdit } from "react-icons/md";
import { RiArrowLeftSLine, RiSuitcaseLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { Dialog, Transition } from "@headlessui/react";
import Slider from "react-slick";
import {
  getAllCoachDataById,
  getAllService,
  updateCoachBanner,
} from "../../../api/coachFunctions";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

const MyProfilePage = () => {
  const dispatch = useDispatch();
  const [uploadimagetwo, setUploadImageTwo] = useState();
  const navigate = useNavigate();
  const fileRef2 = useRef();
  const { userDetails } = useSelector((state) => state.flightReducer);
  let [isOpen, setIsOpen] = useState(true);

  console.log(userDetails);

  // function closeModal() {
  //   setIsOpen(false);
  // }

  function openModal() {
    setIsOpen(true);
  }

  const handleUpload = (event) => {
    // console.log(event.target);
    setUploadImageTwo(event.target.files[0]);
  };

  const [profilePic, setProfilePic] = useState("");
  const [profileImg, setProfileImg] = useState();

  const updateBanner = async () => {
    const formdata = new FormData();
    formdata.append("bannerImage", profileImg);
    try {
      const response = await updateCoachBanner(formdata);
      if (response.status) {
        console.log(response.data);
        getCoachData();
        toast(response.message);
      } else {
        toast(response.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const [coachDetails, setCoachDetails] = useState({});

  const coachId = userDetails._id;
  const [dummy, setDummy] = useState();
  const handleProfilePic = (e) => {
    setProfileImg(e.target.files[0]);
    setDummy(e.target.files[0]);
  };
  useEffect(() => {
    setProfileImg(dummy);
    updateBanner();
  }, [dummy]);
  const [sliderData, setSliderData] = useState([]);
  const getCoachData = async () => {
    const { data, status, message } = await getAllCoachDataById(coachId);
    if (status) {
      setCoachDetails(data[0]);
      setProfilePic(data.bannerImage);
      setSliderData([
        ...data.CoachingCertifications,
        ...data.BioDatapdf,
        ...data.Additionalcertification,
        ...data.uploaddocument,
        ...data.aadharCardNumberpdf,
        ...data.gSTNumberpdf,
        ...data.socialSecurityNumbepdf,
        ...data.panCardNumberpdf,
      ]);
      // console.log("data", data);
    } else {
      toast(message);
    }
  };

  // useEffect(() => {
  //   // check if admin approved profile or not
  //   if (coachDetails.status != "Approved") {
  //     console.log("coach status from admin IN FUNCTION", coachDetails.status);
  //     // setIsOpen(true);
  //   }
  // }, []);
  // console.log("sliderData", sliderData);
  // console.log("coachDetails", coachDetails);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(4);
  const [serviceData, setServiceData] = useState([]);
  const getServiceData = async () => {
    const { data, status, message } = await getAllService(
      currentPage,
      pageSize,
      coachId
    );
    if (status) {
      setServiceData(data);
      // console.log("serviceData", data);
      // console.log("serviceData State", serviceData);
    } else {
      toast(message);
    }
  };
  useEffect(() => {
    getCoachData();
  }, []);
  useEffect(() => {
    getServiceData();
  }, []);
  const testSlideLen =
    coachDetails?.aadharCardNumberpdf?.length +
    coachDetails?.socialSecurityNumbepdf?.length +
    coachDetails?.panCardNumberpdf?.length +
    coachDetails?.gSTNumberpdf?.length +
    coachDetails?.CoachingCertifications?.length +
    coachDetails?.Additionalcertification?.length +
    coachDetails?.uploaddocument?.length;
  // console.log("test length", testSlideLen);
  const settingTestominal = {
    dots: false,
    infinite: true,
    speed: 1500,
    centerMode: false,
    slidesToShow: 2,
    // slidesToShow: testSlideLen > 4 ? 4 : testSlideLen,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    loop: true,
    autoplay: true,
    autoplaySpeed: 4000,
    accessibility: true,
    cssEase: "linear",
    swipeToSlide: true,

    responsive: [
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 4,
          // slidesToShow: testSlideLen > 4 ? 4 : testSlideLen,
          slidesToScroll: 1,
          infinite: true,
          arrows: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          // slidesToShow: testSlideLen > 5 ? 5 : testSlideLen,
          slidesToScroll: 1,
          infinite: true,
          arrows: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  };
  const base_url = window.location.origin;
  console.log(base_url);
  return (
    <>
      <div className="bg-inputcolor">
        <div className="container mx-auto py-10  ">
          <div className="flex space-x-2 items-center pb-6 lg:px-0 px-5 ">
           
            <p className="text-secondary font-s-medium text-base">
              {" "}
              My Profile{" "}
            </p>{" "}
          </div>
          {userDetails.accountstatus == "Deactive" ? (
            <p className="text-red-400 text-base pl-6 font-s-medium">
              Currently you have been unsubscribed to reactivate your account,
              kindly go to Account and then click on activate account.
            </p>
          ) : (
            ""
          )}
          <div className="flex flex-col space-y-10 px-4 md:px-0">
            <div className="bg-white rounded-md ">
              <div className="inline-flex flex-col   justify-end items-end gap-2 rounded-[6px] ">
                <div className="p-4 flex  flex-col gap-2 ">
                  <img
                    alt="profile-banner"
                    src={
                      profilePic && profilePic.length > 0
                        ? profilePic
                        : "/assets/images/background-profile.png"
                    }
                    className="w-[90vw]  max-h-60 object-cover"
                  />
                  {/* profile image start */}
                  <div className=" p-4  rounded-xl  ">
                    <img
                      src={coachDetails?.images}
                      alt="/"
                      width={120}
                      className="-mt-20 flex items-start justify-start"
                    />
                  </div>
                  {/* profile image close  */}
                  <input
                    type="file"
                    name="uploadfile"
                    id="img"
                    className="hidden w-[70%]"
                    onChange={handleProfilePic}
                  />
                  <label for="img">
                    <MdEdit
                      className="text-secondary lg:-mt-72 -mt-36 shadow-xl bg-white rounded mx-2 mb-6 p-1  float-right cursor-pointer"
                      size={32}
                    />
                  </label>
                </div>
              </div>

              <div className="bg-white md:flex items-center md:justify-end justify-center md:space-x-6   px-10">
                <div>
                  <Link to={`/coach/edit-coach-profile/general`}>
                    <button className="text-sm bg-secondary  text-white font-s-medium  px-10 py-2 rounded-full shadow-sm shadow-slate-700 ">
                      Edit Profile
                    </button>
                  </Link>
                </div>
                <div>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(
                        `${base_url}/coach-detail/${userDetails.coachId}`
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
                    <div className="text-black text-opacity-80 text-[20px] font-s-bold ">
                      {userDetails.fullName}
                    </div>
                    <div className="text-black text-opacity-60 font-s-medium text-[13px] pt-1 ">
                      {userDetails.Currentaddress.city},
                      {userDetails.Currentaddress.state}
                    </div>
                  </div>

                  <div className=" flex-col pb-6 flex md:flex-row md:space-x-10 space-x-0 md:space-y-0 space-y-10 pt-3">
                    <div className="flex items-center space-x-2">
                      <MdMailOutline className=" w-6 h-6 text-secondary" />
                      <div className=" text-sm font-s-medium ">
                        {" "}
                        {userDetails.email}{" "}
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <RiSuitcaseLine className=" w-6 h-6 text-secondary" />
                      <div className=" text-sm font-s-medium ">
                        {" "}
                        {coachDetails?.experienec}{" "}
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MdPhone className=" w-6 h-6 text-secondary" />
                      <div className=" text-sm font-s-medium ">
                        {" "}
                        {coachDetails?.phoneNumber}{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-md py-3 ">
              <div className="lg:px-10 px-5 py-3 flex justify-between">
                <div className="lg:text-2xl text-xl font-s-medium">
                  Bio Data
                </div>
              </div>
              <hr className="w-full h-[0.10rem] bg-inputcolor" />
              <div className="lg:px-10 px-5 py-4">
                <div className="text-base font-s-medium text-black opacity-50  text-justify">
                  {coachDetails?.BioData}
                </div>
              </div>
            </div>
            {/* featured */}
            <div className="bg-white rounded-md pt-3 ">
              <div className="lg:px-10 px-5 py-3 flex justify-between">
                <div className="lg:text-2xl text-xl font-s-medium">
                  Featured
                </div>
              </div>
              <hr className="w-full h-[0.10rem] bg-inputcolor" />
              <div className="">
                <div className="">
                  <Slider
                    {...settingTestominal}
                    className="py-10 w-[80%]   md:w-full mx-auto bg-primary  rounded-b-md "
                  >
                    {coachDetails?.aadharCardNumberpdf?.length > 0 ? (
                      <div>
                        <div className=" bg-white p-2 mx-6 rounded-md ">
                          <p className="text-xs border-b">Aadhar Card</p>
                          <div
                            className="max-h-60 flex justify-center items-center object-cover"
                            // style={{
                            //   backgroundImage: `url(${coachDetails?.aadharCardNumberpdf})`,
                            // }}
                          >
                            <img
                              src={coachDetails?.aadharCardNumberpdf}
                              alt="doc_img"
                              className="h-40 w-full object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    ) : null}
                    {coachDetails?.socialSecurityNumbepdf?.length > 0 ? (
                      <div>
                        <div className=" bg-white p-2 mx-6 rounded-md ">
                          <p className="text-xs border-b">
                            Social Security Card
                          </p>
                          <div className="max-h-60  flex justify-center items-center">
                            <img
                              src={coachDetails?.socialSecurityNumbepdf}
                              alt="doc_img"
                              className="h-40 w-full object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    ) : null}
                    {coachDetails?.panCardNumberpdf?.length > 0 ? (
                      <div>
                        <div className=" bg-white p-2 mx-6 rounded-md ">
                          <p className="text-xs border-b">PAN Card</p>
                          <div
                            className="max-h-60  flex justify-center items-center object-cover"
                            // style={{
                            //   backgroundImage: `url(${coachDetails?.panCardNumberpdf})`,
                            // }}
                          >
                            <img
                              src={coachDetails?.panCardNumberpdf}
                              alt="doc_img"
                              className="h-40 w-full object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    ) : null}

                    {coachDetails?.gSTNumberpdf?.length > 0 ? (
                      <div>
                        <div className=" bg-white p-2 mx-6 rounded-md ">
                          <p className="text-xs border-b">GST Document</p>
                          <div className="max-h-60 flex justify-center items-center">
                            <img
                              src={coachDetails?.gSTNumberpdf}
                              alt="doc_img"
                              className="h-40 w-full object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    ) : null}
                    {coachDetails?.CoachingCertifications?.length > 0 &&
                      coachDetails?.CoachingCertifications?.map(
                        (item, index) => (
                          <div
                            className=" bg-white p-2 mx-6 rounded-md  "
                            key={index}
                          >
                            {" "}
                            <p className="text-xs border-b">Coach Documents</p>
                            <div className="max-h-60 flex justify-center items-center">
                              <img
                                src={item}
                                alt="doc_img"
                                className="h-40 w-full object-cover"
                              />
                            </div>
                            {console.log("CoachingCertifications", item)}
                          </div>
                        )
                      )}
                    {coachDetails?.Additionalcertification?.length > 0 &&
                      coachDetails?.Additionalcertification?.map(
                        (item, index) => (
                          <div
                            className=" bg-white p-2 mx-6 rounded-md  "
                            key={index}
                          >
                            {" "}
                            <p className="text-xs border-b">
                              Additional Documents
                            </p>
                            <div className="max-h-60 flex justify-center items-center">
                              <img
                                src={item}
                                alt="doc_img"
                                className="max-h-60 w-full"
                              />
                            </div>
                            {console.log("Additionalcertification", item)}
                          </div>
                        )
                      )}
                    {coachDetails?.uploaddocument?.length > 0 &&
                      coachDetails?.uploaddocument?.map((item, index) => (
                        <div
                          className=" bg-white p-2 mx-6 rounded-md  "
                          key={index}
                        >
                          {" "}
                          <p className="text-xs border-b">Uploaded Documents</p>
                          <div className="max-h-60 flex justify-center items-center">
                            <img
                              src={item}
                              alt="doc_img"
                              className="h-40 w-full object-cover"
                            />
                          </div>
                          {console.log("uploaddocument", item)}
                        </div>
                      ))}
                  </Slider>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-md py-3 ">
              <div className="lg:px-10 px-5 py-3 flex justify-between">
                <div className="lg:text-2xl text-xl font-s-medium">
                  Coaching Experience
                </div>
              </div>
              <hr className="w-full h-[0.10rem] bg-inputcolor" />
              <div className="py-5 lg:px-10 px-5 grid grid-cols-1 gap-5">
                {coachDetails?.coachingExperience?.map((item, index) => (
                  <div className="" key={index}>
                    <div className="flex space-x-5  items-center">
                      <div className="bg-white p-2 shadow-md shadow-slate-400 rounded-xl ">
                        <img
                          src="/assets/images/logo1.png"
                          alt="/"
                          className="w-16 h-16 "
                        />
                      </div>
                      <div className="">
                        <p className="text-lg font-s-medium text-secondary">
                          {item.coachingField}
                        </p>

                        <p className="text-sm font-s-medium text-black opacity-60">
                          {item.experience} Experience
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-md py-3 ">
              <div className="lg:px-10 px-5 py-3 flex justify-between">
                <div className="lg:text-2xl text-xl font-s-medium">
                  Industry Experience
                </div>
              </div>
              <hr className="w-full h-[0.10rem] bg-inputcolor" />
              <div className="py-5 lg:px-10 px-5 grid grid-cols-1 gap-5">
                {coachDetails?.industryExperience?.map((item, index) => (
                  <div className="" key={index}>
                    <div className="flex space-x-5  items-center">
                      <div className="bg-white p-2 shadow-md shadow-slate-400 rounded-xl ">
                        <img
                          src="/assets/images/logo1.png"
                          alt="/"
                          className="w-16 h-16 "
                        />
                      </div>
                      <div className="">
                        <p className="text-lg font-s-medium text-secondary">
                          {item.industryField}
                        </p>
                        <p className="text-base font-s-medium">
                          {item.industrySpecialization}
                        </p>

                        <p className="text-sm font-s-medium text-black opacity-60">
                          {item.experience} Experience
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-md py-3 ">
              <div className="lg:px-10 px-5 py-3 flex justify-between">
                <div className="lg:text-2xl text-xl font-s-medium">
                  Work Experience
                </div>
              </div>
              <hr className="w-full h-[0.10rem] bg-inputcolor" />
              <div className="py-5 lg:px-10 px-5 grid grid-cols-1 gap-5">
                {coachDetails?.workExperience?.map((item, index) => (
                  <div className="" key={index}>
                    <div className="flex space-x-5  items-center">
                      <div className="bg-white p-2 shadow-md shadow-slate-400 rounded-xl ">
                        <img
                          src="/assets/images/logo1.png"
                          alt="/"
                          className="w-16 h-16 "
                        />
                      </div>
                      <div className="">
                        <p className="text-lg font-s-medium text-secondary">
                          {item.title}
                        </p>
                        <p className="text-base font-s-medium">
                          Company Name: {item.companyName}
                        </p>
                        <p className="text-base font-s-medium">
                          Location: {item.location}
                        </p>

                        <p className="text-sm font-s-medium text-black opacity-60">
                          ({item.startDate})-({item.endDate})
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-md py-3 ">
              <div className="lg:px-10 px-5 py-3 flex justify-between">
                <div className="lg:text-2xl text-xl font-s-medium">
                  Education
                </div>
              </div>
              <hr className="w-full h-[0.10rem] bg-inputcolor" />
              <div className="py-5 lg:px-10 px-5 grid grid-cols-1 md:space-x-2 space-x-5">
                {coachDetails?.addClassXDetails?.map((item, index) => (
                  <div className="" key={index}>
                    <div className="flex space-x-5  items-start">
                      <div className="bg-white p-2 shadow-md shadow-slate-400 rounded-xl ">
                        <img
                          src="/assets/images/logo1.png"
                          alt="/"
                          className="w-16 h-16 "
                        />
                      </div>
                      <div className="">
                        <p className="text-lg font-s-medium text-secondary underline">
                          Class X Details
                        </p>

                        <p className="text-lg font-s-medium text-secondary">
                          {item.SchoolUniversity}
                        </p>
                        <p className="text-base font-s-medium">
                          Passing Year:
                          {item?.passingYear.substring(0, 4)}
                        </p>
                        <p className="text-sm font-s-medium text-black opacity-60">
                          Percentage: {item.percentage}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="py-5 lg:px-10 px-5 grid grid-cols-1 md:space-x-2 space-x-5">
                {coachDetails?.addClassXIIDetails?.map((item, index) => (
                  <div className="" key={index}>
                    <div className="flex space-x-5  items-start">
                      <div className="bg-white p-2 shadow-md shadow-slate-400 rounded-xl ">
                        <img
                          src="/assets/images/logo1.png"
                          alt="/"
                          className="w-16 h-16 "
                        />
                      </div>
                      <div className="">
                        <p className="text-lg font-s-medium text-secondary underline">
                          Class XII Details
                        </p>
                        <p className="text-lg font-s-medium text-secondary">
                          {item.SchoolUniversity}
                        </p>
                        <p className="text-base font-s-medium">
                          Course Type: {item.courseType}
                        </p>
                        <p className="text-base font-s-medium">
                          Passing Year:{item?.passingYear.substring(0, 4)}
                        </p>
                        <p className="text-sm font-s-medium text-black opacity-60">
                          Percentage: {item.percentage}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="py-5 lg:px-10 px-5 grid grid-cols-1 gap-3">
                {coachDetails?.Educationdetails?.map((item, index) => (
                  <div className="" key={index}>
                    <div className="flex space-x-5  items-start">
                      <div className="bg-white p-2 shadow-md shadow-slate-400 rounded-xl ">
                        <img
                          src="/assets/images/logo1.png"
                          alt="/"
                          className="w-16 h-16 "
                        />
                      </div>
                      <div className="">
                        <p className="text-lg font-s-medium text-secondary">
                          {item.SchoolUniversity}
                        </p>
                        <p className="text-lg font-s-medium text-secondary">
                          Course Name: {item.courseName}
                        </p>
                        <p className="text-base font-s-medium">
                          Passing Year: {item?.passingYear.substring(0, 4)}
                        </p>
                        <p className="text-sm font-s-medium text-black opacity-60">
                          Percentage: {item.percentage}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-md py-3 ">
              <div className="lg:px-10 px-5 py-3 flex justify-between">
                <div className="lg:text-2xl text-xl font-s-medium">Skills</div>
              </div>

              <hr className="w-full h-[0.10rem] bg-inputcolor" />
              <div className="py-5 lg:px-10 px-5  ">
                <div className="md:flex md:space-x-5 ">
                  {coachDetails?.siklls?.map((item, index) => {
                    return (
                      <p
                        key={index}
                        className="bg-secondary p-2 text-white rounded-full text-center md:my-0 my-2"
                      >
                        {item}
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-md py-3 ">
              <div className="lg:px-10 px-5 py-3 flex justify-between">
                <div className="lg:text-2xl text-xl font-s-medium">
                  Specialities
                </div>
              </div>

              <hr className="w-full h-[0.10rem] bg-inputcolor" />
              <div className="py-5 lg:px-10 px-5  ">
                <div className="md:flex md:space-x-5 ">
                  {coachDetails?.specialities?.map((item, index) => {
                    return (
                      <p className="bg-secondary p-2 text-white rounded-full text-center md:my-0 my-2">
                        {item}
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-md py-3 ">
              <div className="lg:px-10 px-5 py-3 flex justify-between">
                <div className="lg:text-2xl text-xl font-s-medium">
                  Recent Services
                </div>
              </div>

              <hr className="w-full h-[0.10rem] bg-inputcolor" />
              <div className="py-5 lg:px-10 px-5  ">
                <div className="grid grid-cols-2 gap-3">
                  {serviceData &&
                    serviceData.slice(0, 4).map((item) => (
                      <div className=" border rounded-md p-3 shadow-sm flex flex-col gap-2 bg-[#E3EEFF]">
                        <img
                          alt="service"
                          src="../assets/images/logo1.png"
                          className="shadow-lg rounded-md lg:w-20"
                        />
                        <div className="flex flex-col">
                          <h5 className="font-s-medium text-lg">
                            {item.serviceName}
                          </h5>
                          <h6 className="text-base font-s-medium">
                            {item.serviceTitle}
                          </h6>
                          <h6 className="text-sm ">{item.description}</h6>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Transition appear show={userDetails.status !== "Approved"} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={openModal}>
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Approval Pending
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Your account has not yet approved from admin. Please wait
                      for Admin Approval to access your dashboard!!
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      // onClick={closeModal}
                      onClick={(e) => navigate("/")}
                    >
                      Got it Thanks!!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default MyProfilePage;
