import React, { useState, useRef } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { Editor } from "react-draft-wysiwyg";
import Select from "react-select";
import { AiOutlineSearch } from "react-icons/ai";
import { MdCloudUpload } from "react-icons/md";
import { BsCamera } from "react-icons/bs";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { RiArrowLeftSLine } from "react-icons/ri";
import {
  createCoachProfile,
  getAllSkills,
  getAllSpecialities,
  getBankNameByIFSC,
} from "../../../api/coachFunctions";
import { useEffect } from "react";
import {
  getAllCitiesAPI,
  getAllCountriesAPI,
  getAllStatesAPI,
} from "../../../api/authService";
import { stringify } from "postcss";

const CoachProfileGeneral = () => {
  const [editorState, setEditorState] = useState();
  const [products, setProducts] = useState("General");
  const [checkAddress, setCheckAddress] = useState(false);
  // gst upload state
  const [uploadimageGstCard, setUploadImageGstCard] = useState("");
  const [uploadimagePanCard, setUploadImagePanCard] = useState("");

  // console.log("checkAddress", checkAddress);

  // social security state
  const [uploadimageSocialSecurity, setUploadImageSocialSecurity] =
    useState("");

  // aadhar card
  const [uploadimageAadharCard, setUploadImageAadharCard] = useState("");

  // skill state

  const { userDetails } = useSelector((state) => state.flightReducer);
  const name = userDetails.coachName;
  const token = userDetails.token;
  const email = userDetails.email;
  const phoneNumber = userDetails.phoneNumber;
  const navigate = useNavigate();

  const optionsgender = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
    { value: "Others", label: "Others" },
  ];

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
    { value: "16 years", label: "16 years" },
    { value: "17 years", label: "17 years" },
    { value: "18 years", label: "18 years" },
    { value: "19 years", label: "19 years" },
    { value: "20 years", label: "20 years" },
    { value: "21 years", label: "21 years" },
    { value: "22 years", label: "22 years" },
    { value: "23 years", label: "23 years" },
    { value: "24 years", label: "24 years" },
    { value: "25 years", label: "25 years" },
    { value: "26 years", label: "26 years" },
    { value: "27 years", label: "27 years" },
    { value: "28 years", label: "28 years" },
    { value: "29 years", label: "29 years" },
    { value: "30 years", label: "30 years" },
    { value: "31 years", label: "31 years" },
    { value: "32 years", label: "32 years" },
    { value: "33 years", label: "33 years" },
    { value: "34 years", label: "34 years" },
    { value: "35 years", label: "35 years" },
    { value: "36 years", label: "36 years" },
    { value: "37 years", label: "37 years" },
    { value: "38 years", label: "38 years" },
    { value: "39 years", label: "39 years" },
    { value: "40 years", label: "40 years" },
    { value: "41 years", label: "41 years" },
    { value: "42 years", label: "42 years" },
    { value: "43 years", label: "43 years" },
    { value: "44 years", label: "44 years" },
    { value: "45 years", label: "45 years" },
    { value: "46 years", label: "46 years" },
    { value: "47 years", label: "47 years" },
    { value: "48 years", label: "48 years" },
    { value: "49 years", label: "49 years" },
    { value: "50 years", label: "50 years" },
  ];

  const accountTypes = [
    { value: "saving", label: "Saving" },
    { value: "current", label: "Current" },
    { value: "salary", label: "Salary" },
  ];
  // langauge Data
  const langData = require("../../../utils/langauge.json");
  // console.log("langData", langData);
  const langValArr = langData?.map((item) => {
    return { value: item.language, label: item.language };
  });
  // nationality Data
  const nationalityData = require("../../../utils/nationalities.json");
  const nationalityValArr = nationalityData?.map((item) => {
    return { value: item, label: item };
  });
  const [BioDataPdf, setBioDataPdf] = useState([]);
  const handleBioDataPdf = (e) => {
    setBioDataPdf(e.target.files[0]);
  };
  // console.log("biodatapdf", BioDataPdf.name);
  // console.log("BioDataPdfBioDataPdf", BioDataPdf);

  // gst upload
  const dummyGstCardImage = [];
  const fileRefGstCard = useRef();
  const handleUploadGstCard = (event) => {
    dummyGstCardImage.push(setUploadImageGstCard(event.target.files[0]));
  };
  // pAN card
  const fileRefPanCard = useRef();
  const handleUploadPanCard = (event) => {
    setUploadImagePanCard(event.target.files[0]);
  };
  // social security upload\
  const dummySocialSecurityImage = [];
  const fileRefSocialSecurity = useRef();
  const handleUploadSocialSecurity = (event) => {
    dummySocialSecurityImage.push(
      setUploadImageSocialSecurity(event.target.files[0])
    );
  };

  // aadhar card
  const fileRefAadharCard = useRef();
  const dummyAadharImage = [];
  const handleUploadAadharCard = (event) => {
    dummyAadharImage.push(setUploadImageAadharCard(event.target.files[0]));
  };
  console.log("dummyAadharImage", dummyAadharImage);
  console.log("dummySocialSecurityImage", dummySocialSecurityImage);
  console.log("dummyGstCardImage", dummyGstCardImage);
  // remove and add function

  const [Currentaddress, setCurrentAddress] = useState({
    state: "",
    country: "",
    city: "",
    pincode: "",
    address: "",
  });
  const [PermanentAddress, setPermanentAddress] = useState({
    state: "",
    country: "",
    city: "",
    pincode: "",
    address: "",
  });
  // states for form data
  const [state, setState] = useState({
    fullName: "",
    gender: "",
    fatherName: "",
    motherName: "",
    nationality: "",
    experience: "",
    specialities: "",
    bankName: "",
    dateOfBirth: "",
    nameonAccount: "",
    enterAccountNumber: "",
    reenterAccountNumber: "",
    ifscCode: "",
    swiftCode: "",
    accountType: {},
    linkedinUrl: "",
    BioData: "",
    // files: [""],
    aadharCardNumber: "",
    panCardNumber: "",
    socialSecurityNumbe: "",
    gSTNumber: "",
  });

  // const [accountstatusState, setAccountstatusState] = useState("Active");
  // Function to submit form data--start
  const handleCreateProfile = async () => {
    const formdata = new FormData();
    if (state.reenterAccountNumber === state.enterAccountNumber) {
      // formdata.append("accountstatus", accountstatusState);
      if (
        profileImg &&
        name != "" &&
        state.gender.value != "" &&
        state.nationality.value != "" &&
        state.experience.value != "" &&
        state.fatherName != "" &&
        state.motherName != "" &&
        state.dateOfBirth != "" &&
        state.siklls != [] &&
        state.language != [] &&
        state.panCardNumber != "" &&
        Currentaddress.state != "" &&
        Currentaddress.country != "" &&
        Currentaddress.city != "" &&
        Currentaddress.pincode != "" &&
        Currentaddress.address != "" &&
        state.BioData &&
        BioDataPdf &&
        state.specialities != [] &&
        uploadimagePanCard
      ) {
        formdata.append("fullName", name);
        formdata.append("images", profileImg);
        formdata.append("fatherName", state.fatherName);
        formdata.append("motherName", state.motherName);
        formdata.append("dateOfBirth", state.dateOfBirth);
        formdata.append("isSaameasCurrent", checkAddress);
        formdata.append("gender", JSON.stringify(state.gender.value));
        formdata.append("nationality", JSON.stringify(state.nationality.value));
        formdata.append("experienec", JSON.stringify(state.experience.value));
        formdata.append(
          "Currentaddress",
          JSON.stringify({
            state: Currentaddress.state,
            country: Currentaddress.country,
            city: Currentaddress.city,
            pincode: Currentaddress.pincode,
            address: Currentaddress.address,
          })
        );
        formdata.append(
          "Permanentaddress",
          JSON.stringify({
            state: PermanentAddress.state,
            country: PermanentAddress.country,
            city: PermanentAddress.city,
            pincode: PermanentAddress.pincode,
            address: PermanentAddress.address,
          })
        );
        formdata.append("bankName", state.bankName);
        formdata.append("nameonAccount", state.nameonAccount);
        formdata.append("enterAccountNumber", state.enterAccountNumber);
        formdata.append("reenterAccountNumber", state.reenterAccountNumber);
        formdata.append("ifscCode", state.ifscCode);
        formdata.append("swiftCode", state.swiftCode);
        formdata.append("accountType", state.accountType.value);
        formdata.append("linkedinUrl", state.linkedinUrl);

        const skilldata = state.siklls.map((item) => item.value);
        // console.log("skilldata", skilldata);
        formdata.append("siklls", JSON.stringify(skilldata));

        // formdata.append("siklls", JSON.stringify(state.siklls));
        const langdata = state.language.map((item) => item.value);
        // console.log("languageData", langdata);
        formdata.append("language", JSON.stringify(langdata));

        // formdata.append("language", JSON.stringify(state.language));
        formdata.append(
          "BioData",
          JSON.stringify(state.BioData.blocks[0].text)
        );
        formdata.append("BioDatapdf", BioDataPdf);
        const specialitiesData = state.specialities.map((item) => item.value);
        formdata.append("specialities", JSON.stringify(specialitiesData));

        formdata.append("aadharCardNumber", state.aadharCardNumber);
        if (dummyAadharImage.length > 0) {
          console.log(dummyAadharImage, "check addhar");
          formdata.append("aadharCardNumberpdf", dummyAadharImage);
        }

        formdata.append("panCardNumber", state.panCardNumber);
        formdata.append("panCardNumberpdf", uploadimagePanCard);

        formdata.append("socialSecurityNumbe", state.socialSecurityNumbe);
        // formdata.append("socialSecurityNumbepdf", dummySocialSecurityImage);
        if (dummySocialSecurityImage.length > 0) {
          console.log(dummySocialSecurityImage, "check addhar");
          formdata.append("socialSecurityNumbepdf", dummySocialSecurityImage);
        }
        formdata.append("gSTNumber", state.gSTNumber);
        // formdata.append("gSTNumberpdf", dummyGstCardImage);
        if (dummyGstCardImage.length > 0) {
          console.log(dummyGstCardImage, "check addhar");
          formdata.append("gSTNumberpdf", dummyGstCardImage);
        }

        try {
          const response = await createCoachProfile(formdata, token);
          if (response.status) {
            // console.log(response.data);
            toast(response.message);
            // change("Education");
            navigate("/coach-create-profile/education");
          } else {
            toast(response.message);
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        toast("Please fill all required fields!!");
      }
    } else {
      toast("Account Number does not match !!");
    }
  };
  // FUnction to submit form data--close
  const [profileImg, setProfileImg] = useState();
  const [profilePic, setProfilePic] = useState();

  const [allCountries, setAllCountries] = useState([]);
  const [allStates, setAllStates] = useState([]);
  const [allCities, setAllCities] = useState([]);

  const [allCountriesPer, setAllCountriesPer] = useState([]);
  const [allStatesPer, setAllStatesPer] = useState([]);
  const [allCitiesPer, setAllCitiesPer] = useState([]);

  // country, state, city api
  const allCountry = async () => {
    const { data, status, message } = await getAllCountriesAPI(
      Currentaddress.country
    );
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
    formdata.append("country", Currentaddress.state);
    try {
      const { data, status, message } = await getAllStatesAPI(
        Currentaddress.country
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
  }, [Currentaddress.country]);

  // city
  const allCity = async () => {
    try {
      const { data, status, message } = await getAllCitiesAPI(
        Currentaddress.country,
        Currentaddress.state
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
  }, [Currentaddress.state]);

  // console.log("All Countries", allCountries);
  // console.log("All State", allState);
  // console.log("All Cities", allCities);

  const allCountryPer = async () => {
    const { data, status, message } = await getAllCountriesAPI(
      PermanentAddress.country
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
    formdata.append("state", PermanentAddress.state);
    try {
      const { data, status, message } = await getAllStatesAPI(
        PermanentAddress.country
      );
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
  }, [PermanentAddress.country]);

  // city
  const allCityPer = async () => {
    try {
      const { data, status, message } = await getAllCitiesAPI(
        PermanentAddress.country,
        PermanentAddress.state
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
  }, [PermanentAddress.state]);

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const handleChange2 = (e) => {
    setCurrentAddress({
      ...Currentaddress,
      [e.target.name]: e.target.value,
    });
  };
  const handleChange3 = (e) => {
    setPermanentAddress({
      ...PermanentAddress,
      [e.target.name]: e.target.value,
    });
  };
  const handleProfilePic = (e) => {
    // console.log(e.target.files);
    setProfileImg(e.target.files[0]);
    setProfilePic(URL.createObjectURL(e.target.files[0]));
  };
  const [uploadBio, setUploadBio] = useState();
  const fileRef0 = React.useRef();

  const handleBio = (event) => {
    setUploadBio(event.target.files[0]);
  };
  const [skillsData, setSkillsData] = useState();
  const getAllSkillData = async () => {
    const { data, status, message } = await getAllSkills();
    if (status) {
      setSkillsData(data);
      // console.log("getAllSkillData", data);
    } else {
      toast(message);
    }
  };
  const skillValArr = skillsData?.map((item) => {
    return { value: item.skill, label: item.skill };
  });
  // console.log("skillValArr", skillValArr);
  useEffect(() => {
    getAllSkillData();
  }, []);
  const [specialitiesData, setSpecialitiesData] = useState();
  const getAllSpecialitiesData = async () => {
    const { data, status, message } = await getAllSpecialities();
    if (status) {
      setSpecialitiesData(data);
      // console.log("getAllSkillData", data);
    } else {
      toast(message);
    }
  };
  const specialitiesValArr = specialitiesData?.map((item) => {
    return { value: item.name, label: item.name };
  });
  // console.log("skillValArr", skillValArr);
  useEffect(() => {
    getAllSpecialitiesData();
  }, []);
  const [bankDetails, setBankDetails] = useState([]);
  const getBankNameByIFSCFunc = async () => {
    const { data, message, status } = await getBankNameByIFSC(state.ifscCode);
    if (status) {
      setBankDetails(data);
      setState({
        ...state,
        bankName: bankDetails.BANK,
      });
    } else {
      toast(message);
    }
  };
  // useEffect(() => {
  //   getBankNameByIFSCFunc();
  // }, [state.ifscCode]);
  return (
    <div className="container mx-auto md:px-5  md:py-20">
         <Link to="/coach/my-profile">
      <div className="flex gap-2 items-center pb-6 lg:px-0 px-5">
        {" "}
        <RiArrowLeftSLine className="text-secondary w-5 h-5 " />{" "}
        <p className="text-secondary font-s-medium text-base">
          {" "}
          Create Profile{" "}
        </p>{" "}
      </div>
      </Link>
      <div className=" md:w-[50%] grid grid-cols-3 rounded  justify-items-center items-center mx-4 border-buttonsome py-2 px-2">
        <div
          className={`px-5 py-2   text-center font-text font-s-regular md:text-base text-sm  w-fit ${
            products == "General"
              ? "font-bold  text-secondary border-secondary border-b-2 "
              : " text-black "
          }`}
        >
          General
        </div>

        <div
          className={`px-5 py-2 text-center  font-text font-s-regular  md:text-base text-sm  w-fit  ${
            products == "Education"
              ? "font-bold  text-secondary border-secondary border-b-2"
              : "  text-black  "
          }`}
        >
          Education
        </div>

        <div
          className={`px-5 py-2   text-center   font-text font-s-normal md:text-base text-sm  w-fit ${
            products == "Work Experience"
              ? "font-bold  text-secondary border-secondary border-b-2  "
              : " text-black "
          }`}
        >
          Experience
        </div>
      </div>

      {products == "General" ? (
        <div className="mt-5">
          <div className="bg-[#F5F7F9] md:rounded-[15px] p-6 flex flex-col justify-start w-full gap-6">
            <div className="bg-white rounded-[15px]">
              <p className="py-3 px-6 font-s-medium lg:text-lg text-base">
                Upload Profile Image
              </p>
              <div className="bg-black bg-opacity-60 h-[1px]"></div>
              <div className="flex flex-col justify-start items-start gap-2 px-6 pt-6 pb-3">
                <div className=" border-[1px] inline-flex flex-col border[#707070]  justify-center items-center gap-2 rounded-[6px] innershadow2">
                  {profilePic ? (
                    <>
                      {" "}
                      <input
                        type="file"
                        name="images"
                        id="img"
                        className="hidden"
                        onChange={handleProfilePic}
                      />
                      <label htmlFor="img">
                        <img
                          src={profilePic}
                          name="images"
                          onChange={handleProfilePic}
                          alt="/"
                          className="w-40 h-40 rounded-[6px]  border-[1px] border[#707070] cursor-pointer"
                        />
                      </label>
                    </>
                  ) : (
                    <div className="p-4 flex justify-center items-center flex-col gap-2 relative">
                      <img
                        src="/assets/images/profileImage.png"
                        name="images"
                        className="w-36"
                        alt="/"
                      />
                      <input
                        type="file"
                        name="images"
                        id="img"
                        className="hidden"
                        onChange={handleProfilePic}
                      />
                      <label
                        for="img"
                        className=" absolute bottom-2 text-white cursor-pointer bg-secondary font-s-medium text-sm flex justify-center items-center px-4 py-2 rounded-[6px] "
                      >
                        Upload Image<span className="text-red-500">*</span>
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
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 px-6 py-3 justify-items-center items-center">
                <div className="w-full">
                  <div className="flex justify-start flex-col gap-1 w-full">
                    <div className="font-semibold text-[15px]">
                      <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">
                        {" "}
                        Full Name <span className="text-red-500">*</span>
                      </span>
                    </div>
                    <input
                      type="text"
                      placeholder="Enter Your Name"
                      name="fullName"
                      // value={state.fullName}
                      value={name}
                      // onChange={handleChange}
                      className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex justify-start flex-col gap-1 w-full phoneparent">
                    <div className="font-semibold text-[15px]">
                      <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">
                        Phone Number <span className="text-red-500">*</span>
                      </span>
                    </div>
                    <PhoneInput
                      placeholder="Mobile Number"
                      name="phone"
                      value={phoneNumber}
                      defaultCountry="IN"
                      className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex justify-start flex-col gap-1 w-full">
                    <div className="font-semibold text-[15px]">
                      <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">
                        Email <span className="text-red-500">*</span>
                      </span>
                    </div>
                    <input
                      type="text"
                      placeholder="Enter Email"
                      value={email}
                      className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 px-6 py-3 justify-items-center items-center">
                <div className="w-full">
                  <div className="flex justify-start flex-col gap-1 w-full phoneparent">
                    <div className="font-semibold text-[15px]">
                      <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">
                        Gender <span className="text-red-500">*</span>
                      </span>
                    </div>
                    <Select
                      value={state.gender}
                      onChange={(e) => setState({ ...state, gender: e })}
                      options={optionsgender}
                    />
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex justify-start flex-col gap-1 w-full phoneparent">
                    <div className="font-semibold text-[15px]">
                      <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">
                        Nationality <span className="text-red-500">*</span>
                      </span>
                    </div>

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
                      <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">
                        Experience <span className="text-red-500">*</span>
                      </span>
                    </div>

                    <Select
                      value={state.experience}
                      onChange={(e) => setState({ ...state, experience: e })}
                      options={optionsexperience}
                    />
                  </div>
                </div>
              </div>

              <div className="px-6 py-3 grid grid-cols-1 md:grid-cols-3 gap-2  justify-items-center items-center">
                <div className="w-full">
                  <div className="flex justify-start flex-col gap-1 w-full">
                    <div className="font-semibold text-[15px]">
                      <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">
                        Father’s Name <span className="text-red-500">*</span>
                      </span>
                    </div>
                    <input
                      type="text"
                      placeholder="Father’s Name"
                      name="fatherName"
                      value={state.fatherName}
                      // onChange={handleChange}
                      onChange={(e) => {
                        if (
                          e.target.value.match("^[a-zA-Z ]*$") ||
                          e.target.value.length == 0
                        ) {
                          setState({
                            ...state,
                            fatherName: e.target.value,
                          });
                        } else {
                          toast("Please Type Alphabets only");
                        }
                      }}
                      className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex justify-start flex-col gap-1 w-full">
                    <div className="font-semibold text-[15px]">
                      <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">
                        Mother’s Name <span className="text-red-500">*</span>
                      </span>
                    </div>
                    <input
                      type="text"
                      placeholder="Mother’s Name"
                      name="motherName"
                      value={state.motherName}
                      onChange={(e) => {
                        if (
                          e.target.value.match("^[a-zA-Z ]*$") ||
                          e.target.value.length == 0
                        ) {
                          setState({
                            ...state,
                            motherName: e.target.value,
                          });
                        } else {
                          toast("Please Type Alphabets only");
                        }
                      }}
                      className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex justify-start flex-col gap-1 w-full">
                    <div className="font-semibold text-[15px]">
                      <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">
                        Date of Birth <span className="text-red-500">*</span>
                      </span>
                    </div>
                    <input
                      type="date"
                      placeholder="date"
                      name="dateOfBirth"
                      value={state.dateOfBirth}
                      onChange={handleChange}
                      className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-6 py-3 justify-items-center items-center">
                <div className="w-full">
                  <div className="flex  flex-col gap-1 w-full">
                    <div className="font-semibold text-[15px]">
                      <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">
                        Skills <span className="text-red-500">*</span>
                      </span>
                    </div>
                    <div className="bg-inputcolor py-3 mx-auto  w-full px-3 rounded-md">
                      <div className="flex space-x-3">
                        <Select
                          className="w-full"
                          name="siklls"
                          isMulti
                          options={skillValArr}
                          value={state.siklls}
                          onChange={(e) => setState({ ...state, siklls: e })}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex  flex-col gap-1 w-full">
                    <div className="font-semibold text-[15px] px-1">
                      <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">
                        Languages <span className="text-red-500">*</span>
                      </span>
                    </div>
                    <div className="bg-inputcolor py-3 mx-auto w-full px-3 rounded-md">
                      <div className="flex space-x-3">
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
              </div>

              <div className="px-6 grid grid-cols-1 md:grid-cols-2 gap-4 py-3 justify-items-center items-center">
                <div className="w-full">
                  <div className="flex justify-start flex-col gap-1 w-full">
                    <div className="font-semibold text-[15px]">
                      <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">
                        Aadhar Card
                      </span>
                    </div>
                    <input
                      type="text"
                      placeholder="Aadhar Card"
                      name="aadharCardNumber"
                      value={state.aadharCardNumber}
                      onChange={handleChange}
                      className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex justify-start flex-col gap-1 w-full">
                    <div className="font-semibold text-[15px]">
                      <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">
                        Pan Card <span className="text-red-500">*</span>
                      </span>
                    </div>
                    <input
                      type="text"
                      placeholder="Pan Card"
                      name="panCardNumber"
                      value={state.panCardNumber}
                      onChange={handleChange}
                      className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                    />
                  </div>
                </div>
              </div>
              <div className="px-6 grid grid-cols-1 md:grid-cols-2 gap-4 py-3 justify-items-center items-center">
                <div className="w-full">
                  <div className="font-semibold text-[15px]">
                    <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">
                      Aadhar Card Image
                    </span>
                  </div>
                  <div className="bg-inputcolor rounded-md">
                    <div className="flex items-center justify-center mx-auto py-6 ">
                      <input
                        className="hidden"
                        ref={fileRefAadharCard}
                        onChange={handleUploadAadharCard}
                        type="file"
                      />

                      <div className="flex flex-col  items-center justify-center py-3">
                        {" "}
                        <button
                          className="  "
                          onClick={(e) => fileRefAadharCard.current.click()}
                        >
                          {uploadimageAadharCard ? (
                            <img
                              alt="upload"
                              className="w-60"
                              src={URL.createObjectURL(uploadimageAadharCard)}
                            />
                          ) : (
                            <div className="bg-[#B3B7BC] p-3 rounded-full">
                              <BsCamera size={32} className="text-white" />
                            </div>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <div className="font-semibold text-[15px]">
                    <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">
                      Pan Card Image <span className="text-red-500">*</span>
                    </span>
                  </div>
                  <div className="bg-inputcolor rounded-md">
                    <div className="flex items-center justify-center mx-auto py-6 ">
                      <input
                        className="hidden"
                        ref={fileRefPanCard}
                        onChange={handleUploadPanCard}
                        type="file"
                      />

                      <div className="flex flex-col  items-center justify-center py-3">
                        {" "}
                        <button
                          className="  "
                          onClick={(e) => fileRefPanCard.current.click()}
                        >
                          {uploadimagePanCard ? (
                            <img
                              alt="upload"
                              className="w-60"
                              src={URL.createObjectURL(uploadimagePanCard)}
                            />
                          ) : (
                            <div className="bg-[#B3B7BC] p-3 rounded-full">
                              <BsCamera size={32} className="text-white" />
                            </div>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-6 grid grid-cols-1 md:grid-cols-2 gap-4 py-3 justify-items-center items-center">
                <div className="w-full">
                  <div className="flex justify-start flex-col gap-1 w-full">
                    <div className="font-semibold text-[14px]">
                      <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">
                        Social Security Number (If Worked/Studied in the US/Any
                        other Country)
                      </span>
                    </div>
                    <input
                      type="text"
                      placeholder="Social Security Number"
                      name="socialSecurityNumbe"
                      value={state.socialSecurityNumbe}
                      onChange={handleChange}
                      className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex justify-start flex-col gap-1 w-full">
                    <div className="font-semibold text-[15px]">
                      <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">
                        {" "}
                        GST Number (Optional)
                      </span>
                    </div>
                    <input
                      type="text"
                      placeholder="GST Number"
                      name="gSTNumber"
                      value={state.gSTNumber}
                      onChange={handleChange}
                      className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                    />
                  </div>
                </div>
              </div>

              <div className="px-6 grid grid-cols-1 md:grid-cols-2 gap-4 py-3 justify-items-center items-center">
                <div className="w-full">
                  <div className="font-semibold text-[15px]">
                    <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">
                      {" "}
                      Social Security Card Image
                    </span>
                  </div>
                  <div className="bg-gray-100 rounded-md">
                    <div className="flex items-center justify-center mx-auto py-6 ">
                      <input
                        className="hidden"
                        ref={fileRefSocialSecurity}
                        onChange={handleUploadSocialSecurity}
                        type="file"
                      />

                      <div className="flex flex-col  items-center justify-center py-3">
                        {" "}
                        <button
                          className="  "
                          onClick={(e) => fileRefSocialSecurity.current.click()}
                        >
                          {uploadimageSocialSecurity ? (
                            <img
                              alt="upload"
                              className="w-60"
                              src={URL.createObjectURL(
                                uploadimageSocialSecurity
                              )}
                            />
                          ) : (
                            <div className="bg-[#B3B7BC] p-3 rounded-full">
                              <BsCamera size={32} className="text-white" />
                            </div>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <div className="font-semibold text-[15px]">
                    <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">
                      GST Card Image
                    </span>
                  </div>
                  <div className="bg-inputcolor rounded-md">
                    <div className="flex items-center justify-center mx-auto py-6 ">
                      <input
                        className="hidden"
                        ref={fileRefGstCard}
                        onChange={handleUploadGstCard}
                        type="file"
                      />

                      <div className="flex flex-col  items-center justify-center py-3">
                        {" "}
                        <button
                          className="  "
                          onClick={(e) => fileRefGstCard.current.click()}
                        >
                          {uploadimageGstCard ? (
                            <img
                              alt="upload"
                              className="w-60"
                              src={URL.createObjectURL(uploadimageGstCard)}
                            />
                          ) : (
                            <div className="bg-[#B3B7BC] p-3 rounded-full">
                              <BsCamera size={32} className="text-white" />
                            </div>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-6  gap-2 py-3 justify-items-center items-center">
                <div className="w-full col-span-8 ">
                  <div className="flex justify-start flex-col gap-1 w-full">
                    <div className="font-semibold text-[15px]">
                      <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">
                        Current Address<span className="text-red-500">*</span>
                      </span>
                    </div>
                    <textarea
                      type="text"
                      placeholder="Enter your address"
                      name="address"
                      value={Currentaddress.address}
                      onChange={handleChange2}
                      className="w-full bg-inputcolor outline-none text-sm placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-6 py-3 justify-items-center items-center">
                <div className="w-full">
                  <div className="flex justify-start flex-col gap-1 w-full">
                    <div className="font-semibold text-[15px]">
                      <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">
                        Country<span className="text-red-500">*</span>
                      </span>
                    </div>
                    <Select
                      placeholder="Country"
                      getOptionLabel={(e) => e.name}
                      getOptionValue={(e) => e}
                      className="text-sm"
                      value={{ name: Currentaddress.country }}
                      onChange={(e) =>
                        setCurrentAddress({
                          ...Currentaddress,
                          country: e.name,
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
                        State<span className="text-red-500">*</span>
                      </span>
                    </div>
                    <Select
                      placeholder="State"
                      getOptionLabel={(e) => e.name}
                      className="text-sm"
                      getOptionValue={(e) => e}
                      value={{ name: Currentaddress.state }}
                      onChange={(e) =>
                        setCurrentAddress({
                          ...Currentaddress,
                          state: e.name,
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
                        City<span className="text-red-500">*</span>
                      </span>
                    </div>
                    <Select
                      placeholder="City"
                      className="text-sm"
                      getOptionLabel={(e) => e.name}
                      getOptionValue={(e) => e}
                      value={{ name: Currentaddress.city }}
                      onChange={(e) =>
                        setCurrentAddress({
                          ...Currentaddress,
                          city: e.name,
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
                        Pin Code/ Zip Code/ Postal Code
                        <span className="text-red-500">*</span>
                      </span>
                    </div>
                    <input
                      type="text"
                      placeholder="Pincode"
                      name="pincode"
                      value={Currentaddress.pincode}
                      onChange={(e) => {
                        if (
                          e.target.value.match("^[0-9]*$") ||
                          e.target.value.length == 0
                        ) {
                          setCurrentAddress({
                            ...Currentaddress,
                            pincode: e.target.value,
                          });
                        } else {
                          toast("Please Type Numbers only");
                        }
                      }}
                      // onChange={handleChange2}

                      className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full border-t-[1px] border-b-[1px] border-[#ddd] text-sm">
                <div className="p-5">
                  <input
                    type="checkbox"
                    id="addressCheck"
                    name="addressCheck"
                    value={checkAddress}
                    onChange={(e) => setCheckAddress(!checkAddress)}
                  />
                  <label for="addressCheck">
                    {" "}
                    Is Permanent Address Diffrent
                  </label>
                </div>

                {checkAddress ? (
                  <>
                    <div className="px-6  gap-2 py-3 justify-items-center items-center">
                      <div className="w-full col-span-8 ">
                        <div className="flex justify-start flex-col gap-1 w-full">
                          <div className="font-semibold text-[15px]">
                            <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">
                              Permanent Address
                            </span>
                            <span className="text-red-500">*</span>
                          </div>
                          <textarea
                            type="text"
                            placeholder="Enter your parmanent address"
                            name="permanentAddress"
                            value={PermanentAddress.address}
                            // onChange={(e) =>
                            //   setPermanentAddress({
                            //     ...PermanentAddress,
                            //     address: e.target.value,
                            //   })
                            // }
                            onChange={(e) => {
                              if (
                                e.target.value.match("^[a-zA-Z ]*$") ||
                                e.target.value.length == 0
                              ) {
                                setPermanentAddress({
                                  ...PermanentAddress,
                                  address: e.target.value,
                                });
                              } else {
                                toast("Please Type Alphabets only");
                              }
                            }}
                            className="w-full bg-inputcolor outline-none placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-6 py-3 justify-items-center items-center">
                      <div className="w-full">
                        <div className="flex justify-start flex-col gap-1 w-full">
                          <div className="font-semibold text-[15px]">
                            <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">
                              Country<span className="text-red-500">*</span>
                            </span>
                          </div>
                          <Select
                            placeholder="Country"
                            getOptionLabel={(e) => e.name}
                            getOptionValue={(e) => e}
                            value={{ name: PermanentAddress.country }}
                            onChange={(e) =>
                              setPermanentAddress({
                                ...PermanentAddress,
                                country: e.name,
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
                              State<span className="text-red-500">*</span>
                            </span>
                          </div>
                          <Select
                            placeholder="State"
                            getOptionLabel={(e) => e.name}
                            getOptionValue={(e) => e}
                            value={{ name: PermanentAddress.state }}
                            onChange={(e) =>
                              setPermanentAddress({
                                ...PermanentAddress,
                                state: e.name,
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
                              {" "}
                              City<span className="text-red-500">*</span>
                            </span>
                          </div>
                          <Select
                            placeholder="City"
                            getOptionLabel={(e) => e.name}
                            getOptionValue={(e) => e}
                            value={{ name: PermanentAddress.city }}
                            onChange={(e) =>
                              setPermanentAddress({
                                ...PermanentAddress,
                                city: e.name,
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
                              Pincode<span className="text-red-500">*</span>
                            </span>
                          </div>
                          <input
                            type="text"
                            placeholder="Pincode"
                            name="pincode"
                            value={PermanentAddress.pincode}
                            onChange={handleChange3}
                            className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                          />
                        </div>
                      </div>
                    </div>
                  </>
                ) : null}
              </div>
              <div className="px-6 py-3">
                <div className="w-full ">
                  <div className="flex justify-start flex-col gap-1 w-full">
                    <div className="font-semibold text-[15px]">
                      <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">
                        Bio<span className="text-red-500">*</span>
                      </span>
                    </div>
                    <div className="bg-inputcolor rounded-md px-2 py-3">
                      {" "}
                      <Editor
                        placeholder="Write Something Here..."
                        editorState={editorState}
                        toolbarClassName="toolbarClassName"
                        wrapperClassName="wrapperClassName"
                        editorClassName="editorClassName"
                        onEditorStateChange={setEditorState}
                        value={state.BioData}
                        onChange={(e) => setState({ ...state, BioData: e })}
                        className="w-full outline-none  resize-none overflow-hidden bg-inputcolor"
                        toolbar={{
                          options: ["inline", "textAlign"],
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex  px-4">
                <input
                  className="hidden"
                  ref={fileRef0}
                  onChange={handleBio}
                  type="file"
                />

                {/* new resume upload */}
                <div className="flex gap-2 items-center justify-start">
                  <div className="flex justify-center items-center">
                    <div className="mb-3 w-full fileInput">
                      <label
                        for="formFile"
                        // className="fileInputStylesLabel"
                        className=" fileInputStylesLabel flex gap-2 items-center form-label text-sm mb-2 border-2 text-secondary font-s-medium border-secondary py-3 px-4 rounded cursor-pointer"
                      >
                        <MdCloudUpload />
                        Upload Resume (doc, docx, pdf )
                        <span className="text-red-500">*</span>
                      </label>

                      <input
                        className="fileInputStyles"
                        type="file"
                        style={{ display: "none" }}
                        id="formFile"
                        name="files"
                        accept=".doc, .docx, .pdf"
                        value={state.files}
                        onChange={handleBioDataPdf}
                      />
                    </div>
                  </div>
                  <p className="text-secondary font-s-medium">
                    {BioDataPdf?.name}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[15px]">
              <p className="py-3 px-6 font-s-medium text-lg">
                <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">
                  Specialities<span className="text-red-500">*</span>
                </span>
              </p>
              <div className="bg-black bg-opacity-60 h-[1px]"></div>

              <div className="p-6">
                <Select
                  name="specialities"
                  isMulti
                  // options={optionsSpecialities}
                  options={specialitiesValArr}
                  value={state.specialities}
                  onChange={(e) => setState({ ...state, specialities: e })}
                />
              </div>
            </div>

            <div className="bg-white rounded-[15px] pb-6">
              <p className="py-3 px-6 font-s-medium text-lg">
                Bank Account Detail
              </p>
              <div className="bg-black bg-opacity-60 h-[1px]"></div>
              <div className="grid grid-cols-2 gap-4 py-3 px-6 ">
                <div className="w-full">
                  <div className="flex justify-start flex-col gap-1 w-full">
                    <div className="font-semibold text-[15px]">
                      <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">
                        Bank Name
                      </span>
                    </div>
                    <input
                      type="text"
                      placeholder="Enter Bank Name"
                      name="bankName"
                      value={state.bankName}
                      // onChange={handleChange}
                      onChange={(e) => {
                        if (
                          e.target.value.match("^[a-zA-Z ]*$") ||
                          e.target.value.length == 0
                        ) {
                          setState({
                            ...state,
                            bankName: e.target.value,
                          });
                        } else {
                          toast("Please Type Alphabets only");
                        }
                      }}
                      className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex justify-start flex-col gap-1 w-full">
                    <div className="font-semibold text-[15px]">
                      <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">
                        Name on Account
                      </span>
                    </div>
                    <input
                      type="text"
                      placeholder="Name on Account"
                      name="nameonAccount"
                      value={state.nameonAccount}
                      // onChange={handleChange}
                      onChange={(e) => {
                        if (
                          e.target.value.match("^[a-zA-Z ]*$") ||
                          e.target.value.length == 0
                        ) {
                          setState({
                            ...state,
                            nameonAccount: e.target.value,
                          });
                        } else {
                          toast("Please Type Alphabets only");
                        }
                      }}
                      className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 py-3 px-6 ">
                <div className="w-full">
                  <div className="flex justify-start flex-col gap-1 w-full">
                    <div className="font-semibold text-[15px]">
                      <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">
                        {" "}
                        Enter Account Number
                      </span>
                    </div>
                    <input
                      type="text"
                      placeholder="Enter Account Number"
                      name="enterAccountNumber"
                      value={state.enterAccountNumber}
                      onChange={(e) => {
                        if (
                          e.target.value.match("^[0-9]*$") ||
                          e.target.value.length == 0
                        ) {
                          setState({
                            ...state,
                            enterAccountNumber: e.target.value,
                          });
                        } else {
                          toast("Please Type Digits only");
                        }
                      }}
                      // onChange={handleChange}
                      className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex justify-start flex-col gap-1 w-full">
                    <div className="font-semibold text-[15px]">
                      <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">
                        Re-Enter Account Number
                      </span>
                    </div>
                    <input
                      type="text"
                      placeholder="Name on Account"
                      name="reenterAccountNumber"
                      value={state.reenterAccountNumber}
                      // onChange={handleChange}
                      onChange={(e) => {
                        if (
                          e.target.value.match("^[0-9]*$") ||
                          e.target.value.length == 0
                        ) {
                          setState({
                            ...state,
                            reenterAccountNumber: e.target.value,
                          });
                        } else {
                          toast("Please Type Digits only");
                        }
                      }}
                      className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 py-3 px-6 ">
                <div className="w-full">
                  <div className="flex justify-start flex-col gap-1 w-full">
                    <div className="font-semibold text-[15px]">
                      <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">
                        IFSC Code
                      </span>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="text"
                        placeholder="Enter IFSC Code"
                        name="ifscCode"
                        value={state.ifscCode}
                        onChange={(e) => {
                          setState({
                            ...state,
                            ifscCode: e.target.value,
                          });
                        }}
                        // onChange={handleChange}
                        // getBankNameByIFSCFunc
                        className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                      />
                      <button
                        className="bg-gray-300 text-gray-400 text-sm  h-10 rounded-r-md px-3"
                        onClick={(e) => getBankNameByIFSCFunc()}
                      >
                        Verify
                      </button>
                      {/* <AiOutlineSearch className="bg-gray-300 text-gray-400  h-10 w-10 px-2 rounded-r-md" /> */}
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex justify-start flex-col gap-1 w-full">
                    <div className="font-semibold text-[15px]">
                      <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">
                        SWIFT Code
                      </span>
                    </div>
                    <input
                      type="text"
                      placeholder="Enter SWIFT Code"
                      name="swiftCode"
                      value={state.swiftCode}
                      onChange={handleChange}
                      className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full px-6 py-3">
                <div className="flex justify-start flex-col gap-1 w-full">
                  <div className="font-semibold text-[15px]">
                    <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">
                      Account Type
                    </span>
                  </div>
                  <Select
                    value={state.accountType}
                    onChange={(e) => setState({ ...state, accountType: e })}
                    name="accountType"
                    options={accountTypes}
                  />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[15px]">
              <p className="py-3 px-6 font-s-medium text-lg">Social Network</p>
              <div className="bg-black bg-opacity-60 h-[1px]"></div>
              <div className=" p-6 flex flex-col gap-5 ">
                <div className="w-full">
                  <div className="flex justify-start flex-col gap-1 w-full">
                    <div className="font-semibold text-[15px]">
                      <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">
                        LinkedIn
                      </span>
                    </div>
                    <input
                      type="text"
                      placeholder="Enter Linkedin url"
                      name="linkedinUrl"
                      value={state.linkedinUrl}
                      onChange={handleChange}
                      className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                    />
                  </div>
                </div>

                <div className="">
                  <button
                    onClick={handleCreateProfile}
                    className="bg-secondary text-white font-s-medium px-10 py-2 rounded-[7px] text-sm"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default CoachProfileGeneral;
