import React from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import Navbar from "../common/Navbar";
import JobSearch from "./JobSearch";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Banner = () => {
  const settings = {
    className: "center",
    slidesToShow: 1,
    focusOnSelect: true,
    dots: false,
    infinite: true,
    arrows: false,
    loop: true,
    autoplay: true,
    speed: 2000,

    lazyLoad: true,
    accessibility: true,
    cssEase: "ease-out",
    swipeToSlide: true,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,

          speed: 4000,
        },
      },
    ],
  };

  const clientsData = [
    {
      id: 1,
      bgimage: "/assets/images/herosection1.png",
      textone: "Find work that's",
      texttwo: "Worth it.",
      para: "  Make a career match where the people, perks and values align with your needs.",
      button: "Build Resume",
    },
    {
      id: 2,
      bgimage: "/assets/images/herosection2.png",
      textone: "Find work that's",
      texttwo: "Worth it.",
      para: "  Make a career match where the people, perks and values align with your needs.",
      button: "Build Resume",
    },
    {
      id: 3,
      bgimage: "/assets/images/herosection3.png",
      textone: "Find work that's",
      texttwo: "Worth it.",
      para: "  Make a career match where the people, perks and values align with your needs.",
      button: "Build Resume",
    },
  ];

  return (
    <div>
      <div className="pb-20 relative ">
        <div className="">
          <Navbar />
        </div>
       
        <Slider {...settings} className=" ">
          {clientsData.map((item) => (
            <>
              <div
                className="w-full flex items-center relative lg:h-[85vh] h-[60vh] bg-center bg-no-repeat bg-cover rounded-sm  z-0"
                style={{
                  backgroundImage: `url("${item.bgimage}")`,
                }}
              >
                <div className="grid lg:grid-cols-12 px-3 lg:pt-20  container mx-auto  ">
                  <div className=" col-span-8  ">
                    <div className="font-s-bold lg:text-5xl text-3xl py-3 ">
                      {item.textone}
                      <br />
                      <span className="text-secondary lg:text-6xl text-4xl underline font-s-bold lg:mt-0 mt-3 ">
                        {item.texttwo}
                      </span>{" "}
                    </div>
                    <div className="  font-s-medium lg:w-[75%] w-full py-4">
                    {item.para}
                    </div>
                    <div className="  pb-4">
                      <Link to="/build-resume">
                        <button className="text-white bg-secondary font-s-medium  px-10 lg:py-4 py-2 rounded-md shadow-sm shadow-slate-700 ">
                          {item.button}
                        </button>
                      </Link>
                    </div>
                    <div className="px-5 flex justify-start gap-5 items-center">
                      <div className="relative inline-flex">
                        <span className="flex h-10 w-10">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary bg-opacity-50 opacity-75 duration-500"></span>
                          <span className="">
                            <AiFillPlayCircle className="text-secondary cursor-pointer relative inline-flex rounded-full h-10 w-10 " />
                          </span>
                        </span>
                      </div>
                      <p className="font-s-medium text-secondary">
                        Watch your video
                      </p>
                    </div>
                  </div>
                 
                </div>
              </div>
            </>
          ))}
        </Slider>
        <div className="rounded-lg z-50   md:px-[4.2rem] absolute">
          <JobSearch />
        </div>
      </div>
    </div>
  );
};

export default Banner;
