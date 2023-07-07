import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdLocationPin } from "react-icons/md";
import { BiChevronLeft } from "react-icons/bi";
import { HiUsers } from "react-icons/hi";
import { toast } from "react-toastify";
import { getAllCandidatesAPI } from "../../../api/authService";

const BrowseCandidate = () => {
  const [state, setState] = useState({
    experience: "",
    companyName: "",
    category: "",
    location: "",
  });
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const jobData = [
    {
      id: 1,
      logourl: "/assets/images/profile1.png",
      text: "Featured",
      name: "Wanda Montgomery",
      post: "Charted Accountant",
      profile: "View Profile",
      location: "Mumbai, Maharastra",
      cost: "$20k/month",
    },
    {
      id: 2,
      logourl: "/assets/images/profile2.png",
      text: "Featured",
      name: "Wanda Montgomery",
      post: "Charted Accountant",
      profile: "View Profile",
      location: "Mumbai, Maharastra",
      cost: "$20k/month",
    },
    {
      id: 3,
      logourl: "/assets/images/profile3.png",
      text: "Featured",
      name: "Wanda Montgomery",
      post: "Charted Accountant",
      profile: "View Profile",
      location: "Mumbai, Maharastra",
      cost: "$20k/month",
    },
    {
      id: 4,
      logourl: "/assets/images/profile1.png",
      text: "Featured",
      name: "Wanda Montgomery",
      post: "Charted Accountant",
      profile: "View Profile",
      location: "Mumbai, Maharastra",
      cost: "$20k/month",
    },
    {
      id: 5,
      logourl: "/assets/images/profile7.png",
      text: "Featured",
      name: "Wanda Montgomery",
      post: "Charted Accountant",
      profile: "View Profile",
      location: "Mumbai, Maharastra",
      cost: "$20k/month",
    },
    {
      id: 6,
      logourl: "/assets/images/profile5.png",
      text: "Featured",
      name: "Wanda Montgomery",
      post: "Charted Accountant",
      profile: "View Profile",
      location: "Mumbai, Maharastra",
      cost: "$20k/month",
    },
    {
      id: 7,
      logourl: "/assets/images/profile6.png",
      text: "Featured",
      name: "Wanda Montgomery",
      post: "Charted Accountant",
      profile: "View Profile",
      location: "Mumbai, Maharastra",
      cost: "$20k/month",
    },
    {
      id: 8,
      logourl: "/assets/images/profile1.png",
      text: "Featured",
      name: "Wanda Montgomery",
      post: "Charted Accountant",
      profile: "View Profile",
      location: "Mumbai, Maharastra",
      cost: "$20k/month",
    },
  ];

  const [candidateData, setCandidateData] = useState([]);
  const [pageNo, setPageNo] = useState("1");
  const [pageCount, setPageCount] = useState("");
  const [pageSize, setPageSize] = useState("6");
  const [companyName, setCompanyName] = useState("");
  const [candidateId, setCandidateId] = useState("");
  const [categoryId, setCategoryId] = useState();
  const [location, setLocation] = useState("");
  const [employmentType, setEmploymentType] = useState("");

  // Api
  const candidateList = async () => {
    const { data, status, message } = await getAllCandidatesAPI(
      pageSize,
      pageNo,
      companyName,
      candidateId,
      location,
      employmentType,
      categoryId
    );
    if (status) {
      // toast(message);
      setCandidateData(data);
    } else {
      toast(message);
    }
  };

  useEffect(() => {
    candidateList();
  }, []);

  return (
    <>
      <div className="bg-inputcolor py-6">
        <div className="mx-auto max-w-[1150px]">
          <div className="flex items-center mb-4 font-s-medium text-secondary text-lg">
            <BiChevronLeft className="text-3xl" /> Browse Candidates
          </div>

          <div className="bg-[#fff] px-8 rounded-2xl py-6">
            <div className="flex mb-8 items-center justify-between text-[#000] space-x-4  text-xl">
              <div className="flex space-x-2">
                <HiUsers size={40} className="text-secondary " />
                <div>
                  <h6 className="text-2xl descri font-s-medium">
                    {" "}
                    Browse Candidates
                  </h6>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi non quam commodo, dictum justo a, varius nisl.
                  </p>
                </div>
              </div>
              <Link to="/candidate-list">
                <div className="text-secondary underline font-s-medium">
                  View All
                </div>
              </Link>
            </div>

            <hr className="mb-8" />

            <div className="container mx-auto py-10">
              <div className=" ">
                <div className="lg:col-span-5">
                  <div>
                    <div className="grid md:grid-cols-2 grid-cols-1   mx-auto  gap-12 gap-y-10   items-center justify-items-center">
                      {candidateData.map((item, id) => {
                        return (
                          <>
                            <div
                              className="bg-white shadow-md shadow-[#2544EE30] rounded-xl relative mt-6 border border-[#707070] "
                              key={id}
                            >
                              <div className="">
                                <div className="absolute flex bg-white shadow-md shadow-[#2544EE30] rounded-xl -top-10 left-[7.5rem]">
                                  <img
                                    src={item.images[0]}
                                    alt=""
                                    width={100}
                                    height={100}
                                  />
                                </div>
                                <div className="flex flex-col gap-2">
                                  <div className="px-32 mt-7 md:mt-16">
                                    {" "}
                                    <div className="bg-primary mt-6 text-secondary rounded-md font-s-medium text-center px-3 text-sm py-1">
                                      Featured
                                    </div>
                                  </div>

                                  <div className="text-center font-s-medium text-base capitalize">
                                    {" "}
                                    {item.candidateName}
                                  </div>
                                  <div className="text-center capitalize font-s-normal text-sm text-gray-400">
                                    {item.post}
                                  </div>
                                  <Link to="/candidate-detail">
                                    <div className="text-center font-s-bold text-base text-secondary">
                                      View Profile
                                    </div>
                                  </Link>
                                </div>
                                <div className="bg-[#2544EE30] rounded-b-xl py-1 lg:mt-4">
                                  <div className="grid grid-cols-2 gap-2 px-3">
                                    <div className="flex capitalize">
                                      <MdLocationPin />
                                      <div className="text-sm font-s-normal">
                                        {item.city}
                                      </div>
                                      ,
                                      <div className="text-sm font-s-normal">
                                        {item.state}
                                      </div>
                                    </div>

                                    <div className="flex justify-end font-s-normal text-sm">
                                      {item.cost}{" "}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrowseCandidate;
