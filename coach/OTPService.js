import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { MdMedicalServices } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

import { RiArrowLeftSLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { verifyCoachServiceOtp } from "../../../api/coachFunctions";
import { toast } from "react-toastify";

const OTPService = () => {
  const [passwordType, setPasswordType] = useState("password");
  const togglePassword = () => {
    passwordType === "password"
      ? setPasswordType("text")
      : setPasswordType("password");
  };

  const { userDetails } = useSelector((state) => state.flightReducer);
  const coachId = userDetails._id;
  const [emailOtp, setEmailOtp] = useState("");
  const navigate = useNavigate();
  const verifyOtp = async () => {
    try {
      const response = await verifyCoachServiceOtp({
        coachId: coachId,
        otp: emailOtp,
      });
      if (response.status) {
        console.log(response.data);
        toast(response.message);
        navigate("/coach/service-status");
      } else {
        toast(response.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="bg-inputcolor py-5">
      <div className="lg:px-40 px-0">
        <div className="container mx-auto py-10  ">
          {/* <Link to="/coach/add-services"> */}
          <div className="flex space-x-2 items-center pb-6 lg:px-0 px-5 ">
            {" "}
            <RiArrowLeftSLine className="text-secondary w-5 h-5 " />{" "}
            <p className="text-secondary font-s-medium text-base"> Service</p>{" "}
          </div>
          {/* </Link> */}
          <div className="flex flex-col space-y-10 px-4 md:px-0">
            <div className="bg-white rounded-md py-3 ">
              <div className="lg:flex justify-between items-center pb-4">
                <div className="lg:flex flex-col">
                  <div className="flex space-x-4  px-5 ">
                    <MdMedicalServices
                      className="text-secondary mt-1.5"
                      size={20}
                    />
                    <h3 className="font-bold  text-lg flex pt-1">
                      Add Service
                    </h3>
                  </div>

                  <div className="px-16">
                    Lorem Ipsum is simply dummy text of the printing and{" "}
                  </div>
                </div>
              </div>
              <hr className="w-full h-[0.10rem] bg-inputcolor" />

              <div className="flex justify-start flex-col space-y-1 w-full px-10 py-3">
                <div className="font-semibold text-[15px]">OTP</div>
                <div className="w-full bg-inputcolor px-3 py-2 flex items-center rounded-[7px]">
                  <input
                    type={passwordType}
                    name="emailOtp"
                    value={emailOtp}
                    onChange={(e) => setEmailOtp(e.target.value)}
                    placeholder="Enter OTP"
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
                <div className="py-3 font-s-medium">
                  Didn't get OTP.{" "}
                  <span className="text-secondary"> Resend in 30 Sec</span>
                </div>

                <div className="flex space-x-4 py-3">
                  <button
                    onClick={verifyOtp}
                    className="py-1.5 px-7 text-white bg-secondary text-sm rounded-md"
                  >
                    Verify
                  </button>
                  <button className="py-1.5 px-7 text-white bg-[#7B7B7B] text-sm rounded-md">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTPService;
