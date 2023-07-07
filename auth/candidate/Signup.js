import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { candidateSignupAPI } from "../../../api/authCandidate";
import { toast } from "react-toastify";

const Signup = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [createPassword, setCreatePassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const handleSignup = async () => {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast("Please Enter Valid Email");
    } else if (value.length < 10) {
      toast("Please enter a valid phone no.");
    } else if (createPassword != confirmPassword) {
      alert("Confirm Password does not match");
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        createPassword
      )
    ) {
      toast("Please enter valid password!!");
    } else {
      try {
        const response = await candidateSignupAPI({
          candidateName: userName,
          email: email,
          phoneNumber: value,
          password: createPassword,
        });
        console.log(response);
        if (response.status) {
          toast(response.message);
          navigate(`/candidate-signup-otp/${email}`);
        } else {
          toast(response.message);
        }
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const [passwordType, setPasswordType] = useState("password");
  const [passwordTypeConfirm, setPasswordTypeConfirm] = useState("password");
  const [value, setValue] = useState();
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
                  <div className="font-semibold text-[15px]">User Name</div>
                  <input
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    type="text"
                    placeholder="User Name"
                    className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                  />
                </div>
                <div className="flex justify-start flex-col gap-1 w-full">
                  <div className="font-semibold text-[15px]">Email</div>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    placeholder="Email"
                    className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                  />

                  {email.length > 0 &&
                  !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? (
                    <span className="text-red-500">Invalid Email Address</span>
                  ) : null}
                </div>
                <div className="flex justify-start flex-col gap-1 w-full mobileinput">
                  <div className="font-semibold text-[15px]">Mobile</div>
                  <PhoneInput
                    placeholder="Mobile Number"
                    defaultCountry="IN"
                    value={value}
                    onChange={setValue}
                    className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                  />
                </div>
                {/* {value.length > 10 ? (
                  <span className="text-red-500">Invalid Phone number </span>
                ) : null}
                 */}
                <div className="flex justify-start flex-col gap-1 w-full">
                  <div className="font-semibold text-[15px]">
                    Create Password
                  </div>
                  <div className="w-full bg-inputcolor px-3 py-2 flex items-center rounded-[7px]">
                    <input
                      value={createPassword}
                      onChange={(e) => setCreatePassword(e.target.value)}
                      type={passwordType}
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
                  {createPassword?.length > 0 &&
                  !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
                    createPassword
                  ) ? (
                    <p className="text-xs text-red-500">
                      Password must contain at least minimum eight characters,
                      at least one uppercase letter, one lowercase letter, one
                      number and one special character
                    </p>
                  ) : null}
                </div>
                <div className="flex justify-start flex-col gap-1 w-full">
                  <div className="font-semibold text-[15px]">
                    Confirm Password
                  </div>
                  <div className="w-full bg-inputcolor px-3 py-2 flex items-center rounded-[7px]">
                    <input
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      type={passwordTypeConfirm}
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
                <div>
                  <div className="flex pb-5 pt-3 space-x-3  text-sm font-semibold">
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
                  <div className="flex pb-7  space-x-3  text-sm font-semibold">
                    <input
                      type="checkbox"
                      id="remember"
                      name="remember"
                      value="remember"
                    />
                    <label for="remember  text-sm font-semibold">
                      I agree and understand that{" "}
                      <span className="text-secondary">PPLACD</span> may
                      process, store, and share my personal information in
                      accordance with the Privacy Policy.
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 justify-center items-center pb-10">
                <div className="h-[1px] bg-[#00000029] w-full"></div>
                <div className="text-sm">or</div>
                <div className="h-[1px] bg-[#00000029] w-full"></div>
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
                {/* <button className="border-[#707070] border rounded-[7px] btnshadow flex gap-2 items-center justify-center w-full py-2">
                  <div className="flex justify-center items-center">
                    <img
                      src="/assets/images/beta.png"
                      alt="linkedin"
                      className="w-[25px]"
                    />
                  </div>
                  <p className="font-s-medium text-sm text-opacity-50 text-black font-semibold">
                    Login with Beta
                  </p>
                </button> */}
              </div>
              <div className="pt-10 pb-3">
                <Link
                  // to="/candidate-signup-otp"
                  onClick={handleSignup}
                  className="cursor-pointer bg-secondary text-white rounded-[7px] btnshadow flex gap-2 items-center justify-center w-full py-3 font-s-medium text-sm "
                >
                  Continue
                </Link>
              </div>
              <p className="text-center font-s-medium">
                Already have Account? Please{" "}
                <Link to="/login" className="text-secondary">
                  Login
                </Link>
              </p>
            </div>
            <div
              className="bg-cover bg-no-repeat"
              style={{
                backgroundImage: `url(${"/assets/images/candidate-signup.png"})`,
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

export default Signup;
