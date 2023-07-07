import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Editor } from "react-draft-wysiwyg";
import { BiSearch } from "react-icons/bi";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { RiArrowLeftSLine } from "react-icons/ri";

const ListQuestion = () => {
  const [editorState, setEditorState] = useState();
  const [showEditor, setShowEditor] = useState(false);
  const services = [
    {
      id: 1,
      date: "31 October 2022",
      status: "Completed",
      serviceName: "Adobe Photoshop Training for Beginner",
      byname: " Ronald Richards",
      button: "Response",
      img: "/assets/images/chat-img3.png",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
    },
    {
      id: 2,
      date: "31 October 2022",
      status: "Pending",
      serviceName: "Adobe Photoshop Training for Beginner",
      byname: " Ronald Richards",
      button: "Response",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
      img: "/assets/images/chat-img3.png",
    },
    {
      id: 3,
      date: "31 October 2022",
      status: "Completed",
      serviceName: "Adobe Photoshop Training for Beginner",
      byname: " Ronald Richards",
      button: "Response",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
      img: "/assets/images/chat-img3.png",
    },
    {
      id: 4,
      date: "31 October 2022",
      status: "Completed",
      serviceName: "Adobe Photoshop Training for Beginner",
      byname: " Ronald Richards",
      button: "Response",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
      img: "/assets/images/chat-img3.png",
    },
  ];

  return (
    <div className="bg-inputcolor">
      <div className="container mx-auto py-10  ">
        <Link to="/coach/candidate-question">
          <div className="flex space-x-2 items-center pb-6 lg:px-0 px-5 ">
            {" "}
            <RiArrowLeftSLine className="text-secondary w-5 h-5 " />{" "}
            <p className="text-secondary font-s-medium text-base"> Service</p>{" "}
          </div>
        </Link>
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
                  className="w-full py-2 px-2 rounded-l-full bg-transparent placeholder:font-s-normal"
                />
              </div>
            </div>
            <hr className="w-full h-[0.10rem] bg-inputcolor" />

            <div className=" px-5">
              {services.map((item) => (
                <div className="bg-inputcolor my-5 py-2 rounded-lg">
                  <div className="text-end px-5 lg:py-0 py-3">
                    <button
                      className={`{ text-white px-5 py-2 rounded-md font-s-medium text-sm 
                        ${
                          item.status === "Pending"
                            ? "bg-[#E87E05]"
                            : item.status === "Completed"
                            ? "bg-[#17BB05]"
                            : "text-inputcolor"
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

                  <div className="text-end px-5 lg:py-0 py-3">
                    <button
                      type="button"
                      onClick={() => setShowEditor(!showEditor)}
                      className="text-white font-s-medium px-10 py-1.5 bg-secondary text-sm rounded-full"
                    >
                      {item.button}
                    </button>
                  </div>

                  <div className="pt-5">
                    {showEditor ? (
                      <div className=" rounded-md " id="showmodal ">
                        <div className=" p-3 mx-4 h-72 bg-[#E8E9EB] rounded-md">
                          <Editor
                            placeholder="Write Something Here..."
                            editorState={editorState}
                            toolbarClassName="toolbarClassName"
                            wrapperClassName="wrapperClassName"
                            editorClassName="editorClassName"
                            onEditorStateChange={setEditorState}
                            className="w-full outline-none h-96 resize-none overflow-hidden bg-inputcolor"
                            toolbar={{
                              options: ["inline", "textAlign", "link", "image"],
                            }}
                          />
                        </div>

                        <div className="px-4 py-4 flex items-center space-x-4">
                          <button
                            type="button"
                            // onClick={closeReplyModal}
                            className="px-8 bg-secondary py-1 text-white font-s-medium rounded "
                          >
                            Send
                          </button>
                          <button
                            type="button"
                            // onClick={closeReplyModal}
                            className="px-6 border border-secondary py-1 text-secondary font-s-medium rounded "
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
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

export default ListQuestion;
