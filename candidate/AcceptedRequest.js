import React, { useState } from "react";
import { BsCameraVideoFill } from "react-icons/bs";
import { BiChevronLeft } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

const AcceptedRequest = () => {
  const notifications = [
    {
      id: 1,
      title: "Adobe Photoshop",
      para: "Topics: Interoperability, Nondestructive Editing, Output, Photoshop Fundamentals, Productivity Enhancements",
      name: "Ronald Richards",
      desig: "UI-UX Coach"
    },
    {
      id: 2,
      title: "Adobe Photoshop",
      para: "Topics: Interoperability, Nondestructive Editing, Output, Photoshop Fundamentals, Productivity Enhancements",
      name: "Ronald Richards",
      desig: "UI-UX Coach"
    },
    {
      id: 3,
      title: "Adobe Photoshop",
      para: "Topics: Interoperability, Nondestructive Editing, Output, Photoshop Fundamentals, Productivity Enhancements",
      name: "Ronald Richards",
      desig: "UI-UX Coach"
    },
    {
      id: 4,
      title: "Adobe Photoshop",
      para: "Topics: Interoperability, Nondestructive Editing, Output, Photoshop Fundamentals, Productivity Enhancements",
      name: "Ronald Richards",
      desig: "UI-UX Coach"
    },
    {
      id: 5,
      title: "Adobe Photoshop",
      para: "Topics: Interoperability, Nondestructive Editing, Output, Photoshop Fundamentals, Productivity Enhancements",
      name: "Ronald Richards",
      desig: "UI-UX Coach"
    },
  ];

  let [isDeleteOpen, setIsDeleteOpen] = useState(false);

  // delete modal

  function closeDeleteModal() {
    setIsDeleteOpen(false);
  }

  function openDeleteModal() {
    setIsDeleteOpen(true);
  }

  return (
    <>
      <div className="bg-inputcolor pb-5 lg:px-0 px-5">
        <div className="">
          <div className=" pt-12 lg:px-10 pb-2 ">
            <h3 className="font-bold  text-lg flex pt-1 text-secondary">
              <BiChevronLeft className="" size={32} />
              Accepted Request
            </h3>
          </div>
          <div className="container mx-auto pt-5 pb-5 bg-white mt-4 mb-12 rounded">
            <div className="flex space-x-2  px-5 pb-5 border-b-2 border-gray-200 ">
              <img src="/assets/images/commentLike.png" className="w-10" />
              <div className="descri">
              <h1 className="text-2xl font-s-medium" >Accepted Request</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non quam commodo, dictum justo a, varius nisl.</p>
              </div>
            </div>

            {notifications.map((item) => (
              <div className="bg-inputcolor m-6  rounded-md">
                <div className="grid md:grid-cols-9 gap-3 p-4 items-center justify-center ">
                  <div className=" md:col-span-5 md:px-5">
                    <h4 className="font-bold">{item.title}</h4>
                    <p className="lg:text-left text-justify tracking-tighter pt-4">
                      {item.para}
                    </p>
                  </div>
                  <div className="md:col-span-2 md:pt-0 pt-6">
                    <div className="">
                      <div className="w-fit border-[0.15rem] border-secondary rounded-xl p-2 ">
                        <p className="text-secondary font-base font-semibold"> {item.name}</p>
                        <p className="font-sm text-left"> {item.desig} </p>
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-2 md:pt-0 pt-6 ">
                    <div className="  flex space-x-8 md:justify-end justify-start md:pr-5">
                      <FaPhoneAlt
                        className="text-white text-center bg-secondary p-[0.3rem] rounded-full  "
                        size={35}
                      />
                      < BsCameraVideoFill
                        className="text-secondary"
                        size={35}
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
                      onClick={closeDeleteModal}
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

export default AcceptedRequest;
