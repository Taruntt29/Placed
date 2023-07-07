import React, { useState } from "react";
import { BsFillBellFill } from "react-icons/bs";
import { BiChevronLeft } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import {
  deleteNotificationById,
  getAllNotificationsByCoachId,
} from "../../../api/coachFunctions";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const NotificationPage = () => {
  let [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const { userDetails } = useSelector((state) => state.flightReducer);
  const coachId = userDetails._id;
  // delete modal
  const [notificationData, setNotificationData] = useState([]);
  const getAllNotifications = async () => {
    const { data, message, status } = await getAllNotificationsByCoachId(
      coachId
    );
    if (status) {
      setNotificationData(data);
    } else {
      toast(message);
    }
  };
  useEffect(() => {
    getAllNotifications();
  }, []);

  function closeDeleteModal() {
    setIsDeleteOpen(false);
  }
  const [notificationId, setNotificationId] = useState();
  const deleteThisNotification = async () => {
    try {
      const response = await deleteNotificationById(notificationId);
      console.log(response);
      if (response.status) {
        toast(response.message);
        setIsDeleteOpen(false);
        getAllNotifications();
      } else {
        toast(response.message);
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  function openDeleteModal() {
    setIsDeleteOpen(true);
  }

  return (
    <>
        <div className="bg-inputcolor lg:px-0 px-5">
    <div className="container mx-auto py-20  ">
    <div className="flex items-center mb-4 font-s-medium text-secondary text-lg">
        <Link to="/coach/my-profile">  <BiChevronLeft className="text-3xl" /> </Link>
        Notification
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

            {notificationData?.map((item, index) => (
              <div className="bg-inputcolor m-6  rounded-md" key={index}>
                <div className="md:grid grid-cols-12   lg:gap-16 p-4 ">
                  <div className="col-span-11  px-5">
                    <p className="lg:text-left text-justify tracking-tight text-secondary font-s-medium">
                      {item.notificationtitle}
                    </p>
                  </div>

                  <div className="col-span-1">
                    <div className="p-2 bg-secondary my-3 flex justify-center items-center rounded cursor-pointer">
                      <RiDeleteBin6Line
                        className="text-white text-center w-40"
                        size={18}
                        // onClick={openDeleteModal()}
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-s-medium leading-6 text-center pb-4 text-gray-900"
                  >
                    Are you sure to delete ?
                  </Dialog.Title>
                  <div className="mt-4 flex align-center justify-center space-x-8">
                    <button
                      type="button"
                      className=" rounded-[8px]  bg-[#D2628C] outline-none px-8 sm:px-16 py-2 text-[20px] font-medium text-white"
                      onClick={deleteThisNotification}
                    >
                      Yes
                    </button>

                    <button
                      type="button"
                      className=" rounded-[8px] bg-[#69b7b1] outline-none px-8 sm:px-16 py-2 text-[20px] font-medium text-[#fff] "
                      onClick={closeDeleteModal}
                    >
                      No
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

export default NotificationPage;
