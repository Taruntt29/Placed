import React from "react";
import { Link } from "react-router-dom";

const Strip = () => {
  return (
    <div className="py-20 bluestrip ">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-items-start md:justify-items-center items-center  mx-auto gap-6 md:gap-0 md:px-2 px-5">
        <div className=" w-[100%] container md:px-16">
          <p className="font-s-normal text-white text-lg font-semibold pb-2">
            Explore New Life
          </p>
          <h3 className="font-s-bold text-3xl text-white pb-4">
            Build your personal account profile
          </h3>
          <p className=" text-white">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled
          </p>
        </div>
        <div className="">
          <Link to="/build-resume">
            <button className="text-secondary bg-white font-s-medium  md:px-20 px-10 py-4 rounded-md shadow-sm shadow-slate-700">
              Build Your Resume with us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Strip;
