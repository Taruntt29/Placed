import React, { useEffect, useState } from "react";
import { Country, State, City } from "country-state-city";
import { RiArrowLeftSLine } from "react-icons/ri";
import PhoneInput from "react-phone-number-input";
import { useSelector } from "react-redux";
import { data } from "autoprefixer";
import { getEmployerEditProfileAPI } from "../../../api/authService";
import { toast } from "react-toastify";
const EditCreateProfile = () => {
  const { userDetails } = useSelector((state) => state.flightReducer);

  console.log(userDetails);
  const [state, setState] = useState({
    companyName: "",
    phoneNumber: "",
    email: "",
    website: "",
    establishedIn: "",
    teamSize: "",
    industry: "",
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
    videos: "",
    gstNumber: "",
    panNumber: "",
    image: "",
    gstNumberpdf: "",
    panNumberpdf: "",
  });

  const [profilePic, setProfilePic] = React.useState();
  const [editState, setEditState] = useState(true);
  let mycountry = Country.getAllCountries();

  let mystate = State.getStatesOfCountry(state.country);
  let mycity = City.getCitiesOfState(state.country, state.state);

  console.log(state.state);

  console.log(state.city);
  console.log(mycity);

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const getProfileData = async () => {
    const { data, status, message } = await getEmployerEditProfileAPI(
      userDetails.id
    );
    if (status) {
      console.log(data);

      setState(data);
    } else {
      toast(message);
    }
  };

  useEffect(() => {
    getProfileData();
  }, []);

  return (
    <div className="container mx-auto pt-10 pb-10">
      <div className="flex space-x-2 items-center pb-6 lg:px-0 px-5">
        {" "}
        <RiArrowLeftSLine className="text-secondary w-5 h-5 " />{" "}
        <p className="text-secondary font-s-medium text-base"> Edit Profile </p>{" "}
      </div>
      <div className="bg-inputcolor rounded-md p-5">
        <div className="bg-white rounded-md ">
          <div className="flex items-center space-x-2  px-8 py-4 ">
            <img
              alt="images"
              src="../assets/images/editprofile.png"
              className="w-10 h-15"
            />
            <div>
              <h1 className="text-2xl font-s-medium">Edit your Profile</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                non quam commodo, dictum justo a, varius nisl.
              </p>
            </div>
          </div>
          <hr className="w-full h-[0.10rem] bg-inputcolor" />
          <div className="p-5">
            <div className="bg-white rounded-[15px]">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-6 justify-items-center items-center">
                <div className="w-full">
                  <div className="flex justify-start flex-col space-y-1 w-full">
                    <div className="font-semibold text-[15px]">
                      Company Name
                    </div>
                    <input
                      type="text"
                      placeholder="Enter Company Name"
                      name="companyName"
                      value={state.companyName}
                      disabled={editState}
                      onChange={handleChange}
                      className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex justify-start flex-col space-y-1 w-full phoneparent">
                    <div className="font-semibold text-[15px]">
                      Phone Number
                    </div>
                    <PhoneInput
                      placeholder="Mobile Number"
                      name="phoneNumber"
                      value={state.phoneNumber}
                      disabled={editState}
                      onChange={handleChange}
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
                      disabled={editState}
                      onChange={handleChange}
                      placeholder="Enter Email"
                      className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 px-6 justify-items-center items-center">
                <div className="w-full">
                  <div className="flex justify-start flex-col space-y-1 w-full">
                    <div className="font-semibold text-[15px] ">Website</div>
                    <input
                      type="text"
                      name="website"
                      value={state.website}
                      disabled={editState}
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
                    <input
                      type="text"
                      name="establishedIn"
                      value={state.establishedIn}
                      disabled={editState}
                      onChange={handleChange}
                      placeholder="Enter Establishment Year"
                      className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex justify-start flex-col space-y-1 w-full">
                    <div className="text-[#000] text-[15px] font-semibold">
                      Team Size
                    </div>
                    <select
                      className="bg-[#F5F7F9] h-10 px-3 py-[10px] rounded-[7px] text-sm text-[#000] text-opacity-30"
                      name="teamSize"
                      value={state.teamSize}
                      disabled={editState}
                      onChange={handleChange}
                    >
                      <option value="">Select Team Size</option>
                      <option value="1-10">1-10</option>
                      <option value="20-50">20-50</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 px-6 pt-6 justify-items-center items-center">
                <div className="w-full">
                  <div className="flex justify-start flex-col space-y-1 w-full">
                    <div className="text-[#000] text-[15px] font-semibold">
                      Industry
                    </div>
                    <select
                      className="bg-[#F5F7F9] h-10 px-3 py-[10px] rounded-[7px] text-sm text-[#000] text-opacity-30"
                      value={state.industry}
                      disabled={editState}
                      name="industry"
                      onChange={handleChange}
                    >
                      <option value=" ">Select Industry</option>
                      <option value="Any">Any</option>
                      <option value="IT">IT</option>
                    </select>
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex justify-start flex-col space-y-1 w-full">
                    <div className="text-[#000] text-[15px] font-semibold">
                      Ownership Type
                    </div>
                    <select
                      className="bg-[#F5F7F9] h-10 px-3 py-[10px] rounded-[7px] text-sm text-[#000] text-opacity-30"
                      value={state.ownershipType}
                      name="ownershipType"
                      disabled={editState}
                      onChange={handleChange}
                    >
                      <option value="">Select Ownership Type</option>
                      <option value="1-10">1-10</option>
                      <option value="20-50">20-50</option>
                    </select>
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex justify-start flex-col space-y-1 w-full">
                    <div className="font-semibold text-[15px]">Country</div>
                    <select
                      className="bg-[#F5F7F9] h-10 px-3 py-[10px] rounded-[7px] text-sm text-[#000] text-opacity-30"
                      value={state.country}
                      disabled={editState}
                      onChange={handleChange}
                      name="country"
                    >
                      <option value="">Select Country</option>
                      {mycountry.map((item, index) => {
                        // console.log(item.flag);
                        return (
                          <option value={item.isoCode} key={index}>
                            {item.flag} {item.name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2  gap-4 px-6 pt-6 justify-items-center items-center">
                <div className="w-full  ">
                  <div className="flex justify-start flex-col space-y-1 w-full">
                    <div className="font-semibold text-[15px]">State</div>
                    <select
                      className="bg-[#F5F7F9] h-10 px-3 py-[10px] rounded-[7px] text-sm text-[#000] text-opacity-30"
                      value={state.stateCode}
                      name="state"
                      disabled={editState}
                      onChange={handleChange}
                    >
                      <option value="">Select State</option>
                      {mystate.map((e, index) => {
                        return (
                          <option value={e.name} key={index}>
                            {e.name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
                <div className="w-full ">
                  <div className="flex justify-start flex-col space-y-1 w-full">
                    <div className="font-semibold text-[15px]">City</div>
                    <select
                      className="bg-[#F5F7F9] h-10 px-3 py-[10px] rounded-[7px] text-sm text-[#000] text-opacity-30"
                      value={state.city}
                      name="city"
                      disabled={editState}
                      onChange={handleChange}
                    >
                      <option value="Dummy">Select City</option>

                      {mycity.map((e, index) => {
                        return (
                          <option value={e.name} key={index}>
                            {e.name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1   gap-4 px-6  pt-6 justify-items-center items-center">
                <div className="w-full ">
                  <div className="flex justify-start flex-col space-y-1 w-full">
                    <div className="font-semibold text-[15px]">Address</div>
                    <input
                      type="text"
                      placeholder="Enter your address"
                      name="address"
                      value={state.address}
                      disabled={editState}
                      onChange={handleChange}
                      className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1   gap-4 px-6 pt-6 justify-items-center items-center">
                <div className="w-full ">
                  <div className="flex justify-start flex-col space-y-1 w-full">
                    <div className="font-semibold text-[15px]">Description</div>
                    <textarea
                      placeholder="Write something here"
                      rows="6"
                      name="description"
                      value={state.description}
                      disabled={editState}
                      onChange={handleChange}
                      className="w-full bg-inputcolor resize-none focus:outline-none placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                    />
                  </div>
                </div>
              </div>

              <p className="py-3 px-6 font-s-medium text-lg pt-6">
                Social Network
              </p>
              <div className="bg-black bg-opacity-60 h-[1px]"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-6 justify-items-center items-center">
                <div className="w-full">
                  <div className="flex justify-start flex-col space-y-1 w-full">
                    <div className="font-semibold text-[15px]">LinkedIn</div>
                    <input
                      type="text"
                      placeholder="Enter Linkedin url"
                      name="linkedIn"
                      value={state.linkedIn}
                      disabled={editState}
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
                      disabled={editState}
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
                      disabled={editState}
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
                      disabled={editState}
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
                      disabled={editState}
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
                      disabled={editState}
                      onChange={handleChange}
                      value={state.youtube}
                      className="w-full bg-inputcolor placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className=" flex gap-3 py-2 px-6">
              <div className="">
                <button
                  onClick={() => setEditState(!editState)}
                  className="bg-secondary text-white font-s-medium px-8 py-3 rounded-[7px] text-sm"
                >
                  {editState ? "Edit" : "Update Changes"}
                </button>
              </div>
              <div className="">
                <button className="bg-[#5E5E5E] text-white font-s-medium px-8 py-3 rounded-[7px] text-sm">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditCreateProfile;
