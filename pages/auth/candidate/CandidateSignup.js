import React from "react";

import Signup from "../../../components/auth/candidate/Signup";
import Footer from "../../../components/common/Footer";
import Navbar from "../../../components/common/Navbar";
const CandidateSignup = () => {
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

export default CandidateSignup;
