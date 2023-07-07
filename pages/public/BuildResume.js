import React from "react";
import CreateResume from "../../components/common/BuildResume/CreateResume";
import Designecv from "../../components/common/BuildResume/Designecv";
import ResumeBuilder from "../../components/common/BuildResume/ResumeBuilder";
import ResumeFaq from "../../components/common/BuildResume/ResumeFaq";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import ServicesAvailable from "../../components/common/BuildResume/ServicesAvailable";

const BuildResume = () => {
  return (
    <div>
      <Navbar bgcolor />
      <div className="mt-[110px]">
        <Designecv />
        <CreateResume />
        <ResumeBuilder />
        <ServicesAvailable />
        <ResumeFaq />
      </div>
      <Footer />
    </div>
  );
};

export default BuildResume;
