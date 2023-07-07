import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { RiArrowLeftSLine } from "react-icons/ri";
import Select from "react-select";
import { toast } from "react-toastify";
import {
  getAllbenefitsAPI,
  getAllCitiesAPI,
  getAllCountriesAPI,
  getAllSkillsAPI,
  getAllStatesAPI,
  getCategoryAPI,
  getEmployerPostedJobAPI,
  getSupplementAPI,
  putupdatePostjobEmployer,
} from "../../../api/authService";
import JoditEditor from "jodit-react";
import { useSelector } from "react-redux";

const JobEdit = () => {
  const { userDetails } = useSelector((state) => state.flightReducer);
  const [editState, setEditState] = useState(true);

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
  const jobType = [
    { label: "Freelance", value: "Freelance" },
    { label: "Full-Time", value: "Full-Time" },
    { label: "Work from Home", value: "WorkfromHome" },
    { label: "Remote Work", value: "RemoteWork" },
    { label: "Internship", value: "Internship" },
    { label: "Part Time", value: "PartTime" },
    { label: "Temporary", value: "Temporary" },
    { label: "Volunteer", value: "Volunteer" },
  ];

  const gender = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
    { value: "Others", label: "Others " },
  ];

  const currency = [
    { value: "INR", label: "INR" },
    { value: "Pound", label: "Pound" },
  ];

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

  const jobExperience = [
    { value: "1 year", label: "1 year" },
    { value: "2 year", label: "2 year" },
    { value: "3 year", label: "3 year" },
    { value: "4 year", label: "4 year" },
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

  // Api
  const { id } = useParams();
  const editor = useRef(null);

  const [state, setState] = useState({
    jobTitle: "",
    jobType: "",
    categoryId: "",
    jobSkill: [],
    description: "",
    numberofHiring: "",
    gender: "",
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
    benefitsoffered: "",
    applycompanywebsite: "yes",
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  // API

  const getEditPostedJob = async () => {
    const { data, status, message } = await getEmployerPostedJobAPI(id);
    if (status) {
      console.log(data);
      if (data.length > 0) {
        setState(data[0]);
      }
    } else {
      toast(message);
    }
  };

  useEffect(() => {
    getEditPostedJob();
  }, []);

  // Update Api

  const putUpdateJob = async () => {
    try {
      const { data, status, message } = await putupdatePostjobEmployer({
        employerId: userDetails._id,
        id: id,
        jobTitle: state.jobTitle,
        jobType: state.jobType,
        categoryId: state.categoryId,
        jobSkill: state.jobSkill,
        description: state.description,
        gender: state.gender,
        numberofHiring: state.numberofHiring,
        jobExpiryDate: state.jobExpiryDate,
        currency: state.currency,
        salaryPeriod: state.salaryPeriod,
        salaryFrom: state.salaryFrom,
        salaryTo: state.salaryTo,
        country: state.country,
        state: state.state,
        city: state.city,
        location: state.city,
        careerLevel: state.careerLevel,
        jobShift: state.jobShift,
        qualification: state.qualification,
        jobExperience: state.jobExperience,
        companywebsite: state.companywebsite,
        supplementalpay: state.supplementalpay,
        benefitsoffered: state.benefitsoffered,
        applycompanywebsite: state.applycompanywebsite,
        hidesalary: state.hidesalary,
        status: "Active",
      });
      if (status) {
        setState(data);
        toast(message);
      } else {
        toast(message);
      }
    } catch (error) {
      console.log(error);
    }
  };

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
      const { data, status, message } = await getAllStatesAPI(state.country);
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
        state.country,
        state.state
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

  // catrgory
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
                src="/assets/images/employee.png"
                className="w-6 h-6"
              />
              <div>
                <h1 className="text-2xl font-s-medium">Job Preview</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
          <hr className="w-full h-[0.10rem] bg-inputcolor" />
          <div className="p-5">
            <div className="pt-6 lg:px-10 px-0 flex flex-col space-y-7">
              <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-16 gap-5">
                <div className="w-full">
                  <div className="flex justify-start flex-col gap-1 w-full">
                    <div className="font-semibold text-[15px]">Job Title</div>
                    <input
                      name="jobTitle"
                      disabled={editState}
                      value={state?.jobTitle}
                      onChange={handleChange}
                      type="text"
                      placeholder="Job Title"
                      className="bg-inputcolor px-3 py-[10px] rounded-[7px] text-sm "
                    />
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex justify-start flex-col space-y-1 w-full">
                    <div className="text-[#000] font-semibold  text-[15px]">
                      Job Type
                    </div>

                    <Select
                      name="jobType"
                      value={{ value: state.jobType, label: state.jobType }}
                      options={jobType}
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
                      Job Category
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
                      Job Skill
                    </div>

                    {/* <Select
                      isMulti
                      getOptionLabel={(option) => option.skill}
                      getOptionValue={(option) => option._id}
                      name="skillData"
                      value={state?.jobSkill.map((item) => {
                        return { label: item, value: item };
                      })}
                      options={skillData}
                      onChange={(e) =>
                        setState({
                          ...state,
                          jobSkill: e.map((item) => item.value),
                        })
                      }
                      classNamePrefix="select"
                    /> */}
                    <Select
                      isMulti
                      getOptionLabel={(option) => option.skill}
                      getOptionValue={(option) => option._id}
                      name="skillData"
                      value={skillData.filter((i) =>
                        state.jobSkill.includes(i._id)
                      )}
                      options={skillData}
                      onChange={(e) =>
                        setState({ ...state, jobSkill: e.map((a) => a._id) })
                      }
                      classNamePrefix="select"
                    />
                  </div>
                </div>
              </div>

              <div className="w-full ">
                <div className="flex justify-start flex-col space-y-1 w-full">
                  <div className="font-semibold text-[15px]">Description</div>

                  <div className="bg-inputcolor rounded-md px-2 py-2">
                    {" "}
                    <JoditEditor
                      className="-z-50"
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
                      Gender
                    </div>

                    <Select
                      name="gender"
                      value={{ value: state.gender, label: state.gender }}
                      options={gender}
                      onChange={(e) => setState({ ...state, gender: e.value })}
                      classNamePrefix="select"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex justify-start flex-col space-y-1 w-full">
                    <div className="text-[#000] font-semibold  text-[15px]">
                      Job Expiry Date
                    </div>

                    <input
                      name="jobExpiryDate"
                      type="date"
                      disabled={editState}
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
                      Currency
                    </div>

                    <Select
                      name="currency"
                      value={{ value: state.currency, label: state.currency }}
                      options={currency}
                      onChange={(e) =>
                        setState({ ...state, currency: e.value })
                      }
                      classNamePrefix="select"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex justify-start flex-col space-y-1 w-full">
                    <div className="text-[#000] font-semibold  text-[15px]">
                      Salary Period
                    </div>
                    <Select
                      name="salaryPeriod"
                      value={{
                        value: state.salaryPeriod,
                        label: state.salaryPeriod,
                      }}
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
                    <div className="font-semibold text-[15px]">Salary From</div>
                    <input
                      name="salaryFrom"
                      disabled={editState}
                      value={state.salaryFrom}
                      onChange={handleChange}
                      type="text"
                      placeholder="Salary From"
                      className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                    />
                  </div>
                </div>

                <div className="w-full">
                  <div className="flex justify-start flex-col space-y-1 w-full">
                    <div className="font-semibold text-[15px]">Salary To</div>
                    <input
                      name="salaryTo"
                      disabled={editState}
                      value={state.salaryTo}
                      onChange={handleChange}
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
                    Do you offer any of the supplemental pay?
                  </div>
                  <Select
                    isMulti
                    name="supplementalpay"
                    getOptionLabel={(option) => option.name}
                    getOptionValue={(option) => option._id}
                    value={supplementPayData.filter((i) =>
                      state.supplementalpay.includes(i._id)
                    )}
                    onChange={(e) =>
                      setState({
                        ...state,
                        supplementalpay: e.map((a) => a._id),
                      })
                    }
                    options={supplementPayData}
                    className="basic-multi-select"
                    classNamePrefix="select"
                  />
                </div>
              </div>
              <div className="w-full ">
                <div className="flex justify-start flex-col space-y-1 w-full">
                  <div className="font-semibold text-[15px]">
                    Are any of the following benefits offered?
                  </div>
                  <Select
                    isMulti
                    name="benefitsoffered"
                    getOptionLabel={(option) => option.name}
                    getOptionValue={(option) => option._id}
                    value={benefits.filter((i) =>
                      state.benefitsoffered.includes(i._id)
                    )}
                    onChange={(e) =>
                      setState({
                        ...state,
                        benefitsoffered: e.map((a) => a._id),
                      })
                    }
                    options={benefits}
                    className="basic-multi-select"
                    classNamePrefix="select"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-3 grid-cols-1 lg:gap-12 gap-5 ">
                <div className="w-full">
                  <div className="flex justify-start flex-col space-y-1 w-full">
                    <div className="text-[#000] font-semibold  text-[15px]">
                      Country
                    </div>

                    <Select
                      getOptionLabel={(e) => e.name}
                      getOptionValue={(e) => e.name}
                      value={{ name: state.country }}
                      onChange={(e) =>
                        setState({
                          ...state,
                          country: e.name,
                        })
                      }
                      options={allCountries}
                    />
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex justify-start flex-col space-y-1 w-full">
                    <div className="text-[#000] font-semibold  text-[15px]">
                      State
                    </div>
                    <Select
                      getOptionLabel={(e) => e.name}
                      getOptionValue={(e) => e.name}
                      value={{ name: state.state }}
                      onChange={(e) =>
                        setState({
                          ...state,
                          state: e.name,
                        })
                      }
                      options={allStates}
                    />
                  </div>
                </div>

                <div className="w-full">
                  <div className="flex justify-start flex-col space-y-1 w-full">
                    <div className="text-[#000] font-semibold  text-[15px]">
                      City
                    </div>
                    <Select
                      getOptionLabel={(e) => e.name}
                      getOptionValue={(e) => e.name}
                      value={{ name: state.city }}
                      onChange={(e) =>
                        setState({
                          ...state,
                          city: e.name,
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
                      Career Level
                    </div>
                    <Select
                      name="careerLevel"
                      value={{
                        value: state.careerLevel,
                        label: state.careerLevel,
                      }}
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
                      Job Shift
                    </div>
                    <Select
                      name="jobShift"
                      options={jobShift}
                      value={{ value: state.jobShift, label: state.jobShift }}
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
                      Qualification
                    </div>
                    <Select
                      name="qualification"
                      disabled={editState}
                      options={qualification}
                      value={{
                        value: state.qualification,
                        label: state.qualification,
                      }}
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
                      Job Experience
                    </div>

                    <Select
                      name="jobExperience"
                      disabled={editState}
                      options={jobExperience}
                      value={{
                        value: state.jobExperience,
                        label: state.jobExperience,
                      }}
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
                    disabled={editState}
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
                    disabled={editState}
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

              <div className="grid grid-cols-2  lg:gap-16 gap-5">
                <div>
                  <div className="font-semibold text-[15px]">
                    Company Website
                  </div>

                  <input
                    name="companywebsite"
                    disabled={editState}
                    value={state.companywebsite}
                    onChange={handleChange}
                    type="text"
                    placeholder="Company Website"
                    className="w-full bg-inputcolor pt-2 placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                  />
                </div>
                <div>
                  <div className="font-semibold text-[15px]">No. of Hiring</div>

                  <Select
                    name="hiring"
                    value={{
                      value: state.numberofHiring,
                      label: state.numberofHiring,
                    }}
                    disabled={editState}
                    options={hiring}
                    onChange={(e) =>
                      setState({ ...state, numberofHiring: e.value })
                    }
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
                    value={state.hidesalary}
                    onChange={handleChange}
                    id="default-toggle"
                    className="sr-only peer"
                  />
                  <div className="w-12 h-6 md:pt-2 bg-gray-200  rounded-full peer dark:bg-[#D2D2D2] peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
              </div>

              <div className="md:flex items-end md:justify-start justify-center space-x-4 ">
                <div>
                  <button
                    onClick={() => {
                      editState ? setEditState(!editState) : putUpdateJob();
                    }}
                    // onClick={putUpdateJob}
                    className="text-sm lg:mt-0 mt-6 w-full bg-secondary text-white font-s-medium  px-10 py-3 rounded-md  border border-secondary "
                  >
                    {editState ? "Edit Job" : "Update Changes"}
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

export default JobEdit;
