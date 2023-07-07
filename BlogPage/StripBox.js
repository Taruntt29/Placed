import React from "react";
import { Link } from "react-router-dom";

const StripBox = () => {
  return (
    <div className="py-20 bluestrip  ">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-items-start md:justify-items-center items-center  mx-auto gap-6 md:gap-0 md:px-2 px-5">
        <div className=" w-[100%] md:px-16">
          <p className="font-s-normal text-white text-lg font-semibold pb-2">
            Explore New Life
          </p>
          <h3 className="font-s-bold text-3xl text-white pb-4">
            Build your personal account profile
          </h3>
        </div>
        <div className="flex items-end justify-end">
          <Link to="/build-resume">
            <button className="text-secondary bg-white font-s-medium  px-10 py-4 rounded-md shadow-sm shadow-slate-700">
              Build Your Resume with us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StripBox;
