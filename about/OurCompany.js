import React from "react";

const OurCompany = () => {
  const data = [
    {
      id: 1,
      img: "/assets/images/googleLogo.png",
      
    },
    {
      id: 2,
      img: "/assets/images/airbn.png",
      
    },
    {
      id: 3,
      img: "/assets/images/airbn.png",
      
    },
    {
      id: 4,
      img: "/assets/images/fedex.png",
      
    },
    {
      id: 5,
      img: "/assets/images/wallmart.png",
      
    },
    {
      id: 1,
      img: "/assets/images/googleLogo.png",
      
    },
    {
      id: 2,
      img: "/assets/images/airbn.png",
      
    },
    {
      id: 3,
      img: "/assets/images/airbn.png",
      
    },
    {
      id: 4,
      img: "/assets/images/fedex.png",
      
    },
    {
      id: 5,
      img: "/assets/images/wallmart.png",
      
    },
  
    
    

  ];

  return (
    <>
      <div
        className="bg-no-repeat bg-cover  bg-center"
        style={{
          backgroundImage: `url(/assets/images/background.png)`,
        }}
      >
        <div className="py-16">
          <div className="flex flex-col gap-8 md:gap-0 justify-center items-center container mx-auto px-5 pb-10">
            <p className="text-secondary font-s-medium">OUR COMPANY</p>
            <div className="font-s-bold text-3xl "> Meet Our Partners </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-10 container mx-auto justify-items-center px-5">
            {data.map((item) => (
              <div className="rounded-b-lg px-8 py-4 bg-white shadow-xl ">
                <img alt="top-company" src={item.img} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default OurCompany;
