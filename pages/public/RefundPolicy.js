import React from 'react'
import Footer from '../../components/common/Footer'
import Navbar from '../../components/common/Navbar'
import RefundPolicyDetail from '../../components/ExtraPages/RefundPolicyDetail'

const RefundPolicy = () => {
  return (
    <div>
        <Navbar bgcolor/>
        <RefundPolicyDetail/>
        <Footer/>
      
    </div>
  )
}

export default RefundPolicy
