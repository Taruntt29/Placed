import React, { useEffect, useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import "react-phone-number-input/style.css";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { ImBin } from "react-icons/im";
import { MdArrowBackIos } from "react-icons/md";
import Select from "react-select";
import {
  getAllCitiesAPI,
  getAllCountriesAPI,
  getAllStatesAPI,
} from "../../api/authService";
import { toast } from "react-toastify";
import { BsCalendar3 } from "react-icons/bs";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { buildResumeTemplate1 } from "../../api/publicFunctions";
import { useNavigate } from "react-router-dom";

const FormOne = () => {
  const [select, setSelect] = useState(false);
  const [toggleone, setToggleOne] = useState(false);
  const [toggletwo, setToggleTwo] = useState(false);
  const [togglethree, setToggleThree] = useState(false);
  const [togglefour, setToggleFour] = useState(false);

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
    type: "Experience",
    fullname: "",
    position: "",
    email: "",
    mobile: "",
    address: "",
    city: "",
    country: "",
    state: "",
    aboutMe: "",
    workExperience: [
      {
        designation: "",
        companyName: "",
        location: "",
        currentlyworking: false,
        startDate: "",
        endDate: "",
        responsibilities: "",
      },
    ],
    addAchievements: [
      {
        year: "",
        aboutAchievements: "",
      },
    ],
    professionalSkill: [{ Skill: "" }],
    personalSkill: [{ Skill: "" }],
  });
  const [stateX, setStateX] = useState({
    courseNameX: "",
    schoolUniversityX: "",
    passingYearX: "",
  });
  const [stateXII, setStateXII] = useState({
    courseNameXII: "",
    schoolUniversityXII: "",
    passingYearXII: "",
  });
  const [stateGD, setStateGD] = useState({
    courseName: "",
    schoolUniversity: "",
    passingYear: "",
  });
  const [statePGD, setStatePGD] = useState({
    courseName: "",
    schoolUniversity: "",
    passingYear: "",
  });
  const [stateAD, setStateAD] = useState({
    courseName: "",
    schoolUniversity: "",
    passingYear: "",
  });
  // country
  const [allCountries, setAllCountries] = useState([]);
  const [allStates, setAllStates] = useState([]);
  const [allCities, setAllCities] = useState([]);

  // country, state, city api
  const allCountry = async () => {
    const { data, status, message } = await getAllCountriesAPI(state.country);
    try {
      console.log(data);
      if (status) {
        setAllCountries(data);
      } else {
        toast(message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    allCountry();
  }, []);

  // state
  const allState = async () => {
    try {
      const { data, status, message } = await getAllStatesAPI(
        state.country?.name
      );
      if (status) {
        setAllStates(data);
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    allState();
  }, [state.country]);

  // city
  const allCity = async () => {
    try {
      const { data, status, message } = await getAllCitiesAPI(
        state.country.name,
        state.state.name
      );
      if (status) {
        console.log(data);
        console.log(message);
        setAllCities(data);
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    allCity();
  }, [state.state]);

  const [profilePic, setProfilePic] = useState();
  const [profileImg, setProfileImg] = useState([]);

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const handleProfilePic = (e) => {
    setProfileImg(e.target.files[0]);
    setProfilePic(URL.createObjectURL(e.target.files[0]));
  };
  const navigate = useNavigate();
  const handleSubmitForm = async () => {
    // console.log("State Post", state);
    // console.log("State Post X", stateX);
    // console.log("State Post XII", stateXII);
    // console.log("State Post AD", stateAD);
    // console.log("State Post GD", stateGD);
    // console.log("State Post PGD", statePGD);
    const formdata = new FormData();
    formdata.append("type", state.type);
    formdata.append("fullName", state.fullname);
    formdata.append("position", state.position);
    formdata.append("email", state.email);
    formdata.append("mobile", state.mobile);
    formdata.append("address", state.address);
    formdata.append("city", state.city?.name);
    formdata.append("state", state.state?.name);
    formdata.append("country", state.country?.name);
    formdata.append("aboutMe", state.aboutMe);
    formdata.append("workExperience", JSON.stringify(state.workExperience));
    formdata.append("addAchievements", JSON.stringify(state.addAchievements));
    formdata.append(
      "professionalSkill",
      JSON.stringify(state.professionalSkill)
    );
    formdata.append("personalSkill", JSON.stringify(state.personalSkill));
    formdata.append("uploadImage", profileImg);
    formdata.append(
      "addPostGraduationDetails",
      JSON.stringify({
        SchoolUniversity: statePGD.schoolUniversity,
        passingYear: statePGD.passingYear,
        courseName: statePGD.courseName,
      })
    );
    formdata.append(
      "additionalEducation",
      JSON.stringify({
        SchoolUniversity: stateAD.schoolUniversity,
        passingYear: stateAD.passingYear,
        courseName: stateAD.courseName,
      })
    );
    formdata.append(
      "addGraduationDetails",
      JSON.stringify({
        SchoolUniversity: stateGD.schoolUniversity,
        passingYear: stateGD.passingYear,
        courseName: stateGD.courseName,
      })
    );

    formdata.append(
      "addClassXDetails",
      JSON.stringify({
        SchoolUniversity: stateX.schoolUniversityX,
        passingYear: stateX.passingYearX,
        courseName: stateX.courseNameX,
      })
    );
    formdata.append(
      "addClassXIIDetails",
      JSON.stringify({
        SchoolUniversity: stateXII.schoolUniversityXII,
        passingYear: stateXII.passingYearXII,
        courseName: stateXII.courseNameXII,
      })
    );

    try {
      const response = await buildResumeTemplate1(formdata);

      console.log("respnse from api", response);
      console.log(response);
      if (response.code == 200) {
        console.log(response.data);
        toast(response.message);
        navigate("/template-one", { state: { resumeId: response.data._id } });
      } else {
        toast(response.message);
      }
    } catch (error) {
      console.log(error);
    }
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
                  <div className="font-semibold text-[15px]">Position</div>
                  <input
                    type="text"
                    placeholder="Enter Position"
                    name="position"
                    value={state.position}
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

              <div className="w-full">
                <div className="flex justify-start flex-col gap-1 w-full phoneparent">
                  <div className="font-semibold text-[15px]">Phone Number</div>
                  {/* <PhoneInput
                    placeholder="Mobile Number"
                    name="number"
                    value={state.number}
                    onChange={handleChange}
                    className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                  /> */}
                  <input
                    type="text"
                    name="mobile"
                    value={state.mobile}
                    onChange={handleChange}
                    placeholder="Enter Phone Number"
                    className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                  />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[15px]  pb-2">
              <p className="py-3 px-6 font-s-medium lg:text-lg text-base">
                Address
              </p>
              <div className="bg-black bg-opacity-60 h-[1px] px-5"></div>
              <div className=" grid grid-cols-1 md:grid-cols-3  gap-10 p-6 justify-items-center items-center ">
                <div className="w-full col-span-3">
                  <div className="flex justify-start flex-col gap-1 w-full">
                    <textarea
                      placeholder="Write something here"
                      rows="3"
                      name="address"
                      value={state.address}
                      onChange={handleChange}
                      className="w-full bg-inputcolor resize-none focus:outline-none placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                    />
                  </div>
                </div>

                <div className="w-full">
                  <div className="flex justify-start flex-col gap-1 w-full">
                    <div className="font-semibold text-[15px]">Country</div>
                    <Select
                      options={allCountries}
                      getOptionLabel={(e) => e.name}
                      getOptionValue={(e) => e.name}
                      value={state.country}
                      onChange={(e) =>
                        setState({
                          ...state,
                          country: e,
                        })
                      }
                    />
                  </div>
                </div>

                <div className="w-full">
                  <div className="flex justify-start flex-col gap-1 w-full">
                    <div className="font-semibold text-[15px]">State</div>
                    <Select
                      options={allStates}
                      getOptionLabel={(e) => e.name}
                      getOptionValue={(e) => e.name}
                      value={state.state}
                      onChange={(e) =>
                        setState({
                          ...state,
                          state: e,
                        })
                      }
                    />
                  </div>
                </div>

                <div className="w-full">
                  <div className="flex justify-start flex-col gap-1 w-full">
                    <div className="font-semibold text-[15px]">City</div>
                    <Select
                      options={allCities}
                      getOptionLabel={(e) => e.name}
                      getOptionValue={(e) => e.name}
                      value={state.city}
                      className="z-0"
                      onChange={(e) =>
                        setState({
                          ...state,
                          city: e,
                        })
                      }
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
                    name="aboutMe"
                    value={state.aboutMe}
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
                        companyName: "",
                        location: "",
                        currentlyworking: false,
                        startDate: "",
                        endDate: "",
                        responsibilities: "",
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

            {state?.workExperience?.map((item, index) => (
              <>
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
                <div>
                  <div className=" grid grid-cols-1 md:grid-cols-2  gap-10 p-4 justify-items-start items-start m-3 border rounded-md bg-primary">
                    <div className="w-full">
                      <div className="flex justify-start flex-col gap-1 w-full">
                        <div className="font-semibold text-[15px]">
                          Company Name
                        </div>
                        <input
                          type="text"
                          placeholder="Company Name "
                          name="companyName"
                          value={state.workExperience.companyName}
                          onChange={(e) => {
                            const newState = state.workExperience.map(
                              (i, ind) => {
                                if (ind == index) {
                                  return {
                                    ...i,
                                    companyName: e.target.value,
                                  };
                                } else {
                                  return i;
                                }
                              }
                            );
                            setState({
                              ...state,
                              workExperience: newState,
                            });
                          }}
                          className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                        />
                      </div>
                    </div>

                    <div className="w-full">
                      <div className="flex justify-start flex-col gap-1 w-full">
                        <div className="font-semibold text-[15px]">
                          Designation
                        </div>
                        <input
                          type="text"
                          placeholder="Designation"
                          name="designation"
                          value={state.workExperience.designation}
                          onChange={(e) => {
                            const newState = state.workExperience.map(
                              (i, ind) => {
                                if (ind == index) {
                                  return {
                                    ...i,
                                    designation: e.target.value,
                                  };
                                } else {
                                  return i;
                                }
                              }
                            );
                            setState({
                              ...state,
                              workExperience: newState,
                            });
                          }}
                          className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                        />
                      </div>
                    </div>
                    <div className="col-span-1 w-full ">
                      <div className="w-full">
                        <div className="flex justify-start flex-col gap-1 w-full">
                          <div className="font-semibold text-[15px]">
                            Location
                          </div>
                          <input
                            type="text"
                            name="location"
                            value={state.workExperience.location}
                            onChange={(e) => {
                              const newState = state.workExperience.map(
                                (i, ind) => {
                                  if (ind == index) {
                                    return {
                                      ...i,
                                      location: e.target.value,
                                    };
                                  } else {
                                    return i;
                                  }
                                }
                              );
                              setState({
                                ...state,
                                workExperience: newState,
                              });
                            }}
                            placeholder="Enter Location"
                            className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                          />
                        </div>
                      </div>

                      <div className="flex gap-2 py-5">
                        <input
                          type="checkbox"
                          className=""
                          value={state.workExperience.currentlyworking}
                          // onChange={(e) => setcurrentWorking(!currentWorking)}
                          onChange={(e) => {
                            const newState = state.workExperience.map(
                              (i, ind) => {
                                if (ind == index) {
                                  return {
                                    ...i,
                                    currentlyworking:
                                      !state.workExperience[ind]
                                        .currentlyworking,
                                  };
                                } else {
                                  return i;
                                }
                              }
                            );
                            console.log(state.workExperience);
                            setState({
                              ...state,
                              workExperience: newState,
                            });
                          }}
                        />
                        <p className="text-sm font-s-normal">
                          {" "}
                          I am currently working in this role{" "}
                        </p>
                      </div>
                      <div className=" grid grid-cols-1 md:grid-cols-2  gap-10 justify-items-start items-start">
                        <div className="w-full">
                          <div className="flex justify-start flex-col gap-1 w-full">
                            <div className="text-[#000] text-[15px] font-semibold">
                              Start Date
                            </div>
                            <input
                              type="date"
                              value={state.workExperience.startDate}
                              name="startDate"
                              onChange={(e) => {
                                const newState = state.workExperience.map(
                                  (i, ind) => {
                                    if (ind == index) {
                                      return {
                                        ...i,
                                        startDate: e.target.value,
                                      };
                                    } else {
                                      return i;
                                    }
                                  }
                                );
                                setState({
                                  ...state,
                                  workExperience: newState,
                                });
                              }}
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
                                  className={`col-span-2 border rounded text-sm p-2 ${
                                    state.workExperience.currentlyworking ==
                                    true
                                      ? "bg-gray-400"
                                      : null
                                  }`}
                                  name="endDate"
                                  disabled={
                                    state.workExperience.currentlyworking
                                  }
                                  value={state.workExperience.endDate}
                                  onChange={(e) => {
                                    const newState = state.workExperience.map(
                                      (i, ind) => {
                                        if (ind == index) {
                                          return {
                                            ...i,
                                            endDate: e.target.value,
                                          };
                                        } else {
                                          return i;
                                        }
                                      }
                                    );
                                    setState({
                                      ...state,
                                      workExperience: newState,
                                    });
                                  }}
                                  // className="bg-[#F5F7F9] px-3 py-[10px] md:mt-2 rounded-[7px] text-sm text-[#000] text-opacity-30"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-1 w-full justify-items-start items-start">
                      <div className="w-full">
                        <div className="flex justify-start flex-col gap-1 w-full">
                          <div className="font-semibold text-[15px]">
                            Responsibilities
                          </div>
                          <textarea
                            type="text"
                            rows="7"
                            placeholder="Enter Description "
                            value={state.workExperience.responsibilities}
                            name="responsibilities"
                            onChange={(e) => {
                              const newState = state.workExperience.map(
                                (i, ind) => {
                                  if (ind == index) {
                                    return {
                                      ...i,
                                      responsibilities: e.target.value,
                                    };
                                  } else {
                                    return i;
                                  }
                                }
                              );
                              setState({
                                ...state,
                                workExperience: newState,
                              });
                            }}
                            className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
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
                  <div className="border border-gray-200 rounded-md">
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
                        <div className=" grid grid-cols-1 md:grid-cols-2  gap-10 p-6 justify-items-center items-center ">
                          <div className="w-full">
                            <div className="flex justify-start flex-col gap-1 w-full">
                              <div className="font-semibold text-[15px]">
                                Course Name
                              </div>
                              <input
                                type="text"
                                placeholder="Course Name"
                                name="courseName"
                                value={stateAD.courseName}
                                onChange={(e) =>
                                  setStateAD({
                                    ...stateAD,
                                    courseName: e.target.value,
                                  })
                                }
                                className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                              />
                            </div>
                          </div>

                          <div className="w-full">
                            <div className="flex justify-start flex-col gap-1 w-full">
                              <div className="font-semibold text-[15px]">
                                School/University
                              </div>
                              <input
                                type="text"
                                name="schoolUniversity"
                                value={stateAD.schoolUniversity}
                                onChange={(e) =>
                                  setStateAD({
                                    ...stateAD,
                                    schoolUniversity: e.target.value,
                                  })
                                }
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

                              <div className="relative">
                                <DatePicker
                                  id="DatePicker"
                                  type="string"
                                  className="bg-gray-50 border  z-0 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                  selected={stateAD.passingYear}
                                  name="passingYear"
                                  value={stateAD.passingYear}
                                  onChange={(e) => {
                                    setStateAD({
                                      ...stateAD,
                                      passingYear: e,
                                    });
                                  }}
                                  showYearPicker
                                  dateFormat="yyyy"
                                  yearItemNumber={9}
                                  required
                                />
                                <BsCalendar3 className="absolute right-2 z-1 top-3 text-gray-400" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border border-gray-200 rounded-md">
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
                        <div className=" grid grid-cols-1 md:grid-cols-2  gap-10 p-6 justify-items-center items-center ">
                          <div className="w-full">
                            <div className="flex justify-start flex-col gap-1 w-full">
                              <div className="font-semibold text-[15px]">
                                Course Name
                              </div>
                              <input
                                type="text"
                                placeholder="Course Name"
                                name="courseName"
                                value={statePGD.courseName}
                                onChange={(e) =>
                                  setStatePGD({
                                    ...statePGD,
                                    courseName: e.target.value,
                                  })
                                }
                                className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                              />
                            </div>
                          </div>

                          <div className="w-full">
                            <div className="flex justify-start flex-col gap-1 w-full">
                              <div className="font-semibold text-[15px]">
                                School/University
                              </div>
                              <input
                                type="text"
                                name="schoolUniversity"
                                value={statePGD.schoolUniversity}
                                onChange={(e) =>
                                  setStatePGD({
                                    ...statePGD,
                                    schoolUniversity: e.target.value,
                                  })
                                }
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

                              <div className="relative">
                                <DatePicker
                                  id="DatePicker"
                                  type="string"
                                  className="bg-gray-50 border  z-0 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                  selected={statePGD.passingYear}
                                  name="passingYear"
                                  value={statePGD.passingYear}
                                  onChange={(e) =>
                                    setStatePGD({
                                      ...statePGD,
                                      passingYear: e,
                                    })
                                  }
                                  showYearPicker
                                  dateFormat="yyyy"
                                  yearItemNumber={9}
                                  required
                                />
                                <BsCalendar3 className="absolute right-2 z-1 top-3 text-gray-400" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border border-gray-200 rounded-md">
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
                        <div className=" grid grid-cols-1 md:grid-cols-2  gap-10 p-6 justify-items-center items-center ">
                          <div className="w-full">
                            <div className="flex justify-start flex-col gap-1 w-full">
                              <div className="font-semibold text-[15px]">
                                Course Name
                              </div>
                              <input
                                type="text"
                                placeholder="Course Name"
                                name="courseName"
                                value={stateGD.courseName}
                                onChange={(e) =>
                                  setStateGD({
                                    ...stateGD,
                                    courseName: e.target.value,
                                  })
                                }
                                className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                              />
                            </div>
                          </div>
                          <div className="w-full">
                            <div className="flex justify-start flex-col gap-1 w-full">
                              <div className="font-semibold text-[15px]">
                                School/University
                              </div>
                              <input
                                type="text"
                                name="university2"
                                value={stateGD.schoolUniversity}
                                onChange={(e) =>
                                  setStateGD({
                                    ...stateGD,
                                    schoolUniversity: e.target.value,
                                  })
                                }
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
                              <div className="relative">
                                <DatePicker
                                  id="DatePicker"
                                  type="string"
                                  className="bg-gray-50 border  z-0 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                  selected={stateGD.passingYear}
                                  name="passingYear"
                                  value={stateGD.passingYear}
                                  onChange={(e) =>
                                    setStateGD({
                                      ...stateGD,
                                      passingYear: e,
                                    })
                                  }
                                  showYearPicker
                                  dateFormat="yyyy"
                                  yearItemNumber={9}
                                  required
                                />
                                <BsCalendar3 className="absolute right-2 z-1 top-3 text-gray-400" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-md">
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
                        <div className=" grid grid-cols-1 md:grid-cols-2  gap-10 p-6 justify-items-center items-center ">
                          <div className="w-full">
                            <div className="flex justify-start flex-col gap-1 w-full">
                              <div className="font-semibold text-[15px]">
                                Course Name
                              </div>
                              <input
                                type="text"
                                placeholder="Course Name"
                                name="courseNameXII"
                                value={stateXII.courseNameXII}
                                onChange={(e) =>
                                  setStateXII({
                                    ...stateXII,
                                    courseNameXII: e.target.value,
                                  })
                                }
                                className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                              />
                            </div>
                          </div>

                          <div className="w-full">
                            <div className="flex justify-start flex-col gap-1 w-full">
                              <div className="font-semibold text-[15px]">
                                School/University
                              </div>
                              <input
                                type="text"
                                name="schoolUniversityXII"
                                value={stateXII.schoolUniversityXII}
                                onChange={(e) =>
                                  setStateXII({
                                    ...stateXII,
                                    schoolUniversityXII: e.target.value,
                                  })
                                }
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
                              <div className="relative">
                                <DatePicker
                                  id="DatePicker"
                                  type="string"
                                  className="bg-gray-50 border  z-0 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                  selected={stateXII.passingYearXII}
                                  name="passingYearXII"
                                  value={stateXII.passingYearXII}
                                  onChange={(e) =>
                                    setStateXII({
                                      ...stateXII,
                                      passingYearXII: e,
                                    })
                                  }
                                  showYearPicker
                                  dateFormat="yyyy"
                                  yearItemNumber={9}
                                  required
                                />
                                <BsCalendar3 className="absolute right-2 z-1 top-3 text-gray-400" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border border-gray-200 rounded-md">
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
                        <div className=" grid grid-cols-1 md:grid-cols-2  gap-10 p-6 justify-items-center items-center ">
                          <div className="w-full">
                            <div className="flex justify-start flex-col gap-1 w-full">
                              <div className="font-semibold text-[15px]">
                                Course Name
                              </div>
                              <input
                                type="text"
                                placeholder="Course Name"
                                name="courseNameX"
                                value={stateX.courseNameX}
                                onChange={(e) =>
                                  setStateX({
                                    ...stateX,
                                    courseNameX: e.target.value,
                                  })
                                }
                                className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                              />
                            </div>
                          </div>

                          <div className="w-full">
                            <div className="flex justify-start flex-col gap-1 w-full">
                              <div className="font-semibold text-[15px]">
                                School/University
                              </div>
                              <input
                                type="text"
                                name="schoolUniversityX"
                                value={stateX.schoolUniversityX}
                                onChange={(e) =>
                                  setStateX({
                                    ...stateX,
                                    schoolUniversityX: e.target.value,
                                  })
                                }
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
                              <div className="relative">
                                <DatePicker
                                  id="DatePicker"
                                  type="string"
                                  className="bg-gray-50 border  z-0 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                  selected={stateX.passingYearX}
                                  name="passingYearX"
                                  value={stateX.passingYearX}
                                  onChange={(e) =>
                                    setStateX({
                                      ...stateX,
                                      passingYearX: e,
                                    })
                                  }
                                  showYearPicker
                                  dateFormat="yyyy"
                                  yearItemNumber={9}
                                  required
                                />
                                <BsCalendar3 className="absolute right-2 z-1 top-3 text-gray-400" />
                              </div>
                            </div>
                          </div>
                        </div>
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
                Add Achievements
              </p>

              <button
                onClick={() => {
                  setState({
                    ...state,
                    addAchievements: [
                      ...state.addAchievements,
                      {
                        year: "",
                        aboutAchievements: "",
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

            {state.addAchievements.map((item, index) => (
              <div>
                <div className="flex justify-end pt-6 px-4 ">
                  <ImBin
                    onClick={() => {
                      const newState = state.addAchievements.filter(
                        (obj) => obj.id !== item.id
                      );

                      setState({
                        ...state,
                        addAchievements: newState,
                      });
                    }}
                    className=" cursor-pointer"
                  />
                </div>

                <div className=" grid grid-cols-1 md:grid-cols-2  gap-10 px-6 pb-4 justify-items-center items-center ">
                  <div className="w-full">
                    <div className="flex justify-start flex-col gap-1 w-full">
                      <div className="font-semibold text-[15px]">Year</div>
                      <div className="relative">
                        <DatePicker
                          id="DatePicker"
                          type="string"
                          className="bg-gray-50 border  z-0 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                          selected={item.year}
                          value={item.year}
                          onChange={(e) => {
                            const newState = state.addAchievements.map(
                              (i, ind) => {
                                if (ind == index) {
                                  return {
                                    ...i,
                                    year: e,
                                  };
                                } else {
                                  return i;
                                }
                              }
                            );
                            console.log("year", e);
                            setState({
                              ...state,
                              addAchievements: newState,
                            });
                          }}
                          showYearPicker
                          dateFormat="yyyy"
                          yearItemNumber={9}
                          required
                        />
                        <BsCalendar3 className="absolute right-2 z-1 top-3 text-gray-400" />
                      </div>
                    </div>
                  </div>

                  <div className="w-full">
                    <div className="flex justify-start flex-col gap-1 w-full">
                      <div className="font-semibold text-[15px]">
                        About Achievements
                      </div>
                      <input
                        type="text"
                        name="aboutAchievements"
                        // value={state.addAchievements.aboutAchievements}
                        // onChange={(e) => {
                        //   const newState = state.addAchievements.map((obj) => {
                        //     if (obj.id === item.id) {
                        //       return {
                        //         ...obj,
                        //         aboutAchievements: e.target.value,
                        //       };
                        //     }

                        //     return obj;
                        //   });

                        //   setState({
                        //     ...state,
                        //     addAchievements: newState,
                        //   });
                        // }}
                        value={state.addAchievements.aboutAchievements}
                        onChange={(e) => {
                          const newState = state.addAchievements.map(
                            (i, ind) => {
                              if (ind == index) {
                                return {
                                  ...i,
                                  aboutAchievements: e.target.value,
                                };
                              } else {
                                return i;
                              }
                            }
                          );
                          setState({
                            ...state,
                            addAchievements: newState,
                          });
                        }}
                        placeholder="About Achievements"
                        className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white rounded-[15px] pt-5">
              <div className="flex items-center justify-between md:pr-3 ">
                <p className="py-3 px-6 font-s-medium lg:text-lg text-base">
                  Professional Skill
                </p>

                <button
                  onClick={() => {
                    setState({
                      ...state,
                      professionalSkill: [
                        ...state.professionalSkill,
                        {
                          Skill: "",
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

              {state.professionalSkill.map((item, index) => (
                <div>
                  <div className="flex justify-end pt-6 px-4 ">
                    <ImBin
                      onClick={() => {
                        const newState = state.professionalSkill.filter(
                          (obj) => obj.id !== item.id
                        );

                        setState({
                          ...state,
                          professionalSkill: newState,
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
                          name="Skill"
                          value={state.professionalSkill.Skill}
                          onChange={(e) => {
                            const newState = state.professionalSkill.map(
                              (i, ind) => {
                                if (ind == index) {
                                  return {
                                    ...i,
                                    Skill: e.target.value,
                                  };
                                } else {
                                  return i;
                                }
                              }
                            );
                            setState({
                              ...state,
                              professionalSkill: newState,
                            });
                          }}
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
                  Personal Skill
                </p>

                <button
                  onClick={() => {
                    setState({
                      ...state,
                      personalSkill: [
                        ...state.personalSkill,
                        {
                          Skill: "",
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

              {state.personalSkill.map((item, index) => (
                <div>
                  <div className="flex justify-end pt-6 px-4 ">
                    <ImBin
                      onClick={() => {
                        const newState = state.personalSkill.filter(
                          (obj) => obj.id !== item.id
                        );

                        setState({
                          ...state,
                          personalSkill: newState,
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
                          name="Skill"
                          value={state.personalSkill.Skill}
                          onChange={(e) => {
                            const newState = state.personalSkill.map(
                              (i, ind) => {
                                if (ind == index) {
                                  return {
                                    ...i,
                                    Skill: e.target.value,
                                  };
                                } else {
                                  return i;
                                }
                              }
                            );
                            setState({
                              ...state,
                              personalSkill: newState,
                            });
                          }}
                          placeholder="Enter Skill"
                          className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-5 ">
            <div>
              <button
                onClick={() => handleSubmitForm()}
                className="bg-secondary text-white font-s-medium px-8 py-2 rounded-[7px] text-sm"
              >
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

export default FormOne;
