import React from "react";
import CandidateProfile from "../../../components/auth/candidate/CandidateProfile";
import Footer from "../../../components/common/Footer";
import Navbar from "../../../components/common/Navbar";

const CandidateCreateProfile = () => {
  return (
    <div>
      <Navbar bgcolor />
      <div className="mt-[110px]">
        <CandidateProfile />
      </div>
      <Footer />
    </div>
  );
};

export default CandidateCreateProfile;
