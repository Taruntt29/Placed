import React, { useEffect, useState } from "react";
import { FaQuoteRight } from "react-icons/fa";
import BlogBanner from "../../components/common/BlogBanner";
import Footer from "../../components/common/Footer";
import Navbar from "../../components/common/Navbar";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getAllTestimonials } from "../../api/publicFunctions";
import { toast } from "react-toastify";

const Testimonial = () => {
  const settingTestominal = {
    dots: true,
    infinite: true,
    speed: 1500,
    centerMode: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    rows: 2,
    arrows: true,
    loop: true,
    autoplay: true,
    autoplaySpeed: 4000,
    accessibility: true,
    cssEase: "linear",
    swipeToSlide: true,

    responsive: [
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          arrows: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          arrows: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          dots: true,
        },
      },
    ],
  };

  const [testimonialData, setTestimonialData] = useState([]);
  const getAllTestimonialData = async () => {
    const { data, status, message } = await getAllTestimonials();
    if (status) {
      setTestimonialData(data);
      console.log("testimonial data", data);
    } else {
      toast(message);
    }
  };

  useEffect(() => {
    getAllTestimonialData();
  }, []);

  return (
    <>
      <Navbar bgcolor />
      <BlogBanner
        title="TESTIMONAL"
        heading="See What People Says About Us"
        img="/assets/images/testimonial.png"
      />

      <div className="container mx-auto pt-12 pb-12">
        <div className="text-center py-6">
          <h2 className="font-s-bold text-3xl ">Don't Take Our Word For It</h2>
          <p className="text-2xl">Trust Our Customer</p>
        </div>
        <h3 className="py-3 text-xl font-s-medium px-4">
          Reviews from Company
        </h3>

        <Slider {...settingTestominal}>
          {testimonialData.map((item, e) => (
            <>
              {" "}
              {item.type === "Employer" ? (
                <div
                  key={e}
                  className="rounded-lg border border-secondary p-4 space-y-4"
                >
                  <div className="flex items-center justify-between p-1 ">
                    <div className="flex gap-2 items-center">
                      <img
                        src={item.images}
                        className="rounded-full w-16 h-16"
                      />
                      <div>
                        <h2 className="font-semibold text-secondary">
                          {item.name}
                        </h2>
                        <p>{item.designation}</p>
                      </div>
                    </div>
                    <FaQuoteRight size={30} className="text-secondary" />
                  </div>
                  <p>{item.description}</p>
                  {/* <p className='text-primary text-sm font-s-bold'>{item.date}</p> */}
                </div>
              ) : null}
            </>
          ))}
        </Slider>

        <div className="py-6">
          <h3 className="py-3 text-xl font-s-medium px-4">
            Reviews from Candidate
          </h3>

          <Slider {...settingTestominal}>
            {testimonialData.map((item, e) => (
              <>
                {item.type === "Candidate" ? (
                  <div
                    key={e}
                    className="rounded-lg border border-secondary p-4 space-y-4"
                  >
                    <div className="flex items-center justify-between p-1 ">
                      <div className="flex gap-2 items-center">
                        <img
                          src={item.images}
                          className="rounded-full  w-16 h-16"
                        />
                        <div>
                          <h2 className="font-semibold text-secondary">
                            {item.name}
                          </h2>
                          <p>{item.designation}</p>
                        </div>
                      </div>
                      <FaQuoteRight size={30} className="text-secondary" />
                    </div>
                    <p>{item.description}</p>
                    {/* <p className='text-primary text-sm font-s-bold'>{item.date}</p> */}
                  </div>
                ) : null}
              </>
            ))}
          </Slider>
        </div>

        <div className="py-6">
          <h3 className="py-3 text-xl font-s-medium px-4">
            Reviews from Coach
          </h3>

          <Slider {...settingTestominal}>
            {testimonialData.map((item, e) => (
              <>
                {item.type === "coach" ? (
                  <div
                    key={e}
                    className="rounded-lg border border-secondary p-4 space-y-4"
                  >
                    <div className="flex items-center justify-between p-1 ">
                      <div className="flex gap-2 items-center">
                        <img
                          src={item.images}
                          className="rounded-full  w-16 h-16"
                        />
                        <div>
                          <h2 className="font-semibold text-secondary">
                            {item.name}
                          </h2>
                          <p>{item.designation}</p>
                        </div>
                      </div>
                      <FaQuoteRight size={30} className="text-secondary" />
                    </div>
                    <p>{item.description}</p>
                    {/* <p className='text-primary text-sm font-s-bold'>{item.date}</p> */}
                  </div>
                ) : null}
              </>
            ))}
          </Slider>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Testimonial;
