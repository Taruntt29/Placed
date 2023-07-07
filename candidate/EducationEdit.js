import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { candidateEducationAPI } from "../../../api/authService";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import { RiArrowLeftSLine } from "react-icons/ri";
import { candidateProfileGetAPI } from "../../../api/authCandidate";
export default function EducationEdit() {
  // Education Start

  const [select, setSelect] = useState(false);
  const [toggleone, setToggleOne] = useState(false);
  const [toggletwo, setToggleTwo] = useState(false);
  const [products, setProducts] = useState("Education");
  const [AdditionalDetailSkills, setAdditionalDetailSkills] = useState([]);
  const [GraduationDetailSkills, setGraduationDetailSkills] = useState([]);
  const [PostGraduationDetailSkills, setPostGraduationDetailSkills] = useState(
    []
  );

  const id = useParams();
  const candidateId = id.id;
  const navigate = useNavigate();

  const [state, setState] = useState({
    schoolUniversityX: "",
    passingYearX: "",
    percentageX: "",
    schoolUniversityXii: "",
    passingYearXii: "",
    percentageXii: "",
    courseTypeXii: "",
  });
  //   const [valueRadio, setValueRadio] = useState();
  //   console.log(valueRadio);

  const handelToggle = () => {
    setSelect(!select);
  };

  const handelToggleOne = () => {
    setToggleOne(!toggleone);
  };

  const handelToggleTwo = () => {
    setToggleTwo(!toggletwo);
  };

  const [graduationDetailsShow, setGraduationDetail] = useState([
    {
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
      courseNameAd: "",
      courseTypeAd: "",
      specializationAd: "",
      yearOfDegreeAd: "",
      schoolUniversityAd: "",
      passingYearAd: "",
      percentageAd: "",
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

  let handleChangeAdditionalDegree = (i, e) => {
    let newFormAdditionalDetails = [...AdditionalDegreeDetailsShow];
    newFormAdditionalDetails[i][e.target.name] = e.target.value;
    setAdditionalDetail(newFormAdditionalDetails);
  };

  let AddGraduation = () => {
    setGraduationDetail([
      ...graduationDetailsShow,
      {
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
        courseNamePs: "",
        courseTypePs: "",
        specializationPs: "",
        yearOfDegreePs: "",
        schoolUniversityPs: "",
        passingYearPs: "",
        percentagePs: "",
      },
    ]);
  };

  let AddAdditonalDetails = () => {
    setAdditionalDetail([
      ...AdditionalDegreeDetailsShow,
      {
        courseNameAd: "",
        courseTypeAd: "",
        specializationAd: "",
        yearOfDegreeAd: "",
        schoolUniversityAd: "",
        passingYearAd: "",
        percentageAd: "",
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

  let removeFormFields = (i) => {
    let newFormValues = [...graduationDetailsShow];
    newFormValues.splice(i, 1);
    setGraduationDetail(newFormValues);
  };
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleEducationAPI = async () => {
    try {
      const response = await candidateEducationAPI({
        classXdetails: {
          schoolUniversityX: state.schoolUniversityX,
          passingYearX: state.passingYearX,
          percentageX: state.percentageX,
        },
        classXIIdetails: {
          schoolUniversityXii: state.schoolUniversityXii,
          passingYearXii: state.passingYearXii,
          percentageXii: state.percentageXii,
          courseTypeXii: state.courseTypeXii,
        },
        graduationDetails: graduationDetailsShow,
        postGraduationDetails: postGraduationDetailsShow,
        additionalEducation: AdditionalDegreeDetailsShow,
      });
      console.log(response);
      if (response.status) {
        toast(response.message);
        navigate(`/candidate/WorkExperice-Edit/${candidateId}`);
      } else {
        toast(response.message);
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  console.log("Additonal Skill Data", AdditionalDetailSkills);
  console.log("Graducation Skill Data", GraduationDetailSkills);
  console.log("PostGraducation Skill Data", PostGraduationDetailSkills);

  let array = [];

  useEffect(() => {
    // alert("check useee");
    if (AdditionalDetailSkills.length >= 1) {
      for (let i = 0; i < AdditionalDetailSkills.length; i++) {
        console.log("loop..............");
        array.push({
          courseNameAd: AdditionalDetailSkills[i].courseNameAd,
          courseTypeAd: AdditionalDetailSkills[i].courseTypeAd,
          passingYearAd: AdditionalDetailSkills[i].passingYearAd,
          percentageAd: AdditionalDetailSkills[i].percentageAd,
          schoolUniversityAd: AdditionalDetailSkills[i].schoolUniversityAd,
          specializationAd: AdditionalDetailSkills[i].specializationAd,
          yearOfDegreeAd: AdditionalDetailSkills[i].yearOfDegreeAd,
        });
        console.log(AdditionalDetailSkills[i].skill, "check skil.............");
      }
      //   setDumy(array);
      setAdditionalDetail(array);
    }
  }, [AdditionalDetailSkills]);

  let arrayGraducatoin = [];

  useEffect(() => {
    if (GraduationDetailSkills.length >= 1) {
      for (let i = 0; i < GraduationDetailSkills.length; i++) {
        console.log("loop..............");
        arrayGraducatoin.push({
          courseName: GraduationDetailSkills[i].courseName,
          courseType: GraduationDetailSkills[i].courseType,
          passingYear: GraduationDetailSkills[i].passingYear,
          percentage: GraduationDetailSkills[i].percentage,
          schoolUniversity: GraduationDetailSkills[i].schoolUniversity,
          specialization: GraduationDetailSkills[i].specialization,
          yearOfDegree: GraduationDetailSkills[i].yearOfDegree,
        });
        console.log(GraduationDetailSkills[i].skill, "check skil.............");
      }
      setGraduationDetail(arrayGraducatoin);
    }
  }, [GraduationDetailSkills]);

  let arrayPostGraducatoin = [];

  useEffect(() => {
    if (PostGraduationDetailSkills.length >= 1) {
      for (let i = 0; i < GraduationDetailSkills.length; i++) {
        console.log("loop..............");
        arrayPostGraducatoin.push({
          courseNamePs: PostGraduationDetailSkills[i].courseNamePs,
          courseTypePs: PostGraduationDetailSkills[i].courseTypePs,
          passingYearPs: PostGraduationDetailSkills[i].passingYearPs,
          percentagePs: PostGraduationDetailSkills[i].percentagePs,
          schoolUniversityPs: PostGraduationDetailSkills[i].schoolUniversityPs,
          specializationPs: PostGraduationDetailSkills[i].specializationPs,
          yearOfDegreePs: PostGraduationDetailSkills[i].yearOfDegreePs,
        });
        console.log(GraduationDetailSkills[i].skill, "check skil.............");
      }
      setPostGraduationDetail(arrayPostGraducatoin);
    }
  }, [PostGraduationDetailSkills]);

  const GetCandidateProfile = async () => {
    try {
      const response = await candidateProfileGetAPI(candidateId);
      console.log(response.data);
      setAdditionalDetailSkills(response.data.additionalEducation);
      setGraduationDetailSkills(response.data.graduationDetails);
      setPostGraduationDetailSkills(response.data.postGraduationDetails);
      setState({
        schoolUniversityX: response.data.classXdetails.schoolUniversityX,
        passingYearX: response.data.classXdetails.passingYearX,
        percentageX: response.data.classXdetails.percentageX,
        schoolUniversityXii: response.data.classXIIdetails.schoolUniversityXii,
        passingYearXii: response.data.classXIIdetails.passingYearXii,
        percentageXii: response.data.classXIIdetails.percentageXii,
        courseTypeXii: response.data.classXIIdetails.courseTypeXii,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetCandidateProfile();
  }, []);

  // Education End

  // Work Exerience End
  return (
    <div>
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
                      <div className=" grid grid-cols-1 md:grid-cols-2  gap-10 p-6 justify-items-center items-center ml-0">
                        <div className="w-full">
                          <div className="flex justify-start flex-col gap-1 w-full">
                            <div className="font-semibold text-[15px]">
                              Course Name
                            </div>
                            <input
                              type="text"
                              placeholder="Course Name"
                              name="courseNameAd"
                              value={elementAd.courseNameAd}
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
                              Course Type
                            </div>

                            <input
                              type="text"
                              placeholder="Course Name"
                              name="courseTypeAd"
                              value={elementAd.courseTypeAd}
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
                              Specialization
                            </div>
                            <input
                              type="text"
                              name="specializationAd"
                              value={elementAd.specializationAd}
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
                              Number of Year of Degree
                            </div>
                            <select
                              name="yearOfDegreeAd"
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[5px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              value={elementAd.yearOfDegreeAd}
                              onChange={(e) =>
                                handleChangeAdditionalDegree(index, e)
                              }
                            >
                              <option value="2013"> 2013 </option>
                              <option value="2014"> 2014 </option>
                              <option value="2015"> 2015 </option>
                              <option value="2016"> 2016 </option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className=" grid grid-cols-1 md:grid-cols-3  gap-10 p-6 justify-items-center items-center ">
                        <div className="w-full">
                          <div className="flex justify-start flex-col gap-1 w-full">
                            <div className="font-semibold text-[15px]">
                              School/University
                            </div>
                            <input
                              type="text"
                              name="schoolUniversityAd"
                              value={elementAd.schoolUniversityAd}
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
                              Passing Year
                            </div>
                            <select
                              name="passingYearAd"
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              value={elementAd.passingYearAd}
                              onChange={(e) =>
                                handleChangeAdditionalDegree(index, e)
                              }
                            >
                              <option> 2012 </option>
                              <option> 2013 </option>
                              <option> 2014 </option>
                            </select>
                          </div>
                        </div>

                        <div className="w-full">
                          <div className="flex justify-start flex-col gap-1 w-full">
                            <div className="font-semibold text-[15px]">
                              Percentage
                            </div>
                            <input
                              type="text"
                              name="percentageAd"
                              value={elementAd.percentageAd}
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
                      </div>
                      <div className=" grid grid-cols-1 md:grid-cols-2  gap-10 p-6 justify-items-center items-center ">
                        <div className="w-full">
                          <div className="flex justify-start flex-col gap-1 w-full">
                            <div className="font-semibold text-[15px]">
                              Course Name
                            </div>
                            <input
                              type="text"
                              placeholder="Course Name"
                              name="courseName"
                              value={element.courseName}
                              onChange={(e) => handleChangeAddDetails(index, e)}
                              className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                            />
                          </div>
                        </div>

                        <div className="w-full">
                          <div className="flex justify-start flex-col gap-1 w-full">
                            <div className="text-[#000] text-[15px] font-semibold">
                              Course Type
                            </div>

                            <input
                              type="text"
                              placeholder="Course Name"
                              name="courseType"
                              value={element.courseType}
                              onChange={(e) => handleChangeAddDetails(index, e)}
                              className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                            />
                          </div>
                        </div>
                      </div>
                      <div className=" grid grid-cols-1 md:grid-cols-2  gap-10 p-6 justify-items-center items-center ">
                        <div className="w-full">
                          <div className="flex justify-start flex-col gap-1 w-full">
                            <div className="font-semibold text-[15px]">
                              Specialization
                            </div>
                            <input
                              type="text"
                              name="specialization"
                              value={element.specialization}
                              onChange={(e) => handleChangeAddDetails(index, e)}
                              placeholder="Specialization"
                              className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                            />
                          </div>
                        </div>

                        <div className="w-full">
                          <div className="flex justify-start flex-col gap-1 w-full">
                            <div className="font-semibold text-[15px]">
                              Number of Year of Degree
                            </div>
                            <select
                              name="yearOfDegree"
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[5px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              value={element.yearOfDegree}
                              onChange={(e) => handleChangeAddDetails(index, e)}
                            >
                              <option value="2013"> 2013 </option>
                              <option value="2014"> 2014 </option>
                              <option value="2015"> 2015 </option>
                              <option value="2016"> 2016 </option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className=" grid grid-cols-1 md:grid-cols-3  gap-10 p-6 justify-items-center items-center ">
                        <div className="w-full">
                          <div className="flex justify-start flex-col gap-1 w-full">
                            <div className="font-semibold text-[15px]">
                              School/University
                            </div>
                            <input
                              type="text"
                              name="schoolUniversity"
                              value={element.schoolUniversity}
                              onChange={(e) => handleChangeAddDetails(index, e)}
                              placeholder="School/University"
                              className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                            />
                          </div>
                        </div>

                        <div className="w-full">
                          <div className="flex justify-start flex-col gap-1 w-full">
                            <div className="text-[#000] text-[15px] font-semibold">
                              Passing Year
                            </div>
                            <select
                              name="passingYear"
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              value={element.passingYear}
                              onChange={(e) => handleChangeAddDetails(index, e)}
                            >
                              <option> 2012 </option>
                              <option> 2013 </option>
                              <option> 2014 </option>
                            </select>
                          </div>
                        </div>

                        <div className="w-full">
                          <div className="flex justify-start flex-col gap-1 w-full">
                            <div className="font-semibold text-[15px]">
                              Percentage
                            </div>
                            <input
                              type="text"
                              name="percentage"
                              value={element.percentage}
                              onChange={(e) => handleChangeAddDetails(index, e)}
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
                              Course Name
                            </div>
                            <input
                              type="text"
                              placeholder="Course Name"
                              name="courseNamePs"
                              value={elementPS.courseNamePs}
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
                              Course Type
                            </div>

                            <input
                              type="text"
                              placeholder="Course Name"
                              name="courseTypePs"
                              value={elementPS.courseTypePs}
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
                              Specialization
                            </div>
                            <input
                              type="text"
                              name="specializationPs"
                              value={elementPS.specializationPs}
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
                              Number of Year of Degree
                            </div>
                            <select
                              name="yearOfDegreePs"
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[5px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              value={elementPS.yearOfDegreePs}
                              onChange={(e) =>
                                handleChangePostGraduationDetails(index, e)
                              }
                            >
                              <option value="2013"> 2013 </option>
                              <option value="2014"> 2014 </option>
                              <option value="2015"> 2015 </option>
                              <option value="2016"> 2016 </option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className=" grid grid-cols-1 md:grid-cols-3  gap-10 p-6 justify-items-center items-center ">
                        <div className="w-full">
                          <div className="flex justify-start flex-col gap-1 w-full">
                            <div className="font-semibold text-[15px]">
                              School/University
                            </div>
                            <input
                              type="text"
                              name="schoolUniversityPs"
                              value={elementPS.schoolUniversityPs}
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
                              Passing Year
                            </div>
                            <select
                              name="passingYearPs"
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              value={elementPS.passingYearPs}
                              onChange={(e) =>
                                handleChangePostGraduationDetails(index, e)
                              }
                            >
                              <option> 2012 </option>
                              <option> 2013 </option>
                              <option> 2014 </option>
                            </select>
                          </div>
                        </div>

                        <div className="w-full">
                          <div className="flex justify-start flex-col gap-1 w-full">
                            <div className="font-semibold text-[15px]">
                              Percentage
                            </div>
                            <input
                              type="text"
                              name="percentagePs"
                              value={elementPS.percentagePs}
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
                                Course Type
                              </div>
                              <select
                                name="courseTypeXii"
                                value={state.courseTypeXii}
                                onChange={handleChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              >
                                <option value="Free"> Free </option>
                                <option value="Paid"> Paid </option>
                              </select>
                            </div>
                          </div>
                          <div className="w-full">
                            <div className="flex justify-start flex-col gap-1 w-full">
                              <div className="font-semibold text-[15px]">
                                School/University
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
                                Passing Year
                              </div>
                              <select
                                name="passingYearXii"
                                value={state.passingYearXii}
                                onChange={handleChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              >
                                <option value="2012"> 2012 </option>
                                <option value="2013"> 2013 </option>
                                <option value="2014"> 2014 </option>
                                <option value="2015"> 2015 </option>
                              </select>
                            </div>
                          </div>

                          <div className="w-full">
                            <div className="flex justify-start flex-col gap-1 w-full">
                              <div className="font-semibold text-[15px]">
                                Percentage
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
                                  School/University
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
                                  Passing Year
                                </div>

                                <select
                                  name="passingYearX"
                                  value={state.passingYearX}
                                  onChange={handleChange}
                                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                >
                                  <option value="2012"> 2012 </option>
                                  <option value="2013"> 2013 </option>
                                  <option value="2014"> 2014 </option>
                                  <option value="2015"> 2015 </option>
                                </select>
                              </div>
                            </div>

                            <div className="w-full">
                              <div className="flex justify-start flex-col gap-1 w-full">
                                <div className="font-semibold text-[15px]">
                                  Percentage
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
    </div>
  );
}
