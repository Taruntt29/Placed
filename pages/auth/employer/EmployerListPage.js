import React from "react";
import Footer from "../../../components/common/Footer";
import Navbar from "../../../components/common/Navbar";
import EmployerList from "../../../components/employer/EmployerList";

const EmployerListPage = () => {
  return (
    <>
      <Navbar bgcolor />

      <div className="pt-[110px]">
        <EmployerList />
      </div>
      <Footer />
    </>
  );
};

export default EmployerListPage;
