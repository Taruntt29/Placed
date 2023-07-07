import React from "react";
import Strip from "../../components/common/CompanyListpage/Strip";
import MainBanner from "../../components/common/MainBanner";
import ResumeFaq from "../../components/common/BuildResume/ResumeFaq";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import StripFrame from "../../components/common/CoachListPage/StripFrame";
import FollowSteps from "../../components/common/CoachListPage/FollowSteps";
import TopCoaches from "../../components/common/CoachListPage/TopCoaches";

const CoachList = () => {
  return (
    <div>
      <Navbar bgcolor />
      <MainBanner
        img="/assets/images/coach-banner.png"
        title3="Find A Coach,"
        title2=" Change Your Life."
        desc1="Quickly learn how it works or scroll below to browse services and coaches."
        button="Get Started"
        src="/coach-signup"
      />
      <FollowSteps />
      <TopCoaches />
      <StripFrame />
      <ResumeFaq />
      <Footer />
    </div>
  );
};

export default CoachList;
