import React, { useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { MdOutlineRefresh } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { putForgotVerfiyOtpAPI } from "../../../api/authService";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
const EnterOtp = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const [otp, setOtp] = useState();

  const ForgotPasswordOtp = async () => {
    try {
      const { status, message } = await putForgotVerfiyOtpAPI({
        emailOrPhone: state.email,
        otp: otp,
      });
      if (status) {
        toast(message);
        navigate("/reset-password", { state: { email: state.email } });
      } else {
        toast(message);
      }
    } catch (error) {
      toast(error);
    }
  };

  return (
    <div
      className=" flex justify-center items-center bg-cover"
      style={{
        backgroundImage: `url(${"/assets/images/forgotpwdbanner.png"})`,
      }}
    >
      <div className="container mx-auto flex justify-center items-center py-28 lg:px-0 px-10">
        <div
          className="rounded-[34px] lg:w-[50%] w-full bg-white lg:px-10 px-5 py-5"
          style={{ boxShadow: "0px 6px 11px #00000029" }}
        >
          <div className="flex items-end justify-end">
            <AiOutlineClose className="text-2xl" />
          </div>
          <p className="text-secondary lg:text-3xl text-xl font-semibold">
            Forgot Your Password?
          </p>
          <div className="w-full flex flex-col justify-start pt-6">
            <div className="flex justify-start w-full gap-1 flex-col">
              <div className="flex justify-start flex-col gap-1 w-full">
                <div className="font-semibold text-[15px]">Enter OTP</div>
              </div>
              <input
                type="otp"
                placeholder="Enter OTP"
                name="otp"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
              />
            </div>
            <div className="text-black pt-4 text-center font-s-medium flex items-center justify-center gap-2">
              Didn't get OTP yet?
              <span className="text-secondary flex items-center justify-center cursor-pointer">
                Resend <MdOutlineRefresh size={20} />
              </span>
            </div>

            <div className="pt-4 pb-3">
              <button
                onClick={ForgotPasswordOtp}
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

export default EnterOtp;
