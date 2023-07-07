import React from "react";
import Navbar from "../../../components/common/Navbar";
import Footer from "../../../components/common/Footer";
import ResetPassword from "../../../components/auth/employer/ResetPassword";
const EmployerResetPassword = () => {
  return (
    <div>
      <Navbar bgcolor />
      <div className="pt-[110px]">
        <ResetPassword />
      </div>
      <Footer />
    </div>
  );
};

export default EmployerResetPassword;
