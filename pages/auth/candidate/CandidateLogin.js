import React from "react";
import Login from "../../../components/auth/candidate/Login";
import Footer from "../../../components/common/Footer";
import Navbar from "../../../components/common/Navbar";
const CandidateLogin = () => {
  return (
    <div>
      <Navbar bgcolor />
      <div className="pt-[110px]">
        <Login />
      </div>
      <Footer />
    </div>
  );
};

export default CandidateLogin;
