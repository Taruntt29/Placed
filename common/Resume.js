import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { BiChevronUp } from "react-icons/bi";

const ResumeFaq = () => {
  const [select, setSelect] = useState(false);
  const [toggleone, setToggleOne] = useState(false);
  const [toggletwo, setToggleTwo] = useState(false);
  const [togglethree, setToggleThree] = useState(false);

  const handelToggle = () => {
    setSelect(!select);
  };

  const handelToggleOne = () => {
    setToggleOne(!toggleone);
  };

  const handelToggleTwo = () => {
    setToggleTwo(!toggletwo);
  };

  const handelToggleThree = () => {
    setToggleThree(!togglethree);
  };

  return (
    <div>
      <div className=" py-10 md:py-20 max-w-[1150px] mx-auto">
        <div className="text-center font-s-bold text-2xl px-4 md:px-0 md:text-4xl text-black">
          Frequently Asked Questions
        </div>

        <div className="md:my-20 my-8 space-y-6 px-6">
          <div className="border border-gray-200 rounded-md">
            <div className=" p-3 flex justify-between">
              dxfcgvhbjn
              {select ? (
                <BiChevronUp onClick={handelToggle} />
              ) : (
                <BiChevronDown onClick={handelToggle} />
              )}
            </div>
            <div className="grid grid-cols-12">
              <div className={select ? "col-span-6 block" : "hidden"}>
                <label>Course Name</label>
                <input />
              </div>
            </div>
          </div>
          <div className="border border-gray-200 rounded-md">
            <div className=" p-3 flex justify-between">
              dxfcgvhbjn
              {toggleone ? (
                <BiChevronUp onClick={handelToggleOne} />
              ) : (
                <BiChevronDown onClick={handelToggleOne} />
              )}
            </div>
            <div className="grid grid-cols-12">
              <div className={toggleone ? "col-span-6 block" : "hidden"}>
                <label>Course Name</label>
                <input />
              </div>
            </div>
          </div>
          <div className="border border-gray-200 rounded-md">
            <div className=" p-3 flex justify-between">
              dxfcgvhbjn
              {toggletwo ? (
                <BiChevronUp onClick={handelToggleTwo} />
              ) : (
                <BiChevronDown onClick={handelToggleTwo} />
              )}
            </div>
            <div className="grid grid-cols-12">
              <div className={toggletwo ? "col-span-6 block" : "hidden"}>
                <label>Course Name</label>
                <input />
              </div>
            </div>
          </div>
          <div className="border border-gray-200 rounded-md">
            <div className=" p-3 flex justify-between">
              dxfcgvhbjn
              {togglethree ? (
                <BiChevronUp onClick={handelToggleThree} />
              ) : (
                <BiChevronDown onClick={handelToggleThree} />
              )}
            </div>
            <div className="grid grid-cols-12">
              <div className={togglethree ? "col-span-6 block" : "hidden"}>
                <label>Course Name</label>
                <input />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeFaq;
