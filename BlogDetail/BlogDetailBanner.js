import React from "react";

const BlogDetailBanner = ({ img, smalltitle, title }) => {
  return (
    <div className="">
      <div
        className="w-full md:h-[80vh] h-[50vh] bg-no-repeat bg-cover bg-center  rounded-sm "
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="flex flex-col items-center justify-center md:py-40 py-48 md:px-0 px-5">
          <div className=" w-full">
            <h1 className="md:text-8xl text-4xl text-white text-center pt-5 md:px-60 uppercase font-s-bold ">
              {title}
            </h1>
            <h3 className="  pt-6 space-y-2 fontfamily text-center textshadow text-xl font-s-normal tracking-wider text-white  textshadow ">
              {smalltitle}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailBanner;
