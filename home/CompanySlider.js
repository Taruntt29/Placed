import React from "react";
import Heading from "../common/Heading";
import Slider from "react-slick";
const CompanyDetail = [
  {
    id: 1,
    imagesrc: "/assets/images/test-1.png",
    description:
      "We collect reviews from our users so you can get an honest opinion of what an experience honest with our website are really like.",
    name: "Collis Pong",
    position: "Manager Google",
  },
  {
    id: 2,
    imagesrc: "/assets/images/test-1.png",
    description:
      "We collect reviews from our users so you can get an honest opinion of what an experience honest with our website are really like.",
    name: "Collis Pong",
    position: "CTO Founder",
  },
  {
    id: 3,
    imagesrc: "/assets/images/test-1.png",
    videourl: "/assets/video/video1.mp4",
    description:
      "We collect reviews from our users so you can get an honest opinion of what an experience honest with our website are really like.",
    name: "Collis Pong",
    position: "CEO Upgrad",
  },
  {
    id: 4,
    imagesrc: "/assets/images/test-1.png",
    description:
      "We collect reviews from our users so you can get an honest opinion of what an experience honest with our website are really like.",
    name: "Collis Pong",
    position: "MD Google",
  },
];
const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  speed: 8000,
  cssEase: "linear",
  arrows: false,
  loop: true,
  autoplaySpeed: 0,
  accessibility: true,
  swipeToSlide: true,
  //arrows: true,
  //nextArrow: <SampleNextArrow />,
  //prevArrow: <SamplePrevArrow />,

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
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 1,
        arrows: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        speed: 4000,
      },
    },
  ],
};
const CompanySlider = () => {
  return (
    <div className="bg-[#E3EEFF8F] py-20">
      <div className="pb-10">
        <Heading
          title="Find Best Companies"
          subtitle="Work for the best companies in the world"
        />
      </div>
      <div className=" w-[90%] md:w-[100%] mx-auto">
        <Slider className="container mx-auto w-[90%] md:w-[89%]" {...settings}>
          {CompanyDetail.map((item, index) => (
            <div className="px-4 divslider" key={index}>
              <div className="">
                <div className="bg-white relative rounded-md py-6">
                  <div className="">
                    <img
                      src="/assets/images/quotes.png"
                      alt="/"
                      className="absolute -top-10 right-3 w-20"
                    />
                  </div>
                  <div className="px-4">
                    <img src={item.imagesrc} alt="/" className=" w-20" />
                  </div>
                  <p className="font-s-medium text-[#010101] px-4 py-2 text-sm text-justify ">
                    {item.description}
                  </p>
                  <p className="font-s-bold px-4 py-2">{item.name}</p>

                  <div className="bg-secondary text-white font-s-medium rounded-r-md w-1/2 py-2 px-4 text-sm ">
                    {item.position}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CompanySlider;
