import React from "react";
import Strip from "../../components/common/CompanyListpage/Strip";
import MainBanner from "../../components/common/MainBanner";
import ResumeFaq from "../../components/common/BuildResume/ResumeFaq";
import Navbar from "../../components/common/Navbar";
import JobPostCards from "../../components/common/CompanyListpage/JobPostCards";
import GrowingCompanies from "../../components/common/CompanyListpage/GrowingCompanies";
import Footer from "../../components/common/Footer";
import TopCompanies from "../../components/common/CompanyListpage/TopCompanies";

const CompanyList = () => {
  return (
    <div>
      <Navbar bgcolor />
      <MainBanner
        img="/assets/images/company-banner.png"
        title1="Explore "
        title3="Companies"
        title2=" Which Suits You"
        desc1="We think company culture is pretty important. We show you inside offices before you apply to make sure you'll love working there."
        button="Get Started"
        src="/employer-signup"
      />
      <GrowingCompanies />
      <TopCompanies />
      <JobPostCards />
      <Strip />
      <ResumeFaq />
      <Footer />
    </div>
  );
};

export default CompanyList;
