import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { BiChevronLeft } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { ImCross } from "react-icons/im";
import {
  accountStatusCoachProfileApi,
  activateCoachProfileApi,
} from "../../../api/coachFunctions";
import { ValueChanged } from "../../../redux/actions/flightAction";
import { Link, useNavigate } from "react-router-dom";
import { removeToken } from "../../../utils/localStorage";

const ActivateAccount = () => {
  let [isOpenDelete, setIsOpenDelete] = React.useState(false);
  const dispatch = useDispatch();
  // change nav color when scrolling
  const navigate = useNavigate();
  function closeModalDelete() {
    setIsOpenDelete(false);
  }

  function openModalDelete() {
    setIsOpenDelete(true);
  }

  const { userDetails } = useSelector((state) => state.flightReducer);
  console.log("userDetails", userDetails);

  const activateAccount = async () => {
    try {
      const { status, message } = await accountStatusCoachProfileApi({
        id: userDetails._id,
        accountstatus: "Active",
      });
      if (status) {
        setIsOpenDelete(false);
        dispatch(ValueChanged("isLogin", false));
        removeToken();
        // dispatch(ValueChanged("userDetails", null));
        navigate("/");
      } else {
        toast(message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="bg-inputcolor pb-5 lg:px-0 px-5">
        <div className="">
          <div className=" py-16">
            <div className="mx-auto max-w-[1150px]">
              <div className="flex items-center mb-4 font-s-medium text-secondary text-lg md:px-24">
                <Link to="/coach/my-profile">
                  {" "}
                  <BiChevronLeft className="text-3xl" />{" "}
                </Link>
                Account
              </div>

              <div className="container mx-auto ">
                <div
                  className="rounded-md lg:w-[80%] w-full bg-white lg:p-10 p-5 mx-auto"
                  style={{ boxShadow: "0px 6px 11px #00000029" }}
                >
                  <div className="flex flex-col justify-center items-center mx-auto">
                    <h4 className="font-s-medium text-xl">
                      Do you want to activate your account?
                    </h4>
                    <p className="text-center py-3">
                      You have been subscribed to all emails. You are
                      reactivating your account.
                    </p>
                    <div className="flex space-x-10 py-3">
                      <button className="text-secondary border-2 rounded-md font-s-medium border-secondary px-5 py-1">
                        No
                      </button>
                      {/* <Link to="/coach/confirmed-deactivate-account"> */}
                      <button
                        onClick={openModalDelete}
                        className="text-white  rounded-md font-s-medium bg-secondary px-5 py-1.5"
                      >
                        Yes
                      </button>
                      {/* </Link> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Transition appear show={isOpenDelete} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModalDelete}>
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
                      Congratulations!! You are reactivating your account!!
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
                        Cancel
                      </button>

                      <button
                        onClick={activateAccount}
                        type="button"
                        className=" rounded-[8px] border border-transparent bg-white px-10 py-2 text-base font-medium text-secondary "
                      >
                        Proceed
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
  );
};

export default ActivateAccount;
