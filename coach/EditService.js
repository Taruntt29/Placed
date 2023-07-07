import React, { useState } from "react";
import { useEffect } from "react";
import { BiChevronLeft } from "react-icons/bi";
import { MdMedicalServices } from "react-icons/md";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Select from "react-select";
import { toast } from "react-toastify";
import {
  getAllServices,
  getAllServicesById,
  getServiceDataById,
  postServiceData,
} from "../../../api/coachFunctions";

const EditService = () => {
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

  const optionslanguage = [
    { value: "language1", label: "language1" },
    { value: "language2", label: "language2" },
    { value: "language3", label: "language3" },
    { value: "language4", label: "language4" },
    { value: "language5", label: "language5" },
    { value: "language6", label: "language6" },
  ];

  const { userDetails } = useSelector((state) => state.flightReducer);

  const token = userDetails.token;
  const coachId = userDetails._id;
  const params = useParams();
  const navigate = useNavigate();
  const gstStatus = userDetails.gSTNumber;
  const [serviceNameData, setServiceNameData] = useState([]);
  // Main State
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

  // post Service Data AFter edit
  const SubmitServiceData = async () => {
    try {
      const response = await postServiceData(
        {
          coachId: coachId,
          serviceId: state.serviceId,
          serviceName: state.serviceName,
          trainingName: state.trainingName,
          medium: state.medium.map((item) => {
            return item.value;
          }),
          language: state.language.map((item) => {
            return item.value;
          }),
          serviceduration: state.serviceduration,
          NoofSession: state.NoofSession,
          durationofSession: state.durationofSession,
          description: state.description,
          // description: state.description.blocks[0].text,
          additionalDetail: state.additionalDetail,
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
  };

  // All Service Data get Function
  const getServiceByID = async () => {
    const { data, status, message } = await getServiceDataById(params.id);
    if (status) {
      console.log(data);
      setState(data[0]);
      setState({
        serviceId: data[0].serviceId,
        serviceName: data[0].serviceName,
        trainingName: data[0].trainingName,
        medium: data[0].medium.map((item) => {
          return { value: item, label: item };
        }),
        language: data[0]?.language?.map((item) => {
          return { value: item, label: item };
        }),
        serviceduration: data[0].serviceduration,
        NoofSession: data[0].NoofSession,
        durationofSession: data[0].durationofSession,
        description: data[0].description,
        additionalDetail: data[0].additionalDetail,
        currency: data[0].currency,
        suggestedPrice: data[0].suggestedPrice,
        enterPrice: data[0].enterPrice,
        platformFee: data[0].platformWebsite,
        gstAmount: data[0].gst,
        tdsAmount: data[0].tds,
        withdrawnAmount: data[0].withdrawnAmount,
        earnedPrice: data[0].earnedPrice,
      });
    } else {
      toast(message);
    }
  };

  useEffect(() => {
    getServiceByID();
  }, []);

  // Service Dropdown Data Admin Api Function
  const [servicesData, setServicesData] = useState([]);
  const getAllServiceData = async () => {
    const { data, status, message } = await getAllServices();
    if (status) {
      setServicesData(data);
    } else {
      toast(message);
    }
  };

  useEffect(() => {
    getAllServiceData();
  }, []);

  // Function to Autofill 3 fields after selecting service
  const getAllServiceDataById = async () => {
    const { data, status, message } = await getAllServicesById(
      state.serviceName._id
    );
    if (status) {
      setState({
        ...state,
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
        <div className=" pt-12 lg:px-10 pb-2 ">
          <h3 className="font-bold  text-lg flex pt-1 text-secondary">
            <BiChevronLeft className="" size={32} />
            Service
          </h3>
        </div>
        <div className="container mx-auto  bg-white mb-10 rounded-md ">
          <div className="flex space-x-4 border-b-2 border-gray-200  px-5 pt-5 pb-5">
            <MdMedicalServices size={32} fill="#2544EE" />
            <div className="descri">
              <h3 className="font-bold  text-lg flex pt-1">Edit Service</h3>
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
                  <div className="font-semibold text-[15px]">Service Name</div>
                  {console.log("servicenamename", state.serviceName)}
                  <Select
                    options={servicesData}
                    getOptionLabel={(option) => option.serviceName}
                    getOptionValue={(option) => option._id}
                    value={
                      servicesData.filter((i) => i._id == state.serviceId)?.[0]
                    }
                    onChange={(e) =>
                      setState({
                        ...state,
                        serviceId: e._id,
                        serviceName: e.serviceName,
                      })
                    }
                  />
                </div>
              </div>

              <div className="w-full py-4">
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
              </div>

              <div className="w-full">
                <div className="flex  flex-col gap-1 w-full">
                  <div className="grid lg:grid-cols-2 gap-5">
                    <div className="flex flex-col">
                      <div className="font-semibold text-[15px] px-1">
                        Medium
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
                        Languages
                      </div>
                      <Select
                        name="language"
                        className="py-2"
                        isMulti
                        // defaultValue={[optionslanguage[4]]}
                        options={optionslanguage}
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
                      Service Duration
                    </div>
                    <Select
                      name="serviceduration"
                      options={serviceDuration}
                      value={{
                        value: state.serviceduration,
                        label: state.serviceduration,
                      }}
                      onChange={(e) =>
                        setState({ ...state, serviceduration: e.value })
                      }
                      // value={state.serviceduration}
                      // onChange={(e) =>
                      //   setState({ ...state, serviceduration: e })
                      // }
                    />
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex justify-start flex-col space-y-1 w-full">
                    <div className="font-semibold text-[15px]">
                      No. of Session
                    </div>
                    <Select
                      name="NoofSession"
                      options={session}
                      value={{
                        value: state.NoofSession,
                        label: state.NoofSession,
                      }}
                      onChange={(e) =>
                        setState({ ...state, NoofSession: e.value })
                      }
                      // value={state.NoofSession}
                      // onChange={(e) => setState({ ...state, NoofSession: e })}
                    />
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex justify-start flex-col space-y-1 w-full">
                    <div className="font-semibold text-[15px]">
                      Duration of Session
                    </div>
                    <Select
                      name="durationofSession"
                      options={duration}
                      value={{
                        value: state.durationofSession,
                        label: state.durationofSession,
                      }}
                      onChange={(e) =>
                        setState({ ...state, durationofSession: e.value })
                      }
                      // value={state.durationofSession}
                      // onChange={(e) =>
                      //   setState({ ...state, durationofSession: e })
                      // }
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-start flex-col space-y-1 w-full py-4">
                <div className="font-semibold text-[15px]">Description</div>
                <div className="bg-inputcolor rounded-md px-2 py-2">
                  {" "}
                  {/* <Editor
                    name="description"
                    placeholder="Write Something Here..."
                    editorState={}
                    onEditorStateChange={}
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                    value={state.description}
                    onChange={(e) => setState({ ...state, description: e })}
                    className="w-full outline-none h-96 resize-none overflow-hidden bg-inputcolor"
                    toolbar={{
                      options: ["inline", "textAlign"],
                    }}
                  />{" "} */}
                  {/* <JoditEditor
                    ref={editor}
                    // value={content}
                    tabIndex={1} // tabIndex of textarea
                    onBlur={(newContent) => setContent(newContent)}
                    // onChange={(newContent) => {}}
                    value={state.description}
                    onChange={(e) => setState({ ...state, description: e })}
                  />{" "} */}
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
                    Additional Detail
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
                    <div className="font-semibold text-[15px]">Currency</div>
                    {/* <Select
                      name="currency"
                      options={currency}
                      value={{
                        value: state.currency,
                        label: state.currency,
                      }}
                      onChange={(e) =>
                        setState({ ...state, currency: e.value })
                      }
                      // value={state.currency}
                      // onChange={(e) => setState({ ...state, currency: e })}
                    /> */}
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
                      Suggested Price
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
                    <div className="font-semibold text-[15px]">Enter Price</div>
                    <input
                      type="text"
                      name="enterPrice"
                      value={state.enterPrice}
                      onChange={(e) => {
                        const gst =
                          ((e.target.value - e.target.value / 10) * 18) / 100;
                        const tds = (e.target.value - e.target.value / 10) / 10;
                        const platform = e.target.value / 10;
                        const wAmount = e.target.value - platform + gst - tds;
                        const earned = e.target.value - platform + gst;

                        setState({
                          ...state,
                          enterPrice: e.target.value,
                          platformFee: platform,
                          gstAmount: gstStatus ? gst : 0,
                          tdsAmount: tds,
                          withdrawnAmount: wAmount,
                          earnedPrice: earned,
                        });
                      }}
                      placeholder="Enter Training Name"
                      className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex justify-start flex-col space-y-1 w-full">
                    <div className="font-semibold text-[15px]">
                      Platform Fee(10%)
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
                    <div className="font-semibold text-[15px]">GST(0-18%)</div>
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
                      Earned price
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
                <div className="w-full">
                  <div className="flex justify-start flex-col space-y-1 w-full">
                    <div className="font-semibold text-[15px]">TDS(10%)</div>
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
                <div className="w-full">
                  <div className="flex justify-start flex-col space-y-1 w-full">
                    <div className="font-semibold text-[15px]">
                      Withdrawnn Amount
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
                <button
                  className="text-white bg-secondary px-10 py-2 rounded-md"
                  onClick={SubmitServiceData}
                >
                  Update Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditService;
