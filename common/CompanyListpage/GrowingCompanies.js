import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";
const GrowingCompanies = () => {
  const data = [
    {
      id: 1,
      img: "/assets/images/company-1.png",
      title: "Google Technology company",
      desc: " Client Services , Consumer Goods & Services , Travel and Hospitality Large SizeSt. Louis, MO",
    },
    {
      id: 2,
      img: "/assets/images/company-2.png",
      title: "Google Technology company",
      desc: " Client Services , Consumer Goods & Services , Travel and Hospitality Large SizeSt. Louis, MO",
    },
    {
      id: 3,
      img: "/assets/images/company-3.png",
      title: "Google Technology company",
      desc: " Client Services , Consumer Goods & Services , Travel and Hospitality Large SizeSt. Louis, MO",
    },
  ];

  return (
    <>
      <div className="lg:py-24 py-5 relative container mx-auto mb-20">
        <div className="flex flex-col gap-8 md:gap-0 justify-center items-center container mx-auto px-5 py-10">
          <p className="text-secondary font-s-medium">Companies</p>
          <div className="font-s-bold text-3xl ">Fast Growing Companies </div>
        </div>
        <div className="absolute -bottom-10 left-0 hidden md:block ">
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 container mx-auto justify-items-center px-5 ">
          {data.map((item) => (
            <div className="shadow-2xl  rounded-b-lg ">
              <img alt="top-company" src={item.img} />
              <div className="bg-white rounded-b-md px-4 py-3">
                <h4 className="font-s-medium text-lg">{item.title}</h4>
                <p className="text-sm pt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default GrowingCompanies;
