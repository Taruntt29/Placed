import React from "react";
import Footer from "../../components/common/Footer";
import Navbar from "../../components/common/Navbar";
import CandidateJobDetail from "../../components/dashboards/candidate/CandidateJobDetail";
import JobDetailPage from "../../components/jobs/JobDetailPage";

const JobDetail = () => {
  return (
    <div>
      <Navbar bgcolor />

      <div className="pt-[130px]">
        <CandidateJobDetail/>
      </div>
      <Footer />
    </div>
  );
};

export default JobDetail;
