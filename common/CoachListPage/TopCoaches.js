import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { getCoachWhichFilterFromService } from "../../../api/authCandidate";

const TopCoaches = () => {
  const data = [
    {
      id: 1,
      img: "/assets/images/pic-3.png",
      title: "Google Technology company",
      coachname: "Ronald Richards",
      link: "/coach-detail",
      desc: " New Managers, Executives, Career Changers, Relocating New Managers, Executives",
    },
    {
      id: 2,
      img: "/assets/images/pic-3.png",
      title: "Google Technology company",
      coachname: "Ronald Richards",
      link: "/coach-detail",
      desc: " New Managers, Executives, Career Changers, Relocating New Managers, Executives",
    },
    {
      id: 3,
      img: "/assets/images/pic-3.png",
      title: "Google Technology company",
      coachname: "Ronald Richards",
      link: "/coach-detail",
      desc: " New Managers, Executives, Career Changers, Relocating New Managers, Executives",
    },
    {
      id: 4,
      img: "/assets/images/pic-3.png",
      title: "Google Technology company",
      coachname: "Ronald Richards",
      link: "/coach-detail",
      desc: " New Managers, Executives, Career Changers, Relocating New Managers, Executives",
    },
    {
      id: 5,
      img: "/assets/images/pic-3.png",
      title: "Google Technology company",
      coachname: "Ronald Richards",
      link: "/coach-detail",
      desc: " New Managers, Executives, Career Changers, Relocating New  Managers, Executives",
    },
    {
      id: 6,
      img: "/assets/images/pic-3.png",
      title: "Google Technology company",
      coachname: "Ronald Richards",
      link: "/coach-detail",
      desc: " New Managers, Executives, Career Changers, Relocating New Managers, Executives",
    },
  ];
  const [ coachData , setCoachData] = useState([])
  const getCoaches = async () => {
    try {
      const response = await getCoachWhichFilterFromService()
      setCoachData(response.data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCoaches()
  },[])

  return (
    <>
      <div
        className="bg-no-repeat bg-cover  bg-center"
        style={{
          backgroundImage: `url(/assets/images/background.png)`,
        }}
      >
        <div className="py-20">
          <div className="flex flex-col gap-8 md:gap-0 justify-center items-center container mx-auto px-5 pb-10">
            <p className="text-secondary font-s-medium">Coaches</p>
            <div className="font-s-bold text-3xl ">
              {" "}
              Try Connect With Coaches
            </div>
          </div>

          <div className="container mx-auto">
            {" "}
            <div className="grid grid-cols-1 justify-items-center md:grid-cols-3 gap-10 text-center px-5">
              {coachData && coachData.map((item) => (
                <div className="shadow-2xl p-3 rounded-xl border border-secondary bg-inputcolor ">
                  <div className="flex items-center justify-center py-2">
                    {" "}
                    <img alt="CoachImage" src={item?.coachId?.images?.[0]} />
                  </div>
                  <h6 className="text-xl font-bold">{item?.coachId?.coachName}</h6>
                  <div className="flex items-center justify-center py-2">
                    <AiFillStar className="text-yellow-600" />
                    <AiFillStar className="text-yellow-600" />
                    <AiFillStar className="text-yellow-600" />
                    <AiFillStar className="text-yellow-600" />
                    <AiOutlineStar className="text-yellow-600" />
                  </div>

                  <p className="text-xs py-1 text-center">{item?.coachId?.BioData}</p>
                  <Link to={`/coach-detail/${item?.coachId?._id}`}>
                    <button className="px-6 py-1 my-2 text-white bg-secondary rounded-md">
                      View Profile
                    </button>
                  </Link>
                </div>
              ))}
            </div>
            <div className="flex justify-center items-center pt-20">
              <Link to="/coach-list">
                <button className="px-10 py-1.5 text-white bg-secondary rounded-md">
                  See All{" "}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopCoaches;
