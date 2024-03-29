import React from 'react'
import { bannerImg } from "../../index";


const RightBanner = () => {
  return (
    <div className="w-1/2 flex items-center justify-center relative">
        <img
          src={bannerImg}
          alt="bannerImg"
          className="w-[310px] ml-22 h-[450px] z-10 pb-8"
        />
        <div className="absolute mt-20 bottom-0 w-[400px] h-[300px] bg-gradient-to-r from-[#407c87] to-[#383228] flex justify-center items-center"></div>
      </div>
  )
}

export default RightBanner
