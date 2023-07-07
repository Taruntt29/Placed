import React from 'react'
import BlogBanner from '../../components/common/BlogBanner'
import Footer from '../../components/common/Footer'
import Navbar from '../../components/common/Navbar'
import GetInTouch from '../../components/contactUs/GetInTouch'

const ContactUs = () => {
  return (
    <div>
        <Navbar bgcolor />
        <div className="">
        <BlogBanner
          img="/assets/images/contact-banner.png"
          title="CONTACT US"
          heading="Feel free to contact us."
        />
        <GetInTouch/>
      </div>
        <Footer/>
    </div>
  )
}

export default ContactUs