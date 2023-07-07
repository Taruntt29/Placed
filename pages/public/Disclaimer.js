import React from 'react'
import Footer from '../../components/common/Footer'
import Navbar from '../../components/common/Navbar'
import DisclaimerDetail from '../../components/ExtraPages/DisclaimerDetail'

const Disclaimer = () => {
  return (
    <div>
      <Navbar bgcolor/>
      <DisclaimerDetail/>
      <Footer/>
    </div>
  )
}

export default Disclaimer
