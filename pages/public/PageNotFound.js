import React from "react";
import Footer from "../../components/common/Footer";
import Navbar from "../../components/common/Navbar";

const PageNotFound = () => {
  return (
    <div>
      <Navbar bgcolor />
      <div className="flex justify-center text-6xl text-secondary items-center h-screen">
        404 PAGE
      </div>
      <Footer />
    </div>
  );
};

export default PageNotFound;
