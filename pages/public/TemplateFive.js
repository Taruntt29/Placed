import React from "react";
import Footer from "../../components/common/Footer";
import Navbar from "../../components/common/Navbar";
import TemplateFiveDetail from "../../components/resumes/TemplateFiveDetails";

const TemplateFive = () => {
  return (
    <>
      <Navbar bgcolor />
      <div className="mt-[150px]">
        <TemplateFiveDetail />
      </div>
      <Footer />
    </>
  );
};

export default TemplateFive;
