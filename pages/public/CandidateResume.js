import React from "react";
import Footer from "../../components/common/Footer";
import Navbar from "../../components/common/Navbar";
import Banner from "../../components/common/Banner";
import Resume from "../../components/common/Resume";

const CandidateResume = () => {
  return (
    <div>
      <Navbar bgcolor />

      <Resume />
      <Footer />
    </div>
  );
};

export default CandidateResume;
