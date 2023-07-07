import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="bg-primary">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-0 justify-between py-8 px-5">
          <div className=" font-s-medium md:w-[80%] w-full ">
            Join our email subscription now to get updates on new jobs and
            notifications.
          </div>
          <div className="w-full ">
            <div className="rounded-full w-[100%] flex justify-start items-start ">
              <input
                type="text"
                placeholder="Enter Your Email"
                className="px-3 py-3 rounded-l-md w-[60%] md:w-[70%]  placeholder:font-s-normal font-s-medium"
              ></input>
              <button
                type="submit"
                className="bg-secondary hover:bg-grey w-[40%] duration-500 text-white text-sm md:text-base px-3 py-3 rounded-r-md md:w-[30%] font-s-medium"
              >
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
        <div className="w-full h-[1px] bg-gray-300"></div>
        <div className="grid grid-cols-2 md:grid-cols-5  justify-between items-start gap-10 py-8 px-5 ">
          <div className=" col-span-2 flex flex-col justify-start items-start">
            <img
              src="/assets/images/Final-Logo.png"
              alt="/"
              className="w-1/2 pb-5"
            />
            <p className="text-justify text-[15px] font-s-medium">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry the standard dummy text ever since the when an printer
              took.Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </p>
          </div>
          {/* <div className="">
            <div className="text-secondary font-s-medium">For Candidates</div>
            <div className="w-[50%] h-[2px] bg-secondary rounded-full mt-2 mb-4"></div>
            <ul className="font-s-normal font-semibold flex flex-col gap-2 text-[15px] ">
              <li>
                <Link to="/" className=" relative group ">
                  <span className="text-black group-hover:text-secondary text-sm">
                    User Dashboard
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-secondary transition-all group-hover:w-full duration-500 "></span>
                </Link>
              </li>
              <li>
                <Link to="/" className=" relative group ">
                  <span className="text-black group-hover:text-secondary text-sm">
                    Alert Resume
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-secondary transition-all group-hover:w-full duration-500 "></span>
                </Link>
              </li>
              <li>
                <Link to="/" className=" relative group ">
                  <span className="text-black group-hover:text-secondary text-sm">
                    Candidates
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-secondary transition-all group-hover:w-full duration-500 "></span>
                </Link>
              </li>
              <li>
                <Link to="/blog" className=" relative group ">
                  <span className="text-black group-hover:text-secondary text-sm">
                    Blog List
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-secondary transition-all group-hover:w-full duration-500 "></span>
                </Link>
              </li>
              <li>
                <Link to="/blog-detail" className=" relative group ">
                  <span className="text-black group-hover:text-secondary text-sm">
                    Blog Single
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-secondary transition-all group-hover:w-full duration-500 "></span>
                </Link>
              </li>
            </ul>
          </div> */}
          <div className="">
            <div className="text-secondary font-s-medium">Quick Links</div>
            <div className="w-[50%] h-[2px] bg-secondary rounded-full mt-2 mb-4"></div>
            <ul className="font-s-normal font-semibold flex flex-col gap-2 text-[15px] ">
              <li>
                <Link to="/" className=" relative group ">
                  <span className="text-black group-hover:text-secondary text-sm">
                    Home
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-secondary transition-all group-hover:w-full duration-500 "></span>
                </Link>
              </li>
              <li>
                <Link to="/about-us" className=" relative group ">
                  <span className="text-black group-hover:text-secondary text-sm">
                    About
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-secondary transition-all group-hover:w-full duration-500 "></span>
                </Link>
              </li>
              <li>
                <Link to="/blog" className=" relative group ">
                  <span className="text-black group-hover:text-secondary text-sm">
                    Blogs
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-secondary transition-all group-hover:w-full duration-500 "></span>
                </Link>
              </li>
              <li>
                <Link to="/testimonial" className=" relative group ">
                  <span className="text-black group-hover:text-secondary text-sm">
                    Testimonials
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-secondary transition-all group-hover:w-full duration-500 "></span>
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className=" relative group ">
                  <span className="text-black group-hover:text-secondary text-sm">
                    Contact Us
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-secondary transition-all group-hover:w-full duration-500 "></span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="">
            <div className="text-secondary font-s-medium">
              Helpful Resources
            </div>
            <div className="w-[50%] h-[2px] bg-secondary rounded-full mt-2 mb-4"></div>
            <ul className="font-s-normal font-semibold flex flex-col gap-2 text-[15px] ">
              <li>
                <Link to="/faq" className=" relative group ">
                  <span className="text-black group-hover:text-secondary text-sm">
                    FAQs
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-secondary transition-all group-hover:w-full duration-500 "></span>
                </Link>
              </li>
              <li>
                <Link to="/terms-conditions" className=" relative group ">
                  <span className="text-black group-hover:text-secondary text-sm">
                    Terms & Conditions
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-secondary transition-all group-hover:w-full duration-500 "></span>
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className=" relative group ">
                  <span className="text-black group-hover:text-secondary text-sm">
                    Privacy Policy
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-secondary transition-all group-hover:w-full duration-500 "></span>
                </Link>
              </li>
              <li>
                <Link to="/refund-policy" className=" relative group ">
                  <span className="text-black group-hover:text-secondary text-sm">
                    Refund Policy
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-secondary transition-all group-hover:w-full duration-500 "></span>
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className=" relative group ">
                  <span className="text-black group-hover:text-secondary text-sm">
                    Disclaimer
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-secondary transition-all group-hover:w-full duration-500 "></span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="">
            <div className="text-secondary font-s-medium">Signup</div>
            <div className="w-[50%] h-[2px] bg-secondary rounded-full mt-2 mb-4"></div>
            <ul className="font-s-normal font-semibold flex flex-col gap-2 text-[15px] ">
              <li>
                <Link to="/candidate-signup" className=" relative group ">
                  <span className="text-black group-hover:text-secondary text-sm">
                    Candidate
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-secondary transition-all group-hover:w-full duration-500 "></span>
                </Link>
              </li>
              <li>
                <Link to="/coach-signup" className=" relative group ">
                  <span className="text-black group-hover:text-secondary text-sm">
                    Coach
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-secondary transition-all group-hover:w-full duration-500 "></span>
                </Link>
              </li>
              <li>
                <Link to="/employer-signup" className=" relative group ">
                  <span className="text-black group-hover:text-secondary text-sm">
                    Employer
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-secondary transition-all group-hover:w-full duration-500 "></span>
                </Link>
              </li>
             
            </ul>
          </div>
        </div>
        <div className="w-full h-[1px] bg-gray-300"></div>
        <div className="flex justify-between items-center py-6 flex-col md:flex-row gap-5">
          <div className=" flex justify-center items-center text-sm font-semibold">
            Copyright © 2022 by PPLACD All Rights Reserved.
          </div>
          <div className="flex gap-4 justify-center items-center">
            <div className="bg-secondary hover:bg-grey hover:scale-105 duration-500 rounded-full p-3 cursor-pointer ">
              <FaFacebookF color="white" size={20} />
            </div>
            <div className="bg-secondary hover:bg-grey hover:scale-105 duration-500 rounded-full p-3 cursor-pointer">
              <FaInstagram color="white" size={20} />
            </div>
            <div className="bg-secondary hover:bg-grey hover:scale-105 duration-500 rounded-full p-3 cursor-pointer">
              <FaTwitter color="white" size={20} />
            </div>
            <div className="bg-secondary hover:bg-grey hover:scale-105 duration-500 rounded-full p-3 cursor-pointer">
              <FaLinkedinIn color="white" size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
