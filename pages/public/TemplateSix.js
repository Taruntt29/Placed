import React from "react";
import Footer from "../../components/common/Footer";
import Navbar from "../../components/common/Navbar";
import TemplateSixthDetail from "../../components/resumes/TemplateSixthDetails";

const TemplateSix = () => {
  return (
    <>
      <Navbar bgcolor />
      <div className="mt-[150px]">
        <TemplateSixthDetail />
      </div>
      <Footer />
    </>
  );
};

export default TemplateSix;
