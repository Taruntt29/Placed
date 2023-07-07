import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../../components/common/Footer";
import CandidateNavbar from "../../../components/common/Navbar/CandidateNavbar";

const CandidateDashboard = () => {
  return (
    <>
      <div className="grid-cols-12 justify-start items-center">
        <CandidateNavbar />

        <div className="pt-[110px]">
          <Outlet />
        </div>

        <Footer />
      </div>
    </>
  );
};

export default CandidateDashboard;
