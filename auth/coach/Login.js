import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
const Login = () => {
  const [passwordType, setPasswordType] = useState("password");
  const togglePassword = () => {
    passwordType === "password"
      ? setPasswordType("text")
      : setPasswordType("password");
  };
  return (
    <div className="pt-[110px]">
      <div className="py-20 xxll:py-32 px-5 mx-auto container">
        <div className="signupshadow">
          <div className="grid grid-cols-1 md:grid-cols-2 shadowsignup">
            <div className=" h-full container mx-auto px-3 md:px-10 py-16">
              <div className="text-secondary font-s-medium text-4xl pb-8">
                Coach/Mentor Login
              </div>
              <div className="flex justify-start w-full gap-3 flex-col">
                {" "}
                <div className="flex justify-start flex-col gap-1 w-full">
                  <div className="font-semibold text-[15px]">
                    Enter Email/Phone
                  </div>
                  <input
                    type="text"
                    placeholder="Enter Email/Phone number"
                    className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                  />
                </div>
                <div className="flex justify-start flex-col gap-1 w-full">
                  <div className="font-semibold text-[15px]">Password</div>
                  <div className="w-full bg-inputcolor px-3 py-2 flex items-center rounded-[7px]">
                    <input
                      type={passwordType}
                      placeholder="Password"
                      className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm "
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
              </div>
              <div className="flex gap-2 justify-center items-center pt-10 pb-6">
                <div className="h-[1px] bg-[#00000029] w-full"></div>
                <div className="text-sm">or</div>
                <div className="h-[1px] bg-[#00000029] w-full"></div>
              </div>
              <div className="flex justify-between items-center pt-2 pb-6">
                <div className="flex justify-center items-center gap-1 text-sm font-semibold">
                  <input
                    type="checkbox"
                    id="remember"
                    name="remember"
                    value="remember"
                  />
                  <label for="remember text-sm font-semibold">
                    Remember Information
                  </label>
                </div>
                <Link
                  to="/employer/forgot-password"
                  className="underline cursor-pointer  font-semibold text-sm"
                >
                  Forget Password
                </Link>
              </div>
              <div className=" flex flex-col gap-4">
                <button className="border-[#707070] border rounded-[7px] btnshadow flex gap-2 items-center justify-center w-full py-2">
                  <div className="flex justify-center items-center">
                    <img
                      src="/assets/images/linkedin.png"
                      alt="linkedin"
                      className="w-[25px]"
                    />
                  </div>
                  <p className="font-s-medium text-sm text-opacity-50 text-black font-semibold">
                    Login with LinkedIn
                  </p>
                </button>
                <button className="border-[#707070] border rounded-[7px] btnshadow flex gap-2 items-center justify-center w-full py-2">
                  <div className="flex justify-center items-center">
                    <img
                      src="/assets/images/google.png"
                      alt="linkedin"
                      className="w-[25px]"
                    />
                  </div>
                  <p className="font-s-medium text-sm text-opacity-50 text-black font-semibold">
                    Login with Google
                  </p>
                </button>
                <button className="border-[#707070] border rounded-[7px] btnshadow flex gap-2 items-center justify-center w-full py-2">
                  <div className="flex justify-center items-center">
                    <img
                      src="/assets/images/google.png"
                      alt="linkedin"
                      className="w-[25px]"
                    />
                  </div>
                  <p className="font-s-medium text-sm text-opacity-50 text-black font-semibold">
                    Login with Beta
                  </p>
                </button>
              </div>
              <div className="pt-10 pb-3">
                <Link
                  to="/employer/create-profile"
                  className="cursor-pointer bg-secondary text-white rounded-[7px] btnshadow flex gap-2 items-center justify-center w-full py-3 font-s-medium text-sm "
                >
                  Login
                </Link>
              </div>
              <p className="text-center font-s-medium">
                Don't have an Account?{" "}
                <Link to="/employer/signup" className="text-secondary">
                  SignUp
                </Link>
              </p>
            </div>
            <div
              className="bg-cover bg-no-repeat"
              style={{
                backgroundImage: `url(${"/assets/images/coach-set.png"})`,
              }}
            >
              {/* <img src="/assets/images/employerbanner.png" alt="/" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
