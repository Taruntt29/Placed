import React from "react";
import { Link } from "react-router-dom";

const Designecv = ({ img, title1, title2, title3, desc1, desc2, button,src }) => {
  return (
    <div>
      <div className="bg-primary mt-12 ">
        <div className="max-w-[1150px] items-center mx-auto grid grid-cols-1 md:grid-cols-2">
          <div className="space-y-8 px-6 md:mx-0 mt-20 md:mt-0">
            <div className="font-s-bold leading-snug text-3xl md:text-5xl text-black">
              <span className="text-black">{title1}</span>
              <span className="text-secondary">{title3}</span>
              <br className="hidden md:block" />
              {title2}
            </div>

            <p>
              {desc1}
              <br className="hidden md:block" />
              {desc2}
            </p>

            <Link to={src}>
              {" "}
              <button className="bg-secondary text-white px-14 py-3 mt-10 rounded-md">
                {button}
              </button>
            </Link>
          </div>
          <div className="mx-auto">
            <img alt="banner" src={img} className="pt-20 lg:h-[560px] w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Designecv;
