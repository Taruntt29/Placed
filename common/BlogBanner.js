import React from "react";

const BlogBanner = ({ title, img, heading }) => {
  return (
    <div>
      <div className="bg-primary pt-36 pb-20 md:px-0 px-5 ">
        <div className="container items-center mx-auto grid grid-cols-1 md:grid-cols-2">
          <div className="space-y-8 md:px-6 md:mx-0 mt-12 md:mt-0">
            <div className="font-s-bold leading-snug text-3xl md:text-5xl text-secondary">
              {title}
            </div>

            <p className="font-s-medium text-xl">{heading}</p>
          </div>
          <img alt="banner-images" src={img} />
        </div>
      </div>
    </div>
  );
};

export default BlogBanner;
