import React from "react";
import CoachProfileGeneral from "../../../components/auth/coach/CoachProfileGeneral";
import Footer from "../../../components/common/Footer";
import Navbar from "../../../components/common/Navbar";

const CoachCreateProfile = () => {
  return (
    <div>
      <Navbar bgcolor />
      <div className="mt-[110px]">
        <CoachProfileGeneral />
      </div>
      <Footer />
    </div>
  );
};

export default CoachCreateProfile;
