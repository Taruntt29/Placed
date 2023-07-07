import React from "react";
import Footer from "../../components/common/Footer";
import Banner from "../../components/home/Banner";
import CompanySlider from "../../components/home/CompanySlider";
import Connect from "../../components/home/Connect";
// import JobCategory from "../../components/home/JobCategory";
import JobPost from "../../components/home/JobPost";
import MillionJob from "../../components/home/MillionJob";
import OurBlogs from "../../components/home/OurBlogs";
import Steps from "../../components/home/Steps";
import Strip from "../../components/home/Strip";

const Home = () => {
  return (
    <div>
      <Banner />
<div className=" md:pt-24 pt-[27rem]">
<Steps />
</div>
      

      <MillionJob />
      {/* <JobCategory /> */}
      <Connect />
      <JobPost />
      <Strip />
      <CompanySlider />
      <OurBlogs />
      <Footer />
    </div>
  );
};

export default Home;
