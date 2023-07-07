import React from "react";
import CreateProfile from "../../../components/auth/employer/CreateProfile";
import Banner from "../../../components/common/Banner";
import Footer from "../../../components/common/Footer";
import Navbar from "../../../components/common/Navbar";

const EmployerCreateProfile = () => {
  return (
    <div>
      <Navbar bgcolor />

      <Banner
        img="/assets/images/common-banner.png"
        pageTitle="Home - Create Profile"
        title="Create Profile"
      />
      <div className="">
        <CreateProfile />
      </div>
      <Footer />
    </div>
  );
};

export default EmployerCreateProfile;
