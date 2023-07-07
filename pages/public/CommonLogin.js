import React from "react";
import CommonLoginSection from "../../components/auth/CommonLoginSection";
import Footer from "../../components/common/Footer";
import Navbar from "../../components/common/Navbar";

const CommonLogin = () => {
  return (
    <div>
      <Navbar bgcolor />
      <div className="pt-[110px] ">
        <CommonLoginSection />
      </div>
      <Footer />
    </div>
  );
};

export default CommonLogin;
