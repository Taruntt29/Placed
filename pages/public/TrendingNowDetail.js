import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import {
  getAllBlogDetailsById,
  getAllTrending,
} from "../../api/publicFunctions";
import BlogDetailBanner from "../../components/BlogDetail/BlogDetailBanner";
import RecentPost from "../../components/BlogDetail/RecentPost";
import Footer from "../../components/common/Footer";
import Navbar from "../../components/common/Navbar";
import RecommendCoaches from "../../components/common/RecommendCoaches";
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
const TrendingNowDetail = () => {
  const { state } = useLocation();
  const [blogData, setBlogData] = useState([]);
  console.log("blogId", state);
  const blogDetailData = async () => {
    const { data, status, message } = await getAllTrending(state.TrendingId);
    if (status) {
      setBlogData(data[0]);
      console.log("trending data", data[0]);
    } else {
      toast(message);
    }
  };
  useEffect(() => {
    blogDetailData();
  }, []);

  return (
    <div>
      <Navbar bgcolor />
      <BlogDetailBanner img="/assets/images/blog-detail-banner.png" />
      {/* blog detail--start */}
      <div className="-mt-40 bg-white w-[90%] container mx-auto">
        <div className="text-center text-4xl font-s-bold pt-12">
          {blogData?.title}
        </div>
        <div className="flex md:flex-row flex-col justify-between items-center md:w-[30%] w-[40%] mx-auto pt-6 ">
          <div className="flex md:flex-row flex-col items-center space-x-3 ">
            <div>
              <img
                alt=""
                // src="/assets/images/blog-person.png"
                src={blogData?.smallImage}
                className="w-10 h-10 rounded-full"
              />
            </div>
            <div className="text-base font-s-normal">{blogData?.name}</div>
          </div>
          <div className="text-base font-s-normal">{blogData?.date}</div>
        </div>
        <p className="text-justify text-lg  font-s-normal   px-5 py-5">
          {blogData?.shortDescription}
        </p>

        <img src={blogData?.largeImage} alt="" className="pt-10" />

        <div className=" text-justify text-lg font-s-normal  px-5 py-10">
          {blogData?.longDescription}
        </div>

        <div className="pt-[0.10rem]  w-full bg-gray-400"></div>
        <div className="flex justify-end items-center space-x-5 pt-8 md:px-12 px-5">
          <p className="text-lg font-s-bold  ">Share</p>
          <div className="flex gap-4 justify-center items-center ">
            <WhatsappShareButton
              url={window.location.href}
              separator=" "
              title={blogData?.shortDescription}
              hashtag="#pplacd"
            >
              <WhatsappIcon size={32} round />
            </WhatsappShareButton>

            <FacebookShareButton
              url={window.location.href}
              quote={blogData?.shortDescription}
              hashtag="#pplacd"
            >
              <FacebookIcon size={32} round />
            </FacebookShareButton>

            <TwitterShareButton
              url={window.location.href}
              title={blogData?.shortDescription}
              hashtag={["#pplacd", "#article", "#news"]}
            >
              <TwitterIcon size={32} round />
            </TwitterShareButton>
            <LinkedinShareButton
              source={window.location.href}
              title={blogData?.shortDescription}
              summary={blogData?.longDescription}
              hashtag="#pplacd"
            >
              <LinkedinIcon size={32} round />
            </LinkedinShareButton>
          </div>
        </div>
      </div>
      {/* blog details--close */}
      <RecentPost />

      <div className=" container mx-auto">
        <div className="flex justify-between lg:px-0 px-5 py-8">
          <div className="font-s-bold  lg:text-[18px] text-sm">
            Recommended Coaches
          </div>
          <Link to="/coach-list">
            <div className="text-secondary font-s-medium underline">
              View More
            </div>
          </Link>
        </div>
      </div>

      <div className="pb-20">
        <RecommendCoaches />
      </div>

      <Footer />
    </div>
  );
};

export default TrendingNowDetail;
