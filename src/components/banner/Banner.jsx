import React from "react";
import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";

const Banner = () => {
  return (
    <section
      id="home"
      className="w-full h-[550px] py-20 pb-20 flex  item-center border-b-[1px] border-b-[black]"
    >
      <LeftBanner /> 
      <RightBanner/>
      
    </section>
  );
};

export default Banner;
