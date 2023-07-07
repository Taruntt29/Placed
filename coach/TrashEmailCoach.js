import React, { useState } from "react";
import { IoIosMail } from "react-icons/io";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import { RiDeleteBinLine, RiInboxUnarchiveFill } from "react-icons/ri";
import { Dialog, Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { BsTrashFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import {
  delMailById,
  getTrashMails,
  removeTrashMails,
  restoreMail,
} from "../../../api/coachFunctions";

const TrashEmailCoach = () => {
  let [isReplyOpen, setIsReplyOpen] = useState(false);
  let [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const { userDetails } = useSelector((state) => state.flightReducer);
  const toMail = userDetails.email;
  const [mailData, setMailData] = useState([]);
  const [emailId, setEmailId] = useState();
  const getAllTrashMails = async () => {
    const { data, message, status } = await getTrashMails(toMail, toMail);
    if (status) {
      setMailData(data);
      console.log("Mail Data", data);
    } else {
      toast(message);
    }
  };

  const emptyBinNow = async () => {
    const { data, message, status } = await removeTrashMails();
    if (status) {
      // setMailData(data);
      // console.log("Mail Data", data);
      getAllTrashMails();
    } else {
      toast(message);
    }
  };

  const delById = async () => {
    try {
      const response = await delMailById(emailId);
      console.log(response);
      if (response.status) {
        toast(response.message);
        closeDeleteModal(false);
        getAllTrashMails();
      } else {
        toast(response.message);
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const restoreMailFunction = async (id) => {
    const { data, message, status } = await restoreMail(id);
    if (status) {
      console.log("postResponseByRestore", data);
      getAllTrashMails();
      toast(message);
    } else {
      toast(message);
    }
  };

  useEffect(() => {
    getAllTrashMails();
  }, []);

  // delete modal

  function closeDeleteModal() {
    setIsDeleteOpen(false);
  }

  function openDeleteModal(id) {
    setIsDeleteOpen(true);
    setEmailId(id);
  }
  return (
    <>
      <div className="bg-inputcolor lg:px-0 px-5">
    <div className="container mx-auto py-20  ">
    <div className="flex items-center mb-4 font-s-medium text-secondary text-lg">
        <Link to="/coach/email-inbox">  <BiChevronLeft className="text-3xl" /> </Link>
        Email
        </div>
       
        <div className="container mx-auto pt-5 pb-5 shadow-email mb-12 mt-5 rounded">
          <div className="lg:grid grid-cols-12   px-5 ">
            <div className="w-full flex space-x-2 col-span-2 pt-3">
              <IoIosMail size={40} fill="#2544EE" />
              <div className="">
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="inline-flex item-center justify-center w-full my-auto rounded-md bg-transparent  pr-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                      <p className=" mr-1 text-black text-lg font-s-bold md:flex items-center justify-center hidden ">
                        Trash
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
            <div className="text-sm pt-5 lg:whitespace-nowrap text-center col-span-6 text-red-500">
              Messages that have been in the Bin for more than 30 days will be
              deleted automatically.
            </div>
            <div className="col-span-4 whitespace-nowrap py-3 text-end">
              <button
                onClick={emptyBinNow}
                className="border-2 font-s-medium text-end border-secondary py-1 rounded px-2 text-secondary"
              >
                Empty Bin now
              </button>
            </div>
          </div>

          {/* {inboxdata.map((item) => (
            <div className="lg:grid grid-cols-12  border-gray-200 border-t-2 p-4 gap-2">
              <div className="col-span-1">
                <div className="flex flex-col items-center justify-center">
                  <img alt="images" src={item.img} />
                  <div className="text-xs text-center font-semibold">
                    {item.mailername}
                  </div>
                </div>
              </div>

              <div className="col-span-9 flex justify-between">
                <div>
                  <p className="font-s-medium">{item.title}</p>
                  <p className="text-sm font-s-normal lg:text-left text-justify">
                    {item.para}
                  </p>

                  <div>
                    <button
                      type="button"
                      onClick={openReplyModal}
                      className="rounded-md   py-2 text-sm font-s-medium text-secondary "
                    >
                      {item.restore}
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-span-2 ">
                <div className=" ">
                  <div className="flex  items-end justify-end">
                    <RiDeleteBinLine
                      size={20}
                      className="bg-primary cursor-pointer  "
                      onClick={openDeleteModal}
                    />
                  </div>
                  <p className="text-end text-sm lg:pt-10 pt-2 text-secondary font-s-medium whitespace-nowrap">
                    {item.date}
                  </p>
                </div>
              </div>
            </div>
          ))} */}
          {mailData.map((item) => {
            return (
              <div className="lg:grid grid-cols-12  border-gray-200 border-t-2 p-4 gap-2">
                <div className="col-span-1">
                  <div className="flex flex-col items-center justify-center">
                    <img alt="images" src="/assets/images/user-inbox.png" />
                    <div className="text-xs text-center font-semibold">
                      {item.fromdata.candidateName}
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

                    <div>
                      <button
                        type="button"
                        onClick={() => restoreMailFunction(item._id)}
                        className="rounded-md   py-2 text-sm font-s-medium text-secondary "
                      >
                        Restore
                      </button>
                    </div>
                  </div>
                </div>

                <div className="col-span-2 ">
                  <div className=" ">
                    <div className="flex  items-end justify-end">
                      <RiDeleteBinLine
                        size={20}
                        className="bg-primary cursor-pointer  "
                        onClick={() => openDeleteModal(item._id)}
                      />
                    </div>
                    <p className="text-end text-sm lg:pt-10 pt-2 text-secondary font-s-medium whitespace-nowrap">
                      {item.updatedAt.substring(0, 10)}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        </div>
      </div>

      {/* modal */}

      {/* <Transition appear show={isReplyOpen} as={Fragment}>
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
                    <div className="px-4">
                      <div className="flex items-start space-x-4 p-4 bg-gray-200 rounded-t-md">
                        <label className="text-gray-500 text-start">To</label>
                        <input className="w-full bg-inputcolor py-3 px-2" />
                      </div>
                    </div>

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

                  
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition> */}

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
                      onClick={delById}
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

export default TrashEmailCoach;
