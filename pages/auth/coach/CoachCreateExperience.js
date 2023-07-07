import React from "react";
import CoachProfileExperience from "../../../components/auth/coach/CoachProfileExperience";
import Footer from "../../../components/common/Footer";
import Navbar from "../../../components/common/Navbar";

const CoachCreateExperience = () => {
  return (
    <div>
      <Navbar bgcolor />
      <div className="mt-[110px]">
        <CoachProfileExperience />
      </div>
      <Footer />
    </div>
  );
};

export default CoachCreateExperience;
