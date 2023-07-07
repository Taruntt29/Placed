import React, { useState } from "react";
import { IoIosMail } from "react-icons/io";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import { BsTrashFill } from "react-icons/bs";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { RiInboxUnarchiveFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineMail } from "react-icons/hi";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import {
  replyOnAssistantEmail,
  replyOnEmail,
} from "../../../api/coachFunctions";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useRef } from "react";
import JoditEditor from "jodit-react";
import { useSelector } from "react-redux";

const SupportComposeCandidate = () => {
  const editor = useRef(null);
  const navigate = useNavigate();
  const [content, setContent] = useState("");
  const { userDetails } = useSelector((state) => state.flightReducer);
  console.log("userDetails", userDetails);
  const userMail = userDetails.email;
  const [stateData, setStateData] = useState({
    body: "",
    subject: "",
    from: userMail,
    To: "surbhi@bizzeonline.com",
    body: "",
    entryfrom: "Candidate",
    entryfor: "Admin",
  });
  const sendMail = async () => {
    console.log("state Data", stateData);

    try {
      const response = await replyOnAssistantEmail({
        body: stateData.body,
        subject: stateData.subject,
        from: stateData.from,
        To: stateData.To,
        entryfrom: stateData.entryfrom,
        entryfor: stateData.entryfor,
      });
      if (response.status) {
        toast(response.message);
        navigate("/candidate/support-inbox-mail");
      } else {
        toast(response.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="bg-inputcolor pb-10">
      <div className=" pt-12 LG:px-10 px-5 pb-5 container">
        <Link to="/candidate/support-inbox-mail">
          <h3 className="font-bold text-lg flex pt-1 text-secondary">
            <BiChevronLeft className="" size={32} />
            Support
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
                  <p className=" mr-1 text-black text-xl font-s-bold md:flex items-center justify-center hidden ">
                    Compose Mail
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
                <Menu.Items className="absolute pt-2  mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="px-3  ">
                    <Link to="/candidate/support-inbox-mail">
                      <Menu.Item>
                        {({ active }) => (
                          <div
                            className={`${
                              active
                                ? "bg-secondary text-white"
                                : "text-gray-900"
                            } group flex w-full border-b font-s-medium  rounded-md py-2 mb-2 px-5 `}
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
                              Inbox
                            </button>
                          </div>
                        )}
                      </Menu.Item>
                    </Link>
                    <Link to="/candidate/support-sent-mail">
                      <Menu.Item>
                        {({ active }) => (
                          <div
                            className={`${
                              active
                                ? "bg-secondary text-white"
                                : "text-gray-900"
                            } group flex w-full font-s-medium  rounded-md py-2 mb-2 px-5 `}
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
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
            <h6>
              Lorem Ipsum is simply dummy text of the printing and typesetting
            </h6>
          </div>
        </div>

        <div className=" lg:px-8 px-5 py-8">
          <div className="bg-secondary p-3 rounded-t-md">
            <h3 className="text-white">New Messages</h3>
          </div>

          <div className="shadow-email rounded-b-md ">
            <div className=" px-3">
              <div className="flex items-start space-x-4 px-5 py-3 border-gray-200 border-b-2">
                <label className="text-gray-500 text-left">To</label>
                <input
                  className="w-full"
                  name="To"
                  disabled
                  value={stateData.To}
                  onChange={(e) =>
                    setStateData({ ...stateData, To: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="px-5">
              <div className="flex  space-x-4s p-3  border-gray-200 border-b-2">
                <label className="text-gray-500 text-left">Subject</label>
                <input
                  className="w-full"
                  name="subject"
                  value={stateData.subject}
                  onChange={(e) =>
                    setStateData({ ...stateData, subject: e.target.value })
                  }
                />
              </div>
            </div>
            <div className=" p-3 mx-4 border-b-2 border-gray-200 h-96">
              {/* <Editor
                placeholder="Write Email"
                editorState={editorState}
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
                onEditorStateChange={setEditorState}
                className="w-full outline-none h-96 resize-none overflow-hidden "
                toolbar={{
                  options: ["inline", "textAlign", "link", "image"],
                }}
              /> */}
              <JoditEditor
                ref={editor}
                // value={content}
                tabIndex={1} // tabIndex of textarea
                onBlur={(newContent) => setContent(newContent)}
                // onChange={(newContent) => {}}
                value={stateData.body}
                onChange={(e) => setStateData({ ...stateData, body: e })}
              />
            </div>

            <div className="px-4 py-4">
              <button
                className="px-16 bg-secondary py-2 text-white font-s-medium rounded text-lg"
                onClick={sendMail}
              >
                Sent
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportComposeCandidate;
