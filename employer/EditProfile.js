import React, { useEffect, useRef, useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
// import { Editor } from "react-draft-wysiwyg";
// import { Country, State, City } from "country-state-city";
import { ImCross } from "react-icons/im";
import { Link, useNavigate } from "react-router-dom";
import { BsCalendar3 } from "react-icons/bs";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
import { MdCloudUpload } from "react-icons/md";
import JoditEditor from "jodit-react";
import {
  deleteEmployerProfileImage,
  getAllCitiesAPI,
  getAllCountriesAPI,
  getAllIndustryAPI,
  getAllStatesAPI,
  getEmployerEditProfileAPI,
  putUpdateProfileAPI,
} from "../../../api/authService";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { RiArrowLeftSLine } from "react-icons/ri";
import moment from "moment";

const EditProfile = () => {
  const { userDetails } = useSelector((state) => state.flightReducer);
  const editor = useRef(null);

  const teamsizelist = [
    { value: "0-10", label: "0-10" },
    { value: "11-50", label: "11-50" },
    { value: "50-100", label: "50-100" },
    { value: "100+", label: "100+" },
    { value: "500+", label: "500+" },
    { value: "1000+", label: "1000+" },
  ];

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
    establishedIn: "",
    teamSize: "",
    industryId: "",
    ownershipType: "",
    country: "",
    state: "",
    city: "",
    pincode: "",
    address: "",
    description: "",
    linkedIn: "",
    twitter: "",
    instagram: "",
    facebook: "",
    whatsapp: "",
    youtube: "",
    gstNumber: "",
    panNumber: "",
    image: "",
    otherImages: [],
    gstNumberpdf: "",
    panNumberpdf: "",
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

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  // get Api
  const getProfileData = async () => {
    const { data, status, message } = await getEmployerEditProfileAPI(
      userDetails._id
    );

    if (status) {
      // console.log(data);
      setState(data);
      // setProfilePic(data.image);
    } else {
      toast(message);
    }
  };

  useEffect(() => {
    getProfileData();
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
        // console.log(data);
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

  // profile image upload
  const [profilePic, setProfilePic] = useState();
  const handleProfilePic = (e) => {
    console.log(e.target.files);
    setProfilePic(e.target.files[0]);
  };
  // useEffect(() => {
  //   setProfilePic(state.image);
  // }, []);
  // Put Api
  const navigate = useNavigate();
  const putUpdateProfile = async () => {
    const formdata = new FormData();
    formdata.append("companyName", state.companyName);
    formdata.append("phoneNumber", state.phoneNumber);
    formdata.append("email", state.email);
    formdata.append("website", state.website);
    formdata.append("establishedIn", state.establishedIn);
    formdata.append("teamSize", state.teamSize);
    formdata.append("industryId", state.industryId);
    formdata.append("ownershipType", state.ownershipType);
    formdata.append("country", state.country);
    formdata.append("state", state.state);
    formdata.append("city", state.city);
    formdata.append("pincode", state.pincode);
    formdata.append("address", state.address);
    formdata.append("description", state.description);
    formdata.append("linkedIn", state.linkedIn);
    formdata.append("twitter", state.twitter);
    formdata.append("instagram", state.instagram);
    formdata.append("facebook", state.facebook);
    formdata.append("whatsapp", state.whatsapp);
    formdata.append("youtube", state.youtube);

    formdata.append("gstNumber", state.gstNumber);
    formdata.append("panNumber", state.panNumber);

    workplaceImages.map((item) => formdata.append("otherImages", item));

    // formdata.append("gstNumberpdf", state.gstNumberpdf);
    // formdata.append("panNumberpdf", state.panNumberpdf);

    try {
      const response = await putUpdateProfileAPI(formdata);
      if ((response.code = 200)) {
        toast(response.message);
        navigate("/employer/my-profile");
      } else {
        toast(response.message);
      }
    } catch (error) {
      console.log(error);
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

  const deleteImage = async (id, url) => {
    try {
      const { data, status, message } = await deleteEmployerProfileImage(
        id,
        url
      );
      if (status) {
        console.log("i am inside", data);
        toast(message);
      } else {
        toast(message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto md:px-5  md:py-20 form">
      <div className="flex space-x-2 items-center pb-6 lg:px-0 px-5">
        {" "}
        <RiArrowLeftSLine className="text-secondary w-5 h-5 " />{" "}
        <p className="text-secondary font-s-medium text-base"> Edit Profile </p>{" "}
      </div>
      <div className="bg-[#F5F7F9] md:rounded-[15px] p-6 flex flex-col justify-start w-full gap-6">
        <div className="bg-white rounded-[15px]">
          <div className="flex items-center space-x-2  lg:px-8 px-3 py-4 bg-white">
            <img
              alt="images"
              src="/assets/images/editprofile.png"
              className="w-10 h-15"
            />
            <div>
              <h1 className="text-2xl font-s-medium">Edit your Profile</h1>
              <p className="text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                non quam commodo, dictum justo a, varius nisl.
              </p>
            </div>
          </div>
          <hr className="w-full h-[0.10rem] bg-inputcolor" />

          <div className="py-3">
            {/* added */}
            <div className="bg-white rounded-[15px] mb-4">
              <p className="py-3 px-6 font-s-medium lg:text-lg text-base">
                Upload Logo Image
              </p>
              <div className="bg-slate-300 bg-opacity-60 h-[1px]"></div>
              <div className="flex flex-col justify-start items-start gap-2 px-6 pt-6 pb-3">
                <div className=" border-[1px] inline-flex flex-col border[#707070]  justify-center items-center gap-2 rounded-[6px] innershadow2">
                  {/* <img src="/assets/images/uploadimage.png" className="w-16" /> */}

                  {console.log("statekiurl", state.image)}

                  {profilePic ? (
                    <>
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
                    <div className=" flex justify-center items-center flex-col gap-2">
                      {/* <img
                        alt="UploadImage"
                        src="/assets/images/uploadimage.png"
                        className="w-16"
                      /> */}

                      <input
                        type="file"
                        name="uploadfile"
                        id="img"
                        className="hidden"
                        onChange={handleProfilePic}
                      />
                      <label
                        for="img"
                        // className="text-white cursor-pointer bg-secondary font-s-medium text-sm flex justify-center items-center px-4 py-2 rounded-[6px] "
                      >
                        {/* Upload Image <span className="text-red-500">*</span> */}
                        <img
                          alt="ProfilePic"
                          src={state.image}
                          // src={URL.createObjectURL(profilePic)}
                          onChange={handleProfilePic}
                          className="w-40 h-40 rounded-[6px] innershadow2 border-[1px] border[#707070] cursor-pointer"
                        />
                      </label>
                    </div>
                  )}
                </div>
                <p className="font-s-medium text-sm">
                  Company Logo:-
                  <span className="text-sm font-s-normal ">
                    Max file size is 1MB, Minimum dimension: 136 x 136 And
                    Suitable files are .jpg & .png
                  </span>
                </p>
              </div>
            </div>
            {/* added */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 px-6 py-2 justify-items-center items-center">
              <div className="w-full">
                <div className="flex justify-start flex-col space-y-1 w-full">
                  <div className="font-semibold text-[15px]">Company Name</div>
                  <input
                    type="text"
                    placeholder="Enter Company Name"
                    name="companyName"
                    value={state?.companyName}
                    disabled
                    // disabled={editState}
                    onChange={handleChange}
                    className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                  />
                </div>
              </div>
              <div className="w-full">
                <div className="flex justify-start flex-col space-y-1 w-full phoneparent">
                  <div className="font-semibold text-[15px]">Phone Number</div>
                  <PhoneInput
                    placeholder="Mobile Number"
                    name="phoneNumber"
                    value={state.phoneNumber}
                    disabled
                    // disabled={editState}
                    onChange={(e) => setState({ ...state, phoneNumber: e })}
                    className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                  />
                </div>
              </div>
              <div className="w-full">
                <div className="flex justify-start flex-col space-y-1 w-full">
                  <div className="font-semibold text-[15px]">Email</div>
                  <input
                    type="text"
                    name="email"
                    value={state.email}
                    disabled
                    // disabled={editState}
                    onChange={handleChange}
                    placeholder="Enter Email"
                    className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                  />
                </div>
              </div>
            </div>
            {/* website */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 px-6 py-2 justify-items-center items-center">
              <div className="w-full">
                <div className="flex justify-start flex-col space-y-1 w-full">
                  <div className="font-semibold text-[15px] ">Website</div>
                  <input
                    type="text"
                    name="website"
                    value={state.website}
                    // disabled={editState}
                    onChange={handleChange}
                    placeholder="Enter Website Url"
                    className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                  />
                </div>
              </div>
              <div className="w-full">
                <div className="flex justify-start flex-col space-y-1 w-full">
                  <div className="font-semibold text-[15px]">
                    Established In
                  </div>

                  <div className="relative">
                    <DatePicker
                      id="DatePicker"
                      type="string"
                      className="bg-gray-50 border  z-0 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      // selected={state.establishedIn}
                      value={moment(state?.establishedIn).format("yyyy")}
                      onChange={(e) => setState({ ...state, establishedIn: e })}
                      // onChange={(e) => alert(e)}
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
                    value={{ value: state.teamSize, label: state.teamSize }}
                    onChange={(e) => setState({ ...state, teamsize: e.value })}
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
                      industryData.filter(
                        (i) => i._id === state.industryId
                      )?.[0]
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
                    value={{
                      value: state.ownershipType,
                      label: state.ownershipType,
                    }}
                    name="ownershipType"
                    onChange={(e) =>
                      setState({ ...state, ownershipType: e.value })
                    }
                    options={ownershiptypelist}
                  />
                </div>
              </div>
              <div className="w-full">
                <div className="flex justify-start flex-col space-y-1 w-full">
                  <div className="font-semibold text-[15px]">Country</div>

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
            </div>
            {/* state */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 px-6 py-2 justify-items-center items-center">
              <div className="w-full  ">
                <div className="flex justify-start flex-col space-y-1 w-full">
                  <div className="font-semibold text-[15px]">State</div>

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
              <div className="w-full ">
                <div className="flex justify-start flex-col space-y-1 w-full">
                  <div className="font-semibold text-[15px]">City</div>

                  <Select
                    getOptionLabel={(e) => e.name}
                    getOptionValue={(e) => e.name}
                    value={{ name: state.city }}
                    className="z-0"
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
              <div className="w-full ">
                <div className="flex justify-start flex-col space-y-1 w-full">
                  <div className="font-semibold text-[15px]">Pincode</div>
                  <input
                    type="text"
                    name="pincode"
                    value={state.pincode}
                    onChange={handleChange}
                    placeholder="Pincode"
                    className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                  />
                </div>
              </div>
            </div>
            {/* address */}
            <div className="py-2 px-6 justify-items-center items-center">
              <div className="w-full col-span-1 md:col-span-2 lg:col-span-3">
                <div className="flex justify-start flex-col space-y-1 w-full">
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
            {/* description */}
            <div className=" px-6 pt-2 pb-5">
              <div className="w-full col-span-1 md:col-span-2 lg:col-span-3">
                <div className="flex justify-start flex-col space-y-1 w-full">
                  <div className="font-semibold text-[15px]">Description</div>
                  <div className="bg-inputcolor rounded-md px-2 py-2">
                    {" "}
                    <JoditEditor
                      className="-z-20"
                      ref={editor}
                      value={state.description}
                      tabIndex={1}
                      onChange={(e) => setState({ ...state, description: e })}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white  rounded-2xl">
              <p className="py-3 px-6 font-s-medium text-lg">Document</p>
              <div className="bg-slate-300 bg-opacity-60 h-[1px]"></div>
              <div className="grid grid-cols-1 md:grid-cols-2  gap-2 p-6 justify-items-center items-center">
                <div className="w-full ">
                  <div className="flex justify-start flex-col space-y-1 w-full">
                    <div className="font-semibold text-[15px]">GST Number</div>
                    <input
                      type="text"
                      value={state.gstNumber}
                      onChange={handleChange}
                      placeholder="GST Number"
                      name="gstNumber"
                      className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                    />
                  </div>
                </div>
                <div className="w-full ">
                  <div className="flex justify-start flex-col space-y-1 w-full">
                    <div className="font-semibold text-[15px]">Pan Number</div>
                    <input
                      type="text"
                      placeholder="Pan Number"
                      name="panNumber"
                      value={state.panNumber}
                      onChange={handleChange}
                      className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2  gap-2 px-6 pb-5 justify-items-center items-center">
                <div className="w-full ">
                  <div className="bg-inputcolor px-2 mt-3 rounded-md">
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
                          {uploadimagegst || state.gstNumberpdf ? (
                            <img
                              alt="upload"
                              className="w-full h-56"
                              src={
                                uploadimagegst
                                  ? URL.createObjectURL(uploadimagegst)
                                  : state.gstNumberpdf
                              }
                            />
                          ) : (
                            <div className="flex items-center">
                              <MdCloudUpload size={16} />
                              <h6 className=" text-sm py-2 pl-1">
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
                  <div className="bg-inputcolor px-2 mt-3 rounded-md">
                    <div className="flex  items-center justify-center">
                      <input
                        className="hidden"
                        ref={fileRef5}
                        onChange={handlePanUpload}
                        type="file"
                      />

                      <div className="flex space-x-1  ">
                        {" "}
                        <button
                          className="  "
                          onClick={(e) => fileRef5.current.click()}
                        >
                          {uploadimagepan || state.panNumberpdf ? (
                            <img
                              alt="upload"
                              className="w-full h-56"
                              src={
                                uploadimagepan
                                  ? URL.createObjectURL(uploadimagepan)
                                  : state.panNumberpdf
                              }
                            />
                          ) : (
                            <div className="flex items-center">
                              <MdCloudUpload size={16} />
                              <h6 className=" text-sm py-2 pl-1">
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
            <div className="bg-white pt-5 rounded-2xl">
              <p className="py-3 px-6 font-s-medium text-lg">Social Network</p>
              <div className="bg-slate-300 bg-opacity-60 h-[1px]"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-6 justify-items-center items-center">
                <div className="w-full">
                  <div className="flex justify-start flex-col space-y-1 w-full">
                    <div className="font-semibold text-[15px]">LinkedIn</div>
                    <input
                      type="text"
                      placeholder="Enter Linkedin url"
                      name="linkedIn"
                      value={state.linkedIn}
                      onChange={handleChange}
                      className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex justify-start flex-col space-y-1 w-full">
                    <div className="font-semibold text-[15px]">Twitter</div>
                    <input
                      type="text"
                      placeholder="Enter Twitter url"
                      name="twitter"
                      value={state.twitter}
                      onChange={handleChange}
                      className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex justify-start flex-col space-y-1 w-full">
                    <div className="font-semibold text-[15px]">Instagram</div>
                    <input
                      type="text"
                      placeholder="Enter Instagram url"
                      name="instagram"
                      value={state.instagram}
                      onChange={handleChange}
                      className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex justify-start flex-col space-y-1 w-full">
                    <div className="font-semibold text-[15px]">Facebook</div>
                    <input
                      type="text"
                      name="facebook"
                      value={state.facebook}
                      onChange={handleChange}
                      placeholder="Enter Facebook url"
                      className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex justify-start flex-col space-y-1 w-full">
                    <div className="font-semibold text-[15px]">Whatsapp</div>
                    <input
                      type="text"
                      name="whatsapp"
                      value={state.whatsapp}
                      onChange={handleChange}
                      placeholder="Enter Whatsapp url"
                      className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex justify-start flex-col space-y-1 w-full">
                    <div className="font-semibold text-[15px]">Youtube</div>
                    <input
                      type="text"
                      placeholder="Enter Youtube url"
                      name="youtube"
                      value={state.youtube}
                      onChange={handleChange}
                      className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="bg-white pt-5 rounded-2xl">
              <p className="py-3 px-6 font-s-medium text-lg">
                Workplace Pictures & Videos
              </p>
              <div className="bg-slate-300 bg-opacity-60 h-[1px]"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2 p-6 justify-items-center items-center">
                <div className="bg-gray-300 rounded-md ">
                  <div className="flex items-center justify-center mx-auto">
                    <input
                      className="hidden"
                      ref={fileRef2}
                      onChange={handleUpload}
                      type="file"
                    />

                    <div className="flex flex-col  items-center justify-center py-3">
                      {" "}
                      <button
                        className="  "
                        onClick={(e) => fileRef2.current.click()}
                      >
                        {uploadimagetwo || state.otherImages ? (
                          <img
                            alt="upload"
                            src={
                              uploadimagetwo
                                ? URL.createObjectURL(uploadimagetwo)
                                : state.otherImages[0]
                            }
                            className="w-full h-36"
                          />
                        ) : (
                          <img
                            alt="upload"
                            src="/assets/images/portfolio.png"
                            className="w-16"
                          />
                        )}
                      </button>
                      <h6 className="px-3 text-sm py-4">
                        Upload your Document
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="bg-white  rounded-2xl">
              <p className="py-3 px-6 font-s-medium text-lg">
                Workplace Pictures
              </p>
              <div className="bg-slate-300 bg-opacity-60 h-[1px]"></div>

              <div className="bg-inputcolor rounded-md m-7  ">
                <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 ">
                  <input
                    className=" hidden"
                    ref={fileRef2}
                    onChange={handleUpload}
                    type="file"
                  />

                  {state.otherImages &&
                    state.otherImages.map((i) => (
                      <div className="relative ">
                        <img alt="upload" src={i} className="w-full h-36 " />
                        <div className="bg-secondary text-white absolute top-0 right-0 p-2 rounded-full cursor-pointer">
                          <ImCross
                            onClick={(e) => {
                              deleteImage(state._id, i);
                              getProfileData();
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  {workplaceImages &&
                    workplaceImages.map((i) => (
                      <div className="relative">
                        <img
                          alt="upload"
                          src={URL.createObjectURL(i)}
                          className="w-full h-36"
                        />
                        {/* <div className="bg-secondary text-white text-xl absolute top-0 left-0">
                          cross
                        </div> */}
                      </div>
                    ))}
                  <div className="flex justify-between items-center">
                    <p className="font-s-medium text-base"></p>
                    <div
                      onClick={(e) => fileRef2.current.click()}
                      className="flex gap-1 items-center justify-center"
                    >
                      <p className="text-base text-secondary text-center font-s-medium cursor-pointer  py-7 m-5 bg-inputcolor rounded-md">
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

                  {/* <div className="flex flex-col  items-center justify-center py-3">
                      <button
                        className="  "
                        onClick={(e) => fileRef2.current.click()}
                      >
                        <img
                          alt="upload"
                          src="/assets/images/portfolio.png"
                          className="w-16"
                        />
                      </button>
                    </div> */}
                </div>
              </div>
            </div>
            <div className=" lg:flex gap-3 py-2 px-6">
              <div className="">
                <button
                  // onClick={() => {
                  //   editState ? setEditState(!editState) : putUpdateProfile();
                  // }}
                  // // onClick={putUpdateProfile}
                  onClick={putUpdateProfile}
                  className="bg-secondary text-white font-s-medium px-8 py-3 rounded-[7px] text-sm"
                >
                  {/* {editState ? "Edit" : "Update Changes"} */}
                  Update Changes
                </button>
              </div>
              <div className="">
                <Link to="/employer/my-profile">
                  <button className="bg-[#5E5E5E] text-white font-s-medium lg:px-8 px-16 py-3 lg:my-0 my-4 rounded-[7px] text-sm">
                    Cancel
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
