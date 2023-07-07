import React, { useEffect, useState } from "react";
import { GoSearch } from "react-icons/go";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { toast } from "react-toastify";
import { getAllBlogData, getAllTrending } from "../../api/publicFunctions";
import { useNavigate } from "react-router-dom";

const trending = [
  {
    id: 1,
    img: "/assets/images/blog-set.png",
    title: "How to get better agents in New York, USA",
    name: "Sarah Harding",
    blogimage: "/assets/images/test-1.png",
  },
  {
    id: 2,
    img: "/assets/images/blog-set.png",
    title: "How to get better agents in New York, USA",
    name: "Sarah Harding",
    blogimage: "/assets/images/test-1.png",
  },
  {
    id: 3,
    img: "/assets/images/blog-set.png",
    title: "How to get better agents in New York, USA",
    name: "Sarah Harding",
    blogimage: "/assets/images/test-1.png",
  },
  {
    id: 4,
    img: "/assets/images/blog-set.png",
    title: "How to get better agents in New York, USA",
    name: "Sarah Harding",
    blogimage: "/assets/images/test-1.png",
  },
  {
    id: 5,
    img: "/assets/images/blog-set.png",
    title: "How to get better agents in New York, USA",
    name: "Sarah Harding",
    blogimage: "/assets/images/test-1.png",
  },
  {
    id: 6,
    img: "/assets/images/blog-set.png",
    title: "How to get better agents in New York, USA",
    name: "Sarah Harding",
    blogimage: "/assets/images/test-1.png",
  },
  {
    id: 7,
    img: "/assets/images/blog-set.png",
    title: "How to get better agents in New York, USA",
    name: "Sarah Harding",
    blogimage: "/assets/images/test-1.png",
  },
  {
    id: 8,
    img: "/assets/images/blog-set.png",
    title: "How to get better agents in New York, USA",
    name: "Sarah Harding",
    blogimage: "/assets/images/test-1.png",
  },
  {
    id: 9,
    img: "/assets/images/blog-set.png",
    title: "How to get better agents in New York, USA",
    name: "Sarah Harding",
    blogimage: "/assets/images/test-1.png",
  },
];

