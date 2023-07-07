import React, { useEffect, useRef, useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { Editor } from "react-draft-wysiwyg";
import { Link, useNavigate } from "react-router-dom";
import Select from "react-select";
import { MdCloudUpload } from "react-icons/md";
// import { AiOutlinePlus } from "react-icons/ai";
import YearPicker from "react-year-picker";
import { BsCalendar3 } from "react-icons/bs";
import { useSelector } from "react-redux";
import {
  employerCreateProfileAPI,
  getAllCitiesAPI,
  getAllCountriesAPI,
  getAllIndustryAPI,
  getAllStatesAPI,
} from "../../../api/authService";
import { toast } from "react-toastify";
import { RxCross2 } from "react-icons/rx";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const CreateProfile = () => {
  const [editorState, setEditorState] = useState();

  const navigate = useNavigate();
  const { userDetails } = useSelector((state) => state.flightReducer);
  // console.log(userDetails);
  const companyName = userDetails.companyName;
  const token = userDetails.token;
  const email = userDetails.email;
  const phoneNumber = userDetails.phoneNumber;

  const teamsizelist = [
    { value: "0-10", label: "0-10" },
    { value: "11-50", label: "11-50" },
    { value: "50-100", label: "50-100" },
    { value: "100+", label: "100+" },
    { value: "500+", label: "500+" },
    { value: "1000+", label: "1000+" },
  ];

  // const establishedlist = [
  //   { value: "Established1", label: "Established1" },
  //   { value: "Semi Government", label: "Semi Government" },
  //   { value: "Public", label: "Public" },
  //   { value: "Sole Proprietorship", label: "Sole Proprietorship" },
  //   { value: "NGO", label: "NGO" },
  //   { value: "MNC", label: "MNC" },
  //   { value: "LLP", label: "LLP" },
  //   { value: "Startup", label: "Startup" },
  //   { value: "Unicorn", label: "Unicorn" },
  // ];

  const ownershiptypelist = [
    { value: "Government", label: "Government" },
    { value: "Semi Government", label: "Semi Government" },
    { value: "Public", label: "Public" },
    { value: "Sole Proprietorship", label: "Sole Proprietorship" },
    { value: "NGO", label: "NGO" },
    { value: "MNC", label: "MNC" },
    { value: "LLP", label: "LLP" },
    { value: "Startup", label: "Startup" },
    { value: "Unicorn", label: "Unicorn" },
  ];

  const [state, setState] = useState({
    companyName: "",
    phoneNumber: "",
    email: "",
    website: "",
    establishedin: "",
    teamsize: "",
    industryId: "",
    ownershiptype: "",
    country: "",
    state: "",
    city: "",
    pincode: "",
    address: "",
    description: "",
    linkedin: "",
    twitter: "",
    instagram: "",
    facebook: "",
    whatsapp: "",
    youtube: "",
    gstNumber: "",
    panNumber: "",
  });

  const [uploadimagegst, setUploadImageGst] = useState();
  const fileRef0 = useRef();

  const [uploadimagepan, setUploadImagePan] = useState();
  const fileRef5 = useRef();

  const [workplaceImages, setWorkplaceImages] = useState([]);
  const fileRef2 = useRef();

  const handleUpload = (event) => {
    setWorkplaceImages(event.target.files[0]);
  };

  const handleGSTUpload = (event) => {
    setUploadImageGst(event.target.files[0]);
  };

  const handlePanUpload = (event) => {
    setUploadImagePan(event.target.files[0]);
  };

  const [profilePic, setProfilePic] = useState();
  const handleProfilePic = (e) => {
    console.log(e.target.files);
    setProfilePic(e.target.files[0]);
  };
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const updateProfile = async () => {
    if (
      profilePic &&
      companyName &&
      phoneNumber &&
      email &&
      state.website &&
      state.country &&
      state.state &&
      state.city &&
      state.establishedin &&
      state.pincode &&
      state.gstNumber &&
      state.panNumber &&
      uploadimagepan &&
      uploadimagegst &&
      state.address &&
      state.description
    ) {
      if (
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) &&
        !/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/.test(
          state.website
        ) &&
        !/^[0-9]*$/.test(state.pincode) &&
        !/^[a-zA-Z0-9]{1,15}$/.test(state.gstNumber) &&
        !/^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/.test(state.panNumber) &&
        !/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/.test(
          state.linkedin
        ) &&
        !/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/.test(
          state.twitter
        ) &&
        !/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/.test(
          state.instagram &&
            !/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/.test(
              state.facebook
            ) &&
            !/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/.test(
              state.youtube
            ) &&
            !/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/.test(state.whatsapp)
        )
      ) {
        toast("Please Enter Valid  fields");
      } else {
        const formdata = new FormData();
        formdata.append("companyName", companyName);
        formdata.append("phoneNumber", phoneNumber);
        formdata.append("email", email);
        formdata.append("website", state.website);
        formdata.append("establishedIn", state.establishedin);
        formdata.append("teamSize", state.teamsize?.value);
        formdata.append("industryId", state.industryId);
        formdata.append("ownershipType", state.ownershiptype?.value);
        formdata.append("country", state.country?.name);
        formdata.append("state", state.state?.name);
        formdata.append("city", state.city?.name);
        formdata.append("pincode", state.pincode);
        formdata.append("address", state.address);
        formdata.append(
          "description",
          JSON.stringify(state.description.blocks[0].text)
        );
        formdata.append("linkedIn", state.linkedin);
        formdata.append("twitter", state.twitter);
        formdata.append("instagram", state.instagram);
        formdata.append("facebook", state.facebook);
        formdata.append("whatsapp", state.whatsapp);
        formdata.append("youtube", state.youtube);
        workplaceImages.map((item) => formdata.append("otherImages", item));

        formdata.append("gstNumber", state.gstNumber);
        formdata.append("panNumber", state.panNumber);
        formdata.append("image", profilePic);
        formdata.append("gstNumberpdf", uploadimagegst);
        formdata.append("panNumberpdf", uploadimagepan);

        try {
          const response = await employerCreateProfileAPI(formdata, token);

          console.log("respnse from api", response);
          console.log(response);
          if (response.code == 200) {
            console.log(response.data);
            toast(response.message);
            navigate("/employer/my-profile");
          } else {
            toast(response.message);
          }
        } catch (error) {
          console.log(error);
        }
      }
    } else {
      toast("Please fill required fields!");
    }
  };

  // industry API
  const [industryData, setIndustryData] = useState([]);

  const getIndustryField = async () => {
    const { data, status, message } = await getAllIndustryAPI();
    if (status) {
      // toast(message);
      setIndustryData(data);
    } else {
      toast(message);
    }
  };

  useEffect(() => {
    getIndustryField();
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
    <div className="container mx-auto md:px-5  md:py-20 form">
      <div className="bg-[#F5F7F9] md:rounded-[15px] p-6 flex flex-col justify-start w-full gap-6">
        <div className="bg-white rounded-[15px]">
          <p className="py-3 px-6 font-s-medium lg:text-lg text-base">
            Upload Logo Image
          </p>
          <div className="bg-slate-300 bg-opacity-60 h-[1px]"></div>
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
                      alt="ProfilePic"
                      src={URL.createObjectURL(profilePic)}
                      onChange={handleProfilePic}
                      className="w-40 h-40 rounded-[6px] innershadow2 border-[1px] border[#707070] cursor-pointer"
                    />
                  </label>
                </>
              ) : (
                <div className="p-6 flex justify-center items-center flex-col gap-2">
                  <img
                    alt="UploadImage"
                    src="/assets/images/uploadimage.png"
                    className="w-16"
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
                    className="text-white cursor-pointer bg-secondary font-s-medium text-sm flex justify-center items-center px-4 py-2 rounded-[6px] "
                  >
                    Upload Image <span className="text-red-500">*</span>
                  </label>
                </div>
              )}
            </div>
            <p className="font-s-medium text-sm">
              Company Logo:-
              <span className="text-sm font-s-normal ">
                Max file size is 1MB, Minimum dimension: 136 x 136 And Suitable
                files are .jpg & .png
              </span>
            </p>
          </div>
        </div>

        <div className="bg-white rounded-[15px]">
          <p className="py-3 px-6 font-s-medium text-lg">Basic Informations</p>
          <div className="bg-slate-300 bg-opacity-60 h-[1px]"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 px-6 py-2 justify-items-center items-center">
            <div className="w-full">
              <div className="flex justify-start flex-col space-y-1 w-full">
                <div className="font-semibold text-[15px]">
                  Company Name <span className="text-red-500">*</span>
                </div>
                <input
                  type="text"
                  placeholder="Enter Company Name"
                  name="companyName"
                  value={companyName}
                  // onChange={handleChange}
                  className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                />
              </div>
            </div>
            <div className="w-full">
              <div className="flex justify-start flex-col space-y-1 w-full phoneparent">
                <div className="font-semibold text-[15px]">
                  Phone Number <span className="text-red-500">*</span>
                </div>
                <PhoneInput
                  placeholder="Mobile Number"
                  name="phone"
                  value={phoneNumber}
                  onChange={(e) => setState({ ...state, phoneNumber: e })}
                  className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                />
                {/* {state.phone} */}
              </div>
            </div>
            <div className="w-full">
              <div className="flex justify-start flex-col space-y-1 w-full">
                <div className="font-semibold text-[15px]">
                  Email <span className="text-red-500">*</span>
                </div>
                <input
                  type="email"
                  name="email"
                  value={email}
                  // onChange={handleChange}
                  placeholder="Enter Email"
                  className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                />
                {email.length > 0 &&
                !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? (
                  <span className="text-red-500">Invalid Email Address</span>
                ) : null}
              </div>
            </div>
          </div>
          {/* website */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 px-6 py-2 justify-items-center items-center">
            <div className="w-full">
              <div className="flex justify-start flex-col space-y-1 w-full ">
                <div className="font-semibold text-[15px] ">
                  Website <span className="text-red-500">*</span>
                </div>
                <input
                  type="url"
                  name="website"
                  value={state.website}
                  onChange={handleChange}
                  placeholder="Enter Website Url"
                  className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                />
              </div>
              {state.website.length > 0 &&
              !/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/.test(
                state.website
              ) ? (
                <p className="text-xs text-red-500 ">Please Enter valid url</p>
              ) : null}
            </div>
            <div className="w-full">
              <div className="flex justify-start flex-col space-y-1 w-full">
                <div className="font-semibold text-[15px]">
                  Established In <span className="text-red-500">*</span>
                </div>
                {/* <Select
                  //styles={{background:"grey"}}
                  value={state.establishedin}
                  onChange={(e) => setState({ ...state, establishedin: e })}
                  options={establishedlist}
                /> */}

                {/* <YearPicker
                  name="establishedin"
                  className="bg-gray-50 border  z-10 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={state.establishedin}
                  onChange={(e) => setState({ ...state, establishedin: e })}
                  // onChange={(e) => handleAdditionalDegreePassingYear(index, e)}
                /> */}
                <div className="relative">
                  <DatePicker
                    id="DatePicker"
                    type="string"
                    className="bg-gray-50 border  z-0 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    selected={state.establishedin}
                    value={state.establishedin}
                    onChange={(e) => setState({ ...state, establishedin: e })}
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
              <div className="flex justify-start flex-col space-y-1 w-full">
                <div className="text-[#000] text-[15px] font-semibold">
                  Team Size
                </div>
                <Select
                  value={state.teamsize}
                  onChange={(e) => setState({ ...state, teamsize: e })}
                  options={teamsizelist}
                />
              </div>
            </div>
          </div>

          {/* industry */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 px-6 py-2 justify-items-center items-center">
            <div className="w-full">
              <div className="flex justify-start flex-col space-y-1 w-full">
                <div className="text-[#000] text-[15px] font-semibold">
                  Industry
                </div>
                <Select
                  name="industry"
                  getOptionLabel={(option) => option.name}
                  getOptionValue={(option) => option._id}
                  value={
                    industryData.filter((i) => i._id === state.industryId)?.[0]
                  }
                  onChange={(e) => setState({ ...state, industryId: e._id })}
                  options={industryData}
                />
              </div>
            </div>
            <div className="w-full">
              <div className="flex justify-start flex-col space-y-1 w-full">
                <div className="text-[#000] text-[15px] font-semibold">
                  Ownership Type
                </div>
                <Select
                  value={state.ownershiptype}
                  className=""
                  onChange={(e) => setState({ ...state, ownershiptype: e })}
                  options={ownershiptypelist}
                />
              </div>
            </div>
            <div className="w-full">
              <div className="flex justify-start flex-col space-y-1 w-full">
                <div className="font-semibold text-[15px]">
                  Country <span className="text-red-500">*</span>
                </div>

                {/* <Select
                  getOptionLabel={(e) => e.name}
                  // getOptionValue={(e) => e}
                  value={state.country}
                  onChange={(e) =>
                    setState({
                      ...state,
                      country: e,
                    })
                  }
                  options={allCountries}
                /> */}
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
          </div>

          {/* state */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 px-6 py-2 justify-items-center items-center">
            <div className="w-full  ">
              <div className="flex justify-start flex-col space-y-1 w-full">
                <div className="font-semibold text-[15px]">
                  State <span className="text-red-500">*</span>
                </div>
                {/* <Select
                  getOptionLabel={(e) => e.name}
                  getOptionValue={(e) => e}
                  value={state.state}
                  onChange={(e) =>
                    setState({
                      ...state,
                      state: e,
                    })
                  }
                  options={allStates}
                /> */}

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
            <div className="w-full ">
              <div className="flex justify-start flex-col space-y-1 w-full">
                <div className="font-semibold text-[15px]">
                  City <span className="text-red-500">*</span>
                </div>

                {/* <Select
                  getOptionLabel={(e) => e.name}
                  // getOptionValue={(e) => e}
                  value={state.city}
                  onChange={(e) =>
                    setState({
                      ...state,
                      city: e,
                    })
                  }
                  options={allCities}
                /> */}

                <Select
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
                  options={allCities}
                />
              </div>
            </div>
            <div className="w-full ">
              <div className="flex justify-start flex-col space-y-1 w-full">
                <div className="font-semibold text-[15px]">
                  Pincode <span className="text-red-500">*</span>
                </div>
                <input
                  type="text"
                  name="pincode"
                  value={state.pincode}
                  // onChange={handleChange}
                  onChange={(e) => {
                    if (
                      e.target.value.match("^[0-9]*$") ||
                      e.target.value.length == 0
                    ) {
                      setState({
                        ...state,
                        pincode: e.target.value,
                      });
                    } else {
                      toast("Please Type Digits only !");
                    }
                  }}
                  placeholder="Pincode"
                  maxLength={6}
                  className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                />
              </div>
            </div>
          </div>

          {/* address */}
          <div className="py-2 px-6 justify-items-center items-center">
            <div className="w-full col-span-1 md:col-span-2 lg:col-span-3">
              <div className="flex justify-start flex-col space-y-1 w-full">
                <div className="font-semibold text-[15px]">
                  Address <span className="text-red-500">*</span>
                </div>
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
          {/* description */}
          <div className=" px-6 pt-2 pb-5">
            <div className="w-full col-span-1 md:col-span-2 lg:col-span-3">
              <div className="flex justify-start flex-col space-y-1 w-full">
                <div className="font-semibold text-[15px]">
                  Description <span className="text-red-500">*</span>
                </div>
                <div className="bg-inputcolor rounded-md px-2 py-2">
                  {" "}
                  <Editor
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
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white  rounded-2xl">
          <p className="py-3 px-6 font-s-medium text-lg">Document</p>
          <div className="bg-inputcolor bg-opacity-60 h-[1px]"></div>
          <div className="grid grid-cols-1 md:grid-cols-2  gap-2 px-6 pt-4 justify-items-center items-center">
            <div className="w-full ">
              <div className="flex justify-start flex-col space-y-1 w-full">
                <div className="font-semibold text-[15px]">
                  GST Number <span className="text-red-500">*</span>
                </div>
                <input
                  type="text"
                  name="gstNumber"
                  value={state.gstNumber}
                  onChange={(e) => {
                    if (
                      e.target.value.match("^[a-zA-Z0-9]{1,15}$") ||
                      e.target.value.length == 0
                    ) {
                      setState({
                        ...state,
                        gstNumber: e.target.value,
                      });
                    } else {
                      toast("Please type valid GST Number !");
                    }
                  }}
                  // onChange={handleChange}
                  placeholder="GST Number"
                  className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                />
              </div>
            </div>
            <div className="w-full ">
              <div className="flex justify-start flex-col space-y-1 w-full">
                <div className="font-semibold text-[15px]">
                  PAN Number <span className="text-red-500">*</span>
                </div>
                <input
                  type="text"
                  placeholder="Pan Number"
                  name="panNumber"
                  value={state.panNumber}
                  onChange={handleChange}
                  // onChange={(e) => {
                  //   if (
                  //     e.target.value.match(
                  //       "^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$"
                  //     ) ||
                  //     e.target.value.length == 0
                  //   ) {
                  //     setState({
                  //       ...state,
                  //       panNumber: e.target.value,
                  //     });
                  //   } else {
                  //     toast("Please type valid PAN Number !");
                  //   }
                  // }}
                  className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                />
              </div>
              {state.panNumber.length > 0 &&
              !/^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/.test(
                state.panNumber
              ) ? (
                <p className="text-red-500 text-xs">
                  Please enter valid PAN Card Number!
                </p>
              ) : null}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2  gap-2 px-6 pb-8 justify-items-center items-center">
            <div className="w-full ">
              <div className="bg-inputcolor shadow-xl  px-2 mt-5 rounded-md">
                <div className="flex  items-center justify-center">
                  <input
                    className="hidden"
                    ref={fileRef0}
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
                        <img
                          alt="upload"
                          src={URL.createObjectURL(uploadimagegst)}
                          className="w-full h-56"
                        />
                      ) : (
                        <div className="flex items-center">
                          <MdCloudUpload size={16} />
                          <h6 className=" text-sm py-3 pl-1">
                            {" "}
                            Upload Document
                          </h6>
                        </div>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full ">
              <div className="bg-inputcolor shadow-xl px-2 mt-5 rounded-md">
                <div className="flex  items-center justify-center">
                  <input
                    ref={fileRef5}
                    onChange={handlePanUpload}
                    type="file"
                    className="w-full  hidden"
                  />

                  <div className="flex space-x-1  ">
                    {" "}
                    <button
                      className="  "
                      onClick={(e) => fileRef5.current.click()}
                    >
                      {uploadimagepan ? (
                        <img
                          alt="upload"
                          src={URL.createObjectURL(uploadimagepan)}
                          className="w-full h-56"
                        />
                      ) : (
                        <div className="flex items-center">
                          <MdCloudUpload size={16} />
                          <h6 className=" text-sm py-3 pl-1">
                            {" "}
                            Upload Document
                          </h6>
                        </div>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white  rounded-2xl">
          <p className="py-3 px-6 font-s-medium text-lg">Social Network </p>
          <div className="bg-slate-300 bg-opacity-60 h-[1px]"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-6 justify-items-center items-center">
            <div className="w-full">
              <div className="flex justify-start flex-col space-y-1 w-full">
                <div className="font-semibold text-[15px]">LinkedIn</div>
                <input
                  type="url"
                  placeholder="Enter Linkedin url"
                  name="linkedin"
                  value={state.linkedin}
                  onChange={handleChange}
                  className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                />
              </div>
              {state.linkedin.length > 0 &&
              !/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/.test(
                state.linkedin
              ) ? (
                <p className="text-xs text-red-500 ">Please Enter valid url</p>
              ) : null}
            </div>
            <div className="w-full">
              <div className="flex justify-start flex-col space-y-1 w-full">
                <div className="font-semibold text-[15px]">Twitter</div>
                <input
                  type="url"
                  placeholder="Enter Twitter url"
                  name="twitter"
                  value={state.twitter}
                  onChange={handleChange}
                  className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                />
              </div>
              {state.twitter.length > 0 &&
              !/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/.test(
                state.twitter
              ) ? (
                <p className="text-xs text-red-500 ">Please Enter valid url</p>
              ) : null}
            </div>
            <div className="w-full">
              <div className="flex justify-start flex-col space-y-1 w-full">
                <div className="font-semibold text-[15px]">Instagram</div>
                <input
                  type="url"
                  placeholder="Enter Instagram url"
                  name="instagram"
                  value={state.instagram}
                  onChange={handleChange}
                  className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                />
              </div>
              {state.instagram.length > 0 &&
              !/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/.test(
                state.instagram
              ) ? (
                <p className="text-xs text-red-500 ">Please Enter valid url</p>
              ) : null}
            </div>
            <div className="w-full">
              <div className="flex justify-start flex-col space-y-1 w-full">
                <div className="font-semibold text-[15px]">Facebook</div>
                <input
                  type="url"
                  name="facebook"
                  value={state.facebook}
                  onChange={handleChange}
                  placeholder="Enter Facebook url"
                  className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                />
              </div>
              {state.facebook.length > 0 &&
              !/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/.test(
                state.facebook
              ) ? (
                <p className="text-xs text-red-500 ">Please Enter valid url</p>
              ) : null}
            </div>
            <div className="w-full">
              <div className="flex justify-start flex-col space-y-1 w-full">
                <div className="font-semibold text-[15px]">Whatsapp Number</div>
                <input
                  type="url"
                  name="whatsapp"
                  value={state.whatsapp}
                  onChange={handleChange}
                  placeholder="Enter Whatsapp Number"
                  className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                />
              </div>
              {state.whatsapp.length > 0 &&
              !/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/.test(
                state.whatsapp
              ) ? (
                <p className="text-xs text-red-500 ">
                  Please Enter valid Number
                </p>
              ) : null}
            </div>
            <div className="w-full">
              <div className="flex justify-start flex-col space-y-1 w-full">
                <div className="font-semibold text-[15px]">Youtube</div>
                <input
                  type="url"
                  placeholder="Enter Youtube url"
                  name="youtube"
                  value={state.youtube}
                  onChange={handleChange}
                  className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                />
              </div>
              {state.youtube.length > 0 &&
              !/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/.test(
                state.youtube
              ) ? (
                <p className="text-xs text-red-500 ">Please Enter valid url</p>
              ) : null}
            </div>
          </div>
        </div>

        <div className="bg-white  rounded-2xl">
          <p className="py-3 px-6 font-s-medium text-lg">Workplace Pictures</p>
          <div className="bg-slate-300 bg-opacity-60 h-[1px]"></div>
          <div className="lg:flex">
            <div className="bg-inputcolor rounded-md m-7 ">
              <div className="flex items-center justify-center mx-auto">
                <input
                  className="h-full w-full  object-contain hidden"
                  ref={fileRef2}
                  onChange={handleUpload}
                  type="file"
                />
                {workplaceImages.length > 0 ? null : (
                  <div className="flex flex-col  items-center justify-center py-3">
                    <button
                      className="  "
                      onClick={(e) => fileRef2.current.click()}
                    >
                      <img
                        alt="upload"
                        src="/assets/images/portfolio.png"
                        className="w-10"
                      />
                    </button>
                    <h6 className="px-9 text-sm py-4">Upload Images+</h6>
                  </div>
                )}
              </div>
            </div>

            <div className="px-6 flex gap-4 py-3 ">
              <div className="w-full grid grid-cols-4 gap-5">
                <div className="flex justify-between items-center">
                  <p className="font-s-medium text-base"></p>
                  <div
                    onClick={(e) => fileRef2.current.click()}
                    className="flex gap-1 items-center justify-center"
                  >
                    <p className="text-sm text-secondary font-s-medium cursor-pointer px-12 py-7 m-5 bg-inputcolor rounded-md">
                      Add File +
                    </p>
                    <input
                      className="hidden"
                      ref={fileRef2}
                      onChange={(e) =>
                        setWorkplaceImages([
                          ...workplaceImages,
                          e.target.files[0],
                        ])
                      }
                      type="file"
                    />
                  </div>
                </div>
                {/* repeat */}
                {workplaceImages.map((item, index) => {
                  return (
                    <div className="bg-inputcolor relative rounded-md">
                      <div className="bg-primary absolute left-0  text-secondary rounded p-1 cursor-pointer">
                        <RxCross2 className="" size={20} />
                      </div>

                      <img
                        alt="upload"
                        className="h-full w-full  object-contain"
                        src={URL.createObjectURL(item)}
                      />
                    </div>
                  );
                })}
                {/* repeat */}
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <Link
            onClick={updateProfile}
            className="bg-secondary text-white font-s-medium px-8 py-2 rounded-[7px] text-sm"
          >
            Create Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CreateProfile;
