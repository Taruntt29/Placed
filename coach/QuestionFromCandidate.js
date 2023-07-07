import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiChevronLeft, BiSearch } from "react-icons/bi";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { RiArrowLeftSLine } from "react-icons/ri";
import { useEffect } from "react";
import {
  getAllQuestionList,
  getAllQuestionListWithFilter,
} from "../../../api/coachFunctions";
import { toast } from "react-toastify";
import ReactPaginate from "react-paginate";
import { useSelector } from "react-redux";

const QuestionFromCandidate = () => {
  const { userDetails } = useSelector((state) => state.flightReducer);
  const coachId = userDetails._id;
  const [pageNo, setPageNo] = useState("1");
  const [pageSize, setPageSize] = useState("1");
  const [pageCount, setPageCount] = useState();
  const [questionList, setQuestionList] = useState([]);
  const [searchText, setSearchText] = useState();
  const getAllQuestions = async () => {
    const { data, status, message } = await getAllQuestionList(
      pageSize,
      pageNo,
      coachId
    );
    if (status) {
      setQuestionList(data);
      // console.log("get All Questions From Candidate", data);
      const count = data / pageSize;
      setPageCount(count);
      console.log("count", count);
    } else {
      toast(message);
    }
  };
  const getAllQuestionsWithFilter = async () => {
    const { data, status, message } = await getAllQuestionListWithFilter(
      pageSize,
      pageNo,
      coachId,
      searchText
    );
    if (status) {
      setQuestionList(data);
      // console.log("get All Questions From Candidate", data);
      const count = data / pageSize;
      setPageCount(count);
      console.log("count", count);
    } else {
      toast(message);
    }
  };
  const navigate = useNavigate();

  useEffect(() => {
    getAllQuestions();
  }, []);
  useEffect(() => {
    getAllQuestionsWithFilter();
  }, [searchText]);
  const handlePageClick = async (data) => {
    console.log(data.selected);
    const currentPage = data.selected + 1;
    console.log(currentPage);
    getAllQuestions(currentPage);
  };
  return (
    <div className="bg-inputcolor lg:px-0 px-5">
      <div className="py-20 container mx-auto">
      <div className="flex items-center mb-4 font-s-medium text-secondary text-lg">
          <Link to="/coach/my-profile">  <BiChevronLeft className="text-3xl" /> </Link>
          Service
          </div>
        <div className="flex flex-col space-y-10 px-4 md:px-0">
          <div className="bg-white rounded-md py-3 ">
            <div className="lg:flex justify-between items-center pb-4">
              <div className="lg:flex flex-col">
                <div className="flex space-x-2  px-5 ">
                  <img alt="icon" src="/assets/images/response.png" />
                  <h3 className="font-bold  text-lg flex pt-1">
                    Questions from Candidate
                  </h3>
                </div>

                <div className="px-16">
                  Lorem Ipsum is simply dummy text of the printing and{" "}
                </div>
              </div>

              <div className="bg-primary group dropdown drop-shadow-lg mx-3 flex  text-sm lg:my-0 my-3  font-semibold group relative cursor-pointer items-center justify-center  rounded-full">
                <div className="text-gray-400 rounded-full p-2 m-1">
                  <BiSearch size={18} />
                </div>{" "}
                <input
                  type="search"
                  placeholder="Search "
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  className="w-full py-2 px-2 rounded-l-full bg-transparent placeholder:font-s-normal"
                />
              </div>
            </div>
            <hr className="w-full h-[0.10rem] bg-inputcolor" />

            <div className=" px-5">
              {/* {services.map((item) => (
                <div className="bg-inputcolor my-5 py-2 rounded-lg">
                  <div className="text-end px-5 lg:py-0 py-3">
                    <button
                      className={`{ text-white px-5 py-2 rounded-md font-s-medium text-sm 
                        ${
                          item.status === "Pending"
                            ? "bg-[#E87E05]"
                            : item.status === "Completed"
                            ? "bg-[#17BB05]"
                            : "text-red-500"
                        }`}
                    >
                      {item.status}
                    </button>
                  </div>
                  <div className="lg:flex justify-between">
                    {" "}
                    <div className="flex items-center  px-5 space-x-4 ">
                      <img
                        alt="images"
                        src={item.img}
                        className="rounded-full"
                      />
                      <p className="text-secondary font-s-medium">
                        {item.byname}
                      </p>
                    </div>
                    <div className="flex space-x-3 px-6 items-center lg:py-0 py-3">
                      <p className="font-s-medium text-secondary text-sm">
                        {item.date}
                      </p>
                    </div>
                  </div>
                  <Link to="#">
                    <div className="px-5 md:flex md:space-x-20">
                      <p className="font-s-medium text-lg">
                        {item.serviceName}{" "}
                      </p>
                    </div>
                  </Link>

                  <p className="px-5 lg:w-[90%] w-full pt-2  text-justify">
                    {item.para}
                  </p>

                  <div className=" px-5 lg:py-0 py-3 flex gap-3 justify-end">
                    <Link to="/coach/candidate-question-view">
                      <button
                        type="button"
                        className="text-white font-s-medium px-10 py-2 bg-secondary text-sm rounded-full"
                      >
                        View
                      </button>
                    </Link>
                    <Link to="/coach/candidate-question-response">
                      <button
                        type="button"
                        className="text-white font-s-medium px-10 py-2 bg-secondary text-sm rounded-full"
                      >
                        Response
                      </button>
                    </Link>
                  </div>
                </div>
              ))} */}
              {questionList?.map((item) => (
                <div className="bg-inputcolor my-5 py-2 rounded-lg">
                  <div className="text-end px-5 lg:py-0 py-3">
                    <button
                      className={`{ text-white px-5 py-2 rounded-md font-s-medium text-sm 
                        ${
                          item?.status === "Pending"
                            ? "bg-[#E87E05]"
                            : item.status === "Answered"
                            ? "bg-[#17BB05]"
                            : "bg-red-500"
                        }`}
                    >
                      {item?.status}
                    </button>
                  </div>
                  <div className="lg:flex justify-between">
                    {" "}
                    <div className="flex items-center  px-5 space-x-4 ">
                      <img
                        alt="images"
                        src="/assets/images/chat-img3.png"
                        className="rounded-full"
                      />
                      <p className="text-secondary font-s-medium">
                        {item?.candidateName}
                      </p>
                    </div>
                    <div className="flex space-x-3 px-6 items-center lg:py-0 py-3">
                      <p className="font-s-medium text-secondary text-sm">
                        {item?.date}
                      </p>
                    </div>
                  </div>
                  <Link to="#">
                    <div className="px-5 md:flex md:space-x-20 pt-3">
                      <p className="font-s-medium text-lg">
                        {item?.serviceId?.serviceName}
                      </p>
                    </div>
                  </Link>

                  <p className="px-5 lg:w-[90%] w-full pt-2  text-justify">
                    {item?.questionsName}
                    <br />
                    {/* {item.questionsfromCandidate} */}
                  </p>

                  <div className=" px-5 lg:py-0 py-3 flex gap-3 justify-end">
                    <div
                      onClick={() => {
                        navigate("/coach/candidate-question-view", {
                          state: { questionId: item._id },
                        });
                      }}
                    >
                      <button
                        type="button"
                        className="text-white font-s-medium px-10 py-2 bg-secondary text-sm rounded-full"
                      >
                        View
                      </button>
                    </div>
                    <div
                      onClick={() => {
                        navigate("/coach/candidate-question-response", {
                          state: { questionId: item._id },
                        });
                      }}
                    >
                      <button
                        type="button"
                        className="text-white font-s-medium px-10 py-2 bg-secondary text-sm rounded-full"
                      >
                        Response
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-2 flex justify-end items-center">
              <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                breakLabel={"..."}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                onPageChange={handlePageClick}
                containerClassName="border inline-flex bg-primary items-center  justify-center font-s-medium rounded"
                pageClassName="py-2"
                pageLinkClassName="bg-head  py-2 text-white border  px-4 hover:bg-secondary"
                previousClassName="rounded-l"
                previousLinkClassName="rounded-l bg-head py-2 px-3 border text-white"
                nextClassName=""
                nextLinkClassName="rounded-r bg-head py-2 px-3 border text-white"
                breakClassName=""
                breakLinkClassName="py-2 text-secondary"
                activeClassName="bg-secondary focus:ring-inset-2 focus:ring ring-secondary"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionFromCandidate;
