import React from "react";

const JobSearch = () => {
  return (
    <div className="-mt-8 md:px-0 md:pt-0 pt-5 px-5 z-20 ">
      <div className=" md:grid md:grid-cols-3  bg-white  rounded-2xl shadowspread p-5 gap-4">
        <div className="col-span-2 grid grid-cols-1 md:grid-cols-4 justify-items-start gap-3  items-center rounded-2xl border border-gray-700 p-3 border-opacity-50">
          <div className="flex flex-col justify-start items-start col-span-1 ">
            <div className="uppercase font-s-medium">What</div>
            <div className="">
              <select className="text-black text-opacity-50 py-2 rounded-md">
                <option className="p-2">Job Title</option>
                <option className="p-2">Developer</option>
                <option className="p-2">Artist</option>
                <option className="p-2">Designer</option>
                <option className="p-2">Freelancer</option>
                <option className="p-2">Accountant</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start col-span-1">
            <div className="uppercase font-s-medium">Type</div>
            <div className="text-black text-opacity-50">
              <select className="py-2 rounded-md">
                <option className="p-2">All Category</option>
                <option className="p-2">FullTime</option>
                <option className="p-2">PartTime</option>
                <option className="p-2">Freelance</option>
                <option className="p-2">Internship</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start col-span-1">
            <div className="uppercase font-s-medium">Location</div>
            <div className="text-black text-opacity-50">
              <select className="py-2 rounded-md">
                <option className="p-2">Location</option>
                <option className="p-2">Gurgaon</option>
                <option className="p-2">Bangalore</option>
                <option className="p-2">Ahmedabad</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col justify-start items-center w-full col-span-1">
            <button className="text-white bg-secondary px-5 py-3 rounded-md w-full">
              Find Jobs
            </button>
          </div>
        </div>
        <div className="col-span-1 flex justify-start md:justify-between items-start flex-col pt-4 md:pt-0">
          <p className="font-s-bold">Trusted By:</p>
          <div className="grid grid-cols-3 gap-3 justify-start items-center">
            <img src="/assets/images/paypal.png" alt="/" />
            <img src="/assets/images/payoneer.png" alt="/" />
            <img src="/assets/images/netflix.png" alt="/" />
          </div>
        </div>
        <div className="text-black font-s-bold w-full col-span-3 pt-2">
          Popular Searches:
          <span className="font-s-normal text-sm ">
            {" "}
            Developer, Designer, Architect, Engineer, PHP, Banking Ios,
            Freelance, Writing, Accountancy
          </span>
        </div>
      </div>
    </div>
  );
};

export default JobSearch;
