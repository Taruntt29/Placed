import React from "react";
import { RiArrowLeftSLine } from "react-icons/ri";
import { FaCalendarAlt } from "react-icons/fa";
import { MdTimelapse, MdAccessTimeFilled } from "react-icons/md";

const AllTrainingHistory = () => {
    const request = [
        {
            id: 1,
            title: "Adobe Photoshop Training for Beginner",
            des: "Topics: Interoperability, Nondestructive Editing, Output, Photoshop Fundamentals, Productivity Enhancements",
            date: "12 Jan, 2023",
            time: "12:00 PM",
            duration: "01 Hour",
            coachname: "Ronald Richards",
            status: "Completed"
        },
        {
            id: 2,
            title: "Adobe Photoshop Training for Beginner",
            des: "Topics: Interoperability, Nondestructive Editing, Output, Photoshop Fundamentals, Productivity Enhancements",
            date: "22 dec, 2023",
            time: "09:00 PM",
            duration: "02 Hour",
            coachname: "Ronald Richards",
            status: "Upcoming"
        },
        {
            id: 3,
            title: "Adobe Photoshop Training for Beginner",
            des: "Topics: Interoperability, Nondestructive Editing, Output, Photoshop Fundamentals, Productivity Enhancements",
            date: "12 Jan, 2023",
            time: "12:00 PM",
            duration: "01 Hour",
            coachname: "Ronald Richards",
            status: "Cancelled",
        },
        {
            id: 4,
            title: "Adobe Photoshop Training for Beginner",
            des: "Topics: Interoperability, Nondestructive Editing, Output, Photoshop Fundamentals, Productivity Enhancements",
            date: "22 dec, 2023",
            time: "09:00 PM",
            duration: "02 Hour",
            coachname: "Ronald Richards",
            status: "Pending"
        },
        {
            id: 5,
            title: "Adobe Photoshop Training for Beginner",
            des: "Topics: Interoperability, Nondestructive Editing, Output, Photoshop Fundamentals, Productivity Enhancements",
            date: "12 Jan, 2023",
            time: "12:00 PM",
            duration: "01 Hour",
            coachname: "Ronald Richards",
            status: "Reschedule"
        },
    ];
    return (
        <div className="bg-inputcolor">
            <div className="container mx-auto pt-10 pb-10 lg:px-10">
                <div className="flex space-x-2 items-center pb-3 lg:px-0 px-5">
                    {" "}
                    <RiArrowLeftSLine className="text-secondary w-5 h-5 " />{" "}
                    <p className="text-secondary font-s-medium text-base">
                        {" "}
                        Training History
                    </p>{" "}
                </div>
                <div className=" rounded-md p-5">
                    <div className="bg-white rounded-md ">
                        <div className="flex items-center space-x-3 lg:px-7 px-5 pb-6 pt-8">
                            <img src="/assets/images/commentLike.png" className="w-8" />
                            <div className="text-2xl font-s-medium">All Request Training</div>
                        </div>
                        <hr className="w-full h-[0.10rem] bg-inputcolor" />
                        <div className="md:p-3">
                            <div className="bg-white rounded-[15px] px-4 py-6 space-y-6">
                                {request.map((obj, e) => (
                                    <div className="bg-inputcolor rounded-lg p-5 space-y-2"
                                        key={e}>

                                        <div className="md:flex items-center  justify-between">
                                            <div

                                            >
                                                <h2 className="font-semibold text-lg">{obj.title}</h2>
                                                <p className="text-sm font-semibold text-gray-600">
                                                    {obj.des}
                                                </p>
                                                <div className="flex md:flex-row flex-col md:space-x-16 space-x-4 md:space-y-0 space-y-4  md:items-center py-4 px-1">
                                                    <div className="flex space-x-4 font-semibold">
                                                        <FaCalendarAlt className="text-blue-700 my-1 text-lg" />
                                                        <div>
                                                            <h2 className="">{obj.date}</h2>
                                                            <p className="text-xs text-gray-500">Date</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex space-x-4 font-semibold">
                                                        <MdAccessTimeFilled className="text-blue-700 my-1 text-xl" />
                                                        <div>
                                                            <h2 className="">{obj.time}</h2>
                                                            <p className="text-xs text-gray-500">Time</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex space-x-4 font-semibold">
                                                        <MdTimelapse className="text-blue-700 my-1 text-xl" />
                                                        <div>
                                                            <h2 className="">{obj.duration}</h2>
                                                            <p className="text-xs text-gray-500">Duration</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex space-x-4 font-semibold">
                                                        <MdTimelapse className="text-blue-700 my-1 text-xl" />
                                                        <div>
                                                            <h2 className="">{obj.coachname}</h2>
                                                            <p className="text-xs text-gray-500">Coach</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className={`{ text-black font-s-medium text-base px-5 lg:px-0 
                                        ${obj.status === "Completed"
                                                        ? "text-[#17BB05]"
                                                        : obj.status === "Upcoming"
                                                            ? "text-[#E87E05]"
                                                            : obj.status === "Cancelled"
                                                                ? "text-[#FF0303]"
                                                                : obj.status === "Pending"
                                                                    ? "text-[#FFCC00]"
                                                                    : "text-[#2544EE]"
                                                    }`}
                                            >
                                                {obj.status}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllTrainingHistory;
