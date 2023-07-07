import React from "react";
import Navbar from "../../../components/common/Navbar";
import Footer from "../../../components/common/Footer";
import EnterOtp from "../../../components/auth/employer/EnterOtp";
const EmployerEnterOTP = () => {
  return (
    <div>
      <Navbar bgcolor />
      <div className="pt-[110px]">
        <EnterOtp />
      </div>
      <Footer />
    </div>
  );
};

export default EmployerEnterOTP;
