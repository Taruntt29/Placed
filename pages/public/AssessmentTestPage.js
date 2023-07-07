import React from 'react'
import AssessmentTest from '../../components/common/AssessmentTest'
import Footer from '../../components/common/Footer'
import Navbar from '../../components/common/Navbar'

const AssessmentTestPage = () => {
  return (
    <div>
      <Navbar bgcolor/>
      <div className='pt-20'>   <AssessmentTest/></div>
   
      <Footer/>

    </div>
  )
}

export default AssessmentTestPage
