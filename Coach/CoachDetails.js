import React, { useEffect, useState } from "react";
import { MdOutlineMessage } from "react-icons/md";
import { BsCameraVideoFill } from "react-icons/bs";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AiFillQuestionCircle } from "react-icons/ai";
import { IoCall } from "react-icons/io5";
import {
  getCoachDetails,
  getCoachServicesById,
  candidateJobListAPI,
  setFavCoach,
} from "../../api/authCandidate";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import FavoriteJobs from "../dashboards/candidate/FavoriteJobs";

const CoachDetails = () => {
  const params = useParams();
  const id = params.id;

  const [dataService, setDataService] = useState([]);
  const [data, setData] = useState([]);
  const getCoachDetail = async () => {
    try {
      const response = await getCoachDetails(id);
      //   console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getCoachServices = async () => {
    try {
      const response = await getCoachServicesById(id);
      //   console.log(response.data);
      setDataService(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const [jobDataSet, setJobDataSet] = useState([]);
  const getJobs = async () => {
    try {
      const response = await candidateJobListAPI();
      //   console.log(response.data);
      setJobDataSet(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const navigate = useNavigate();
  const flightData = useSelector((state) => state.flightReducer);
  const viewAllService = () => {
    if (flightData.isLogin) {
      navigate("/candidate/all-services", {
        state: {
          coachId: id,
        },
      });
    } else {
      toast("Please login to view all services");
    }
  };
  const { userDetails } = useSelector((state) => state.flightReducer);

  let CandidateId 
  if(userDetails){CandidateId = userDetails._id}

  const handleClick = async () => {
    try {
      const response = await setFavCoach({
        coachId: id,
        candidateId: CandidateId,
      });
      if (response.code === 200) {
        toast(response.message);
        setIsActive((current) => !current);
        // console.log("fav coach");
      } else {
        toast(response.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [isActive, setIsActive] = useState(true);
  useEffect(() => {
    getCoachDetail();
    getCoachServices();
    getJobs();
  }, []);
  const start = Array(5).fill(0);

  return (
    <div className="container-inner mx-auto mt-28 pb-12">
      <div className="grid md:grid-cols-12 grid-cols-1 gap-10 lg:px-0 px-5 pt-8">
        <div className="md:col-span-8 px-5 md:px-0 space-y-8">
          <div className="flex md:flex-row flex-col gap-4">
            <img
              alt="profile"
              src={data?.[0]?.images?.[0]}
              className="w-36 h-36"
            />
            <div className="flex flex-col gap-4 p-2">
              <div className="flex justify-between w-full">
                <div>
                  <h2 className="font-s-bold text-2xl">{data[0]?.coachName}</h2>
                  <div className="flex">
                    <AiFillStar className="text-yellow-600" />
                    <AiFillStar className="text-yellow-600" />
                    <AiFillStar className="text-yellow-600" />
                    <AiFillStar className="text-yellow-600" />
                    <AiOutlineStar className="text-yellow-600" />
                  </div>
                </div>
            <Link to="/coach/support-chat">   <MdOutlineMessage className="text-white bg-blue-700 text-lg w-10 h-10 p-2 rounded-full" /> </Link> 
                <div className="lg:float-right lg:py-4 pt-16">
                  <button
                    onClick={handleClick}
                    className="text-white font-s-medium rounded-md px-5 py-2 btnstr"
                  >
                    <svg
                      className={
                        isActive
                          ? "w-[30px] h-[30px] bg-salmon"
                          : "w-[30px] h-[30px]"
                      }
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                    </svg>
                  </button>
                </div>
              </div>
              <p className="text-sm text-gray-700 font-semibold">
                Ronald Richards helps you navigate your career aspirations and
                stand out. Tap into her coaching certifications, career-building
                teaching skills, and her senior mgt. national corporate
                expertise.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="font-s-bold">About Me</h2>
            <p className="text-sm">{data[0]?.BioData}</p>
            {/* <p className="text-sm">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi.
            </p> */}
          </div>

          <div>
            <h2 className="font-s-bold pb-4">Work experience</h2>
            <div className=" border border-[#707070] rounded-md px-5 py-6">
              <div className="grid grid-cols-1  mx-auto  gap-3 items-center justify-items-start ">
                {data?.[0]?.workExperience?.length > 0
                  ? data[0]?.workExperience?.map((item, id) => {
                      return (
                        <>
                          <div className="flex flex-col gap-3 pt-6" key={id}>
                            <div className="font-s-medium text-base lg:pl-10  pl-8 ">
                              {item.startDate} to {item.endDate}
                            </div>

                            <div className="flex gap-2 items-center">
                              <div className="rounded-full w-4 h-4 bg-secondary"></div>
                              <hr className="w-4 h-[0.12rem] bg-secondary -ml-2" />
                              <div className="text-sm font-s-medium text-secondary">
                                {item.companyName}
                              </div>
                            </div>

                            <div className="font-s-medium text-sm lg:pl-10 pl-8 ">
                              {item.title}
                            </div>
                            <div className="font-s-normal text-sm lg:pl-10 pl-8 ">
                              {item.location}
                            </div>
                          </div>
                        </>
                      );
                    })
                  : "No work Experience"}
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-s-bold pb-4">Education & Training</h2>
            <div className=" border border-[#707070] rounded-md px-5 py-6">
              <div className="grid grid-cols-1  mx-auto  gap-3 items-center justify-items-start ">
                {data?.[0]?.Educationdetails?.length > 0
                  ? data[0]?.Educationdetails.map((item, id) => {
                      return (
                        <>
                          <div className="flex flex-col gap-3 pt-6" key={id}>
                            <div className="font-s-medium text-base lg:pl-10 pl-8  ">
                              {item.passingYear}
                            </div>

                            <div className="flex gap-2 items-center">
                              <div className="rounded-full w-4 h-4 bg-secondary"></div>
                              <hr className="w-4 h-[0.12rem] bg-secondary -ml-2" />
                              <div className="text-sm font-s-medium text-secondary">
                                {item.courseName} - {item.specialization}
                              </div>
                            </div>

                            <div className="font-s-medium text-sm lg:pl-10 pl-8 ">
                              {item.SchoolUniversity}
                            </div>
                            <div className="font-s-normal text-sm lg:pl-10 pl-8 ">
                              {item.courseType} - Percentage - {item.percentage}
                            </div>
                          </div>
                        </>
                      );
                    })
                  : "No education"}
              </div>
            </div>
          </div>
          <div>
            <h2 className="font-s-bold pb-4">Class XII</h2>
            <div className=" border border-[#707070] rounded-md px-5 py-6">
              <div className="grid grid-cols-1  mx-auto  gap-3 items-center justify-items-start ">
                {data[0]?.addClassXIIDetails?.map((item, id) => {
                  return (
                    <>
                      <div className="flex flex-col gap-3 pt-6" key={id}>
                        <div className="font-s-medium text-base lg:pl-10 pl-8  ">
                          {item.passingYear}
                        </div>

                        <div className="flex gap-2 items-center">
                          <div className="rounded-full w-4 h-4 bg-secondary"></div>
                          <hr className="w-4 h-[0.12rem] bg-secondary -ml-2" />
                          <div className="text-sm font-s-medium text-secondary">
                            {item.courseName} - {item.specialization}
                          </div>
                        </div>

                        <div className="font-s-medium text-sm lg:pl-10 pl-8 ">
                          {item.SchoolUniversity}
                        </div>
                        <div className="font-s-normal text-sm lg:pl-10 pl-8 ">
                          {item.courseType} - Percentage - {item.percentage}
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
          <div>
            <h2 className="font-s-bold pb-4">Class XII</h2>
            <div className=" border border-[#707070] rounded-md px-5 py-6">
              <div className="grid grid-cols-1  mx-auto  gap-3 items-center justify-items-start ">
                {data[0]?.addClassXDetails?.map((item, id) => {
                  return (
                    <>
                      <div className="flex flex-col gap-3 pt-6" key={id}>
                        <div className="font-s-medium text-base lg:pl-10 pl-8  ">
                          {item.passingYear}
                        </div>

                        <div className="flex gap-2 items-center">
                          <div className="rounded-full w-4 h-4 bg-secondary"></div>
                          <hr className="w-4 h-[0.12rem] bg-secondary -ml-2" />
                          <div className="text-sm font-s-medium text-secondary">
                            {item.courseName} - {item.specialization}
                          </div>
                        </div>

                        <div className="font-s-medium text-sm lg:pl-10 pl-8 ">
                          {item.SchoolUniversity}
                        </div>
                        <div className="font-s-normal text-sm lg:pl-10 pl-8 ">
                          {item.courseType} - Percentage - {item.percentage}
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="md:col-span-4 lg:px-0 px-5 py-2">
          <div className="bg-primary flex flex-col gap-4 p-4 rounded-md">
            <h2 className="font-semibold">FEATURED TESTIMONIAL</h2>
            <p className="text-sm text-gray-700 font-semibold tracking-wide">
              UUt enim ad minima veniam, quis nostrum exercitationem ullam
              corporis suscipit laboriosam, nisi ut aliquid ex ea commode
              consequatur? Quis autem vel eum iur reprehenderit qui in ea
              voluptate velit esse quam nihil molestiae consequatur
            </p>
            <div>
              <h2 className="font-semibold">George</h2>
              <p className="text-xs text-gray-400 font-semibold">CEO Apple</p>
            </div>
          </div>
          <div className="bg-white box-shadow rounded-lg px-5 py-6 lg:mt-10 mt-5">
            <h2 className="font-s-bold">Feedback and Suggestions</h2>

            <div className="flex flex-col gap-3 pt-4 ">
              <div className="flex justify-start flex-col gap-1 w-full ">
                <div className="font-s-normal text-[15px]"> Name</div>
                <input
                  type="text"
                  placeholder=" Name"
                  className="w-full bg-inputcolor border-2 border-inputcolor placeholder:text-grey placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                />
              </div>
              <div className="flex justify-start flex-col gap-1 w-full">
                <div className="font-s-normal text-[15px]">Email Id</div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-inputcolor border-2 border-inputcolor placeholder:text-grey placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                />
              </div>

              <div className="flex justify-start flex-col gap-1 w-full">
                <div className="font-s-normal text-[15px]">
                  Feedback & Suggestion
                </div>
                <textarea
                  type="text"
                  rows="4"
                  placeholder="Write something here"
                  className="w-full bg-inputcolor border-2 border-inputcolor placeholder:text-grey placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                />
              </div>
              <div className="flex justify-start flex-col gap-1 w-full pb-4">
                <div className="font-s-normal text-[15px]">Rating</div>
                <div className="flex">
                  {start.map((obj, e) => (
                    <FaStar key={e} className="on" />
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-center">
                <button className="text-sm bg-secondary  text-white font-s-medium  px-16 py-3 rounded-md shadow-sm shadow-slate-700 ">
                  Submit Now
                </button>
              </div>
            </div>
          </div>

          <div className="py-6">
            <h6 className="font-s-medium">Similar Jobs</h6>

            <div className="">
              <div className="grid grid-cols-1    pt-2 gap-8  ">
                {jobDataSet.slice(0, 4).map((item, index) => {
                  return (
                    <div
                      className="bg-white shadow-md shadow-[#2544EE30] rounded-xl relative "
                      key={index}
                    >
                      <div className="flex px-2">
                        <div
                          className={`{ text-black font-s-medium text-sm absolute  top-2 right-3 px-6 rounded-md py-1 ${
                            item?.jobType?.toString() === "Internship"
                              ? "bg-[#AB6B35]"
                              : item?.jobType?.toString() === "Fulltime"
                              ? "bg-[#8C82EA]"
                              : item?.jobType?.toString() === "Freelancer"
                              ? "bg-[#2D9BB3]"
                              : "bg-[#41B249]"
                          }`}
                        >
                          {item?.jobType?.toString()}
                        </div>
                        <img
                          alt="JobPost"
                          src={item?.employerId?.image}
                          width={80}
                          height={80}
                        />
                      </div>

                      <div className="flex flex-col pt-1 px-5 pb-3">
                        <Link to={`/job-details/${item._id}`}>
                          <p className="text-sm font-s-medium pb-3">
                            {item.jobTitle}
                            <span className="text-[#41B249]">
                              {" "}
                              posted on{" "}
                              {new Date(item.updatedAt).toLocaleDateString()}
                            </span>
                          </p>
                        </Link>

                        <div className="font-s-medium text-sm">
                          {item.salaryFrom} - {item.salaryTo} /{" "}
                          {item.salaryPeriod}
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
          </div>
        </div>
      </div>
      <div className=" ">
        <div className="flex justify-between pb-3 pt-6 lg:px-0 px-5">
          <div className="font-s-bold  text-[18px] ">Services Available</div>
          <div
            className="text-secondary font-s-medium underline cursor-pointer"
            onClick={(e) => viewAllService()}
          >
            View More
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-5 px-5 lg:px-0">
          {dataService.slice(0, 4).map((item) => (
            <div className="bg-inputcolor  py-2 rounded-lg">
              <div className="text-end px-5 ">
                <button
                  onClick={() => {
                    navigate("/candidate/slot-booking", {
                      state: {
                        coachId: id,
                        serviceId: item?._id,
                        noOfSession: item?.NoofSession,
                        totalwithdrawAmount: item?.withdrawnAmount,
                      },
                    });
                  }}
                  className="text-white font-s-medium px-10 py-1.5 bg-secondary text-sm rounded-full"
                >
                  Buy Now
                </button>
              </div>

              <div
                onClick={() => {
                  navigate("/candidate/ask-me-question", {
                    state: {
                      serviceId: item._id,
                      coachId: item.coachId._id,
                      coachName: item.coachId.coachName,
                      image: item.coachId.images,
                    },
                  });
                }}
                className="flex items-end justify-end px-6 pb-3"
              >
                {" "}
                <AiFillQuestionCircle size={28} className="text-secondary " />
              </div>

              <div className="px-5 ">
                <p className="font-s-medium text-lg">{item.serviceName} </p>
                <div className="flex pt-2 space-x-2">
                  <p className="text-sm whitespace-nowrap"> {item.coachName}</p>
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

              <div className="md:grid md:grid-cols-2 space-y-4 px-1 py-3 items-center justify-center space-x-5">
                <div className="bg-white text-sm rounded-full flex items-center justify-center lg:px-5  py-2 font-s-medium">
                Special Price :  {parseInt(item.enterPrice) + parseInt(item.gst)}
                </div>
                <div className="bg-white rounded-full text-sm  py-2 px-2 lg:my-0 my-3 font-s-medium flex  items-center justify-center ">
                  <div>Medium :</div>
                  <div className="flex space-x-3">
                    {item.medium.map((option) => {
                      return (
                        <>
                          {option === "Call" ? (
                            <IoCall
                              className="bg-primary cursor-pointer text-secondary p-0.5"
                              size={20}
                            />
                          ) : option === "Video Call" ? (
                            <BsCameraVideoFill
                              className="bg-primary cursor-pointer text-secondary p-0.5"
                              size={20}
                            />
                          ) : null}
                        </>
                      );
                    })}
                  </div>
                </div>
                <div className="bg-white text-sm rounded-full flex items-center justify-center lg:px-5  py-2 font-s-medium">
                  Service Duration : {item.serviceduration}
                </div>
                <div className="bg-white text-sm rounded-full flex items-center justify-center lg:px-5  py-2 font-s-medium">
                  Duration per session : {item.durationofSession}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoachDetails;
