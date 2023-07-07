import React from "react";

const Banner = ({ img, title }) => {
  return (
    <div className=" bg-black pt-[110px]">
      <div
        className="w-full lg:h-[32vh]  bg-no-repeat bg-center bg-cover rounded-sm bg-secondary"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="py-20">
          <div className=" w-full">
            <h1 className="  space-y-2 fontfamily text-center textshadow  text-xl   lg:text-4xl text-white   font-semibold textshadow ">
              {title}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
