import React, { useEffect, useState } from "react";
import { BsFillBellFill } from "react-icons/bs";
import { BiChevronLeft } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import {
  deleteCandidateNotificationAPI,
  getCandidateNotificationAPI,
} from "../../../api/authCandidate";
import { toast } from "react-toastify";

const CandidateNotification = () => {
  const { userDetails } = useSelector((state) => state.flightReducer);
  const [notificationId, setNotificationId] = useState("");

  let [isDeleteOpen, setIsDeleteOpen] = useState(false);

  // delete modal

  function closeDeleteModal() {
    setIsDeleteOpen(false);
  }

  function openDeleteModal() {
    setIsDeleteOpen(true);
  }

  //get notification API
  const [notificationData, setNotificationData] = useState([]);
  const entryform = userDetails._id;

  const getnotification = async () => {
    try {
      const { data, status, message } = await getCandidateNotificationAPI(
        entryform
      );
      if (status) {
        setNotificationData(data);
      } else {
        toast(message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getnotification();
  }, []);

  // delete notificationAPI

  const deleteNotification = async () => {
    try {
      const { data, status, message } = await deleteCandidateNotificationAPI(
        notificationId
      );
      if (status) {
        getnotification();
        setIsDeleteOpen(false);
      } else {
        toast(message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="bg-inputcolor pb-5 lg:px-0 px-5">
        <div className="">
          <div className=" pt-12 lg:px-10 pb-2 ">
            <h3 className="font-bold  text-lg flex pt-1 text-secondary">
              <BiChevronLeft className="" size={32} />
              Notification
            </h3>
          </div>
          <div className="container mx-auto pt-5 pb-5 bg-white mt-4 mb-12 rounded">
            <div className="flex space-x-2  px-5 pb-5 border-b-2 border-gray-200 ">
              <BsFillBellFill size={32} fill="#2544EE" className="mt-2" />
              <div className="descri">
                <h3 className="font-s-medium  text-lg flex pt-1">
                  View All Notification
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  non quam commodo, dictum justo a, varius nisl.
                </p>
              </div>
            </div>

            {notificationData.map((item) => (
              <div className="bg-inputcolor m-6  rounded-md">
                <div className="md:grid grid-cols-12   lg:gap-16 p-4 ">
                  <div className="col-span-11  px-5">
                    <p className="lg:text-left text-justify tracking-tight">
                      {item.notificationtitle}
                    </p>
                  </div>

                  <div className="col-span-1">
                    <div className="p-2 bg-secondary my-3 cursor-pointer flex justify-center items-center rounded">
                      <RiDeleteBin6Line
                        className="text-white text-center "
                        size={18}
                        // onClick={openDeleteModal}
                        onClick={() => {
                          setNotificationId(item._id);
                          openDeleteModal();
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
                      // onClick={closeDeleteModal}
                      onClick={deleteNotification}
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

export default CandidateNotification;
