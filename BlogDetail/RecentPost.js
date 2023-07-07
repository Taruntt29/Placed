import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { getAllBlogData } from "../../api/publicFunctions";

const RecentPost = () => {
  const [recentPostData, setRecentpostData] = useState([]);
  const getAllRecentBlogs = async () => {
    const { data, status, message } = await getAllBlogData();
    if (status) {
      setRecentpostData(data);
    } else {
      toast(message);
    }
  };

  useEffect(() => {
    getAllRecentBlogs();
  }, []);
  return (
    <div className="container mx-auto md:px-5">
      <div className="md:flex justify-between pt-20 ">
        <p className="text-4xl font-s-bold ">Recent Post</p>
        <Link
          to="/blog"
          className="bg-secondary px-5 md:py-2 py-4 text-white text-sm rounded-lg font-semibold md:mt-0 mt-5"
        >
          Browse All Blog Posts
        </Link>
      </div>
      <div className="grid lg:grid-cols-3   gap-10  lg:px-0 px-5 pt-12 pb-10 container mx-auto">
        {recentPostData.slice(0, 3).map((item) => (
          <div className="shadow-md border border-secondary bg-white rounded-md pb-6 p-2">
            <div>
              {" "}
              <img alt="images" src={item.largeImage} />
            </div>
            <div className=" bg-secondary text-white px-10 py-2 w-[60%] rounded-xl mt-6">
              {item.date}
            </div>
            <div className="lg:pt-5 pt-10 ">
              <h4 className="font-s-bold text-lg">{item.title}</h4>
              <p className="pt-2 text-sm font-s-normal">
                {item.shortDescription}
              </p>
              <p className="pt-2 text-sm font-s-normal">
                {item.longDescription}
              </p>
            </div>
            <div className="flex justify-between items-center pt-4">
              <div className="flex items-center space-x-3">
                <div>
                  <img alt="" src={item.smallImage} className="w-10" />
                </div>
                <div className="text-sm">{item.name}</div>
              </div>
              <div className="text-sm">{item.date}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentPost;
