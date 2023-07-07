import React from 'react'

const AboutCompany = () => {
  return (
    <>
    <div className='py-10 md:py-12 max-w-6xl px-6 mx-auto shadow md:mb-10'>
        <div className='md:grid grid-cols-12 gap-20'>
            <div className='col-span-5'>
                <img src='/assets/images/aboutCompany.png' className='md:max-w-md' />
            </div>
            <div className='col-span-7 space-y-4 md:pt-0 pt-4'>
                <h2 className='text-blue-700 text-lg font-s-bold'>OUR COMPANY</h2>
                <h2 className='text-3xl font-s-bold'>About Our Company</h2>
                <div className='text-sm space-y-4'>
                <p>Aenean sollicituin, lorem quis bibendum auctor nisi elit consequat ipsum sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet maurisorbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctora ornare odio. </p>
                <p>Aenean sollicituin, lorem quis bibendum auctor nisi elit consequat ipsum sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet maurisorbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctora ornare odio. </p>
                <p>Aenean sollicituin, lorem quis bibendum auctor nisi elit consequat ipsum sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet maurisorbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctora ornare odio. </p>
                <p>Aenean sollicituin, lorem quis bibendum auctor nisi elit consequat ipsum sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet maurisorbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctora ornare odio. </p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default AboutCompany