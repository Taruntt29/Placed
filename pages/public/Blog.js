import React from "react";
import ArticleNews from "../../components/BlogPage/ArticleNews";
import LatestPost from "../../components/BlogPage/LatestPost";
import StripBox from "../../components/BlogPage/StripBox";
import BlogBanner from "../../components/common/BlogBanner";
import Footer from "../../components/common/Footer";
import Navbar from "../../components/common/Navbar";

const Blog = () => {
  return (
    <div>
      <Navbar />
      <div className="">
        <BlogBanner
          img="/assets/images/blog-banner.png"
          title="BLOG"
          heading="Get the Latest News,Updates and Tips"
        />
      </div>
      <ArticleNews />
      <StripBox />
      <LatestPost />
      <Footer />
    </div>
  );
};

export default Blog;
