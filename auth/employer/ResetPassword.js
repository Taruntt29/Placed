import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineClose,
} from "react-icons/ai";
import { putResetPasswordAPI } from "../../../api/authService";
import { toast } from "react-toastify";
const ResetPassword = () => {
  // states
  const { state } = useLocation();
  const navigate = useNavigate();
  const [createPassword, setCreatePassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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

  // Api

  const handleFunction = async () => {
    try {
      const { data, status, message } = await putResetPasswordAPI({
        email: state.email,
        password: createPassword,
      });
      if (status) {
        toast(message);
        navigate("/login");
        setCreatePassword("");
        setConfirmPassword("");
      } else {
        toast(message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className=" flex justify-center items-center bg-cover"
      style={{
        backgroundImage: `url(${"/assets/images/forgotpwdbanner.png"})`,
      }}
    >
      <div className="container mx-auto flex justify-center items-center py-24 lg:px-0 px-10">
        <div
          className="rounded-[34px] lg:w-[50%] w-full bg-white lg:px-10 px-5 py-5"
          style={{ boxShadow: "0px 6px 11px #00000029" }}
        >
          <div className="flex items-end justify-end">
            <AiOutlineClose className="text-2xl" />
          </div>
          <p className="text-secondary lg:text-4xl text-xl font-semibold">
            Reset Your Password
          </p>
          <div className="w-full flex flex-col justify-start pt-6">
            <div className="flex justify-start flex-col gap-1 w-full">
              <div className="font-semibold text-[15px]">Create Password</div>
              <div className="w-full bg-inputcolor px-3 py-2 flex items-center rounded-[7px]">
                <input
                  type={passwordType}
                  name="createPassword"
                  value={createPassword}
                  onChange={(e) => setCreatePassword(e.target.value)}
                  placeholder="Create Password"
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
            <div className="flex justify-start flex-col gap-1 w-full pt-4">
              <div className="font-semibold text-[15px]">Confirm Password</div>
              <div className="w-full bg-inputcolor px-3 py-2 flex items-center rounded-[7px]">
                <input
                  type={passwordTypeConfirm}
                  name="confirmPaasword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm Password"
                  className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm "
                />
                <div className="cursor-pointer" onClick={togglePasswordConfirm}>
                  {passwordTypeConfirm === "password" ? (
                    <AiOutlineEyeInvisible size={20} />
                  ) : (
                    <AiOutlineEye size={20} />
                  )}
                </div>
              </div>
            </div>

            <div className="pt-6 pb-3">
              <button
                onClick={handleFunction}
                className="bg-secondary text-white rounded-[7px] btnshadow flex gap-2 items-center justify-center w-full py-3 font-s-medium text-sm "
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
