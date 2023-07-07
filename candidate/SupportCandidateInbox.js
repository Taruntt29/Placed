import React, { useState } from "react";
import { IoIosMail } from "react-icons/io";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import { BsTrashFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { RiDeleteBinLine, RiInboxUnarchiveFill } from "react-icons/ri";
import { Menu, Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import {
  getAllInboxAssistantEmails,
  getAllInboxEmails,
  moveToTrashById,
} from "../../../api/coachFunctions";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useEffect } from "react";

const SupportCandidateInbox = () => {
  const [editorState, setEditorState] = useState();
  let [isReplyOpen, setIsReplyOpen] = useState(false);

  let [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const navigate = useNavigate();
  function closeReplyModal() {
    setIsReplyOpen(false);
  }

  function openReplyModal() {
    setIsReplyOpen(true);
  }

  // delete modal

  function closeDeleteModal() {
    setIsDeleteOpen(false);
  }

  function openDeleteModal(id) {
    setIsDeleteOpen(true);
    setEmailId(id);
  }

  const { userDetails } = useSelector((state) => state.flightReducer);
  console.log("userDetails", userDetails);
  const toMail = userDetails.email;
  const [mailData, setMailData] = useState([]);
  const getAllInboxMails = async () => {
    const { data, message, status } = await getAllInboxAssistantEmails(toMail);
    if (status) {
      setMailData(data);
      console.log("Mail Data", data);
    } else {
      toast(message);
    }
  };
  useEffect(() => {
    getAllInboxMails();
  }, []);
  const [emailId, setEmailId] = useState();
  const moveToTrashFunc = async () => {
    try {
      const response = await moveToTrashById(emailId);
      console.log(response);
      if (response.status) {
        toast(response.message);
        setIsDeleteOpen(false);
        getAllInboxMails();
      } else {
        toast(response.message);
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  console.log("emailId", emailId);
  return (
    <>
      <div className="bg-inputcolor  lg:px-0 px-5 pb-5">
        <Link to="/candidate/support-inbox-mail">
          <div className=" pt-12 lg:px-10  ">
            <h3 className="font-bold  text-lg flex pt-1 text-secondary">
              <BiChevronLeft className="" size={32} />
              Support
            </h3>
          </div>
        </Link>
        <div className="container mx-auto pt-3  shadow-email mb-12  mt-5 rounded">
          <div className="flex space-x-4  px-5 pb-3">
            <IoIosMail size={40} fill="#2544EE" />
            <div className="">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="inline-flex item-center justify-center w-full my-auto rounded-md bg-transparent  pr-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                    <p className=" mr-1 text-black text-xl font-s-bold items-center justify-center  ">
                      Assistant Inbox
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
                      <Link to="/candidate/support-compose-mail">
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
                                Compose Mail
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

          {mailData &&
            mailData.map((item) => (
              <div className="lg:grid grid-cols-12  border-gray-200 border-t-2 p-4 gap-2">
                <div className="col-span-1">
                  <div className="flex flex-col items-center justify-center">
                    <img alt="images" src="/assets/images/user-inbox.png" />
                    <div className="text-xs text-center font-semibold">
                      {item.fromdata.candidateName}
                      {/* {userDetails.fullName} */}

                      {/* <p>{item.code_no}</p> */}
                    </div>
                  </div>
                </div>

                <div className="col-span-9 flex justify-between">
                  <div>
                    <p className="font-s-medium">{item.subject}</p>
                    <p className="text-sm font-s-normal lg:text-left text-justify">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: item.body,
                        }}
                      />
                    </p>

                    <div
                      onClick={() => {
                        navigate("/candidate/support-reply-mail", {
                          state: { mailId: item._id },
                        });
                      }}
                    >
                      <button
                        type="button"
                        className="rounded-md   py-2 text-sm font-s-medium text-secondary "
                      >
                        View & Reply
                      </button>
                    </div>
                  </div>
                </div>

                <div className="col-span-2 ">
                  <div className=" ">
                    <div className="flex lg:pt-0 space-x-5 items-end justify-end">
                      {/* <RiDeleteBinLine
                        size={20}
                        className="bg-primary cursor-pointer  "
                        onClick={() => {
                          openDeleteModal(item._id);
                        }}
                      /> */}
                      <IoIosMail size={20} />
                    </div>
                    <p className="text-end text-sm lg:pt-10 pt-2 text-secondary font-s-medium whitespace-nowrap">
                      {item.updatedAt.substring(0, 10)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* modal */}

      <Transition appear show={isReplyOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeReplyModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/40 bg-opacity-25 " />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex h-screen items-center justify-center p-4 text-center ">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    <div className="px-4 py-1 text-right">
                      <button
                        type="button"
                        onClick={closeReplyModal}
                        className="   text-black font-s-medium rounded text-2xl text-right"
                      >
                        X
                      </button>
                    </div>
                  </Dialog.Title>
                  <div className=" rounded-md ">
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

                    <div className="px-16 py-4 flex items-center justify-center">
                      <button
                        type="button"
                        onClick={closeReplyModal}
                        className="px-20 bg-secondary py-2 text-white font-s-medium rounded text-lg"
                      >
                        Submit
                      </button>
                    </div>
                  </div>

                  {/* <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div> */}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      {/* delete modal */}
      {/* modal */}
      <Transition appear show={isDeleteOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeDeleteModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className=" flex flex-col  p-5 items-center justify-center max-w-md transform overflow-hidden rounded-2xl  bg-white text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-s-medium leading-6 px-3 pb-4 text-gray-900"
                  >
                    Are you sure you want to delete ?
                  </Dialog.Title>
                  <div className="mt-4 flex gap-20 bg-secondary p-4 rounded">
                    <button
                      type="button"
                      className="rounded font-s-medium outline-none border border-transparent bg-white px-8  py-1.5 text-sm font-medium text-secondary"
                      onClick={closeDeleteModal}
                    >
                      No
                    </button>

                    <button
                      type="button"
                      className=" rounded font-s-medium border border-white bg-secondary px-8  py-1.5 text-sm font-medium text-[#fff] "
                      // onClick={closeDeleteModal}
                      onClick={moveToTrashFunc}
                    >
                      Yes
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default SupportCandidateInbox;
