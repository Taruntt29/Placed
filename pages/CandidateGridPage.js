import React from 'react'
import CandidateGrid from '../components/candidate/CandidateGrid';
import Banner from "../components/common/Banner";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
const CandidateGridPage = () => {
    return (
        <div>

            <Navbar bgcolor />
            <Banner
                img="/assets/images/common-banner.png"
                pageTitle="Home - Candidate Grid"
                title="Candidate Grid"
            />
            <CandidateGrid/>
            <Footer />

        </div>
    )
}

export default CandidateGridPage