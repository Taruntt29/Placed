import React from "react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { verifyProceed } from "../../../api/coachFunctions";
import Footer from "../../../components/common/Footer";
import Navbar from "../../../components/common/Navbar";
const WelcomePage = () => {
  const { state } = useLocation();
  const [status, setStatus] = useState(true);
  const navigate = useNavigate();
  console.log(state.email);
  const verifyOtp = async () => {
    try {
      const response = await verifyProceed({
        email: state.email,
        isProceed: status,
      });
      if (response.status) {
        console.log(response.data);
        toast(response.message);
        navigate("/login");
      } else {
        toast(response.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Navbar bgcolor />
      <div className="pt-[110px]">
        <div
          style={{
            backgroundImage: `url(${"/assets/images/common-login.png"})`,
          }}
          className=" bg-cover bg-no-repeat py-28 flex justify-center items-center px-5 md:px-32 "
        >
          <div className="container mx-auto py-20 bg-white  lg:px-28 px-5 w-full h-[100%] ">
            <div className="py-6 bg-secondary rounded-t-2xl flex items-center justify-center">
              <img
                alt="logo-box"
                src="/assets/images/protection.png"
                className="h-[60px]"
              />
            </div>
            <div className="shadow-2xl rounded-b-2xl mt-4">
              <div>
                <h4 className="text-center font-s-medium text-2xl">
                  Welcome to PPLACD
                </h4>
                <h6 className="text-center py-1 font-s-medium">
                  Kick start your journey by creating your account.
                </h6>
                <div className="lg:px-8  px-4 pt-4 text-[15px]">
                  <p>
                    We want to help you to give career advice to the top-notch
                    candidates. Provide your services/ career advice and help
                    them on finding a job, exploring different career paths, and
                    succeeding in their career.
                  </p>
                  <p className="py-1 font-s-medium">
                    {" "}
                    Do you agree that your profile will go for a third party
                    Background verification{" "}
                    <span className="text-secondary font-s-medium">
                      YES or NO ?
                    </span>{" "}
                    <br />
                    If you have any further question regarding joining Please
                    email to{" "}
                    <span className="text-secondary font-s-medium">
                      info@pplacd.com
                    </span>
                  </p>
                </div>
                <div className="px-8 pb-2 flex space-x-5">
                  <div className="flex cursor-pointer">
                    <input
                      type="radio"
                      id="Yes"
                      name="status"
                      className="p-3 text-secondary"
                      checked={status === true}
                      onChange={(e) => setStatus(true)}
                    />
                    <label
                      for="Yes"
                      className="py-3 px-2 font-s-regular  text-base"
                    >
                      Yes
                    </label>
                  </div>
                  <div className="flex cursor-pointer">
                    <input
                      type="radio"
                      id="No"
                      className="text-secondary p-3"
                      name="status"
                      checked={status === false}
                      onChange={(e) => setStatus(false)}
                    />
                    <label
                      for="No"
                      className="py-3 px-2 font-s-regular  text-base"
                    >
                      No
                    </label>
                  </div>
                </div>
                {/* <Link to="/login"> */}{" "}
                <button
                  onClick={verifyOtp}
                  className="bg-secondary text-white mx-8 mb-4 px-8 py-1 rounded-full"
                >
                  Proceed
                </button>
                {/* </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WelcomePage;
