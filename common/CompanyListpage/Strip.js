import React from "react";
import { Link } from "react-router-dom";

const Strip = () => {
  return (
    <div className="py-20 bluestrip  ">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-items-start md:justify-items-center items-center container mx-auto gap-6 md:gap-0 md:px-0 px-5">
        <div className=" w-[100%]">
          <h3 className="text-white text-3xl">
            Create your{" "}
            <span className="italic font-s-medium">Job Profile</span> for free
            on <span className="italic font-s-medium">PPLACD</span> to explore
            top Jobs applied by your peers!
          </h3>
        </div>
        <div className="">
          <Link to="/commonlogin">
            <button className="text-secondary text-lg bg-white font-s-medium  px-10 py-4 rounded-md shadow-sm shadow-slate-700">
              Register Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Strip;
