import React from 'react'
import Footer from '../../components/common/Footer'
import Navbar from '../../components/common/Navbar'
import PrivacyPolicyDetail from '../../components/ExtraPages/PrivacyPolicyDetail'

const PrivacyPolicy = () => {
  return (
    <div>
      <Navbar bgcolor/>
      <PrivacyPolicyDetail/>
      <Footer/>
    </div>
  )
}

export default PrivacyPolicy
