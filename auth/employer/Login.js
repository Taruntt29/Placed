import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { HiUserGroup, HiUsers, HiUserCircle } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  candidateLoginAPI,
  coachLoginAPI,
  employerLoginAPI,
} from "../../../api/authService";
import { setToken } from "../../../utils/localStorage";
import { ValueChanged } from "../../../redux/actions/flightAction";
import { getAllCoachDataById } from "../../../api/coachFunctions";
import { useEffect } from "react";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // login state
  const [login, setLogin] = useState("Candidate");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [passwordType, setPasswordType] = useState("password");
  const togglePassword = () => {
    passwordType === "password"
      ? setPasswordType("text")
      : setPasswordType("password");
  };

  // console.log(email, password);

  const handleLogin = async () => {
    if (login === "Candidate") {
      // login for candidate
      const { status, data, message } = await candidateLoginAPI({
        emailOrPhone: email,
        password: password,
      });

      // console.log("Console Data", data);

      if (status) {
        await setToken(data.token);
        dispatch(ValueChanged("userDetails", data));
        dispatch(ValueChanged("isLogin", true));
        dispatch(ValueChanged("LoginAs", login));
        toast(message);
        if (data.birthDate) {
          navigate("/candidate/my-profile");
        } else {
          navigate("/candidate-create-profile");
        }
      } else {
        toast(message);
      }
    } else if (login === "Coach") {
      // login for coach
      const { status, data, message } = await coachLoginAPI({
        emailOrPhone: email,
        password: password,
      });
      if (status) {
        await setToken(data.token);
        dispatch(ValueChanged("userDetails", data));
        dispatch(ValueChanged("isLogin", true));
        dispatch(ValueChanged("LoginAs", login));
        toast(message);
        if (
          data.gender &&
          data.addClassXDetails.length > 0 &&
          data.coachingExperience.length > 0
        ) {
          navigate("/coach/my-profile");
        } else if ((data.addClassXDetails.length = 0)) {
          navigate("/coach-create-profile/education");
        } else if ((data.coachingExperience.length = 0)) {
          navigate("/coach-create-profile/experience");
        } else {
          navigate("/coach-create-profile/general");
        }
      } else {
        toast(message);
      }
    } else if (login === "Employer") {
      // login for employer
      const { status, data, message } = await employerLoginAPI({
        emailOrPhone: email,
        password: password,
      });

      if (status) {
        await setToken(data.token);
        dispatch(ValueChanged("userDetails", data));
        dispatch(ValueChanged("isLogin", true));
        dispatch(ValueChanged("LoginAs", login));
        toast(message);
        console.log(data);
        if (data.address) {
          navigate("/employer/my-profile");
        } else {
          navigate("/employer-create-profile");
        }
      } else {
        toast(message);
      }
    }
  };

  return (
    <div className="pt-[110px]">
      <div className="py-20 xxll:py-32 px-5 mx-auto container">
        <div className="signupshadow">
          <div className="grid grid-cols-1 md:grid-cols-2 shadowsignup">
            <div className=" h-full container mx-auto px-3 md:px-10 py-16">
              <div className="text-secondary font-s-medium text-4xl pb-4">
                Login
              </div>
              <div className="pt-4 pb-8 grid lg:grid-cols-3 grid-cols-1 justify-items-center  ">
                <button
                  onClick={() => setLogin("Candidate")}
                  className={`text-xs group  font-s-medium lg:px-[20px] px-[80px] my-2 py-2 flex items-center justify-center rounded-xl shadow-sm shadow-slate-700 ${
                    login == "Candidate"
                      ? "bg-secondary  border-secondary  text-white"
                      : null
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <HiUserGroup size={20} />
                    <span className="">Candidate</span>
                  </div>
                </button>
                <button
                  onClick={() => setLogin("Employer")}
                  className={`text-xs  font-s-medium lg:px-[24px] px-[82px] py-2 my-2 flex items-center justify-center rounded-xl shadow-sm shadow-slate-700 ${
                    login == "Employer"
                      ? "bg-secondary  border-secondary  text-white"
                      : null
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <HiUserCircle size={20} />
                    <span className="">Employer</span>
                  </div>
                </button>
                <button
                  onClick={() => setLogin("Coach")}
                  className={`text-xs   font-s-medium lg:px-[27px] px-[89px] py-2 my-2 flex items-center justify-center rounded-xl shadow-sm shadow-slate-700 ${
                    login == "Coach"
                      ? "bg-secondary  border-secondary  text-white"
                      : null
                  }`}
                >
                  <div className="flex items-center space-x-5">
                    <HiUsers size={20} />
                    <span className="">Coach</span>
                  </div>
                </button>
              </div>

              <div className="flex justify-start w-full space-y-3 flex-col">
                {" "}
                <div className="flex justify-start flex-col space-y-1 w-full">
                  <div className="font-semibold text-[15px]">
                    Enter Email/Phone
                  </div>
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Email/Phone number"
                    className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                  />
                </div>
                <div className="flex justify-start flex-col space-y-1 w-full">
                  <div className="font-semibold text-[15px]">Password</div>
                  <div className="w-full bg-inputcolor px-3 py-2 flex items-center rounded-[7px]">
                    <input
                      type={passwordType}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
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

              <div className="flex justify-between items-center pt-4 pb-2">
                <div className="flex justify-center items-center space-x-1 text-sm font-semibold">
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
                  to="/forgot-password"
                  className="underline cursor-pointer  font-semibold text-sm"
                >
                  Forget Password
                </Link>
              </div>
              {/* <div>
                <div className="flex pb-5 pt-3 space-x-1  text-sm font-semibold">
                  <input
                    type="checkbox"
                    id="remember"
                    name="remember"
                    value="remember"
                  />
                  <label for="remember pt-2 pb-3 text-sm font-semibold">
                    Allow us to send the notification through{" "}
                    <span className="text-secondary">WhatsApp</span> or{" "}
                    <span className="text-secondary">SMS</span>
                  </label>
                </div>
                <div className="flex pb-7  space-x-1  text-sm font-semibold">
                  <input
                    type="checkbox"
                    id="remember"
                    name="remember"
                    value="remember"
                  />
                  <label for="remember pt-2 pb-3 text-sm font-semibold">
                    I agree and understand that{" "}
                    <span className="text-secondary">PPLACD</span> may process,
                    store, and share my personal information in accordance with
                    the Privacy Policy.
                  </label>
                </div>

                <div className="flex space-x-2 justify-center items-center pb-7">
                  <div className="h-[1px] bg-[#00000029] w-full"></div>
                  <div className="text-sm">or</div>
                  <div className="h-[1px] bg-[#00000029] w-full"></div>
                </div>
              </div> */}
              <div className=" flex flex-col items-center justify-center space-y-4 pt-6">
                <button className="border-[#707070] border rounded-[7px] btnshadow flex space-x-2 items-center justify-center w-full py-2">
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
                <button className="border-[#707070] border rounded-[7px] btnshadow flex space-x-2 items-center justify-center w-full py-2">
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
              </div>
              <div className="pt-10 pb-3">
                <button
                  onClick={handleLogin}
                  className="cursor-pointer bg-secondary text-white rounded-[7px] btnshadow flex  items-center justify-center w-full py-3 font-s-medium text-sm "
                >
                  Login
                </button>
              </div>
              <p className="text-center font-s-medium">
                Don't have an Account?{" "}
                <button>
                  <Link to="/commonlogin" className="text-secondary">
                    SignUp
                  </Link>
                </button>
              </p>
            </div>
            <div
              className="bg-cover bg-no-repeat"
              style={{
                backgroundImage: `url(${"/assets/images/employerlogin.png"})`,
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
