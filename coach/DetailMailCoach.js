import React, { useState } from "react";
import { IoIosMail } from "react-icons/io";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import { Editor } from "react-draft-wysiwyg";
import { BsTrashFill, BsArrow90DegLeft } from "react-icons/bs";
import { Menu, Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { RiInboxUnarchiveFill } from "react-icons/ri";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HiOutlineMail } from "react-icons/hi";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { getMailDetailsById, replyOnEmail } from "../../../api/coachFunctions";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import JoditEditor from "jodit-react";
import { useRef } from "react";
const DetailMailCoach = () => {
  const { state } = useLocation();
  const [editorState, setEditorState] = useState();
  const [showEditor, setShowEditor] = useState(false);
  const [mailData, setMailData] = useState([]);
  const [from, setFrom] = useState();
  const [body, setBody] = useState();
  const [subject, setSubject] = useState();
  const editor = useRef(null);
  const getEmailDetailById = async () => {
    const { data, status, message } = await getMailDetailsById(state.mailId);
    if (status) {
      // console.log("shfusdjfsefhksfjsjfklsejflsrkgjtl", data);
      setMailData(data);
      setFrom(data[0].from);
      setBody(data[0].body);
      setSubject(data[0].subject);
    } else {
      toast(message);
    }
  };
  useEffect(() => {
    getEmailDetailById();
  }, []);
  console.log("mailData", mailData);
  const { userDetails } = useSelector((state) => state.flightReducer);
  console.log("userDetails", userDetails);
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const [stateData, setStateData] = useState({
    description: "",
    // subject: mailData[0]?.subject,
    // from: mailData[0]?.To,
    // To: mailData[0]?.from,
    // body: mailData[0]?.body,
    // entryfrom: "Coach",
    // entryfor: "Candidate",
  });
  const sendReply = async () => {
    console.log("state Data", stateData);

    try {
      const response = await replyOnEmail({
        body: stateData.description,
        subject: subject,
        from: userDetails.email,
        To: from,
        entryfrom: "Coach",
        entryfor: "Candidate",
      });
      if (response.status) {
        toast(response.message);
        navigate("/coach/email-inbox");
      } else {
        toast(response.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
     <div className="bg-inputcolor lg:px-0 px-5">
    <div className="container mx-auto py-20  ">
    <div className="flex items-center mb-4 font-s-medium text-secondary text-lg">
        <Link to="/coach/email-inbox">  <BiChevronLeft className="text-3xl" /> </Link>
        Email
        </div>
        <div className="container mx-auto pt-5  bg-white   rounded">
          <div className="flex space-x-4 lg:px-10 px-5 pb-4 border-gray-200 border-b-2">
            <IoIosMail size={40} fill="#2544EE" />
            <div className="">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="inline-flex item-center justify-center w-full my-auto rounded-md bg-transparent  pr-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                    <p className=" mr-1 text-black text-lg font-s-bold  items-center justify-center  ">
                      Inbox
                    </p>
                    <BiChevronRight
                      className="bg-transparent  text-black"
                      aria-hidden="true"
                      size={28}
                    />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute   mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="px-3 py-2 ">
                      <Link to="/coach/compose-email">
                        <Menu.Item>
                          {({ active }) => (
                            <div
                              className={`${
                                active
                                  ? "bg-secondary text-white"
                                  : "text-gray-900"
                              } group flex w-full border-b font-s-medium  rounded-md py-1 mb-2 px-5 `}
                            >
                              <HiOutlineMail
                                size={24}
                                className="text-secondary group-hover:text-white"
                              />
                              <button
                                className={`${
                                  active
                                    ? "bg-secondary text-white"
                                    : "text-gray-900"
                                } group flex w-full font-s-medium items-center rounded-md px-2  `}
                              >
                                Compose Mail
                              </button>
                            </div>
                          )}
                        </Menu.Item>
                      </Link>
                      <Link to="/coach/email-sent">
                        <Menu.Item>
                          {({ active }) => (
                            <div
                              className={`${
                                active
                                  ? "bg-secondary text-white"
                                  : "text-gray-900"
                              } group flex w-full border-b font-s-medium  rounded-md py-1 mb-2 px-5 `}
                            >
                              <RiInboxUnarchiveFill
                                size={24}
                                className="text-secondary group-hover:text-white"
                              />
                              <button
                                className={`${
                                  active
                                    ? "bg-secondary text-white"
                                    : "text-gray-900"
                                } group flex w-full font-s-medium items-center rounded-md px-2  `}
                              >
                                Sent
                              </button>
                            </div>
                          )}
                        </Menu.Item>
                      </Link>
                      <Link to="/coach/trash-email">
                        <Menu.Item>
                          {({ active }) => (
                            <div
                              className={`${
                                active
                                  ? "bg-secondary text-white"
                                  : "text-gray-900"
                              } group flex w-full  font-s-medium  rounded-md py-1  px-5 `}
                            >
                              <BsTrashFill
                                size={24}
                                className="text-secondary group-hover:text-white"
                              />
                              <button
                                className={`${
                                  active
                                    ? "bg-secondary text-white"
                                    : "text-gray-900"
                                } group flex w-full font-s-medium items-center rounded-md px-2  `}
                              >
                                Trash
                              </button>
                            </div>
                          )}
                        </Menu.Item>
                      </Link>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
          <div className=" lg:px-8 px-5 py-8">
            <div className="">
              <div className="lg:flex space-x-5">
                <p className="font-s-medium">{mailData[0]?.subject}</p>
                <div className="bg-[#D3D4D4] lg:w-[10%] w-[20%] text-center lg:px-4 py-0.5 text-sm font-s-medium rounded-md">
                  Inbox
                </div>
              </div>
              <div className="flex space-x-2 pt-5">
                <div>
                  <img alt="" src="/assets/images/user-inbox.png" />
                </div>
                <div className="flex flex-col items-start justify-center">
                  <p className=" font-s-medium text-sm">
                    {mailData[0]?.from}
                    {/* {console.log("maildata from", mailData[0]?.from)} */}
                    <span className="text-secondary ">
                      {" "}
                      {mailData[0]?.updatedAt?.substring(0, 10)}
                    </span>
                  </p>
                  <p className="text-sm font-s-medium text-gray-400">
                    From Name
                  </p>
                </div>
              </div>

              <p className="pt-5 text-sm text-justify">
                {mailData[0]?.subject}
              </p>
              <p className="pt-5 text-sm text-justify">
                <div
                  dangerouslySetInnerHTML={{
                    __html: mailData[0]?.body,
                  }}
                />
              </p>
              <div className="flex justify-between">
                <button className="bg-red-600 text-white text-sm my-3 px-5 py-3 rounded-md">
                  Report Abuse
                </button>
              </div>
            </div>
            <div className="h-[1px] bg-black w-full my-3"></div>
            <div
              className="border rounded-full flex space-x-3 py-2 px-5 lg:w-[10%] w-[30%] mb-5 cursor-pointer"
              onClick={() => setShowEditor(true)}
            >
              <BsArrow90DegLeft />
              <button
                type="button"
                className="rounded-md  text-sm font-s-medium  "
              >
                Reply
              </button>
            </div>
            {showEditor ? (
              <div className=" rounded-md " id="showmodal">
                <div className=" p-3 mx-4 h-72 bg-inputcolor rounded-b-md">
                  {/* <Editor
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
                  /> */}{" "}
                  <JoditEditor
                    ref={editor}
                    // value={content}
                    tabIndex={1} // tabIndex of textarea
                    onBlur={(newContent) => setContent(newContent)}
                    // onChange={(newContent) => {}}
                    value={stateData.description}
                    onChange={(e) =>
                      setStateData({ ...stateData, description: e })
                    }
                  />
                </div>

                <div className="px-4 py-4 flex items-center">
                  <button
                    type="button"
                    // onClick={closeReplyModal}
                    onClick={sendReply}
                    className="px-20 bg-secondary py-2 text-white font-s-medium rounded text-lg"
                  >
                    Send
                  </button>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>

          {/* <div className=" lg:px-8 px-5 py-8">
            <div className="">
              <div className="lg:flex space-x-5">
                <p className="font-s-medium">
                  Lorem Ipsum is simply dummy text of the printing
                </p>
                <div className="bg-[#D3D4D4] lg:w-[10%] w-[20%] text-center lg:px-4 py-0.5 text-sm font-s-medium rounded-md">
                  Inbox
                </div>
              </div>
              <div className="flex space-x-2 pt-5">
                <div>
                  <img alt="" src="/assets/images/user-inbox.png" />
                </div>
                <div className="flex flex-col items-start justify-center">
                  <p className=" font-s-medium text-sm">
                    Wanda Montgomery (87596000){" "}
                    <span className="text-secondary "> 24 Sept 2022</span>
                  </p>
                  <p className="text-sm font-s-medium text-gray-400">
                    to John Doe
                  </p>
                </div>
              </div>

              <p className="pt-5 text-sm text-justify">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s.
              </p>
              <p className="pt-5 text-sm text-justify">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s.{" "}
              </p>
              <p className="text-sm font-s-medium pt-5 text-justify">
                Lorem Ipsum passages, and more recently with desktop publishing
                software like. Thanks & Regards Wanda Montgomery
              </p>
              <div className="flex justify-between">
                <div>
                  <p className="text-sm pt-3">Thanks & Regards </p>
                  <p className="text-sm pt-2"> Wanda Montgomery</p>
                </div>
                <button className="bg-red-600 text-white text-sm my-3 px-5 rounded-md">
                  Report Abuse
                </button>
              </div>
            </div>
            <div className="h-[1px] bg-black w-full my-3"></div>
            <div className="border rounded-full flex space-x-3 py-2 px-5 lg:w-[10%] w-[30%] mb-5">
              <BsArrow90DegLeft />
              <button
                type="button"
                onClick={() => setShowEditor(true)}
                className="rounded-md    text-sm font-s-medium  "
              >
                Reply
              </button>
            </div>
            {showEditor ? (
              <div className=" rounded-md " id="showmodal">
                <div className=" p-3 mx-4 h-72 bg-inputcolor rounded-b-md">
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

                <div className="px-4 py-4 flex items-center">
                  <button
                    type="button"
                    // onClick={closeReplyModal}
                    className="px-20 bg-secondary py-2 text-white font-s-medium rounded text-lg"
                  >
                    Sent
                  </button>
                </div>
              </div>
            ) : (
              ""
            )}
          </div> */}
        </div>
        </div>
      </div>
    </>
  );
};

export default DetailMailCoach;
