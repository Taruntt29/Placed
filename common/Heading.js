import React from "react";

const Heading = ({ title, subtitle, dark }) => {
  return (
    <div className="container mx-auto md:px-0 px-5">
      <h2 className="text-head font-s-medium text-2xl text-center pb-1">
        {title}
      </h2>
      <p
        className={`{ text-center ${
          dark
            ? "text-4xl text-white font-s-bold"
            : "text-4xl text-grey font-s-bold"
        } }`}
      >
        {subtitle}
      </p>
    </div>
  );
};

export default Heading;
