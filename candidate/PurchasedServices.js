import React , {useState , useEffect } from "react";
import { Link } from "react-router-dom";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { RiArrowLeftSLine } from "react-icons/ri";
import { IoCall } from "react-icons/io5";
import { MdVideoCall } from "react-icons/md";
import { Fragment } from "react";
import { Transition, Dialog } from "@headlessui/react";
import { ImCross } from "react-icons/im";
import { getPurchasedServices } from "../../../api/authCandidate";
import { useSelector } from "react-redux";

const PurchasedServices = () => {
  let [isOpenDelete, setIsOpenDelete] = React.useState(false);

  
  const { userDetails } = useSelector((state) => state.flightReducer);

  const [ data , setData ] = useState([])

  const get = async () => {
    try {
      const response = await getPurchasedServices(userDetails._id)
      setData(response.data)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    get()
  }, [])

  function closeModalDelete() {
    setIsOpenDelete(false);
  }
  function openModalDelete() {
    setIsOpenDelete(true);
  }

  const services = [
    {
      id: 1,
      button: "Cancel",
      serviceName: "Adobe Photoshop Training for Beginner",
      byname: "By Ronald Richards",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
      price: "$613",
      duration: "1 Hour",
      date: "15 Jan 2023 ",
      time: "12:00 PM",
      report: " Report a Problem",
    },
    {
      id: 2,
      button: "Expired",
      serviceName: "Adobe Photoshop Training for Beginner",
      byname: "By Ronald Richards",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
      price: "$613",
      duration: "1 Hour",
      report: " Report a Problem",
      date: "15 Jan 2023 ",
      time: "12:00 PM",
    },
    {
      id: 3,
      button: "Cancel",
      serviceName: "Adobe Photoshop Training for Beginner",
      byname: "By Ronald Richards",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
      price: "$613",
      duration: "1 Hour",
      report: " Report a Problem",
      date: "15 Jan 2023 ",
      time: "12:00 PM",
    },
    {
      id: 4,
      button: "Expired",
      serviceName: "Adobe Photoshop Training for Beginner",
      byname: "By Ronald Richards",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
      price: "$613",
      duration: "1 Hour",
      report: " Report a Problem",
      date: "15 Jan 2023 ",
      time: "12:00 PM",
    },
  ];

  return (
    <div className="bg-inputcolor">
      <div className="container mx-auto py-10  ">
        <div className="flex space-x-2 items-center pb-6 lg:px-0 px-5 ">
          {" "}
          <RiArrowLeftSLine className="text-secondary w-5 h-5 " />{" "}
          <p className="text-secondary font-s-medium text-base">
            {" "}
            Purchased Services
          </p>{" "}
        </div>
        <div className="flex flex-col space-y-10 px-4 md:px-0">
          <div className="bg-white rounded-md py-3 ">
            <div className="lg:flex justify-between items-center py-2">
              <div className="flex space-x-4  px-5 pb-5">
                <img alt="icon" src="/assets/images/service-detail.png" />
                <h3 className="font-bold  text-lg flex pt-1">
                  All Purchased Services
                </h3>
              </div>
              <div className="px-4 py-2">
                {" "}
                <select className="bg-primary rounded-md px-5 py-2">
                  <option value="1">Sort by Date</option>
                  <option value="dummy">dummy</option>
                  <option value="dummy">dummy</option>
                </select>
              </div>
            </div>
            <hr className="w-full h-[0.10rem] bg-inputcolor" />

            <div className=" px-5">
              {data.map((item) => (
                <div className="bg-inputcolor my-5 py-2 rounded-lg">
                  <div className="text-end px-5 lg:py-0 py-3">
                    <button
                      onClick={openModalDelete}
                      className={`text-white font-s-medium px-10 py-1.5  text-sm rounded-full ${
                        item.purchaseStatus === "complete"
                          ? "bg-green-500 "
                          : item.button === "Expired"
                          ? "bg-gray-500"
                          : "bg-gray-600"
                      }`}
                    >
                      {item.purchaseStatus}
                    </button>
                  </div>
                  <Link to={`/candidate/purchase-detail/${item?._id}`}>
                    {" "}
                    <div className="px-5 md:flex md:space-x-20">
                      <p className="font-s-medium text-lg">
                        {item?.serviceId?.serviceName}{" "}
                      </p>
                    </div>
                  </Link>
                  <p className="px-5 lg:w-[90%] w-full pt-2  text-justify">
                    {item?.serviceId?.description}
                  </p>
                  <p className="px-5 lg:w-[90%] w-full pt-2  text-justify">
                    {item?.serviceId?.additionalDetail}
                  </p>
                  <div className="flex items-end justify-end text-sm font-s-medium space-x-2 px-6 pb-3">
                    {" "}
                    {item?.createdAt?.slice(0,10)}| {item?.createdAt?.slice(11,15)}
                  </div>
                  <hr className="w-full h-[0.10rem] bg-inputcolor" />
                  <div className="grid lg:grid-cols-4 justify-items-center px-5">
                    <div className="bg-[#fff] py-2 px-10 rounded-full my-3 font-s-bold">
                      Special Price :{" "}
                      <span className="text-secondary font-s-bold">
                        {item.serviceId.enterPrice}
                      </span>
                    </div>
                    <div className="bg-[#fff] py-2 px-10 rounded-full my-3 flex space-x-2 font-s-bold">
                      Medium :
                      <div className="flex space-x-5">
                        {item?.serviceId?.medium.toString()}
                        <IoCall
                          size={24}
                          className="bg-secondary text-white rounded-full p-1 "
                        />
                        <MdVideoCall
                          size={24}
                          className="bg-secondary text-white rounded-full p-1 "
                        />
                      </div>
                    </div>
                    <div className="bg-[#fff] py-2 px-10 rounded-full my-3 font-s-bold">
                      Duration :
                      <span className="text-secondary font-s-bold">
                        {item?.serviceId?.durationofSession}
                      </span>
                    </div>
                    <div className="bg-[#fff] py-2 px-10 text-red-500 rounded-full my-3 font-s-medium">
                      Number of Sessions : {item?.serviceId?.NoofSession}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* modal */}
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
                      <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white  text-left align-middle shadow-xl transition-all">
                        <div className="flex gap-2 justify-between px-6 pt-6">
                          <Dialog.Title
                            as="h3"
                            className="text-xl py-10  pl-6 font-s-medium leading-6 text-center pb-4 text-gray-900"
                          >
                            Do you want to Cancel your Services?
                          </Dialog.Title>
                          <div>
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
                              onClick={closeModalDelete}
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
            <div className="flex items-end justify-end py-4 px-5">
              <div className=" hidden md:flex  bg-white  ">
                <div className="flex flex-1 justify-between sm:hidden">
                  <a
                    href="/manage-jobs"
                    className="relative inline-flex items-center rounded-md border bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    Previous
                  </a>
                  <a
                    href="/manage-jobs"
                    className="relative ml-3 inline-flex items-center rounded-md border bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    Next
                  </a>
                </div>
                <div className=" flex  ">
                  <div>
                    <nav
                      className="isolate inline-flex gap-2  rounded-md "
                      aria-label="Pagination"
                    >
                      <a
                        href="#"
                        className="relative inline-flex items-center rounded-l-md  bg-white px-2 py-2 text-sm font-medium text-grey hover:bg-gray-50 focus:z-20"
                      >
                        <span className="sr-only">Previous</span>
                        <BsChevronLeft className="h-5 w-5" aria-hidden="true" />
                      </a>
                      {/* Current: "z-10 bg-indigo-50 border-secondary text-indigo-600", Default: "bg-white text-grey hover:bg-gray-50" */}
                      <a
                        href="#"
                        aria-current="page"
                        className="relative z-10 inline-flex items-center  bg-secondary px-4 py-2 text-sm font-medium text-white focus:z-20"
                      >
                        1
                      </a>
                      <a
                        href="#"
                        className="relative inline-flex items-center  bg-white px-4 py-2 text-sm font-medium text-grey hover:bg-gray-50 focus:z-20"
                      >
                        2
                      </a>
                      <a
                        href="#"
                        className="relative hidden items-center  bg-white px-4 py-2 text-sm font-medium text-grey hover:bg-gray-50 focus:z-20 md:inline-flex"
                      >
                        3
                      </a>
                      <span className="relative inline-flex items-center  bg-white px-4 py-2 text-sm font-medium text-gray-700">
                        ...
                      </span>
                      <a
                        href="#"
                        className="relative hidden items-center bg-white px-4 py-2 text-sm font-medium text-grey hover:bg-gray-50 focus:z-20 md:inline-flex"
                      >
                        8
                      </a>
                      <a
                        href="#"
                        className="relative inline-flex items-center  bg-white px-4 py-2 text-sm font-medium text-grey hover:bg-gray-50 focus:z-20"
                      >
                        9
                      </a>
                      <a
                        href="#"
                        className="relative inline-flex items-center  bg-white px-4 py-2 text-sm font-medium text-grey hover:bg-gray-50 focus:z-20"
                      >
                        10
                      </a>
                      <a
                        href="#"
                        className="relative inline-flex items-center rounded-r-md  bg-white px-2 py-2 text-sm font-medium text-grey hover:bg-gray-50 focus:z-20"
                      >
                        <span className="sr-only">Next</span>
                        <BsChevronRight
                          className="h-5 w-5"
                          aria-hidden="true"
                        />
                      </a>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchasedServices;
