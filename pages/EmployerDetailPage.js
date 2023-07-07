import React from 'react'
import Banner from "../components/common/Banner";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import EmployerDetail from '../components/employer/EmployerDetail';

const EmployerDetailPage = () => {
    return (
        <div>

            <Navbar bgcolor />
            <Banner
                img="/assets/images/common-banner.png"
                pageTitle="Home - Employer Detail"
                title=" Employers Detail "
            />

<EmployerDetail/>

            <Footer />
        </div>
    )
}

export default EmployerDetailPage