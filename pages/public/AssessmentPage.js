import React from "react";
import BlogBanner from "../../components/common/BlogBanner";
import BuildResumeSection from "../../components/common/BulidResumeSection";
import CarrerAssessment from "../../components/common/CarrerAssessment";
import Footer from "../../components/common/Footer";
import Navbar from "../../components/common/Navbar";
import RecommendCoaches from "../../components/common/RecommendCoaches";

const AssessmentPage = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div className="bg-primary pt-36 pb-20 ">
          <div className="max-w-[1150px] items-center mx-auto grid grid-cols-1 md:grid-cols-2 ">
            <div className="space-y-8 px-6 md:mx-0 mt-12 md:mt-0">
              <div className="font-s-bold leading-snug text-3xl  text-secondary">
                Check your skill level <br />
                <span className="text-black text-4xl">
                  Give skill Assessment
                </span>
              </div>

              <p className="text-xl ">
                Quickly learn how it works or scroll below to browse services
                and coaches.
              </p>
              <button className="px-5 bg-secondary text-white py-2 rounded-md">
                Get Started
              </button>
            </div>
            <img alt="banner-images" src="/assets/images/career-test.png" />
          </div>
        </div>
      </div>

      <CarrerAssessment />
      <BuildResumeSection />
      <div className="lg:pt-0 pt-10 pb-20">
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

export default AssessmentPage;
