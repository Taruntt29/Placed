import React, { useState, useEffect, useRef } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { Editor } from "react-draft-wysiwyg";
import { Country, State, City } from "country-state-city";
import { candidateCreateProfileAPI } from "../../../../api/authService";
import Select from "react-select";
import { useSelector } from "react-redux";
import { MdCloudUpload } from "react-icons/md";
import { data } from "autoprefixer";
import { RiArrowLeftSLine } from "react-icons/ri";
import Navbar from "../../../common/Navbar";
import Footer from "../../../common/Footer";
import validator from 'validator'
import { toast } from "react-toastify";
import {
  candidateCategoryAPI,
  candidateSkillAPI,
} from "../../../../api/authCandidate";
import { json, NavLink, useNavigate } from "react-router-dom";
import JoditEditor from "jodit-react";
const General = () => {
  const { userDetails } = useSelector((state) => state.flightReducer);
  console.log(userDetails);
  const editor = useRef(null);
  const [editorState, setEditorState] = useState();
  const [profileImg, setProfileImg] = useState();
  const [language, setLanguage] = useState([]);
  const [CandiateCatgoryData, setCandidateCategoryData] = useState([]);
  const [candidateSkills, setCandidateSkills] = useState([]);
  var [showLanguage, setShowLanguage] = useState([]);
  console.log("User Details", userDetails);
  const optionsgender = [
    { value: "male", label: "male" },
    { value: "female", label: "female" },
    { value: "others", label: "others" },
  ];

  const [formValues, setFormValues] = useState([{ skill: "", skilllevel: "" }]);

  let handleChangeGe = (i, e) => {
    let newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
  };
   // nationality Data
   const nationalityData = require("../../../../utils/nationalities.json");
   const nationalityValArr = nationalityData?.map((item) => {
     return { value: item, label: item };
   });

  let addFormFields = () => {
    setFormValues([...formValues, { skill: "", skilllevel: "" }]);
  };

  let removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
  };

  console.log("Form Values Data", formValues);

  const [products, setProducts] = useState("General");

  const optionsexperience = [
    { value: "0 - 1 Years", label: "0 - 1 Years" },
    { value: "1 - 3 Years", label: "1 - 3 Years" },
    { value: "3 - 5 Years", label: "3 - 5 Years" },
    { value: "5 - 7 Years", label: "5 - 7 Years" },
    { value: "7 - 10 Years", label: "7 - 10 Years" },
    { value: "10 + Years", label: "10 + Years" },
    // { value: "3 - 5 Years", label: "4 years" },
  ];

  const optionscareerlevel = [
    { value: "Fresher", label: "Fresher" },
    { value: "Intermediate", label: "Intermediate" },
    { value: "Experienced", label: "Experienced" },
  ];

  const CandidateCategory = async () => {
    try {
      const response = await candidateCategoryAPI();
      console.log("Data Found", response.data);
      setCandidateCategoryData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const CandidateSkill = async () => {
    try {
      const response = await candidateSkillAPI();
      console.log("Data Found", response.data);
      setCandidateSkills(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log("Candidate Profile Show_________", candidateSkills);

  useEffect(() => {
    CandidateCategory();
    CandidateSkill();
  }, []);

  const optionskills = [
    { value: "Web Developer", label: "Web Developer" },
    { value: "Front-End Developer", label: "Front-End Developer" },
    { value: "Backend Developer", label: "Backend Developer" },
    { value: "Html Developer", label: "Html Developer" },
    { value: "Sass Developer", label: "Sass Developer" },
  ];

  const optionskills1 = [
    { value: "Beginner", label: "Beginner" },
    { value: "Intermediate", label: "Intermediate" },
    { value: "Expert", label: "Expert" },
  ];

  const optionslanguage = [
    { value: "English", label: "English" },
    { value: "Hindi", label: "Hindi" },
    { value: "Bengali", label: "Bengali" },
    { value: "Urdu", label: "Urdu" },
    { value: "Marathi", label: "Marathi" },
    { value: "Telugu", label: "Telugu" },
    { value: "Tamil", label: "Tamil" },
  ];
  const [state, setState] = useState({
    yourName: userDetails?.candidateName,
    phone: userDetails?.phoneNumber,
    email: userDetails?.email,
    gender: "",
    date: "",
    status: "",
    categoryId: "",
    skills: [
      {
        skill: "",
        skilllevel: "",
      },
    ],
    languages: "",
    nationality: "",
    experience: "",
    careerLevel: "",
    country: {},
    state: {},
    city: {},
    pincode: "",
    address: "",
    description: "",
    linkedin: "",
    beta2: "",
    files: [""],
    availabilty: "",
    relocate: "",
  });

  const navigate = useNavigate();

  let lang = [];
  language.map((item) => {
    lang.push(item.value);
  });

  console.log("Languages Data", lang);

  const createProfileAPI = async () => {
    const formdata = new FormData();
    formdata.append("candidateName", state.yourName);
    formdata.append("phoneNumber", state.phone);
    formdata.append("email", state.email);
    formdata.append("gender", state.gender?.value);
    formdata.append("birthDate", state.date);

    formdata.append("categoryId", state.categoryName);

    formdata.append("skills", JSON.stringify(formValues));
    formdata.append("languages", JSON.stringify(lang));
    formdata.append("nationality", JSON.stringify(state.nationality.value));
    formdata.append("experience", state.experience?.value);
    formdata.append("careerLevel", state.careerLevel?.value);
    formdata.append("country", state.country?.name);
    formdata.append("city", state.city?.name);
    formdata.append("state", state.state?.name);
    formdata.append("address", state.address);
    // formdata.append("bio", JSON.stringify(state.description.blocks[0].text));
    formdata.append("bio", state.description);
    formdata.append("linkedin", state.linkedin);
    formdata.append("images", profileImg);
    formdata.append("pincode", state.pincode);
    formdata.append("availability", true);
    formdata.append("relocate", true);
    formdata.append("beta_2", state.beta2);
    formdata.append("uploadfiles", uploadimagegst);
    // formdata.append("images", profilePic);
    try {
      const response = await candidateCreateProfileAPI(formdata);
      console.log("response from api", response);
      console.log(response);
      if (response.status) {
        console.log(response.data);
        toast(response.message);
        navigate(`/candidate-education`);
      } else {
        toast(response.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log(data);

  const [profilePic, setProfilePic] = useState();
  let mycountry = Country.getAllCountries();
  let mystate = State.getStatesOfCountry(state.country?.isoCode);
  let mycity = City.getCitiesOfState(
    state.country?.isoCode,
    state.state?.isoCode
  );
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const handleProfilePic = (e) => {
    console.log(e.target.files);
    setProfileImg(e.target.files[0]);
    setProfilePic(URL.createObjectURL(e.target.files[0]));
  };

  const languagesOptions = [];

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/samayo/country-json/master/src/country-by-languages.json"
    )
      .then((res) => res.json())
      .then(async (res) => {
        console.log("Alll The language -----------------------");
        await res[95].languages.map((val) => {
          // console.log(val);
          if (languagesOptions.indexOf(val) == -1) {
            var lang = { value: val, label: val };
            languagesOptions.push(lang);
            // console.log(languagesOptions);
          }
        });
        setShowLanguage(languagesOptions);
      });
  }, []);

  const [uploadimagegst, setUploadImageGst] = useState();
  const [proImage , setproImage] = useState()
  const fileRef0 = React.useRef();

  const handleGSTUpload = (event) => {
    setUploadImageGst(event.target.files[0]);
  };

  const [errorMessage, setErrorMessage] = useState('')
    
  const validate = (value) => {
    
    if (validator.isURL(value)) {
      setErrorMessage('Is Valid URL');
      
    } else {
      setErrorMessage('Is Not Valid URL')
    }
  }
  const validate_new = (value) => {
    
    if (validator.isURL(value)) {
      setErrorMessage('Is Valid URL');
      
    } else {
      setErrorMessage('Is Not Valid URL')
    }
  }

  return (
    <div>
      <Navbar />
      <div className="mt-[110px]">
        <div className="container mx-auto md:px-5  md:py-20">
          {/* Top Nav Link */}

          <div className="flex gap-2 items-center pb-6 lg:px-0 px-5">
            {" "}
            <RiArrowLeftSLine className="text-secondary w-5 h-5 " />{" "}
            <p className="text-secondary font-s-medium text-base">
              {" "}
              Create Profile{" "}
            </p>{" "}
          </div>

          <div className=" md:w-[50%] grid md:grid-cols-3 grid-cols-1   rounded  justify-items-start items-center mx-4 border-buttonsome py-2 px-2  ">
            <NavLink
              to="/candidate-create-profile"
              onClick={() => setProducts("General")}
              className={`px-5 py-2   text-center  cursor-pointer font-text font-s-regular md:text-base text-sm  w-full ${
                products == "General"
                  ? "font-bold  text-secondary border-secondary border-b-2 "
                  : " text-black "
              }`}
            >
              General
            </NavLink>

            <NavLink
              to="/candidate-education"
              onClick={() => setProducts("Education")}
              className={`px-5 py-2 text-center  font-text font-s-regular cursor-pointer  md:text-base text-sm  w-full  ${
                products == "Education"
                  ? "font-bold  text-secondary border-secondary border-b-2"
                  : "  text-black  "
              }`}
            >
              Education
            </NavLink>

            <NavLink
              to="/candidate-workexperience"
              onClick={() => setProducts("Work Experience")}
              className={`px-5 py-2   text-center  cursor-pointer font-text font-s-normal md:text-base text-sm  w-full ${
                products == "Work Experience"
                  ? "font-bold  text-secondary border-secondary border-b-2  "
                  : " text-black "
              }`}
            >
              Work Experience
            </NavLink>
          </div>

          {/* End Top Nav Link */}

          <div className="mt-5">
            <div className="bg-[#F5F7F9] md:rounded-[15px] p-6 flex flex-col justify-start w-full gap-6">
              <div className="bg-white rounded-[15px]">
                <p className="py-3 px-6 font-s-medium lg:text-lg text-base">
                  Upload Profile Image<span className="text-red-500">*</span>
                </p>
                <div className="bg-black bg-opacity-60 h-[1px]"></div>
                <div className="flex flex-col justify-start items-start gap-2 px-6 pt-6 pb-3">
                  <div className=" border-[1px] inline-flex flex-col border[#707070]  justify-center items-center gap-2 rounded-[6px] innershadow2">
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
                            src={profilePic}
                            onChange={handleProfilePic}
                            alt="/"
                            className="w-40 h-40 rounded-[6px]  border-[1px] border[#707070] cursor-pointer"
                          />
                        </label>
                      </>
                    ) : (
                      <div className="p-4 flex justify-center items-center flex-col gap-2 relative">
                        <img
                          src="/assets/images/inbox-img.png"
                          className="w-36"
                          alt="/"
                        />
                        <input
                          type="file"
                          name="uploadfile"
                          id="img"
                          className="hidden"
                          onChange={handleProfilePic}
                        />
                        <label
                          for="img"
                          className=" absolute bottom-2 text-white cursor-pointer bg-secondary font-s-medium text-sm flex justify-center items-center px-4 py-2 rounded-[6px] "
                        >
                          Upload Image
                        </label>
                      </div>
                    )}
                  </div>
                  <p className="font-s-medium text-sm">
                    Profile Image :-
                    <span className="text-sm font-s-normal ">
                      Max file size is 1MB, Minimum dimension: 136 x 136 And
                      Suitable files are .jpg & .png
                    </span>
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-[15px]">
                <p className="py-3 px-6 font-s-medium text-lg">
                  Basic Informations
                </p>
                <div className="bg-black bg-opacity-60 h-[1px]"></div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 p-6 justify-items-center items-center">
                  <div className="w-full">
                    <div className="flex justify-start flex-col gap-1 w-full">
                      <div className="font-semibold text-[15px]">Your Name<span className="text-red-500">*</span></div>
                      <input
                        type="text"
                        placeholder="Enter Your Name"
                        name="yourName" readOnly
                        value={userDetails?.candidateName}
                        // onChange={handleChange}
                        className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="flex justify-start flex-col gap-1 w-full phoneparent">
                      <div className="font-semibold text-[15px]">
                        Phone Number<span className="text-red-500">*</span>
                      </div>
                      <PhoneInput
                        placeholder="Mobile Number"
                        name="phone" readOnly
                        value={userDetails?.phoneNumber}
                        // onChange={(e) => {
                        //   setState({ ...state, phone: e });
                        // }}
                        className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="flex justify-start flex-col gap-1 w-full">
                      <div className="font-semibold text-[15px]">Email<span className="text-red-500">*</span></div>
                      <input
                        type="text"
                        name="email"
                        value={state?.email} readOnly
                        // onChange={handleChange}
                        placeholder="Enter Email"
                        className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 px-6 justify-items-center items-center">
                  <div className="w-full">
                    <div className="flex justify-start flex-col gap-1 w-full">
                      <div className="text-[#000] text-[15px] font-semibold">
                        Gender<span className="text-red-500">*</span>
                      </div>
                      <Select
                        value={state.gender}
                        onChange={(e) => setState({ ...state, gender: e })}
                        options={optionsgender}
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="flex justify-start flex-col gap-1 w-full">
                      <div className="font-semibold text-[15px]">
                        Birth Date<span className="text-red-500">*</span>
                      </div>
                      <input
                        type="date"
                        name="date"
                        value={state.date}
                        onChange={handleChange}
                        placeholder=" "
                        className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="flex justify-start flex-col gap-1 w-full">
                      <div className="text-[#000] text-[15px] font-semibold">
                        Category<span className="text-red-500">*</span>
                      </div>
                      <select
                        name="categoryName"
                        value={state.categoryName}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[5px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      >
                        <option>Select Category<span className="text-red-500">*</span></option>
                        {/* {CandiateCatgoryData.map(() => ( */}
                        {CandiateCatgoryData.map((catname, index) => (
                          <option value={catname._id} key={index}>
                            {" "}
                            {catname.name}{" "}
                          </option>
                        ))}
                      </select>
                      {/* <Select options={optionscategory} /> */}
                    </div>
                  </div>
                </div>

                <div className="flex grid-cols-1 md:grid-cols-2 gap-8 p-6 justify-items-center items-center">
                  <div className="w-[60%]">
                    <div className="flex justify-start flex-col gap-1 w-full">
                      <div className="font-semibold text-[15px]">Skills<span className="text-red-500">*</span></div>

                      {formValues.map((element, index) => (
                        <div className="flex justify-between" key={index}>
                          <div className="w-[45%]">
                            <select
                              value={element.skill}
                              name="skill"
                              onChange={(e) => handleChangeGe(index, e)}
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                              <option value="">--Select a skill --</option>
                              {candidateSkills.map((SkillData, index) => (
                                <option value={SkillData.skill}>
                                  {SkillData.skill}
                                </option>
                              ))}
                            </select>
                          </div>

                          <div className="w-[45%]">
                            <select
                              value={element.skilllevel}
                              name="skilllevel"
                              onChange={(e) => handleChangeGe(index, e)}
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                              <option value="Level">Level</option>
                              <option value="Beginner">Beginner</option>
                              <option value="Intermediate">Intermediate</option>
                              <option value="Expert">Expert</option>
                            </select>
                          </div>
                          {index ? (
                            <div className="w-[5%]">
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

                      <div className="w-[5%]">
                        <button
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                          type="button"
                          onClick={() => addFormFields()}
                        >
                          +
                        </button>
                      </div>

                      {/* <div className="flex space-x-3 ">
                    <div className="w-full">
                      <Select
                        name="skill"
                        isMulti
                        value={state.skill}
                        onChange={(e) => setState({ ...state, skill: e })}
                        options={optionskills}
                      />
                    </div>

                    <div className="w-full">
                      <Select
                        name="skilllevel"
                        isMulti
                        value={state.skilllevel}
                        onChange={(e) => setState({ ...state, skilllevel: e })}
                        options={optionskills1}
                      />
                    </div>
                  </div> */}
                    </div>
                  </div>
                  <div className="w-[40%]">
                    <div className="flex justify-start flex-col gap-1 w-full">
                      <div className="font-semibold text-[15px]">Languages<span className="text-red-500">*</span></div>

                      <Select
                        isMulti
                        options={showLanguage}
                        onChange={(e) => setLanguage(e)}
                        value={language}
                        styles={{
                          option: (provided, state) => ({
                            ...provided,
                            backgroundColor: state.isSelected
                              ? "#772674"
                              : "white",
                          }),
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 p-6 justify-items-center items-center">
                  <div className="w-full">
                    <div className="flex justify-start flex-col gap-1 w-full">
                      <div className="font-semibold text-[15px]">
                        Nationality<span className="text-red-500">*</span>
                      </div>

                      {/* <input
                        type="text"
                        placeholder="Nationality"
                        name="nationality"
                        value={state.nationality}
                        onChange={handleChange}
                        className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                      /> */}
                      <Select
                      value={state.nationality}
                      onChange={(e) => setState({ ...state, nationality: e })}
                      options={nationalityValArr}
                    />
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="flex justify-start flex-col gap-1 w-full phoneparent">
                      <div className="font-semibold text-[15px]">
                        Experience<span className="text-red-500">*</span>
                      </div>

                      <Select
                        value={state.experience}
                        onChange={(e) => setState({ ...state, experience: e })}
                        options={optionsexperience}
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="flex justify-start flex-col gap-1 w-full">
                      <div className="font-semibold text-[15px]">
                        Career Level<span className="text-red-500">*</span>
                      </div>
                      <Select
                        value={state.careerLevel}
                        onChange={(e) => setState({ ...state, careerLevel: e })}
                        options={optionscareerlevel}
                      />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 p-6 justify-items-center items-center">
                  <div className="w-full">
                    <div className="flex justify-start flex-col gap-1 w-full">
                      <div className="font-semibold text-[15px]">Country<span className="text-red-500">*</span></div>
                      <Select
                        placeholder="Country"
                        getOptionLabel={(e) => e.name}
                        getOptionValue={(e) => e}
                        value={state.country}
                        onChange={(e) =>
                          setState({
                            ...state,
                            country: e,
                          })
                        }
                        options={mycountry}
                      />
                    </div>
                  </div>

                  <div className="w-full  ">
                    <div className="flex justify-start flex-col gap-1 w-full">
                      <div className="font-semibold text-[15px]">State<span className="text-red-500">*</span></div>
                      <Select
                        placeholder="State"
                        getOptionLabel={(e) => e.name}
                        getOptionValue={(e) => e}
                        value={state.state}
                        onChange={(e) =>
                          setState({
                            ...state,
                            state: e,
                          })
                        }
                        options={mystate}
                      />
                    </div>
                  </div>

                  <div className="w-full ">
                    <div className="flex justify-start flex-col gap-1 w-full">
                      <div className="font-semibold text-[15px]">City<span className="text-red-500">*</span></div>
                      <Select
                        placeholder="City"
                        getOptionLabel={(e) => e.name}
                        getOptionValue={(e) => e}
                        value={state.city}
                        onChange={(e) =>
                          setState({
                            ...state,
                            city: e,
                          })
                        }
                        options={mycity}
                      />
                    </div>
                  </div>
                </div>

                <div className="px-6 grid grid-cols-1 md:grid-cols-12 gap-2  justify-items-center items-center">
                  <div className="w-full col-span-4">
                    <div className="flex justify-start flex-col gap-1 w-full">
                      <div className="font-semibold text-[15px]">Pincode<span className="text-red-500">*</span></div>
                      <input
                        type="text"
                        placeholder="Pincode"
                        // pattern="[0-9]*"
                        name="pincode"
                        value={state.pincode}
                        // onChange={handleChange}
                        onChange={(e) => {
                          if (
                            e.target.value.match("^[0-9]*$") ||
                            e.target.value.length == 0
                          ) {
                            handleChange(e)}}}
                        className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                      />
                    </div>
                  </div>
                  <div className="w-full col-span-8 ">
                    <div className="flex justify-start flex-col gap-1 w-full">
                      <div className="font-semibold text-[15px]">Address<span className="text-red-500">*</span></div>
                      <input
                        type="text"
                        placeholder="Enter your address"
                        name="address"
                        value={state.address}
                        onChange={handleChange}
                        className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                      />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="w-full ">
                    <div className="flex justify-start flex-col gap-1 w-full">
                      <div className="font-semibold text-[15px]">Bio<span className="text-red-500">*</span></div>
                      <div className="bg-inputcolor rounded-md px-2 py-2">
                        {" "}
                        <JoditEditor
                          className="-z-20"
                          ref={editor}
                          value={state.description}
                          tabIndex={1}
                          onChange={(e) =>
                            setState({ ...state, description: e })
                          }
                        />
                        {/* <Editor
                          placeholder="Write Something Here..."
                          editorState={editorState}
                          toolbarClassName="toolbarClassName"
                          wrapperClassName="wrapperClassName"
                          editorClassName="editorClassName"
                          onEditorStateChange={setEditorState}
                          value={state.description}
                          onChange={(e) =>
                            setState({ ...state, description: e })
                          }
                          className="w-full outline-none  resize-none overflow-hidden bg-inputcolor"
                          toolbar={{
                            options: ["inline", "textAlign"],
                          }}
                        /> */}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex">
                  <div className="p-6">
                    <div className="font-semibold text-[15px]">
                      Availability<span className="text-red-500">*</span>
                    </div>
                    <div className="flex gap-3 mt-3">
                      <input
                        type="radio"
                        name="Availability"
                        value={state.availabilty}
                        onChange={(e) => setState({ ...state, availabilty: e })}
                      />
                      <div className="font-semibold text-[15px]">
                        Immediate Available
                      </div>
                    </div>
                    <div className="flex gap-3 mt-2">
                      <input
                        type="radio"
                        name="Availability"
                        value={state.availabilty}
                        onChange={(e) => setState({ ...state, availabilty: e })}
                      />
                      <div className="font-semibold text-[15px]">
                        {" "}
                        Not Immediate Available
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="font-semibold text-[15px]">
                      Are you Willing to Relocate<span className="text-red-500">*</span>
                    </div>
                    <div className="flex gap-3 mt-3">
                      <input
                        type="radio"
                        value={state.relocate}
                        onChange={(e) => setState({ ...state, relocate: e })}
                      />
                      <div className="font-semibold text-[15px]">Yes</div>
                    </div>
                    <div className="flex gap-3 mt-2">
                      <input
                        type="radio"
                        value={state.relocate}
                        onChange={(e) => setState({ ...state, relocate: e })}
                      />
                      <div className="font-semibold text-[15px]"> No</div>
                    </div>
                  </div>
                </div>

                <div className="flex  px-4 ">
                  <input
                    className="hidden"
                    ref={fileRef0}
                    accept="application/pdf,application/msword,
  application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    onChange={handleGSTUpload}
                    type="file"
                  />

                  <div className="flex space-x-1  ">
                    {" "}
                    <button
                      className="  "
                      onClick={(e) => fileRef0.current.click()}
                    >
                      {uploadimagegst ? (
                        <>
                        <div className="flex space-x-3 items-center border border-secondary px-2 py-1 md:mb-5 text-secondary font-s-medium rounded-full">
                          <MdCloudUpload />
                        <a>{uploadimagegst?.name}</a>
                          <h6 className=" text-sm py-2">Upload Resume<span className="text-red-500">*</span></h6>
                        </div>
                        </>
                          
                      ) : (
                        <>
                        <div className="flex space-x-3 items-center border border-secondary px-2 py-1 md:mb-5 text-secondary font-s-medium rounded-full">
                          <MdCloudUpload />
                          <h6 className=" text-sm py-2">Upload Resume<span className="text-red-500">*</span></h6>
                        </div>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-[15px]">
                <p className="py-3 px-6 font-s-medium text-lg">
                  Social Network
                </p>
                <div className="bg-black bg-opacity-60 h-[1px]"></div>
                <div className=" p-6 flex flex-col gap-5 ">
                  <div className="flex space-x-4">
                    <div className="w-full">
                      <div className="flex justify-start flex-col gap-1 w-full">
                        <div className="font-semibold text-[15px]">
                          LinkedIn
                        </div>
                        <input
                          type="url"
                          placeholder="Enter Linkedin url"
                          name="linkedin"
                          value={state.linkedin}
                          // onChange={handleChange}
                          onChange={(e) => {validate(e.target.value); setState({
                            ...state,
                            [e.target.name]: e.target.value,
                          })}}
                          className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                        />
                         <span style={{
          fontWeight: 'bold',
          color: 'red',
        }}>{errorMessage}</span>
                      </div>
                    </div>
                    {/* <div className="w-full ">
                      <div className="flex justify-start flex-col gap-1 w-full">
                        <div className="font-semibold text-[15px]">Beta 2</div>
                        <input
                          type="url"
                          placeholder="Beta"
                          name="beta2"
                          value={state.beta2}
                          // onChange={handleChange}
                          onChange={(e) => {validate_new(e.target.value); setState({
                            ...state,
                            [e.target.name]: e.target.value,
                          })}}
                          className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                        />
                         <span style={{
          fontWeight: 'bold',
          color: 'red',
        }}>{errorMessage}</span>
                      </div>
                    </div> */}
                  </div>
                  <div className="">
                    <button
                      onClick={createProfileAPI}
                      className="bg-secondary text-white font-s-medium px-8 py-2 rounded-[7px] text-sm"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default General;
