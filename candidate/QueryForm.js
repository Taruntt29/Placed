import React, { useEffect, useState } from "react";
import { RiArrowLeftSLine } from "react-icons/ri";
import { BiMessageDetail } from "react-icons/bi";
import { AiOutlineStar } from "react-icons/ai";
import { useSelector } from "react-redux";

import "react-calendar/dist/Calendar.css";
import { askQuestion, candidateCoachList, candidateCoachListService, getMasterServices } from "../../../api/authCandidate";

const QueryForm = () => {
  const [services , setServices] = useState([])
  const [serviceId , setServiceId] = useState("")
  const allService = async () => {
    try {
      const response = await getMasterServices();
      setServices(response.data)
      
    } catch (error) {
      console.log(error);
    }
  }

 
  const [coachNames , setCoachNames] = useState([])
  const getCoachNames = async (id) => {
    try {
      const response = await candidateCoachListService(id)
      setCoachNames(response.data)
      // setTrigger(false)
    } catch (error) {
      console.log(error);
    }
  }
  const { userDetails } = useSelector((state) => state.flightReducer);
  console.log(userDetails);

  const [coachId , setCoachId] = useState("")
  const [question , setQuestion] = useState("")
  const questionAsk = async () => {
    try {
      const response = await askQuestion({
        candidateId : userDetails._id,
        coachId : coachId,
        serviceId : serviceId,
        questionsName : question
      })
    } catch (error) {
      console.log(error);
    }
  }
  const handleSubmit = () => {
    questionAsk()
  }
  useEffect(() => {
    allService()
    getCoachNames()
  },[])
  return (
    <div className="bg-inputcolor">
      <div className="container mx-auto pt-10 pb-10 lg:px-10 ">
        <div className="flex space-x-2 items-center pb-3 lg:px-0 px-5">
          {" "}
          <RiArrowLeftSLine className="text-secondary w-5 h-5 " />{" "}
          <p className="text-secondary font-s-medium text-base"> Query </p>{" "}
        </div>
        <div className=" rounded-md p-5">
          <div className="bg-white rounded-md ">
            <div className="flex items-center space-x-3 lg:px-7 px-5 py-4 ">
              <BiMessageDetail className="text-secondary" size={30} />
              <div className="text-2xl font-s-medium">Request For Query</div>
            </div>
            <hr className="w-full h-[0.10rem] bg-inputcolor" />
            <div className="p-3">
              <div className="bg-white rounded-[15px]">
                <div className=" px-5 ">
                  <div className="w-full py-3">
                    <div className="flex justify-start flex-col space-y-1 w-full">
                      <div className="font-semibold text-[15px]">
                        Service Name
                      </div>
                      <select
                        name="cars"
                        id="cars"
                        onChange={(e) => {getCoachNames(e.target.value) ; setServiceId(e.target.value) ; console.log(e.target.value);}}
                        className="py-1.5 bg-inputcolor rounded-md px-2"
                      >
                        <option>select a service</option>
                      {services && services.map((item,index) => {
                        return (
                          <option value={item._id}>{item.serviceName}</option>

                        )
                        })}
                      
                       
                      </select>
                    </div>
                  </div>
                  <div className="w-full py-3">
                    <div className="flex justify-start flex-col space-y-1 w-full">
                      <div className="font-semibold text-[15px]">
                        Coach Name
                      </div>
                      <select
                        name="cars"
                        id="cars"
                        onChange={(e) => setCoachId(e.target.value)}
                        className="py-1.5 bg-inputcolor rounded-md px-2"
                      >
                        <option>select a coach</option>
                        {coachNames && coachNames.map((item,index) => {
                          return (

                            <option value={item?.coachId?._id}>{item?.coachId?.coachName}</option>
                          )
                        })}
                       
                      </select>
                    </div>
                  </div>

                  <div className="w-full py-3">
                    <div className="flex justify-start flex-col space-y-1 w-full">
                      <div className="font-semibold text-[15px]">
                        Query Description
                      </div>
                      <textarea
                        type="text"
                        name="email"
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        placeholder="Write Something Here"
                        className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className=" flex space-y-3 py-2 px-6">
                <div className="">
                  <button onClick={handleSubmit} className="bg-secondary text-white font-s-medium px-8 py-3 rounded-[7px] text-sm">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QueryForm;
