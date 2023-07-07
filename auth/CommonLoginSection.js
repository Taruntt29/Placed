import React from "react";
import { Link } from "react-router-dom";
const CommonLoginSection = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${"/assets/images/common-login.png"})`,
      }}
      className=" bg-cover bg-no-repeat py-10 md:py-40 flex justify-center items-center px-5 md:px-32 "
    >
      <div className="container mx-auto bg-white rounded-[170px] border-2 border-secondary grid grid-cols-1 md:grid-cols-3 w-full h-[100%] ">
        <div className="flex justify-center items-center flex-col py-32 group hover:bg-secondary hover:duration-300 hover:transition-all text-black hover:text-white rounded-full innershadow-box">
          <img
            src="/assets/images/candidate.png"
            alt="/"
            className="w-[80px]"
          />
          <div className="flex justify-center items-center flex-col gap-1">
            <p className="font-s-normal   text-lg  text-opacity-70 text-center">
              Signup as a{" "}
            </p>
            <p className=" text-3xl font-s-medium text-center">Candidate</p>
            <div className="w-full flex justify-center">
              <Link to="/candidate-signup">
                <button className="bg-secondary group-hover:bg-white group-hover:text-secondary text-white rounded-full font-s-medium px-16 py-2">
                  Signup
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center flex-col rounded-full group innershadow-box group hover:bg-secondary hover:duration-300 hover:transition-all text-black hover:text-white py-32 ">
          <img src="/assets/images/employer.png" alt="/" className="w-[80px]" />
          <div className="flex justify-center items-center flex-col gap-1">
            <p className="font-s-normal  text-lg  text-opacity-70 text-center">
              Signup as a{" "}
            </p>
            <p className=" text-3xl font-s-medium text-center">Employer</p>
            <div className="w-full flex justify-center">
              <Link to="/employer-signup">
                <button className="bg-secondary group-hover:bg-white group-hover:text-secondary text-white rounded-full font-s-medium px-16 py-2">
                  Signup
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center flex-col rounded-full group innershadow-box hover:bg-secondary hover:duration-300 hover:transition-all text-black hover:text-white py-32">
          <img src="/assets/images/coach.png" alt="/" className="w-[80px]" />
          <div className="flex justify-center items-center flex-col gap-1">
            <p className="font-s-normal text-lg  text-opacity-70 text-center">
              Signup as a{" "}
            </p>
            <p className="text-3xl font-s-medium text-center">Coach</p>
            <div className="w-full flex justify-center">
              <Link to="/coach-signup">
                <button className="bg-secondary group-hover:bg-white group-hover:text-secondary text-white rounded-full font-s-medium px-16 py-2">
                  Signup
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonLoginSection;
