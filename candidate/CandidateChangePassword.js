import React, { useState } from "react";

import { BiChevronLeft } from "react-icons/bi";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useSelector } from "react-redux";
import { putCandidateChangePasswordAPI } from "../../../api/authCandidate";
import { toast } from "react-toastify";
const CandidateChangePassword = () => {
  const [passwordType, setPasswordType] = useState("password");
  const [passwordTypeConfirm, setPasswordTypeConfirm] = useState("password");
  const togglePassword = () => {
    passwordType === "password"
      ? setPasswordType("text")
      : setPasswordType("password");
  };
  const togglePasswordConfirm = () => {
    passwordTypeConfirm === "password"
      ? setPasswordTypeConfirm("text")
      : setPasswordTypeConfirm("password");
  };

  // states
  const { userDetails } = useSelector((state) => state.flightReducer);
  const [oldpassword, setOldpassword] = useState("");
  const [newpassword, setNewpassword] = useState("");
  const [confirmnewpassword, setConfirmnewpassword] = useState("");

  // API
  const changepassword = async () => {
    try {
      const { data, message, status } = await putCandidateChangePasswordAPI({
        email: userDetails.email,
        oldpassword: oldpassword,
        password: newpassword,
      });
      if (status) {
        setNewpassword("");
        setOldpassword("");
        setConfirmnewpassword("");
        toast(message);
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
              <div className="flex container mx-auto  mb-4 font-s-medium text-secondary text-lg lg:px-72">
                <BiChevronLeft className="text-3xl" /> Change Password
              </div>

              <div className="container mx-auto flex justify-center items-center">
                <div
                  className="rounded-[34px] lg:w-[50%] w-full bg-white lg:p-10 p-5"
                  style={{ boxShadow: "0px 6px 11px #00000029" }}
                >
                  <p className="text-xl border-b-2 border-gray-200 font-semibold pb-4">
                    Change your Password
                  </p>
                  <div className="w-full flex flex-col justify-start pt-4">
                    <div className="flex justify-start flex-col space-x-1 w-full py-2">
                      <div className="font-semibold text-[15px]">
                        Old Password
                      </div>
                      <div className="w-full bg-inputcolor px-3 py-2 flex items-center rounded-[7px]">
                        <input
                          type={passwordType}
                          value={oldpassword}
                          onChange={(e) => setOldpassword(e.target.value)}
                          placeholder="Old Password"
                          className=" placeholder:text-[#000000] w-full bg-inputcolor placeholder:text-opacity-30 placeholder:text-sm  "
                        />
                        <div
                          className="cursor-pointer"
                          onClick={togglePassword}
                        >
                          {passwordType === "password" ? (
                            <AiOutlineEyeInvisible size={20} />
                          ) : (
                            <AiOutlineEye size={20} />
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-start flex-col space-x-1 w-full py-3">
                      <div className="font-semibold text-[15px]">
                        New Password
                      </div>
                      <div className="w-full bg-inputcolor px-3 py-2 flex items-center rounded-[7px]">
                        <input
                          type={passwordTypeConfirm}
                          value={newpassword}
                          onChange={(e) => setNewpassword(e.target.value)}
                          placeholder="Confirm Password"
                          className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm "
                        />
                        <div
                          className="cursor-pointer"
                          onClick={togglePasswordConfirm}
                        >
                          {passwordTypeConfirm === "password" ? (
                            <AiOutlineEyeInvisible size={20} />
                          ) : (
                            <AiOutlineEye size={20} />
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-start flex-col space-x-1 w-full py-3">
                      <div className="font-semibold text-[15px]">
                        Confirm New Password
                      </div>
                      <div className="w-full bg-inputcolor px-3 py-2 flex items-center rounded-[7px]">
                        <input
                          type={passwordTypeConfirm}
                          value={confirmnewpassword}
                          onChange={(e) =>
                            setConfirmnewpassword(e.target.value)
                          }
                          placeholder="Confirm New Password"
                          className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm "
                        />
                        <div
                          className="cursor-pointer"
                          onClick={togglePasswordConfirm}
                        >
                          {passwordTypeConfirm === "password" ? (
                            <AiOutlineEyeInvisible size={20} />
                          ) : (
                            <AiOutlineEye size={20} />
                          )}
                        </div>
                      </div>
                      {newpassword == !confirmnewpassword &&
                      confirmnewpassword.length > 1 ? (
                        <span className="text-red-500">
                          Password doesn't match
                        </span>
                      ) : null}
                    </div>
                  </div>
                  <div>
                    <button
                      onClick={changepassword}
                      className="py-2 px-10 bg-secondary text-white rounded-lg mt-5 font-s-medium"
                    >
                      Save Changes
                    </button>
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

export default CandidateChangePassword;
