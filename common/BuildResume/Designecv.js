import React from "react";

const Designecv = () => {
  return (
    <div>
      <div className="bg-primary mt-12 ">
        <div className="max-w-[1150px] items-center mx-auto grid grid-cols-1 md:grid-cols-2">
          <div className="space-y-8 px-6 md:mx-0 mt-12 md:mt-0">
            <div className="font-s-bold leading-snug text-3xl md:text-5xl text-secondary">
              <span className="text-black">Stand out with a </span>
              <br className="hidden md:block" />
              Professionally
              <br className="hidden md:block" /> Designed CV
            </div>

            <p>
              Get Noticed and save time with our smart CV builder,
              <br className="hidden md:block" />
              Free up your agenda by relying on us to do the heavy lifting.
            </p>

            <button className="bg-secondary text-white px-14 py-3 rounded-md">
              Get Started
            </button>
          </div>
          <div className="mx-auto">
            <img alt="images" src="assets/images/DesignCVimg.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Designecv;
