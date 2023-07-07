import React from "react";

const jobDetail = [
  {
    id: 1,
    iconurl: "/assets/images/icon1.png",
    jobcount: "9,125",
    categoryname: "Business Analyst",
  },
  {
    id: 2,
    iconurl: "/assets/images/icon2.png",
    jobcount: "9,125",
    categoryname: "Business Analyst",
  },
  {
    id: 3,
    iconurl: "/assets/images/icon3.png",
    jobcount: "9,125",
    categoryname: "Business Analyst",
  },
  {
    id: 4,
    iconurl: "/assets/images/icon4.png",
    jobcount: "9,125",
    categoryname: "Business Analyst",
  },
  {
    id: 5,
    iconurl: "/assets/images/icon1.png",
    jobcount: "9,125",
    categoryname: "Business Analyst",
  },
  {
    id: 6,
    iconurl: "/assets/images/icon2.png",
    jobcount: "9,125",
    categoryname: "Business Analyst",
  },
  {
    id: 7,
    iconurl: "/assets/images/icon3.png",
    jobcount: "9,125",
    categoryname: "Business Analyst",
  },
  {
    id: 8,
    iconurl: "/assets/images/icon4.png",
    jobcount: "9,125",
    categoryname: "Business Analyst",
  },
  {
    id: 9,
    iconurl: "/assets/images/icon1.png",
    jobcount: "9,125",
    categoryname: "Business Analyst",
  },
  {
    id: 10,
    iconurl: "/assets/images/icon2.png",
    jobcount: "9,125",
    categoryname: "Business Analyst",
  },
  {
    id: 11,
    iconurl: "/assets/images/icon3.png",
    jobcount: "9,125",
    categoryname: "Business Analyst",
  },
  {
    id: 12,
    iconurl: "/assets/images/icon4.png",
    jobcount: "9,125",
    categoryname: "Business Analyst",
  },
];
const JobCategory = () => {
  return (
    <div className="bg-[#E3EEFF8F]">
      <div className=" py-32 container mx-auto">
        <div className="flex justify-center items-center flex-col gap-2">
          <p className="text-secondary text-xl font-s-medium">
            Jobs by Category
          </p>
          <div className="text-4xl font-s-bold text-center">
            Choose Your Desire Category
          </div>
        </div>
        <div className="grid md:grid-cols-4 grid-cols-2 gap-5 pt-20 px-5">
          {jobDetail.map((item, index) => {
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-5 md:p-10 flex justify-center items-center flex-col gap-3"
              >
                <img src={item.iconurl} alt="/" width={60} />
                <div className="bg-primary text-secondary font-s-medium rounded-md py-1 px-6 text-sm inline-flex">
                  {item.jobcount} Jobs
                </div>
                <div className="font-s-medium text-center">
                  {item.categoryname}
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center items-center pt-16">
          <button className="text-white bg-secondary font-s-medium  px-10 py-4 rounded-md shadow-sm shadow-slate-700 ">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobCategory;
