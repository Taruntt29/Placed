import React, { useState } from "react";

import { BiChevronLeft } from "react-icons/bi";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { changeCoachPassword } from "../../../api/coachFunctions";
const ChangePasswordPage = () => {
  const [passwordType, setPasswordType] = useState("password");
  const [passwordTypeConfirm, setPasswordTypeConfirm] = useState("password");
  const { userDetails } = useSelector((state) => state.flightReducer);
  // console.log(userDetails.);
  const email = userDetails.email;
  const navigate = useNavigate();
  const [oldpassword, setOldPassword] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPasseord] = useState();
  const [pwdErr, setPwdErr] = useState();
  const changePassword = async () => {
    if (password !== confirmPassword) {
      setPwdErr("Password and Confirm password are not same");
      toast(pwdErr);
    } else {
      try {
        const response = await changeCoachPassword({
          email: email,
          oldpassword: oldpassword,
          password: password,
        });
        if (response.status) {
          console.log(response.data);
          toast(response.message);
          navigate("/coach/my-profile");
        } else {
          toast(response.message);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
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

  return (
    <div>
      <div className="bg-inputcolor lg:px-0 px-5">
        <div className="container mx-auto py-20  ">
          <div className="flex items-center mb-4 font-s-medium text-secondary text-lg">
            <Link to="/coach/my-profile">
              {" "}
              <BiChevronLeft className="text-3xl" />{" "}
            </Link>
            Change Password
          </div>

          <div className="container mx-auto flex justify-center items-center">
            <div
              className="rounded-[34px]  w-full bg-white lg:p-10 p-5"
              style={{ boxShadow: "0px 6px 11px #00000029" }}
            >
              <p className="text-xl border-b-2 border-gray-200 font-semibold pb-4">
                Change your Password
              </p>

              <div className="w-full flex flex-col justify-start pt-4">
                <div className="flex justify-start flex-col space-x-1 w-full py-2">
                  <div className="font-semibold text-[15px]">Old Password</div>
                  <div className="w-full bg-inputcolor px-3 py-2 flex items-center rounded-[7px]">
                    <input
                      type={passwordType}
                      value={oldpassword}
                      onChange={(e) => setOldPassword(e.target.value)}
                      placeholder="Old Password"
                      className=" placeholder:text-[#000000] w-full bg-inputcolor placeholder:text-opacity-30 placeholder:text-sm  "
                    />
                    <div className="cursor-pointer" onClick={togglePassword}>
                      {passwordType === "password" ? (
                        <AiOutlineEyeInvisible size={20} />
                      ) : (
                        <AiOutlineEye size={20} />
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex justify-start flex-col space-x-1 w-full py-3">
                  <div className="font-semibold text-[15px]">New Password</div>
                  <div className="w-full bg-inputcolor px-3 py-2 flex items-center rounded-[7px]">
                    <input
                      type={passwordTypeConfirm}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
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
                      placeholder="Confirm New Password"
                      value={confirmPassword}
                      onChange={(e) => {
                        setConfirmPasseord(e.target.value);
                      }}
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
                  <p className="text-xs text-secondary">
                    {password !== confirmPassword ? pwdErr : null}
                  </p>
                </div>
              </div>
              <div>
                <button
                  onClick={changePassword}
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
  );
};

export default ChangePasswordPage;
