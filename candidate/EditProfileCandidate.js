import React, { useState, useEffect, useRef } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { Country, State, City } from "country-state-city";
import { RiArrowLeftSLine } from "react-icons/ri";
import { Editor } from "react-draft-wysiwyg";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { MdCloudUpload } from "react-icons/md";
import { ContentState, convertToRaw } from "draft-js";
import { ImBin } from "react-icons/im";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { ValueChanged } from "../../../redux/actions/flightAction";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import {
  candidateCategoryAPI,
  candidateSkillAPI,
} from "../../../api/authCandidate";
import Select from "react-select";
import {
  candidateCreateProfileAPI,
  candidateEducationAPI,
  candidateExperienceAPI,
} from "../../../api/authService";
import { candidateProfileGetAPI } from "../../../api/authCandidate";
import { Disclosure } from "@headlessui/react";
import { AiFillDelete } from "react-icons/ai";
import JoditEditor from "jodit-react";
const EditProfileCandidate = () => {
  const dispatch = useDispatch();
  const [editState2, setEditState2] = useState(true);
  const [editState1, setEditState1] = useState(true);
  const [editState, setEditState] = useState(true);
  const [profileImg, setProfileImg] = useState();
  const [language, setLanguage] = useState([]);
  const [formDataShow, setFormData] = useState([]);
  var [showLanguage, setShowLanguage] = useState([]);
  const [FileShow, setUploadFileShow] = useState();
  const editor = useRef(null);
  const [CandiateCatgoryData, setCandidateCategoryData] = useState([]);
  const [candidateSkills, setCandidateSkills] = useState([]);
  // const [language, setLanguage] = React.useState([]);

  console.log("File Show", FileShow);

  console.log("Dtaa Show", formDataShow);

  const optionskills = [
    { value: "skill1", label: "skill11" },
    { value: "skill2", label: "skill2" },
    { value: "skill3", label: "skill3" },
    { value: "skill4", label: "skill4" },
    { value: "skill5", label: "skill5" },
    { value: "skill6", label: "skill6" },
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

  const [selectedLanguage, setSelectedLanguage] = useState([]);

  const [candidateData, setCandidateData] = useState();

  useEffect(() => {
    CandidateCategory();
    CandidateSkill();
  }, []);

  // const setLanguage = (e) => {
  //   setSelectedLanguage(Array.isArray(e) ? e.map((x) => x.value) : []);
  // };

  console.log();

  const [editorState, setEditorState] = useState();

  // General Page

  const [candyState , setCandyState] = useState({})

  const [formValues, setFormValues] = useState([{ skill: "", skilllevel: "" }]);
  const [formValuesDta, setFormValueDta] = useState([]);

  console.log("Form Values", formValues);

  let handleChangeGe = (i, e) => {
    let newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues , setCandyState({...candyState , skills : JSON.stringify(formValues)}))
  };
  let addFormFields = () => {
    setFormValues([...formValues, { skill: "", skilllevel: "" }]);
  };

  let removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
  };
  console.log("Form Values Data", formValues);

  const optionscategory = [
    { value: "9889898", label: "It Sector" },
    { value: "9889898", label: "Finance" },
    { value: "9889898", label: "Business analyst" },
  ];

  const optionsexperience = [
    { value: "2 years", label: "2 years" },
    { value: "3 years", label: "3 years" },
    { value: "4 years", label: "4 years" },
  ];

  const optionscareerlevel = [
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
  ];

  const [uploadimagegst, setUploadImageGst] = useState();
  const fileRef0 = React.useRef();
  const [fileTrigger , setFileTrigger] = useState(false)
  const handleGSTUpload = (event) => {
    setUploadImageGst(event.target.files[0]);
    setCandyState({...candyState , uploadfiles : event.target.files[0]})
    setFileTrigger(true)
  };

  let lang = [];
  language.map((item) => {
    lang.push(item.value);
  }); 

  console.log("Languages", language);
  const navigate = useNavigate();
  
  
  const createProfileAPI = async () => {
    console.log("candyState" , candyState)
    const formdata = new FormData();

    formdata.append("candidateName", candyState.candidateName);
    formdata.append("phoneNumber", candyState.phoneNumber);
    formdata.append("email", candyState.email);
    formdata.append("gender", candyState.gender);
    formdata.append("birthDate", candyState.birthDate);
    formdata.append("categoryId", candyState.categoryId);
    formdata.append("skills", JSON.stringify(formValues));
    formdata.append("languages", JSON.stringify(lang));
    formdata.append("nationality", candyState.nationality);
    formdata.append("experience", candyState.experience);
    formdata.append("careerLevel", candyState.careerLevel);
    formdata.append("country", candyState.country.name);
    formdata.append("city", candyState.city.name);
    formdata.append("state", candyState.state.name);
    formdata.append("address", candyState.address);
    formdata.append("bio", candyState.bio);
    formdata.append("linkedin", candyState.linkedin);
    // formdata.append("images", profileImg);
    formdata.append("pincode", candyState.pincode);
    formdata.append("availability", candyState.availability);
    formdata.append("relocate", candyState.relocate);
    // formdata.append("beta_2", candyState.beta2);
    if(fileTrigger){
      formdata.append("uploadfiles",candyState.uploadfiles);
    }
    if(picTrigger){
      formdata.append("images", candyState.images);
    }
    try {
      const response = await candidateCreateProfileAPI(formdata);
      console.log("response from api", response);
      console.log(response);
      if (response.status) {
        console.log(response.data);
        toast(response.message);
        navigate(`/candidate/Education-Edit/${candidateId}`);
      } else {
        toast(response.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetCandidateProfile();
  }, []);

  const id = useParams();

  const candidateId = id.id;

  // console.log("Candidate Data", candidateData.skills);

  const _contentState = ContentState.createFromText("Sample content state");
  const raw = convertToRaw(_contentState); // RawDraftContentState JSON
  const [contentState, setContentState] = useState(raw); // ContentState JSON

  const skillsarry = [];
  const [skillsDummy, setSkillsDummy] = useState([]);

  console.log("Candidate Data Show___________", candidateData);

  console.log("000000", formValues);
  let array = [];
  const [dumy, setDumy] = useState([]);
  // console.log(candidateData.skills, "1111111111...........");
  useEffect(() => {
    // alert("check useee");
    if (skillsDummy.length >= 1) {
      for (let i = 0; i < skillsDummy.length; i++) {
        console.log("loop..............");
        array.push({
          skill: skillsDummy[i].skill,
          skilllevel: skillsDummy[i].skilllevel,
        });
        console.log(skillsDummy[i].skill, "check skil.............");
      }
      setDumy(array);
      setFormValues(array);
    }
  }, [skillsDummy]);
  console.log(dumy, "check after set.............");

  // console.log("Candiate Data", candidateData);

  const optionsgender = [
    { value: "male", label: "male" },
    { value: "female", label: "female" },
    { value: "others", label: "others" },
  ];

  const languagesOptions = [];

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/samayo/country-json/master/src/country-by-languages.json"
    )
      .then((res) => res.json())
      .then(async (res) => {
        console.log("Alll The language -----------------------");
        await res[95].languages.map((val) => {
          console.log(val);
          if (languagesOptions.indexOf(val) == -1) {
            var lang = { value: val, label: val };
            languagesOptions.push(lang);
            console.log(languagesOptions);
          }
        });
        setShowLanguage(languagesOptions);
      });
  }, []);

  const [products, setProducts] = useState("General");
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
    yourName: "",
    phone: "",
    email: "",
    gender: "",
    date: "",
    categoryId: "",
    status: "",
    skills: "",
    languages: "",
    nationality: "",
    experience: "",
    careerLevel: "",
    currency: "",
    currentsalary: "",
    expectedSalary: "",
    country: "",
    state: "",
    city: "",
    address: "",
    description: "",
    linkedin: "",
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
    beta2: "",
    courseType4: "",
    courseName5: "",
    specialization5: "",
    university5: "",
    passingYear5: "",
    percentage5: "",
    courseType5: "",
  });

  const GetCandidateProfile = async () => {
    try {
      const response = await candidateProfileGetAPI(candidateId);
      console.log("Candidate Data Show", response);

      setCandyState(response.data)

      setCandidateData(response.data);
      setState(response.data);
      dispatch(ValueChanged("userDetails", response.data));
      const candidateDataProfile = response.data;
      setSkillsDummy(response.data.skills);
      setState({
        yourName: candidateDataProfile.candidateName,
        phone: candidateDataProfile.phoneNumber,
        gender: {
          label: candidateDataProfile.gender,
          value: candidateDataProfile.gender,
        },
        date: candidateDataProfile.birthDate,
        email: candidateDataProfile.email,
        nationality: candidateDataProfile.nationality,
        experience: {
          label: candidateDataProfile.experience,
          value: candidateDataProfile.experience,
        },
        careerLevel: {
          label: candidateDataProfile.careerLevel,
          value: candidateDataProfile.careerLevel,
        },
        country: candidateDataProfile.country,
        state: candidateDataProfile.state,
        city: candidateDataProfile.city,
        pincode: candidateDataProfile.pincode,
        address: candidateDataProfile.address,
        description: candidateDataProfile.bio,
        relocate: candidateDataProfile.relocate,
        availability: candidateDataProfile.relocate,
        linkedin: candidateDataProfile.linkedin,
        beta2: candidateDataProfile.beta_2,
        categoryId: candidateDataProfile.categoryId,
      });

      setLanguage(
        candidateDataProfile.languages.map((item) => {
          return { value: item, label: item };
        })
      );
      setUploadFileShow(candidateDataProfile.uploadfiles[0]);
    } catch (error) {
      console.log(error);
    }
  };

  // const [value, setValue] = useState();
  console.log("Catname", state.categoryId);
  const [profilePic, setProfilePic] = useState();
  let mycountry = Country.getAllCountries();
  let mystate = State.getStatesOfCountry(state.country?.isoCode);
  let mycity = City.getCitiesOfState(
    state.country?.isoCode,
    state.state?.isoCode
  );
  console.log("COuntry", state.country.name);
  // console.log(state.state);
  console.log(state.state.name);
  // console.log(mycountry);
  // console.log(mystate);
  console.log(state.city);
  console.log(mycity);

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
    setCandyState({...candyState , [e.target.name] : e.target.value})
  };
  const [picTrigger , setPicTrigger] = useState(false)
  const handleProfilePic = (e) => {
    setCandyState({...candyState , images : e.target.files[0]})
    setPicTrigger(true)
    setProfileImg(e.target.files[0]);
    console.log(e.target.files);
    setProfilePic(URL.createObjectURL(e.target.files[0]));
  };

  console.log(candyState)
  return (
    <>
    <div className="container mx-auto md:px-5  md:py-20">
      <div className="flex space-x-2 items-center pb-6 lg:px-0 px-5">
        {" "}
        <RiArrowLeftSLine className="text-secondary w-5 h-5 " />{" "}
        <p className="text-secondary font-s-medium text-base"> Edit Profile </p>{" "}
      </div>

      <div className=" md:w-[50%] grid md:grid-cols-3 grid-cols-1   rounded  justify-items-start items-center mx-4 border-buttonsome py-2 px-2  ">
        <NavLink
          to={`/candidate/edit-candidate-profile/${candidateId}`}
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
          onClick={() => setProducts("Education")}
          to={`/candidate/Education-Edit/${candidateId}`}
          className={`px-5 py-2 text-center  font-text font-s-regular cursor-pointer  md:text-base text-sm  w-full  ${
            products == "Education"
              ? "font-bold  text-secondary border-secondary border-b-2"
              : "  text-black  "
          }`}
        >
          Education
        </NavLink>

        <NavLink
          onClick={() => setProducts("Work Experience")}
          to={`/candidate/WorkExperice-Edit/${candidateId}`}
          className={`px-5 py-2   text-center  cursor-pointer font-text font-s-normal md:text-base text-sm  w-full ${
            products == "Work Experience"
              ? "font-bold  text-secondary border-secondary border-b-2  "
              : " text-black "
          }`}
        >
          Work Experience
        </NavLink>
      </div>

      <div className="mt-5">
        <div className="bg-[#F5F7F9] md:rounded-[15px] p-6 flex flex-col justify-start w-full gap-6">
          <div className="bg-white rounded-[15px]">
            <p className="py-3 px-6 font-s-medium lg:text-lg text-base">
              Upload Profile Image
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
                        // src={candyState?.images?.[0]}
                        // onChange={handleProfilePic}
                        alt="/"
                        className="w-40 h-40 rounded-[6px]  border-[1px] border[#707070] cursor-pointer"
                      />
                    </label>
                  </>
                ) : (
                  <div className="p-4 flex justify-center items-center flex-col gap-2 relative">
                    <img
                      src={candidateData && candidateData.images[0]}
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
                  <div className="font-semibold text-[15px]">Your Name</div>
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    name="candidateName"
                    value={candyState.candidateName}
                    onChange={handleChange}
                    className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                  />
                </div>
              </div>
              <div className="w-full">
                <div className="flex justify-start flex-col gap-1 w-full phoneparent">
                  <div className="font-semibold text-[15px]">Phone Number</div>
                  <PhoneInput
                    placeholder="Mobile Number"
                    name="phone"
                    value={candyState.phoneNumber}
                    onChange={(e) => {
                      setState({ ...state, phone: e });
                     setCandyState({...candyState , phoneNumber : e.target.value})}
                  }
                    className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                  />
                </div>
              </div>
              <div className="w-full">
                <div className="flex justify-start flex-col gap-1 w-full">
                  <div className="font-semibold text-[15px]">Email</div>
                  <input
                    type="text"
                    name="email"
                    value={candyState.email}
                    onChange={handleChange}
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
                    Gender
                  </div>
                  <Select
                    value={state.gender}
                    onChange={(e) => {setState({ ...state, gender: e }) ; setCandyState({...candyState , gender : e.label})}}
                    options={optionsgender}
                  />
                </div>
              </div>
              <div className="w-full">
                <div className="flex justify-start flex-col gap-1 w-full">
                  <div className="font-semibold text-[15px]">Birth Date</div>
                  <input
                    type="date"
                    name="birthDate"
                    value={candyState.date}
                    onChange={handleChange}
                    placeholder=" "
                    className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                  />
                </div>
              </div>
              <div className="w-full">
                <div className="flex justify-start flex-col gap-1 w-full">
                  <div className="text-[#000] text-[15px] font-semibold">
                    Category
                  </div>
                  <select
                    name="categoryId"
                    value={state.categoryId}
                    onChange={handleChange}
                    selected
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[5px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option>Select Category</option>
                    {/* {CandiateCatgoryData.map(() => ( */}
                    {CandiateCatgoryData.map((catname, index) => (
                      <option value={catname._id} key={index}>
                        {" "}
                        {catname.name}{" "}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="flex grid-cols-1 md:grid-cols-2 gap-8 p-6 justify-items-center items-center">
              <div className="w-[60%]">
                <div className="flex justify-start flex-col gap-1 w-full">
                  <div className="font-semibold text-[15px]">Skills</div>

                  {formValues.map((element, index) => (
                    <div className="flex justify-between" key={index}>
                      <div className="w-[45%]">
                        <select
                          value={element.skill}
                          name="skill"
                          onChange={(e) => handleChangeGe(index, e)}
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
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
                </div>
              </div>
              <div className="w-[40%]">
                <div className="flex justify-start flex-col gap-1 w-full">
                  <div className="font-semibold text-[15px]">Languages</div>

                  <Select
                    // closeMenuOnSelect={false}
                    // components={animatedComponents}
                    // defaultValue={[showLanguage[4], showLanguage[5]]}
                    isMulti
                    options={showLanguage}
                    onChange={(e) => setLanguage(e)}
                    value={language}
                    styles={{
                      option: (provided, state) => ({
                        ...provided,
                        backgroundColor: state.isSelected ? "#772674" : "white",
                      }),
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 p-6 justify-items-center items-center">
              <div className="w-full">
                <div className="flex justify-start flex-col gap-1 w-full">
                  <div className="font-semibold text-[15px]">Nationality</div>

                  <input
                    type="text"
                    placeholder="Nationality"
                    name="nationality"
                    value={state.nationality}
                    onChange={handleChange}
                    className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                  />
                </div>
              </div>
              <div className="w-full">
                <div className="flex justify-start flex-col gap-1 w-full phoneparent">
                  <div className="font-semibold text-[15px]">Experience</div>

                  <Select
                    value={state.experience}
                    onChange={(e) => {setState({ ...state, experience: e }) ;
                    setCandyState({...candyState , experience : e.label})
                  }}
                    options={optionsexperience}
                  />
                </div>
              </div>
              <div className="w-full">
                <div className="flex justify-start flex-col gap-1 w-full">
                  <div className="font-semibold text-[15px]">Career Level</div>
                  <Select
                    value={state.careerLevel}
                    onChange={(e) => {setState({ ...state, careerLevel: e }) ; 
                    setCandyState({...candyState , careerLevel : e.value})
                  }}
                    options={optionscareerlevel}
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 p-6 justify-items-center items-center">
              <div className="w-full">
                <div className="flex justify-start flex-col gap-1 w-full">
                  <div className="font-semibold text-[15px]">Country</div>
                  <Select
                    placeholder={state.country}
                    getOptionLabel={(e) => e.name}
                    getOptionValue={(e) => e}
                    defaultInputValue={state.country}
                    value={state.country}
                    onChange={(e) =>
                     { setState({
                        ...state,
                        country: e,
                      }) ; 
                      setCandyState({...candyState , country : e})
                    }
                    }
                    options={mycountry}
                  />
                </div>
              </div>

              <div className="w-full  ">
                <div className="flex justify-start flex-col gap-1 w-full">
                  <div className="font-semibold text-[15px]">State</div>
                  <Select
                    placeholder={state.state}
                    getOptionLabel={(e) => e.name}
                    getOptionValue={(e) => e}
                    value={state.state}
                    onChange={(e) =>
                     { setState({
                        ...state,
                        state: e,
                      });
                      setCandyState({...candyState , state : e})
                    }
                    }
                    options={mystate}
                  />
                </div>
              </div>

              <div className="w-full ">
                <div className="flex justify-start flex-col gap-1 w-full">
                  <div className="font-semibold text-[15px]">City</div>
                  <Select
                    placeholder={state.city}
                    getOptionLabel={(e) => e.name}
                    getOptionValue={(e) => e}
                    value={state.city}
                    onChange={(e) =>
                      {setState({
                        ...state,
                        city: e,
                      });
                      setCandyState({...candyState , city : e})}
                    }
                    options={mycity}
                  />
                </div>
              </div>
            </div>

            <div className="px-6 grid grid-cols-1 md:grid-cols-12 gap-2  justify-items-center items-center">
              <div className="w-full col-span-4">
                <div className="flex justify-start flex-col gap-1 w-full">
                  <div className="font-semibold text-[15px]">Pincode</div>
                  <input
                    type="text"
                    placeholder="Pincode"
                    name="pincode"
                    value={state.pincode}
                    onChange={handleChange}
                    className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                  />
                </div>
              </div>
              <div className="w-full col-span-8 ">
                <div className="flex justify-start flex-col gap-1 w-full">
                  <div className="font-semibold text-[15px]">Address</div>
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
                  <div className="font-semibold text-[15px]">Bio</div>
                  <div className="bg-inputcolor rounded-md px-2 py-2">
                    {" "}
                    <JoditEditor
                      className="-z-20" 
                      ref={editor}
                      value={state.description}
                      tabIndex={1}
                      onChange={(e) => {setState({ ...state, description: e });
                      setCandyState({...candyState , bio : e})
                    }}
                    />
                    {/* <Editor
                      placeholder="Write Something Here..."
                      editorState={editorState}
                      defaultContentState={contentState}
                      onContentStateChange={setContentState}
                      toolbarClassName="toolbarClassName"
                      wrapperClassName="wrapperClassName"
                      editorClassName="editorClassName"
                      onEditorStateChange={setEditorState}
                      value={state.description}
                      onChange={(e) => setState({ ...state, description: e })}
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
                <div className="font-semibold text-[15px]">Availability</div>
                <div className="flex gap-3 mt-3">
                  <input
                    type="radio"
                    id="availabel"
                    value={true}
                    name="Availability"
                    // isChecked={state.availabilty}
                    // value={state.availabilty}
                    onChange={(e) => {setState({ ...state, availabilty: e });
                    setCandyState({...candyState , availability : e.target.value})
                  }}
                  />
                  <div className="font-semibold text-[15px]">
                    <label value={true} for="availabel">
                    Immediate Available

                    </label>
                  </div>
                </div>
                <div className="flex gap-3 mt-2">
                  <input
                    type="radio"
                    name="Availability"
                    id="notavailable"
                    value={false}
                    // isChecked={state.availabilty}
                    // value={state.availabilty}
                    onChange={(e) => {setState({ ...state, availabilty: e });
                    setCandyState({...candyState , availability : e.target.value})
                  }}
                  />
                  <div className="font-semibold text-[15px]">
                    <label value={false} for="notavailable">
                    {" "}

                    Not Immediate Available
                    </label>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="font-semibold text-[15px]">
                  Are you Willing to Relocate
                </div>
                <div className="flex gap-3 mt-3">
                  <input
                    type="radio"
                    name="relocate"
                    id="yes"
                    value={true}
                    // isChecked={state.relocate}
                    // value={state.relocate}
                    // isChecked={}
                    onChange={(e) => {setState({ ...state, relocate: e });
                    setCandyState({...candyState , relocate : e.target.value})
                  }}
                  />
                  <div className="font-semibold text-[15px]">
                    <label for="yes" value={true}>
                    Yes

                    </label>
                    </div>
                </div>
                <div className="flex gap-3 mt-2">
                  <input
                    type="radio"
                    name="relocate"
                    id="not"
                    value={false}
                    // value={state.relocate}
                    isChecked={state.relocate}
                    onChange={(e) => {setState({ ...state, relocate: e });
                    setCandyState({...candyState , relocate : e.target.value})
                  }}
                  />
                  <div className="font-semibold text-[15px]">
                     <label value={false} for="not">
                     No

                     </label>
                     </div>
                </div>
              </div>
            </div>

            <div className="flex  px-4 ">
              <input
                className="hidden"
                ref={fileRef0}
                onChange={handleGSTUpload}
                type="file"
              />

              <div className="flex space-x-1  ">
                <img
                  alt={candidateData && candidateData.uploadfiles[0]}
                  src={candidateData && candidateData.uploadfiles[0]}
                  className="w-[150px]"
                />{" "}
                <button
                  className="  "
                  onClick={(e) => fileRef0.current.click()}
                >
                  {uploadimagegst ? (
                    <img
                      value={state.files}
                      onChange={handleChange}
                      alt="upload"
                      src={URL.createObjectURL(uploadimagegst)}
                      className="w-[70%] h-[80%]"
                    />
                  ) : (
                    <div className="flex space-x-3 items-center border border-secondary px-2 py-1 md:mb-5 text-secondary font-s-medium rounded-full">
                      <MdCloudUpload />
                      <h6 className=" text-sm py-2">Upload Resume</h6>
                    </div>
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[15px]">
            <p className="py-3 px-6 font-s-medium text-lg">Social Network</p>
            <div className="bg-black bg-opacity-60 h-[1px]"></div>
            <div className=" p-6 flex flex-col gap-5 ">
              <div className="flex space-x-4">
                <div className="w-full">
                  <div className="flex justify-start flex-col gap-1 w-full">
                    <div className="font-semibold text-[15px]">LinkedIn</div>
                    <input
                      type="text"
                      placeholder="Enter Linkedin url"
                      name="linkedin"
                      value={state.linkedin}
                      onChange={handleChange}
                      className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                    />
                  </div>
                </div>
                {/* <div className="w-full">
                  <div className="flex justify-start flex-col gap-1 w-full">
                    <div className="font-semibold text-[15px]">Beta 2</div>
                    <input
                      type="text"
                      placeholder="Beta"
                      name="beta2"
                      value={state.beta2}
                      onChange={handleChange}
                      className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                    />
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
    </>
  );
};

export default EditProfileCandidate;
