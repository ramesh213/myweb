import React from "react";
import LeftBanner from "./LeftBanner";
import bannerImg from '../../assets/images/bannerImg.png'

const Banner = () => {
  return (
    <section
      id="home"
      className="w-full h-[600px] py-20 pb-20 mr-20 ml-20 flex item-center border-b-[1px] border-b-[black]"
    >
    <LeftBanner/>
      <div className="w-1/2 flex items-center justify-center relative">
        <img src={bannerImg} alt="banner_img" className="w-[350px] ml-20 h-[480px] z-10 pb-5" />
        <div className="absolute bottom-0 w-[400px] h-[400px] bg-gradient-to-r from-[#407c87] to-[#202327] shadow-shadowOne flex justify-center items-center">

        </div>
      </div>

    </section>
  );
};

export default Banner;
