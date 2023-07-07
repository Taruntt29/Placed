import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { BiChevronUp } from "react-icons/bi";

const ResumeFaq = () => {
  const [select, setSelect] = useState(null);

  const handelfaq = (i) => {
    if (select === i) {
      return setSelect(null);
    }

    setSelect(i);
  };

  const faqData = [
    {
      id: "1",
      Question: "How to create a resume?",
      list: [
        "• It Includes relevant and error-free information",
        "• It saves time",
        "• It saves time",
        "• It creates online resume for free",
        "• It builds a well-formatted resume basis your personal and academic details.",
        " PPLACD resume maker which is a free online resume maker helps you create a winning resume and increases your chances of landing a job.",
      ],
    },
    {
      id: "2",
      Question: "How to choose a reliable resume builder?",
      list: [
        "• It Includes relevant and error-free information",
        "• It saves time",
        "• It saves time",
        "• It creates online resume for free",
        "• It builds a well-formatted resume basis your personal and academic details.",
        " PPLACD resume maker which is a free online resume maker helps you create a winning resume and increases your chances of landing a job.",
      ],
    },
    {
      id: "3",
      Question: "How does PPLACD resume maker work?",
      list: [
        "• It Includes relevant and error-free information",
        "• It saves time",
        "• It saves time",
        "• It creates online resume for free",
        "• It builds a well-formatted resume basis your personal and academic details.",
        " PPLACD resume maker which is a free online resume maker helps you create a winning resume and increases your chances of landing a job.",
      ],
    },
    {
      id: "4",
      Question: "What are the benefits of PPLACD resume maker?",
      list: [
        "• It Includes relevant and error-free information",
        "• It saves time",
        "• It saves time",
        "• It creates online resume for free",
        "• It builds a well-formatted resume basis your personal and academic details.",
        " PPLACD resume maker which is a free online resume maker helps you create a winning resume and increases your chances of landing a job.",
      ],
    },
  ];

  return (
    <div>
      <div className=" py-10 md:py-12 max-w-[1150px] mx-auto">
        <div className="text-center font-s-bold text-2xl px-4 md:px-0 md:text-4xl text-black">
          Frequently Asked Questions
        </div>

        <div className="md:my-10 my-8 space-y-6 px-6">
          {faqData.map((item, i) => {
            return (
              <div>
                <div className="border-2 rounded-xl px-8 py-2">
                  <div
                    className="flex justify-between items-center"
                    onClick={() => handelfaq(i)}
                  >
                    <div className="md:text-xl  font-s-medium ">
                      {item.Question}
                    </div>
                    {select === i ? (
                      <BiChevronUp size={40} />
                    ) : (
                      <BiChevronDown size={40} />
                    )}
                  </div>
                  <div className="space-y-2 faqTrnsition">
                    {item.list &&
                      item?.list.map((item) => (
                        <p className={select === i ? "block" : "hidden"}>
                          {item}
                        </p>
                      ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* <div className="md:my-20 my-8 space-y-6 px-6">
          {faqData.map((item, i) => {
            return (
              <div>
                <div className="border-2 rounded-xl px-8 py-4">
                  <div
                    className="flex justify-between items-center"
                    onClick={() => handelfaq(i)}
                  >
                    <div className="md:text-xl  font-s-medium mb-4">
                      {item.Question}
                    </div>
                    {select === i ? (
                      <BiChevronUp size={40} />
                    ) : (
                      <BiChevronDown size={40} />
                    )}
                  </div>
                  <div className="space-y-2 transition">
                    {item.list &&
                      item?.list.map((item) => (
                        <p
                          className={
                            select === i
                              ? "transition block"
                              : "hidden transition"
                          }
                        >
                          {item}
                        </p>
                      ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div> */}
      </div>
    </div>
  );
};

export default ResumeFaq;
