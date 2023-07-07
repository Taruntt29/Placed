import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { AiFillDelete } from "react-icons/ai";
import Select from "react-select";
import { useDispatch } from "react-redux";
import { BiChevronUp } from "react-icons/bi";
import { candidateExperienceAPI } from "../../../../api/authService";
import { toast } from "react-toastify";
import { ValueChanged } from "../../../../redux/actions/flightAction";
import Navbar from "../../../common/Navbar";
import { RiArrowLeftSLine } from "react-icons/ri";
import Footer from "../../../common/Footer";
const Experience = () => {
  const navigate = useNavigate();

  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useDispatch();

  const [products, setProducts] = useState("Work Experience");
  console.log("CheckBox True Value", isChecked);

  const [state, setState] = useState({
    workExperience: [],
  });

  const [disable , setDisable] = useState(true)

  const [workExperience, setWorkExperience] = useState({
    experience: "",
    designation: "",
    employmentType: "",
    companyName: "",
    location: "",
    startDate: "",
    endDate: "",
    id: new Date(),
  });

  console.log("Work Expr", workExperience.employmentType);

  const [allExperience, setAllExperience] = React.useState([]);

  const handleDelete = (i) => {
    const updatedData = allExperience.filter((d) => {
      return d.id != i.id;
    });

    setAllExperience(updatedData);
  };
  const [valueRadio, setValueRadio] = useState();
  console.log(valueRadio);

  const handleAddx = async () => {
    setState({
      ...state,
      workExperience: [...state.workExperience, workExperience],
    });

    setArrExp([...arrExp , workExp ])

    try {
      await candidateExperienceAPI(workExp)
      setWorkExp({
        isFresher: fresher,
        designation: "",
        employmentType: "",
        companyName: "",
        location: "",
        description : "",
        currentlyWorking: isChecked,
        startDate: "",
        endDate:""
      })
      
    } catch (error) {
      console.log(error);
    }
  }
  const [fresher , setFresher] = useState(false)

  const [workExp , setWorkExp] = useState({
    isFresher: fresher,
    designation: "",
    employmentType: "",
    companyName: "",
    location: "",
    description : "",
    currentlyWorking: isChecked,
    startDate: "",
    endDate:""
  })

  const [arrExp , setArrExp] = useState([])

  const handleAdd = async () => {

  
   
    try {
      const response = await candidateExperienceAPI(workExp);
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

  return (
    <div>
      <Navbar />
      <div className="mt-[110px]">
        <div className="container mx-auto md:px-5  md:py-20">
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
                          value={workExp.isFresher}
                          id="box1"
                          onChange={() => {setValueRadio("fresher") ; setDisable(true) ; setFresher(true)}}
                        />
                        <label for="box1">I am Fresher</label>
                      </div>
                      <div className="flex space-x-1 py-2">
                        <input
                          type="radio"
                          name="box"
                          value={workExp.isFresher}
                          id="box2"
                          onChange={() => {setValueRadio("experienced"); setDisable(false) ; setFresher(false)}}
                        />
                        <label for="box2">I am Experienced</label>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-6 justify-items-center items-center">
                      <div className="w-full">
                        <div className="flex justify-start flex-col gap-1 w-full">
                          <div className="font-semibold text-[15px]">
                            Designation
                          </div>
                          <input
                            type="text"
                            placeholder="Designation"
                            disabled={disable}
                            name="designation"
                            // disabled={valueRadio === "fresher"}
                            // disabled={disable}
                            value={workExp.designation}
                            onChange={(e) =>
                              {setWorkExperience({
                                ...workExperience,
                                designation: e.target.value,
                              }); setWorkExp({...workExp , designation : e.target.value})}
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
                            // isDisabled={valueRadio === "fresher"}
                            disabled={disable}
                            // value={workExp.employmentType}
                            onChange={(e) =>
                              {setWorkExperience({
                                ...workExperience,
                                employmentType: e.target.value,
                              }) ; setWorkExp({...workExp , employmentType : e.target.value})}
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
                            value={workExp.companyName}
                            // disabled={valueRadio === "fresher"}
                            disabled={disable}
                            onChange={(e) =>
                              {setWorkExperience({
                                ...workExperience,
                                companyName: e.target.value,
                              }); setWorkExp({...workExp , companyName : e.target.value})}
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
                            // disabled={valueRadio === "fresher"}
                            disabled={disable}
                            value={workExp.location}
                            onChange={(e) =>
                             { setWorkExperience({
                                ...workExperience,
                                location: e.target.value,
                              }); setWorkExp({...workExp , location : e.target.value})}
                            }
                            placeholder="Location"
                            className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex px-6">
                      <input
                        type="checkbox"
                        disabled={disable}
                        onChange={(event) =>
                        {  setIsChecked(event.currentTarget.checked)}}
                        
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
                            name="endDate"
                            // disabled={valueRadio === "fresher"}
                            disabled={disable}
                            value={workExp.startDate}
                            onChange={(e) =>
                             { setWorkExperience({
                                ...workExperience,
                                endDate: e.target.value,
                              }); setWorkExp({...workExp , startDate : e.target.value})}
                            }
                            placeholder="endDate"
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
                            name="startDate"
                            // disabled={valueRadio === "fresher"}
                            disabled={disable}
                            value={workExp.endDate}
                            onChange={(e) =>
                             { setWorkExperience({
                                ...workExperience,
                                startDate: e.target.value,
                              }); setWorkExp({...workExp , endDate : e.target.value})}
                            }
                            placeholder="startDate"
                            className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 flex justify-end ">
                    <button
                      onClick={handleAddx}
                      className="bg-secondary text-white font-s-medium px-10 py-2 text-sm "
                    >
                      + Add More
                    </button>
                  </div>

                  <div className="w-full px-4 pt-4">
                    <div className="w-full  rounded-2xl bg-white p-2">
                      {state.workExperience.map((d, i) => (
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
                                            {d.endDate}
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
                                          {d.startDate}
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
                  </div>

                  {/* <Link to="/candidate/my-profile"> */}
                    {" "}
                    <div className=" p-6">
                      <button onClick={handleAdd} className="bg-secondary text-white font-s-medium px-8 py-2  text-sm">
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
      <Footer />
    </div>
  );
};

export default Experience;
