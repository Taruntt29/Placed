import React from "react";
import Navbar from "../../../components/common/Navbar";
import Footer from "../../../components/common/Footer";
import GetOtp from "../../../components/auth/coach/GetOTP";

const CoachSignupOTP = () => {
  return (
    <div>
      <Navbar bgcolor />
      <div>
        <GetOtp />
      </div>
      <Footer />
    </div>
  );
};

export default CoachSignupOTP;
