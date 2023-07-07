import React, { useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { RiArrowLeftSLine } from "react-icons/ri";
import JoditEditor from "jodit-react";
// import { Editor } from "react-draft-wysiwyg";
import Select from "react-select";
import {
  employerPostaJobAPI,
  getAllbenefitsAPI,
  getAllCitiesAPI,
  getAllCountriesAPI,
  getAllSkillsAPI,
  getAllStatesAPI,
  getCategoryAPI,
  getSupplementAPI,
} from "../../../api/authService";
// import CurrencyList from "currency-list";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { useEffect } from "react";
// import { data } from "autoprefixer";

const PostaJob = () => {
  const { userDetails } = useSelector((state) => state.flightReducer);
  // const [editorState, setEditorState] = useState();
  const navigate = useNavigate();
  const { id } = useParams();
  const editor = useRef(null);

  const [state, setState] = useState({
    employerId: userDetails._id,
    jobTitle: "",
    jobType: [],
    categoryId: "",
    jobSkill: "",
    description: "",
    hiring: "",
    gender: "",
    hidesalary: "false",
    jobExpiryDate: "",
    currency: "",
    salaryPeriod: "",
    salaryFrom: "",
    salaryTo: "",
    country: "",
    state: "",
    city: "",
    careerLevel: "",
    jobShift: "",
    qualification: "",
    jobExperience: "",
    companywebsite: "",
    supplementalpay: [],
    benefitsoffered: [],
    applycompanywebsite: "yes",
  });
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const salaryPeriod = [
    { value: "Per Hour", label: "Per Hour" },
    { value: "Per Day", label: "Per Day" },
    { value: "Per Week", label: "Per Week" },
    { value: "Per Month", label: "Per Month" },
    { value: "Per Year", label: "Per Year" },
  ];

  const qualification = [
    { value: "High School", label: "High School" },
    { value: "Intermediate", label: "Intermediate" },
    { value: "Graduation", label: "Graduation" },
    { value: "Post Graduation", label: "Post Graduation" },
  ];

  const gender = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
    { value: "Others", label: "Others " },
    { value: "Any Gender", label: "Any Gender" },
  ];

  const currencyData = require("../../../utils/currency.json");
  const currencyValArr = currencyData?.map((item) => {
    return { value: item.cc, label: item.cc };
  });

  const careerLevel = [
    { value: "Beginner", label: "Beginner" },
    { value: "Intermediate", label: "Intermediate" },
    { value: "Expert", label: "Expert" },
    { value: "Advanced", label: "Advanced" },
  ];

  const jobShift = [
    { value: "Morning Shift", label: "Morning Shift" },
    { value: "Night Shift", label: "Night Shift" },
    { value: "Day Shift", label: "Day Shift" },
  ];

  const hiring = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
    { value: "6", label: "6" },
    { value: "7", label: "7" },
    { value: "8", label: "8" },
    { value: "9", label: "9" },
    { value: "10+", label: "10+" },
  ];

  const jobExperience = [
    { value: "0-1 year", label: "0-1 year" },
    { value: "1-3 years", label: "1-3 years" },
    { value: "3-5 years", label: "3-5 years" },
    { value: "5-7 years", label: "5-7 years" },
    { value: "7-10 years", label: "7-10 years" },
    { value: "10+ years", label: "10+ years" },
  ];

  // API
  const handlePostaJob = async () => {
    if (userDetails.accountstatus === "Active") {
      if (
        state.jobTitle &&
        state.jobType &&
        state.categoryId &&
        state.jobSkill &&
        state.description &&
        state.gender &&
        state.jobExpiryDate &&
        state.currency &&
        state.salaryPeriod &&
        state.salaryFrom &&
        state.salaryTo &&
        state.country &&
        state.city &&
        state.careerLevel &&
        state.jobShift &&
        state.qualification &&
        state.jobExperience &&
        state.supplementalpay &&
        state.benefitsoffered &&
        state.hiring
      ) {
        try {
          const { data, status, message } = await employerPostaJobAPI({
            employerId: userDetails._id,
            jobTitle: state.jobTitle,
            jobType: [state.jobType],
            categoryId: state.categoryId,
            jobSkill: state.jobSkill.map((item) => item._id),
            // description: JSON.stringify(state.description.blocks[0].text),
            description: state.description,
            numberofHiring: state.hiring?.value,
            gender: state.gender,
            jobExpiryDate: state.jobExpiryDate,
            currency: state.currency,
            salaryPeriod: state.salaryPeriod,
            salaryFrom: state.salaryFrom,
            salaryTo: state.salaryTo,
            country: state.country?.name,
            state: state.state?.name,
            city: state.city?.name,
            location: state.city?.name,
            careerLevel: state.careerLevel,
            jobShift: state.jobShift,
            qualification: state.qualification,
            jobExperience: state.jobExperience,
            companywebsite: state.companywebsite,
            supplementalpay: state.supplementalpay.map((item) => item._id),
            benefitsoffered: state.benefitsoffered.map((item) => item._id),
            applycompanywebsite: state.applycompanywebsite,
            hidesalary: state.hidesalary,
            ispublish: true,
            // status: "Active",
          });

          if (status) {
            toast(message);
            navigate("/employer/manage-jobs");
          } else {
            toast(message);
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        toast("Please fill required fields!!");
      }
    } else {
      toast("Please activate your account to post a new job!!");
    }
  };

  // preview job api
  const [previewData, setPreviewData] = useState([]);
  const handlePreviewaJob = async () => {
    if (userDetails.accountstatus === "Active") {
      if (
        state.jobTitle &&
        state.jobType &&
        state.categoryId &&
        state.jobSkill &&
        state.description &&
        state.gender &&
        state.jobExpiryDate &&
        state.currency &&
        state.salaryPeriod &&
        state.salaryFrom &&
        state.salaryTo &&
        state.country &&
        state.city &&
        state.careerLevel &&
        state.jobShift &&
        state.qualification &&
        state.jobExperience &&
        state.supplementalpay &&
        state.benefitsoffered &&
        state.hiring
      ) {
        try {
          const { data, status, message } = await employerPostaJobAPI({
            employerId: userDetails._id,
            jobTitle: state.jobTitle,
            jobType: [state.jobType],
            categoryId: state.categoryId,
            jobSkill: state.jobSkill.map((item) => item._id),
            // description: JSON.stringify(state.description.blocks[0].text),
            description: state.description,
            numberofHiring: state.hiring?.value,
            gender: state.gender,
            jobExpiryDate: state.jobExpiryDate,
            currency: state.currency,
            salaryPeriod: state.salaryPeriod,
            salaryFrom: state.salaryFrom,
            salaryTo: state.salaryTo,
            country: state.country?.name,
            state: state.state?.name,
            city: state.city?.name,
            location: state.city?.name,
            careerLevel: state.careerLevel,
            jobShift: state.jobShift,
            qualification: state.qualification,
            jobExperience: state.jobExperience,
            companywebsite: state.companywebsite,
            supplementalpay: state.supplementalpay.map((item) => item._id),
            benefitsoffered: state.benefitsoffered.map((item) => item._id),
            applycompanywebsite: state.applycompanywebsite,
            hidesalary: state.hidesalary,
            ispublish: false,
            // status: "Inactive",
          });

          if (status) {
            toast(message);
            setPreviewData(data);
            console.log("setPreviewData", data);
            navigate(`/employer/preview-job/${data._id}`, {
              state: {
                jobId: data._id,
              },
            });
            // var win = window.open(
            //   `/employer/preview-job/${data._id}`,
            //   "_blank"
            // );
            // win.focus();
          } else {
            toast(message);
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        toast("Please fill required fields!!");
      }
    } else {
      toast("Please activate your account to post a new job!!");
    }
  };

  // category
  const [category, setCategory] = useState([]);
  const getCategory = async () => {
    try {
      const { data, status, message } = await getCategoryAPI();
      if (status) {
        setCategory(data);
      } else {
        toast(message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategory();
  }, []);

  //jobSkill
  const [skillData, setSkillData] = useState([]);
  const getJobSkillsData = async () => {
    try {
      const { data, status, message } = await getAllSkillsAPI();
      console.log(data);
      if (status) {
        setSkillData(data);
      } else {
        toast(message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getJobSkillsData();
  }, []);

  // supplement pay API
  const [supplementPayData, setSupplementPayData] = useState([]);
  const getsupplementPay = async () => {
    try {
      const { data, status, message } = await getSupplementAPI();
      // console.log("supplemental", data);
      if (status) {
        setSupplementPayData(data);
      } else {
        toast(message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getsupplementPay();
  }, []);

  // benefits API
  const [benefits, setBenefits] = useState([]);
  const benefitsData = async () => {
    try {
      const { data, status, message } = await getAllbenefitsAPI();
      if (status) {
        console.log("benfits", data);
        setBenefits(data);
      } else {
        toast(message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    benefitsData();
  }, []);

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
    const formdata = new FormData();
    formdata.append("country", state.state);
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

  return (
    <div className="container mx-auto pt-10 pb-10">
      <div className="flex gap-2 items-center pb-6 lg:px-0 px-5">
        {" "}
        <RiArrowLeftSLine className="text-secondary w-5 h-5 " />{" "}
        <p className="text-secondary font-s-medium text-base"> Post a Job </p>{" "}
      </div>
      <div className="bg-inputcolor rounded-md p-5">
        <div className="bg-white rounded-md ">
          <div className="lg:flex items-center justify-between">
            <div className="flex items-center gap-2 lg:px-16 pl-4 py-4 ">
              <img
                alt="Employee"
                src="../assets/images/employee.png"
                className="w-6 h-6"
              />
              <div>
                <h1 className="text-2xl font-s-medium">Post a Job</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            {/* <Link>
              <button className="py-1.5 lg:px-5 px-10 text-sm font-semibold bg-secondary text-white rounded lg:mx-16 mx-12 lg:mb-0 mb-5">
                Preview Job
              </button>
            </Link> */}
          </div>
          <hr className="w-full h-[0.10rem] bg-inputcolor" />
          <div className="p-5">
            <div className="pt-6 lg:px-10 px-0 flex flex-col space-y-7">
              <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-16 gap-5">
                <div className="w-full">
                  <div className="flex justify-start flex-col gap-1 w-full">
                    <div className="font-semibold text-[15px]">
                      Job Title <span className="text-red-500">*</span>
                    </div>
                    <input
                      name="jobTitle"
                      value={state.jobTitle}
                      onChange={(e) => {
                        if (
                          e.target.value.match("^[a-zA-Z ]*$") ||
                          e.target.value.length == 0
                        ) {
                          setState({
                            ...state,
                            jobTitle: e.target.value,
                          });
                        } else {
                          toast("Please Type Alphabets only");
                        }
                      }}
                      // onChange={handleChange}
                      type="text"
                      placeholder="Job Title"
                      className="bg-inputcolor px-3 py-[10px] rounded-[7px] text-sm "
                    />
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex justify-start flex-col space-y-1 w-full">
                    <div className="text-[#000] font-semibold  text-[15px]">
                      Job Type <span className="text-red-500">*</span>
                    </div>

                    <Select
                      name="jobType"
                      value={state.jobType.value}
                      options={[
                        { label: "Freelance", value: "Freelance" },
                        { label: "Full-Time", value: "Full-Time" },
                        { label: "Work from Home", value: "WorkfromHome" },
                        { label: "Remote Work", value: "RemoteWork" },
                        { label: "Internship", value: "Internship" },
                        { label: "Part Time", value: "PartTime" },
                        { label: "Temporary", value: "Temporary" },
                        { label: "Volunteer", value: "Volunteer" },
                      ]}
                      onChange={(e) => setState({ ...state, jobType: e.value })}
                      classNamePrefix="select"
                    />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-16 gap-5 ">
                <div className="w-full">
                  <div className="flex justify-start flex-col space-y-1 w-full">
                    <div className="text-[#000] font-semibold  text-[15px]">
                      Job Category <span className="text-red-500">*</span>
                    </div>

                    <Select
                      name="jobCategory"
                      getOptionLabel={(option) => option.name}
                      getOptionValue={(option) => option._id}
                      value={
                        category.filter((i) => i._id === state.categoryId)?.[0]
                      }
                      options={category}
                      onChange={(e) =>
                        setState({ ...state, categoryId: e._id })
                      }
                      classNamePrefix="select"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex justify-start flex-col space-y-1 w-full">
                    <div className="text-[#000] font-semibold  text-[15px]">
                      Job Skill <span className="text-red-500">*</span>
                    </div>

                    {/* <Select
                      isMulti
                      name="skillData"
                      value={state.skillData}
                      options={skillData}
                      onChange={(e) => setState({ ...state, skillData: e })}
                      classNamePrefix="select"
                    /> */}
                    <Select
                      isMulti
                      getOptionLabel={(option) => option.skill}
                      getOptionValue={(option) => option._id}
                      name="skillData"
                      value={state.jobSkill}
                      options={skillData}
                      onChange={(e) => setState({ ...state, jobSkill: e })}
                      classNamePrefix="select"
                    />
                  </div>
                </div>
              </div>

              <div className="w-full ">
                <div className="flex justify-start flex-col space-y-1 w-full">
                  <div className="font-semibold text-[15px]">
                    Description <span className="text-red-500">*</span>
                  </div>

                  <div className="bg-inputcolor rounded-md px-2 py-2">
                    {" "}
                    {/* <Editor
                      value={state.description}
                      onChange={(e) => setState({ ...state, description: e })}
                      placeholder="Write Something Here..."
                      editorState={editorState}
                      toolbarClassName="toolbarClassName"
                      wrapperClassName="wrapperClassName"
                      editorClassName="editorClassName"
                      onEditorStateChange={setEditorState}
                      className="w-full outline-none h-96 resize-none overflow-hidden bg-inputcolor"
                      toolbar={{
                        options: ["inline", "textAlign"],
                      }}
                    /> */}
                    <JoditEditor
                      className="-z-50"
                      style="joditClass"
                      ref={editor}
                      value={state.description}
                      onChange={(e) => setState({ ...state, description: e })}
                      tabIndex={1} // tabIndex of textarea
                    />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-16 gap-5  ">
                <div className="w-full">
                  <div className="flex justify-start flex-col space-y-1 w-full">
                    <div className="text-[#000] font-semibold  text-[15px]">
                      Gender <span className="text-red-500">*</span>
                    </div>

                    <Select
                      name="gender"
                      value={state.gender.value}
                      options={gender}
                      onChange={(e) => setState({ ...state, gender: e.value })}
                      classNamePrefix="select"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex justify-start flex-col space-y-1 w-full">
                    <div className="text-[#000] font-semibold  text-[15px]">
                      Job Expiry Date <span className="text-red-500">*</span>
                    </div>

                    <input
                      name="jobExpiryDate"
                      type="date"
                      value={state.jobExpiryDate}
                      onChange={(e) =>
                        setState({ ...state, jobExpiryDate: e.target.value })
                      }
                      placeholder="Job Title"
                      className="bg-inputcolor px-3 py-[10px] rounded-[7px] text-sm "
                    />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-16 gap-5 ">
                <div className="w-full">
                  <div className="flex justify-start flex-col space-y-1 w-full">
                    <div className="text-[#000] font-semibold  text-[15px]">
                      Currency <span className="text-red-500">*</span>
                    </div>
                    <Select
                      name="currency"
                      value={state.currency.value}
                      // options={currency}
                      options={currencyValArr}
                      onChange={(e) =>
                        setState({ ...state, currency: e.value })
                      }
                      classNamePrefix="select"
                    />
                    {/* <Select
                      getOptionLabel={(option) => option.name}
                      value={currencyList}
                    />{" "} */}
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex justify-start flex-col space-y-1 w-full">
                    <div className="text-[#000] font-semibold  text-[15px]">
                      Salary Period <span className="text-red-500">*</span>
                    </div>
                    <Select
                      name="salaryPeriod"
                      value={state.salaryPeriod.value}
                      options={salaryPeriod}
                      onChange={(e) =>
                        setState({ ...state, salaryPeriod: e.value })
                      }
                      classNamePrefix="select"
                    />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-16 gap-5">
                <div className="w-full">
                  <div className="flex justify-start flex-col space-y-1 w-full">
                    <div className="font-semibold text-[15px]">
                      Salary From <span className="text-red-500">*</span>
                    </div>
                    <input
                      name="salaryFrom"
                      value={state.salaryFrom}
                      // onChange={handleChange}
                      onChange={(e) => {
                        if (
                          e.target.value.match("^[0-9]*$") ||
                          e.target.value.length == 0
                        ) {
                          setState({
                            ...state,
                            salaryFrom: e.target.value,
                          });
                        } else {
                          toast("Salary can be digits only!");
                        }
                      }}
                      type="text"
                      placeholder="Salary From"
                      className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                    />
                  </div>
                </div>

                <div className="w-full">
                  <div className="flex justify-start flex-col space-y-1 w-full">
                    <div className="font-semibold text-[15px]">
                      Salary To <span className="text-red-500">*</span>
                    </div>
                    <input
                      name="salaryTo"
                      value={state.salaryTo}
                      // onChange={handleChange}
                      onChange={(e) => {
                        if (
                          e.target.value.match("^[0-9]*$") ||
                          e.target.value.length == 0
                        ) {
                          setState({
                            ...state,
                            salaryTo: e.target.value,
                          });
                        } else {
                          toast("Salary can be digits only!");
                        }
                      }}
                      type="text"
                      placeholder="Salary To"
                      className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                    />
                  </div>
                </div>
              </div>

              <div className="w-full ">
                <div className="flex justify-start flex-col space-y-1 w-full">
                  <div className="font-semibold text-[15px]">
                    Do you offer any of the supplemental pay?{" "}
                    <span className="text-red-500">*</span>
                  </div>
                  <Select
                    isMulti
                    name="supplementalpay"
                    getOptionLabel={(option) => option.name}
                    getOptionValue={(option) => option._id}
                    value={state.supplementalpay}
                    onChange={(e) => {
                      setState({ ...state, supplementalpay: e });
                      console.log(e);
                    }}
                    options={supplementPayData}
                    className="basic-multi-select"
                    classNamePrefix="select"
                  />
                </div>
              </div>
              <div className="w-full ">
                <div className="flex justify-start flex-col space-y-1 w-full">
                  <div className="font-semibold text-[15px]">
                    Are any of the following benefits offered?{" "}
                    <span className="text-red-500">*</span>
                  </div>
                  <Select
                    isMulti
                    name="benefitsoffered"
                    getOptionLabel={(option) => option.name}
                    getOptionValue={(option) => option._id}
                    value={state.benefitsoffered}
                    onChange={(e) => setState({ ...state, benefitsoffered: e })}
                    options={benefits}
                    // options={benefitsArr}
                    className="basic-multi-select"
                    classNamePrefix="select"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-3 grid-cols-1 lg:gap-12 gap-5 ">
                <div className="w-full">
                  <div className="flex justify-start flex-col space-y-1 w-full">
                    <div className="text-[#000] font-semibold  text-[15px]">
                      Country <span className="text-red-500">*</span>
                    </div>

                    <Select
                      getOptionLabel={(e) => e.name}
                      getOptionValue={(e) => e.name}
                      value={state.country}
                      onChange={(e) =>
                        setState({
                          ...state,
                          country: e,
                        })
                      }
                      options={allCountries}
                    />
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex justify-start flex-col space-y-1 w-full">
                    <div className="text-[#000] font-semibold  text-[15px]">
                      State <span className="text-red-500">*</span>
                    </div>
                    <Select
                      getOptionLabel={(e) => e.name}
                      getOptionValue={(e) => e.name}
                      value={state.state}
                      onChange={(e) =>
                        setState({
                          ...state,
                          state: e,
                        })
                      }
                      options={allStates}
                    />
                  </div>
                </div>

                <div className="w-full">
                  <div className="flex justify-start flex-col space-y-1 w-full">
                    <div className="text-[#000] font-semibold  text-[15px]">
                      City <span className="text-red-500">*</span>
                    </div>
                    <Select
                      getOptionLabel={(e) => e.name}
                      getOptionValue={(e) => e.name}
                      value={state.city}
                      onChange={(e) =>
                        setState({
                          ...state,
                          city: e,
                        })
                      }
                      options={allCities}
                    />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-16 gap-5 ">
                <div className="w-full">
                  <div className="flex justify-start flex-col space-y-1 w-full">
                    <div className="text-[#000] font-semibold  text-[15px]">
                      Career Level <span className="text-red-500">*</span>
                    </div>
                    <Select
                      name="careerLevel"
                      value={state.careerLevel.value}
                      options={careerLevel}
                      onChange={(e) =>
                        setState({ ...state, careerLevel: e.value })
                      }
                      classNamePrefix="select"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex justify-start flex-col space-y-1 w-full">
                    <div className="text-[#000] font-semibold  text-[15px]">
                      Job Shift <span className="text-red-500">*</span>
                    </div>
                    <Select
                      name="jobShift"
                      options={jobShift}
                      value={state.jobShift.value}
                      onChange={(e) =>
                        setState({ ...state, jobShift: e.value })
                      }
                      classNamePrefix="select"
                    />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-16 gap-5 ">
                <div className="w-full">
                  <div className="flex justify-start flex-col space-y-1 w-full">
                    <div className="text-[#000] font-semibold  text-[15px]">
                      Qualification <span className="text-red-500">*</span>
                    </div>
                    <Select
                      name="qualification"
                      options={qualification}
                      value={state.qualification.value}
                      onChange={(e) =>
                        setState({ ...state, qualification: e.value })
                      }
                      className=""
                      classNamePrefix="select"
                    />
                  </div>
                </div>

                <div className="w-full">
                  <div className="flex justify-start flex-col space-y-1 w-full">
                    <div className="font-semibold text-[15px]">
                      Job Experience <span className="text-red-500">*</span>
                    </div>
                    {/* <input
                      name="jobExperience"
                      value={state.jobExperience}
                      onChange={handleChange}
                      type="text"
                      placeholder="Job Experience"
                      className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                    /> */}
                    <Select
                      name="jobExperience"
                      options={jobExperience}
                      value={state.jobExperience.value}
                      onChange={(e) =>
                        setState({ ...state, jobExperience: e.value })
                      }
                      className=""
                      classNamePrefix="select"
                    />
                  </div>
                </div>
              </div>

              <div>
                <div className="font-semibold text-[15px]">
                  Apply through Company Website
                </div>

                <div className="flex space-x-2 pt-4">
                  <input
                    checked={state.applycompanywebsite == "yes"}
                    onChange={() =>
                      setState({
                        ...state,
                        applycompanywebsite: "yes",
                      })
                    }
                    type="radio"
                  />
                  <label>Yes</label>
                </div>
                <div className="flex space-x-2 pt-2">
                  <input
                    checked={state.applycompanywebsite == "no"}
                    onChange={() =>
                      setState({
                        ...state,
                        applycompanywebsite: "no",
                      })
                    }
                    type="radio"
                  />
                  <label>No</label>
                </div>
              </div>

              <div className="grid lg:grid-cols-2  lg:gap-16 gap-5">
                {state.applycompanywebsite == "no" ? null : (
                  <div>
                    <div className="font-semibold text-[15px]">
                      Company Website
                    </div>

                    <input
                      name="companywebsite"
                      value={state.companywebsite}
                      onChange={handleChange}
                      type="text"
                      placeholder="Company Website"
                      className="w-full bg-inputcolor pt-2 placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                    />
                  </div>
                )}
                <div>
                  <div className="font-semibold text-[15px]">
                    No. of Hiring <span className="text-red-500">*</span>
                  </div>

                  <Select
                    name="hiring"
                    options={hiring}
                    value={state.hiring}
                    onChange={(e) => setState({ ...state, hiring: e })}
                    className=""
                    classNamePrefix="select"
                  />
                </div>
              </div>

              <div>
                <div className="text-[#000] font-semibold  text-[15px]">
                  Hide Salary
                </div>
                <label
                  for="default-toggle"
                  className="inline-flex relative items-center cursor-pointer"
                >
                  <input
                    type="checkbox"
                    value="hidesalary"
                    onChange={() => setState({ ...state, hidesalary: "true" })}
                    id="default-toggle"
                    className="sr-only peer"
                  />
                  <div className="w-12 h-6 md:pt-2 bg-gray-200  rounded-full peer dark:bg-[#D2D2D2] peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
              </div>

              <div className="md:flex items-end md:justify-start justify-center space-x-4 ">
                <div>
                  <button
                    onClick={handlePostaJob}
                    className="text-sm  lg:mt-0 mt-6 w-full border border-white bg-secondary  text-white font-s-medium  px-8 py-3 rounded-md  "
                  >
                    Publish Job
                  </button>
                </div>
                {/* <div>
                  <button className="text-sm lg:mt-0 mt-6 w-full bg-white  text-secondary font-s-medium  px-10 py-3 rounded-md  border border-secondary ">
                    Save Draft
                  </button>
                </div> */}

                <div>
                  <button
                    // onClick={
                    //   () =>
                    //     window.open(
                    //       "/employer/preview-job",
                    //       "_blank",
                    //       "noreferrer",
                    //       {
                    //         state: {
                    //           jobData: state,
                    //         },
                    //       }
                    //     )
                    // navigate("/employer/preview-job", {
                    //   state: {
                    //     jobData: state,
                    //   },
                    // })
                    // }
                    onClick={(e) => {
                      handlePreviewaJob();
                    }}
                    className="text-sm lg:mt-0 mt-6 w-full bg-white  text-secondary font-s-medium  px-10 py-3 rounded-md  border border-secondary "
                  >
                    Submit & Preview Job
                  </button>
                </div>

                <div>
                  <button className="text-sm lg:mt-0 mt-6 w-full bg-[#5E5E5E]  text-white font-s-medium  px-10 py-3 rounded-md  ">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostaJob;
