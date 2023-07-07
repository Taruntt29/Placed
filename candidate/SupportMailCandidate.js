import React, { useState } from "react";
import { MdMessage } from "react-icons/md";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const SupportMailCandidate = () => {
  const [editorState, setEditorState] = useState();
  return (
    <div className="bg-inputcolor pb-10">
      <div className=" pt-12 px-10  container">
        <h3 className="font-bold text-2xl flex pt-1 text-secondary">
          <BiChevronLeft className="" size={32} />
          Support
        </h3>
      </div>
      <div className="container mx-auto mt-2  bg-white   rounded">
        <div className="flex space-x-4 px-6 pb-4 border-gray-200 border-b-2 pt-2">
          <MdMessage size={40} fill="#2544EE" />
          <h3 className="font-bold text-lg flex pt-1">
            Assistant Email
            <BiChevronRight className="" size={32} />
          </h3>
        </div>

        <div className=" px-8 py-8">
          <div className="bg-secondary p-3 rounded-t-md">
            <h3 className="text-white">New Messages</h3>
          </div>

          <div className="shadow-email rounded-b-md ">
            <div className="px-6 flex justify-between">
              <div className="flex items-start space-x-4 p-6  border-gray-200 border-b-2 w-full">
                <label className="text-gray-500 text-left">To</label>
                <input />
              </div>

              <div className="pt-5">
                <select className="bg-inputcolor px-5 rounded py-2">
                  <option>Dummy</option>
                  <option>Dummy</option>
                  <option>Dummy</option>
                </select>
              </div>
            </div>

            <div className="px-6">
              <div className="flex space-x-4 p-3  border-gray-200 border-b-2">
                <label className="text-gray-500 text-left">Subject</label>
                <input className="w-full" />
              </div>
            </div>
            <div className=" p-3 mx-4 border-b-2 border-gray-200 h-96">
              <Editor
                placeholder="Write Email"
                editorState={editorState}
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
                onEditorStateChange={setEditorState}
                className="w-full outline-none h-96 resize-none overflow-hidden "
                toolbar={{
                  options: ["inline", "textAlign", "link", "image"],
                }}
              />
            </div>

            <div className="px-4 py-4">
              <button className="px-16 bg-secondary py-2 text-white font-s-medium rounded text-lg">
                Sent
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportMailCandidate;
