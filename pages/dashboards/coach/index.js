import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../../components/common/Footer";
import CoachNavbar from "../../../components/common/Navbar/CoachNavbar";

const CoachDashboard = () => {
  return (
    <>
      <div className="grid-cols-12 justify-start items-center">
        <CoachNavbar />

        <div className="pt-[110px]">
          <Outlet />
        </div>

        <Footer />
      </div>
    </>
  );
};

export default CoachDashboard;
