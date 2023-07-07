import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { getAllCoachDataApi } from "../../api/publicFunctions";
import { toast } from "react-toastify";

const RecommendCoaches = () => {
  const [coachData, setCoachData] = useState([]);
  const getAllCoachData = async () => {
    const { data, status, message } = await getAllCoachDataApi();
    if (status) {
      setCoachData(data);
      console.log("coach data", data);
    } else {
      toast(message);
    }
  };
  const navigate = useNavigate();
  useEffect(() => {
    getAllCoachData();
  }, []);
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
  ];
  return (
    <div>
      {" "}
      <div className="container mx-auto">
        {" "}
        <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-4 gap-5 text-center lg:px-0 px-5">
          {coachData.slice(0, 4).map((item) => (
            <div className="shadow-xl px-1 py-2 rounded-xl border border-secondary bg-inputcolor ">
              <div className="flex items-center justify-center py-2">
                {" "}
                <img alt="CoachImage" src={item.images} className="h-[75px] w-[75px]"/>
              </div>
              <h6 className="text-xl font-bold">{item.fullName}</h6>
              <div className="flex items-center justify-center py-2">
                <AiFillStar className="text-yellow-600" />
                <AiFillStar className="text-yellow-600" />
                <AiFillStar className="text-yellow-600" />
                <AiFillStar className="text-yellow-600" />
                <AiOutlineStar className="text-yellow-600" />
              </div>

              <p className="text-xs py-1 text-center">
                {item?.specialities?.map((item) => {
                  return item;
                })}
                <br />
                {item?.siklls?.map((item) => {
                  return item;
                })}
              </p>
              {console.log("sjdkshdk", item._id)}
              {/* <Link to={item.link}> */}
              <button
                className="px-6 py-1 my-2 text-white bg-secondary rounded-md"
                onClick={() => {
                  navigate(`/coach-detail/${item._id}`);
                }}
              >
                View Profile
              </button>

              {/* </Link> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecommendCoaches;
