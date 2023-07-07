import React from "react";

const FollowSteps = () => {
  const data = [
    {
      id: 1,
      img: "/assets/images/icon-1.png",
      number: "01",
      title: "Choose a Career",
      desc: "Find the best coaching option to help you tackle (and overcome) your current career obstacle.",
    },
    {
      id: 2,
      img: "/assets/images/icon-2.png",
      number: "02",
      title: "Choose a Best Coach for you",
      desc: "Explore our roster of top-notch career coaches who provide the service you need.",
    },
    {
      id: 3,
      img: "/assets/images/schedule.png",
      number: "03",
      title: "Select Suitable Time Slot",
      desc: "Explore our roster of top-notch career coaches who provide the service you need.",
    },
    {
      id: 4,
      img: "/assets/images/computer.png",
      number: "04",
      title: "Get Trained",
      desc: "Meet with your career coach for a session by phone or video—and kick your career into high gear!",
    },
    {
      id: 5,
      img: "/assets/images/job-interview.png",
      number: "05",
      title: "Prepare for the Interviews",
      desc: "Your career coach will reach out to you within one business day to schedule your first appointment.",
    },
    {
      id: 6,
      img: "/assets/images/job-seeker.png",
      number: "06",
      title: "Get your Dream Jobs",
      desc: "Your career coach will reach out to you within one business day to schedule your first appointment.",
    },
  ];

  return (
    <>
      <div className="relative">
        <div className="py-8">
          <div className="flex flex-col gap-8 md:gap-0 justify-center items-center container mx-auto  pb-10">
            <p className="text-secondary font-s-medium">How It Works</p>
            <div className="font-s-bold text-3xl "> Follow Our Steps </div>
          </div>

          <div className="absolute top-12 right-0  hidden md:block">
            <img
              src="/assets/images/leftelement.png"
              alt="/"
              className="w-[40%]"
            />
          </div>
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3   justify-items-center px-5">
              {data.map((item) => (
                <div className="relative  m-10">
                  <div className="bg-white shadow-xl p-4 rounded-md lg:h-60 h-full">
                    <h2 className="text-4xl text-secondary font-black text-right">
                      {item.number}
                    </h2>
                    <div className="flex space-x-2 pb-3">
                      <img
                        src={item.img}
                        className="absolute bg-white shadow-lg -left-10 p-2 rounded-md lg:h-[35%]"
                      />
                      <h6 className="text-lg font-extrabold px-10 pt-5">
                        {item.title}
                      </h6>
                    </div>
                    <div className="text-sm pt-6">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FollowSteps;
