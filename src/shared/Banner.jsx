import React from "react";
import Button from "../components/Button";

const Banner = ({ bannerImg, heading, subheading, btn1, btn2 }) => {
  return (
    <div className="max-w-screen-lg flex sm:flex-row flex-col py-8 px-4 text-white rounded-2xl rounded-br-[80px] sm:mx-8 mx-2 my-2 gradientBg">
      <div className="sm:w-2/3">
        <h1 className="text-4xl md:text-7xl font-semibold">{heading}</h1>
        <p className="text-xs mt-8 w-[80%]">
         {subheading}
        </p>
        <div className="flex gap-4 mt-8">
          <Button>{btn1}</Button>
          <Button>{btn2}</Button>
        </div>
      </div>
      <div className="sm:w-1/3 w-[300px] flex self-center">
        <img src={bannerImg} />
      </div>
    </div>
  );
};

export default Banner;
