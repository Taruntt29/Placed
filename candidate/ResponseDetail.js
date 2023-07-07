import React, { useEffect , useState } from "react";
import { Link } from "react-router-dom";

import { RiArrowLeftSLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { getCoachResponse } from "../../../api/authCandidate";
// import { setEnvironmentData } from "worker_threads";

const ResponseDetail = () => {
  const services = [
    {
      id: 1,
      button: "Buy Now",
      serviceName: "Adobe Photoshop Training for Beginner",
      byname: "By Ronald Richards",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
      img: "/assets/images/chat-img3.png",
      name: "Ronald Richards (560798)",
      date: "31 October 2022",
    },
    {
      id: 2,
      button: "Buy Now",
      serviceName: "Adobe Photoshop Training for Beginner",
      byname: "By Ronald Richards",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
      img: "/assets/images/chat-img3.png",
      name: "Ronald Richards (560798)",
      date: "31 October 2022",
    },
    {
      id: 3,
      button: "Buy Now",
      serviceName: "Adobe Photoshop Training for Beginner",
      byname: "By Ronald Richards",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
      img: "/assets/images/chat-img3.png",
      name: "Ronald Richards (560798)",
      date: "31 October 2022",
    },
    {
      id: 4,
      button: "Buy Now",
      serviceName: "Adobe Photoshop Training for Beginner",
      byname: "By Ronald Richards",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
      date: "31 October 2022",
      img: "/assets/images/chat-img3.png",
      name: "Ronald Richards (560798)",
    },
  ];

  const { userDetails } = useSelector((state) => state.flightReducer);
  console.log(userDetails)

  const [data, setData] = useState([])

  const getResponses = async () => {
    try {
      const response = await getCoachResponse(userDetails._id)
      setData(response.data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getResponses()
  },[])

  return (
    <div className="bg-inputcolor">
      <div className="container mx-auto py-10  ">
        <Link to="/candidate/recommended-coaches">
          <div className="flex space-x-2 items-center pb-6 lg:px-0 px-5 ">
            {" "}
            <RiArrowLeftSLine className="text-secondary w-5 h-5 " />{" "}
            <p className="text-secondary font-s-medium text-base"> Responses</p>{" "}
          </div>
        </Link>
        <div className="flex flex-col space-y-10 px-4 md:px-0">
          <div className="bg-white rounded-md py-3 ">
            <div className="lg:flex justify-between items-center py-2">
              <div className="flex space-x-4  px-5 pb-5">
                <img alt="icon" src="/assets/images/response.png" />
                <h3 className="font-bold  text-lg flex pt-1">
                  Responses to Questions
                </h3>
              </div>
              <div className="px-4 py-2">
                {" "}
                <select className="bg-primary rounded-md px-5 py-2">
                  <option value="1">Sort by Date</option>
                  <option value="dummy">dummy</option>
                  <option value="dummy">dummy</option>
                </select>
              </div>
            </div>
            <hr className="w-full h-[0.10rem] bg-inputcolor" />

            <div className=" px-5">
              {data.map((item) => (
                <div className="bg-inputcolor my-5 py-2 rounded-lg">
                  <div className="text-end px-5 lg:py-0 py-3">{item?.updatedAt?.slice(0,10)}</div>

                  <div className="px-5 md:flex md:space-x-20">
                    <p className="font-s-medium text-lg">{item?.serviceId?.serviceName} </p>
                  </div>

                  <p className="px-5 lg:w-[90%] w-full pt-2  text-justify">
                  <span className="font-semibold"> Service Description : </span>  {item?.serviceId?.description}
                  </p>
                  <p className="px-5 lg:w-[90%] w-full pt-2  text-justify">
                  <span className="font-semibold">  Question : </span> {item?.questionsName}
                  </p>
                  <p className="px-5 lg:w-[90%] w-full pt-2  text-justify">
                  <span className="font-semibold">  Response from Coach{" : "}</span> {item?.response}
                  </p>

                  <div className="flex items-center py-3 px-5 space-x-4">
                    <img alt="images" src={item?.coachId?.images?.[0]} className="rounded-full h-[50px] w-[50px]" />
                    <p className="text-secondary font-s-medium text-center">
                      {item?.coachId?.coachName} <span>(</span>{item?.coachId?._id}<span>)</span>
                    </p>
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

export default ResponseDetail;
