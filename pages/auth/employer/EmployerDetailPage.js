import React from "react";
import Banner from "../../../components/common/Banner";
import Footer from "../../../components/common/Footer";
import Navbar from "../../../components/common/Navbar";
import EmployerDetail from "../../../components/employer/EmployerDetail";

const EmployerDetailPage = () => {
  return (
    <div>
      <Navbar bgcolor />

      <div className="pt-[110px]">
        <EmployerDetail />
      </div>
      <Footer />
    </div>
  );
};

export default EmployerDetailPage;
