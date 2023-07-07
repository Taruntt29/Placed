import React, { useEffect, useState } from "react";
import { BiChevronDown, BiChevronLeft, BiChevronUp } from "react-icons/bi";
import { toast } from "react-toastify";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BsCalendar3 } from "react-icons/bs";
import {
  createCoachEducation,
  deleteEducationImageByCoachId,
  getAllEducationDataById,
} from "../../../api/coachFunctions";
import { RxCross2 } from "react-icons/rx";
import { useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { RiArrowLeftSLine } from "react-icons/ri";

const EditProfileEducation = () => {
  const [select, setSelect] = useState(false);
  const [toggleone, setToggleOne] = useState(false);

  const handelToggle = () => {
    setSelect(!select);
  };

  const handelToggleOne = () => {
    setToggleOne(!toggleone);
  };

  const { userDetails } = useSelector((state) => state.flightReducer);

  const coachId = userDetails._id;
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

  const [postGraduationDetailsShow, setPostGraduationDetail] = useState([
    {
      type: "Add Post Graduation Details",
      courseNamePs: "",
      courseTypePs: "",
      specializationPs: "",
      yearOfDegreePs: "",
      schoolUniversityPs: "",
      passingYearPs: "",
      percentagePs: "",
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

  console.log("Additional Details", AdditionalDegreeDetailsShow);
  console.log("Gration Details", graduationDetailsShow);
  console.log("Post Gration Details", postGraduationDetailsShow);

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
  let handleAdditionalDegreePassingYear = (i, e) => {
    let newFormAdditionalDetails = [...AdditionalDegreeDetailsShow];
    newFormAdditionalDetails[i]["passingYear"] = e;
    setAdditionalDetail(newFormAdditionalDetails);
  };
  let handleChangeAdditionalDegree = (i, e) => {
    let newFormAdditionalDetails = [...AdditionalDegreeDetailsShow];
    newFormAdditionalDetails[i][e.target.name] = e.target.value;
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

  let AddPostGraduation = () => {
    setPostGraduationDetail([
      ...postGraduationDetailsShow,
      {
        type: "Add Post Graduation Details",
        courseName: "",
        courseName: "",
        specializationPs: "",
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

  let removeFormFields = (i) => {
    let newFormValues = [...graduationDetailsShow];
    newFormValues.splice(i, 1);
    setGraduationDetail(newFormValues);
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
    schoolUniversityXii: "",
    passingYearXii: "",
    percentageXii: "",
    courseTypeXii: "",
  });
  const [UploadarrayDocument, setUploadarrayDocument] = useState([]);
  const [uploaddocument, setUploadDocument] = useState([]);
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const navigate = useNavigate();
  console.log("State X Details", state);
  // upload coaching Field

  console.log(
    "getdataAdditionalDegreeDetailsShow",
    AdditionalDegreeDetailsShow
  );

  const fileRefDocs = useRef();
  const handleEducationAPI = async () => {
    try {
      // console.log({
      //   addClassXDetails: {
      //     SchoolUniversity: state.schoolUniversityX,
      //     passingYear: state.passingYearX,
      //     percentage: state.percentageX,
      //   },
      //   addClassXIIDetails: {
      //     SchoolUniversity: state.schoolUniversityXii,
      //     passingYear: state.passingYearXii,
      //     percentageXii: state.percentageXii,
      //     courseType: state.courseTypeXii,
      //   },
      //   Educationdetails: [
      //     AdditionalDegreeDetailsShow,
      //     postGraduationDetailsShow,
      //     graduationDetailsShow,
      //   ],
      //   uploaddocument: uploaddocument,
      // });
      const formdata = new FormData();
      formdata.append(
        "addClassXDetails",
        JSON.stringify({
          SchoolUniversity: state.schoolUniversityX,
          passingYear: state.passingYearX,
          percentage: state.percentageX,
        })
      );
      formdata.append(
        "addClassXIIDetails",
        JSON.stringify({
          SchoolUniversity: state.schoolUniversityXii,
          passingYear: state.passingYearXii,
          percentageXii: state.percentageXii,
          courseType: state.courseTypeXii,
        })
      );
      let array = [];
      array.push(uploaddocument[0]);
      formdata.append(
        "Educationdetails",
        JSON.stringify(
          ...AdditionalDegreeDetailsShow,
          ...postGraduationDetailsShow,
          ...graduationDetailsShow
        )
      );
      uploaddocument.map((item) => {
        formdata.append("uploaddocument", item);
      });
      // formdata.append("uploaddocument", array);
      const response = await createCoachEducation(formdata, token);
      console.log(response);
      if (response.status) {
        toast(response.message);
        navigate("/coach/edit-coach-profile/experience");
      } else {
        toast(response.message);
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const [products, setProducts] = useState("Education");

  // Function to get data
  const getEducationData = async () => {
    const { data, status, message } = await getAllEducationDataById(coachId);
    console.log(
      "data.schoolUniversityX[0].SchoolUniversity",
      data.addClassXDetails
    );
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
        schoolUniversityX: data.addClassXDetails[0].SchoolUniversity,
        passingYearX: data.addClassXDetails[0].passingYear,
        percentageX: data.addClassXDetails[0].percentage,
        schoolUniversityXii: data.addClassXIIDetails[0].SchoolUniversity,
        passingYearXii: data.addClassXIIDetails[0].passingYear,
        percentageXii: data.addClassXIIDetails[0].percentage,
        courseTypeXii: data.addClassXIIDetails[0].courseType,
      });

      setAdditionalDetail(
        data.Educationdetails.map((item, index) => {
          if (item.type == "Additional Degree") {
            return {
              type: item.type,
              courseName: item.courseName,
              courseType: item.courseType,
              specialization: item.specialization,
              yearOfDegree: item.numberofYearofDegree,
              schoolUniversity: item.SchoolUniversity,
              passingYear: item.passingYear,
              percentage: item.percentage,
            };
          }
        })
      );
      setPostGraduationDetail(
        data.Educationdetails.map((item, index) => {
          if (item.type == "Add Post Graduation Details") {
            return {
              type: item.type,
              courseName: item.courseName,
              courseType: item.courseType,
              specialization: item.specialization,
              yearOfDegree: item.numberofYearofDegree,
              schoolUniversity: item.SchoolUniversity,
              passingYear: item.passingYear,
              percentage: item.percentage,
            };
          }
        })
      );
      setGraduationDetail(
        data.Educationdetails.map((item, index) => {
          if (item.type == "Add Graduation Details") {
            return {
              type: item.type,
              courseName: item.courseName,
              courseType: item.courseType,
              specialization: item.specialization,
              yearOfDegree: item.numberofYearofDegree,
              schoolUniversity: item.SchoolUniversity,
              passingYear: item.passingYear,
              percentage: item.percentage,
            };
          }
        })
      );
      setUploadarrayDocument(data.uploaddocument);
    } else {
      toast(message);
    }
  };

  // console.log("langaugedata", state.language);

  useEffect(() => {
    getEducationData();
  }, []);

  const deleteUploadDocuement = async (url) => {
    try {
      const response = await deleteEducationImageByCoachId(
        coachId,
        url,
        "uploaddocument"
      );
      if (response.status) {
        getEducationData();
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className="bg-inputcolor lg:px-0 px-5">
    <div className="container mx-auto py-20  ">
      <div className="flex items-center mb-4 font-s-medium text-secondary text-lg">
        <Link to="/coach/edit-coach-profile/general">
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
                        <>
                          {(elementAd?.type == "Additional Degree") == true ? (
                            <div className="RptmnvrShow relative w-full">
                              <div className=" py-2 w-full font-s-bold">
                                {" "}
                                Additional Degree{" "}
                              </div>
                              <div className=" grid grid-cols-1 md:grid-cols-2  gap-10 p-6 justify-items-center items-center ">
                                <div className="w-full">
                                  <div className="flex justify-start flex-col gap-1 w-full">
                                    <div className="font-semibold text-[15px]">
                                    <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">Course Name</span>
                                    </div>
                                    <input
                                      type="text"
                                      placeholder="Course Name"
                                      name="courseName"
                                      value={elementAd?.courseName}
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
                                    <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">Course Type</span>
                                    </div>

                                    <input
                                      type="text"
                                      placeholder="Course Name"
                                      name="courseType"
                                      value={elementAd?.courseType}
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
                                    <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">Specialization</span>
                                    </div>
                                    <input
                                      type="text"
                                      name="specialization"
                                      value={elementAd?.specialization}
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
                                    <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">Number of Year of Degree</span>
                                    </div>
                                    {/* <select
                                      name="yearOfDegree"
                                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[5px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                      value={elementAd?.yearOfDegree}
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
                                      type="text"
                                      name="yearOfDegree"
                                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[5px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                      value={elementAd?.yearOfDegree}
                                      onChange={(e) =>
                                        handleChangeAdditionalDegree(index, e)
                                      }
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className=" grid grid-cols-1 md:grid-cols-3  gap-10 p-6 justify-items-center items-center ">
                                <div className="w-full">
                                  <div className="flex justify-start flex-col gap-1 w-full">
                                    <div className="font-semibold text-[15px]">
                                    <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">School/University</span>
                                    </div>
                                    <input
                                      type="text"
                                      name="schoolUniversity"
                                      value={elementAd?.schoolUniversity}
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
                                    <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">Passing Year</span>
                                    </div>
                                    {/* <select
                                      name="passingYear"
                                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                      value={elementAd?.passingYear}
                                      onChange={(e) =>
                                        handleChangeAdditionalDegree(index, e)
                                      }
                                    >
                                      <option> 2012 </option>
                                      <option> 2013 </option>
                                      <option> 2014 </option>
                                    </select> */}
                                    <div className="relative">
                                      <DatePicker
                                        id="DatePicker"
                                        type="string"
                                        className="bg-gray-50 border  z-0 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        // selected={elementAd.passingYear}
                                        value={moment(
                                          elementAd?.passingYear
                                        ).format("yyyy")}
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
                                    <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">Percentage</span>
                                    </div>
                                    <input
                                      type="text"
                                      name="percentage"
                                      value={elementAd?.percentage}
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
                                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                                    onClick={() =>
                                      removeAdditonalDetails(index)
                                    }
                                  >
                                    -
                                  </button>
                                </div>
                              ) : null}
                            </div>
                          ) : (
                            ""
                          )}
                        </>
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
                    {/* dummy */}
                    <div className="flex flex-wrap w-full relative">
                      {graduationDetailsShow.map((element, index) => (
                        <>
                          {(element?.type == "Add Graduation Details") ==
                          true ? (
                            <div className="RptmnvrShow relative w-full">
                              <div className=" py-2 w-full font-s-bold">
                                {" "}
                                Add Graduation Details{" "}
                              </div>
                              <div className=" grid grid-cols-1 md:grid-cols-2  gap-10 p-6 justify-items-center items-center ">
                                <div className="w-full">
                                  <div className="flex justify-start flex-col gap-1 w-full">
                                    <div className="font-semibold text-[15px]">
                                    <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">Course Name</span>
                                    </div>
                                    <input
                                      type="text"
                                      placeholder="Course Name"
                                      name="courseName"
                                      value={element?.courseName}
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
                                    <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">Course Type</span>
                                    </div>

                                    <input
                                      type="text"
                                      placeholder="Course Name"
                                      name="courseType"
                                      value={element?.courseType}
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
                                    <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">Specialization</span>
                                    </div>
                                    <input
                                      type="text"
                                      name="specialization"
                                      value={element?.specialization}
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
                                    <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">Number of Year of Degree</span>
                                    </div>
                                    {/* <select
                                      name="yearOfDegree"
                                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[5px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                      value={element?.yearOfDegree}
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
                                      type="text"
                                      name="yearOfDegree"
                                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[5px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                      value={element?.yearOfDegree}
                                      onChange={(e) =>
                                        handleChangeAddDetails(index, e)
                                      }
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className=" grid grid-cols-1 md:grid-cols-3  gap-10 p-6 justify-items-center items-center ">
                                <div className="w-full">
                                  <div className="flex justify-start flex-col gap-1 w-full">
                                    <div className="font-semibold text-[15px]">
                                    <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">School/University</span>
                                    </div>
                                    <input
                                      type="text"
                                      name="schoolUniversity"
                                      value={element?.schoolUniversity}
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
                                    <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">Passing Year</span>
                                    </div>
                                    {/* <select
                                      name="passingYear"
                                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                      value={element?.passingYear}
                                      onChange={(e) =>
                                        handleChangeAddDetails(index, e)
                                      }
                                    >
                                      <option> 2012 </option>
                                      <option> 2013 </option>
                                      <option> 2014 </option>
                                    </select> */}
                                    <div className="relative">
                                      <DatePicker
                                        id="DatePicker"
                                        type="string"
                                        className="bg-gray-50 border  z-0 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        // selected={elementAd.passingYear}
                                        value={moment(
                                          element?.passingYear
                                        ).format("yyyy")}
                                        onChange={(e) =>
                                          handleChangeAddDetails(index, e)
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
                                    <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">Percentage</span>
                                    </div>
                                    <input
                                      type="text"
                                      name="percentage"
                                      value={element?.percentage}
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
                                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                                    onClick={() => removeFormFields(index)}
                                  >
                                    -
                                  </button>
                                </div>
                              ) : null}
                            </div>
                          ) : (
                            ""
                          )}
                        </>
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
                      {console.log(
                        "postGraduationDetailsShowpostGraduationDetailsShow",
                        postGraduationDetailsShow
                      )}
                      {postGraduationDetailsShow.map((elementPS, index) => (
                        <>
                          {(elementPS?.type == "Add Post Graduation Details") ==
                          true ? (
                            <div className="RptmnvrShow relative w-full">
                              <div className=" py-2 w-full font-s-bold">
                                {" "}
                                Add Post Graduation Details{" "}
                              </div>
                              <div className=" grid grid-cols-1 md:grid-cols-2  gap-10 p-6 justify-items-center items-center ">
                                <div className="w-full">
                                  <div className="flex justify-start flex-col gap-1 w-full">
                                    <div className="font-semibold text-[15px]">
                                    <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">Course Name</span>
                                    </div>
                                    <input
                                      type="text"
                                      placeholder="Course Name"
                                      name="courseNamePs"
                                      value={elementPS?.courseName}
                                      onChange={(e) =>
                                        handleChangePostGraduationDetails(
                                          index,
                                          e
                                        )
                                      }
                                      className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                                    />
                                  </div>
                                </div>

                                <div className="w-full">
                                  <div className="flex justify-start flex-col gap-1 w-full">
                                    <div className="text-[#000] text-[15px] font-semibold">
                                    <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">Course Type</span>
                                    </div>

                                    <input
                                      type="text"
                                      placeholder="Course Name"
                                      name="courseTypePs"
                                      value={elementPS?.courseType}
                                      onChange={(e) =>
                                        handleChangePostGraduationDetails(
                                          index,
                                          e
                                        )
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
                                    <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">Specialization</span>
                                    </div>
                                    <input
                                      type="text"
                                      name="specializationPs"
                                      value={elementPS?.specialization}
                                      onChange={(e) =>
                                        handleChangePostGraduationDetails(
                                          index,
                                          e
                                        )
                                      }
                                      placeholder="Specialization"
                                      className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                                    />
                                  </div>
                                </div>

                                <div className="w-full">
                                  <div className="flex justify-start flex-col gap-1 w-full">
                                    <div className="font-semibold text-[15px]">
                                    <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">Number of Year of Degree</span>
                                    </div>
                                    {/* <select
                                      name="yearOfDegreePs"
                                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[5px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                      value={elementPS?.yearOfDegree}
                                      onChange={(e) =>
                                        handleChangePostGraduationDetails(
                                          index,
                                          e
                                        )
                                      }
                                    >
                                      <option value="2013"> 2013 </option>
                                      <option value="2014"> 2014 </option>
                                      <option value="2015"> 2015 </option>
                                      <option value="2016"> 2016 </option>
                                    </select> */}
                                    <input
                                      type="text"
                                      name="yearOfDegreePs"
                                      value={elementPS?.yearOfDegree}
                                      onChange={(e) =>
                                        handleChangePostGraduationDetails(
                                          index,
                                          e
                                        )
                                      }
                                      placeholder="Year Of Degree"
                                      className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className=" grid grid-cols-1 md:grid-cols-3  gap-10 p-6 justify-items-center items-center ">
                                <div className="w-full">
                                  <div className="flex justify-start flex-col gap-1 w-full">
                                    <div className="font-semibold text-[15px]">
                                    <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">School/University</span>
                                    </div>
                                    <input
                                      type="text"
                                      name="schoolUniversityPs"
                                      value={elementPS?.schoolUniversity}
                                      onChange={(e) =>
                                        handleChangePostGraduationDetails(
                                          index,
                                          e
                                        )
                                      }
                                      placeholder="School/University"
                                      className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                                    />
                                  </div>
                                </div>

                                <div className="w-full">
                                  <div className="flex justify-start flex-col gap-1 w-full">
                                    <div className="text-[#000] text-[15px] font-semibold">
                                    <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">Passing Year</span>
                                    </div>
                                    {/* <select
                                      name="passingYearPs"
                                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                      value={elementPS?.passingYear}
                                      onChange={(e) =>
                                        handleChangePostGraduationDetails(
                                          index,
                                          e
                                        )
                                      }
                                    >
                                      <option> 2012 </option>
                                      <option> 2013 </option>
                                      <option> 2014 </option>
                                    </select> */}
                                    <div className="relative">
                                      <DatePicker
                                        id="DatePicker"
                                        type="string"
                                        className="bg-gray-50 border  z-0 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        // selected={elementAd.passingYear}
                                        value={moment(
                                          elementPS?.passingYear
                                        ).format("yyyy")}
                                        onChange={(e) =>
                                          handleChangePostGraduationDetails(
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
                                    <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">Percentage</span>
                                    </div>
                                    <input
                                      type="text"
                                      name="percentagePs"
                                      value={elementPS?.percentage}
                                      onChange={(e) =>
                                        handleChangePostGraduationDetails(
                                          index,
                                          e
                                        )
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
                                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                                    onClick={() => removePostGraducation(index)}
                                  >
                                    -
                                  </button>
                                </div>
                              ) : null}
                            </div>
                          ) : (
                            ""
                          )}
                        </>
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
                        Add Class XII Details
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
                                  <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">Course Type</span>
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
                                  <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">School/University</span>
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

                            <div className=" grid grid-cols-1 md:grid-cols-2  gap-10 p-6 justify-items-center items-center ">
                              <div className="w-full">
                                <div className="flex justify-start flex-col gap-1 w-full">
                                  <div className="text-[#000] text-[15px] font-semibold">
                                  <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">Passing Year</span>
                                  </div>
                                  {/* <select
                                    name="passingYearXii"
                                    value={state.passingYearXii}
                                    onChange={handleChange}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  >
                                    <option value="2012"> 2012 </option>
                                    <option value="2013"> 2013 </option>
                                    <option value="2014"> 2014 </option>
                                    <option value="2015"> 2015 </option>
                                  </select> */}
                                  <div className="relative">
                                    <DatePicker
                                      id="DatePicker"
                                      type="string"
                                      name="passingYearXii"
                                      className="bg-gray-50 border  z-0 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                      // selected={elementAd.passingYear}
                                      value={moment(
                                        state?.passingYearXii
                                      ).format("yyyy")}
                                      onChange={handleChange}
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
                                  <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">Percentage</span>
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
                          Add Class X Details
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
                                    <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">School/University</span>
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

                              <div className=" grid grid-cols-1 md:grid-cols-2  gap-10 p-6 justify-items-center items-center ">
                                <div className="w-full">
                                  <div className="flex justify-start flex-col gap-1 w-full">
                                    <div className="text-[#000] text-[15px] font-semibold">
                                    <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">Passing Year</span>
                                    </div>

                                    {/* <select
                                      name="passingYearX"
                                      value={state.passingYearX}
                                      onChange={handleChange}
                                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    >
                                      <option value="2012"> 2012 </option>
                                      <option value="2013"> 2013 </option>
                                      <option value="2014"> 2014 </option>
                                      <option value="2015"> 2015 </option>
                                    </select> */}
                                    <div className="relative">
                                      <DatePicker
                                        id="DatePicker"
                                        type="string"
                                        name="passingYearX"
                                        className="bg-gray-50 border  z-0 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        // selected={elementAd.passingYear}
                                        value={moment(
                                          state?.passingYearX
                                        ).format("yyyy")}
                                        onChange={handleChange}
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
                                    <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">Percentage</span>
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
                  <p className="text-xs text-secondary font-s-medium cursor-pointer">
                    Add File +
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
                {/* {console.log("uploaddocument", UploadarrayDocument)} */}

                {uploaddocument.map((item, index) => {
                  return (
                    <>
                      <p className=" flex justify-end items-center">
                        <div
                          className="bg-primary text-secondary rounded p-1 cursor-pointer"
                          onClick={() => {
                            const newState = state.uploaddocument.filter(
                              (i, ind) => ind !== index
                            );
                            setState({
                              ...state,
                              uploaddocument: newState,
                            });
                          }}
                          // onClick={() => {
                          //   const newState =
                          //     state.CoachingCertifications.filter(
                          //       (i, ind) => ind !== index
                          //     );
                          //   setState({
                          //     ...state,
                          //     CoachingCertifications: newState,
                          //   });
                          // }}
                        >
                          <RxCross2 className="" size={20} />
                        </div>
                      </p>
                      <div className="bg-inputcolor rounded-md">
                        <div className="flex items-center justify-center mx-auto py-6 ">
                          <div className="flex flex-col  items-center justify-center py-3">
                            {console.log("itemitem", item)}
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

                {/* as */}
                {UploadarrayDocument.map((item, index) => {
                  return (
                    <>
                      <p className=" flex justify-end items-center">
                        <div
                          className="bg-primary text-secondary rounded p-1 cursor-pointer"
                          // onClick={() => {
                          //   const newState = UploadarrayDocument.filter(
                          //     (i, ind) => ind !== index
                          //   );
                          //   setUploadDocument({
                          //     ...UploadarrayDocument,
                          //     UploadarrayDocument: newState,
                          //   });
                          // }}
                        >
                          <RxCross2
                            className=""
                            size={20}
                            onClick={(e) => deleteUploadDocuement(item)}
                          />
                        </div>
                      </p>
                      <div className="bg-inputcolor rounded-md">
                        <div className="flex items-center justify-center mx-auto py-6 ">
                          <div className="flex flex-col  items-center justify-center py-3">
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
                {/* as */}
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
    </div>
  );
};

export default EditProfileEducation;
