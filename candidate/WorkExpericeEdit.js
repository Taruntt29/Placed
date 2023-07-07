import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { ValueChanged } from "../../../redux/actions/flightAction";

import {
  candidateExperienceAPI,
  candidateExperienceArrayAPI,
} from "../../../api/authService";
import { Disclosure } from "@headlessui/react";
import { AiFillDelete } from "react-icons/ai";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import { RiArrowLeftSLine } from "react-icons/ri";
import { candidateProfileGetAPI } from "../../../api/authCandidate";
export default function WorkExpericeEdit() {
  const dispatch = useDispatch();
  const id = useParams();
  const candidateId = id.id;
  // Work Experice
  const [products, setProducts] = useState("Work Experience");
  const [workExperience, setWorkExperience] = useState({
    experience: "",
    designation: "",
    employmentType: "",
    description : "",
    companyName: "",
    location: "",
    startDate: "",
    endDate: "",
    // id: new Date(),
  });

  console.log(workExperience.experience);
  const navigate = useNavigate();
  const [state, setState] = useState({
    workExperience: [],
  });

  const [valueRadio, setValueRadio] = useState();
  console.log(valueRadio);

  const [isChecked, setIsChecked] = useState(true);
  const [workExp , setWorkExp] = useState({})

  const handleAddx = () => {
    // setState({
    //   ...state,
    //   workExperience: [...state.workExperience, workExperience],
    // });
    setWorkExperience({
      experience: "",
      designation: "",
      employmentType: "",
      description : "",
      companyName: "",
      location: "",
      startDate: "",
      endDate: "" } , setState({
      workExperience : [workExperience]
    }))

    if(Object.keys(workExp).length){
      setAllExperience([...allExperience , workExp] , setWorkExp({}))
    }   

  };

  

  const handleAdd = async () => {
    setWorkExperience({
      experience: "",
      designation: "",
      employmentType: "",
      description : "",
      companyName: "",
      location: "",
      startDate: "",
      endDate: "" } , setState({
      workExperience : [workExperience]
    }))

    if(Object.keys(workExp).length){
      setAllExperience([...allExperience , workExp] , setWorkExp({}))
    }   
    console.log(allExperience);
    let arrSubmit = allExperience.map((object) => {
      const { _id , ...rest} = object;
      return rest
    })
    try {
      const response = await candidateExperienceArrayAPI(arrSubmit);

      if (response.code === 200) {
        toast(response.message);
        console.log(response.data);
        dispatch(ValueChanged("userDetails", response.data));
        navigate(`/candidate/my-profile`);
      } else {
        toast(response.message);
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const [allExperience, setAllExperience] = React.useState([]);

  const handleDelete = (i) => {
    const updatedData = allExperience.filter((d) => {
      return d.id != i.id;
    });

    setAllExperience({});
  };

  let workExArray = [];

  const GetCandidateProfile = async () => {
    try {
      const response = await candidateProfileGetAPI(candidateId);
      const ExpericeData = response.data;
      console.log("this is workExp array", response.data.workExperience);
      setAllExperience(
        response.data.workExperience,
        (workExArray = allExperience)
      );
      setWorkExperience({
        designation: ExpericeData.workExperience[0].designation,
        employmentType: ExpericeData.workExperience[0].employmentType,
        companyName: ExpericeData.workExperience[0].companyName,
        location: ExpericeData.workExperience[0].location,
        description : ExpericeData.workExperience[0].description,
        startDate: ExpericeData.workExperience[0].startDate,
        endDate: ExpericeData.workExperience[0].endDate,
      });
      console.log("arr", workExArray);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetCandidateProfile();
  }, []);

  return (
    <div>
      <div className="container mx-auto md:px-5  md:py-20">
        <div className="flex space-x-2 items-center pb-6 lg:px-0 px-5">
          {" "}
          <RiArrowLeftSLine className="text-secondary w-5 h-5 " />{" "}
          <p className="text-secondary font-s-medium text-base">
            {" "}
            Edit Profile{" "}
          </p>{" "}
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

        <div>
          <div>
            <div className="bg-[#F5F7F9] md:rounded-[15px] p-6 flex flex-col justify-start w-full gap-6">
              <div className="bg-white rounded-[15px]">
                <div className="flex items-center justify-between md:pr-3">
                  <p className="py-3 px-6 font-s-medium lg:text-lg text-base">
                    Work Experience
                  </p>
                </div>
                <div className="bg-black bg-opacity-60 h-[1px]"></div>
                <div>
                  <div className="flex justify-end pt-6 px-4 "></div>
                </div>
                <div className="">
                  {}
                  <div className="px-8 flex space-x-8">
                    {" "}
                    <div className="flex space-x-1 py-2">
                      <input
                        type="radio"
                        name="box"
                        value={workExperience.experience}
                        id="box1"
                        onChange={() =>{ setValueRadio("fresher");
                        setAllExperience((prevState) => {
                          const newState = prevState.map(
                            (obj, index) => {
                             
                                return {
                                  ...obj,
                                  isFresher: true,
                                };
                           
                            }
                          );

                          return newState;
                        });
                      }}
                      />
                      <label for="box1">I am Fresher</label>
                    </div>
                    <div className="flex space-x-1 py-2">
                      <input
                        type="radio"
                        name="box"
                        value={workExperience.experience}
                        id="box2"
                        checked
                        onChange={() =>{ setValueRadio("experience");
                        setAllExperience((prevState) => {
                          const newState = prevState.map(
                            (obj, index) => {
                             
                                return {
                                  ...obj,
                                  isFresher: false,
                                };
                           
                            }
                          );

                          return newState;
                        });
                      }}
                      />
                      <label for="box2">I am Experience</label>
                    </div>
                  </div>

                  {allExperience?.map((d, i) => (
                    <div key={i}>
                      <div className="p-6 flex justify-end ">
                        <button onClick={() => {
                          setAllExperience(allExperience => {return allExperience.filter((item,index) => index !== i)})
                        }} className="bg-secondary text-white font-s-medium px-10 py-2 text-sm ">
                          -
                        </button>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-6 justify-items-center items-center mt-10">
                        <div className="w-full">
                          <div className="flex justify-start flex-col gap-1 w-full">
                            <div className="font-semibold text-[15px]">
                              Designation
                            </div>
                            <input
                              type="text"
                              placeholder="Designation"
                              name="designation"
                              disabled={valueRadio === "fresher"}
                              value={d.designation}
                              onChange={(e) => {
                                setWorkExperience({
                                  ...workExperience,
                                  designation: e.target.value,
                                });

                                setAllExperience((prevState) => {
                                  const newState = prevState.map(
                                    (obj, index) => {
                                      if (index === i) {
                                        return {
                                          ...obj,
                                          designation: e.target.value,
                                        };
                                      } else {
                                        return obj;
                                      }
                                    }
                                  );

                                  return newState;
                                });
                              }}
                              className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                            />
                          </div>
                        </div>
                        <div className="w-full">
                          <div className="flex justify-start flex-col gap-1 w-full">
                            <div className="font-semibold text-[15px]">
                              Employment Type
                            </div>
                            <select
                              name="employmentType"
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[5px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              isDisabled={valueRadio === "fresher"}
                              value={d.employmentType}
                              onChange={(e) =>{
                                setWorkExperience({
                                  ...workExperience,
                                  employmentType: e.target.value,
                                });
                                setAllExperience((prevState) => {
                                  const newState = prevState.map(
                                    (obj, index) => {
                                      if (index === i) {
                                        return {
                                          ...obj,
                                          employmentType: e.target.value,
                                        };
                                      } else {
                                        return obj;
                                      }
                                    }
                                  );

                                  return newState;
                                });
                              }
                              }
                            >
                              <option value="">
                              {" "}
                              {" "}
                            </option>
                            <option value="Full-Time">
                              {" "}
                              Full-Time{" "}
                            </option>
                            <option value="Part-Time">
                              {" "}
                              Part-Time{" "}
                            </option>
                            <option value="Contractor">
                              {" "}
                              Contractor{" "}
                            </option>
                            <option value="Freelance">
                              {" "}
                              Freelance{" "}
                            </option>
                            <option value="Internship">
                              {" "}
                              Internship{" "}
                            </option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-6 justify-items-center items-center">
                        <div className="w-full">
                          <div className="flex justify-start flex-col gap-1 w-full">
                            <div className="font-semibold text-[15px]">
                              Company Name{" "}
                            </div>
                            <input
                              type="text"
                              placeholder="Company Name "
                              name="companyName"
                              value={d.companyName}
                              disabled={valueRadio === "fresher"}
                              onChange={(e) =>{
                                setWorkExperience({
                                  ...workExperience,
                                  companyName: e.target.value,
                                });
                                setAllExperience((prevState) => {
                                  const newState = prevState.map(
                                    (obj, index) => {
                                      if (index === i) {
                                        return {
                                          ...obj,
                                          companyName: e.target.value,
                                        };
                                      } else {
                                        return obj;
                                      }
                                    }
                                  );

                                  return newState;
                                });
                              }
                              }
                              className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                            />
                          </div>
                        </div>
                        <div className="w-full">
                          <div className="flex justify-start flex-col gap-1 w-full">
                            <div className="font-semibold text-[15px]">
                              Location
                            </div>
                            <input
                              type="text"
                              name="location"
                              disabled={valueRadio === "fresher"}
                              value={d.location}
                              onChange={(e) =>{
                                setWorkExperience({
                                  ...workExperience,
                                  location: e.target.value,
                                });
                                setAllExperience((prevState) => {
                                  const newState = prevState.map(
                                    (obj, index) => {
                                      if (index === i) {
                                        return {
                                          ...obj,
                                          location: e.target.value,
                                        };
                                      } else {
                                        return obj;
                                      }
                                    }
                                  );

                                  return newState;
                                });
                              }
                              }
                              placeholder="Location"
                              className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-6 justify-items-center items-center">
                        <div className="w-full">
                          <div className="flex justify-start flex-col gap-1 w-full">
                            <div className="font-semibold text-[15px]">
                              Description{" "}
                            </div>
                            <input
                              type="text"
                              placeholder="Description"
                              name="description"
                              value={d.description}
                              disabled={valueRadio === "fresher"}
                              onChange={(e) =>{
                                setWorkExperience({
                                  ...workExperience,
                                  description: e.target.value,
                                });
                                setAllExperience((prevState) => {
                                  const newState = prevState.map(
                                    (obj, index) => {
                                      if (index === i) {
                                        return {
                                          ...obj,
                                          description: e.target.value,
                                        };
                                      } else {
                                        return obj;
                                      }
                                    }
                                  );

                                  return newState;
                                });
                              }
                              }
                              className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                            />
                          </div>
                        </div>
                       
                      </div>

                      <div className="flex px-6">
                        <input
                          type="checkbox"
                          onChange={(event) =>{
                            setIsChecked(event.currentTarget.checked ,
                            setAllExperience((prevState) => {
                              const newState = prevState.map(
                                (obj, index) => {
                                  if (index === i) {
                                    return {
                                      ...obj,
                                      currentlyWorking: isChecked
                                    };
                                  } else {
                                    return obj;
                                  }
                                }
                              );

                              return newState;
                            }));
                          }
                          }
                          checked={isChecked}
                        />
                        <p className="py-3 px-3 font-s-regular  text-base">
                          I am currently working in this role
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 justify-items-center items-center">
                        <div className="flex justify-start flex-col gap-1 w-full">
                          <div className="font-semibold text-[15px]">
                            Start Date{" "}
                          </div>
                          <div className="grid grid-cols-1 gap-3">
                            <input
                              type="date"
                              name="startDate"
                              disabled={valueRadio === "fresher"}
                              value={d.startDate}
                              onChange={(e) =>{
                                setWorkExperience({
                                  ...workExperience,
                                  startDate: e.target.value,
                                });
                                setAllExperience((prevState) => {
                                  const newState = prevState.map(
                                    (obj, index) => {
                                      if (index === i) {
                                        return {
                                          ...obj,
                                          startDate: e.target.value,
                                        };
                                      } else {
                                        return obj;
                                      }
                                    }
                                  );

                                  return newState;
                                });
                              }
                              }
                              placeholder="startDate"
                              className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                            />
                          </div>
                        </div>

                        <div className="flex justify-start flex-col gap-1 w-full">
                          <div className="font-semibold text-[15px]">
                            End Date{" "}
                          </div>

                          <div className="grid grid-cols-1 gap-3">
                            <input
                              type="date"
                              name="endDate"
                              disabled={valueRadio === "fresher"}
                              value={d.endDate}
                              onChange={(e) =>{
                                setWorkExperience({
                                  ...workExperience,
                                  endDate: e.target.value,
                                });
                                setAllExperience((prevState) => {
                                  const newState = prevState.map(
                                    (obj, index) => {
                                      if (index === i) {
                                        return {
                                          ...obj,
                                          endDate: e.target.value,
                                        };
                                      } else {
                                        return obj;
                                      }
                                    }
                                  );

                                  return newState;
                                });
                              }
                              }
                              placeholder="endDate"
                              className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {state.workExperience?.map((d, i) => (
                  <>
                    <div className="p-6 flex justify-end ">
                      <button className="bg-secondary text-white font-s-medium px-10 py-2 text-sm ">
                        -
                      </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-6 justify-items-center items-center mt-10">
                      <div className="w-full">
                        <div className="flex justify-start flex-col gap-1 w-full">
                          <div className="font-semibold text-[15px]">
                            Designation
                          </div>
                          <input
                            type="text"
                            placeholder="Designation"
                            name="designation"
                            disabled={valueRadio === "fresher"}
                            value={workExp.designation}
                            onChange={(e) =>
                             { setWorkExperience({
                                ...workExperience,
                                designation: e.target.value,
                              });
                              setWorkExp({...workExp , designation:e.target.value })
                            }
                            }
                            className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                          />
                        </div>
                      </div>
                      <div className="w-full">
                        <div className="flex justify-start flex-col gap-1 w-full">
                          <div className="font-semibold text-[15px]">
                            Employment Type
                          </div>
                          <select
                            name="employmentType"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[5px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            isDisabled={valueRadio === "fresher"}
                            value={workExp.employmentType}
                            onChange={(e) =>
                              {setWorkExperience({
                                ...workExperience,
                                employmentType: e.target.value,
                              });
                              setWorkExp({...workExp , employmentType : e.target.value})
                            }
                            }
                          >
                            <option value="">
                              {" "}
                              {" "}
                            </option>
                            <option value="Full-Time">
                              {" "}
                              Full-Time{" "}
                            </option>
                            <option value="Part-Time">
                              {" "}
                              Part-Time{" "}
                            </option>
                            <option value="Contractor">
                              {" "}
                              Contractor{" "}
                            </option>
                            <option value="Freelance">
                              {" "}
                              Freelance{" "}
                            </option>
                            <option value="Internship">
                              {" "}
                              Internship{" "}
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-6 justify-items-center items-center">
                      <div className="w-full">
                        <div className="flex justify-start flex-col gap-1 w-full">
                          <div className="font-semibold text-[15px]">
                            Company Name{" "}
                          </div>
                          <input
                            type="text"
                            placeholder="Company Name "
                            name="companyName"d
                            value={workExp.companyName}
                            disabled={valueRadio === "fresher"}
                            onChange={(e) =>
                             { setWorkExperience({
                                ...workExperience,
                                companyName: e.target.value,
                              });
                              setWorkExp({...workExp , companyName : e.target.value })
                            }
                            }
                            className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                          />
                        </div>
                      </div>
                      <div className="w-full">
                        <div className="flex justify-start flex-col gap-1 w-full">
                          <div className="font-semibold text-[15px]">
                            Location
                          </div>
                          <input
                            type="text"
                            name="location"
                            disabled={valueRadio === "fresher"}
                            value={workExp.location}
                            onChange={(e) =>
                             { setWorkExperience({
                                ...workExperience,
                                location: e.target.value,
                              });
                              setWorkExp({...workExp , location : e.target.value })
                            }
                            }
                            placeholder="Location"
                            className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                          />
                        </div>
                      </div>
                    </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-6 justify-items-center items-center">
                        <div className="w-full">
                          <div className="flex justify-start flex-col gap-1 w-full">
                            <div className="font-semibold text-[15px]">
                              Description{" "}
                            </div>
                            <input
                              type="text"
                              placeholder="Description"
                              name="description"
                              value={workExp.description}
                              disabled={valueRadio === "fresher"}
                              onChange={(e) =>{
                                setWorkExperience({
                                  ...workExperience,
                                  description: e.target.value,
                                });
                                setAllExperience((prevState) => {
                                  const newState = prevState.map(
                                    (obj, index) => {
                                      if (index === i) {
                                        return {
                                          ...obj,
                                          description: e.target.value,
                                        };
                                      } else {
                                        return obj;
                                      }
                                    }
                                  );

                                  return newState;
                                });
                              }
                              }
                              className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                            />
                          </div>
                        </div>
                       
                      </div>

                    <div className="flex px-6">
                      <input
                        type="checkbox"
                        onChange={(event) =>
                          {setIsChecked(event.currentTarget.checked);
                            setWorkExp({...workExp , currentlyWorking : !event.target.checked})
                          }
                        }
                        checked={workExp.currentlyWorking}
                      />
                      <p className="py-3 px-3 font-s-regular  text-base">
                        I am currently working in this role
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 justify-items-center items-center">
                      <div className="flex justify-start flex-col gap-1 w-full">
                        <div className="font-semibold text-[15px]">
                          Start Date{" "}
                        </div>
                        <div className="grid grid-cols-1 gap-3">
                          <input
                            type="date"
                            name="startDate"
                            disabled={valueRadio === "fresher"}
                            value={workExp.startDate}
                            onChange={(e) =>
                              setWorkExperience({
                                ...workExperience,
                                startDate: e.target.value,
                              })
                            }
                            placeholder="startDate"
                            className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                          />
                        </div>
                      </div>

                      <div className="flex justify-start flex-col gap-1 w-full">
                        <div className="font-semibold text-[15px]">
                          End Date{" "}
                        </div>

                        <div className="grid grid-cols-1 gap-3">
                          <input
                            type="date"
                            name="endDate"
                            disabled={valueRadio === "fresher"}
                            value={workExp.endDate}
                            onChange={(e) =>
                             { setWorkExperience({
                                ...workExperience,
                                endDate: e.target.value,
                              });
                              setWorkExp({...workExp , endDate : e.target.value})
                            }
                            }
                            placeholder="endDate"
                            className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                          />
                        </div>
                      </div>
                    </div>
                  </>
                ))}
                {/* <div className="w-full px-4 pt-4">
                <div className="w-full  rounded-2xl bg-white p-2">
                  {state.workExperience?.map((d, i) => (
                    <Disclosure>
                      {({ open }) => (
                        <>
                          <div>
                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-[#2f62dd] px-4 py-2 text-left text-sm font-medium text-white focus:outline-none focus-visible:ring focus-visible:[#2f62dd] focus-visible:ring-opacity-75 mt-5">
                              <span>Experience</span>
                              <BiChevronUp
                                className={`${
                                  open ? "rotate-180 transform" : ""
                                } h-5 w-5 text-white`}
                              />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 rounded-xl bg-gray-100">
                              <div className="">
                                <div className="ml-5 p-1">
                                  <div
                                    onClick={() => handleDelete(d)}
                                    className="flex justify-end p-3 "
                                  >
                                    <AiFillDelete
                                      onClick={() => {
                                        const newState =
                                          state.workExperience.filter(
                                            (obj, ind) => ind !== i
                                          );

                                        setState({
                                          ...state,
                                          workExperience: newState,
                                        });
                                      }}
                                      className="text-[#ca5c34] text-base cursor-pointer"
                                    />
                                  </div>
                                </div>
                                <div className="grid grid-cols-2 gap-5 ">
                                  <div className="mb-3 flex justify-left gap-3 mt-5 ml-5">
                                    <div className="text-black textaccordian1 text-lg">
                                      {" "}
                                      Designation :{" "}
                                    </div>

                                    <div className="text-black ml-3 text-lg">
                                      {" "}
                                      {d.designation}{" "}
                                    </div>
                                  </div>
                                  <div className="mb-3 flex justify-left gap-3 mt-5 ml-4">
                                    <div className="text-black textaccordian text-lg ">
                                      Employment Type :
                                    </div>

                                    <div>
                                      <div className="text-black ml-3 text-lg">
                                        {" "}
                                        {d.employmentType}{" "}
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="grid grid-cols-2 gap-5 ">
                                  <div className="mb-3 flex justify-left gap-3 mt-5 ml-5">
                                    <div className="text-black textaccordian1 text-lg">
                                      {" "}
                                      Company Name :{" "}
                                    </div>

                                    <div className="text-black ml-3 text-lg">
                                      {" "}
                                      {d.companyName}{" "}
                                    </div>
                                  </div>
                                  <div className="mb-3 flex justify-left gap-3 mt-5 ml-4">
                                    <div className="text-black textaccordian text-lg ">
                                      Location :
                                    </div>

                                    <div>
                                      <div className="text-black ml-3 text-lg">
                                        {" "}
                                        {d.location}{" "}
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="grid grid-cols-2 gap-5 ">
                                  <div className="mb-3 flex justify-left gap-3 mt-5 ml-4">
                                    <div className="text-black textaccordian text-lg ">
                                      Start Date :
                                    </div>

                                    <div>
                                      <div className="text-black ml-3 text-lg">
                                        {" "}
                                        {d.startDate}
                                      </div>
                                    </div>
                                  </div>
                                  <div className="mb-3 flex justify-left gap-3 mt-5 ml-5">
                                    <div className="text-black textaccordian1 text-lg">
                                      {" "}
                                      End Date :{" "}
                                    </div>

                                    <div className="text-black ml-3 text-lg">
                                      {" "}
                                      {d.endDate}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Disclosure.Panel>
                          </div>
                        </>
                      )}
                    </Disclosure>
                  ))}
                </div>
              </div> */}
                {/* <Link to="/candidate/my-profile"> */}{" "}
                <div className="p-6 flex justify-end ">
                  <button
                    onClick={handleAddx}
                    className="bg-secondary text-white font-s-medium px-10 py-2 text-sm "
                  >
                    + Add More
                  </button>
                </div>
                <div className=" p-6">
                  <button
                    onClick={handleAdd}
                    className="bg-secondary text-white font-s-medium px-8 py-2  text-sm"
                  >
                    Create Profile
                  </button>
                </div>
                {/* </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
