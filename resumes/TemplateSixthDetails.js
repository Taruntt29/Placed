import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { FaBeer } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { IoEarthOutline } from "react-icons/io5";

const TemplateSixthDetail = () => {
  const tablearrskill = [
    {
      id: "1",
      skill: "Conflict Resolution",
    },

    {
      id: "2",
      skill: "Excellent Communication Skills",
    },

    {
      id: "3",
      skill: "Troubleshooting",
    },

    {
      id: "4",
      skill: "Service and Support",
    },
    {
      id: "5",
      skill: "Great Attention to Data",
    },
  ];

  const tablearrskills = [
    {
      id: "1",
      skill: "Manual Painting",
    },

    {
      id: "2",
      skill: " Photography",
    },

    {
      id: "3",
      skill: " Football",
    },

    {
      id: "4",
      skill: " Swimming",
    },
  ];

  const tablearrexp = [
    {
      id: "1",
      collegename: "Beaudoin College",
      subject: "COLLEGE OF MEDIA, COMMUNICATION",
      point: "Maintained a 3.6 GPA",
    },
    { id: "2", point: "Consistent dean's lister" },
    { id: "3", point: "Features editor of the college newspaper" },
    { id: "4", point: "Varsity member of the swimming team for 3years" },
  ];

  const internship = [
    {
      id: "1",
      collegename: "Customer Service Lead",
      subject: "REALLYGREATSITE TELECOMMUNICATIONS",
      point: "Maintained a 3.6 GPA",
    },
    {
      id: "2",
      point: "Addressed customer service inquiries in a timely fashion",
    },
    { id: "3", point: "Achieved a customer satisfaction rating of 98%" },
    { id: "4", point: "Provided input in improving internal processes" },
  ];

  const certifications = [
    {
      id: "1",
      collegename: "Customer Service Agent",
      subject: "REALLYGREATSITE TECH SOLUTIONS",
      point: "Maintained a 3.6 GPA",
    },
    {
      id: "2",
      point: "Addressed customer service inquiries in a timely fashion",
    },
    { id: "3", point: "Achieved a customer satisfaction rating of 98%" },
    { id: "4", point: "Provided input in improving internal processes" },
  ];

  return (
    <div className="bg-white pb-12">
      <div className="  relative container mx-auto shadow-2xl ">
        <div className="grid grid-cols-5 bg-[#eae7dc] gap-6">
          <div className="bg-[#BAB098] col-span-2 rounded-r-3xl">
            <div className="px-10 pt-10">
              <p className="text-7xl font-s-bold">
                Olivia
                <br />
              </p>
              <span className="text-3xl">Customer Service</span>
            </div>
            <img
              src="/assets/images/person4.png"
              alt=""
              className=" bg-white w-96 h-80 mx-auto rounded-tr-[50px]  mt-5 "
            />

            <div className="pt-4 px-5">
              <h3 className="text-black text-2xl py-4 uppercase font-semibold  ">
                Contact
              </h3>
              <div className="flex items-center py-2 gap-5">
                {" "}
                <AiOutlineMail className="bg-black text-white p-1 w-10 h-10 rounded-full" />{" "}
                <p className="text-black font-semibold">
                  hello@reallygreatsite.com
                </p>
              </div>

              <div className="flex items-center gap-5 py-2">
                {" "}
                <IoEarthOutline className="bg-black text-white  p-0.5 w-10 h-10 rounded-full" />{" "}
                <p className="text-black font-semibold">
                  www.reallygreatsite.com
                </p>
              </div>
              <div className="flex items-center gap-5 py-2">
                {" "}
                <BsTelephone className="bg-black text-white  p-1 w-10 h-10 rounded-full" />{" "}
                <p className="text-black font-semibold">+123-456-7890</p>
              </div>

              <div className="flex items-center gap-5 py-2">
                {" "}
                <MdLocationOn className="bg-black text-white  p-0.5 w-10 h-10 rounded-full" />{" "}
                <p className="text-black font-semibold">
                  123 Anywhere St., Any City
                </p>
              </div>
            </div>

            <div className="pt-7 pb-10 pl-7">
              <h3 className="text-black text-2xl font-semibold uppercase py-2">
                Skills
              </h3>

              {tablearrskill.map((item, index) => {
                return (
                  <ul className="decoration-none list-disc pt-1 ml-4">
                    <li className="text-black">{item.skill}</li>
                  </ul>
                );
              })}
            </div>
          </div>
          <div className="bg-[#eae7dc] col-span-3 pl-16">
            <div className="flex flex-col justify-start items-start pt-10">
              <div className="">
                <p className="pt-7 text-lg px-5 font-semibold">
                  I'm an experienced customer service representative with a
                  verifiable track record of resolving complex issues quickly
                  and winning customer loyalty.
                </p>
              </div>
              <div className="pt-7 pb-7 bg-[#4d4535] mt-20 rounded-tl-3xl w-full">
                <div className=" ">
                  <h3 className="text-white text-2xl font-semibold px-16 py-4">
                    EDUCATION
                  </h3>

                  {tablearrexp.map((item, index) => {
                    return (
                      <div className="px-16 text-white">
                        <div className="">
                          <p className="font-s-bold text-xl">
                            {item.collegename}
                          </p>
                          <p className="font-semibold">{item.subject}</p>
                        </div>
                        <ul className="decoration-none list-disc pt-1 ml-4">
                          <li className="text-">{item.point}</li>
                        </ul>
                      </div>
                    );
                  })}
                </div>
                <div className="py-2">
                  <h3 className="text-white text-2xl font-semibold px-16 py-4">
                    INTERNSHIPS
                  </h3>

                  {internship.map((item, index) => {
                    return (
                      <div className="px-16 text-white">
                        <div className="">
                          <p className="font-s-bold text-xl">
                            {item.collegename}
                          </p>
                          <p className="font-semibold">{item.subject}</p>
                        </div>
                        <ul className="decoration-none list-disc pt-1 ml-4">
                          <li className="text-">{item.point}</li>
                        </ul>
                      </div>
                    );
                  })}
                </div>

                <div className="pt-2 pb-10">
                  <h3 className="text-white text-2xl font-semibold px-16 py-4">
                    CERTIFICATIONS
                  </h3>

                  {certifications.map((item, index) => {
                    return (
                      <div className="px-16 text-white">
                        <div className="">
                          <p className="font-s-bold text-xl">
                            {item.collegename}
                          </p>
                          <p className="font-semibold">{item.subject}</p>
                        </div>
                        <ul className="decoration-none list-disc pt-1 ml-4">
                          <li className="text-">{item.point}</li>
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateSixthDetail;
