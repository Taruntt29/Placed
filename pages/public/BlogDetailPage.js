import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { getAllBlogDetailsById } from "../../api/publicFunctions";
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
const BlogDetailPage = () => {
  const { state } = useLocation();
  const [blogData, setBlogData] = useState([]);
  console.log("blogId", state);
  const blogDetailData = async () => {
    const { data, status, message } = await getAllBlogDetailsById(state.blogId);
    if (status) {
      setBlogData(data[0]);
      console.log("blog data", data[0]);
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
      <div className="-mt-40 bg-white w-[90%] container mx-auto md:px-5">
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
                className="w-10"
              />
            </div>
            <div className="text-base font-s-normal">{blogData?.name}</div>
          </div>
          <div className="text-base font-s-normal">{blogData?.date}</div>
        </div>
        <p className="text-justify text-lg  font-s-normal   px-5 py-5">
          {blogData?.shortDescription}
        </p>
        {/* <img
          src="/assets/images/blog-detailimage.png"
          alt=""
          className="pt-10"
        /> */}
        <img src={blogData?.largeImage} alt="" className="pt-10" />

        <div className=" text-justify text-lg font-s-normal  px-5 py-10">
          {blogData?.longDescription}
        </div>
        {/* <div className=" px-5">
          <p className="text-2xl font-s-bold"> Inut odio libero </p>
          <ul className="list-disc pl-5 mt-4 leading-loose font-s-normal text-lg">
            <li>
              {" "}
              A portfolio demonstrating well thought through and polished end to
              end customer
            </li>
            <li>
              5+ years of industry experience in interactive design and / or
              visual design
            </li>
            <li>Excellent interpersonal skills </li>
            <li>
              Aware of trends in mobile, communications, and collaboration
            </li>
            <li>
              Ability to create highly polished design prototypes, mockups, and
              other
            </li>
            <li>
              The ability to scope and estimate efforts accurately and
              prioritize tasks and
            </li>
            <li>History of impacting shipping products with your work</li>
            <li>
              A Bachelor’s Degree in Design (or related field) or equivalent
              professional experience
              <li>
                Proficiency in a variety of design tools such as Figma,
                Photoshop, Illustrator, and Sketch
              </li>
            </li>
          </ul>
        </div>
        <p className="text-justify text-lg font-s-normal  px-5 py-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          ornare pellentesque sollicitudin. Suspendisse potenti. Fusce ex risus,
          iaculis sit amet apien nec, finibus malesuada mi. Proin at turpis eget
          sapien pulvinar luctus. estibulum bibendum pharetra lorem eu aliquam.
          In feugiat placerat risus, ed rutrum neque mattis sit amet. Nullam
          vestibulum ante ac quam tempor, d venenatis velit eleifend. Duis id
          iaculis risus, quis ullamcorper augue. Nunc ristique venenatis ipsum
          at euismod.
        </p> */}
        <div className="pt-[0.10rem]  w-full bg-gray-400"></div>
        <div className="flex justify-end items-center space-x-5 pt-8 md:px-12 px-5">
          <p className="text-lg font-s-bold  ">Share</p>
          <div className="flex gap-4 justify-center items-center ">
            {/* <div className="bg-secondary hover:bg-grey hover:scale-105 duration-500 rounded-full p-2 cursor-pointer ">
              <RiWhatsappFill color="white" size={20} />
            </div>
            <div className="bg-secondary hover:bg-grey hover:scale-105 duration-500 rounded-full p-2 cursor-pointer ">
              <FaFacebookF color="white" size={20} />
            </div>
            <div className="bg-secondary hover:bg-grey hover:scale-105 duration-500 rounded-full p-2 cursor-pointer">
              <FaInstagram color="white" size={20} />
            </div>
            <div className="bg-secondary hover:bg-grey hover:scale-105 duration-500 rounded-full p-2 cursor-pointer">
              <FaTwitter color="white" size={20} />
            </div>
            <div className="bg-secondary hover:bg-grey hover:scale-105 duration-500 rounded-full p-2 cursor-pointer">
              <FaLinkedinIn color="white" size={20} />
            </div> */}
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
        <div className="flex justify-between lg:px-6 px-5 py-8">
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

export default BlogDetailPage;
