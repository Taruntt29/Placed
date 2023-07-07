import React, { useState } from "react";
import { MdMessage } from "react-icons/md";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import { IoSend } from "react-icons/io5";
import { MdOutlineUploadFile } from "react-icons/md";

const SupportChat = () => {
  const sender = [
    {
      id: 1,
      sendermessages: "Hello!",
      receviermessages: "Hello Sir",
    },

    {
      id: 2,
      sendermessages: "Please help me with the buying the packages.",
      receviermessages: "How I may I help you?",
    },
  ];

  return (
    <div className="bg-inputcolor">
      <div className="container mx-auto lg:px-20 px-5 pb-16 ">
        <div className=" pt-12 pb-5 container">
          <h3 className="font-bold text-lg flex pt-1 text-secondary">
            <BiChevronLeft className="" size={32} />
            Support
          </h3>
        </div>
        <div className="container mx-auto pt-5  bg-white   rounded">
          <div className="flex space-x-4 px-5 pb-4 border-gray-200 border-b-2">
            <MdMessage size={32} fill="#2544EE" className="mt-1" />
            <h3 className="font-bold text-lg flex pt-1 ">
              Assistant Chat
              <BiChevronRight className="" size={32} />
            </h3>
          </div>

          <div className=" bg-white rounded-md ">
            <div className="  p-7 ">
              <div className=" ">
                {sender.map((item) => (
                  <>
                    <div className="grid grid-cols-12 w-[80%]  gap-2 ">
                      <div className="lg:col-span-11 col-span-12">
                        <p className="text-xs p-3 bg-primary rounded-md inline-flex">
                          {item.sendermessages}
                        </p>
                      </div>
                    </div>
                    <div className="pl-[770px]  py-5">
                      <div className="grid grid-cols-12 gap-2">
                        <div className="col-span-11">
                          <p className="text-xs bg-inputcolor p-3 rounded-md inline-flex">
                            {item.receviermessages}
                          </p>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>

            <div className="px-7  pb-5 ">
              <div className="bg-primary rounded-full border-[2px] border-secondary px-3">
                <div className="flex justify-between items-center">
                  <div className="flex items-center justify-center">
                    <input
                      type="file"
                      id="my_file_input"
                      style={{ display: "none" }}
                    />
                    <label htmlFor="my_file_input">
                      <MdOutlineUploadFile
                        label="Import from Excel"
                        className="text-gray-400 cursor-pointer"
                        size={20}
                      />
                    </label>
                    <div className="w-full">
                      <input
                        type="send"
                        placeholder="Send Message"
                        className="w-full text-sm font-bold py-2 px-2 rounded-l-full bg-transparent placeholder:font-s-normal"
                      />
                    </div>
                  </div>
                  <div className="float-right">
                    <IoSend className="text-secondary " size={20} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportChat;
