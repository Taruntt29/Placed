import React from "react";
import Footer from "../../components/common/Footer";
import Navbar from "../../components/common/Navbar";
import Jobs from "../../components/jobs/Jobs";

const JobsGrid = () => {
  return (
    <div>
      <Navbar bgcolor />

      <div className="pt-[110px]">
        <Jobs />
      </div>
      <Footer />
    </div>
  );
};

export default JobsGrid;
