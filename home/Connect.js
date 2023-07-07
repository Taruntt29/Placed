import React from "react";
import { Link } from "react-router-dom";

const Connect = () => {
  return (
    <div>
      <div className="container mx-auto px-5 py-20">
        <div className="bgcontact rounded-[40px]">
          <div className="grid md:grid-cols-2 grid-cols-1 ">
            <div className="h-full pt-20 pl-8 pr-8 md:pr-0">
              <p className="text-white text-lg font-s-medium pb-2">
                Give your Career a Right Direction
              </p>
              <h3 className="text-4xl font-s-bold text-white pb-7">
                Forge a Career that Exceeds your Ambitions.
              </h3>
              <p className="text-white text-opacity-80 pb-7">
                Get paid easily and security. Use our resources to become
                independent and showcase your professional skills.
              </p>
              <Link to="/employer-list">
                <button className="text-secondary hover:bg-grey hover:text-white duration-500 font-semibold bg-white font-s-medium  px-10 py-4 rounded-md shadow-sm shadow-slate-700">
                  Read More
                </button>
              </Link>

              <div className="flex justify-start items-end gap-4   pt-20 pb-8">
                <div className="">
                  <div className="font-s-bold text-3xl text-white">5M+</div>
                  <div className="text-white text-opacity-80 text-sm">
                    Million daily active users
                  </div>
                </div>
                <div className="">
                  <div className="font-s-bold text-3xl text-white">9K+</div>
                  <div className="text-white text-opacity-80 text-sm">
                    Open Job Positions
                  </div>
                </div>
                <div className="">
                  <div className="font-s-bold text-3xl text-white">2M+</div>
                  <div className="text-white text-opacity-80 text-sm">
                    Million stories shared
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center px-8">
              <img src="/assets/images/girllaptop.png" alt="/" width="80%" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
