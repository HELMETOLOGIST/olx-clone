import React from "react";
import banner from "../assets/banner.png";

const Banner = () => {
  return (
    <div className="mt-1">
      <img src={banner} alt="banner" className="w-full" />
      <p className="text-black text-[25px] ml-[80px]">Fresh recommendations</p>
    </div>
  );
};

export default Banner;
