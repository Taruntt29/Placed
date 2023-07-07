import React from "react";
import ForgotPassword from "../../../components/auth/employer/ForgotPassword";
import Navbar from "../../../components/common/Navbar";
import Footer from "../../../components/common/Footer";
const EmployerForgotPassword = () => {
  return (
    <div>
      <Navbar bgcolor />
      <div className="pt-[110px]">
        <ForgotPassword />
      </div>
      <Footer />
    </div>
  );
};

export default EmployerForgotPassword;
