import React from "react";
import { Link } from "react-router-dom";

const StripFrame = () => {
  return (
    <div className="py-20 bluestrip  ">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-items-start md:justify-items-center items-center container mx-auto gap-6 md:gap-0 md:px-0 px-5">
        <div className=" w-[100%]">
          <div className="text-white lg:px-10">
            <h6>300k+ Coches</h6>
            <h3 className="text-4xl py-1 font-s-medium">
              Millions of Coches, Find the one that suits you
            </h3>
            <p className="py-1">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry the standard dummy text ever since the when an printer
              took.
            </p>
          </div>
        </div>
        <div className="">
       <Link to="/coach-signup">
         <button className="text-secondary text-lg bg-white font-s-medium  px-10 py-4 rounded-md shadow-sm shadow-slate-700">
            Find Best Coaches For You
          </button>
          </Link> 
        </div>
      </div>
    </div>
  );
};

export default StripFrame;
