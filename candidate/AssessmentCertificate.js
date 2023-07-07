import React, { useState } from "react";

import { TbCertificate } from "react-icons/tb";
import { useSelector } from "react-redux";
import Footer from '../../../components/common/Footer'
import Navbar from '../../../components/common/Navbar'
import { useLocation } from "react-router-dom";
import { getProfiles } from "../../../api/authCandidate";

const AssessmentCertificate = () => {
  const certificate = [
    {
      id: 1,
      name: "UI-UX Designer",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
    },

    {
      id: 2,
      name: "UI-UX Designer",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
    },
    {
      id: 3,
      name: "UI-UX Designer",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
    },
    {
      id: 4,
      name: "UI-UX Designer",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
    },
    {
      id: 5,
      name: "UI-UX Designer",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
    },
  ];

  const { userDetails } = useSelector((state) => state.flightReducer);
  const [recommend, setRecomend] = useState([]);
  const [proData, setProData] = useState([]);

  const location = useLocation();
  console.log(location);
  const percentScore = location?.state?.score;
  console.log(percentScore);
  let array = []
  const getPros = async () => {
    try {
      const res = await getProfiles();
      setProData(res.data);
      
      for (let i = 0; i < res.data.length; i++) {
        
        // console.log("i" , res.data[i].percentage.replace("%",""))
        
        console.log("parseInt(res.data[i].percentage",parseInt(res.data[i].percentage));
            console.log("percentScore",percentScore);
            if(parseInt(res.data[i].percentage)<=percentScore){
              console.log("res.data[i]",res.data[i])
              array.push(res.data[i])
            }
       
      }
      setRecomend(array)
    } catch (error) {
      console.log(error);
    }
  };

  useState(() => {
    getPros();
  }, []);
  return (
    <>
    
    <div className="bg-inputcolor">
      <div className="container mx-auto py-10  ">
        <div className="flex flex-col space-y-10 px-4 md:px-0">
          <div className="bg-white rounded-md py-3 ">
            <hr className="w-full h-[0.10rem] bg-inputcolor" />

            <div className="lg:px-10 px-5 py-4 text-center">
              <div className="flex items-center justify-center">
                <img src="/assets/images/medal.png" />
              </div>
              <h5 className="font-s-medium text-xl py-2">Great Work!</h5>
            </div>

            <hr className="w-full h-[0.10rem] bg-inputcolor" />

            <div className="py-4">
              <h2 className="text-blue-700 text-lg font-s-bold text-center">
                Suggestion after Test
              </h2>
              <h2 className="text-3xl font-s-bold text-center w-[70%] mx-auto">
                According to your assessment test here is some profile
                suggestion for you.
              </h2>
            </div>
            {console.log("array", array)}
            <div>
              {recommend.map((item, index) => {
                return (
                  <div className="px-8  py-5">
                    <div className="border border-secondary bg-secondary/5 p-4 rounded-md">
                      <div className="flex space-x-5">
                        <img
                          src={item.uploadImage}
                          alt="/"
                          className="w-[20%]"
                        />

                        <div className="pt-3">
                          <h4 className="font-s-bold text-xl">
                            {item.profileName}
                          </h4>
                          <h6 className="pt-1 ">{item.description.replace("<p>","").replace("</p>","")}</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <hr className="w-full h-[0.10rem] bg-inputcolor" />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default AssessmentCertificate;
