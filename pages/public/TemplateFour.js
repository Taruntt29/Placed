import React from "react";
import Footer from "../../components/common/Footer";
import Navbar from "../../components/common/Navbar";
import TemplateFourDetail from "../../components/resumes/TemplateFourDetail";

const TemplateFour = () => {
  return (
    <div>
      <Navbar bgcolor />
      <div className="mt-[150px]">
        <TemplateFourDetail />
      </div>
      <Footer />
    </div>
  );
};

export default TemplateFour;
