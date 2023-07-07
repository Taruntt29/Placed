import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { FaBeer } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

const TemplateFourDetail = () => {
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
      <div className="  relative container mx-auto shadow-2xl ">
        <div className="grid grid-cols-3 ">
          <div className="bg-[#323b4c] col-span-1">
          <img
            src="/assets/images/person4.png"
            alt=""
            className="rounded-full bg-white  w-40 h-40 object-cover object-top mx-auto mt-5 "
          />
            <div className=" pt-7 pl-7">
              <h3 className="text-white text-2xl font-semibold ">My Contact</h3>
              <hr className="bg-white h-[3px] w-full" />
              <div className=" pt-2 gap-3 text-white">
                {" "}<p className="font-semibold">Email:</p>
                <p className="">hello@reallygreatsite.com</p>
              </div>
              <div className=" gap-3 pt-2 text-white">
                {" "}<p className="font-semibold">Phone:</p>
                <p>+123-456-7890</p>
              </div>

              <div className=" gap-3 pt-2 text-white">
                {" "}<p className="font-semibold">Address:</p>
                <p>123 Anywhere St., Any City</p>
              </div>
            </div>

            <div className="pt-7 pl-7">
              <h3 className="text-white text-2xl font-semibold ">Education Background</h3>
              <hr className="bg-white h-[4px] w-full" />
              <ul className="decoration-none list-disc ml-4 pt-4">
                <li className="text-white">
                  {" "}
                 <span className="font-semibold text-white"> orcelle Business School</span> 
                  <br />
                  Masters in Accounting
                  <br />
                  Completed in 2016 
                </li>
              </ul>

              <ul className="decoration-none list-disc pt-3 ml-4">
                <li className="text-white">
                  {" "}
                  <span className="font-semibold text-white">  Larana Business School </span>
                  <br />
                  Certificate in Financial Management,<br/> Financial Analysis, and
                  Public Budgeting
                  <br />
                  Completed in 2014
                </li>
              </ul>
            </div>

            <div className="py-7 pl-7">
                <h3 className="text-white text-2xl font-semibold">Interest</h3>
                <hr className="bg-white h-[4px] w-full" />
                <div className="pt-2">
                  {tablearrskills.map((item, index) => {
                    return (
                      <div className="">
                        <p className="text-white"> {item.skill}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

          </div>
          <div className="bg-white col-span-2 px-5">

          <div className="flex flex-col justify-start items-start pt-10">
                <h2 className="text-black text-5xl  font-semibold ">
                  HOWARD ONG{" "}
                </h2>
                <p className="text-black text-xl">Financial Analyst</p>
                
                <div className="">
                <p className="pt-7">
                Dedicated and detail-oriented Financial Analyst with 10 years of
                experience. Eager to apply proven-budget maximization skills for
                Bank of Brocelle in monitoring, maintaining, and completing
                client billing and reconciliations. Special interest in
                achieving the millennial market and helping with retirement and
                general financial planning.
              </p>
                </div>
                <div className="pt-7 pb-7">
              <h3 className="text-black text-2xl font-semibold">
                Professional Experience{" "}
              </h3>
              <hr className="bg-black h-[4px] w-full" />
              {tablearrexp.map((item, index) => {
                    return (
              <div>
                <p className="pt-3 font-semibold">
                  {" "}
                  {item.name}
                  <br/>
                  {item.date}
                </p>
                <p>Key responsibilities:</p>
                <p className="pt-2">{item.para}</p>
              </div>
                    );
              })}
            </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateFourDetail;
