import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { FaBeer } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
const TemplateThreeDetail = () => {
  const tablearrskill = [
    {
      id: "1",
      skill: "Financial modeling and reporting",
    },

    {
      id: "2",
      skill: "Data mining and analysis",
    },

    {
      id: "3",
      skill: "Financial accounting",
    },

    {
      id: "4",
      skill: "Business valuation",
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

  const tablearrlanguage = [
    {
      id: "1",
      skill: "English",
    },

    {
      id: "2",
      skill: " Japanese",
    },

    {
      id: "3",
      skill: " French",
    },
  ];

  const tablearrexp = [
    {
      id: "1",
      name: "Timmerman Industries | Financial Analyst Intern",
      date: "2012 – 2015",
      para: " Analyzed financial data Observed financial performance and identified trends Prepared reports on the above information and reported the insights.",
    },

    {
      id: "2",
      name: "Timmerman Industries | Financial Analyst Intern",
      date: "2012 – 2015",
      para: " Analyzed financial data Observed financial performance and identified trends Prepared reports on the above information and reported the insights.",
    },

    {
      id: "3",
      name: "Timmerman Industries | Financial Analyst Intern",
      date: "2012 – 2015",
      para: " Analyzed financial data Observed financial performance and identified trends Prepared reports on the above information and reported the insights.",
    },
  ];
  return (
    <div className="bg-white pb-12">
      <div className="  relative container mx-auto shadow-2xl">
        <div className="bg-[#423e3a] px-10 py-10 flex items-center justify-center">
          <img
            src="/assets/images/person4.png"
            alt=""
            className="rounded-full bg-white w-44 h-44 object-cover object-top z-50 border-4 border-[#423e3a]"
          />
          <div>
            <div className="-ml-20">
              <h2 className="text-white text-5xl  font-semibold  bg-black/50  py-3 pl-24 pr-8 rounded-full">
                HOWARD ONG{" "}
              </h2>
              <p className="text-white text-xl mt-5 bg-[#96695e]/70 py-3 pl-24 pr-8  rounded-full">
                Financial Analyst
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white px-20 grid grid-cols-9 space-x-5 justify-items-center">
          <div className="col-span-4">
            <div className="pt-10">
              <h3 className="text-white text-xl font-semibold bg-black p-2">
                About Me
              </h3>
              <p className="pt-2">
                Dedicated and detail-oriented Financial Analyst with 10 years of
                experience. Eager to apply proven-budget maximization skills for
                Bank of Brocelle in monitoring, maintaining, and completing
                client billing and reconciliations. Special interest in
                achieving the millennial market and helping with retirement and
                general financial planning.
              </p>
            </div>

            <div className="pt-8">
              <h3 className="text-white text-xl font-semibold bg-black p-2">
                My Contact
              </h3>
              <div className="flex items-center pt-2 gap-3">
                {" "}
                <AiOutlineMail className="bg-black text-white p-1 w-8 h-8 rounded-full" />{" "}
                <p>hello@reallygreatsite.com</p>
              </div>
              <div className="flex items-center gap-3 pt-2">
                {" "}
                <BsTelephone className="bg-black text-white p-1 w-8 h-8 rounded-full" />{" "}
                <p>+123-456-7890</p>
              </div>

              <div className="flex items-center gap-3 pt-2">
                {" "}
                <MdLocationOn className="bg-black text-white p-1 w-8 h-8 rounded-full" />{" "}
                <p>123 Anywhere St., Any City</p>
              </div>
            </div>

            <div className="pt-8">
                <h3 className="text-white text-xl font-semibold bg-black p-2">
                  Professional Skill
                </h3>
                <hr className="bg-white h-[4px] w-[45%]" />
                <div className="pt-2 ">
                  {tablearrskill.map((item, index) => {
                    return (
                      <div className="">
                        <p className=""> {item.skill}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="pt-8 pb-9">
                <h3 className="text-white text-xl font-semibold bg-black p-2">Languages</h3>
                <hr className="bg-white h-[4px] w-[34%]" />
                <div className="pt-2">
                  {tablearrlanguage.map((item, index) => {
                    return (
                      <div className="">
                        <p className=""> {item.skill}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
          </div>
          <hr className="h-full w-[3px] bg-black" />
          <div className="col-span-4">
            <div className="pt-10">
              <h3 className="text-white text-xl font-semibold bg-black p-2">
                Professional Experience{" "}
              </h3>
              {tablearrexp.map((item, index) => {
                return (
                  <div>
                    <p className="pt-3 font-semibold">
                      {" "}
                      {item.name}
                      <br />
                      {item.date}
                    </p>
                    <p>Key responsibilities:</p>
                    <p className="pt-2">{item.para}</p>
                  </div>
                );
              })}
            </div>
            <div className="pt-8 pb-9">
              <h3 className="text-white text-xl font-semibold bg-black p-2 ">
                Education Background
              </h3>
              <ul className="decoration-none list-disc ml-4 pt-4">
                <li className="">
                  {" "}
                  <span className="font-semibold">
                    {" "}
                    orcelle Business School
                  </span>
                  <br />
                  Masters in Accounting
                  <br />
                  Completed in 2016
                </li>
              </ul>

              <ul className="decoration-none list-disc pt-3 ml-4">
                <li className="">
                  {" "}
                  <span className="font-semibold">
                    {" "}
                    Larana Business School{" "}
                  </span>
                  <br />
                  Certificate in Financial Management,
                  <br /> Financial Analysis, and Public Budgeting
                  <br />
                  Completed in 2014
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateThreeDetail;
