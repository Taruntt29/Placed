import React, { useState, useRef } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { Editor } from "react-draft-wysiwyg";
import JoditEditor from "jodit-react";
import { Country, State, City } from "country-state-city";
import Select from "react-select";
import { AiOutlineSearch } from "react-icons/ai";
import { MdCloudUpload } from "react-icons/md";
import { BsCamera } from "react-icons/bs";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate, useParams, Link } from "react-router-dom";
import { RiArrowLeftSLine } from "react-icons/ri";
import {
  createCoachProfile,
  getAllCity,
  getAllCoachDataById,
  getAllCountries,
  getAllState,
  getAllSkills,
} from "../../../api/coachFunctions";
import { useEffect } from "react";
import {
  getAllCitiesAPI,
  getAllCountriesAPI,
  getAllStatesAPI,
} from "../../../api/authService";
import { BiChevronLeft } from "react-icons/bi";

const EditCoachProfile = () => {
  const editor = useRef(null);
  var params = useParams();

  // console.log("params idd", params);

  const [editorState, setEditorState] = useState();
  const [products, setProducts] = useState("General");
  const [checkAddress, setCheckAddress] = useState(false);
  // gst upload state
  let [uploadimageGstCard, setUploadImageGstCard] = useState();
  let [uploadimagePanCard, setUploadImagePanCard] = useState();

  // social security state
  let [uploadimageSocialSecurity, setUploadImageSocialSecurity] = useState();

  // aadhar card
  let [uploadimageAadharCard, setUploadImageAadharCard] = useState();

  console.log("uploadimageAadharCard", uploadimageAadharCard);

  // skill state
  // const [skill, setSkill] = useState("");

  const { userDetails } = useSelector((state) => state.flightReducer);

  const coachId = userDetails._id;
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
  ];

  const optionsnationality = [
    { value: "Indian", label: "Indian" },
    { value: "Chinese", label: "Chinese" },
    { value: "Japanese", label: "Japanese" },
    { value: "American", label: "American" },
  ];

  const accountTypes = [
    { value: "saving", label: "Saving" },
    { value: "Current", label: "Current" },
  ];

  const optionskills = [
    { value: "skill1", label: "skill11" },
    { value: "skill2", label: "skill2" },
    { value: "skill3", label: "skill3" },
    { value: "skill4", label: "skill4" },
    { value: "skill5", label: "skill5" },
    { value: "skill6", label: "skill6" },
  ];

  const optionslanguage = [
    { value: "language1", label: "language11" },
    { value: "language2", label: "language2" },
    { value: "language3", label: "language3" },
    { value: "language4", label: "language4" },
    { value: "language5", label: "language5" },
    { value: "language6", label: "language6" },
  ];

  const optionsSpecialities = [
    { value: "specialities1", label: "specialities1" },
    { value: "specialities2", label: "specialities2" },
    { value: "specialities3", label: "specialities3" },
    { value: "specialities4", label: "specialities4" },
    { value: "specialities5", label: "specialities5" },
    { value: "specialities6", label: "specialities6" },
  ];

  // gst upload
  const fileRefGstCard = useRef();
  const handleUploadGstCard = (event) => {
    setUploadImageGstCard(event.target.files[0]);
  };
  // pAN card
  const fileRefPanCard = useRef();
  const handleUploadPanCard = (event) => {
    setUploadImagePanCard(event.target.files[0]);
  };
  // social security upload
  const fileRefSocialSecurity = useRef();
  const handleUploadSocialSecurity = (event) => {
    setUploadImageSocialSecurity(event.target.files[0]);
  };

  // aadhar card
  const fileRefAadharCard = useRef();

  const handleUploadAadharCard = (event) => {
    setUploadImageAadharCard(event.target.files[0]);
  };
  // remove and add function

  const [Currentaddress, setCurrentAddress] = useState({
    state: "",
    country: "",
    city: "",
    pincode: "",
    address: "",
  });

  console.log("Currentaddressfrrfrfr", Currentaddress);

  const [PermanentAddress, setPermanentAddress] = useState({
    // state: {},
    // country: {},
    // city: {},
    state: "",
    country: "",
    city: "",
    pincode: "",
    address: "",
  });
  // states for form data
  const [state, setState] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    gender: "",
    nationality: "",
    experience: "",
    fatherName: "",
    motherName: "",
    specialities: [],
    dateOfBirth: "",
    bankName: "",
    nameonAccount: "",
    enterAccountNumber: "",
    reenterAccountNumber: "",
    ifscCode: "",
    swiftCode: "",
    accountType: "",
    linkedinUrl: "",
    BioData: "",
    files: [""],
    language: [],
    siklls: [],
    aadharCardNumber: "",
    panCardNumber: "",
    socialSecurityNumbe: "",
    gSTNumber: "",
  });

  // specialities
  // Function to get data
  const getCoachData = async () => {
    const { data, status, message } = await getAllCoachDataById(coachId);

    if (status) {
      console.log(data);
      // setState(data[0]);
      // setCurrentAddress(data[0].Currentaddress);
      // setPermanentAddress(data[0].PermanentAddress);
      // console.log("data", state);
      // setEditorState(data[0].BioData);
      // setCheckAddress(data[0]?.isSaameasCurrent);
      ////
      //   bankName: "",
      // nameonAccount: "",
      // enterAccountNumber: "",
      // reenterAccountNumber: "",
      // ifscCode: "",
      // swiftCode: "",
      // accountType: "",

      setState({
        fullName: data?.fullName,
        phoneNumber: data?.phoneNumber,
        email: data?.email,
        gender: data?.gender,
        nationality: data?.nationality,
        experienec: data?.experienec,
        fatherName: data?.fatherName,
        motherName: data?.motherName,
        BioData: data?.BioData,
        language: data?.language.map((item) => {
          return { value: item, label: item };
        }),
        siklls: data?.siklls.map((item) => {
          return { value: item, label: item };
        }),
        specialities: data?.specialities.map((item) => {
          return { value: item, label: item };
        }),
        dateOfBirth: data?.dateOfBirth,
        aadharCardNumber: data?.aadharCardNumber,
        panCardNumber: data?.panCardNumber,
        bankName: data?.bankName,
        nameonAccount: data?.nameonAccount,
        reenterAccountNumber: data?.reenterAccountNumber,
        enterAccountNumber: data?.enterAccountNumber,
        ifscCode: data?.ifscCode,
        swiftCode: data?.swiftCode,
        accountType: data?.accountType,
        linkedinUrl: data?.linkedinUrl,
        gSTNumber: data?.gSTNumber,
        socialSecurityNumbe: data?.socialSecurityNumbe,
        experience: data?.experienec,

        // experience
      });
      setUploadBio(data?.BioDatapdf[0]);
      setUploadImageAadharCard(data?.aadharCardNumberpdf[0]);
      setProfilePic(data?.images[0]);
      setUploadImagePanCard(data?.panCardNumberpdf[0]);
      setUploadImageGstCard(data?.gSTNumberpdf[0]);
      setUploadImageSocialSecurity(data?.socialSecurityNumbepdf[0]);
      setCheckAddress(data?.isSaameasCurrent);
      setCurrentAddress({
        address: data?.Currentaddress?.address,
        pincode: data?.Currentaddress?.pincode,
        state: data?.Currentaddress?.state,
        country: data?.Currentaddress?.country,
        city: data?.Currentaddress?.city,
      });
      // Permanentaddress
      setPermanentAddress({
        address: data?.Permanentaddress?.address,
        pincode: data?.Permanentaddress?.pincode,
        state: data?.Permanentaddress?.state,
        country: data?.Permanentaddress?.country,
        city: data?.Permanentaddress?.city,
      });
    } else {
      toast(message);
    }
  };

  console.log("langaugedata", state.language);

  useEffect(() => {
    getCoachData();
  }, []);

  // Function to submit form data--start
  const handleEditProfile = async () => {
    const formdata = new FormData();
    formdata.append("fullName", state.fullName);
    formdata.append("motherName", state.motherName);
    formdata.append("fatherName", state.fatherName);
    formdata.append("BioData", state.BioData);
    formdata.append("isSaameasCurrent", checkAddress);
    formdata.append("gender", state.gender);
    formdata.append("nationality", state.nationality);
    formdata.append("experienec", state.experience);
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
    formdata.append("accountType", state.accountType);
    formdata.append("linkedinUrl", state.linkedinUrl);

    // // console.log("Permanent Address", {
    // //   state: PermanentAddress.state.name,
    // //   country: PermanentAddress.country.name,
    // //   city: PermanentAddress.city.name,
    // //   pincode: PermanentAddress.pincode,
    // //   address: PermanentAddress.address,
    // // });
    // // console.log("Current Address", {
    // //   state: Currentaddress.state.name,
    // //   country: Currentaddress.country.name,
    // //   city: Currentaddress.city.name,
    // //   pincode: Currentaddress.pincode,
    // //   address: Currentaddress.address,
    // // });

    const skilldata = state.siklls.map((item) => item.value);
    // console.log("skilldata", skilldata);
    formdata.append("siklls", JSON.stringify(skilldata));

    // formdata.append("siklls", JSON.stringify(state.siklls));
    const langdata = state.language.map((item) => item.value);
    // console.log("languageData", langdata);
    formdata.append("language", JSON.stringify(langdata));
    formdata.append("dateOfBirth", state.dateOfBirth);
    // formdata.append("language", JSON.stringify(state.language));

    const specialitiesData = state.specialities.map((item) => item.value);
    formdata.append("specialities", JSON.stringify(specialitiesData));

    formdata.append("aadharCardNumber", state.aadharCardNumber);
    console.log("uploadimageAadharCard", uploadimageAadharCard);

    // formdata.append("images", profileImg);
    if (typeof profileImg?.size == "number") {
      formdata.append("images", profileImg);
    }
    if (typeof uploadimageAadharCard?.size == "number") {
      formdata.append("aadharCardNumberpdf", uploadimageAadharCard);
    }
    if (typeof uploadimageGstCard?.size == "number") {
      formdata.append("gSTNumberpdf", uploadimageGstCard);
    }
    if (typeof uploadimagePanCard?.size == "number") {
      formdata.append("panCardNumberpdf", uploadimagePanCard);
    }
    if (typeof uploadimageSocialSecurity?.size == "number") {
      formdata.append("socialSecurityNumbepdf", uploadimageSocialSecurity);
    }
    if (typeof uploadBio?.size == "number") {
      formdata.append("BioDatapdf", uploadBio);
    }

    // formdata.append("BioDatapdf", uploadBio);
    // formdata.append("gSTNumberpdf", uploadimageGstCard);
    // formdata.append("panCardNumberpdf", uploadimagePanCard);
    // formdata.append("socialSecurityNumbepdf", uploadimageSocialSecurity);

    formdata.append("panCardNumber", state.panCardNumber);

    formdata.append("socialSecurityNumbe", state.socialSecurityNumbe);

    formdata.append("gSTNumber", state.gSTNumber);
    // console.log("form data console", formdata);
    // console.log("state data console", state);
    // const response = await createCoachProfile();
    try {
      const response = await createCoachProfile(formdata);
      // const response = await createCoachProfile(formdata, token);
      if (response.status) {
        // console.log(response.data);
        toast(response.message);
        // change("Education");
        navigate("/coach/edit-coach-profile/education");
      } else {
        toast(response.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  // FUnction to submit form data--close
  const [profileImg, setProfileImg] = useState();
  const [profilePic, setProfilePic] = useState();
  let mycountry = Country.getAllCountries();

  // let mystate = State.getStatesOfCountry(Currentaddress.country?.isoCode);
  // let mycity = City.getCitiesOfState(
  //   Currentaddress.country?.isoCode,
  //   Currentaddress.state?.isoCode
  // );
  // let mycountryPer = Country.getAllCountries();
  // let mystatePer = State.getStatesOfCountry(PermanentAddress.country?.isoCode);
  // let mycityPer = City.getCitiesOfState(
  //   PermanentAddress.country?.isoCode,
  //   PermanentAddress.state?.isoCode
  // );

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
    console.log(e.target.files);
    setProfileImg(e.target.files[0]);
    setProfilePic(URL.createObjectURL(e.target.files[0]));
  };
  const [uploadBio, setUploadBio] = useState();
  const fileRef0 = React.useRef();

  const handleBio = (event) => {
    setUploadBio(event.target.files[0]);
  };

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

  return (
    <div className="bg-inputcolor lg:px-0 px-5">
    <div className="container mx-auto py-20  ">
      <div className="flex items-center mb-4 font-s-medium text-secondary text-lg">
        <Link to="/coach/my-profile">
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
                        src="/assets/images/inbox-img.png"
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
                        htmlFor="img"
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
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 px-6 py-3 justify-items-center items-center">
                <div className="w-full">
                  <div className="flex justify-start flex-col gap-1 w-full">
                    <div className="font-semibold text-[15px]"><span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">Full Name </span></div>
                    <input
                      type="text"
                      placeholder="Enter Your Name"
                      name="fullName"
                      value={state?.fullName}
                      // value={name}
                      // onChange={handleChange}
                      className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex justify-start flex-col gap-1 w-full phoneparent">
                    <div className="font-semibold text-[15px]">
                    <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">   Phone Number </span>
                    </div>
                    <PhoneInput
                      placeholder="Mobile Number"
                      name="phone"
                      value={state?.phoneNumber}
                      defaultCountry="IN"
                      className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex justify-start flex-col gap-1 w-full">
                    <div className="font-semibold text-[15px]"><span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">Email </span></div>
                    <input
                      type="text"
                      placeholder="Enter Email"
                      value={state?.email}
                      className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 px-6 py-3 justify-items-center items-center">
                <div className="w-full">
                  <div className="flex justify-start flex-col gap-1 w-full phoneparent">
                    <div className="font-semibold text-[15px]"><span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">Gender </span> </div>
                    <Select
                      value={{
                        value: state?.gender.replaceAll("'", ""),
                        label: state?.gender.replaceAll("'", ""),
                      }}
                      onChange={(e) => setState({ ...state, gender: e.value })}
                      options={optionsgender}
                    />
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex justify-start flex-col gap-1 w-full phoneparent">
                    <div className="font-semibold text-[15px]"><span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">Nationality </span></div>

                    <Select
                      value={{
                        value: state?.nationality,
                        label: state?.nationality,
                      }}
                      onChange={(e) =>
                        setState({ ...state, nationality: e.value })
                      }
                      options={optionsnationality}
                    />
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex justify-start flex-col gap-1 w-full phoneparent">
                    <div className="font-semibold text-[15px]"><span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">Experience</span></div>

                    <Select
                      value={{
                        value: state?.experienec,
                        label: state?.experienec,
                      }}
                      onChange={(e) =>
                        setState({ ...state, experience: e.value })
                      }
                      options={optionsexperience}
                    />
                  </div>
                </div>
              </div>

              <div className="px-6 py-3 grid grid-cols-1 md:grid-cols-3 gap-2  justify-items-center items-center">
                <div className="w-full">
                  <div className="flex justify-start flex-col gap-1 w-full">
                    <div className="font-semibold text-[15px]">
                    <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry."> Father’s Name </span>
                    </div>
                    <input
                      type="text"
                      placeholder="Father’s Name"
                      name="fatherName"
                      value={state?.fatherName}
                      onChange={handleChange}
                      className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex justify-start flex-col gap-1 w-full">
                    <div className="font-semibold text-[15px]">
                    <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">Mother’s Name </span>
                    </div>
                    <input
                      type="text"
                      placeholder="Mother’s Name"
                      name="motherName"
                      value={state?.motherName}
                      onChange={handleChange}
                      className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                    />
                  </div>
                </div>
                {console.log("state?.dateOfBirth", state?.dateOfBirth)}
                <div className="w-full">
                  <div className="flex justify-start flex-col gap-1 w-full">
                    <div className="font-semibold text-[15px]">
                    <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry."> Date of Birth</span>
                    </div>
                    <input
                      type="date"
                      placeholder="dateOfBirth"
                      name="dateOfBirth"
                      value={state?.dateOfBirth}
                      onChange={handleChange}
                      className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-6 py-3 justify-items-center items-center">
                <div className="w-full">
                  <div className="flex  flex-col gap-1 w-full">
                    <div className="font-semibold text-[15px]"><span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">Skills</span></div>
                    <div className="bg-inputcolor py-3 mx-auto  w-full px-3 rounded-md">
                      <div className="flex space-x-3">
                        <Select
                          className="w-full"
                          name="siklls"
                          isMulti
                          options={optionskills}
                          value={state?.siklls}
                          onChange={(e) => setState({ ...state, siklls: e })}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex  flex-col gap-1 w-full">
                    <div className="font-semibold text-[15px] px-1">
                    <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry."> Languages</span>
                    </div>
                    <div className="bg-inputcolor py-3 mx-auto w-full px-3 rounded-md">
                      <div className="flex space-x-3">
                        <Select
                          className="w-full"
                          name="language"
                          isMulti
                          options={optionslanguage}
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
                    <div className="font-semibold text-[15px]"><span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">Aadhar Card</span></div>
                    <input
                      type="text"
                      placeholder="Aadhar Card"
                      name="aadharCardNumber"
                      value={state?.aadharCardNumber}
                      onChange={handleChange}
                      className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex justify-start flex-col gap-1 w-full">
                    <div className="font-semibold text-[15px]"><span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">Pan Card</span></div>
                    <input
                      type="text"
                      placeholder="Pan Card"
                      name="panCardNumber"
                      value={state?.panCardNumber}
                      onChange={handleChange}
                      className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                    />
                  </div>
                </div>
              </div>
              <div className="px-6 grid grid-cols-1 md:grid-cols-2 gap-4 py-3 justify-items-center items-center">
                <div className="w-full">
                  <div className="bg-inputcolor rounded-md">
                    <div className="flex items-center justify-center mx-auto py-6 ">
                      <input
                        className="hidden"
                        ref={fileRefAadharCard}
                        onChange={handleUploadAadharCard}
                        type="file"
                      />

                      <div className="flex flex-col  items-center justify-center py-3">
                        {/* {console.log(
                          "uploadimageAadharCard number",
                          typeof uploadimageAadharCard.size
                        )} */}
                        <button
                          className="  "
                          onClick={(e) => fileRefAadharCard.current.click()}
                        >
                          {uploadimageAadharCard ? (
                            <img
                              alt="upload"
                              className="w-60"
                              src={
                                typeof uploadimageAadharCard?.size == "number"
                                  ? URL.createObjectURL(uploadimageAadharCard)
                                  : uploadimageAadharCard
                              }
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
                              src={
                                typeof uploadimagePanCard?.size == "number"
                                  ? URL.createObjectURL(uploadimagePanCard)
                                  : uploadimagePanCard
                              }
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
                    <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">Social Security Number (If Worked/Studied in the US/Any
                      other Country) </span>
                    </div>
                    <input
                      type="text"
                      placeholder="Social Security Number"
                      name="socialSecurityNumbe"
                      value={state?.socialSecurityNumbe}
                      onChange={handleChange}
                      className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex justify-start flex-col gap-1 w-full">
                    <div className="font-semibold text-[15px]"><span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">GST Number</span></div>
                    <input
                      type="text"
                      placeholder="GST Number"
                      name="gSTNumber"
                      value={state?.gSTNumber}
                      onChange={handleChange}
                      className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                    />
                  </div>
                </div>
              </div>

              <div className="px-6 grid grid-cols-1 md:grid-cols-2 gap-4 py-3 justify-items-center items-center">
                <div className="w-full">
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
                              src={
                                typeof uploadimageSocialSecurity?.size ==
                                "number"
                                  ? URL.createObjectURL(
                                      uploadimageSocialSecurity
                                    )
                                  : uploadimageSocialSecurity
                              }
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
                              src={
                                typeof uploadimageGstCard?.size == "number"
                                  ? URL.createObjectURL(uploadimageGstCard)
                                  : uploadimageGstCard
                              }
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
                    <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">Current Address</span>
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
                    <div className="font-semibold text-[15px]"><span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">Country</span></div>
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
                    <div className="font-semibold text-[15px]"><span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">State</span></div>
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
                    <div className="font-semibold text-[15px]"><span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">City</span></div>
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
                    <div className="font-semibold text-[15px]"><span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">Pincode</span></div>
                    <input
                      type="text"
                      placeholder="Pincode"
                      name="pincode"
                      value={Currentaddress.pincode}
                      onChange={handleChange2}
                      className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                    />
                  </div>
                </div>
              </div>
              {/* {console.log("issamasaddresskrti", checkAddress)} */}
              <div className="w-full border-t-[1px] border-b-[1px] border-[#ddd] text-sm">
                <div className="p-5">
                  <input
                    type="checkbox"
                    id="addressCheck"
                    name="addressCheck"
                    checked={checkAddress}
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
                          <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry."> Permanent Address </span>
                          </div>
                          <textarea
                            type="text"
                            placeholder="Enter your parmanent address"
                            name="permanentAddress"
                            value={PermanentAddress.address}
                            onChange={(e) =>
                              setPermanentAddress({
                                ...PermanentAddress,
                                address: e.target.value,
                              })
                            }
                            className="w-full bg-inputcolor outline-none placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-6 py-3 justify-items-center items-center">
                      <div className="w-full">
                        <div className="flex justify-start flex-col gap-1 w-full">
                          <div className="font-semibold text-[15px]">
                          <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry."> Country </span>
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
                          <div className="font-semibold text-[15px]"><span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">State</span></div>
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
                          <div className="font-semibold text-[15px]"><span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">City</span></div>
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
                          <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">Pincode</span>
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
                    <div className="font-semibold text-[15px]"><span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">Bio</span></div>
                    <div className="bg-inputcolor rounded-md px-2 py-3">
                      {" "}
                      <JoditEditor
                        ref={editor}
                        // value={content}
                        tabIndex={1} // tabIndex of textarea
                        // onBlur={(newContent) => setContent(newContent)}
                        // onChange={(newContent) => {}}
                        value={state?.BioData}
                        onChange={(e) => setState({ ...state, BioData: e })}
                      />
                      {/* <Editor
                        placeholder="Write Something Here..."
                        editorState={editorState}
                        toolbarClassName="toolbarClassName"
                        wrapperClassName="wrapperClassName"
                        editorClassName="editorClassName"
                        onEditorStateChange={state?.BioData}
                        // value={state?.BioData}
                        onChange={(e) => setState({ ...state, BioData: e })}
                        className="w-full outline-none  resize-none overflow-hidden bg-inputcolor"
                        toolbar={{
                          options: ["inline", "textAlign"],
                        }}
                      /> */}
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

                <div className="flex space-x-1  ">
                  {" "}
                  <button
                    className="  "
                    onClick={(e) => fileRef0.current.click()}
                  >
                    {/* {uploadBio ? (
                      <img
                        value={state?.files}
                        onChange={handleChange}
                        alt="upload"
                        // src={URL.createObjectURL(uploadBio)}
                        src={
                          typeof uploadBio?.size == "number"
                            ? URL.createObjectURL(uploadBio)
                            : uploadBio
                        }
                        className="w-[70%] h-[80%]"
                      />
                    ) : ( */}
                    <div className="flex space-x-3 items-center border border-secondary px-2 py-1 md:mb-5 text-secondary font-s-medium rounded-full">
                      <MdCloudUpload />
                      <h6 className=" text-sm py-2">Upload Resume</h6>
                    </div>
                    {/* )} */}
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[15px]">
              <p className="py-3 px-6 font-s-medium text-lg"><span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">Specialities</span></p>
              <div className="bg-black bg-opacity-60 h-[1px]"></div>

              <div className="p-6">
                <Select
                  name="specialities"
                  // defaultValue={state?.specialities}
                  isMulti
                  options={optionsSpecialities}
                  value={state?.specialities}
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
                    <div className="font-semibold text-[15px]"><span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">Bank Name</span></div>
                    <input
                      type="text"
                      placeholder="Enter Bank Name"
                      name="bankName"
                      value={state?.bankName}
                      onChange={handleChange}
                      className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex justify-start flex-col gap-1 w-full">
                    <div className="font-semibold text-[15px]">
                    <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry."> Name on Account</span>
                    </div>
                    <input
                      type="text"
                      placeholder="Name on Account"
                      name="nameonAccount"
                      value={state?.nameonAccount}
                      onChange={handleChange}
                      className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 py-3 px-6 ">
                <div className="w-full">
                  <div className="flex justify-start flex-col gap-1 w-full">
                    <div className="font-semibold text-[15px]">
                    <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry."> Enter Account Number</span>
                    </div>
                    <input
                      type="text"
                      placeholder="Enter Account Number"
                      name="enterAccountNumber"
                      value={state?.enterAccountNumber}
                      onChange={handleChange}
                      className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex justify-start flex-col gap-1 w-full">
                    <div className="font-semibold text-[15px]">
                    <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry."> Re-Enter Account Number</span>
                    </div>
                    <input
                      type="text"
                      placeholder="Name on Account"
                      name="reenterAccountNumber"
                      value={state?.reenterAccountNumber}
                      onChange={handleChange}
                      className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 py-3 px-6 ">
                <div className="w-full">
                  <div className="flex justify-start flex-col gap-1 w-full">
                    <div className="font-semibold text-[15px]"><span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">IFSC Code</span></div>
                    <div className="flex items-center">
                      <input
                        type="text"
                        placeholder="Enter IFSC Code"
                        name="ifscCode"
                        value={state?.ifscCode}
                        onChange={handleChange}
                        className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                      />

                      <AiOutlineSearch className="bg-gray-300 text-gray-400  h-10 w-10 px-2 rounded-r-md" />
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex justify-start flex-col gap-1 w-full">
                    <div className="font-semibold text-[15px]"><span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">SWIFT Code</span></div>
                    <input
                      type="text"
                      placeholder="Enter SWIFT Code"
                      name="swiftCode"
                      value={state?.swiftCode}
                      onChange={handleChange}
                      className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full px-6 py-3">
                <div className="flex justify-start flex-col gap-1 w-full">
                  <div className="font-semibold text-[15px]"><span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">Account Type</span></div>
                  <Select
                    value={{
                      value: state?.accountType,
                      label: state?.accountType,
                    }}
                    onChange={(e) =>
                      setState({ ...state, accountType: e.value })
                    }
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
                    <div className="font-semibold text-[15px]"><span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">LinkedIn</span></div>
                    <input
                      type="text"
                      placeholder="Enter Linkedin url"
                      name="linkedinUrl"
                      value={state?.linkedinUrl}
                      onChange={handleChange}
                      className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                    />
                  </div>
                </div>

                <div className="">
                  <button
                    onClick={handleEditProfile}
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
    </div>
  );
};

export default EditCoachProfile;
