import React from "react";
import Heading from "../common/Heading";
import { Link } from "react-router-dom";
const OurBlogs = () => {
  return (
    <div className="bgblog">
      <div className="pb-10 pt-20">
        <div className="pb-5">
          <Heading title="Our Blogs" subtitle="Latest Article" dark />
        </div>
        <div className="grid  md:grid-cols-5 container justify-self-end mx-auto pt-10 pb-20 gap-32 md:gap-20">
          <div className="relative group md:col-span-2  px-5 md:px-0">
            <div className="relative justify-center md:justify-end items-center w-full md:w-[100%]">
              <div className=" image-wrapper shine relative rounded-[20px] w-[100%] shadow-md shadow-black">
                <img
                  src="/assets/images/blogbanner.png"
                  alt="/"
                  className=" rounded-[20px] "
                />
              </div>
              <div className="absolute -bottom-20 ">
                <div className="relative bg-secondary text-white rounded-[20px] w-[93%] mx-auto">
                  <div className="absolute bg-grey text-white text-xs px-6 py-3 rounded-[12px] ml-6 -top-5">
                    Sept 05,2022
                  </div>
                  <div className="pt-8 pb-6 px-6">
                    <p className="font-s-medium pb-3 text-base">
                      How to convince recruiters and get your dream job. Get
                      behind the wheel!
                    </p>
                    <Link
                      to="/blog"
                      className="underline font-s-bold hover:text-grey cursor-pointer duration-500"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-3 flex flex-col justify-start items-start gap-6 px-5 md:px-0">
            <div className="bg-white rounded-[14px] relative  ">
              <div className="relative pb-8">
                <img
                  src="/assets/svg/bluebadge.svg"
                  alt="badge"
                  className="absolute -left-[0.85rem] top-4 z-0"
                />
                <div className="flex  absolute top-[1.6rem] justify-between">
                  <p className="font-s-medium text-white z-10 ">
                    Sept 05, 2022
                  </p>
                  <h6 className="font-s-medium px-12 font-semibold">
                    By <span className="text-secondary">Davish Wish</span>
                  </h6>
                </div>
              </div>
              <div className="px-5 pt-8 pb-4">
                <h3 className="font-s-medium pb-3 font-semibold">
                  Job Board is the most important sector in the world
                </h3>
                <p className="font-s-normal pb-3 font-semibold text-sm">
                  New chip traps clusters of migrating tumor cells
                  asperiortenetur, blanditiis odit.
                </p>
                <Link
                  to="/blog"
                  className="underline text-secondary font-s-bold hover:text-black duration-500"
                >
                  Read More
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-[14px] relative  ">
              <div className="relative pb-8">
                <img
                  src="/assets/svg/bluebadge.svg"
                  alt="badge"
                  className="absolute -left-[0.85rem] top-4 z-0"
                />
                <div className="flex  absolute top-[1.6rem] justify-between">
                  <p className="font-s-medium text-white z-10 ">
                    Sept 05, 2022
                  </p>
                  <h6 className="font-s-medium px-12 font-semibold">
                    By <span className="text-secondary">Davish Wish</span>
                  </h6>
                </div>
              </div>
              <div className="px-5 pt-8 pb-4">
                <h3 className="font-s-medium pb-3 font-semibold">
                  Job Board is the most important sector in the world
                </h3>
                <p className="font-s-normal pb-3 font-semibold text-sm">
                  New chip traps clusters of migrating tumor cells
                  asperiortenetur, blanditiis odit.
                </p>
                <Link
                  to="/blog"
                  className="underline text-secondary font-s-bold hover:text-black duration-500"
                >
                  Read More
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-[14px] relative  ">
              <div className="relative pb-8">
                <img
                  src="/assets/svg/bluebadge.svg"
                  alt="badge"
                  className="absolute -left-[0.85rem] top-4 z-0"
                />
                <div className="flex  absolute top-[1.6rem] justify-between">
                  <p className="font-s-medium text-white z-10 ">
                    Sept 05, 2022
                  </p>
                  <h6 className="font-s-medium px-12 font-semibold">
                    By <span className="text-secondary">Davish Wish</span>
                  </h6>
                </div>
              </div>
              <div className="px-5 pt-8 pb-4">
                <h3 className="font-s-medium pb-3 font-semibold">
                  Job Board is the most important sector in the world
                </h3>
                <p className="font-s-normal pb-3 font-semibold text-sm">
                  New chip traps clusters of migrating tumor cells
                  asperiortenetur, blanditiis odit.
                </p>
                <Link
                  to="/blog"
                  className="underline text-secondary font-s-bold hover:text-black duration-500"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurBlogs;
