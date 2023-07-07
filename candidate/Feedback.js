import React, { useState } from "react";
import { FaAngry } from "react-icons/fa";
import { BsFillEmojiFrownFill } from "react-icons/bs";
import { BsEmojiNeutralFill } from "react-icons/bs";
import { BsFillEmojiSmileFill } from "react-icons/bs";
import { BsEmojiHeartEyesFill } from "react-icons/bs";
import { BiChevronLeft } from "react-icons/bi";
import { VscFeedback } from "react-icons/vsc";

const Feedback = () => {
  const [emoji, setEmoji] = useState(10);

  return (
    <div className="bg-[#F5F7F9]">
      <div className="max-w-[1150px] py-16 mx-auto">
        <div className="flex items-center mb-2 font-s-medium text-secondary text-lg">
          <BiChevronLeft className="text-3xl" />
          Feedback from Candidate
        </div>

        <div className="bg-[#fff] rounded-2xl">
          <div className="px-10 flex items-center space-x-3 font-s-medium text-[25px] pt-10 pb-5">
            <VscFeedback className="text-secondary" />
            Candidate Feedback
          </div>
          <hr />

          <div className="px-10 py-16">
            <div className="text-[#000] text-[16px] sm:text-[20px]">
              Feel free to share your feedback with us
            </div>

            {/* for Emojis Div */}
            <div className="bg-[#F5F7F9] mb-6 mt-2 w-full rounded-2xl py-10 space-y-16">
              <div className="text-8xl flex space-x-4 sm:space-x-10 justify-center">
                <div>
                  <FaAngry
                    className={`text-4xl sm:text-6xl md:text-8xl ${
                      emoji <= 20 ? "text-green-500" : "text-green-200"
                    }`}
                  />
                  <span
                    className={`text-black text-[12px] sm:text-[15px] text-center font-s-medium mt-2 ${
                      emoji <= 19 ? "block" : "hidden"
                    }`}
                  >
                    Angry
                  </span>
                </div>

                <div>
                  <BsFillEmojiFrownFill
                    className={`text-4xl sm:text-6xl md:text-8xl ${
                      emoji >= 20 && emoji <= 40
                        ? "text-red-500"
                        : "text-red-200"
                    }`}
                  />
                  <span
                    className={`text-black text-[12px] sm:text-[15px] text-center font-s-medium mt-2 ${
                      emoji >= 20 && emoji <= 39 ? "block" : "hidden"
                    }`}
                  >
                    Sad
                  </span>
                </div>

                <div>
                  <BsEmojiNeutralFill
                    className={`text-4xl sm:text-6xl md:text-8xl ${
                      emoji >= 40 && emoji <= 60
                        ? "text-yellow-500"
                        : "text-yellow-200"
                    }`}
                  />
                  <span
                    className={`text-black text-[12px] sm:text-[15px] text-center font-s-medium mt-2 ${
                      emoji >= 40 && emoji <= 59 ? "block" : "hidden"
                    }`}
                  >
                    Good
                  </span>
                </div>

                <div>
                  <BsFillEmojiSmileFill
                    className={`text-4xl sm:text-6xl md:text-8xl ${
                      emoji >= 60 && emoji <= 80
                        ? "text-gray-500"
                        : "text-gray-200"
                    }`}
                  />
                  <span
                    className={`text-black text-[12px] sm:text-[15px] text-center font-s-medium mt-2 ${
                      emoji >= 60 && emoji <= 79 ? "block" : "hidden"
                    }`}
                  >
                    Nice
                  </span>
                </div>

                <div>
                  <BsEmojiHeartEyesFill
                    className={`text-4xl sm:text-6xl md:text-8xl ${
                      emoji >= 80 ? "text-pink-500" : "text-pink-200"
                    }`}
                  />
                  <span
                    className={`text-black text-[12px] sm:text-[15px] text-center font-s-medium mt-2 ${
                      emoji >= 80 ? "block" : "hidden"
                    }`}
                  >
                    Excellent{" "}
                  </span>
                </div>
              </div>

              <div className="w-full  flex justify-center">
                <input
                  onChange={({ target: { value } }) => setEmoji(value)}
                  value={emoji}
                  type="range"
                  id="emojiScal"
                  min="1"
                  max="100"
                  className={`w-[60%] bg-red-500  text-red-500 bg-red-500 h-[20px] ${
                    emoji <= 20
                      ? "accent-green-500"
                      : emoji >= 20 && emoji <= 40
                      ? "accent-red-500"
                      : emoji >= 40 && emoji <= 60
                      ? "accent-yellow-500"
                      : emoji >= 60 && emoji <= 80
                      ? "accent-gray-500"
                      : "accent-pink-500"
                  }`}
                />
              </div>
            </div>

            <div className="text-[#000] text-[16px] sm:text-[20px]">
              Tell us about your experience
            </div>

            {/* div For Something Typing */}

            <div className="bg-[#F5F7F9] mt-2 mb-6 rounded-2xl px-8 py-6">
              <textarea
                id="meassegearea"
                rows="9"
                className="w-full bg-transparent text-black text-opacity-50 resize-none outline-none text-base"
              >
                Write something here...…….
              </textarea>
            </div>

            {/* Two Tabs Are Here */}

            <div className="flex justify-center space-x-7 text-[14px] sm:text-[16px]">
              <button className="text-black text-opacity-70 rounded-xl border px-8 py-2 ">
                Dismiss
              </button>
              <button className="text-white bg-secondary rounded-xl px-4 sm:px-10 py-2">
                Sent Feedback
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
