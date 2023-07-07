import React, { useState } from "react";
import { Menu, Transition, Dialog } from "@headlessui/react";
import { Fragment } from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { FaChevronDown, FaClipboardList } from "react-icons/fa";
import {
  BsEnvelope,
  BsFillPersonFill,
  BsFillPersonCheckFill,
  BsCardChecklist,
} from "react-icons/bs";
import { BiBell, BiSearch } from "react-icons/bi";
import { MdGroup, MdOutlineSupportAgent } from "react-icons/md";
import { GiRingingBell } from "react-icons/gi";
import { RiLockPasswordFill } from "react-icons/ri";
import { TiMessages } from "react-icons/ti";
import { MdEmail, MdRepeatOn } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import {
  AiFillQuestionCircle,
  AiFillSetting,
  AiFillEye,
  AiFillWechat,
} from "react-icons/ai";
import { FiLogOut, FiArrowDown, FiArrowUp } from "react-icons/fi";
import { FaUserTie, FaUserCog, FaHistory } from "react-icons/fa";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { ImCross } from "react-icons/im";
import { IoIosTime } from "react-icons/io";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { TbUserSearch } from "react-icons/tb";
import { MdQuestionAnswer, MdHistory, MdAssessment } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { ValueChanged } from "../../../redux/actions/flightAction";
import { removeToken } from "../../../utils/localStorage";
import "./Navbar.css";
const CandidateNavbar = ({ bgcolor }) => {
  // change nav color when scrolling
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userDetails } = useSelector((state) => state.flightReducer);
  console.log("userDetails categoryId", userDetails.categoryId)
  // console.log("Candidate Profile Dta", userDetails);
  // console.log("User Details Name", userDetails.candidateName);
  // console.log("User Details Images", userDetails.images[0]);

  window.addEventListener("scroll", changeColor);
  const [slideIn, setSlideIn] = useState(true);
  // sidebar slide
  const handleSlide = () => {
    setSlideIn(!slideIn);
  };

  const menu = [
    {
      id: 1,
      icon: <BsFillPersonFill />,
      title: "My Profile",
      mainlink: "/candidate/my-profile",
      slide: { handleSlide },
    },

    {
      id: 2,
      icon: <FaClipboardList />,
      title: " Job",
      icon1: <MdGroup />,
      option1: "Apply for Job",
      link1: "apply-for-job",
      icon2: <BsCardChecklist />,
      option2: "Favorite Job",
      link2: "favorite-job",
      icon3: <MdRepeatOn />,
      option3: "Applied Job",
      link3: "applied-jobs",
      icon4: <BsFillPersonCheckFill />,
      option4: "Browse Job",
      link4: "/job-search",
    },

    {
      id: 3,
      icon: <FaUserTie />,
      title: "Company",
      icon1: <TbUserSearch />,
      option1: "Browse Company",
      link1: "/employer-list",
      icon2: <FaUserCog />,
      option2: "Favorite Company",
      link2: "favorite-company",
    },

    {
      id: 4,
      icon: <FaUserTie />,
      title: " Coach",
      icon1: <TbUserSearch />,
      option1: "Search Coach",
      link1: "/coach-list",
      // link1: "recommended-coaches",
      icon2: <TbUserSearch />,
      option2: "Favorite Coches",
      link2: "favorite-coaches",
      icon3: <FaUserCog />,
      // option3: "Services List",
      // link3: "all-services",
      icon4: <AiFillEye />,
      option4: "Responses",
      link4: "all-responses",
      icon5: <AiFillEye />,
      option5: "Purchased Services",
      link5: "purchased-services",
      icon6: <AiFillEye />,
      option6: "Recent Viewed Services ",
      link6: "recent-services",
      icon7: <FaHistory />,
      option7: "Order History ",
      link7: "order-history",
      icon8: <AiFillWechat />,
      option8: "Chat With Coach ",
      link8: "candidate-messages",
    },

    {
      id: 5,
      icon: <FaClipboardList />,
      title: "Services",
      icon1: <IoIosTime />,
      option1: "Upcoming Service",
      link1: "upcoming-services",
      icon2: <BsCardChecklist />,
      option2: "Services History",
      link2: "service-history",
    },
    {
      id: 6,
      icon: <GiRingingBell />,
      title: " Notifications",
      mainlink: "candidate-notification",
      slide: { handleSlide },
    },

    {
      id: 7,
      icon: <TiMessages />,
      title: "Messages",
      icon1: <TiMessages />,
      option1: "Chat",
      link1: "candidate-messages",
      icon2: <MdEmail />,
      option2: "Email",
      link2: "email-inbox",
    },

    {
      id: 8,
      icon: <AiFillSetting />,
      title: "Settings",
      icon1: <RiLockPasswordFill />,
      option1: "Change Password",
      link1: "change-password",
      icon2: <CgProfile />,
      option2: "Edit Profile",
      link2: "edit-profile",
    },
    {
      id: 9,
      icon: <MdOutlineSupportAgent />,
      title: "Support",
      icon1: <TiMessages />,
      option1: "Assistant Chat",
      link1: "support-chat",
      icon2: <MdEmail />,
      option2: "Assistant Email",
      link2: "support-inbox-mail",
      icon3: <MdEmail />,
      option3: "Feedback from Candidates",
      link3: "feedback-form",
    },
    {
      id: 10,
      icon: <AiOutlineUser />,
      title: "Account",
      icon1: <TiMessages />,
      option1: "Activate Account",
      link1: "activate-candidate-account",
      icon2: <MdEmail />,
      option2: "Deactivate Account",
      link2: "deactivate-candidate-account",
      icon3: <MdEmail />,
      option3: "Delete Account",
      link3: "delete-account",
    },
    {
      id: 11,
      icon: <FiLogOut />,
      title: "Logout",
    },
  ];

  const [clicked, setClicked] = useState(false);
  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }

    setClicked(index);
  };

  let [isOpenLogout, setIsOpenLogout] = React.useState(false);

  function closeModalLogout() {
    setIsOpenLogout(false);
  }

  function openModalLogout() {
    setIsOpenLogout(true);
  }

  let [isOpenDelete, setIsOpenDelete] = React.useState(false);

  function closeModalDelete() {
    setIsOpenDelete(false);
  }

  function openModalDelete() {
    setIsOpenDelete(true);
  }

  const handleFunc = (index, item) => {
    toggle(index);
    if (item.id === 11) {
      openModalLogout();
    } else if (item.id === 12) {
      openModalDelete();
    } else {
    }
  };

  return (
    <div
      className={
        color || bgcolor
          ? "header bg-[#E3EEFF] z-50 pt-16 pb-12 duration-500"
          : "header bg-[#E3EEFF] z-50 pt-16 pb-12 duration-500"
      }
    >
      <nav className="navbar">
        <div className="flex justify-end items-center w-full gap-3 md:gap-8  ">
          {/* <div className="bg-primary group dropdown drop-shadow-2xl flex  text-sm border-[2px] border-secondary font-semibold nav-desk  group relative cursor-pointer items-center justify-center  rounded-full">
            <input
              type="search"
              placeholder="Search Here"
              className="w-full py-2 px-2 rounded-l-full bg-transparent placeholder:font-s-normal"
            />
            <div className="bg-secondary text-primary rounded-full p-2 m-1">
              <BiSearch size={18} />
            </div>
          </div> */}
          <Link to="/">
            <div className="group dropdown drop-shadow-2xl flex text-sm  font-semibold nav-desk  text-secondary group relative cursor-pointer">
              <AiOutlineHome size={30} />
            </div>
          </Link>
          <div className="group dropdown drop-shadow-2xl flex text-sm  font-semibold nav-desk  text-secondary group relative cursor-pointer">
            <BsEnvelope size={30} />
          </div>
          <div className="group dropdown drop-shadow-2xl flex  text-sm  font-semibold nav-desk  text-secondary  group relative cursor-pointer">
            <BiBell size={30} />
          </div>
          <div className="">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="inline-flex item-center justify-center w-full my-auto rounded-md bg-transparent  pr-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                  <div className="rounded-full w-12 h-12">
                    <img src={userDetails?.images?.[0]} alt="dp"  className="rounded-full w-12 h-12 object-cover"/>
                  </div>{" "}
                  <p className="mt-4 mr-1 text-secondary font-s-medium md:flex items-center justify-center hidden ">
                    {userDetails?.candidateName}
                  </p>
                  <FaChevronDown
                    className=" -mr-1 h-5 w-5 mt-4 bg-transparent text-secondary "
                    aria-hidden="true"
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
                <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="px-1 py-1 ">
                    <Menu.Item>
                      {({ active }) => (
                        <NavLink
                          to="/candidate/my-profile"
                          className={`${
                            active ? "bg-secondary text-white" : "text-gray-900"
                          } group flex w-full font-s-medium items-center rounded-md px-2 py-2 text-sm`}
                        >
                          My Account
                        </NavLink>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <NavLink
                          to="/candidate/change-password"
                          className={`${
                            active ? "bg-secondary text-white" : "text-gray-900"
                          } group flex w-full font-s-medium items-center rounded-md px-2 py-2 text-sm`}
                        >
                          Change Password
                        </NavLink>
                      )}
                    </Menu.Item>
                  </div>
                  <div className="px-1 py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <button onClick={() => {
                          dispatch(ValueChanged("isLogin", false));
                          removeToken();
                          dispatch(ValueChanged("userDetails", null));
                          navigate("/");
                        }}
                          className={`${
                            active ? "bg-secondary text-white" : "text-gray-900"
                          } group flex w-full font-s-medium items-center rounded-md px-2 py-2 text-sm`}
                        >
                          Logout
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </nav>
      <div
        className={
          slideIn
            ? "absolute shadow shadow-slate-600 h-screen  top-0 left-0 w-[300px] bg-secondary text-white translate-x-[-100%] duration-500"
            : "absolute shadow shadow-slate-600 h-screen  top-0 left-0 w-[300px] bg-secondary text-white translate-x-0 duration-500"
        }
      >
        <div className="relative">
          <div className="h-full  ">
            <div className="flex justify-start bg-secondary fixed w-full py-5 px-6">
              <img src="/assets/images/logo.png" alt="" className="w-[150px]" />
            </div>
            <div className="h-screen overflow-y-scroll scroller  pt-28">
              <div className="">
                <div className=" flex justify-start items-start border-[1px] border-white border-opacity-60 rounded-[9px] w-[60%] mx-auto">
                  <div className="flex justify-center items-center m-1 rounded-[9px] bg-white w-full h-full p-2">
                    <img
                      src={userDetails?.images?.[0]}
                      alt="/"
                      className="rounded-[9px] w-[80px] h-[80px] flex justify-center items-center"
                    />
                  </div>
                </div>
                <div className="font-s-medium text-center text-white text-sm w-full pt-2 mx-auto">
                  {userDetails.candidateName}
                </div>
                <div className="font-s-medium text-center text-white text-opacity-60 text-sm w-full">
                  {userDetails?.categoryId?.name}
                </div>
              </div>
              <div className="">
                <div className="  rounded-lg  justify-start gap-1 flex flex-col pt-5  pl-4 py-8 ">
                  {menu.map((item, index) => {
                    return (
                      <>
                        <Link onClick={item.slide} to={item.mainlink}>
                          <div
                            onClick={(e) => handleFunc(index, item)}
                            key={index}
                            className={`flex items-center justify-between group gap-3 text-lg pr-3 rounded-l-md  bg-transparent hover:bg-[#F5F7F9] text-white hover:text-grey  ${item.styles}`}
                          >
                            <div className="flex items-center gap-3 px-3 py-2">
                              {" "}
                              <span className="text-white group-hover:text-secondary">
                                {item.icon}
                              </span>{" "}
                              <span className="font-s-normal text-base">
                                {" "}
                                {item.title}
                              </span>{" "}
                            </div>
                            {item.option1 ? (
                              <span className="">
                                {clicked === index ? (
                                  <FiArrowUp
                                    size={17}
                                    className="group-hover:text-secondary"
                                  />
                                ) : (
                                  <FiArrowDown
                                    size={17}
                                    className="group-hover:text-secondary"
                                  />
                                )}
                              </span>
                            ) : null}
                          </div>
                        </Link>

                        <>
                          {item.option1 ? (
                            <>
                              {clicked === index ? (
                                <ul className="dropdown-acc list-disc  my-2 rounded">
                                  {item.option1 ? (
                                    <Link
                                      onClick={handleSlide}
                                      to={item.link1}
                                      className={({ isActive }) =>
                                        isActive ? "" : ""
                                      }
                                    >
                                      <div className=" flex gap-2 items-center group px-10 py-2 bg-transparent hover:bg-[#F5F7F9] text-white hover:text-grey rounded-l-md ">
                                        <span className="group-hover:text-secondary">
                                          {" "}
                                          {item.icon1}{" "}
                                        </span>{" "}
                                        <span className="text-sm">
                                          {" "}
                                          {item.option1}{" "}
                                        </span>
                                      </div>
                                    </Link>
                                  ) : (
                                    ""
                                  )}
                                  {item.option2 ? (
                                    <Link
                                      onClick={handleSlide}
                                      to={item.link2}
                                      className={({ isActive }) =>
                                        isActive ? " " : ""
                                      }
                                    >
                                      <div className=" flex gap-2 items-center group px-10 py-2 bg-transparent hover:bg-[#F5F7F9] text-white hover:text-grey rounded-l-md ">
                                        <span className="group-hover:text-secondary">
                                          {" "}
                                          {item.icon2}{" "}
                                        </span>{" "}
                                        <span className="text-sm">
                                          {" "}
                                          {item.option2}{" "}
                                        </span>
                                      </div>
                                    </Link>
                                  ) : (
                                    ""
                                  )}
                                  {item.option3 ? (
                                    <Link
                                      onClick={handleSlide}
                                      to={item.link3}
                                      className={({ isActive }) =>
                                        isActive ? "" : ""
                                      }
                                    >
                                      <div className=" flex gap-2 items-center group px-10 py-2 bg-transparent hover:bg-[#F5F7F9] text-white hover:text-grey rounded-l-md ">
                                        <span className="group-hover:text-secondary">
                                          {" "}
                                          {item.icon3}{" "}
                                        </span>{" "}
                                        <span className="text-sm">
                                          {" "}
                                          {item.option3}{" "}
                                        </span>
                                      </div>
                                    </Link>
                                  ) : (
                                    ""
                                  )}
                                  {item.option4 ? (
                                    <Link
                                      onClick={handleSlide}
                                      to={item.link4}
                                      className={({ isActive }) =>
                                        isActive ? "" : ""
                                      }
                                    >
                                      <div className=" flex gap-2 items-center group px-10 py-2 bg-transparent hover:bg-[#F5F7F9] text-white hover:text-grey rounded-l-md ">
                                        <span className="group-hover:text-secondary">
                                          {" "}
                                          {item.icon4}{" "}
                                        </span>{" "}
                                        <span className="text-sm">
                                          {" "}
                                          {item.option4}{" "}
                                        </span>
                                      </div>
                                    </Link>
                                  ) : (
                                    ""
                                  )}
                                  {item.option5 ? (
                                    <Link
                                      onClick={handleSlide}
                                      to={item.link5}
                                      className={({ isActive }) =>
                                        isActive ? "" : ""
                                      }
                                    >
                                      <div className=" flex gap-2 items-center group px-10 py-2 bg-transparent hover:bg-[#F5F7F9] text-white hover:text-grey rounded-l-md ">
                                        <span className="group-hover:text-secondary">
                                          {" "}
                                          {item.icon5}{" "}
                                        </span>{" "}
                                        <span className="text-sm">
                                          {" "}
                                          {item.option5}{" "}
                                        </span>
                                      </div>
                                    </Link>
                                  ) : (
                                    ""
                                  )}
                                  {item.option6 ? (
                                    <Link
                                      onClick={handleSlide}
                                      to={item.link6}
                                      className={({ isActive }) =>
                                        isActive ? "" : ""
                                      }
                                    >
                                      <div className=" flex gap-2 items-center group px-10 py-2 bg-transparent hover:bg-[#F5F7F9] text-white hover:text-grey rounded-l-md ">
                                        <span className="group-hover:text-secondary">
                                          {" "}
                                          {item.icon6}{" "}
                                        </span>{" "}
                                        <span className="text-sm">
                                          {" "}
                                          {item.option6}{" "}
                                        </span>
                                      </div>
                                    </Link>
                                  ) : (
                                    ""
                                  )}
                                  {item.option7 ? (
                                    <Link
                                      onClick={handleSlide}
                                      to={item.link7}
                                      className={({ isActive }) =>
                                        isActive ? "" : ""
                                      }
                                    >
                                      <div className=" flex gap-2 items-center group px-10 py-2 bg-transparent hover:bg-[#F5F7F9] text-white hover:text-grey rounded-l-md ">
                                        <span className="group-hover:text-secondary">
                                          {" "}
                                          {item.icon7}{" "}
                                        </span>{" "}
                                        <span className="text-sm">
                                          {" "}
                                          {item.option7}{" "}
                                        </span>
                                      </div>
                                    </Link>
                                  ) : (
                                    ""
                                  )}
                                  {item.option8 ? (
                                    <Link
                                      onClick={handleSlide}
                                      to={item.link8}
                                      className={({ isActive }) =>
                                        isActive ? "" : ""
                                      }
                                    >
                                      <div className=" flex gap-2 items-center group px-10 py-2 bg-transparent hover:bg-[#F5F7F9] text-white hover:text-grey rounded-l-md ">
                                        <span className="group-hover:text-secondary">
                                          {" "}
                                          {item.icon8}{" "}
                                        </span>{" "}
                                        <span className="text-sm">
                                          {" "}
                                          {item.option8}{" "}
                                        </span>
                                      </div>
                                    </Link>
                                  ) : (
                                    ""
                                  )}
                                </ul>
                              ) : null}
                            </>
                          ) : null}
                        </>
                      </>
                    );
                  })}

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
                                  Do you want to delete your Account?
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

                  {/* modal */}
                  <Transition appear show={isOpenLogout} as={Fragment}>
                    <Dialog
                      as="div"
                      className="relative z-10"
                      onClose={closeModalLogout}
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
                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                              <div className="flex gap-2 justify-between px-6 pt-6">
                                <Dialog.Title
                                  as="h3"
                                  className="text-xl py-10  pl-6 font-s-medium leading-6 text-center pb-4 text-gray-900"
                                >
                                  Do you want to Logout your Account?
                                </Dialog.Title>
                                <div>
                                  <ImCross
                                    className="cursor-pointer"
                                    onClick={closeModalLogout}
                                  />
                                </div>
                              </div>
                              <div className="bg-secondary py-5 mt-6 ">
                                <div className=" flex justify-center items-center gap-8 ">
                                  <button
                                    type="button"
                                    className=" rounded-[8px] border border-white bg-transparent px-10 py-2 text-base font-medium text-white"
                                    // onClick={closeModalLogout}
                                    onClick={() => {
                                      dispatch(ValueChanged("isLogin", false));
                                      removeToken();
                                      dispatch(
                                        ValueChanged("userDetails", null)
                                      );
                                      navigate("/");
                                    }}
                                  >
                                    Yes
                                  </button>

                                  <button
                                    type="button"
                                    className=" rounded-[8px] border border-transparent bg-white px-10 py-2 text-base font-medium text-secondary "
                                    onClick={closeModalLogout}
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
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute bg-secondary text-white p-3 -right-12 top-10 rounded-r shadow shadow-slate-600 cursor-pointer"
          onClick={handleSlide}
        >
          {slideIn ? <BiChevronRight size={25} /> : <BiChevronLeft size={25} />}
        </div>
      </div>
    </div>
  );
};

export default CandidateNavbar;
