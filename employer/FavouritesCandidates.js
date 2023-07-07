import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdLocationPin } from "react-icons/md";
import { BiChevronLeft } from "react-icons/bi";
import { HiUsers } from "react-icons/hi";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { getfavoriteCandidateAPI } from "../../../api/authService";
import { toast } from "react-toastify";

const FavouritesCandidate = () => {
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

  // get favorite candidate
  const [favoriteData, setFavoriteCandidate] = useState([]);

  const getfavoritecandidate = async () => {
    try {
      const { data, status, message } = await getfavoriteCandidateAPI();
      if (status) {
        console.log("favorite", data);
        setFavoriteCandidate(data);
      } else {
        toast(message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getfavoritecandidate();
  }, []);

  return (
    <>
      <div className="bg-inputcolor py-6">
        <div className="mx-auto max-w-[1150px]">
          <div className="flex items-center mb-4 font-s-medium text-secondary text-lg">
            <BiChevronLeft className="text-3xl " /> Favorite Candidates
          </div>

          <div className="bg-[#fff] px-8 rounded-2xl py-6">
            <div className="flex mb-4 items-center justify-between text-[#000] space-x-4 font-s-medium text-xl">
              <div className="flex space-x-2">
                <HiUsers className="text-secondary " />
                <h6 className="lg:text-2xl text-xl"> Favorite Candidates</h6>
              </div>
            </div>

            <hr className="lg:mb-8 " />

            <div className="container mx-auto py-10">
              <div className=" ">
                <div className="lg:col-span-5">
                  <div>
                    <div className="grid md:grid-cols-3 grid-cols-1   mx-auto  gap-12 gap-y-10   items-center justify-items-center">
                      {favoriteData.map((item, id) => {
                        return (
                          <>
                            <div
                              className="bg-white shadow-md shadow-[#2544EE30] rounded-xl relative mt-6 border border-[#707070] "
                              key={id}
                            >
                              <div className="">
                                <div className="absolute flex bg-white shadow-md shadow-[#2544EE30] rounded-xl -top-10 left-[7.5rem]">
                                  <img
                                    src={item.image}
                                    alt="/"
                                    width={100}
                                    height={100}
                                  />
                                </div>
                                <div className="flex items-end justify-end px-16 pt-3">
                                  {item.isFavorite ? (
                                    <AiFillStar
                                      className="text-secondary"
                                      size={24}
                                    />
                                  ) : (
                                    <AiOutlineStar
                                      className="text-secondary"
                                      size={24}
                                    />
                                  )}
                                </div>
                                <div className="flex flex-col gap-2">
                                  <div className="px-32 mt-4 md:mt-10">
                                    {" "}
                                    <div className="bg-primary text-secondary rounded-md font-s-medium text-center px-3 text-sm py-1">
                                      Featured
                                    </div>{" "}
                                  </div>

                                  <div className="text-center font-s-medium text-base">
                                    {" "}
                                    {item?.candidateId?.candidateName}
                                  </div>
                                  <div className="text-center font-s-normal text-sm text-gray-400">
                                    {item.post}
                                  </div>
                                  <Link to="/candidate-detail">
                                    <div className="text-center font-s-bold text-base text-secondary">
                                      {item.profile}
                                    </div>
                                  </Link>
                                </div>
                                <div className="bg-[#2544EE30] rounded-b-xl py-1 lg:mt-4">
                                  <div className="grid grid-cols-2 gap-2 px-3">
                                    <div className="flex ">
                                      <MdLocationPin />
                                      <div className="text-xs font-s-normal">
                                        {item?.candidateId?.city} ,{" "}
                                        {item?.candidateId?.state}
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

export default FavouritesCandidate;
