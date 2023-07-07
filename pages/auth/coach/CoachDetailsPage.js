import React , {useEffect} from 'react'
import CoachDetails from '../../../components/Coach/CoachDetails';
import Banner from "../../../components/common/Banner";
import Footer from "../../../components/common/Footer";
import Navbar from "../../../components/common/Navbar";
import { getCoachDetails } from '../../../api/authCandidate';
import { useParams } from 'react-router-dom';

const CoachDetailsPage = () => {
   
    return (
        <div>

            <Navbar bgcolor />
            {/* <Banner
                img="/assets/images/common-banner.png"
                title="Employers Detail "
            /> */}

            <CoachDetails/>

            <Footer />
        </div>
    )
}

export default CoachDetailsPage

