import React from "react";
import Login from "../../../components/auth/employer/Login";
import Footer from "../../../components/common/Footer";
import Navbar from "../../../components/common/Navbar";
const EmployerLogin = () => {
  return (
    <div>
      <Navbar bgcolor />
      <div>
        <Login />
      </div>
      <Footer />
    </div>
  );
};

export default EmployerLogin;
