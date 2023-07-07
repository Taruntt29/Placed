import React, { useState, useEffect } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { toast } from "react-toastify";
import { createCoachEducation } from "../../../api/coachFunctions";
import { RxCross2 } from "react-icons/rx";
import { useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RiArrowLeftSLine } from "react-icons/ri";
import { BsCalendar3 } from "react-icons/bs";
import YearPicker from "react-year-picker";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  getAllCitiesAPI,
  getAllCountriesAPI,
  getAllStatesAPI,
} from "../../../api/authService";
const CoachProfileEducation = () => {
  const [select, setSelect] = useState(false);
  const [toggleone, setToggleOne] = useState(false);
  const [allCountries, setAllCountries] = useState([]);
  const [allStates, setAllStates] = useState([]);
  const [allCities, setAllCities] = useState([]);

  const [allCountriesPer, setAllCountriesPer] = useState([]);
  const [allStatesPer, setAllStatesPer] = useState([]);
  const [allCitiesPer, setAllCitiesPer] = useState([]);

  const [savedate, setSavedate] = useState(new Date());

  const handelToggle = () => {
    setSelect(!select);
  };

  const handelToggleOne = () => {
    setToggleOne(!toggleone);
  };

  const { userDetails } = useSelector((state) => state.flightReducer);
  const token = userDetails.token;

  const [graduationDetailsShow, setGraduationDetail] = useState([
    {
      type: "Add Graduation Details",
      courseName: "",
      courseType: "",
      specialization: "",
      yearOfDegree: "",
      schoolUniversity: "",
      passingYear: "",
      percentage: "",
    },
  ]);
  console.log("graduationDetailsShow", graduationDetailsShow);
  const [postGraduationDetailsShow, setPostGraduationDetail] = useState([
    {
      type: "Add Post Graduation Details",
      courseName: "",
      courseType: "",
      specialization: "",
      yearOfDegree: "",
      SchoolUniversity: "",
      passingYear: "",
      percentage: "",
    },
  ]);

  const [AdditionalDegreeDetailsShow, setAdditionalDetail] = useState([
    {
      type: "Additional Degree",
      courseName: "",
      courseType: "",
      specialization: "",
      yearOfDegree: "",
      schoolUniversity: "",
      passingYear: "",
      percentage: "",
    },
  ]);

  // console.log("Additional Details", AdditionalDegreeDetailsShow);
  // console.log("Gration Details", graduationDetailsShow);
  // console.log("Post Gration Details", postGraduationDetailsShow);

  let handleChangeAddDetails = (i, e) => {
    let newFormValues = [...graduationDetailsShow];
    newFormValues[i][e.target.name] = e.target.value;
    setGraduationDetail(newFormValues);
  };

  let handleChangePostGraduationDetails = (i, e) => {
    let newFormValuesPst = [...postGraduationDetailsShow];
    newFormValuesPst[i][e.target.name] = e.target.value;
    setPostGraduationDetail(newFormValuesPst);
  };
  let handleChangeAddDetailsPassingYear = (i, e) => {
    let newFormValues = [...graduationDetailsShow];
    newFormValues[i]["passingYear"] = e;
    setGraduationDetail(newFormValues);
  };

  let handleChangePostGraduationDetailsPassingYear = (i, e) => {
    let newFormValuesPst = [...postGraduationDetailsShow];
    newFormValuesPst[i]["passingYear"] = e;
    setPostGraduationDetail(newFormValuesPst);
  };

  let handleChangeAdditionalDegree = (i, e) => {
    console.log("yearpicker", e);
    let newFormAdditionalDetails = [...AdditionalDegreeDetailsShow];
    newFormAdditionalDetails[i][e.target.name] = e.target.value;
    setAdditionalDetail(newFormAdditionalDetails);
  };

  let handleAdditionalDegreePassingYear = (i, e) => {
    let newFormAdditionalDetails = [...AdditionalDegreeDetailsShow];
    newFormAdditionalDetails[i]["passingYear"] = e;
    setAdditionalDetail(newFormAdditionalDetails);
  };

  let AddGraduation = () => {
    setGraduationDetail([
      ...graduationDetailsShow,
      {
        type: "Add Graduation Details",
        courseName: "",
        courseType: "",
        specialization: "",
        yearOfDegree: "",
        schoolUniversity: "",
        passingYear: "",
        percentage: "",
      },
    ]);
  };

  let removeFormFields = (i) => {
    let newFormValues = [...graduationDetailsShow];
    newFormValues.splice(i, 1);
    setGraduationDetail(newFormValues);
  };

  let AddPostGraduation = () => {
    setPostGraduationDetail([
      ...postGraduationDetailsShow,
      {
        type: "Add Post Graduation Details",
        courseName: "",
        courseName: "",
        // specializationPs: "",
        specialization: "",
        schoolUniversity: "",
        passingYear: "",
        percentage: "",
      },
    ]);
  };

  let AddAdditonalDetails = () => {
    setAdditionalDetail([
      ...AdditionalDegreeDetailsShow,
      {
        type: "Additional Degree",
        courseName: "",
        courseType: "",
        specialization: "",
        yearOfDegree: "",
        schoolUniversity: "",
        passingYear: "",
        percentage: "",
      },
    ]);
  };

  let removePostGraducation = (i) => {
    let newFormValuesPst = [...postGraduationDetailsShow];
    newFormValuesPst.splice(i, 1);
    setPostGraduationDetail(newFormValuesPst);
  };

  let removeAdditonalDetails = (i) => {
    let newFormAdditionalDetails = [...AdditionalDegreeDetailsShow];
    newFormAdditionalDetails.splice(i, 1);
    setAdditionalDetail(newFormAdditionalDetails);
  };

  const [state, setState] = useState({
    type: "Additional Degree",
    schoolUniversityX: "",
    passingYearX: "",
    percentageX: "",
    countryx: "",
    statex: "",
    cityx: "",
    pincodexii: "",
    pincodexi: "",
    schoolUniversityXii: "",
    passingYearXii: "",
    percentageXii: "",
    courseTypeXii: "",
    countryxii: "",
    statexii: "",
    cityxii: "",
  });
  const [uploaddocument, setUploadDocument] = useState([]);
  console.log("uploaddocument", uploaddocument);
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  // country, state, city api
  const allCountry = async () => {
    const { data, status, message } = await getAllCountriesAPI(state.countryx);
    try {
      // console.log(data);
      if (status) {
        setAllCountries(data);
      } else {
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
    const formdata = new FormData();
    formdata.append("country", state.statex);
    try {
      const { data, status, message } = await getAllStatesAPI(state.countryx);
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
  }, [state.countryx]);

  // city
  const allCity = async () => {
    try {
      const { data, status, message } = await getAllCitiesAPI(
        state.countryx,
        state.statex
      );
      if (status) {
        // console.log(data);
        // console.log(message);
        setAllCities(data);
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    allCity();
  }, [state.statex]);

  // console.log("All Countries", allCountries);
  // console.log("All State", allState);
  // console.log("All Cities", allCities);

  const allCountryPer = async () => {
    const { data, status, message } = await getAllCountriesAPI(
      state.countryxii
    );
    try {
      // console.log(data);
      if (status) {
        setAllCountriesPer(data);
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    allCountryPer();
  }, []);

  // state
  const allStatePer = async () => {
    const formdata = new FormData();
    formdata.append("state", state.statexii);
    try {
      const { data, status, message } = await getAllStatesAPI(state.countryxii);
      if (status) {
        setAllStatesPer(data);
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    allStatePer();
  }, [state.countryxii]);

  // city
  const allCityPer = async () => {
    try {
      const { data, status, message } = await getAllCitiesAPI(
        state.countryxii,
        state.statexii
      );
      if (status) {
        // console.log(data);
        console.log(message);
        setAllCitiesPer(data);
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    allCityPer();
  }, [state.statexii]);
  const handleChangePassingYearX = (e) => {
    setState({
      ...state,
      ["passingYearX"]: e,
    });
  };
  const handleChangePassingYearXii = (e) => {
    setState({
      ...state,
      ["passingYearXii"]: e,
    });
  };
  const navigate = useNavigate();
  // console.log("State X Details", s);
  // upload coaching Field
  // console.log("uploaddocument[0]", uploaddocument[0]);
  const fileRefDocs = useRef();
  const handleEducationAPI = async () => {
    console.log("state.pincodex", state);
    if (
      graduationDetailsShow[0].courseName &&
      graduationDetailsShow[0].courseType &&
      graduationDetailsShow[0].specialization &&
      graduationDetailsShow[0].yearOfDegree &&
      graduationDetailsShow[0].schoolUniversity &&
      graduationDetailsShow[0].passingYear &&
      graduationDetailsShow[0].percentage &&
      state.schoolUniversityX &&
      state.passingYearX &&
      state.percentageX &&
      state.countryx &&
      state.statex &&
      state.cityx &&
      state.pincodexii &&
      state.pincodexi &&
      state.schoolUniversityXii &&
      state.passingYearXii &&
      state.percentageXii &&
      state.courseTypeXii &&
      state.countryxii &&
      state.statexii &&
      state.cityxii &&
      uploaddocument[0]
    ) {
      try {
        console.log({
          addClassXDetails: {
            SchoolUniversity: state.schoolUniversityX,
            passingYear: state.passingYearX,
            percentage: state.percentageX,
          },
          addClassXIIDetails: {
            SchoolUniversity: state.schoolUniversityXii,
            passingYear: state.passingYearXii,
            percentageXii: state.percentageXii,
            courseType: state.courseTypeXii,
          },
          Educationdetails: [
            ...AdditionalDegreeDetailsShow,
            ...postGraduationDetailsShow,
            ...graduationDetailsShow,
          ],
          uploaddocument: uploaddocument,
        });
        const formdata = new FormData();
        formdata.append(
          "addClassXDetails",
          JSON.stringify({
            SchoolUniversity: state.schoolUniversityX,
            passingYear: state.passingYearX,
            percentage: state.percentageX,
            city: state.cityx,
            state: state.statex,
            country: state.countryx,
            pincode: state.pincodexi,
          })
        );
        formdata.append(
          "addClassXIIDetails",
          JSON.stringify({
            SchoolUniversity: state.schoolUniversityXii,
            passingYear: state.passingYearXii,
            percentageXii: state.percentageXii,
            courseType: state.courseTypeXii,
            city: state.cityxii,
            state: state.statexii,
            country: state.countryxii,
            pincode: state.pincodexii,
          })
        );
        let array = [];
        array.push(uploaddocument[0]);
        formdata.append(
          "Educationdetails",
          JSON.stringify([
            ...AdditionalDegreeDetailsShow,
            ...postGraduationDetailsShow,
            ...graduationDetailsShow,
          ])
        );
        uploaddocument.map((item) => {
          formdata.append("uploaddocument", item);
        });
        // formdata.append("uploaddocument", array);
        const response = await createCoachEducation(formdata, token);
        console.log(response);
        if (response.status) {
          toast(response.message);
          navigate("/coach-create-profile/experience");
        } else {
          toast(response.message);
        }
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    } else {
      toast("Please fill all required fields!!");
    }
  };
  const handleChange2 = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const handleChange3 = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const [products, setProducts] = useState("Education");

  return (
    <div className="container mx-auto md:px-5  md:py-20">
      <div className="flex gap-2 items-center pb-6 lg:px-0 px-5">
        {" "}
        <RiArrowLeftSLine className="text-secondary w-5 h-5 " />{" "}
        <p className="text-secondary font-s-medium text-base">
          {" "}
          Create Profile{" "}
        </p>{" "}
      </div>

      <div className=" md:w-[50%] grid grid-cols-3 rounded  justify-items-center items-center mx-4 border-buttonsome py-2 px-2">
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
      </div>

      {products == "Education" ? (
        <div>
          <div className="bg-[#F5F7F9] p-6  rounded-[15px] mt-5">
            <div className="bg-white rounded-[15px] py-3 ">
              <div className="flex items-center justify-between md:pr-3">
                <p className="py-3 px-6 font-s-medium lg:text-lg text-base">
                  Education
                </p>
              </div>
              <div className="bg-black bg-opacity-60 h-[1px]"></div>

              <div>
                <div className="  mx-auto">
                  <div className=" my-8 space-y-6 px-6">
                    <div className="flex flex-wrap w-full relative">
                      {AdditionalDegreeDetailsShow.map((elementAd, index) => (
                        <div className="RptmnvrShow relative w-full">
                          <div className=" py-2 w-full font-s-bold">
                            {" "}
                            Additional Degree{" "}
                          </div>
                          <div className=" grid grid-cols-1 md:grid-cols-2  gap-10 p-6 justify-items-center items-center ">
                            <div className="w-full">
                              <div className="flex justify-start flex-col gap-1 w-full">
                                <div className="font-semibold text-[15px]">
                                  <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">
                                    Course Name
                                  </span>
                                </div>
                                <input
                                  type="text"
                                  placeholder="Course Name"
                                  name="courseName"
                                  value={elementAd.courseName}
                                  onChange={(e) =>
                                    handleChangeAdditionalDegree(index, e)
                                  }
                                  className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                                />
                              </div>
                            </div>

                            <div className="w-full">
                              <div className="flex justify-start flex-col gap-1 w-full">
                                <div className="text-[#000] text-[15px] font-semibold">
                                  <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">
                                    Course Type
                                  </span>
                                </div>

                                <input
                                  type="text"
                                  placeholder="Course Name"
                                  name="courseType"
                                  value={elementAd.courseType}
                                  onChange={(e) =>
                                    handleChangeAdditionalDegree(index, e)
                                  }
                                  className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                                />
                              </div>
                            </div>
                          </div>
                          <div className=" grid grid-cols-1 md:grid-cols-2  gap-10 p-6 justify-items-center items-center ">
                            <div className="w-full">
                              <div className="flex justify-start flex-col gap-1 w-full">
                                <div className="font-semibold text-[15px]">
                                  <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">
                                    Specialization
                                  </span>
                                </div>
                                <input
                                  type="text"
                                  name="specialization"
                                  value={elementAd.specialization}
                                  onChange={(e) =>
                                    handleChangeAdditionalDegree(index, e)
                                  }
                                  placeholder="Specialization"
                                  className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                                />
                              </div>
                            </div>

                            <div className="w-full">
                              <div className="flex justify-start flex-col gap-1 w-full">
                                <div className="font-semibold text-[15px]">
                                  <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">
                                    Number of Year of Degree
                                  </span>
                                </div>
                                {/* <select
                                  name="yearOfDegree"
                                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[5px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  value={elementAd.yearOfDegree}
                                  onChange={(e) =>
                                    handleChangeAdditionalDegree(index, e)
                                  }
                                >
                                  <option value="2013"> 2013 </option>
                                  <option value="2014"> 2014 </option>
                                  <option value="2015"> 2015 </option>
                                  <option value="2016"> 2016 </option>
                                </select> */}
                                <input
                                  type="number"
                                  id="yearOfDegree"
                                  name="yearOfDegree"
                                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[5px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  min="1"
                                  max="10"
                                  value={elementAd.yearOfDegree}
                                  onChange={(e) =>
                                    handleChangeAdditionalDegree(index, e)
                                  }
                                ></input>
                              </div>
                            </div>
                          </div>
                          <div className=" grid grid-cols-1 md:grid-cols-3  gap-10 p-6 justify-items-center items-center ">
                            <div className="w-full">
                              <div className="flex justify-start flex-col gap-1 w-full">
                                <div className="font-semibold text-[15px]">
                                  <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">
                                    School/University
                                  </span>
                                </div>
                                <input
                                  type="text"
                                  name="schoolUniversity"
                                  value={elementAd.schoolUniversity}
                                  onChange={(e) =>
                                    handleChangeAdditionalDegree(index, e)
                                  }
                                  placeholder="School/University"
                                  className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                                />
                              </div>
                            </div>

                            <div className="w-full">
                              <div className="flex justify-start flex-col gap-1 w-full">
                                <div className="text-[#000] text-[15px] font-semibold">
                                  <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">
                                    Passing Year
                                  </span>
                                </div>

                                {/* <YearPicker
                                  name="passingYear"
                                  className="bg-gray-50 border  z-0 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  value={elementAd.passingYear}
                                  onChange={(e) =>
                                    handleAdditionalDegreePassingYear(index, e)
                                  }
                                /> */}
                                <div className="relative">
                                  <DatePicker
                                    id="DatePicker"
                                    type="string"
                                    className="bg-gray-50 border  z-0 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    selected={elementAd.passingYear}
                                    value={elementAd.passingYear}
                                    onChange={(e) =>
                                      handleAdditionalDegreePassingYear(
                                        index,
                                        e
                                      )
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

                            <div className="w-full">
                              <div className="flex justify-start flex-col gap-1 w-full">
                                <div className="font-semibold text-[15px]">
                                  <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">
                                    Percentage
                                  </span>
                                </div>
                                <input
                                  type="text"
                                  name="percentage"
                                  value={elementAd.percentage}
                                  onChange={(e) =>
                                    handleChangeAdditionalDegree(index, e)
                                  }
                                  placeholder="Grading System"
                                  className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                                />
                              </div>
                            </div>
                          </div>
                          {index ? (
                            <div className="w-[5%] absolute top-0 right-0">
                              <button
                                type="button"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                                onClick={() => removeAdditonalDetails(index)}
                              >
                                -
                              </button>
                            </div>
                          ) : null}
                        </div>
                      ))}
                      <div className="w-[5%] absolute top-0 right-0">
                        <button
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                          type="button"
                          onClick={() => AddAdditonalDetails()}
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="flex flex-wrap w-full relative">
                      {graduationDetailsShow.map((element, index) => (
                        <div className="RptmnvrShow relative w-full">
                          <div className=" py-2 w-full font-s-bold">
                            {" "}
                            Add Graduation Details{" "}
                            <span className="text-red-500">*</span>{" "}
                          </div>
                          <div className=" grid grid-cols-1 md:grid-cols-2  gap-10 p-6 justify-items-center items-center ">
                            <div className="w-full">
                              <div className="flex justify-start flex-col gap-1 w-full">
                                <div className="font-semibold text-[15px]">
                                  <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">
                                    Course Name{" "}
                                  </span>
                                  <span className="text-red-500">*</span>
                                </div>
                                <input
                                  type="text"
                                  placeholder="Course Name"
                                  name="courseName"
                                  value={element.courseName}
                                  onChange={(e) =>
                                    handleChangeAddDetails(index, e)
                                  }
                                  className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                                />
                              </div>
                            </div>

                            <div className="w-full">
                              <div className="flex justify-start flex-col gap-1 w-full">
                                <div className="text-[#000] text-[15px] font-semibold">
                                  <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">
                                    Course Type{" "}
                                  </span>
                                  <span className="text-red-500">*</span>
                                </div>

                                <input
                                  type="text"
                                  placeholder="Course Name"
                                  name="courseType"
                                  value={element.courseType}
                                  onChange={(e) =>
                                    handleChangeAddDetails(index, e)
                                  }
                                  className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                                />
                              </div>
                            </div>
                          </div>
                          <div className=" grid grid-cols-1 md:grid-cols-2  gap-10 p-6 justify-items-center items-center ">
                            <div className="w-full">
                              <div className="flex justify-start flex-col gap-1 w-full">
                                <div className="font-semibold text-[15px]">
                                  <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">
                                    Specialization{" "}
                                  </span>
                                  <span className="text-red-500">*</span>
                                </div>
                                <input
                                  type="text"
                                  name="specialization"
                                  value={element.specialization}
                                  onChange={(e) =>
                                    handleChangeAddDetails(index, e)
                                  }
                                  placeholder="Specialization"
                                  className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                                />
                              </div>
                            </div>

                            <div className="w-full">
                              <div className="flex justify-start flex-col gap-1 w-full">
                                <div className="font-semibold text-[15px]">
                                  <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">
                                    Number of Year of Degree{" "}
                                  </span>
                                  <span className="text-red-500">*</span>
                                </div>
                                {/* <select
                                  name="yearOfDegree"
                                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[5px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  value={element.yearOfDegree}
                                  onChange={(e) =>
                                    handleChangeAddDetails(index, e)
                                  }
                                >
                                  <option value="2013"> 2013 </option>
                                  <option value="2014"> 2014 </option>
                                  <option value="2015"> 2015 </option>
                                  <option value="2016"> 2016 </option>
                                </select> */}
                                <input
                                  type="number"
                                  id="yearOfDegree"
                                  name="yearOfDegree"
                                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[5px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  min="1"
                                  max="10"
                                  value={element.yearOfDegree}
                                  onChange={(e) =>
                                    handleChangeAddDetails(index, e)
                                  }
                                ></input>
                              </div>
                            </div>
                          </div>
                          <div className=" grid grid-cols-1 md:grid-cols-3  gap-10 p-6 justify-items-center items-center ">
                            <div className="w-full">
                              <div className="flex justify-start flex-col gap-1 w-full">
                                <div className="font-semibold text-[15px]">
                                  <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">
                                    School/University{" "}
                                  </span>
                                  <span className="text-red-500">*</span>
                                </div>
                                <input
                                  type="text"
                                  name="schoolUniversity"
                                  value={element.schoolUniversity}
                                  onChange={(e) =>
                                    handleChangeAddDetails(index, e)
                                  }
                                  placeholder="School/University"
                                  className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                                />
                              </div>
                            </div>

                            <div className="w-full">
                              <div className="flex justify-start flex-col gap-1 w-full">
                                <div className="text-[#000] text-[15px] font-semibold">
                                  <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">
                                    Passing Year{" "}
                                  </span>
                                  <span className="text-red-500">*</span>
                                </div>

                                {/* <YearPicker
                                  name="passingYear"
                                  className="bg-gray-50 border  z-0 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  value={element.passingYear}
                                  onChange={(e) =>
                                    handleChangeAddDetailsPassingYear(index, e)
                                  }
                                /> */}

                                <div className="relative">
                                  <DatePicker
                                    id="DatePicker"
                                    type="string"
                                    className="bg-gray-50 border  z-0 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    selected={element.passingYear}
                                    value={element.passingYear}
                                    onChange={(e) =>
                                      handleChangeAddDetailsPassingYear(
                                        index,
                                        e
                                      )
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

                            <div className="w-full">
                              <div className="flex justify-start flex-col gap-1 w-full">
                                <div className="font-semibold text-[15px]">
                                  <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">
                                    {" "}
                                    Percentage{" "}
                                  </span>
                                  <span className="text-red-500">*</span>
                                </div>
                                <input
                                  type="text"
                                  name="percentage"
                                  value={element.percentage}
                                  onChange={(e) =>
                                    handleChangeAddDetails(index, e)
                                  }
                                  placeholder="Grading System"
                                  className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                                />
                              </div>
                            </div>
                          </div>
                          {index ? (
                            <div className="w-[5%] absolute top-0 right-0">
                              <button
                                type="button"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                                onClick={() => removeFormFields(index)}
                              >
                                -
                              </button>
                            </div>
                          ) : null}
                        </div>
                      ))}
                      <div className="w-[5%] absolute top-0 right-0">
                        <button
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                          type="button"
                          onClick={() => AddGraduation()}
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="flex flex-wrap w-full relative">
                      {postGraduationDetailsShow.map((elementPS, index) => (
                        <div className="RptmnvrShow relative w-full">
                          <div className=" py-2 w-full font-s-bold">
                            {" "}
                            Add Post Graduation Details{" "}
                          </div>
                          <div className=" grid grid-cols-1 md:grid-cols-2  gap-10 p-6 justify-items-center items-center ">
                            <div className="w-full">
                              <div className="flex justify-start flex-col gap-1 w-full">
                                <div className="font-semibold text-[15px]">
                                  <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">
                                    {" "}
                                    Course Name
                                  </span>
                                </div>
                                <input
                                  type="text"
                                  placeholder="Course Name"
                                  name="courseName"
                                  value={elementPS.courseName}
                                  onChange={(e) =>
                                    handleChangePostGraduationDetails(index, e)
                                  }
                                  className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                                />
                              </div>
                            </div>

                            <div className="w-full">
                              <div className="flex justify-start flex-col gap-1 w-full">
                                <div className="text-[#000] text-[15px] font-semibold">
                                  <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">
                                    Course Type
                                  </span>
                                </div>

                                <input
                                  type="text"
                                  placeholder="Course Name"
                                  name="courseType"
                                  value={elementPS.courseType}
                                  onChange={(e) =>
                                    handleChangePostGraduationDetails(index, e)
                                  }
                                  className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                                />
                              </div>
                            </div>
                          </div>
                          <div className=" grid grid-cols-1 md:grid-cols-2  gap-10 p-6 justify-items-center items-center ">
                            <div className="w-full">
                              <div className="flex justify-start flex-col gap-1 w-full">
                                <div className="font-semibold text-[15px]">
                                  <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">
                                    Specialization
                                  </span>
                                </div>
                                <input
                                  type="text"
                                  name="specialization"
                                  value={elementPS.specialization}
                                  onChange={(e) =>
                                    handleChangePostGraduationDetails(index, e)
                                  }
                                  placeholder="Specialization"
                                  className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                                />
                              </div>
                            </div>

                            <div className="w-full">
                              <div className="flex justify-start flex-col gap-1 w-full">
                                <div className="font-semibold text-[15px]">
                                  <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">
                                    Number of Year of Degree
                                  </span>
                                </div>
                                {/* <select
                                  name="yearOfDegree"
                                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[5px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  value={elementPS.yearOfDegree}
                                  onChange={(e) =>
                                    handleChangePostGraduationDetails(index, e)
                                  }
                                >
                                  <option value="2013"> 2013 </option>
                                  <option value="2014"> 2014 </option>
                                  <option value="2015"> 2015 </option>
                                  <option value="2016"> 2016 </option>
                                </select> */}
                                <input
                                  type="number"
                                  id="yearOfDegree"
                                  name="yearOfDegree"
                                  value={elementPS.yearOfDegree}
                                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[5px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  min="1"
                                  max="10"
                                  onChange={(e) =>
                                    handleChangePostGraduationDetails(index, e)
                                  }
                                ></input>
                              </div>
                            </div>
                          </div>
                          <div className=" grid grid-cols-1 md:grid-cols-3  gap-10 p-6 justify-items-center items-center ">
                            <div className="w-full">
                              <div className="flex justify-start flex-col gap-1 w-full">
                                <div className="font-semibold text-[15px]">
                                  <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">
                                    School/University
                                  </span>
                                </div>
                                <input
                                  type="text"
                                  name="SchoolUniversity"
                                  value={elementPS.SchoolUniversity}
                                  onChange={(e) =>
                                    handleChangePostGraduationDetails(index, e)
                                  }
                                  placeholder="School/University"
                                  className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                                />
                              </div>
                            </div>

                            <div className="w-full">
                              <div className="flex justify-start flex-col gap-1 w-full">
                                <div className="text-[#000] text-[15px] font-semibold">
                                  <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">
                                    {" "}
                                    Passing Year
                                  </span>
                                </div>
                                {/* <select
                                  name="passingYear"
                                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  value={elementPS.passingYear}
                                  onChange={(e) =>
                                    handleChangePostGraduationDetails(index, e)
                                  }
                                >
                                  <option> 2012 </option>
                                  <option> 2013 </option>
                                  <option> 2014 </option>
                                </select> */}
                                {/* <YearPicker
                                  name="passingYear"
                                  className="bg-gray-50 border  z-0 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  value={elementPS.passingYear}
                                  onChange={(e) =>
                                    handleChangePostGraduationDetailsPassingYear(
                                      index,
                                      e
                                    )
                                  }
                                /> */}
                                <div className="relative">
                                  <DatePicker
                                    id="DatePicker"
                                    type="string"
                                    className="bg-gray-50 border  z-0 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    selected={elementPS.passingYear}
                                    value={elementPS.passingYear}
                                    onChange={(e) =>
                                      handleChangePostGraduationDetailsPassingYear(
                                        index,
                                        e
                                      )
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

                            <div className="w-full">
                              <div className="flex justify-start flex-col gap-1 w-full">
                                <div className="font-semibold text-[15px]">
                                  <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">
                                    {" "}
                                    Percentage
                                  </span>
                                </div>
                                <input
                                  type="text"
                                  name="percentage"
                                  value={elementPS.percentage}
                                  onChange={(e) =>
                                    handleChangePostGraduationDetails(index, e)
                                  }
                                  placeholder="Grading System"
                                  className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                                />
                              </div>
                            </div>
                          </div>
                          {index ? (
                            <div className="w-[5%] absolute top-0 right-0">
                              <button
                                type="button"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                                onClick={() => removePostGraducation(index)}
                              >
                                -
                              </button>
                            </div>
                          ) : null}
                        </div>
                      ))}
                      <div className="w-[5%] absolute top-0 right-0">
                        <button
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                          type="button"
                          onClick={() => AddPostGraduation()}
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="border border-gray-200 rounded-md cursor-pointer">
                      <div
                        onClick={handelToggleOne}
                        className=" p-3 flex justify-between"
                      >
                        Add Class XII Details{" "}
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
                                  <div className="text-[#000] text-[15px] font-semibold">
                                    <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">
                                      Course Type{" "}
                                    </span>
                                    <span className="text-red-500">*</span>
                                  </div>
                                  <select
                                    name="courseTypeXii"
                                    value={state.courseTypeXii}
                                    onChange={handleChange}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  >
                                    <option value=""> Select </option>
                                    <option value="Science"> Science </option>
                                    <option value="Commerece">
                                      {" "}
                                      Commerece{" "}
                                    </option>
                                    <option value="Arts & Humanities">
                                      Arts & Humanities{" "}
                                    </option>
                                  </select>
                                </div>
                              </div>
                              <div className="w-full">
                                <div className="flex justify-start flex-col gap-1 w-full">
                                  <div className="font-semibold text-[15px]">
                                    <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">
                                      School/University{" "}
                                    </span>
                                    <span className="text-red-500">*</span>
                                  </div>
                                  <input
                                    type="text"
                                    name="schoolUniversityXii"
                                    value={state.schoolUniversityXii}
                                    onChange={handleChange}
                                    placeholder="School/University"
                                    className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-6 py-3 justify-items-center items-center">
                              <div className="w-full">
                                <div className="flex justify-start flex-col gap-1 w-full">
                                  <div className="font-semibold text-[15px]">
                                    <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">
                                      Country{" "}
                                    </span>
                                    <span className="text-red-500">*</span>
                                  </div>
                                  <Select
                                    placeholder="Country"
                                    getOptionLabel={(e) => e.name}
                                    getOptionValue={(e) => e}
                                    className="text-sm"
                                    value={{ name: state.countryxii }}
                                    onChange={(e) =>
                                      setState({
                                        ...state,
                                        countryxii: e.name,
                                      })
                                    }
                                    options={allCountriesPer}
                                  />
                                </div>
                              </div>

                              <div className="w-full  ">
                                <div className="flex justify-start flex-col gap-1 w-full">
                                  <div className="font-semibold text-[15px]">
                                    <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">
                                      State{" "}
                                    </span>
                                    <span className="text-red-500">*</span>
                                  </div>
                                  <Select
                                    placeholder="State"
                                    getOptionLabel={(e) => e.name}
                                    className="text-sm"
                                    getOptionValue={(e) => e}
                                    value={{ name: state.statexii }}
                                    onChange={(e) =>
                                      setState({
                                        ...state,
                                        statexii: e.name,
                                      })
                                    }
                                    options={allStatesPer}
                                  />
                                </div>
                              </div>

                              <div className="w-full ">
                                <div className="flex justify-start flex-col gap-1 w-full">
                                  <div className="font-semibold text-[15px]">
                                    <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">
                                      City{" "}
                                    </span>
                                    <span className="text-red-500">*</span>
                                  </div>
                                  <Select
                                    placeholder="City"
                                    className="text-sm"
                                    getOptionLabel={(e) => e.name}
                                    getOptionValue={(e) => e}
                                    value={{ name: state.cityxii }}
                                    onChange={(e) =>
                                      setState({
                                        ...state,
                                        cityxii: e.name,
                                      })
                                    }
                                    options={allCitiesPer}
                                  />
                                </div>
                              </div>

                              <div className="w-full ">
                                <div className="flex justify-start flex-col gap-1 w-full">
                                  <div className="font-semibold text-[15px]">
                                    <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">
                                      {" "}
                                      Pin Code/ Zip Code/ Postal Code{" "}
                                    </span>
                                    <span className="text-red-500">*</span>
                                  </div>
                                  <input
                                    type="text"
                                    placeholder="Pincode"
                                    name="pincodexii"
                                    value={state.pincodexii}
                                    // onChange={handleChange2}
                                    onChange={(e) => {
                                      if (
                                        e.target.value.match("^[0-9]*$") ||
                                        e.target.value.length == 0
                                      ) {
                                        setState({
                                          ...state,
                                          pincodexii: e.target.value,
                                        });
                                      } else {
                                        toast("Please Type Numbers only");
                                      }
                                    }}
                                    className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className=" grid grid-cols-1 md:grid-cols-2  gap-10 p-6 justify-items-center items-center ">
                              <div className="w-full">
                                <div className="flex justify-start flex-col gap-1 w-full">
                                  <div className="text-[#000] text-[15px] font-semibold">
                                    <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">
                                      Passing Year{" "}
                                    </span>
                                    <span className="text-red-500">*</span>
                                  </div>

                                  {/* <YearPicker
                                    name="passingYear"
                                    className="bg-gray-50 border  z-0 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    value={state.passingYearXii}
                                    onChange={handleChangePassingYearXii}
                                  /> */}
                                  <div className="relative">
                                    <DatePicker
                                      id="DatePicker"
                                      type="string"
                                      className="bg-gray-50 border  z-0 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                      selected={state.passingYearXii}
                                      value={state.passingYearXii}
                                      onChange={handleChangePassingYearXii}
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
                                    <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">
                                      Percentage{" "}
                                    </span>
                                    <span className="text-red-500">*</span>
                                  </div>
                                  <input
                                    type="text"
                                    name="percentageXii"
                                    value={state.percentageXii}
                                    onChange={handleChange}
                                    placeholder="Grading System"
                                    className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <input />
                        </div>
                      </div>
                    </div>

                    <div className="border border-gray-200 rounded-md cursor-pointer">
                      <div className="RptmnvrShow relative w-full">
                        <div
                          onClick={handelToggle}
                          className=" p-3 flex justify-between"
                        >
                          {" "}
                          Add Class X Details{" "}
                          {select ? (
                            <BiChevronUp onClick={handelToggle} />
                          ) : (
                            <BiChevronDown onClick={handelToggle} />
                          )}
                        </div>
                        <div className="">
                          <div className={select ? " block" : "hidden"}>
                            <div>
                              <div className=" grid grid-cols-1 gap-10 p-6 justify-items-center items-center ">
                                <div className="w-full">
                                  <div className="flex justify-start flex-col gap-1 w-full">
                                    <div className="font-semibold text-[15px]">
                                      <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">
                                        School/University{" "}
                                      </span>
                                      <span className="text-red-500">*</span>
                                    </div>
                                    <input
                                      type="text"
                                      name="schoolUniversityX"
                                      value={state.schoolUniversityX}
                                      onChange={handleChange}
                                      placeholder="School/University"
                                      className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                                    />
                                  </div>
                                </div>
                              </div>

                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-6 py-3 justify-items-center items-center">
                                <div className="w-full">
                                  <div className="flex justify-start flex-col gap-1 w-full">
                                    <div className="font-semibold text-[15px]">
                                      <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">
                                        {" "}
                                        Country{" "}
                                      </span>
                                      <span className="text-red-500">*</span>
                                    </div>
                                    <Select
                                      placeholder="Country"
                                      getOptionLabel={(e) => e.name}
                                      getOptionValue={(e) => e}
                                      value={{ name: state.countryx }}
                                      onChange={(e) =>
                                        setState({
                                          ...state,
                                          countryx: e.name,
                                        })
                                      }
                                      options={allCountries}
                                    />
                                  </div>
                                </div>

                                <div className="w-full  ">
                                  <div className="flex justify-start flex-col gap-1 w-full">
                                    <div className="font-semibold text-[15px]">
                                      <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">
                                        State{" "}
                                      </span>
                                      <span className="text-red-500">*</span>
                                    </div>
                                    <Select
                                      placeholder="State"
                                      getOptionLabel={(e) => e.name}
                                      getOptionValue={(e) => e}
                                      value={{ name: state.statex }}
                                      onChange={(e) =>
                                        setState({
                                          ...state,
                                          statex: e.name,
                                        })
                                      }
                                      options={allStates}
                                    />
                                  </div>
                                </div>

                                <div className="w-full ">
                                  <div className="flex justify-start flex-col gap-1 w-full">
                                    <div className="font-semibold text-[15px]">
                                      <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">
                                        City{" "}
                                      </span>
                                      <span className="text-red-500">*</span>
                                    </div>
                                    <Select
                                      placeholder="City"
                                      // getOptionLabel={(e) => e.name}
                                      // getOptionValue={(e) => e.name}
                                      // value={{ name: state.cityx }}
                                      // onChange={(e) => {
                                      //   state({
                                      //     ...state,
                                      //     cityx: e.name,
                                      //   });
                                      // }}
                                      getOptionLabel={(e) => e.name}
                                      getOptionValue={(e) => e}
                                      value={{ name: state.cityx }}
                                      onChange={(e) =>
                                        setState({
                                          ...state,
                                          cityx: e.name,
                                        })
                                      }
                                      options={allCities}
                                    />
                                  </div>
                                </div>

                                <div className="w-full ">
                                  <div className="flex justify-start flex-col gap-1 w-full">
                                    <div className="font-semibold text-[15px]">
                                      <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">
                                        Pin Code/ Zip Code/ Postal Code{" "}
                                      </span>
                                      <span className="text-red-500">*</span>
                                    </div>
                                    <input
                                      type="text"
                                      placeholder="Pincode"
                                      name="pincodexi"
                                      value={state.pincodexi}
                                      // onChange={handleChange3}
                                      onChange={(e) => {
                                        if (
                                          e.target.value.match("^[0-9]*$") ||
                                          e.target.value.length == 0
                                        ) {
                                          setState({
                                            ...state,
                                            pincodexi: e.target.value,
                                          });
                                        } else {
                                          toast("Please Type Numbers only");
                                        }
                                      }}
                                      className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className=" grid grid-cols-1 md:grid-cols-2  gap-10 p-6 justify-items-center items-center ">
                                <div className="w-full">
                                  <div className="flex justify-start flex-col gap-1 w-full">
                                    <div className="text-[#000] text-[15px] font-semibold">
                                      <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">
                                        Passing Year{" "}
                                      </span>
                                      <span className="text-red-500">*</span>
                                    </div>
                                    {/* 
                                    <YearPicker
                                      name="passingYear"
                                      className="bg-gray-50 border z-0 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                      value={state.passingYearX}
                                      onChange={handleChangePassingYearX}
                                    /> */}
                                    <div className="relative">
                                      <DatePicker
                                        id="DatePicker"
                                        type="string"
                                        className="bg-gray-50 border  z-0 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        selected={state.passingYearX}
                                        value={state.passingYearX}
                                        onChange={handleChangePassingYearX}
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
                                      <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">
                                        {" "}
                                        Percentage{" "}
                                      </span>
                                      <span className="text-red-500">*</span>
                                    </div>
                                    <input
                                      type="text"
                                      name="percentageX"
                                      value={state.percentageX}
                                      onChange={handleChange}
                                      placeholder="Grading System"
                                      className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                                    />
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
              <div className="">
                <div
                  onClick={(e) => fileRefDocs.current.click()}
                  className="flex gap-1 items-center justify-center"
                >
                  <p className="text-xs font-s-medium cursor-pointer bg-secondary rounded text-white py-3 px-10">
                    Add File <span className="text-red-500">*</span> +
                  </p>
                  <input
                    className="hidden"
                    ref={fileRefDocs}
                    onChange={(e) =>
                      setUploadDocument([...uploaddocument, e.target.files[0]])
                    }
                    type="file"
                  />
                </div>
                {/* repeat */}
                <div className="grid grid-cols-2 gap-3 mt-3">
                  {uploaddocument.map((item, index) => {
                    return (
                      <div className="">
                        <p className=" flex justify-end items-center">
                          <div
                            className="bg-primary text-secondary rounded p-1 cursor-pointer"
                            // onClick={() => {
                            //   const newState = uploaddocument.filter(
                            //     (i, ind) => ind !== index
                            //   );
                            //   setUploadDocument({
                            //     ...uploaddocument,
                            //     uploaddocument: newState,
                            //   });
                            // }}
                          >
                            <RxCross2 className="" size={20} />
                          </div>
                        </p>
                        <div className="bg-inputcolor rounded-md">
                          <div className="flex items-center justify-center mx-auto py-6 ">
                            <div className="flex flex-col  items-center justify-center py-3">
                              <img
                                alt="upload"
                                className="w-full h-96"
                                src={URL.createObjectURL(item)}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                {/* repeat */}
              </div>
              <div className="p-4">
                <button
                  onClick={handleEducationAPI}
                  className="bg-secondary text-white font-s-medium px-8 py-2 rounded-[7px] text-sm"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default CoachProfileEducation;
