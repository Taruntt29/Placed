import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
const MillionJob = () => {
  return (
    <div className="bg-[#E3EEFF8F]">
      <div className="py-20  relative container mx-auto ">
        <div className="absolute bottom-6 left-0 hidden md:block">
          <img
            src="/assets/images/left-element.png"
            alt="/"
            className="w-[60%]"
          />
        </div>
        <div className="absolute top-12 -right-8  hidden md:block">
          <img
            src="/assets/images/right-element.png"
            alt="/"
            className="w-[60%]"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 container mx-auto justify-items-center px-5">
          <div className="">
            <img
              src="/assets/images/job-boy.png"
              alt="/"
              className="w-[100%] md:w-[80%]"
            />
          </div>
          <div className=" pt-4">
            <p className="font-s-medium text-secondary text-lg pb-2">
              300k+ Coches
            </p>
            <h3 className="font-s-bold text-4xl pb-6">
              Millions of Jobs,
              <br />
              Find the one that suits you
            </h3>
            <p className="font-s-medium text-[#010101] pb-8 w-[80%]">
              Search all the open positions on the web. Get your own
              personalized salary estimate. Read reviews on over 600,000
              companies worldwide.
            </p>
            <ul className=" flex justify-center items-start gap-5 flex-col">
              <li className="flex justify-start gap-2 items-center ">
                <BsCheckCircleFill className="text-secondary font-s-bold" />
                <span className="font-s-bold">
                  Bring to the table win-win survival
                </span>
              </li>
              <li className="flex justify-start gap-2 items-center">
                <BsCheckCircleFill className="text-secondary font-s-bold" />
                <span className="font-s-bold">
                  Capitalize on low hanging fruit to identify
                </span>
              </li>
              <li className="flex justify-start gap-2 items-center">
                <BsCheckCircleFill className="text-secondary font-s-bold" />
                <span className="font-s-bold">
                  But I must explain to you how all this
                </span>
              </li>
            </ul>

            <Link to="/coach-list">
              <button className="px-5 py-2 bg-secondary text-white mt-10 rounded">
                Connect with Coaches
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MillionJob;
