import React, { useEffect , useState } from "react";
import { Link } from "react-router-dom";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { RiArrowLeftSLine } from "react-icons/ri";
import { MdVideoCall, MdMessage } from "react-icons/md";
import { getAllUpcomingServices } from "../../../api/coachFunctions";
import { useSelector } from "react-redux";
import { getCandidateServices, getUpcomingService, getUpcomingServices } from "../../../api/authCandidate";

const UpcomingServices = () => {
  const { userDetails } = useSelector((state) => state.flightReducer);

  const CandidateId = userDetails._id;

  const [data , setData] = useState([]);

  const getAllUpcomingServices = async () => {
    try {
      const response = await getCandidateServices(CandidateId)
      setData(response.data)
      var x = response.data
      console.log(x);
    } catch (error) {
      console.log(error);
    }
  }

  


  useEffect(() => {
    getAllUpcomingServices()
  }, [])
  const services = [
    {
      id: 1,
      date: "23 Jan 2023",
      time: "10:00AM",
      serviceName: "Adobe Photoshop Training for Beginner",
      byname: "Ronald Richards (560798)",
      para: "Topics: Interoperability, Nondestructive Editing, Output, Photoshop Fundamentals, Productivity Enhancements",
      img: "/assets/images/chat-img3.png",
    },
    {
      id: 2,
      date: "23 Jan 2023",
      time: "10:00AM",
      serviceName: "Adobe Photoshop Training for Beginner",
      byname: "Ronald Richards (560798)",
      para: "Topics: Interoperability, Nondestructive Editing, Output, Photoshop Fundamentals, Productivity Enhancements",
      img: "/assets/images/chat-img3.png",
    },
    {
      id: 3,
      date: "23 Jan 2023",
      time: "10:00AM",
      serviceName: "Adobe Photoshop Training for Beginner",
      byname: "Ronald Richards (560798)",
      para: "Topics: Interoperability, Nondestructive Editing, Output, Photoshop Fundamentals, Productivity Enhancements",
      img: "/assets/images/chat-img3.png",
    },
    {
      id: 4,
      date: "23 Jan 2023",
      time: "10:00AM",
      serviceName: "Adobe Photoshop Training for Beginner",
      byname: "Ronald Richards (560798)",
      para: "Topics: Interoperability, Nondestructive Editing, Output, Photoshop Fundamentals, Productivity Enhancements",
      img: "/assets/images/chat-img3.png",
    },
  ];

  return (
    <div className="bg-inputcolor">
      <div className="container mx-auto py-10  ">
        <div className="flex space-x-2 items-center pb-6 lg:px-0 px-5 ">
          {" "}
          <RiArrowLeftSLine className="text-secondary w-5 h-5 " />{" "}
          <p className="text-secondary font-s-medium text-base">
            {" "}
            Accepted Request
          </p>{" "}
        </div>
        <div className="flex flex-col space-y-10 px-4 md:px-0">
          <div className="bg-white rounded-md py-3 ">
            <div className="flex justify-between items-center py-2">
              <div className="flex space-x-4  px-5 pb-5">
                <img alt="icon" src="/assets/images/upcoming.png" />
                <h3 className="font-bold  text-lg flex pt-1">
                  Upcoming Services
                </h3>
              </div>
            </div>
            <hr className="w-full h-[0.10rem] bg-inputcolor" />

            <div className=" px-5">
              {data && data.map((item) => (
                <div className="bg-inputcolor my-5 py-2 rounded-lg">
                  <div className="px-5 md:flex md:space-x-20 justify-between py-2">
                    <Link to={`/candidate/upcoming-detail-service/${item?.candidateId}/${item?.serviceId?._id}`}>
                      <p className="font-s-medium text-secondary text-lg">
                        {item?.serviceId?.serviceName}{" "}
                      </p>
                    </Link>
                    <div className="text-end px-5 lg:py-0 py-3">
                      <button className="text-white  px-5 py-1.5 bg-secondary text-sm rounded-full">
                        {item?.bookingSlots?.[0]?.date} {"--"} {item?.bookingSlots?.[0]?.timeStart}| {item?.bookingSlots?.slice(-1)?.[0]?.date}{"--"}{item?.bookingSlots?.slice(-1)?.[0]?.timeEnd}
                      </button>
                    </div>
                  </div>

                  <p className="px-5 lg:w-[70%] w-full pt-2  text-justify">
                    {item?.serviceId?.description}
                  </p>

                  <div className="flex justify-between">
                    {" "}
                    <div className="flex items-center  px-5 space-x-4 py-3">
                      <img className="h-[50px] w-[50px] rounded-full"
                        alt="images"
                        src={item?.serviceId?.coachId?.images?.[0]}
                        // className="rounded-full"
                      />
                      <p className="text-secondary font-s-medium">
                        {item?.serviceId?.coachId?.coachName}
                      </p>
                    </div>
                    <div className="flex space-x-3 px-6 items-center">
                      <p className="font-s-medium">Join</p>
                      {item?.serviceId?.medium?.includes("Call") && item?.serviceId?.medium?.includes("Video Call") ? 
                      <>
                      <MdMessage className="text-secondary" size={24} />
                      <MdVideoCall className="text-secondary" size={28} />
                      
                      </>
                      : item?.serviceId?.medium?.includes("Call") && !item?.serviceId?.medium?.includes("Video Call") ?
                      <>
                      <MdMessage className="text-secondary" size={24} />
                      </>
                      : !item?.serviceId?.medium?.includes("Call") && item?.serviceId?.medium?.includes("Video Call") ?
                      <>
                      <MdVideoCall className="text-secondary" size={28} />
                      </> : null
                    }
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-end justify-end py-4 px-5">
              <div className=" hidden md:flex  bg-white  ">
                <div className="flex flex-1 justify-between sm:hidden">
                  <a
                    href="/manage-jobs"
                    className="relative inline-flex items-center rounded-md border bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    Previous
                  </a>
                  <a
                    href="/manage-jobs"
                    className="relative ml-3 inline-flex items-center rounded-md border bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    Next
                  </a>
                </div>
                <div className=" flex  ">
                  <div>
                    <nav
                      className="isolate inline-flex gap-2  rounded-md "
                      aria-label="Pagination"
                    >
                      <a
                        href="#"
                        className="relative inline-flex items-center rounded-l-md  bg-white px-2 py-2 text-sm font-medium text-grey hover:bg-gray-50 focus:z-20"
                      >
                        <span className="sr-only">Previous</span>
                        <BsChevronLeft className="h-5 w-5" aria-hidden="true" />
                      </a>
                      {/* Current: "z-10 bg-indigo-50 border-secondary text-indigo-600", Default: "bg-white text-grey hover:bg-gray-50" */}
                      <a
                        href="#"
                        aria-current="page"
                        className="relative z-10 inline-flex items-center  bg-secondary px-4 py-2 text-sm font-medium text-white focus:z-20"
                      >
                        1
                      </a>
                      <a
                        href="#"
                        className="relative inline-flex items-center  bg-white px-4 py-2 text-sm font-medium text-grey hover:bg-gray-50 focus:z-20"
                      >
                        2
                      </a>
                      <a
                        href="#"
                        className="relative hidden items-center  bg-white px-4 py-2 text-sm font-medium text-grey hover:bg-gray-50 focus:z-20 md:inline-flex"
                      >
                        3
                      </a>
                      <span className="relative inline-flex items-center  bg-white px-4 py-2 text-sm font-medium text-gray-700">
                        ...
                      </span>
                      <a
                        href="#"
                        className="relative hidden items-center bg-white px-4 py-2 text-sm font-medium text-grey hover:bg-gray-50 focus:z-20 md:inline-flex"
                      >
                        8
                      </a>
                      <a
                        href="#"
                        className="relative inline-flex items-center  bg-white px-4 py-2 text-sm font-medium text-grey hover:bg-gray-50 focus:z-20"
                      >
                        9
                      </a>
                      <a
                        href="#"
                        className="relative inline-flex items-center  bg-white px-4 py-2 text-sm font-medium text-grey hover:bg-gray-50 focus:z-20"
                      >
                        10
                      </a>
                      <a
                        href="#"
                        className="relative inline-flex items-center rounded-r-md  bg-white px-2 py-2 text-sm font-medium text-grey hover:bg-gray-50 focus:z-20"
                      >
                        <span className="sr-only">Next</span>
                        <BsChevronRight
                          className="h-5 w-5"
                          aria-hidden="true"
                        />
                      </a>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingServices;
