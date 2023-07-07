import React, { useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { ImCross, ImBin } from "react-icons/im";
import { MdArrowBackIos } from "react-icons/md";
import Select from "react-select";
import YearPicker from "react-year-picker";

const FormTwo = () => {
  const [select, setSelect] = useState(false);
  const [toggleone, setToggleOne] = useState(false);
  const [toggletwo, setToggleTwo] = useState(false);
  const [togglethree, setToggleThree] = useState(false);
  const [togglefour, setToggleFour] = useState(false);

  const Country = [
    { value: "india", label: "India" },
    { value: "pakistan", label: "Pakistan" },
    { value: "canada", label: "Canada" },
  ];

  const city = [
    { value: "haryana", label: "Haryana" },
    { value: "pakistan", label: "Pakistan" },
    { value: "canada", label: "Canada" },
  ];

  const states = [
    { value: "india", label: "India" },
    { value: "pakistan", label: "Pakistan" },
    { value: "canada", label: "Canada" },
  ];

  // langauge Data
  const langData = require("../../utils/langauge.json");
  // console.log("langData", langData);
  const langValArr = langData?.map((item) => {
    return { value: item.language, label: item.language };
  });

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

  const handelToggleFour = () => {
    setToggleFour(!togglefour);
  };

  const [state, setState] = useState({
    fullname: "",
    email: "",
    number: "",
    currentCity: "",
    gender: "",
    date: "",
    aboutText: "",
    courseName1: "",
    specialization1: "",
    university1: "",
    passingYear1: "",
    percentage1: "",
    courseType1: "",
    courseName2: "",
    specialization2: "",
    university2: "",
    passingYear2: "",
    percentage2: "",
    courseType2: "",
    courseName3: "",
    specialization3: "",
    university3: "",
    passingYear3: "",
    percentage3: "",
    courseType3: "",
    courseName4: "",
    specialization4: "",
    university4: "",
    passingYear4: "",
    percentage4: "",
    courseType4: "",
    courseName5: "",
    specialization5: "",
    university5: "",
    passingYear5: "",
    percentage5: "",
    courseType5: "",
    workExperience: [
      {
        designation: "",
        employmentType: "",
        companyName: "",
        location: "",
        month: "",
        year: "",
        description: "",
        id: new Date(),
      },
    ],
    skills: [],
    linkKnown: [
      {
        link1: "",
        id: new Date(),
      },
    ],
    link2: "",

    languagesKnown: [
      {
        language: "",
        levels: "",
        id: new Date(),
      },
    ],
  });

  const [profilePic, setProfilePic] = useState();
  const [skill, setSkill] = useState("");

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const handleProfilePic = (e) => {
    console.log(e.target.files);
    setProfilePic(URL.createObjectURL(e.target.files[0]));
  };

  const handleAddSkill = (e) => {
    setState({
      ...state,
      [e.target.name]: [...state.skills, skill],
    });
    setSkill("");
  };
  const handleRemoveSkill = (item, index) => {
    const value = state.skills.filter(function (i) {
      return i !== item;
    });
    setState({
      ...state,
      skills: value,
    });
  };

  return (
    <>
      {" "}
      <div className="bg-secondary flex pt-48 space-x-20 items-center justify-center pb-20">
        <MdArrowBackIos className="text-white" size={28} />
        <h4 className="text-white text-3xl font-s-medium ">Build Resume</h4>
      </div>
      <div className="container mx-auto md:px-5 md:py-20">
        <div className="bg-[#F5F7F9] md:rounded-[15px] p-6 flex flex-col gap-8 justify-start w-full">
          <div className="bg-white rounded-[15px]">
            <p className="py-3 px-6 font-s-medium lg:text-lg text-base">
              Personal Details
            </p>
            <div className="bg-black bg-opacity-60 h-[1px]"></div>

            <div className="flex  flex-col justify-start items-start gap-2 px-6 pt-6 pb-3">
              <div className=" border-[2px]  border[#707070] p-3 rounded-lg">
                <div className=" border-[1px] inline-flex flex-col border[#707070]  justify-center items-center gap-2 rounded-[6px] ">
                  {/* <img src="/assets/images/uploadimage.png" className="w-16" /> */}
                  {profilePic ? (
                    <>
                      {" "}
                      <input
                        type="file"
                        name="uploadfile"
                        id="img"
                        className="hidden"
                        onChange={handleProfilePic}
                      />
                      <label for="img">
                        <img
                          alt="ProfilePic"
                          src={profilePic}
                          onChange={handleProfilePic}
                          className="w-40 h-40 rounded-[6px] innershadow2 border-[1px] border[#707070] cursor-pointer"
                        />
                      </label>
                    </>
                  ) : (
                    <div className="p-6 flex justify-center items-center flex-col gap-2 bg-secondary rounded-lg">
                      <BsFillPersonFill className="w-12 h-12 text-white" />
                      <input
                        type="file"
                        name="uploadfile"
                        id="img"
                        className="hidden"
                        onChange={handleProfilePic}
                      />
                      <label
                        for="img"
                        className="text-secondary cursor-pointer bg-white font-s-medium text-sm flex justify-center items-center px-4 py-1 rounded-[6px] "
                      >
                        Upload Image
                      </label>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className=" grid grid-cols-1 md:grid-cols-2  gap-10 p-6 justify-items-center items-center ">
              <div className="w-full">
                <div className="flex justify-start flex-col gap-1 w-full">
                  <div className="font-semibold text-[15px]">Full Name</div>
                  <input
                    type="text"
                    placeholder="Enter Name"
                    name="fullname"
                    value={state.fullname}
                    onChange={handleChange}
                    className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                  />
                </div>
              </div>

              <div className="w-full">
                <div className="flex justify-start flex-col gap-1 w-full">
                  <div className="font-semibold text-[15px]">Email Address</div>
                  <input
                    type="text"
                    name="email"
                    value={state.email}
                    onChange={handleChange}
                    placeholder="Enter Email Address"
                    className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                  />
                </div>
              </div>
            </div>

            <div className=" grid grid-cols-1 md:grid-cols-2  gap-10 px-6 pb-4 justify-items-center items-center ">
              <div className="w-full">
                <div className="flex justify-start flex-col gap-1 w-full phoneparent">
                  <div className="font-semibold text-[15px]">Phone Number</div>
                  <PhoneInput
                    placeholder="Mobile Number"
                    name="number"
                    value={state.number}
                    onChange={handleChange}
                    className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                  />
                </div>
              </div>
              <div className="w-full">
                <div className="flex justify-start flex-col gap-1 w-full">
                  <div className="font-semibold text-[15px]">Country</div>
                  <Select options={Country} />
                </div>
              </div>
              <div className="w-full">
                <div className="flex justify-start flex-col gap-1 w-full">
                  <div className="font-semibold text-[15px]">State</div>
                  <Select options={states} />
                </div>
              </div>
              <div className="w-full">
                <div className="flex justify-start flex-col gap-1 w-full">
                  <div className="font-semibold text-[15px]">City</div>
                  <Select options={city} />
                </div>
              </div>
            </div>
            <div className="bg-white rounded-[15px]  pb-2">
              <p className="py-3 px-6 font-s-medium lg:text-lg text-base">
                Languages
              </p>
              <div className="bg-black bg-opacity-60 h-[1px] px-5"></div>
              <div className="px-6 py-3">
                <div className="w-full">
                  <div className="flex justify-start flex-col gap-1 w-full">
                    <Select
                      className="w-full"
                      name="language"
                      isMulti
                      options={langValArr}
                      value={state.language}
                      onChange={(e) => setState({ ...state, language: e })}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-[15px]  pb-2">
              <p className="py-3 px-6 font-s-medium lg:text-lg text-base">
                Address
              </p>
              <div className="bg-black bg-opacity-60 h-[1px] px-5"></div>
              <div className="px-6 py-3">
                <div className="w-full">
                  <div className="flex justify-start flex-col gap-1 w-full">
                    <input
                      placeholder="Write address here"
                      rows="6"
                      name="aboutText"
                      onChange={handleChange}
                      className="w-full bg-inputcolor resize-none focus:outline-none placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[15px] pt-5">
            <p className="py-3 px-6 font-s-medium lg:text-lg text-base">
              About Me
            </p>
            <div className="bg-black bg-opacity-60 h-[1px]"></div>
            <div className="px-6 py-3">
              <div className="w-full">
                <div className="flex justify-start flex-col gap-1 w-full">
                  <textarea
                    placeholder="Write something here"
                    rows="6"
                    name="aboutText"
                    value={state.aboutText}
                    onChange={handleChange}
                    className="w-full bg-inputcolor resize-none focus:outline-none placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[15px] pt-5">
            <div className="flex items-center justify-between md:pr-3">
              <p className="py-3 px-6 font-s-medium lg:text-lg text-base">
                Work Experience
              </p>

              <button
                onClick={() => {
                  setState({
                    ...state,
                    workExperience: [
                      ...state.workExperience,
                      {
                        designation: "",
                        employmentType: "",
                        companyName: "",
                        location: "",
                        month: "",
                        year: "",
                        description: "",
                        id: new Date(),
                      },
                    ],
                  });
                }}
                className="bg-secondary text-white font-s-medium px-8 py-2 text-sm"
              >
                + Add More
              </button>
            </div>
            <div className="bg-black bg-opacity-60 h-[1px]"></div>

            {state.workExperience.map((item, index) => (
              <>
                {/* <div className="px-8 pt-5 flex space-x-8">
                  {" "}
                  <div className="flex space-x-1 py-2">
                    <input type="checkbox" />
                    <label>I am Fresher</label>
                  </div>
                  <div className="flex space-x-1 py-2">
                    <input type="checkbox" />
                    <label>I am Experience</label>
                  </div>
                </div> */}
                <div>
                  <div className="flex justify-end pt-3 px-4 ">
                    <ImBin
                      onClick={() => {
                        const newState = state.workExperience.filter(
                          (obj) => obj.id !== item.id
                        );

                        setState({
                          ...state,
                          workExperience: newState,
                        });
                      }}
                      className=" cursor-pointer"
                    />
                  </div>
                </div>
                <div
                  onChange={(e) => {
                    const newState = state.workExperience.map((obj) => {
                      if (obj.id === item.id) {
                        return { ...obj, levels: e.target.value };
                      }

                      return obj;
                    });

                    setState({
                      ...state,
                      workExperience: newState,
                    });
                  }}
                >
                  <div className=" grid grid-cols-1 md:grid-cols-2  gap-10 p-6 justify-items-center items-center ">
                    <div className="w-full">
                      <div className="flex justify-start flex-col gap-1 w-full">
                        <div className="font-semibold text-[15px]">
                          Designation
                        </div>
                        <input
                          type="text"
                          placeholder="Designation"
                          name="designation"
                          value={state.designation}
                          onChange={handleChange}
                          className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                        />
                      </div>
                    </div>

                    <div className="w-full">
                      <div className="flex justify-start flex-col gap-1 w-full">
                        <div className="font-semibold text-[15px]">
                          Employment Type
                        </div>
                        <input
                          type="text"
                          name="employmentType"
                          value={state.employmentType}
                          onChange={handleChange}
                          placeholder="Employment Type"
                          className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                        />
                      </div>
                    </div>
                  </div>

                  <div className=" grid grid-cols-1 md:grid-cols-2  gap-10 p-6 justify-items-center items-center ">
                    <div className="w-full">
                      <div className="flex justify-start flex-col gap-1 w-full">
                        <div className="font-semibold text-[15px]">
                          Company Name
                        </div>
                        <input
                          type="text"
                          placeholder="Company Name "
                          name="companyName"
                          value={state.companyName}
                          onChange={handleChange}
                          className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                        />
                      </div>
                    </div>

                    <div className="w-full">
                      <div className="flex justify-start flex-col gap-1 w-full">
                        <div className="font-semibold text-[15px]">
                          Location
                        </div>
                        <input
                          type="text"
                          name="location"
                          value={state.location}
                          onChange={handleChange}
                          placeholder="Location"
                          className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2 px-6">
                    <input type="checkbox" className="" />
                    <p className="text-sm font-s-normal">
                      {" "}
                      I am currently working in this role{" "}
                    </p>
                  </div>

                  <div className=" grid grid-cols-1 md:grid-cols-4  gap-5 p-6 justify-items-center items-center ">
                    <div className="w-full">
                      <div className="flex justify-start flex-col gap-1 w-full">
                        <div className="text-[#000] text-[15px] font-semibold">
                          Start Date
                        </div>
                        <input
                          type="date"
                          className="bg-[#F5F7F9] px-3 py-[10px] md:mt-2 rounded-[7px] text-sm text-[#000] text-opacity-30"
                        />
                      </div>
                    </div>
                    <div className="w-full pt-6">
                      <div className="flex justify-start flex-col gap-1 w-full">
                        <input
                          type="date"
                          className="bg-[#F5F7F9] px-3 py-[10px] md:mt-2 rounded-[7px] text-sm text-[#000] text-opacity-30"
                        />
                      </div>
                    </div>
                    <div className="w-full">
                      <div className="flex justify-start flex-col gap-1 w-full">
                        <div className="text-[#000] text-[15px] font-semibold">
                          End Date
                        </div>
                        <div className="w-full">
                          <div className="flex justify-start flex-col gap-1 w-full">
                            <input
                              type="date"
                              className="bg-[#F5F7F9] px-3 py-[10px] md:mt-2 rounded-[7px] text-sm text-[#000] text-opacity-30"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full pt-6">
                      <div className="flex justify-start flex-col gap-1 w-full">
                        <input
                          type="date"
                          className="bg-[#F5F7F9] px-3 py-[10px] md:mt-2 rounded-[7px] text-sm text-[#000] text-opacity-30"
                        />
                      </div>
                    </div>
                  </div>
                  <div className=" grid grid-cols-1   gap-10 pb-6 px-6 justify-items-center items-center ">
                    <div className="w-full">
                      <div className="flex justify-start flex-col gap-1 w-full">
                        <div className="font-semibold text-[15px]">
                          Description
                        </div>
                        <textarea
                          type="text"
                          placeholder="Enter Description "
                          name="descroption"
                          className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" pb-4 px-6 ">
                  <button className="bg-secondary text-white rounded-md font-s-medium px-8 py-2 text-sm">
                    Save
                  </button>
                </div>
              </>
            ))}
          </div>

          <div className="bg-white rounded-[15px] pt-5">
            <div className="flex items-center justify-between md:pr-3">
              <p className="py-3 px-6 font-s-medium lg:text-lg text-base">
                Education
              </p>
            </div>
            <div className="bg-black bg-opacity-60 h-[1px]"></div>

            <div>
              <div className="  mx-auto">
                <div className=" my-8 space-y-6 px-6">
                  <div
                    onClick={handelToggleFour}
                    className="border border-gray-200 rounded-md"
                  >
                    <div className=" p-3 flex justify-between">
                      Additional Education
                      {togglefour ? (
                        <BiChevronUp onClick={handelToggleFour} />
                      ) : (
                        <BiChevronDown onClick={handelToggleFour} />
                      )}
                    </div>
                    <div className="">
                      <div className={togglefour ? "block" : "hidden"}>
                        <div>
                          <div className=" grid grid-cols-1 md:grid-cols-2  gap-10 p-6 justify-items-center items-center ">
                            <div className="w-full">
                              <div className="flex justify-start flex-col gap-1 w-full">
                                <div className="font-semibold text-[15px]">
                                  Course Name
                                </div>
                                <input
                                  type="text"
                                  placeholder="Course Name"
                                  name="courseName5"
                                  value={state.courseName5}
                                  onChange={handleChange}
                                  className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                                />
                              </div>
                            </div>

                            <div className="w-full">
                              <div className="flex justify-start flex-col gap-1 w-full">
                                <div className="font-semibold text-[15px]">
                                  Specialization
                                </div>
                                <input
                                  type="text"
                                  name="specialization5"
                                  value={state.specialization5}
                                  onChange={handleChange}
                                  placeholder="Specialization"
                                  className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                                />
                              </div>
                            </div>
                          </div>

                          <div className=" grid grid-cols-1 md:grid-cols-2  gap-10 p-6 justify-items-center items-center ">
                            <div className="w-full">
                              <div className="flex justify-start flex-col gap-1 w-full">
                                <div className="font-semibold text-[15px]">
                                  School/University
                                </div>
                                <input
                                  type="text"
                                  name="university5"
                                  value={state.university5}
                                  onChange={handleChange}
                                  placeholder="School/University"
                                  className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                                />
                              </div>
                            </div>
                            <div className="w-full">
                              <div className="flex justify-start flex-col gap-1 w-full">
                                <div className="text-[#000] text-[15px] font-semibold">
                                  Passing Year
                                </div>
                                <select
                                  className="bg-[#F5F7F9] px-3 py-[10px] rounded-[7px] text-sm text-[#000] text-opacity-30"
                                  value={state.passingYear5}
                                  onChange={handleChange}
                                  name="passingYear5"
                                >
                                  <option value=" ">Passing Year</option>
                                  <option value="Dummy">Dummy</option>
                                  <option value="Dummy">Dummy</option>
                                </select>
                              </div>
                            </div>
                          </div>

                          <div className=" grid grid-cols-1 md:grid-cols-2  gap-10 p-6 justify-items-center items-center ">
                            <div className="w-full">
                              <div className="flex justify-start flex-col gap-1 w-full">
                                <div className="font-semibold text-[15px]">
                                  Percentage
                                </div>
                                <input
                                  type="text"
                                  name="percentage5"
                                  value={state.percentage5}
                                  onChange={handleChange}
                                  placeholder="Grading System"
                                  className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                                />
                              </div>
                            </div>
                            <div className="w-full">
                              <div className="flex justify-start flex-col gap-1 w-full">
                                <div className="text-[#000] text-[15px] font-semibold">
                                  Course Type
                                </div>
                                <select
                                  className="bg-[#F5F7F9] px-3 py-[10px] rounded-[7px] text-sm text-[#000] text-opacity-30"
                                  value={state.courseType5}
                                  onChange={handleChange}
                                  name="coursetType5"
                                >
                                  <option value=" ">Course Type</option>
                                  <option value="Dummy">Dummy</option>
                                  <option value="Dummy">Dummy</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                        <input />
                      </div>
                    </div>
                  </div>
                  <div
                    onClick={handelToggleThree}
                    className="border border-gray-200 rounded-md"
                  >
                    <div className=" p-3 flex justify-between">
                      Add Post Graduation Details
                      {togglethree ? (
                        <BiChevronUp onClick={handelToggleThree} />
                      ) : (
                        <BiChevronDown onClick={handelToggleThree} />
                      )}
                    </div>
                    <div className="">
                      <div className={togglethree ? "block" : "hidden"}>
                        <div>
                          <div className=" grid grid-cols-1 md:grid-cols-2  gap-10 p-6 justify-items-center items-center ">
                            <div className="w-full">
                              <div className="flex justify-start flex-col gap-1 w-full">
                                <div className="font-semibold text-[15px]">
                                  Course Name
                                </div>
                                <input
                                  type="text"
                                  placeholder="Course Name"
                                  name="courseName4"
                                  value={state.courseName4}
                                  onChange={handleChange}
                                  className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                                />
                              </div>
                            </div>

                            <div className="w-full">
                              <div className="flex justify-start flex-col gap-1 w-full">
                                <div className="font-semibold text-[15px]">
                                  Specialization
                                </div>
                                <input
                                  type="text"
                                  name="specialization4"
                                  value={state.specialization4}
                                  onChange={handleChange}
                                  placeholder="Specialization"
                                  className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                                />
                              </div>
                            </div>
                          </div>

                          <div className=" grid grid-cols-1 md:grid-cols-2  gap-10 p-6 justify-items-center items-center ">
                            <div className="w-full">
                              <div className="flex justify-start flex-col gap-1 w-full">
                                <div className="font-semibold text-[15px]">
                                  School/University
                                </div>
                                <input
                                  type="text"
                                  name="university4"
                                  value={state.university4}
                                  onChange={handleChange}
                                  placeholder="School/University"
                                  className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                                />
                              </div>
                            </div>
                            <div className="w-full">
                              <div className="flex justify-start flex-col gap-1 w-full">
                                <div className="text-[#000] text-[15px] font-semibold">
                                  Passing Year
                                </div>
                                <select
                                  className="bg-[#F5F7F9] px-3 py-[10px] rounded-[7px] text-sm text-[#000] text-opacity-30"
                                  value={state.passingYear4}
                                  onChange={handleChange}
                                  name="passingYear4"
                                >
                                  <option value=" ">Passing Year</option>
                                  <option value="Dummy">Dummy</option>
                                  <option value="Dummy">Dummy</option>
                                </select>
                              </div>
                            </div>
                          </div>

                          <div className=" grid grid-cols-1 md:grid-cols-2  gap-10 p-6 justify-items-center items-center ">
                            <div className="w-full">
                              <div className="flex justify-start flex-col gap-1 w-full">
                                <div className="font-semibold text-[15px]">
                                  Percentage
                                </div>
                                <input
                                  type="text"
                                  name="percentage4"
                                  value={state.percentage4}
                                  onChange={handleChange}
                                  placeholder="Grading System"
                                  className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                                />
                              </div>
                            </div>
                            <div className="w-full">
                              <div className="flex justify-start flex-col gap-1 w-full">
                                <div className="text-[#000] text-[15px] font-semibold">
                                  Course Type
                                </div>
                                <select
                                  className="bg-[#F5F7F9] px-3 py-[10px] rounded-[7px] text-sm text-[#000] text-opacity-30"
                                  value={state.courseType4}
                                  onChange={handleChange}
                                  name="coursetType4"
                                >
                                  <option value=" ">Course Type</option>
                                  <option value="Dummy">Dummy</option>
                                  <option value="Dummy">Dummy</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                        <input />
                      </div>
                    </div>
                  </div>
                  <div
                    onClick={handelToggleTwo}
                    className="border border-gray-200 rounded-md"
                  >
                    <div className=" p-3 flex justify-between">
                      Add Graduation Details
                      {toggletwo ? (
                        <BiChevronUp onClick={handelToggleTwo} />
                      ) : (
                        <BiChevronDown onClick={handelToggleTwo} />
                      )}
                    </div>
                    <div className="">
                      <div className={toggletwo ? "block" : "hidden"}>
                        <div>
                          <div className=" grid grid-cols-1 md:grid-cols-2  gap-10 p-6 justify-items-center items-center ">
                            <div className="w-full">
                              <div className="flex justify-start flex-col gap-1 w-full">
                                <div className="font-semibold text-[15px]">
                                  Course Name
                                </div>
                                <input
                                  type="text"
                                  placeholder="Course Name"
                                  name="courseName3"
                                  value={state.courseName3}
                                  onChange={handleChange}
                                  className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                                />
                              </div>
                            </div>

                            <div className="w-full">
                              <div className="flex justify-start flex-col gap-1 w-full">
                                <div className="font-semibold text-[15px]">
                                  Specialization
                                </div>
                                <input
                                  type="text"
                                  name="specailization3"
                                  value={state.specialization3}
                                  onChange={handleChange}
                                  placeholder="Specialization"
                                  className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                                />
                              </div>
                            </div>
                          </div>

                          <div className=" grid grid-cols-1 md:grid-cols-2  gap-10 p-6 justify-items-center items-center ">
                            <div className="w-full">
                              <div className="flex justify-start flex-col gap-1 w-full">
                                <div className="font-semibold text-[15px]">
                                  School/University
                                </div>
                                <input
                                  type="text"
                                  name="university3"
                                  value={state.university3}
                                  onChange={handleChange}
                                  placeholder="School/University"
                                  className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                                />
                              </div>
                            </div>
                            <div className="w-full">
                              <div className="flex justify-start flex-col gap-1 w-full">
                                <div className="text-[#000] text-[15px] font-semibold">
                                  Passing Year
                                </div>
                                <select
                                  className="bg-[#F5F7F9] px-3 py-[10px] rounded-[7px] text-sm text-[#000] text-opacity-30"
                                  value={state.passingYear3}
                                  onChange={handleChange}
                                  name="passingYear3"
                                >
                                  <option value=" ">Passing Year</option>
                                  <option value="Dummy">Dummy</option>
                                  <option value="Dummy">Dummy</option>
                                </select>
                              </div>
                            </div>
                          </div>

                          <div className=" grid grid-cols-1 md:grid-cols-2  gap-10 p-6 justify-items-center items-center ">
                            <div className="w-full">
                              <div className="flex justify-start flex-col gap-1 w-full">
                                <div className="font-semibold text-[15px]">
                                  Percentage
                                </div>
                                <input
                                  type="text"
                                  name="percentage3"
                                  value={state.percentage3}
                                  onChange={handleChange}
                                  placeholder="Grading System"
                                  className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                                />
                              </div>
                            </div>
                            <div className="w-full">
                              <div className="flex justify-start flex-col gap-1 w-full">
                                <div className="text-[#000] text-[15px] font-semibold">
                                  Course Type
                                </div>
                                <select
                                  className="bg-[#F5F7F9] px-3 py-[10px] rounded-[7px] text-sm text-[#000] text-opacity-30"
                                  value={state.courseType3}
                                  onChange={handleChange}
                                  name="courseType3"
                                >
                                  <option value=" ">Course Type</option>
                                  <option value="Dummy">Dummy</option>
                                  <option value="Dummy">Dummy</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                        <input />
                      </div>
                    </div>
                  </div>

                  <div
                    onClick={handelToggleOne}
                    className="border border-gray-200 rounded-md"
                  >
                    <div className=" p-3 flex justify-between">
                      Add Class XII Details
                      {toggleone ? (
                        <BiChevronUp onClick={handelToggleOne} />
                      ) : (
                        <BiChevronDown onClick={handelToggleOne} />
                      )}
                    </div>
                    <div className="">
                      <div className={toggleone ? " block" : "hidden"}>
                        <div>
                          <div className=" grid grid-cols-1 md:grid-cols-2  gap-10 p-6 justify-items-center items-center ">
                            <div className="w-full">
                              <div className="flex justify-start flex-col gap-1 w-full">
                                <div className="font-semibold text-[15px]">
                                  Course Name
                                </div>
                                <input
                                  type="text"
                                  placeholder="Course Name"
                                  name="CourseName2"
                                  value={state.courseName2}
                                  onChange={handleChange}
                                  className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                                />
                              </div>
                            </div>

                            <div className="w-full">
                              <div className="flex justify-start flex-col gap-1 w-full">
                                <div className="font-semibold text-[15px]">
                                  Specialization
                                </div>
                                <input
                                  type="text"
                                  name="specialization2"
                                  value={state.specialization2}
                                  onChange={handleChange}
                                  placeholder="Specialization"
                                  className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                                />
                              </div>
                            </div>
                          </div>

                          <div className=" grid grid-cols-1 md:grid-cols-2  gap-10 p-6 justify-items-center items-center ">
                            <div className="w-full">
                              <div className="flex justify-start flex-col gap-1 w-full">
                                <div className="font-semibold text-[15px]">
                                  School/University
                                </div>
                                <input
                                  type="text"
                                  name="university2"
                                  value={state.university2}
                                  onChange={handleChange}
                                  placeholder="School/University"
                                  className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                                />
                              </div>
                            </div>
                            <div className="w-full">
                              <div className="flex justify-start flex-col gap-1 w-full">
                                <div className="text-[#000] text-[15px] font-semibold">
                                  Passing Year
                                </div>
                                <select
                                  className="bg-[#F5F7F9] px-3 py-[10px] rounded-[7px] text-sm text-[#000] text-opacity-30"
                                  value={state.passingYear2}
                                  onChange={handleChange}
                                  name="passingYear2"
                                >
                                  <option value=" ">Passing Year</option>
                                  <option value="Dummy">Dummy</option>
                                  <option value="Dummy">Dummy</option>
                                </select>
                              </div>
                            </div>
                          </div>

                          <div className=" grid grid-cols-1 md:grid-cols-2  gap-10 p-6 justify-items-center items-center ">
                            <div className="w-full">
                              <div className="flex justify-start flex-col gap-1 w-full">
                                <div className="font-semibold text-[15px]">
                                  Percentage
                                </div>
                                <input
                                  type="text"
                                  name="percentage2"
                                  value={state.percentage2}
                                  onChange={handleChange}
                                  placeholder="Grading System"
                                  className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                                />
                              </div>
                            </div>
                            <div className="w-full">
                              <div className="flex justify-start flex-col gap-1 w-full">
                                <div className="text-[#000] text-[15px] font-semibold">
                                  Course Type
                                </div>
                                <select
                                  className="bg-[#F5F7F9] px-3 py-[10px] rounded-[7px] text-sm text-[#000] text-opacity-30"
                                  value={state.courseType2}
                                  onChange={handleChange}
                                  name="courseType2"
                                >
                                  <option value=" ">Course Type</option>
                                  <option value="Dummy">Dummy</option>
                                  <option value="Dummy">Dummy</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                        <input />
                      </div>
                    </div>
                  </div>
                  <div
                    onClick={handelToggle}
                    className="border border-gray-200 rounded-md"
                  >
                    <div className=" p-3 flex justify-between">
                      Add Class X Details
                      {select ? (
                        <BiChevronUp onClick={handelToggle} />
                      ) : (
                        <BiChevronDown onClick={handelToggle} />
                      )}
                    </div>
                    <div className="">
                      <div className={select ? " block" : "hidden"}>
                        <div>
                          <div className=" grid grid-cols-1 md:grid-cols-2  gap-10 p-6 justify-items-center items-center ">
                            <div className="w-full">
                              <div className="flex justify-start flex-col gap-1 w-full">
                                <div className="font-semibold text-[15px]">
                                  Course Name
                                </div>
                                <input
                                  type="text"
                                  placeholder="Course Name"
                                  name="courseName1"
                                  value={state.courseName1}
                                  onChange={handleChange}
                                  className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                                />
                              </div>
                            </div>

                            <div className="w-full">
                              <div className="flex justify-start flex-col gap-1 w-full">
                                <div className="font-semibold text-[15px]">
                                  Specialization
                                </div>
                                <input
                                  type="text"
                                  name="specialization1"
                                  value={state.specialization1}
                                  onChange={handleChange}
                                  placeholder="Specialization"
                                  className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                                />
                              </div>
                            </div>
                          </div>

                          <div className=" grid grid-cols-1 md:grid-cols-2  gap-10 p-6 justify-items-center items-center ">
                            <div className="w-full">
                              <div className="flex justify-start flex-col gap-1 w-full">
                                <div className="font-semibold text-[15px]">
                                  School/University
                                </div>
                                <input
                                  type="text"
                                  name="university1"
                                  value={state.university1}
                                  onChange={handleChange}
                                  placeholder="School/University"
                                  className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                                />
                              </div>
                            </div>
                            <div className="w-full">
                              <div className="flex justify-start flex-col gap-1 w-full">
                                <div className="text-[#000] text-[15px] font-semibold">
                                  Passing Year
                                </div>
                                <select
                                  className="bg-[#F5F7F9] px-3 py-[10px] rounded-[7px] text-sm text-[#000] text-opacity-30"
                                  value={state.passingYear1}
                                  onChange={handleChange}
                                  name="passingYear1"
                                >
                                  <option value=" ">Passing Year</option>
                                  <option value="Dummy">Dummy</option>
                                  <option value="Dummy">Dummy</option>
                                </select>
                              </div>
                            </div>
                          </div>

                          <div className=" grid grid-cols-1 md:grid-cols-2  gap-10 p-6 justify-items-center items-center ">
                            <div className="w-full">
                              <div className="flex justify-start flex-col gap-1 w-full">
                                <div className="font-semibold text-[15px]">
                                  Percentage
                                </div>
                                <input
                                  type="text"
                                  name="percentage1"
                                  value={state.percentage1}
                                  onChange={handleChange}
                                  placeholder="Grading System"
                                  className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                                />
                              </div>
                            </div>
                            <div className="w-full">
                              <div className="flex justify-start flex-col gap-1 w-full">
                                <div className="text-[#000] text-[15px] font-semibold">
                                  Course Type
                                </div>
                                <select
                                  className="bg-[#F5F7F9] px-3 py-[10px] rounded-[7px] text-sm text-[#000] text-opacity-30"
                                  value={state.courseType1}
                                  onChange={handleChange}
                                  name="courseType1"
                                >
                                  <option value=" ">Course Type</option>
                                  <option value="Dummy">Dummy</option>
                                  <option value="Dummy">Dummy</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                        <input />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[15px] pt-5">
            <div className="flex items-center justify-between md:pr-3 ">
              <p className="py-3 px-6 font-s-medium lg:text-lg text-base">
                Professional Skill
              </p>

              <button
                onClick={() => {
                  setState({
                    ...state,
                    languagesKnown: [
                      ...state.languagesKnown,
                      {
                        language: "",
                        levels: "",
                        id: new Date(),
                      },
                    ],
                  });
                }}
                className="bg-secondary text-white font-s-medium px-8 py-2 text-sm"
              >
                + Add More
              </button>
            </div>
            <div className="bg-black bg-opacity-60 h-[1px]"></div>

            {state.languagesKnown.map((item, index) => (
              <div>
                <div className="flex justify-end pt-6 px-4 ">
                  <ImBin
                    onClick={() => {
                      const newState = state.languagesKnown.filter(
                        (obj) => obj.id !== item.id
                      );

                      setState({
                        ...state,
                        languagesKnown: newState,
                      });
                    }}
                    className=" cursor-pointer"
                  />
                </div>

                <div className=" grid grid-cols-1   gap-10 px-6 pb-4 justify-items-center items-center ">
                  <div className="w-full">
                    <div className="flex justify-start flex-col gap-1 w-full">
                      <input
                        type="text"
                        placeholder="Enter skills"
                        className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-[15px] pt-5">
            <div className="flex items-center justify-between md:pr-3 ">
              <p className="py-3 px-6 font-s-medium lg:text-lg text-base">
                Add Interest
              </p>

              <button
                onClick={() => {
                  setState({
                    ...state,
                    languagesKnown: [
                      ...state.languagesKnown,
                      {
                        language: "",
                        levels: "",
                        id: new Date(),
                      },
                    ],
                  });
                }}
                className="bg-secondary text-white font-s-medium px-8 py-2 text-sm"
              >
                + Add More
              </button>
            </div>
            <div className="bg-black bg-opacity-60 h-[1px]"></div>

            {state.languagesKnown.map((item, index) => (
              <div>
                <div className="flex justify-end pt-6 px-4 ">
                  <ImBin
                    onClick={() => {
                      const newState = state.languagesKnown.filter(
                        (obj) => obj.id !== item.id
                      );

                      setState({
                        ...state,
                        languagesKnown: newState,
                      });
                    }}
                    className=" cursor-pointer"
                  />
                </div>

                <div className=" grid grid-cols-1   gap-10 px-6 pb-4 justify-items-center items-center ">
                  <div className="w-full">
                    <div className="flex justify-start flex-col gap-1 w-full">
                      <input
                        type="text"
                        placeholder="Enter skills"
                        className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-5 ">
            <div>
              <button className="bg-secondary text-white font-s-medium px-8 py-2 rounded-[7px] text-sm">
                Create Resume
              </button>
            </div>
            <div>
              <button className="bg-[#5E5E5E] text-white font-s-medium px-8 py-2 rounded-[7px] text-sm">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormTwo;
