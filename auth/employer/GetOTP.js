import React, { useState } from "react";
import { MdOutlineRefresh } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { putEmployerSignupOtpAPI } from "../../../api/authService";
const GetOTP = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [emailotp, setEmailOtp] = useState("");
  const [phoneotp, setPhoneotp] = useState("");

  // Api
  const handleOtp = async () => {
    const response = await putEmployerSignupOtpAPI({
      emailOrPhone: state.email,
      otp: emailotp,
      phoneotp: phoneotp,
    });
    if (response.status) {
      navigate("/login");
      toast(response.data);
    } else {
      toast(response.message);
    }
  };

  return (
    <div className="pt-[110px]">
      <div className="py-20 xxll:py-32 px-5 mx-auto container">
        <div className="signupshadow">
          <div className="grid grid-cols-1 md:grid-cols-2 shadowsignup">
            <div className=" h-full container mx-auto px-3 md:px-10 py-16">
              <div className="text-secondary font-s-medium text-4xl pb-8">
                Employer Signup
              </div>
              <div className="flex justify-start w-full gap-3 flex-col">
                {" "}
                <div className="flex justify-start flex-col gap-1 w-full">
                  <div className="font-semibold text-[15px]">Email OTP</div>
                  <input
                    type="text"
                    value={emailotp}
                    onChange={(e) => setEmailOtp(e.target.value)}
                    placeholder="Enter Email OTP"
                    className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                  />
                </div>
                <div className="flex justify-start flex-col gap-1 w-full">
                  <div className="font-semibold text-[15px]">SMS OTP</div>
                  <input
                    type="text"
                    value={phoneotp}
                    onChange={(e) => setPhoneotp(e.target.value)}
                    placeholder="Enter SMS OTP"
                    className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                  />
                </div>
              </div>

              <div className="text-black lg:pt-4 lg:py-0 py-3 text-center font-s-medium lg:flex items-center justify-center gap-2">
                Didn't get OTP yet?
                <span className="text-secondary flex items-center justify-center cursor-pointer lg:pt-0 pt-3">
                  Resend in 30 Sec <MdOutlineRefresh size={20} />
                </span>
              </div>
              <div className="lg:pt-6 pb-3">
                <button
                  onClick={handleOtp}
                  className="bg-secondary text-white rounded-[7px] btnshadow flex gap-2 items-center justify-center w-full py-3 font-s-medium text-sm "
                >
                  Sign Up
                </button>
              </div>
              <p className="text-center font-s-medium">
                Already have Account? Please{" "}
                <Link to="/login" className="text-secondary cursor-pointer">
                  Login
                </Link>
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

export default GetOTP;
