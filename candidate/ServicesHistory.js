import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsChevronLeft } from "react-icons/bs";
import { MdTimelapse } from "react-icons/md";
import { TbUserCircle } from "react-icons/tb";
import { BiHistory, BiCalendar } from "react-icons/bi";
import { GiAlarmClock } from "react-icons/gi";
import { getCompletedServiceById } from "../../../api/authCandidate";
import { useSelector } from "react-redux";

const ServiceHistory = () => {
  const servicesHistory = [
    {
      id: 1,
      title: "Adobe Photoshop Training for Beginner",
      heading:
        "Topics: Interoperability, Nondestructive Editing, Output, Photoshop Fundamentals, Productivity Enhancements",
      date: "12 Jan,2023",
      time: "12:00 PM",
      duration: "01 Hour",
      name: "Ronald Richards (560798)",
      status: "Completed",
    },
    {
      id: 2,
      title: "Adobe Photoshop Training for Beginner",
      heading:
        "Topics: Interoperability, Nondestructive Editing, Output, Photoshop Fundamentals, Productivity Enhancements",
      date: "12 Jan,2023",
      time: "12:00 PM",
      duration: "01 Hour",
      name: "Ronald Richards (560798)",
      status: "Upcoming",
    },
    {
      id: 3,
      title: "Adobe Photoshop Training for Beginner",
      heading:
        "Topics: Interoperability, Nondestructive Editing, Output, Photoshop Fundamentals, Productivity Enhancements",
      date: "12 Jan,2023",
      time: "12:00 PM",
      duration: "01 Hour",
      name: "Ronald Richards (560798)",
      status: "Cancelled",
    },
    {
      id: 4,
      title: "Adobe Photoshop Training for Beginner",
      heading:
        "Topics: Interoperability, Nondestructive Editing, Output, Photoshop Fundamentals, Productivity Enhancements",
      date: "12 Jan,2023",
      time: "12:00 PM",
      duration: "01 Hour",
      name: "Ronald Richards (560798)",
      status: "Pending",
    },
    {
      id: 5,
      title: "Adobe Photoshop Training for Beginner",
      heading:
        "Topics: Interoperability, Nondestructive Editing, Output, Photoshop Fundamentals, Productivity Enhancements",
      date: "12 Jan,2023",
      time: "12:00 PM",
      duration: "01 Hour",
      name: "Ronald Richards (560798)",
      status: "Reschedule",
    },
  ];

  const { userDetails } = useSelector((state) => state.flightReducer);
  const CandidateId = userDetails._id;

  const [data , setData] = useState([])



  const getPrevServices = async () => {
    try {
      const response = await getCompletedServiceById(CandidateId)
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getPrevServices()
  },[])


  return (
    <div className="bg-inputcolor">
      <div className="container mx-auto py-10  ">
        <Link to="/candidate/upcoming-services">
          <div className="flex space-x-2 items-center pb-6 lg:px-0 px-5 ">
            {" "}
            <BsChevronLeft className="text-secondary w-5 h-5 " />{" "}
            <p className="text-secondary font-s-medium text-base">
              {" "}
              Services History
            </p>{" "}
          </div>
        </Link>
        <div className="flex flex-col space-y-10 px-4 md:px-0">
          <div className="bg-white rounded-md py-3 ">
            <div className="flex justify-between py-2">
              <div className="flex space-x-4  px-5 pb-5">
                <BiHistory size={32} className="mt-1 text-secondary" />
                <div className="descri"><h3 className="font-bold  text-lg flex pt-1">
                  Services History</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non quam commodo, dictum justo a, varius nisl.</p>
                </div>
                
              </div>

              <div className="flex items-center space-x-3 px-6">
                <select className="bg-primary p-3 rounded-md">
                  <option value="1">Sort by Date</option>
                  <option value="dummy">dummy</option>
                  <option value="dummy">dummy</option>
                </select>
              </div>
            </div>
            <hr className="w-full h-[0.10rem] bg-inputcolor" />

            <div className=" px-5">
              {data.map((item) => (
                <div className="bg-inputcolor my-5 py-4 px-5 rounded-lg">
                  <div className="lg:flex justify-between">
                    <h3 className="font-s-medium text-lg">{item?.serviceId?.serviceName}</h3>
                    <h4
                      className={`text-black font-s-medium ${
                        item.status === "Delivered"
                          ? "text-green-500"
                          // : item.status === "Upcoming"
                          // ? "text-yellow-600"
                          : item.status === "Cancelled"
                          ? "text-red-500"
                          // : item.status === "Pending"
                          // ? "text-yellow-400"
                          // : item.status === "Reschedule"
                          // ? "text-blue-500"
                          : null
                      }`}
                    >
                      {item.status}
                    </h4>
                  </div>
                  <div className="py-2">{item?.serviceId?.description}</div>

                  <div className="grid lg:grid-cols-4 grid-cols-2 lg:py-1 ">
                    <div className="flex space-x-2">
                      <BiCalendar className="text-secondary" size={20} />
                      <div className="">
                        <h5 className=" font-s-medium">{item.date}</h5>
                        <p>Date</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <GiAlarmClock className="text-secondary" size={20} />
                      <div className="">
                        <h5 className=" font-s-medium">{item.timeStart}</h5>
                        <p>Time</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <MdTimelapse className="text-secondary" size={20} />
                      <div className="">
                        <h5 className=" font-s-medium">{item?.serviceId?.serviceduration}</h5>
                        <p>Duration</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <TbUserCircle className="text-secondary" size={20} />
                      <div className="">
                        <h5 className=" font-s-medium">{item?.serviceId?.coachId?.coachName}</h5>
                        <p>Coach</p>
                      </div>
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

export default ServiceHistory;
