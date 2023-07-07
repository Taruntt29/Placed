import React from "react";

const Gallery = () => {
  return (
    <>
      <div className=" py-10 md:py-12 max-w-6xl px-6 mx-auto">
        <div className="md:columns-4 gap-2 md:space-y-0 space-y-4">
          <img
            className="w-full py-1 hover:saturate-150"
            src="/assets/images/abtglr1.png"
          />
          <img
            className="w-full md:h-36 py-1  hover:saturate-150"
            src="/assets/images/abtglr2.png"
          />
          <img
            className="w-full md:h-52 py-1 hover:saturate-150"
            src="/assets/images/abtglr3.png"
          />
          <img
            className="w-full md:h-52 py-1 hover:saturate-150"
            src="/assets/images/abtglr4.png"
          />
          <img
            className="w-full md:h-36 py-1 hover:saturate-150"
            src="/assets/images/abtglr5.png"
          />
          <img
            className="w-full py-1 hover:saturate-150"
            src="/assets/images/abtglr6.png"
          />
        </div>
      </div>
    </>
  );
};

export default Gallery;
