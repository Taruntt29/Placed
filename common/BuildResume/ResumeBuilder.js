import React from 'react'

const ResumeBuilder = () => {

    const BuilderData=[
      { 
        id:'1',
        heading:'Choose a Template',
        para:'Our resume maker will compile all your details. You can change this template anytime'
      },
      { 
        id:'2',
        heading:'Add your details',
        para:'Our resume maker will compile all your details. You can change this template anytime'
      },
      { 
        id:'3',
        heading:'Download Your Resume',
        para:'Our resume maker will compile all your details. You can change this template anytime'
      }

    ]

  return (
    <div className='bg-secondary'>
       <div className='max-w-[1150px] mx-auto py-10 md:py-32'>
           <div>
               <div className='text-center font-s-bold mb-12 text-[#fff] text-2xl md:text-4xl'>How Resume Builder Works!</div>

               <div className='grid grid-cols-1 md:grid-cols-3 space-y-12 md:space-y-0 px-6 md:px-10 md:gap-12'>
                   {BuilderData.map( (item,ind)=>{
                      return(
                         <div className='border-[1px] border-white space-y-4 px-4 md:px-8 py-6 text-[#fff]'>
                            <div className='font-s-medium md:text-xl'>{item.heading}</div>
                            <p className='text-sm'>{item.para}</p>
                         </div>
                        )
                   })}
               </div>
           </div>
       </div>
    </div>
  )
}

export default ResumeBuilder