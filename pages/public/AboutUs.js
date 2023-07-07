import React from "react";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import BlogBanner from "../../components/common/BlogBanner";
import Gallery from "../../components/about/Gallery";
import AboutCompany from "../../components/about/AboutCompany";
import OurCompany from "../../components/about/OurCompany";
import NewsBlog from "../../components/about/NewsBlog";
import Strip from "../../components/about/Strip";
import CompanySlider from "../../components/home/CompanySlider";

const AboutUs = () => {
    return (
        <div>
            <Navbar bgcolor />
            <BlogBanner
                img="/assets/images/aboutImg.png"
                title="ABOUT US"
                heading="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ligula ante."
            />
            <Gallery />
            <AboutCompany />
            <OurCompany />
            <NewsBlog />
            <Strip />
            <CompanySlider />
            <Footer />
        </div>
    );
};

export default AboutUs;
