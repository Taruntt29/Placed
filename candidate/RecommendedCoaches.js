import React from "react";
import { Link } from "react-router-dom";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BiChevronLeft } from "react-icons/bi";
import { HiUsers } from "react-icons/hi";

const RecommendedCoaches = () => {
  const data = [
    {
      id: 1,
      img: "/assets/images/pic-3.png",
      title: "Google Technology company",
      coachname: "Ronald Richards",
      desc: " New Managers, Executives, Career Changers, Relocating New Managers, Executives",
      link: "/coach-detail",
    },
    {
      id: 2,
      img: "/assets/images/pic-3.png",
      title: "Google Technology company",
      coachname: "Ronald Richards",
      desc: " New Managers, Executives, Career Changers, Relocating New Managers, Executives",
      link: "/coach-detail",
    },
    {
      id: 3,
      img: "/assets/images/pic-3.png",
      title: "Google Technology company",
      coachname: "Ronald Richards",
      desc: " New Managers, Executives, Career Changers, Relocating New Managers, Executives",
      link: "/coach-detail",
    },
    {
      id: 4,
      img: "/assets/images/pic-3.png",
      title: "Google Technology company",
      coachname: "Ronald Richards",
      desc: " New Managers, Executives, Career Changers, Relocating New Managers, Executives",
      link: "/coach-detail",
    },
    {
      id: 5,
      img: "/assets/images/pic-3.png",
      title: "Google Technology company",
      coachname: "Ronald Richards",
      desc: " New Managers, Executives, Career Changers, Relocating New Managers, Executives",
      link: "/coach-detail",
    },
    {
      id: 6,
      img: "/assets/images/pic-3.png",
      title: "Google Technology company",
      coachname: "Ronald Richards",
      desc: " New Managers, Executives, Career Changers, Relocating New Managers, Executives",
      link: "/coach-detail",
    },
    {
      id: 7,
      img: "/assets/images/pic-3.png",
      title: "Google Technology company",
      coachname: "Ronald Richards",
      desc: " New Managers, Executives, Career Changers, Relocating New Managers, Executives",
      link: "/coach-detail",
    },
    {
      id: 8,
      img: "/assets/images/pic-3.png",
      title: "Google Technology company",
      coachname: "Ronald Richards",
      desc: " New Managers, Executives, Career Changers, Relocating New Managers, Executives",
      link: "/coach-detail",
    },
    {
      id: 9,
      img: "/assets/images/pic-3.png",
      title: "Google Technology company",
      coachname: "Ronald Richards",
      desc: " New Managers, Executives, Career Changers, Relocating New Managers, Executives",
      link: "/coach-detail",
    },
  ];

  return (
    <>
      <div className="bg-inputcolor py-14 ">
        <div className="mx-auto max-w-[1150px]">
          <div className="flex items-center mb-4 font-s-medium text-secondary text-lg">
            <BiChevronLeft className="text-3xl" /> Search Coach
          </div>

          <div className="bg-[#fff] px-8 rounded-2xl py-6">
            <div className="flex mb-8 items-center justify-between text-[#000] space-x-4  text-xl">
              <div className="flex space-x-2">
                <HiUsers size={32} className="text-secondary " />
               <div className="descri"> <h6 className="text-2xl font-s-medium"> Recommended Coches</h6>
               <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non quam commodo, dictum justo a, varius nisl.</p>
               </div>
              </div>
              <Link to="/coach-list">
                <div className="text-secondary underline font-s-medium">
                  View All
                </div>
              </Link>
            </div>

            <hr className="mb-4" />

            <div className="container mx-auto py-5">
              <div className="container mx-auto">
                {" "}
                <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 gap-6 text-center lg:px-0 px-5">
                  {data.map((item) => (
                    <div className="shadow-xl px-1 py-2 rounded-xl border border-secondary bg-inputcolor ">
                      <div className="flex items-center justify-center py-2">
                        {" "}
                        <img alt="CoachImage" src={item.img} />
                      </div>
                      <h6 className="text-xl font-bold">{item.coachname}</h6>
                      <div className="flex items-center justify-center py-2">
                        <AiFillStar className="text-yellow-600" />
                        <AiFillStar className="text-yellow-600" />
                        <AiFillStar className="text-yellow-600" />
                        <AiFillStar className="text-yellow-600" />
                        <AiOutlineStar className="text-yellow-600" />
                      </div>

                      <p className="text-xs py-1 text-center">{item.desc}</p>
                      <Link to={item.link}>
                        <button className="px-6 py-1 my-2 text-white bg-secondary rounded-md">
                          View Profile
                        </button>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecommendedCoaches;
