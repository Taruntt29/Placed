import React from "react";
import CandidateDetail from "../../../components/candidate/CandidateDetail";
import Banner from "../../../components/common/Banner";
import Footer from "../../../components/common/Footer";
import Navbar from "../../../components/common/Navbar";
const CandidateDetailPage = () => {
  return (
    <div>
      <Navbar bgcolor />

      <div className="pt-[110px]">
        {" "}
        <CandidateDetail />
      </div>
      <Footer />
    </div>
  );
};

export default CandidateDetailPage;
