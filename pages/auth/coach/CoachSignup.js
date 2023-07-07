import React from "react";
import Signup from "../../../components/auth/coach/Signup";
import Footer from "../../../components/common/Footer";
import Navbar from "../../../components/common/Navbar";
const CoachSignup = () => {
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

export default CoachSignup;
