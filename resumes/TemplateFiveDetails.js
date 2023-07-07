import React from "react";
import { AiOutlineMail, AiFillStar } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { FaBeer } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
const TemplateFiveDetail = () => {
  const tablearrskills = [
    {
      id: "1",
      skill: "Espresso",
    },

    {
      id: "2",
      skill: "Ristretto",
    },

    {
      id: "3",
      skill: "latte art",
    },

    {
      id: "4",
      skill: " doppio ",
    },

    {
      id: "5",
      skill: "lungo",
    },
  ];

  const education = [
    {
      id: "1",
      year: "2017",
      title: "Esperto Barista Course",
      desc: "Esperto Barista Course",
    },

    {
      id: "2",
      year: "2017",
      title: "Esperto Barista Course",
      desc: "Esperto Barista Course",
    },
  ];

  const tablearrexp = [
    {
      id: "1",
      name: "Barista Junior",
      company: "Barista - Six Ounces Coffee",
      date: "2018-2019",
      para: "Processed drinks and coffee go well with food.Provide customer feedback to select the right coffee and tea blend for their preferences.",
    },

    {
      id: "2",
      name: "Barista Professional      ",
      company: "Barista - Six Ounces Coffee",
      date: " 2019-2020",
      para: "Processed drinks and coffee go well with food.The new drink helped increase turnover by 25% from 2018 to 2019",
    },

    {
      id: "3",
      name: "Barista Leader",
      company: "Barista - Six Ounces Coffee",
      date: " 2019-2020",
      para: "Processed drinks and coffee go well with food.The new drink helped increase turnover by 25% from 2018 to 2019",
    },
  ];

  return (
    <div className="bg-white pb-12">
      <div className="  relative container mx-auto shadow-2xl ">
        <div className="bg-[#484949] px-10 py-10 flex items-center justify-center">
          <img
            src="/assets/images/person4.png"
            alt=""
            className="rounded-full bg-white w-44 h-44 object-cover object-top z-50 border-4 border-[#423e3a]"
          />
          <div>
            <div className=" rounded-full bg-[#95826D] py-4">
              <h2 className="text-white text-6xl  font-bold   pl-24 pr-8 ">
                Olivia
              </h2>
              <h2 className="text-white text-xl  font-bold   pl-24 pr-8 ">
                Wilson
              </h2>
            </div>
          </div>
        </div>
        <div className="bg-[#484949]   pb-20 grid grid-cols-9 space-x-5 justify-items-center">
          <div className="col-span-5  border-l-[40px] border-[#95826D] px-20 rounded-r-md">
            <div className="pt-10 ">
              <h3 className="text-white text-xl font-semibold">Internships</h3>
              {tablearrexp.map((item, index) => {
                return (
                  <div className="text-white py-3">
                    <p className="pt-3 font-semibold"> {item.name}</p>

                    <p className="py-1 font-semibold">
                      {item.company} {item.date}
                    </p>
                    <p className="pt-2">{item.para}</p>
                  </div>
                );
              })}
            </div>

            <div className="pt-4">
              <h3 className="text-white text-xl font-semibold  ">Contact</h3>
              <div className="flex items-center gap-3 py-2">
                {" "}
                <BsTelephone className="bg-white text-[#484949] p-1 w-8 h-8 rounded-full" />{" "}
                <p className="text-white">+123-456-7890</p>
              </div>
              <div className="flex items-center py-2 gap-3">
                {" "}
                <AiOutlineMail className="bg-white text-[#484949] p-1 w-8 h-8 rounded-full" />{" "}
                <p className="text-white">hello@reallygreatsite.com</p>
              </div>

              <div className="flex items-center gap-3 py-2">
                {" "}
                <MdLocationOn className="bg-white text-[#484949] p-0.5 w-8 h-8 rounded-full" />{" "}
                <p className="text-white">123 Anywhere St., Any City</p>
              </div>
            </div>
          </div>

          <div className="col-span-4 pr-28">
            <div className="pt-10 bg-[#95826D] rounded-2xl px-5">
              <div>
                <h3 className="text-white text-2xl font-semibold  ">
                  About Me
                </h3>

                <div>
                  <p className="pt-2 text-white">
                    Becoming a barista is my dream come true because I have been
                    a coffee lover since I was in high school. and I always
                    develop my talent in processing coffee
                  </p>
                </div>
              </div>
              <div className="pt-8">
                <h3 className="text-white text-xl font-semibold  ">
                  Education
                </h3>

                <div className="pt-2 ">
                  {education.map((item, index) => {
                    return (
                      <div className="text-white py-3">
                        <p className="">
                          {" "}
                          {item.year} | {item.title}
                        </p>
                        <p className="text-sm py-1">{item.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="pt-8 pb-10">
                <h3 className="text-white text-xl font-semibold  ">Skills</h3>

                <div className="pt-2 ">
                  {tablearrskills.map((item, index) => {
                    return (
                      <div className="text-white grid grid-cols-12 pb-3">
                        <p className="col-span-4 py-1"> {item.skill}</p>
                        <div className="col-span-8 py-1 flex gap-x-1">
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                        </div>
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

export default TemplateFiveDetail;
