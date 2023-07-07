import React, { useState } from "react";
import { MdOutlineRefresh } from "react-icons/md";
import { Link, useParams, useNavigate } from "react-router-dom";
import { candidateVerifyOtp } from "../../../api/authCandidate";
import { toast } from "react-toastify";

const GetOTP = () => {
  let EmailLocation = useParams();
  const navigate = useNavigate();
  const emailCandidate = EmailLocation.email;
  console.log("Details", emailCandidate);

  const [emailOtp, setEmailOtp] = useState("");

  const [mobileOtp, setMobileOtp] = useState("");

  const VerifyOtp = async () => {
    try {
      const response = await candidateVerifyOtp({
        emailOrPhone: emailCandidate,
        otp: emailOtp,
        phoneotp: mobileOtp,
      });
      if (response.status) {
        toast(response.message);
        navigate("/login");
      } else {
        toast(response.message);
      }
    } catch (error) {}
  };

  return (
    <div className="pt-[110px]">
      <div className="py-20 xxll:py-32 px-5 mx-auto container">
        <div className="signupshadow">
          <div className="grid grid-cols-1 md:grid-cols-2 shadowsignup">
            <div className=" h-full container mx-auto px-3 md:px-10 py-16">
              <div className="text-secondary font-s-medium text-4xl pb-8">
                Candidate Signup
              </div>
              <div className="flex justify-start w-full gap-3 flex-col">
                {" "}
                <div className="flex justify-start flex-col gap-1 w-full">
                  <div className="font-semibold text-[15px]">Email OTP</div>
                  <input
                    type="text"
                    placeholder="Enter Email OTP"
                    onChange={(e) => setEmailOtp(e.target.value)}
                    className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                  />
                </div>
                <div className="flex justify-start flex-col gap-1 w-full">
                  <div className="font-semibold text-[15px]">SMS OTP</div>
                  <input
                    type="text"
                    placeholder="Enter SMS OTP"
                    onChange={(e) => setMobileOtp(e.target.value)}
                    className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                  />
                </div>
              </div>

              <div className="text-black pt-4 text-center font-s-medium flex items-center justify-center gap-2">
                Didn't get OTP yet?
                <span className="text-secondary flex items-center justify-center cursor-pointer">
                  Resend <MdOutlineRefresh size={20} />
                </span>
              </div>
              <div className="pt-6 pb-3">
                <button
                  onClick={VerifyOtp}
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
                backgroundImage: `url(${"/assets/images/candidate-get-otp.png"})`,
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
