import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { RiArrowLeftSLine } from "react-icons/ri";
import JoditEditor from "jodit-react";
import { useRef } from "react";
import { getQuestionById, responseByCoach } from "../../../api/coachFunctions";
import { toast } from "react-toastify";
import { useEffect } from "react";
const QuestionResponse = () => {
  const { state } = useLocation();
  console.log("state", state);
  const services = [
    {
      id: 1,
      date: "31 October 2022",
      status: "Completed",
      serviceName: "Adobe Photoshop Training for Beginner",
      byname: " Ronald Richards",
      img: "/assets/images/chat-img3.png",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
    },
    {
      id: 2,
      date: "31 October 2022",
      status: "Pending",
      serviceName: "Adobe Photoshop Training for Beginner",
      byname: " Ronald Richards",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
      img: "/assets/images/chat-img3.png",
    },
    {
      id: 3,
      date: "31 October 2022",
      status: "Completed",
      serviceName: "Adobe Photoshop Training for Beginner",
      byname: " Ronald Richards",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
      img: "/assets/images/chat-img3.png",
    },
    {
      id: 4,
      date: "31 October 2022",
      status: "Completed",
      serviceName: "Adobe Photoshop Training for Beginner",
      byname: " Ronald Richards",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
      img: "/assets/images/chat-img3.png",
    },
  ];
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [stateData, setStateData] = useState({
    response: "",
  });
  const navigate = useNavigate();
  const [responseData, setResponseData] = useState([]);
  const [questionData, setQuestionData] = useState([]);
  const getAllQuestionData = async () => {
    const { data, message, status } = await getQuestionById(state.questionId);
    if (status) {
      setQuestionData(data);
      console.log("Question Data", data[0]);
    } else {
      toast(message);
    }
  };

  console.log("questionDataquestionData", questionData?.questionsfromCandidate);
  const postResponseByCoach = async () => {
    const { data, message, status } = await responseByCoach({
      id: state.questionId,
      // questionsfromCandidate: questionData?.questionsfromCandidate,
      // candidateId: questionData?.candidateId,
      // question: questionData?.question,
      // questionsName: questionData?.questionsName,
      // serviceId: questionData?.serviceId,
      response: stateData.response,
      // date: questionData?.date,
      // candidateName: questionData?.candidateName,
      // coachId: questionData?.coachId,
      // status: questionData?.status,
    });

    // serviceId
    if (status) {
      setResponseData(data);
      console.log("postResponseByCoach", data);
      toast(message);
      navigate("/coach/candidate-question");
    } else {
      toast(message);
    }
  };
  console.log("stateData", stateData);
  useEffect(() => {
    getAllQuestionData();
  }, []);
  console.log("questionData", questionData);
  return (
    <div className="bg-inputcolor">
      <div className="container mx-auto py-10  ">
        {/* <Link to="/coach/add-services"> */}
        <div className="flex space-x-2 items-center pb-6 lg:px-0 px-5 ">
          {" "}
          <RiArrowLeftSLine className="text-secondary w-5 h-5 " />{" "}
          <p className="text-secondary font-s-medium text-base"> Service</p>{" "}
        </div>
        {/* </Link> */}
        <div className="flex flex-col space-y-10 px-4 md:px-0">
          <div className="bg-white rounded-md py-3 ">
            <div className="lg:flex justify-between items-center pb-4">
              <div className="lg:flex flex-col">
                <div className="flex space-x-2  px-5 ">
                  <img alt="icon" src="/assets/images/response.png" />
                  <h3 className="font-bold  text-lg flex pt-1">
                    Response to Candidate
                  </h3>
                </div>

                <div className="px-16">
                  Lorem Ipsum is simply dummy text of the printing and{" "}
                </div>
              </div>
            </div>
            <hr className="w-full h-[0.10rem] bg-inputcolor" />
            {/* {questionData?.map((item, index) => {
              return ( */}
            <div className=" px-5">
              <div className="bg-inputcolor my-5 py-2 rounded-lg">
                <div className="lg:flex justify-between">
                  {" "}
                  <div className="flex items-center  px-5 space-x-4 ">
                    <img
                      alt="images"
                      src="/assets/images/chat-img3.png"
                      className="rounded-full"
                    />
                    <p className="text-secondary font-s-medium">
                      {questionData.candidateName}
                    </p>
                  </div>
                  <div className="flex space-x-3 px-6 items-center lg:py-0 py-3">
                    <p className="font-s-medium text-secondary text-sm">
                      {questionData.date}
                    </p>
                  </div>
                </div>
                <Link to="#">
                  <div className="px-5 md:flex md:space-x-20">
                    <p className="font-s-medium text-lg">
                      {questionData.questionsName}
                    </p>
                  </div>
                </Link>

                {/* <p className="px-5 lg:w-[90%] w-full pt-2  text-justify">
                  {questionData.questionsfromCandidate}
                </p> */}

                <div className=" px-5 lg:py-5 py-3">
                  <JoditEditor
                    ref={editor}
                    // value={content}
                    tabIndex={1} // tabIndex of textarea
                    onBlur={(newContent) => setContent(newContent)}
                    // onChange={(newContent) => {}}
                    value={stateData.response}
                    onChange={(e) =>
                      setStateData({ ...stateData, response: e })
                    }
                  />
                </div>
                <div className="flex w-full justify-end px-5 pb-5">
                  {" "}
                  {/* <Link to="/coach/candidate-question"> */}
                  <button
                    type="button"
                    onClick={postResponseByCoach}
                    className="text-white font-s-medium px-12 py-3 bg-secondary text-sm rounded-full"
                  >
                    Response
                  </button>
                  {/* </Link> */}
                </div>
              </div>
            </div>
            {/* );
            })} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionResponse;
