import React, { useEffect, useState } from "react";
import { IoIosMail } from "react-icons/io";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import { Editor } from "react-draft-wysiwyg";
import { BsTrashFill, BsArrow90DegLeft } from "react-icons/bs";
import { Menu, Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { RiInboxUnarchiveFill } from "react-icons/ri";
import { Link, useParams } from "react-router-dom";
import { HiOutlineMail } from "react-icons/hi";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { getE, postComposeCandidateEmailAPI } from "../../../api/authCandidate";

const DetailInboxCandidate = () => {
  const [editorState, setEditorState] = useState();
  const [showEditor, setShowEditor] = useState(false);

  const [data , setData] = useState([])

  const email = useParams()
  const emailId = email.id
  const getThatE = async () => {
    try {
      const response = await getE(emailId);
      setData(response.data)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getThatE()
  }, [])

  const   [bodyS , setBodyS] = useState("")

  const reply = async () => {
    try {
      const res = await postComposeCandidateEmailAPI({
        subject : data[0].subject,
        from : data[0].To,
        To : data[0].from,
        entryfor : data[0].entryfrom,
        entryfrom : data[0].entryfor,
        body : bodyS
      })
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="bg-inputcolor pb-10">
        <div className=" pt-12 LG:px-10 px-5 pb-5 container">
          <Link to="/candidate/email-inbox">
            <h3 className="font-bold text-lg flex pt-1 text-secondary">
              <BiChevronLeft className="" size={32} />
              Email
            </h3>
          </Link>
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
                      className="    bg-transparent  text-black"
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
                      <Link to="/candidate/compose-email">
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
                      <Link to="/candidate/email-sent">
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
                      <Link to="/candidate/trash-email">
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
                <p className="font-s-medium">
                  {data && data?.[0]?.subject}
                </p>
                <div className="bg-[#D3D4D4] lg:w-[10%] w-[20%] text-center lg:px-4 py-0.5 text-sm font-s-medium rounded-md">
                  Inbox
                </div>
              </div>
              <div className="flex space-x-2 pt-5">
                <div>
                  <img alt="" className="h-[80px] w-[80px]" src={data && data?.[0]?.fromdata?.[0]?.image} />
                </div>
                <div className="flex flex-col items-start justify-center">
                  <p className=" font-s-medium text-sm">
                    {data && (data[0]?.entryfrom?.toLowerCase() === "employer" 
                    ? data[0].fromdata[0].companyName
                    : data[0]?.entryfrom?.toLowerCase === "coach"
                    ? data[0].fromdata[0].coachName
                    : null
                    )} 
                    <span className="text-secondary "> {data && data[0]?.updatedAt?.slice(0,10)}</span>
                  </p>
                  <p className="text-sm font-s-medium text-gray-400">
                    to {data && data[0]?.toData[0]?.candidateName}
                  </p>
                </div>
              </div>

              <div className="pt-5 text-sm text-justify">
               {data && data[0]?.body}
              </div>
              
              <div className="flex justify-between">
                {/* <div>
                  <p className="text-sm pt-3">Thanks & Regards </p>
                  <p className="text-sm pt-2"> Wanda Montgomery</p>
                </div> */}
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
                    value={bodyS}
                    onChange={(e) => setBodyS(e.blocks[0].text)}
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
                    onClick={reply}
                    // onClick={closeReplyModal}
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
        </div>
      </div>
    </>
  );
};

export default DetailInboxCandidate;
