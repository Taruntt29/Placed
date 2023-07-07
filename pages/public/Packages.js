import React from "react";
import Footer from "../../components/common/Footer";
import Navbar from "../../components/common/Navbar";
import Banner from "../../components/common/Banner";
import PackageCards from "../../components/common/PackageCards";
const Packages = () => {
  return (
    <div>
      <Navbar bgcolor />

      <Banner
        img="/assets/images/common-banner.png"
        pageTitle="Home - Packages"
        title="Packages"
      />
      <PackageCards />
      <Footer />
    </div>
  );
};

export default Packages;
