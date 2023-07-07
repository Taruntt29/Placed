import React ,{useEffect, useState} from "react";
import { IoCall } from "react-icons/io5";
import { MdMessage, MdVideoCall } from "react-icons/md";
import { RiArrowLeftSLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { askQuestion, getFaQuestions } from "../../../api/authCandidate";

const AskMeQuestion = () => {
  const services = [
    {
      id: 1,
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
    },

    {
      id: 2,
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
    },
    {
      id: 3,
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
    },
    {
      id: 4,
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
    },
    {
      id: 5,
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
    },
  ];

  const { userDetails } = useSelector((state) => state.flightReducer);
  const location = useLocation();
  console.log(location);
  const [faq , setFaq] = useState([])
  const getFAQ = async() => {
    try {
      const response = await getFaQuestions()
      setFaq(response.data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getFAQ()
  } , [])

  console.log(location.state);

  const [q,setQ] = useState("")

  const handleSubmit = async () => {
    try {
      const response = await askQuestion({
        coachId : location.state.coachId,
        serviceId : location.state.serviceId,
        questionsName : q,
        candidateId : userDetails._id
      })
      if(response.code === 200){
        toast("Question Asked Successfully");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="bg-inputcolor">
      <div className="container mx-auto py-10  ">
        <Link to="/candidate/upcoming-services">
          <div className="flex space-x-2 items-center pb-6 lg:px-0 px-5 ">
            {" "}
            <RiArrowLeftSLine className="text-secondary w-5 h-5 " />{" "}
            <p className="text-secondary font-s-medium text-base">
              {" "}
              Active Candidate
            </p>{" "}
          </div>
        </Link>
        <div className="flex flex-col space-y-10 px-4 md:px-0">
          <div className="bg-white rounded-md py-3 ">
            <div className="lg:flex justify-between items-center py-2">
              <div className="flex space-x-4  px-5 pb-5">
                <img alt="icon" src="/assets/images/service-detail.png" />
                <h3 className="font-bold  text-lg flex pt-1">
                  Ask me Question
                </h3>
              </div>
              <div className="flex items-center justify-center px-10 space-x-4">
                <img
                  alt="images"
                  src={location.state.image[0]}
                  className="rounded-full w-[45px] h-[45px]"
                />
                <p className="text-secondary font-s-medium">
                  {location.state.coachName}{", "}{location.state.coachId}
                </p>
              </div>
            </div>

            <hr className="w-full h-[0.10rem] bg-inputcolor" />

            <div className=" px-5 my-3">
              <div className="">
                <div className="pt-2">
                  {faq.map((item, index) => {
                    return (
                      <div onClick={() => setQ(item.questions)} className="bg-inputcolor cursor-pointer py-4 lg:px-10 px-5 rounded-md mt-6">
                        <p> {item.questions}</p>
                      </div>
                    );
                  })}
                </div>

                <div className="border-2 border-secondary px-2 py-4 rounded-md md:mt-20 ">
                  <div>
                    <textarea
                      className="outline-none w-full"
                      rows="4"
                      cols=""
                      name="comment"
                      form=""
                      value={q}
                      onChange={(e) => setQ(e.target.value)}
                      placeholder="Not find any question above, Write your question here....."
                    />
                  </div>

                  <div className="flex justify-end">
                    <button onClick={handleSubmit} className="bg-secondary rounded-md px-7 py-2 text-white">
                      {" "}
                      Send{" "}
                    </button>
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

export default AskMeQuestion;
