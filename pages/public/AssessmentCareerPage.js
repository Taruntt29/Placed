import React from "react";
import AssessmentTest from "../../components/common/AssessmentTest";
import BlogBanner from "../../components/common/BlogBanner";
import BuildResumeSection from "../../components/common/BulidResumeSection";
import CarrerAssessment from "../../components/common/CarrerAssessment";
import Footer from "../../components/common/Footer";
import Navbar from "../../components/common/Navbar";
import RecommendCoaches from "../../components/common/RecommendCoaches";

const AssessmentCareerPage = () => {
  return (
    <div>
      <Navbar bgcolor />

      <div className="pt-32">
        <AssessmentTest />
      </div>
      <BuildResumeSection />
      <div className=" pb-20">
        <div className=" container mx-auto  pb-5">
          <div className="flex justify-between lg:pt-12 lg:px-0 px-5">
            <div className="font-s-bold  text-[18px] ">Recommended Coches</div>
            <div className="text-secondary font-s-medium underline">
              View More
            </div>
          </div>
        </div>

        <RecommendCoaches />
      </div>
      <Footer />
    </div>
  );
};

export default AssessmentCareerPage;
