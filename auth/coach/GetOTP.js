import React from "react";
import { useState } from "react";
import { MdOutlineRefresh } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { verifyCoachOtp } from "../../../api/coachFunctions";

const GetOTP = () => {
  const [emailOtp, setEmailOtp] = useState("");
  const [smsOtp, setSmsOtp] = useState("");
  const { state } = useLocation();
  const navigate = useNavigate();
  console.log("state", state);
  const verifyOtp = async () => {
    try {
      const response = await verifyCoachOtp({
        emailOrPhone: state.email,
        otp: emailOtp,
        phoneotp: smsOtp,
      });
      if (response.status) {
        console.log(response.data);
        toast(response.message);
        navigate("/coach-verify", { state: { email: response.data.email } });
      } else {
        toast(response.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="pt-[110px]">
      <div className="py-20 2xl:py-32 px-5 mx-auto container">
        <div className="signupshadow">
          <div className="grid grid-cols-1 md:grid-cols-2 shadowsignup">
            <div className=" h-full container mx-auto px-3 md:px-10 pt-14 pb-14">
              <div className="text-secondary font-s-medium text-4xl pb-8">
                Coach/Mentor Signup
              </div>
              <div className="flex justify-start w-full gap-3 flex-col">
                {" "}
                <div className="flex justify-start flex-col gap-1 w-full">
                  <div className="font-semibold text-[15px]">Email OTP</div>
                  <input
                    type="text"
                    placeholder="Enter Email OTP"
                    value={emailOtp}
                    onChange={(e) => setEmailOtp(e.target.value)}
                    className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                  />
                </div>
                <div className="flex justify-start flex-col gap-1 w-full">
                  <div className="font-semibold text-[15px]">SMS OTP</div>
                  <input
                    type="text"
                    placeholder="Enter SMS OTP"
                    value={smsOtp}
                    onChange={(e) => setSmsOtp(e.target.value)}
                    className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                  />
                </div>
              </div>

              <div className="text-black pt-4 text-center font-s-medium flex items-center justify-center gap-2">
                Didn't get OTP yet?
                <span className="text-secondary flex items-center justify-center cursor-pointer">
                  Resend in 30 sec
                  <MdOutlineRefresh size={20} />
                </span>
              </div>
              <div className="pt-6 pb-3">
                <button
                  onClick={verifyOtp}
                  className="bg-secondary text-white rounded-[7px] btnshadow flex gap-2 items-center justify-center w-full py-3 font-s-medium text-sm "
                >
                  Sign Up
                </button>
              </div>
              <p className="text-center font-s-medium">
                Already have Account? Please{" "}
                <Link
                  to="/employer/login"
                  className="text-secondary cursor-pointer"
                >
                  Login
                </Link>
              </p>
            </div>
            <div
            // className="bg-cover bg-no-repeat"
            // style={{
            //   backgroundImage: `url(${"/assets/images/coach-login.jpg"})`,
            // }}
            >
              <img src="/assets/images/coach-otp.png" alt="Coach" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetOTP;
