import React, { useState } from "react";
import "react-phone-number-input/style.css";
import { RiArrowLeftSLine } from "react-icons/ri";
import CoachProfileGeneral from "./CoachProfileGeneral";
import CoachProfileExperience from "./CoachProfileExperience";
import CoachProfileEducation from "./CoachProfileEducation";

const CoachProfile = () => {
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

      <div className=" md:w-[50%] grid grid-cols-3 rounded  justify-items-center items-center mx-4 border-buttonsome py-2 px-2">
        <div
          onClick={() => setProducts("General")}
          className={`px-5 py-2   text-center  cursor-pointer font-text font-s-regular md:text-base text-sm  w-fit ${
            products == "General"
              ? "font-bold  text-secondary border-secondary border-b-2 "
              : " text-black "
          }`}
        >
          General
        </div>

        <div
          onClick={() => setProducts("Education")}
          className={`px-5 py-2 text-center  font-text font-s-regular cursor-pointer  md:text-base text-sm  w-fit  ${
            products == "Education"
              ? "font-bold  text-secondary border-secondary border-b-2"
              : "  text-black  "
          }`}
        >
          Education
        </div>

        <div
          onClick={() => setProducts("Work Experience")}
          className={`px-5 py-2   text-center  cursor-pointer font-text font-s-normal md:text-base text-sm  w-fit ${
            products == "Work Experience"
              ? "font-bold  text-secondary border-secondary border-b-2  "
              : " text-black "
          }`}
        >
          Experience
        </div>
      </div>

      {products == "General" ? (
        <CoachProfileGeneral products={products} change={setProducts} />
      ) : products == "Education" ? (
        <CoachProfileEducation products={products} change={setProducts} />
      ) : (
        <CoachProfileExperience />
      )}
    </div>
  );
};

export default CoachProfile;
