import React from 'react'
import Footer from '../../components/common/Footer'
import Navbar from '../../components/common/Navbar'
import TemplateThreeDetail from '../../components/resumes/TemplateThreeDetail'

const TemplateThree = () => {
  return (
    <div>
      
<Navbar bgcolor />
      <div className="mt-[150px]">
<TemplateThreeDetail/>
</div>
<Footer />
    </div>
  )
}

export default TemplateThree
