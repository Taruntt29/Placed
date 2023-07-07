import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../../components/common/Footer";
import DashboardNavbar from "../../../components/common/Navbar/DashboardNavbar";

const EmployerDashboard = () => {
  return (
    <>
      <div className="grid-cols-12 justify-start items-center">
        <DashboardNavbar />

        <div className="pt-[110px]">
          <Outlet />
        </div>

        <Footer />
      </div>
    </>
  );
};

export default EmployerDashboard;
