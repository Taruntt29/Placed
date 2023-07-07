import React from "react";
import CoachProfileEducation from "../../../components/auth/coach/CoachProfileEducation";
import Footer from "../../../components/common/Footer";
import Navbar from "../../../components/common/Navbar";

const CoachCreateEducation = () => {
  return (
    <div>
      <Navbar bgcolor />
      <div className="mt-[110px]">
        <CoachProfileEducation />
      </div>
      <Footer />
    </div>
  );
};

export default CoachCreateEducation;
