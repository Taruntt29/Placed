import React from "react";

const RetakeAssessment = () => {
  return (
    <div className="pt-40 pb-20 relative">
      {/* <div className="absolute bottom-6  hidden md:block">
        <img
          src="/assets/images/jobpostbottombubble.png"
          alt="/"
          className="w-[20%]"
        />
      </div>
      <div className="absolute right-0  hidden md:block">
        <img src="/assets/images/element-1.png" alt="/" className="w-[20%]" />
      </div>{" "} */}
      <div className=" container mx-auto ">
        <div className="flex flex-col items-center justify-center py-6">
          <h4 className="text-secondary text-md font-bold">
            Suggestion after Test
          </h4>
          <h1 className="text-black font-bold text-center text-3xl px-32">
            According to your assessment test here is some profile suggestion
            for you.
          </h1>
        </div>

        <div className="flex flex-col space-y-4">
          <div className="border border-[#2544EE] bg-[#F7FAFF] grid grid-cols-12 rounded-md">
            <div className="col-span-2">
              <img
                alt="images"
                src="/assets/images/task-1.png"
                className="w-full "
              />
            </div>
            <div className="flex flex-col col-span-9 py-4 px-5">
              <h5 className="text-2xl font-s-bold">UI-UX Designer</h5>
              <p className="text-[15px] pt-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. Lorem
                Ipsum is simply dummy text of the printing and typesetting.
                Lorem Ipsum has been the industry's standard dummy.
              </p>
            </div>
          </div>
          <div className="border border-[#2544EE] bg-[#F7FAFF] grid grid-cols-12 rounded-md">
            <div className="col-span-2">
              <img
                alt="images"
                src="/assets/images/task-1.png"
                className="w-full "
              />
            </div>
            <div className="flex flex-col col-span-9 py-4 px-5">
              <h5 className="text-2xl font-s-bold">UI-UX Designer</h5>
              <p className="text-[15px] pt-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. Lorem
                Ipsum is simply dummy text of the printing and typesetting.
                Lorem Ipsum has been the industry's standard dummy.
              </p>
            </div>
          </div>
          <div className="border border-[#2544EE] bg-[#F7FAFF] grid grid-cols-12 rounded-md">
            <div className="col-span-2">
              <img
                alt="images"
                src="/assets/images/task-1.png"
                className="w-full "
              />
            </div>
            <div className="flex flex-col col-span-9 py-4 px-5">
              <h5 className="text-2xl font-s-bold">UI-UX Designer</h5>
              <p className="text-[15px] pt-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. Lorem
                Ipsum is simply dummy text of the printing and typesetting.
                Lorem Ipsum has been the industry's standard dummy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetakeAssessment;
