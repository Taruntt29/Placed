import React from "react";
import Signup from "../../../components/auth/employer/Signup";
import Footer from "../../../components/common/Footer";
import Navbar from "../../../components/common/Navbar";

const EmployerSignup = () => {
  return (
    <div>
      <Navbar bgcolor />
      <div>
        <Signup />
      </div>
      <Footer />
    </div>
  );
};

export default EmployerSignup;