const LatestPost = () => {
  const navigate = useNavigate();
  const [blogData, setBlogData] = useState([]);
  const getAllBlogs = async () => {
    const { data, status, message } = await getAllBlogData();
    if (status) {
      setBlogData(data);
      console.log("blog data", data);
    } else {
      toast(message);
    }
  };

  useEffect(() => {
    getAllBlogs();
  }, []);

  // trending now api
  const [trendingData, setTrendingData] = useState([]);
  const getAllTrendingData = async () => {
    const { data, status, message } = await getAllTrending();
    if (status) {
      setTrendingData(data);
      console.log("trending data", data);
    } else {
      toast(message);
    }
  };

  useEffect(() => {
    getAllTrendingData();
  }, []);
  return (
    <div className="py-10 container mx-auto lg:px-0 px-5">
      <div className="lg:grid grid-cols-12 gap-8">
        <div className="col-span-8">
          <div className="">
            <h2 className="text-secondary text-2xl font-s-bold">Latest Post</h2>
            <p className="text-lg pt-1">Don't miss the trending news</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-5 pt-8">
            {blogData.slice(0, 6).map((item) => (
              <div className="border border-secondary rounded-2xl h-full p-3">
                <img
                  alt="blogimage"
                  src={item.largeImage}
                  className="w-full h-48 object-cover"
                />

                <button className="py-1 rounded-md px-5 bg-secondary text-white mt-2">
                  {item.date}
                </button>
                <h4 className="text-sm font-s-bold pt-2">{item.title}</h4>
                <p className="text-sm pt-2">{item.shortDescription}</p>
                <p className="text-sm pt-2">
                  {item.longDescription}
                  <span
                    className="text-sm text-secondary pl-2 font-s-medium cursor-pointer"
                    onClick={() =>
                      navigate("/blog-detail", {
                        state: {
                          blogId: item._id,
                        },
                      })
                    }
                  >
                    Read More...
                  </span>
                </p>

                <div className="py-2">
                  <div className="flex items-center space-x-3">
                    <img alt="" src={item.smallimage} className="w-12 object-cover" />
                    <h6 className="text-sm">{item.name}</h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-4">
          <div className="lg:mt-0 mt-8">
            <div className=" group dropdown drop-shadow-2xl flex  text-sm border-[2px]  font-semibold  group relative cursor-pointer items-center justify-center  rounded-md">
              <input
                type="search"
                placeholder="Search Here"
                className="w-full py-2 px-2 rounded-l-full bg-transparent placeholder:font-s-normal"
              />
              <div className=" text-primary rounded-full p-2 m-1">
                <GoSearch className="text-gray-400" />
              </div>
            </div>
          </div>

          <div className="border-2 lg:mt-12 mt-8 rounded-md">
            <h3 className="  border-b-2 py-3 px-3 mx-4">Trending Now</h3>

            <div>
              {trendingData.slice(0, 4).map((item) => (
                <div className="grid grid-cols-12 gap-3 p-3">
                  <div className="col-span-3">
                    {" "}
                    <img
                      alt=""
                      src={item.largeImage}
                      className="w-16 h-16 rounded object-cover"
                    />
                  </div>
                  <div className="col-span-9">
                    <h5
                      className="text-sm font-s-medium cursor-pointer"
                      onClick={(e) => {
                        navigate(`/trending-now-detail/${item._id}`, {
                          state: { TrendingId: item._id },
                        });
                      }}
                    >
                      {item.longDescription}
                    </h5>
                    <p className="text-sm">{item.shortDescription}</p>
                    <div className="flex items-center space-x-4 pt-1">
                      <img
                        alt=""
                        src={item.smallImage}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <h6 className="text-xs">{item.name}</h6>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="pt-8 pb-12">
            <div
              className="bg-cover h-[45vh] w-full"
              style={{
                backgroundImage: `url("assets/images/recruiting.png")`,
              }}
            >
              <div className=" bg-[#2544eea6]  h-[45vh] relative flex md:justify-center rounded-lg ">
                <div>
                  <h3 className=" md:px-8 px-5 pt-16 text-white font-semibold text-4xl font-s-medium">
                    Recruiting?
                  </h3>
                  <p className=" md:px-8 px-5 pt-5 text-white font-s-normal">
                    {" "}
                    Get Best Matched Jobs On your Email. Add Resume NOW!{" "}
                  </p>
                  <div className="px-8 py-3">
                    <button className="bg-white text-secondary px-6 py-1 rounded-md">
                      {" "}
                      Read More{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:flex hidden items-center justify-center pt-16 bg-white px-4 py-3 sm:px-6">
        <div className="flex flex-1 justify-between sm:hidden">
          <a
            href="/job-search"
            className="relative inline-flex items-center rounded-md border bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Previous
          </a>
          <a
            href="/job-search"
            className="relative ml-3 inline-flex items-center rounded-md border bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Next
          </a>
        </div>
        <div className=" flex  items-center justify-between">
          <div>
            <nav
              className="isolate inline-flex gap-2 -space-x-px rounded-md "
              aria-label="Pagination"
            >
              <a
                href="#"
                className="relative inline-flex items-center rounded-l-md  bg-white px-2 py-2 text-sm font-medium text-grey hover:bg-gray-50 focus:z-20"
              >
                <span className="sr-only">Previous</span>
                <BsChevronLeft className="h-5 w-5" aria-hidden="true" />
              </a>
              {/* Current: "z-10 bg-indigo-50 border-secondary text-indigo-600", Default: "bg-white text-grey hover:bg-gray-50" */}
              <a
                href="#"
                aria-current="page"
                className="relative z-10 inline-flex items-center  bg-secondary px-4 py-2 text-sm font-medium text-white focus:z-20"
              >
                1
              </a>
              <a
                href="#"
                className="relative inline-flex items-center  bg-white px-4 py-2 text-sm font-medium text-grey hover:bg-gray-50 focus:z-20"
              >
                2
              </a>
              <a
                href="#"
                className="relative hidden items-center  bg-white px-4 py-2 text-sm font-medium text-grey hover:bg-gray-50 focus:z-20 md:inline-flex"
              >
                3
              </a>
              <span className="relative inline-flex items-center  bg-white px-4 py-2 text-sm font-medium text-gray-700">
                ...
              </span>
              <a
                href="#"
                className="relative hidden items-center bg-white px-4 py-2 text-sm font-medium text-grey hover:bg-gray-50 focus:z-20 md:inline-flex"
              >
                8
              </a>
              <a
                href="#"
                className="relative inline-flex items-center  bg-white px-4 py-2 text-sm font-medium text-grey hover:bg-gray-50 focus:z-20"
              >
                9
              </a>
              <a
                href="#"
                className="relative inline-flex items-center  bg-white px-4 py-2 text-sm font-medium text-grey hover:bg-gray-50 focus:z-20"
              >
                10
              </a>
              <a
                href="#"
                className="relative inline-flex items-center rounded-r-md  bg-white px-2 py-2 text-sm font-medium text-grey hover:bg-gray-50 focus:z-20"
              >
                <span className="sr-only">Next</span>
                <BsChevronRight className="h-5 w-5" aria-hidden="true" />
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestPost;
