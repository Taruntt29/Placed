import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { toast } from "react-toastify";
import { putForgotPasswordAPI } from "../../../api/authService";

const ForgotPassword = () => {
  const [email, setEmail] = useState();
  const navigate = useNavigate();

  // Api
  const ForgotPassword = async () => {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast("Please Enter Valid  Email");
    } else {
      try {
        const { data, status, message } = await putForgotPasswordAPI({
          emailOrPhone: email,
        });
        if (status) {
          toast(message);
          navigate("/forgot-password-otp", {
            state: { email: email },
          });
        } else {
          toast(message);
        }
      } catch (error) {
        console.log(error);
      }
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
          className="rounded-[34px] lg:w-[50%] w-full bg-white lg:px-10 px-5 py-6"
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
                <div className="font-semibold text-[15px]">
                  Enter Email/Phone Number
                </div>
              </div>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email or Phone Number"
                className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
              />
            </div>

            <div className="pt-6 pb-3">
              <button
                navigate="/employer-forgot-password-otp"
                onClick={ForgotPassword}
                className="bg-secondary text-white rounded-[7px] btnshadow flex gap-2 items-center justify-center w-full py-3 font-s-medium text-sm "
              >
                Get OTP
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
