import React from "react";
import GetOTP from "../../../components/auth/employer/GetOTP";
import Navbar from "../../../components/common/Navbar";
import Footer from "../../../components/common/Footer";
const EmployerSignupOtp = () => {
  return (
    <div>
      <Navbar bgcolor />
      <div>
        <GetOTP />
      </div>
      <Footer />
    </div>
  );
};

export default EmployerSignupOtp;
