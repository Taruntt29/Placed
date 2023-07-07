import React from "react";
import Slider from "react-slick";
import { useState } from "react";
import { BiChevronLeft } from "react-icons/bi";
import { BiChevronRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const ResumeSlider = () => {
  const resumeData = [
    { id: "1", sliderImg: "assets/images/resume1.png" },

    { id: "2", sliderImg: "assets/images/resume2.png" },

    { id: "3", sliderImg: "assets/images/resume3.png" },

    { id: "4", sliderImg: "assets/images/resume1.png" },

    { id: "5", sliderImg: "assets/images/resume2.png" },
  ];

  const PrevArrow = ({ onClick }) => {
    return (
      <div
        className="arrow prev cursor-pointer text-5xl absolute sm:top-[250px] bg-white text-black border-[1px]  prevarrow rounded-[50%] sm:right-[29%] z-10"
        onClick={onClick}
      >
        <BiChevronRight />
      </div>
    );
  };

  const NextArrow = ({ onClick }) => {
    return (
      <div
        className="arrow next text-5xl absolute sm:top-[250px] bg-white cursor-pointer text-black border-[1px] rounded-[50%] nextarrow sm:left-[29%] z-10"
        onClick={onClick}
      >
        <BiChevronLeft />
      </div>
    );
  };

  const [imgslide, setImgslide] = useState(0);

  const settings = {
    dots: false,
    AutoPlay: true,
    className: "center",
    infinite: true,
    lazyLoad: true,
    centerMode: true,
    centerPadding: "0px",
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          arrows: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          arrows: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
    beforeChange: (current, next) => setImgslide(next),
  };

  return (
    <div className="bg-secondary h-screen">
      <div className="text-white max-w-[1150px] mx-auto">
        <div className="absolute  md:right-20 right-[5%] cursor-pointer top-10 z-20 md:top-10">
          <Link to="/build-resume">
            <AiOutlineClose className="text-4xl text-white" />
          </Link>
        </div>
        <div className="pt-28">
          <Slider {...settings}>
            {resumeData.map((item, indx) => {
              return (
                <div
                  className={
                    indx === imgslide
                      ? "scale-100 rounded-sm md:shadow-md  md:shadow-[#fff] opacity-100"
                      : "opacity-50 scale-75 duration-300"
                  }
                >
                  <img
                    alt="Slider"
                    src={item.sliderImg}
                    className={
                      indx === imgslide ? "rounded-sm md:w-[24rem] mx-auto" : ""
                    }
                  />
                  <div className="w-full">
                    <Link to="/resume-edit">
                      <button
                        className={
                          indx == imgslide
                            ? "absolute bottom-[10%] translate-x-[-50%] left-[50%] bg-secondary text-[#fff] px-6 w-[50%] py-2 rounded-full"
                            : "hidden"
                        }
                      >
                        Use Template
                      </button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ResumeSlider;
