import React, { useEffect, useState } from "react";
import { IoIosMail } from "react-icons/io";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import { RiDeleteBinLine, RiInboxUnarchiveFill } from "react-icons/ri";
import { Dialog, Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { BsTrashFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { useSelector } from "react-redux/es/exports";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { gettrashCandidateEmailAPI } from "../../../api/authCandidate";
import { toast } from "react-toastify";
import { deletetrashEmail } from "../../../api/authService";

const TrashEmailCandidate = () => {
  let [isReplyOpen, setIsReplyOpen] = useState(false);

  let [isDeleteOpen, setIsDeleteOpen] = useState(false);

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
    setMail(id);
  }

  const { userDetails } = useSelector((state) => state.flightReducer);
  const To = userDetails.email;

  const [trashData, setTrashData] = useState([]);
  const getTrash = async () => {
    try {
      const { data, status, message } = await gettrashCandidateEmailAPI(To, To);
      if (status) {
        setTrashData(data);
        console.log("hsdcbhsD", data);
      } else {
        toast(message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTrash();
  }, []);

  const [currentId, setCurrentId] = useState();
  const [mail, setMail] = useState();
  const delById = async () => {
    try {
      const response = await deletetrashEmail(currentId);
      console.log(response);
      if (response.status) {
        toast(response.message);
        closeDeleteModal(false);
        getTrash();
      } else {
        toast(response.message);
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="bg-inputcolor  lg:px-0 px-5 pb-5">
        <div className=" pt-12 lg:px-10  ">
          <Link to="/candidate/email-inbox">
            {" "}
            <h3 className="font-bold  text-lg flex pt-1 text-secondary">
              <BiChevronLeft className="" size={32} />
              Email
            </h3>
          </Link>
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
            <div className="text-sm pt-5 lg:whitespace-nowrap text-center col-span-6">
              Messages that have been in the Bin for more than 30 days will be
              deleted automatically.
            </div>
            {/* <div className="col-span-4 whitespace-nowrap py-3 text-end">
              <button className="border-2 font-s-medium text-end border-secondary py-1 rounded px-2 text-secondary">
                Empty Bin now
              </button>
            </div> */}
          </div>

          {trashData.map((item) => (
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
                      onClick={() => {
                        setCurrentId(item._id);
                        openDeleteModal();
                      }}
                    />
                  </div>
                  <p className="text-end text-sm lg:pt-10 pt-2 text-secondary font-s-medium whitespace-nowrap">
                    {item.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

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

export default TrashEmailCandidate;
