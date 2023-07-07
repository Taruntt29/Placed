import React, { Fragment } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { RiArrowLeftSLine, RiDeleteBinLine } from "react-icons/ri";
import { MdVideoCall, MdMessage } from "react-icons/md";
import { ImCross } from "react-icons/im";
import { Menu, Transition, Dialog } from "@headlessui/react";
import { useEffect } from "react";
import {
  deleteServiveById,
  getServiceDataById,
} from "../../../api/coachFunctions";
import { useState } from "react";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const ServiceDetailSection = () => {
  const services = [
    {
      id: 1,
      button: "Buy Now",
      serviceName: "Adobe Photoshop Training for Beginner",
      byname: "By Ronald Richards",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
      price: "$613",
      duration: "1 Hour",
      lang: " English",
      session: 3,
      sessionDuration: "3 Hour",
    },
  ];

  let [isOpenDelete, setIsOpenDelete] = React.useState(false);

  function closeModalDelete() {
    setIsOpenDelete(false);
  }

  function openModalDelete() {
    setIsOpenDelete(true);
  }

  let [isOpenDeleteService, setIsOpenDeleteService] = React.useState(false);

  function closeModalDeleteService() {
    setIsOpenDeleteService(false);
  }

  function openModalDeleteService() {
    setIsOpenDelete(false);
    setIsOpenDeleteService(true);
  }
  const { userDetails } = useSelector((state) => state.flightReducer);
  const navigate = useNavigate();
  const deleteThisService = async () => {
    try {
      const response = await deleteServiveById(params.id);
      console.log(response);
      if (response.status) {
        toast(response.message);
        setIsOpenDelete(false);
        setIsOpenDeleteService(true);
        navigate("/coach/service-status");
      } else {
        toast(response.message);
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const [state, setState] = useState({});
  const params = useParams();
  const getServiceByID = async () => {
    const { data, status, message } = await getServiceDataById(params.id);
    if (status) {
      console.log(data);
      setState(data[0]);
    } else {
      toast(message);
    }
  };
  useEffect(() => {
    getServiceByID();
  }, []);
  return (
    <div className="bg-inputcolor">
      <div className="container mx-auto py-10  ">
        {/* <Link to="/coach/add-services"> */}
        <div className="flex space-x-2 items-center pb-6 lg:px-0 px-5 ">
          {" "}
          <RiArrowLeftSLine className="text-secondary w-5 h-5 " />{" "}
          <p className="text-secondary font-s-medium text-base">
            {" "}
            View Service
          </p>{" "}
        </div>
        {/* </Link> */}
        <div className="flex flex-col space-y-10 px-4 md:px-0">
          <div className="bg-white rounded-md py-3 ">
            <div className="lg:flex justify-between items-center py-2">
              <div className="flex space-x-4  px-5 pb-5">
                <img alt="icon" src="/assets/images/service-detail.png" />
                <h3 className="font-bold  text-lg flex pt-1">
                  Services Detail
                </h3>
              </div>
            </div>

            <hr className="w-full h-[0.10rem] bg-inputcolor" />

            <div className=" px-5 my-3">
              <div className="bg-inputcolor py-4 lg:px-10 px-5 rounded-md">
                <h4 className="text-xl font-s-medium">{state.serviceName}</h4>

                <p className="py-2 text-justify">{state.description}</p>
                {state.trainingName ? (
                  <p>
                    <span className="font-s-medium "> Training Name:</span>
                    {state.trainingName}
                  </p>
                ) : null}
                <p className="py-2 text-justify">{state.additionalDetail}</p>

                <div className="lg:px-5">
                  <div className="bg-inputcolor py-2 rounded-lg">
                    <hr className="w-full h-[0.10rem] bg-inputcolor" />
                    <div className="grid lg:grid-cols-2 gap-2 ">
                      <div className="bg-[#fff] py-2 px-6  flex items-center justify-start  rounded-full my-3 font-s-bold">
                        Entered Price :
                        <span className="text-secondary font-s-bold">
                          {state.currency} {state.enterPrice}
                        </span>
                      </div>
                      <div className="bg-[#fff] py-2 lg:px-6  flex items-center justify-start  px-4 rounded-full my-3 font-s-bold">
                        Suggested Price :{" "}
                        <span className="text-secondary font-s-bold">
                          {state.currency}
                          {state.suggestedPrice}
                        </span>
                      </div>
                      <div className="bg-[#fff] py-2 lg:px-10 px-5 items-center justify-start  rounded-full my-3 flex space-x-2 font-s-bold">
                        Medium :
                        <div className="flex gap-1">
                          {state.medium?.map((item, index) => {
                            return (
                              <>
                                {item === "Call" ? (
                                  <MdMessage
                                    size={24}
                                    className="bg-secondary text-white rounded-full p-1 "
                                  />
                                ) : item === "video call" ? (
                                  <MdVideoCall
                                    size={24}
                                    className="bg-secondary text-white rounded-full p-1 "
                                  />
                                ) : null}
                              </>
                            );
                          })}
                        </div>
                      </div>
                      <div className="bg-[#fff] py-2 lg:px-10 px-5  flex items-center justify-start  rounded-full my-3 font-s-bold">
                        Session Duration :
                        <span className="text-secondary font-s-bold">
                          {state.durationofSession}
                        </span>
                      </div>
                      <div className="bg-[#fff] py-2 px-6  flex items-center justify-start  rounded-full my-3 font-s-bold">
                        Language :
                        <span className="text-secondary font-s-bold flex gap-2">
                          {state.language?.map((item, index) => {
                            return (
                              <div className="bg-primary p-2 rounded-full">
                                {item}
                              </div>
                            );
                          })}
                        </span>
                      </div>
                      <div className="bg-[#fff] py-2 px-12 flex items-center justify-start rounded-full my-3 font-s-bold">
                        No. of Sessions :{" "}
                        <span className="text-secondary font-s-bold">
                          {state.NoofSession}
                        </span>
                      </div>

                      {/* <div className="bg-[#fff] py-2 px-4  rounded-full my-3 font-s-bold">
                        Session Duration :
                        <span className="text-secondary font-s-bold">
                          {state.durationofSession}
                        </span>
                      </div> */}
                    </div>
                  </div>
                </div>
                <div className="flex items-end justify-end  ">
                  <button onClick={openModalDelete}>
                    <RiDeleteBinLine
                      className="text-secondary bg-primary m-1"
                      size={24}
                    />
                  </button>
                </div>
              </div>
              <hr className="w-full h-[0.10rem] bg-inputcolor pt-4" />
            </div>

            {/* modal  */}
            <Transition appear show={isOpenDelete} as={Fragment}>
              <Dialog
                as="div"
                className="relative z-10"
                onClose={closeModalDelete}
              >
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
                  <div className="flex min-h-full items-center justify-center  text-center">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <Dialog.Panel className="w-full max-w-md  lg:mx-0 mx-3 transform overflow-hidden rounded-2xl bg-white  text-left align-middle shadow-xl transition-all">
                        <div className="flex">
                          {" "}
                          <div className="flex flex-col gap-2 justify-between lg:px-6 px-2 pt-6">
                            <Dialog.Title
                              as="h3"
                              className="text-xl   lg:pl-6 pl-2 font-s-medium leading-6 text-center  text-gray-900"
                            >
                              Do you want to delete your service?
                            </Dialog.Title>
                            <Dialog.Title
                              as="h3"
                              className="  lg:pl-6 pl-2  leading-6 text-center  text-gray-900"
                            >
                              (The service will remain active to all Existing
                              candidate until the service Package will get
                              finished)
                            </Dialog.Title>
                          </div>
                          <div className="py-4 px-3">
                            <ImCross
                              className="cursor-pointer"
                              onClick={closeModalDelete}
                            />
                          </div>
                        </div>

                        <div className="bg-secondary py-5 mt-6 ">
                          <div className=" flex justify-center items-center gap-8 ">
                            <button
                              type="button"
                              className=" rounded-[8px] border border-white bg-transparent px-10 py-2 text-base font-medium text-white"
                              // onClick={openModalDeleteService}
                              onClick={deleteThisService}
                            >
                              Yes
                            </button>

                            <button
                              type="button"
                              className=" rounded-[8px] border border-transparent bg-white px-10 py-2 text-base font-medium text-secondary "
                              onClick={closeModalDelete}
                            >
                              No
                            </button>
                          </div>
                        </div>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </Dialog>
            </Transition>

            {/* modal service */}
            <Transition appear show={isOpenDeleteService} as={Fragment}>
              <Dialog
                as="div"
                className="relative z-10"
                onClose={closeModalDeleteService}
              >
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
                  <div className="flex min-h-full items-center justify-center  text-center">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <Dialog.Panel className="w-full max-w-md  lg:mx-0 mx-3 transform overflow-hidden rounded-2xl bg-white  text-left align-middle shadow-xl transition-all">
                        <div className="flex">
                          {" "}
                          <div className="flex flex-col gap-2 justify-between lg:px-6 px-2 pt-6">
                            <Dialog.Title
                              as="h3"
                              className="text-xl   lg:pl-6 pl-2 font-s-medium leading-6 text-center  text-gray-900"
                            >
                              Your service is get deleted.
                            </Dialog.Title>
                          </div>
                          <div className="py-4 px-3">
                            <ImCross
                              className="cursor-pointer"
                              onClick={closeModalDeleteService}
                            />
                          </div>
                        </div>

                        <div className="bg-secondary py-5 mt-6 ">
                          <div className=" flex justify-center items-center gap-8 ">
                            <button
                              type="button"
                              className=" rounded-[8px] border border-white bg-transparent px-10 py-2 text-base font-medium text-white"
                              onClick={closeModalDeleteService}
                            >
                              OK
                            </button>
                          </div>
                        </div>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </Dialog>
            </Transition>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailSection;
