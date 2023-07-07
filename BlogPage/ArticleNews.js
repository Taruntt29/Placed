import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getAllArticleNewsData } from "../../api/publicFunctions";

const ArticleNews = () => {
  const [articleNewsData, setArticleNewsData] = useState([]);
  const getAllArticleNews = async () => {
    const { data, status, message } = await getAllArticleNewsData();
    if (status) {
      setArticleNewsData(data);
      console.log("blog data", data);
    } else {
      toast(message);
    }
  };

  useEffect(() => {
    getAllArticleNews();
  }, []);
  const navigate = useNavigate();
  return (
    <div className="md:px-0 px-5 pb-12 container mx-auto">
      <div className=" text-3xl text-center font-s-bold pt-16 ">
        {" "}
        Article & News{" "}
      </div>
      <div className="text-2xl text-center font-s-normal pt-3">
        Get the Latest News, Updates and Tips
      </div>
      <div className="grid md:grid-cols-3  rounded xxll:gap-20">
        {articleNewsData.slice(0, 3).map((item, obj) => (
          <div
            key={obj}
            className="relative rounded-2xl m-4 pt-4 hover:-translate-y-2 duration-500 hover:scale-105 transition-all hover:drop-shadow-xl mx-auto justify-center cardFlex"
          >
            <img
              src={item.largeImage}
              className="shadow mx-auto md:h-96 w-80  object-cover rounded-2xl"
              alt=""
            />
            <div className="absolute  rounded-b-2xl bottom-0  px-4 pb-5 pt-20 text-white text-left space-y-1 w-80 bg-gradient-to-b from-[#FFFFFF00] via-[#0C18537A] to-[#0C1853] ">
              {/* <Link to="/blog-detail"> */}{" "}
              <h2
                className="text-lg font-s-bold cursor-pointer"
                style={{ textShadow: "1px 1px 1px black" }}
                onClick={(e) => {
                  navigate("/article-news-detail", {
                    state: { articlenewsId: item._id },
                  });
                }}
              >
                {item.shortDescription}
              </h2>{" "}
              {/* </Link> */}
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <div>
                    <img alt="" src={item.smallImage} className="w-10" />
                  </div>
                  <div className="text-sm font-s-regular">{item.name}</div>
                </div>
                <div className="text-sm font-s-regular">{item.date}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleNews;
