import React, { useState, useRef } from "react";
import "react-phone-number-input/style.css";
import { Country, State, City } from "country-state-city";
import { BiChevronDown, BiChevronLeft, BiChevronUp } from "react-icons/bi";
import Select from "react-select";
import { Link, useNavigate } from "react-router-dom";
import { BsCamera } from "react-icons/bs";
import { RiArrowLeftSLine } from "react-icons/ri";
import { MdDeleteSweep } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import {
  createCoachExperience,
  deleteEducationImageByCoachId,
  getAllExperienceDataById,
} from "../../../api/coachFunctions";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useEffect } from "react";
const EditProfileExperience = () => {
  const { userDetails } = useSelector((state) => state.flightReducer);
  const coachId = userDetails._id;
  const token = userDetails.token;
  const [products, setProducts] = useState("Work Experience");
  const optionsexperience = [
    { value: "1 year", label: "1 year" },
    { value: "2 years", label: "2 years" },
    { value: "3 years", label: "3 years" },
    { value: "4 years", label: "4 years" },
    { value: "5 years", label: "5 years" },
    { value: "6 years", label: "6 years" },
    { value: "7 years", label: "7 years" },
    { value: "8 years", label: "8 years" },
    { value: "9 years", label: "9 years" },
    { value: "10 years", label: "10 years" },
    { value: "11 years", label: "11 years" },
    { value: "12 years", label: "12 years" },
    { value: "13 years", label: "13 years" },
    { value: "14 years", label: "14 years" },
    { value: "15 years", label: "15 years" },
  ];
  const navigate = useNavigate();
  // upload Experience
  const fileRefExperience = useRef();

  // upload coaching Field
  const fileRefCoachingField = useRef();

  // states
  const [state, setState] = useState({
    coachingExperience: [
      {
        coachingField: "",
        experience: "",
      },
    ],
    CoachingCertifications: [],
    Additionalcertification: [],
    industryExperience: [
      {
        industrySpecialization: "",
        industryField: "",
        experience: "",
      },
    ],
    workExperience: [
      {
        title: "",
        companyName: "",
        location: "",
        startDate: "",
        endDate: "",
      },
    ],
  });

  // dynamic image show

  const [showimgstate, setShowImgState] = useState({
    CoachingCertifications: [],
    Additionalcertification: [],
  });

  let addFormFields = () => {
    setState({
      ...state,
      coachingExperience: [
        ...state.coachingExperience,
        {
          coachingField: "",
          experience: "",
        },
      ],
    });
  };

  let addFormFields2 = () => {
    setState({
      ...state,
      industryExperience: [
        ...state.industryExperience,
        {
          industrySpecialization: "",
          industryField: "",
          experience: "",
        },
      ],
    });
  };

  let addFormFields3 = () => {
    setState({
      ...state,
      workExperience: [
        ...state.workExperience,
        {
          title: "",
          companyName: "",
          location: "",
          startDate: "",
          endDate: "",
        },
      ],
    });
  };

  const submitCreateProfileData = async () => {
    console.log(state);
    const formdata = new FormData();
    formdata.append(
      "coachingExperience",
      JSON.stringify(state.coachingExperience)
    );

    // formdata.append(
    //   "CoachingCertifications",
    //   JSON.stringify(state.CoachingCertifications)
    // );

    // for (var i = 0; i < CoachingCertifications.length; i++) {
    //   formdata.append("CoachingCertifications", CoachingCertifications[i]);
    // }

    state.CoachingCertifications.map((item) =>
      formdata.append("CoachingCertifications", item)
    );
    state.Additionalcertification.map((item) =>
      formdata.append("Additionalcertification", item)
    );
    // for (var i = 0; i < Additionalcertification.length; i++) {
    //   formdata.append("Additionalcertification", Additionalcertification[i]);
    // }
    formdata.append(
      "industryExperience",
      JSON.stringify(state.industryExperience)
    );
    formdata.append("workExperience", JSON.stringify(state.workExperience));

    console.log("formdata", formdata);

    try {
      const response = await createCoachExperience(formdata, token);
      console.log("errr", response);
      if (response.status) {
        console.log(response.data);
        toast(response.message);
        navigate("/coach/my-profile");
      } else {
        toast(response.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getExperienceData = async () => {
    const { data, status, message } = await getAllExperienceDataById(coachId);

    // console.log(
    //   "data.schoolUniversityX[0].SchoolUniversity",
    //   data.addClassXDetails
    // );
    if (status) {
      console.log("fhfhryt", data?.Additionalcertification[0]);

      setState({
        ...state,
        // coachingExperience: [
        //   {
        //     coachingField: data.coachingExperience[0].coachingField,
        //     experience: data.coachingExperience[0].experience,
        //   },
        // ],
        coachingExperience: data.coachingExperience,
        // industryExperience: [
        //   {
        //     industrySpecialization:
        //       data.industryExperience[0].industrySpecialization,
        //     industryField: data.industryExperience[0].industryField,
        //     experience: data.industryExperience[0].experience,
        //   },
        // ],
        industryExperience: data.industryExperience,
        workExperience: data.workExperience,
        // workExperience: [
        //   {
        //     title: data.workExperience[0].title,
        //     companyName: data.workExperience[0].companyName,
        //     location: data.workExperience[0].location,
        //     startDate: data.workExperience[0].startDate,
        //     endDate: data.workExperience[0].endDate,
        //   },
        // ],
      });
      setShowImgState({
        Additionalcertification: data?.Additionalcertification,
        CoachingCertifications: data?.CoachingCertifications,
      });
    } else {
      toast(message);
    }
  };

  useEffect(() => {
    getExperienceData();
  }, []);

  const deleteUploadDocuement = async (url, type) => {
    try {
      const response = await deleteEducationImageByCoachId(coachId, url, type);
      if (response.status) {
        getExperienceData();
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <div className="bg-inputcolor lg:px-0 px-5">
    <div className="container mx-auto py-20  ">
      <div className="flex items-center mb-4 font-s-medium text-secondary text-lg">
        <Link to="/coach/edit-coach-profile/education">
          {" "}
          <BiChevronLeft className="text-3xl" />{" "}
        </Link>
        Edit Profile 
      </div>
      <div className=" md:w-[50%] grid grid-cols-3 rounded  justify-items-center items-center mx-4 border-buttonsome py-2 px-2">
        <Link to="/coach/edit-coach-profile/General">
          <div
            // onClick={() => setProducts("General")}
            className={`px-5 py-2   text-center font-text font-s-regular md:text-base text-sm  w-fit ${
              products == "General"
                ? "font-bold  text-secondary border-secondary border-b-2 "
                : " text-black "
            }`}
          >
            General
          </div>
        </Link>
        <Link to="/coach/edit-coach-profile/Education">
          <div
            // onClick={() => setProducts("Education")}
            className={`px-5 py-2 text-center  font-text font-s-regular  md:text-base text-sm  w-fit  ${
              products == "Education"
                ? "font-bold  text-secondary border-secondary border-b-2"
                : "  text-black"
            }`}
          >
            Education
          </div>
        </Link>
        <Link to="/coach/edit-coach-profile/Experience">
          <div
            // onClick={() => setProducts("Work Experience")}
            className={`px-5 py-2   text-center font-text font-s-normal md:text-base text-sm  w-fit ${
              products == "Work Experience"
                ? "font-bold  text-secondary border-secondary border-b-2  "
                : " text-black "
            }`}
          >
            Experience
          </div>
        </Link>
      </div>

      {products == "Work Experience" ? (
        <div>
          <div>
            <div className="bg-[#F5F7F9] md:rounded-[15px] p-6 flex flex-col justify-start w-full gap-6">
              <div className="bg-white rounded-[15px]">
                <div className="flex items-center justify-between md:pr-3">
                  <p className="py-3 px-6 font-s-medium lg:text-lg text-base">
                    Coaching Experience
                  </p>
                  <button
                    onClick={addFormFields}
                    className="bg-secondary text-white font-s-medium rounded-md px-10 py-2 text-sm"
                  >
                    + Add More
                  </button>
                </div>
                <div className="bg-black bg-opacity-60 h-[1px]"></div>

                {state.coachingExperience.map((item, index) => {
                  return (
                    <div className="border">
                      <div className="flex justify-end items-center px-5 pt-2">
                        <div
                          className="bg-secondary text-white rounded p-2 cursor-pointer"
                          onClick={() => {
                            const newState = state.coachingExperience.filter(
                              (i, ind) => i.coachingField != item.coachingField
                            );
                            setState({
                              ...state,
                              coachingExperience: newState,
                            });
                          }}
                        >
                          <MdDeleteSweep className="" size={30} />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 py-3 px-6 justify-items-center items-center">
                        <div className="w-full">
                          <div className="flex justify-start flex-col gap-1 w-full">
                            <div className="font-semibold text-[15px]">
                            <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">Coaching Field</span>
                            </div>

                            <input
                              type="text"
                              placeholder="Enter here "
                              name="coachingField"
                              value={item.coachingField}
                              // onChange={handleChange}
                              onChange={(e) => {
                                const newState = state.coachingExperience.map(
                                  (i, ind) => {
                                    if (ind == index) {
                                      return {
                                        ...i,
                                        coachingField: e.target.value,
                                      };
                                    } else {
                                      return i;
                                    }
                                  }
                                );
                                setState({
                                  ...state,
                                  coachingExperience: newState,
                                });
                              }}
                              className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                            />
                          </div>
                        </div>
                        <div className="w-full">
                          <div className="flex justify-start flex-col gap-1 w-full">
                            <div className="font-semibold text-[15px]">
                            <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">Experience</span>
                            </div>

                            <Select
                              value={{
                                label: item.experience,
                                value: item.experience,
                              }}
                              // onChange={(e) =>
                              //   setState({ ...state, experience: e })
                              // }
                              onChange={(e) => {
                                const newState = state.coachingExperience.map(
                                  (i, ind) => {
                                    if (ind == index) {
                                      return {
                                        ...i,
                                        experience: e.value,
                                      };
                                    } else {
                                      return i;
                                    }
                                  }
                                );
                                setState({
                                  ...state,
                                  coachingExperience: newState,
                                });
                              }}
                              options={optionsexperience}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
                <div className="px-6 grid grid-cols-1 md:grid-cols-2 gap-4 py-3 justify-start items-start">
                  <div className="w-full">
                    <div className="flex justify-between items-center">
                      <p className="font-s-medium text-base">
                      <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">Coaching Specification Certificatons</span>
                      </p>
                      <div
                        onClick={(e) => fileRefCoachingField.current.click()}
                        className="flex gap-1 items-center justify-center"
                      >
                        <p className="text-xs text-secondary font-s-medium cursor-pointer">
                          Add File +
                        </p>
                        <input
                          className="hidden"
                          ref={fileRefCoachingField}
                          onChange={(e) =>
                            setState({
                              ...state,
                              CoachingCertifications: [
                                ...state.CoachingCertifications,
                                e.target.files[0],
                              ],
                            })
                          }
                          type="file"
                        />
                      </div>
                    </div>
                    {console.log(
                      "CoachingCertifications",
                      state.CoachingCertifications
                    )}
                    {showimgstate.CoachingCertifications.map((item, index) => {
                      return (
                        <>
                          <p className=" flex justify-end items-center">
                            <div
                              className="bg-primary text-secondary rounded p-1 cursor-pointer"
                              // onClick={() => {
                              //   const newState =
                              //     showimgstate.CoachingCertifications.filter(
                              //       (i, ind) => ind !== index
                              //     );
                              //   setShowImgState({
                              //     ...showimgstate,
                              //     CoachingCertifications: newState,
                              //   });
                              // }}
                            >
                              <RxCross2
                                onClick={(e) =>
                                  deleteUploadDocuement(
                                    item,
                                    "CoachingCertifications"
                                  )
                                }
                                className=""
                                size={20}
                              />
                            </div>
                          </p>
                          <div className="bg-inputcolor rounded-md">
                            <div className="flex items-center justify-center mx-auto py-6 ">
                              <div className="flex flex-col  items-center justify-center py-3">
                                {/* <img
                                  alt="upload"
                                  className="w-full h-96"
                                  // src={URL.createObjectURL(item)}
                                  src={item}
                                /> */}

                                <img
                                  alt="upload"
                                  className="w-full h-96"
                                  // src={URL.createObjectURL(item)}
                                  src={
                                    typeof item?.size == "number"
                                      ? URL.createObjectURL(item)
                                      : item
                                  }
                                />
                              </div>
                            </div>
                          </div>
                        </>
                      );
                    })}
                    {state.CoachingCertifications.map((item, index) => {
                      return (
                        <>
                          <p className=" flex justify-end items-center">
                            <div
                              className="bg-primary text-secondary rounded p-1 cursor-pointer"
                              onClick={() => {
                                const newState =
                                  state.CoachingCertifications.filter(
                                    (i, ind) => ind !== index
                                  );
                                setState({
                                  ...state,
                                  CoachingCertifications: newState,
                                });
                              }}
                            >
                              <RxCross2 className="" size={20} />
                            </div>
                          </p>
                          <div className="bg-inputcolor rounded-md">
                            <div className="flex items-center justify-center mx-auto py-6 ">
                              <div className="flex flex-col  items-center justify-center py-3">
                                {/* <img
                                  alt="upload"
                                  className="w-full h-96"
                                  // src={URL.createObjectURL(item)}
                                  src={item}
                                /> */}

                                <img
                                  alt="upload"
                                  className="w-full h-96"
                                  // src={URL.createObjectURL(item)}
                                  src={
                                    typeof item?.size == "number"
                                      ? URL.createObjectURL(item)
                                      : item
                                  }
                                />
                              </div>
                            </div>
                          </div>
                        </>
                      );
                    })}
                    {/* repeat */}
                  </div>
                  <div className="w-full">
                    <div className="flex justify-between items-center">
                      <p className="font-s-medium text-base">
                      <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">Additional Certificatons</span>
                      </p>
                      <div
                        onClick={(e) => fileRefExperience.current.click()}
                        className="flex gap-1 items-center justify-center"
                      >
                        <p className="text-xs text-secondary font-s-medium cursor-pointer">
                          Add File +
                        </p>
                        <input
                          className="hidden"
                          ref={fileRefExperience}
                          onChange={(e) =>
                            setState({
                              ...state,
                              Additionalcertification: [
                                ...state.Additionalcertification,
                                e.target.files[0],
                              ],
                            })
                          }
                          type="file"
                        />
                      </div>
                    </div>
                    {/* repeat */}
                    {showimgstate.Additionalcertification.map((item, index) => {
                      return (
                        <>
                          <p className=" flex justify-end items-center">
                            <div
                              className="bg-primary text-secondary rounded p-1 cursor-pointer"
                              // onClick={() => {
                              //   const newState =
                              //     showimgstate.Additionalcertification.filter(
                              //       (i, ind) => ind !== index
                              //     );
                              //   setShowImgState({
                              //     ...showimgstate,
                              //     Additionalcertification: newState,
                              //   });
                              // }}
                            >
                              <RxCross2
                                onClick={(e) =>
                                  deleteUploadDocuement(
                                    item,
                                    "Additionalcertification"
                                  )
                                }
                                className=""
                                size={20}
                              />
                            </div>
                          </p>
                          <div className="bg-inputcolor rounded-md">
                            <div className="flex items-center justify-center mx-auto py-6 ">
                              <div className="flex flex-col  items-center justify-center py-3">
                                {/* <img
                                  alt="upload"
                                  className="w-full h-96"
                                  // src={URL.createObjectURL(item)}
                                  src={item}
                                /> */}

                                <img
                                  alt="upload"
                                  className="w-full h-96"
                                  // src={URL.createObjectURL(item)}
                                  src={
                                    typeof item?.size == "number"
                                      ? URL.createObjectURL(item)
                                      : item
                                  }
                                />
                              </div>
                            </div>
                          </div>
                        </>
                      );
                    })}
                    {state.Additionalcertification.map((item, index) => {
                      return (
                        <>
                          <p className=" flex justify-end items-center">
                            <div
                              className="bg-primary text-secondary rounded p-1 cursor-pointer"
                              onClick={() => {
                                const newState =
                                  state.Additionalcertification.filter(
                                    (i, ind) => ind !== index
                                  );
                                setState({
                                  ...state,
                                  Additionalcertification: newState,
                                });
                              }}
                            >
                              <RxCross2 className="" size={20} />
                            </div>
                          </p>
                          {console.log("imagevelue", item)}
                          <div className="bg-inputcolor rounded-md">
                            <div className="flex items-center justify-center mx-auto py-6 ">
                              <div className="flex flex-col  items-center justify-center py-3">
                                {/* <img
                                  alt="upload"
                                  className="w-full h-96"
                                  // src={URL.createObjectURL(item)}
                                  src={item}
                                /> */}
                                <img
                                  alt="upload"
                                  className="w-full h-96"
                                  // src={URL.createObjectURL(item)}
                                  src={
                                    typeof item?.size == "number"
                                      ? URL.createObjectURL(item)
                                      : item
                                  }
                                />
                              </div>
                            </div>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-[15px]">
                <div className="flex items-center justify-between md:pr-3">
                  <p className="py-3 px-6 font-s-medium lg:text-lg text-base">
                  <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">Industry Experience</span>
                  </p>
                  <button
                    onClick={addFormFields2}
                    className="bg-secondary text-white font-s-medium rounded-md px-10 py-2 text-sm"
                  >
                    + Add More
                  </button>
                </div>
                <div className="bg-black bg-opacity-60 h-[1px]"></div>
                {state.industryExperience.map((item, index) => {
                  return (
                    <div className="border">
                      <div className="flex justify-end items-center px-5 pt-2">
                        <div
                          className="bg-secondary text-white rounded p-2 cursor-pointer"
                          onClick={() => {
                            const newState = state.industryExperience.filter(
                              (i, ind) =>
                                i.industrySpecialization !=
                                item.industrySpecialization
                            );
                            setState({
                              ...state,
                              industryExperience: newState,
                            });
                          }}
                        >
                          <MdDeleteSweep className="" size={30} />
                        </div>
                      </div>
                      <div className="  px-6 py-3 justify-items-center items-center">
                        <div className="w-full">
                          <div className="flex justify-start flex-col gap-1 w-full">
                            <div className="font-semibold text-[15px]">
                            <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">Industry Specialization</span>
                            </div>
                            <input
                              type="text"
                              placeholder="Enter here designation"
                              name="designation"
                              value={item.industrySpecialization}
                              onChange={(e) => {
                                const newState = item.map((i, ind) => {
                                  if (ind == index) {
                                    return {
                                      ...i,
                                      industrySpecialization: e.target.value,
                                    };
                                  } else {
                                    return i;
                                  }
                                });
                                setState({
                                  ...state,
                                  industryExperience: newState,
                                });
                              }}
                              className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-6 justify-items-center items-center">
                        <div className="w-full">
                          <div className="flex justify-start flex-col gap-1 w-full">
                            <div className="font-semibold text-[15px]">
                            <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">Industry Field</span>
                            </div>
                            <input
                              type="text"
                              placeholder="Enter here industry "
                              name="companyName"
                              value={item.industryField}
                              onChange={(e) => {
                                const newState = item.map((i, ind) => {
                                  if (ind == index) {
                                    return {
                                      ...i,
                                      industryField: e.target.value,
                                    };
                                  } else {
                                    return i;
                                  }
                                });
                                setState({
                                  ...state,
                                  industryExperience: newState,
                                });
                              }}
                              className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                            />
                          </div>
                        </div>
                        <div className="w-full">
                          <div className="flex justify-start flex-col gap-1 w-full">
                            <div className="font-semibold text-[15px]">
                            <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">Experience</span>
                            </div>
                            <Select
                              value={{
                                label: item.experience,
                                value: item.experience,
                              }}
                              // onChange={(e) => {
                              //   const newState = item.map(
                              //     (i, ind) => {
                              //       if (ind == index) {
                              //         return {
                              //           ...i,
                              //           experience: e.target.value,
                              //         };
                              //       } else {
                              //         return i;
                              //       }
                              //     }
                              //   );
                              //   setState({
                              //     ...state,
                              //     experience: newState,
                              //   });
                              // }}
                              onChange={(e) => {
                                const newState = item.map((i, ind) => {
                                  if (ind == index) {
                                    return {
                                      ...i,
                                      experience: e.value,
                                    };
                                  } else {
                                    return i;
                                  }
                                });
                                setState({
                                  ...state,
                                  industryExperience: newState,
                                });
                              }}
                              options={optionsexperience}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="bg-white rounded-[15px]">
                <div className="flex items-center justify-between md:pr-3">
                  <p className="py-3 px-6 font-s-medium lg:text-lg text-base">
                  <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">Work Experience</span>
                  </p>
                  <button
                    onClick={addFormFields3}
                    className="bg-secondary text-white font-s-medium rounded-md px-10 py-2 text-sm"
                  >
                    + Add More
                  </button>
                </div>
                <div className="bg-black bg-opacity-60 h-[1px]"></div>
                {state.workExperience.map((item, index) => {
                  return (
                    <div className="border">
                      <div className="flex justify-end items-center px-5 pt-2">
                        <div
                          className="bg-secondary text-white rounded p-2 cursor-pointer"
                          onClick={() => {
                            const newState = state.workExperience.filter(
                              (i, ind) => i.title != item.title
                            );
                            setState({
                              ...state,
                              workExperience: newState,
                            });
                          }}
                        >
                          <MdDeleteSweep className="" size={30} />
                        </div>
                      </div>
                      <div className="  px-6 py-3 justify-items-center items-center">
                        <div className="w-full">
                          <div className="flex justify-start flex-col gap-1 w-full">
                            <div className="font-semibold text-[15px]">
                            <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">Title</span>
                            </div>
                            <input
                              type="text"
                              placeholder="Enter title"
                              name="title"
                              value={item.title}
                              onChange={(e) => {
                                const newState = item.map((i, ind) => {
                                  if (ind == index) {
                                    return {
                                      ...i,
                                      title: e.target.value,
                                    };
                                  } else {
                                    return i;
                                  }
                                });
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

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-6 justify-items-center items-center">
                        <div className="w-full">
                          <div className="flex justify-start flex-col gap-1 w-full">
                            <div className="font-semibold text-[15px]">
                              Company Name{" "}
                            </div>
                            <input
                              type="text"
                              placeholder="Company Name "
                              name="companyName"
                              value={item.companyName}
                              onChange={(e) => {
                                const newState = item.map((i, ind) => {
                                  if (ind == index) {
                                    return {
                                      ...i,
                                      companyName: e.target.value,
                                    };
                                  } else {
                                    return i;
                                  }
                                });
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
                            <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">Location</span>
                            </div>
                            <input
                              type="text"
                              name="location"
                              value={item.location}
                              onChange={(e) => {
                                const newState = item.map((i, ind) => {
                                  if (ind == index) {
                                    return {
                                      ...i,
                                      location: e.target.value,
                                    };
                                  } else {
                                    return i;
                                  }
                                });
                                setState({
                                  ...state,
                                  workExperience: newState,
                                });
                              }}
                              placeholder="Location"
                              className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                            />
                          </div>
                        </div>
                      </div>

                      {/* <div className="flex px-6 items-center justify-start">
                        <input type="checkbox" id="status" />
                        <label
                          for="status"
                          className="py-3 px-3 font-s-regular text-base cursor-pointer"
                        >
                          I am currently working in this role
                        </label>
                      </div> */}
                      <div className="flex px-6 items-center justify-start">
                        <input
                          type="checkbox"
                          // id="status"
                          // value={currentWorking}
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
                        <label
                          // for="status"
                          className="py-3 px-3 font-s-regular text-base cursor-pointer"
                        >
                          I am currently working in this role
                        </label>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 justify-items-center items-center">
                        <div className="flex justify-start flex-col gap-1 w-full">
                          <div className="font-semibold text-[15px]">
                          <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry."> Start Date{" "}</span>
                          </div>
                          <div className="grid grid-cols-2 gap-3">
                            <input
                              type="date"
                              className="col-span-2 border rounded text-sm p-2"
                              name="startDate"
                              value={item.startDate}
                              onChange={(e) => {
                                const newState = item.map((i, ind) => {
                                  if (ind == index) {
                                    return {
                                      ...i,
                                      startDate: e.target.value,
                                    };
                                  } else {
                                    return i;
                                  }
                                });
                                setState({
                                  ...state,
                                  workExperience: newState,
                                });
                              }}
                            />
                          </div>
                        </div>

                        <div className="flex justify-start flex-col gap-1 w-full">
                          <div className="font-semibold text-[15px]">
                          <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">End Date{" "}</span>
                          </div>
                          <div className="grid grid-cols-2 gap-3">
                            <input
                              type="date"
                              className="col-span-2 border rounded text-sm p-2"
                              name="endDate"
                              value={item.endDate}
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
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
                {/* <Link to="/welcome-page"> */}{" "}
                <div className=" p-6">
                  <button
                    onClick={submitCreateProfileData}
                    className="bg-secondary text-white font-s-medium rounded-md px-8 py-2  text-sm"
                  >
                    Update Profile
                  </button>
                </div>
                {/* </Link> */}
              </div>
            </div>
          </div>
        </div>
      ) : null}
      </div>
    </div>
  );
};

export default EditProfileExperience;
