import React from "react";
import BlogBanner from "../../components/common/BlogBanner";
import Faq from "../../components/common/Faq";
import Footer from "../../components/common/Footer";
import Navbar from "../../components/common/Navbar";

const FaqPage = () => {
  return (
    <div>
      <Navbar />
      <div className="">
        <BlogBanner
          img="/assets/images/faq.png"
          title="FAQ"
          heading="Lorem Ipsum is simply dummy text of the printing andtypesetting industry the standard"
        />
      </div>
      <Faq />
      <Footer />
    </div>
  );
};

export default FaqPage;
