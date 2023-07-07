import React, { useState, useRef } from "react";
import { useEffect } from "react";
import { Editor } from "react-draft-wysiwyg";
import { BiChevronLeft } from "react-icons/bi";
import { MdMedicalServices } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Select from "react-select";
import { toast } from "react-toastify";
import {
  getAllServices,
  getAllServicesById,
  getGSTandTDSAPI,
  getTaxByCountryAPI,
  postServiceData,
} from "../../../api/coachFunctions";

const AddService = () => {
  const session = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
    { value: "6", label: "6" },
    { value: "7", label: "7" },
    { value: "8", label: "8" },
    { value: "9", label: "9" },
    { value: "10", label: "10" },
    { value: "11", label: "11" },
    { value: "12", label: "12" },
    { value: "13", label: "13" },
    { value: "14", label: "14" },
    { value: "15", label: "15" },
    { value: "16", label: "16" },
    { value: "17", label: "17" },
    { value: "18", label: "18" },
    { value: "19", label: "19" },
    { value: "20", label: "20" },
    { value: "21", label: "21" },
    { value: "22", label: "22" },
    { value: "23", label: "23" },
    { value: "24", label: "24" },
    { value: "25", label: "25" },
    { value: "26", label: "26" },
    { value: "27", label: "27" },
    { value: "28", label: "28" },
    { value: "29", label: "29" },
    { value: "30", label: "30" },
  ];

  const duration = [
    { value: "30 min", label: "30 min" },
    { value: "1 hour", label: "1 hour" },
    { value: "2 hour", label: "2 hour" },
    { value: "3 hour", label: "3 hour" },
    { value: "4 hour", label: "4 hour" },
    { value: "5 hour", label: "5 hour" },
    { value: "6 hour", label: "6 hour" },
    { value: "7 hour", label: "7 hour" },
    { value: "8 hour", label: "8 hour" },
    { value: "9 hour", label: "9 hour" },
    { value: "10 hour", label: "10 hour" },
    { value: "11 hour", label: "11 hour" },
    { value: "12 hour", label: "12 hour" },
    { value: "13 hour", label: "13 hour" },
    { value: "14 hour", label: "14 hour" },
  ];

  const serviceDuration = [
    { value: "30 min", label: "30 min" },
    { value: "1 hour", label: "1 hour" },
    { value: "2 hour", label: "2 hour" },
    { value: "3 hour", label: "3 hour" },
    { value: "4 hour", label: "4 hour" },
    { value: "5 hour", label: "5 hour" },
    { value: "6 hour", label: "6 hour" },
    { value: "7 hour", label: "7 hour" },
    { value: "8 hour", label: "8 hour" },
    { value: "9 hour", label: "9 hour" },
    { value: "10 hour", label: "10 hour" },
    { value: "11 hour", label: "11 hour" },
    { value: "12 hour", label: "12 hour" },
    { value: "13 hour", label: "13 hour" },
    { value: "14 hour", label: "14 hour" },
  ];

  const optionsmedium = [
    { value: "Call", label: "Call" },
    { value: "Video Call", label: "Video Call" },
  ];

  const { userDetails } = useSelector((state) => state.flightReducer);
  console.log("userDetails", userDetails);
  const token = userDetails.token;
  const coachId = userDetails._id;
  const [enterPriceErr, setEnterPriceErr] = useState("");
  const [state, setState] = useState({
    serviceName: "",
    trainingName: "",
    medium: [],
    language: [],
    serviceduration: "",
    NoofSession: "",
    durationofSession: "",
    description: "",
    additionalDetail: "",
    currency: "",
    suggestedPrice: "",
    enterPrice: "",
    platformFee: "",
    gstAmount: "",
    tdsAmount: "",
    withdrawnAmount: "",
    earnedPrice: "",
  });
  const navigate = useNavigate();
  const [servicesData, setServicesData] = useState([]);
  const [globalTax, setGlobalTax] = useState([]);
  const [countryWiseTax, setCountryByTax] = useState([]);
  const getGSTandTDS = async () => {
    const { data, status, message } = await getGSTandTDSAPI();
    if (status) {
      setGlobalTax(data[0]);
      // console.log("getAllSkillData", data);
    } else {
      toast(message);
    }
  };
  const getTaxByCountry = async () => {
    const { data, status, message } = await getTaxByCountryAPI(
      userDetails?.Currentaddress?.country
    );
    if (status) {
      setCountryByTax(data[0]);
      // console.log("getAllSkillData", data);
    } else {
      toast(message);
    }
  };

  const getAllServiceData = async () => {
    const { data, status, message } = await getAllServices();
    if (status) {
      setServicesData(data);

      // console.log("getAllSkillData", data);
    } else {
      toast(message);
    }
  };

  const ServiceArr = servicesData.map((item) => {
    return {
      value: item._id,
      label: item.serviceName,
    };
  });
  useEffect(() => {
    getAllServiceData();
    getGSTandTDS();
    getTaxByCountry();
  }, []);
  // langauge Data
  const langData = require("../../../utils/langauge.json");
  // console.log("langData", langData);
  const langValArr = langData?.map((item) => {
    return { value: item.language, label: item.language };
  });

  const SubmitServiceData = async () => {
    if (userDetails.accountstatus === "Active") {
      if (
        state.serviceName &&
        state.medium &&
        state.language &&
        state.serviceduration &&
        state.NoofSession &&
        state.durationofSession &&
        state.additionalDetail &&
        state.enterPrice
      ) {
        try {
          const response = await postServiceData(
            {
              coachId: coachId,
              serviceId: state.serviceName.value,
              serviceName: state.serviceName.label,
              trainingName: state.trainingName,
              medium: state.medium.map((item) => {
                return item.value;
              }),

              language: state.language.map((item) => {
                return item.value;
              }),
              serviceduration: state.serviceduration.value,
              NoofSession: state.NoofSession.value,
              durationofSession: state.durationofSession.value,
              // description: state.description.blocks[0].text,
              description: state.description,
              additionalDetail: state.additionalDetail,
              // currency: state.currency.value,
              currency: state.currency,
              suggestedPrice: state.suggestedPrice,
              enterPrice: state.enterPrice,
              earnedPrice: JSON.stringify(state.earnedPrice),
              // platformWebsite: state.platformFee,
              platformWebsite: JSON.stringify(state.platformFee),

              gst: JSON.stringify(state.gstAmount),
              tds: JSON.stringify(state.tdsAmount),
              withdrawnAmount: JSON.stringify(state.withdrawnAmount),
            },
            token
          );
          if (response.status) {
            toast(response.message);
            navigate("/coach/otp-service");
          } else {
            toast(response.message);
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        toast("Please fill required fields!!!");
      }
    } else {
      toast("Please Activate your account to add Services!!");
    }
  };

  const gstStatus = userDetails.gSTNumber;
  const [servicesDataById, setServicesDataById] = useState([]);
  const getAllServiceDataById = async () => {
    const { data, status, message } = await getAllServicesById(
      state.serviceName.value
    );
    if (status) {
      setServicesDataById(data[0]);
      setState({
        ...state,
        // serviceName: data[0].serviceName,
        description: data[0].description,
        suggestedPrice: data[0].suggestedPrice,
        currency: data[0].currency,
      });
    } else {
      toast(message);
    }
  };

  useEffect(() => {
    getAllServiceDataById();
  }, [state.serviceName]);

  return (
    <div>
      <div className="bg-inputcolor pb-5 lg:px-0 px-5">
        <div className="py-20 container mx-auto">
      <div className="flex items-center mb-4 font-s-medium text-secondary text-lg">
          <Link to="/coach/my-profile">  <BiChevronLeft className="text-3xl" /> </Link>
          Service
          </div>
        
        <div className="container mx-auto  bg-white mb-10 rounded-md ">
          <div className="flex space-x-4 border-b-2 border-gray-200  px-5 pt-5 pb-5">
            <MdMedicalServices size={32} fill="#2544EE" />
            <div className="descri">
              <h3 className="font-bold  text-lg flex pt-1">Add Service</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                non quam commodo, dictum justo a, varius nisl..
              </p>
            </div>
          </div>
          <hr className="w-full h-[0.10rem] bg-inputcolor" />
          <div className="bg-white rounded-[15px] pb-8">
            <div className=" px-6 py-6 ">
              <div className="w-full py-4">
                <div className="flex justify-start flex-col space-y-1 w-full">
                  <div
                    className="font-semibold text-[15px] text-black transititext-primary  transition duration-150 ease-in-out "
                    
                  >
                    <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">Service Name <span className="text-red-500">*</span></span>
                  </div>
                  <Select
                    options={ServiceArr}
                    value={state.serviceName}
                    // value={serviceNameData}

                    onChange={(e) => {
                      setState({ ...state, serviceName: e });
                    }}
                  />
                </div>
              </div>
              {/* {console.log("sdjhkjs", state.serviceName)} */}
              {state.serviceName.label === "Training" ? (
                <div className="w-full py-4">
                  <div className="flex justify-start flex-col space-y-1 w-full">
                    <div className="font-semibold text-[15px]">
                    <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">  Training Name </span>
                    </div>
                    <input
                      type="text"
                      name="trainingName"
                      placeholder="Enter Training Name"
                      value={state.trainingName}
                      onChange={(e) =>
                        setState({ ...state, trainingName: e.target.value })
                      }
                      className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                    />
                  </div>
                </div>
              ) : null}

              {/* <div className="w-full py-4">
                <div className="flex justify-start flex-col space-y-1 w-full">
                  <div className="font-semibold text-[15px]">Training Name</div>
                  <input
                    type="text"
                    name="trainingName"
                    placeholder="Enter Training Name"
                    value={state.trainingName}
                    onChange={(e) =>
                      setState({ ...state, trainingName: e.target.value })
                    }
                    className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                  />
                </div>
              </div> */}

              <div className="w-full">
                <div className="flex  flex-col gap-1 w-full">
                  <div className="grid lg:grid-cols-2 gap-5">
                    <div className="flex flex-col">
                      <div className="font-semibold text-[15px] px-1">
                      <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">     Medium <span className="text-red-500">*</span> </span>
                      </div>
                      <Select
                        name="medium"
                        className="py-2"
                        isMulti
                        // defaultValue={[optionsmedium[4]]}
                        options={optionsmedium}
                        value={state.medium}
                        onChange={(e) => setState({ ...state, medium: e })}
                      />
                    </div>
                    <div className="flex flex-col">
                      <div className="font-semibold text-[15px] px-1">
                      <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">   Languages <span className="text-red-500">*</span> </span>
                      </div>
                      <Select
                        name="language"
                        className="py-2"
                        isMulti
                        // defaultValue={[optionslanguage[4]]}
                        options={langValArr}
                        value={state.language}
                        onChange={(e) => setState({ ...state, language: e })}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid lg:grid-cols-3 gap-5 py-4">
                <div className="w-full">
                  <div className="flex justify-start flex-col space-y-1 w-full">
                    <div className="font-semibold text-[15px]">
                    <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">     Service Duration <span className="text-red-500">*</span> </span>
                    </div>
                    <Select
                      name="serviceduration"
                      options={serviceDuration}
                      value={state.serviceduration}
                      onChange={(e) =>
                        setState({ ...state, serviceduration: e })
                      }
                    />
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex justify-start flex-col space-y-1 w-full">
                    <div className="font-semibold text-[15px]">
                    <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry."> No. of Session <span className="text-red-500">*</span> </span>
                    </div>
                    <Select
                      name="NoofSession"
                      options={session}
                      value={state.NoofSession}
                      onChange={(e) => setState({ ...state, NoofSession: e })}
                    />
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex justify-start flex-col space-y-1 w-full">
                    <div className="font-semibold text-[15px]">
                    <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry."> Duration of Session{" "}
                      <span className="text-red-500">*</span> </span>
                    </div>
                    <Select
                      name="durationofSession"
                      options={duration}
                      value={state.durationofSession}
                      onChange={(e) =>
                        setState({ ...state, durationofSession: e })
                      }
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-start flex-col space-y-1 w-full py-4">
                <div className="font-semibold text-[15px]"><span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">Description </span></div>
                <div className="bg-inputcolor rounded-md px-2 py-2">
                  {" "}
                  <textarea
                    className="w-full outline-none resize-none overflow-hidden bg-inputcolor"
                    name="description"
                    placeholder="Write something here..."
                    rows={5}
                    value={state.description}
                    disabled
                    onChange={(e) =>
                      setState({ ...state, description: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="w-full py-4">
                <div className="flex justify-start flex-col space-y-1 w-full">
                  <div className="font-semibold text-[15px]">
                  <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">   Additional Detail <span className="text-red-500">*</span> </span>
                  </div>
                  <input
                    type="text"
                    name="additionalDetail"
                    placeholder="Enter Additional Detail"
                    value={state.additionalDetail}
                    onChange={(e) =>
                      setState({ ...state, additionalDetail: e.target.value })
                    }
                    className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                  />
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-5 py-4">
                <div className="w-full">
                  <div className="flex justify-start flex-col space-y-1 w-full">
                    <div className="font-semibold text-[15px]"><span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry."> Currency</span></div>

                    <input
                      type="text"
                      name="currency"
                      disabled
                      value={state.currency}
                      onChange={(e) =>
                        setState({ ...state, currency: e.target.value })
                      }
                      placeholder="Enter Currency"
                      className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex justify-start flex-col space-y-1 w-full">
                    <div className="font-semibold text-[15px]">
                    <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry."> Suggested Price </span>
                    </div>
                    <input
                      type="text"
                      name="suggestedPrice"
                      disabled
                      value={state.suggestedPrice}
                      onChange={(e) =>
                        setState({ ...state, suggestedPrice: e.target.value })
                      }
                      placeholder="Enter Training Name"
                      className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                    />
                  </div>
                </div>
              </div>
              <div className="grid lg:grid-cols-2 gap-5 py-4">
                <div className="w-full">
                  <div className="flex justify-start flex-col space-y-1 w-full">
                    <div className="font-semibold text-[15px]">
                    <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry."> Enter Price <span className="text-red-500">*</span> </span>
                    </div>
                    <input
                      type="text"
                      name="enterPrice"
                      value={state.enterPrice}
                      onChange={(e) => {
                        const platform =
                          (e.target.value *
                            parseFloat(globalTax?.pplacdPlateformFess)) /
                          100;
                        const gst =
                          ((e.target.value - platform) *
                            parseFloat(countryWiseTax.taxpercentage)) /
                          100;
                        const tds =
                          ((e.target.value - platform) *
                            parseFloat(globalTax?.tdsfess)) /
                          100;
                        const wAmount = e.target.value - platform + gst - tds;
                        const earned = e.target.value - platform + gst;
                        if (
                          e.target.value.match("^[0-9]*$") ||
                          e.target.value.length == 0
                        ) {
                          setState({
                            ...state,
                            enterPrice: e.target.value,
                            platformFee: platform,
                            gstAmount: gstStatus ? gst : 0,
                            tdsAmount:
                              userDetails?.Currentaddress?.country === "India"
                                ? tds
                                : 0,
                            withdrawnAmount: wAmount,
                            earnedPrice: earned,
                          });
                        } else {
                          toast("Please Type Valid Number");
                        }
                      }}
                      // onChange={(e) => {
                      //   const gst =
                      //     ((e.target.value - e.target.value / 10) * 18) / 100;
                      //   const tds = (e.target.value - e.target.value / 10) / 10;
                      //   const platform = e.target.value / 10;
                      //   const wAmount = e.target.value - platform + gst - tds;
                      //   const earned = e.target.value - platform + gst;
                      //   if (
                      //     e.target.value.match("^[0-9]*$") ||
                      //     e.target.value.length == 0
                      //   ) {
                      //     toast("Please make sure entries are numbers only.");
                      //   } else {
                      //     setState({
                      //       ...state,
                      //       enterPrice: e.target.value,
                      //       platformFee: platform,
                      //       gstAmount: gstStatus ? gst : 0,
                      //       tdsAmount: tds,
                      //       withdrawnAmount: wAmount,
                      //       earnedPrice: earned,
                      //     });
                      //   }
                      //   // setState({
                      //   //   ...state,
                      //   //   platformFee: e.target.value / 10,
                      //   // });
                      // }}
                      placeholder="Enter Price"
                      className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                    />
                  </div>
                  {/* {enterPriceErr ? enterPriceErr : null} */}
                </div>
                <div className="w-full">
                  <div className="flex justify-start flex-col space-y-1 w-full">
                    <div className="font-semibold text-[15px]">
                    <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry."> Platform Fee{" "}
                      <span>
                        (
                        {globalTax?.pplacdPlateformFess
                          ? globalTax?.pplacdPlateformFess
                          : null}
                        % )
                      </span>
                      </span>
                    </div>
                    <input
                      type="text"
                      name="platformFee"
                      disabled
                      value={state.platformFee}
                      onChange={(e) =>
                        setState({ ...state, platformFee: e.target.value })
                      }
                      placeholder="Platform Fee"
                      className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex justify-start flex-col space-y-1 w-full">
                    <div className="font-semibold text-[15px]">
                    <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry."> Taxes (GST/ Foreign Deduction){" "}</span>
                      <span>
                        (
                        {countryWiseTax?.taxpercentage
                          ? countryWiseTax?.taxpercentage
                          : null}
                        % )
                      </span>
                    </div>
                    <input
                      type="text"
                      name="gstAmount"
                      disabled
                      value={state.gstAmount}
                      onChange={(e) =>
                        setState({ ...state, gstAmount: e.target.value })
                      }
                      placeholder="GST Amount"
                      className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                    />
                    <p className="text-red-400 text-sm">
                      {!gstStatus
                        ? "GST Number doesn't exist!! To add GST number, Kindly go to Edit Profile"
                        : ""}
                    </p>
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex justify-start flex-col space-y-1 w-full">
                    <div className="font-semibold text-[15px]">
                    <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">   Earned price </span>
                    </div>
                    <input
                      type="text"
                      name="earnedPrice"
                      disabled
                      value={state.earnedPrice}
                      onChange={(e) =>
                        setState({ ...state, earnedPrice: e.target.value })
                      }
                      placeholder="Earned Price"
                      className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                    />
                  </div>
                </div>
                {userDetails.Currentaddress.country === "India" ? (
                  <div className="w-full">
                    <div className="flex justify-start flex-col space-y-1 w-full">
                      <div className="font-semibold text-[15px]">
                      <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry."> TDS
                        <span>
                          ({globalTax?.tdsfess ? globalTax?.tdsfess : null}% )
                        </span>
                        </span>
                      </div>
                      <input
                        type="text"
                        name="tdsAmount"
                        disabled
                        value={state.tdsAmount}
                        onChange={(e) =>
                          setState({ ...state, tdsAmount: e.target.value })
                        }
                        placeholder="TDS Amount"
                        className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                      />
                    </div>
                  </div>
                ) : null}
                <div className="w-full">
                  <div className="flex justify-start flex-col space-y-1 w-full">
                    <div className="font-semibold text-[15px]">
                    <span data-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">Withdrawnn Amount </span>
                    </div>
                    <input
                      type="text"
                      name="withdrawnAmount"
                      disabled
                      value={state.withdrawnAmount}
                      onChange={(e) =>
                        setState({ ...state, withdrawnAmount: e.target.value })
                      }
                      placeholder="Withdrawn Amount"
                      className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                    />
                  </div>
                </div>
              </div>

              <div className=" py-2">
                {console.log("accountStatus", userDetails.accountstatus)}
                <button
                  className="text-white bg-secondary px-10 py-2 rounded-md"
                  onClick={SubmitServiceData}
                >
                  Get OTP
                </button>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default AddService;
