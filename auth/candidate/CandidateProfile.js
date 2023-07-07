import React, { useState } from "react";
import { RiArrowLeftSLine } from "react-icons/ri";
import Experience from "./candidateProfile/Experience";
import Education from "./candidateProfile/Education";
import General from "./candidateProfile/General";

const CandidateProfile = () => {
  const [products, setProducts] = useState("General");

  return (
    <div className="container mx-auto md:px-5  md:py-20">
      <div className="flex gap-2 items-center pb-6 lg:px-0 px-5">
        {" "}
        <RiArrowLeftSLine className="text-secondary w-5 h-5 " />{" "}
        <p className="text-secondary font-s-medium text-base">
          {" "}
          Create Profile{" "}
        </p>{" "}
      </div>

      <div className=" md:w-[50%] grid md:grid-cols-3 grid-cols-1   rounded  justify-items-start items-center mx-4 border-buttonsome py-2 px-2  ">
        <div
          onClick={() => setProducts("General")}
          className={`px-5 py-2   text-center  cursor-pointer font-text font-s-regular md:text-base text-sm  w-full ${
            products == "General"
              ? "font-bold  text-secondary border-secondary border-b-2 "
              : " text-black "
          }`}
        >
          General
        </div>

        <div
          onClick={() => setProducts("Education")}
          className={`px-5 py-2 text-center  font-text font-s-regular cursor-pointer  md:text-base text-sm  w-full  ${
            products == "Education"
              ? "font-bold  text-secondary border-secondary border-b-2"
              : "  text-black  "
          }`}
        >
          Education
        </div>

        <div
          onClick={() => setProducts("Work Experience")}
          className={`px-5 py-2   text-center  cursor-pointer font-text font-s-normal md:text-base text-sm  w-full ${
            products == "Work Experience"
              ? "font-bold  text-secondary border-secondary border-b-2  "
              : " text-black "
          }`}
        >
          Work Experience
        </div>
      </div>

      {products == "General" ? (
        <>
          <General />
        </>
      ) : products == "Education" ? (
        <>
          <Education />
        </>
      ) : (
        <>
          <Experience />
        </>
      )}
    </div>
  );
};

export default CandidateProfile;
