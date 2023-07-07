import React from "react";
import Login from "../../../components/auth/coach/Login";
import Footer from "../../../components/common/Footer";
import Navbar from "../../../components/common/Navbar";
const CoachLogin = () => {
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

export default CoachLogin;
