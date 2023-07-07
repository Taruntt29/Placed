import React from 'react'
import Footer from '../../components/common/Footer'
import Navbar from '../../components/common/Navbar'
import TemplateOneDetail from '../../components/resumes/TemplateOneDetail'

const TemplateOne = () => {
  return (
    <div>
      <Navbar bgcolor />
      <div className="mt-[150px]">
<TemplateOneDetail/>
</div>
<Footer />
    </div>
  )
}

export default TemplateOne
