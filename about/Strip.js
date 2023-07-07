import React from "react";
import { Link } from "react-router-dom";

const Strip = () => {
    return (
        <div className="py-20 bluestrip  ">
            <div className="grid grid-cols-1 md:grid-cols-2 justify-items-start md:justify-items-center items-center container mx-auto gap-6 md:gap-0 md:px-0 px-5">
                <div className=" md:w-96 space-y-4">
                    <h3 className="text-white text-3xl font-s-bold">
                        Build your Personal Account Profile
                    </h3>
                    <p className="text-gray-400 text-sm">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry the standard dummy text ever since the when an printer took.
                    </p>
                </div>
                <div className="">
                    <Link to="/build-resume">
                        <button className="text-secondary text-lg bg-white font-s-medium  px-10 py-4 rounded-md shadow-sm shadow-slate-700">
                            Build Your Resume With Us
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Strip;
