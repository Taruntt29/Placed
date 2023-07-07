import React, { useEffect , useState } from "react";
import Banner from "../../../components/common/Banner";
import Footer from "../../../components/common/Footer";
import Navbar from "../../../components/common/Navbar";
import CoachList from "../../../components/Coach/CoachList";
import { candidateCoachList } from "../../../api/authCandidate";

const CoachListPage = () => {

 
  return (
    <>
      <Navbar bgcolor />
      {/* <Banner
  img="/assets/images/common-banner.png"
  title=" Coach List "
/> */}
      <div className="pt-[110px]">
        <CoachList />
      </div>
      <Footer />
    </>
  );
};
export default CoachListPage;
