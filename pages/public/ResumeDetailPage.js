import React from "react";
import Banner from "../../components/common/Banner";
import Footer from "../../components/common/Footer";
import Navbar from "../../components/common/Navbar";
import ResumeDetail from "../../components/common/ResumeDetail";

const ResumeDetailPage = () => {
  return (
    <div>
      <Navbar bgcolor />

      <ResumeDetail />

      <Footer />
    </div>
  );
};

export default ResumeDetailPage;
