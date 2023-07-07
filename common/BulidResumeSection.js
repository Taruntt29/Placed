import React from "react";
import { BsUpload } from "react-icons/bs";

const BuildResumeSection = () => {
  return (
    <div className="bg-[#E3EEFF8F] ">
      <div className="text-center py-4">
        <h5 className="text-secondary text-lg font-s-medium">
          Resume On One Click
        </h5>
        <h2 className="text-2xl font-s-bold">Build Your Resume</h2>
      </div>
      <div className="py-3 relative container mx-auto ">
        <div className="absolute bottom-6 left-0 hidden md:block">
          <img
            src="/assets/images/left-element.png"
            alt="/"
            className="w-[60%]"
          />
        </div>

        <div className="container mx-auto ">
          <div className="grid lg:grid-cols-2 gap-10 py-5 lg:px-0 px-5">
            <div>
              <img
                alt="build-resume"
                src="/assets/images/build-resume.png"
                className="lg:w-[60%]"
              />
            </div>
            <div className="bg-secondary/10  rounded-3xl  ">
              <div className="p-10 space-y-3 mr-5 pr-5 -mt-5 bg-white h-full rounded-3xl ">
                <h4 className="text-secondary text-md font-bold">
                  Explore New Life
                </h4>
                <h1 className="text-black font-bold text-3xl">
                  Build your personal account profile
                </h1>
                <p className="text-gray-700 lg:text-center text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <button className="bg-secondary px-5 py-3 rounded text-white flex items-center ">
                  Build Your Resume <BsUpload className="ml-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildResumeSection;
