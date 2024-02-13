import React from "react";
import { BsGithub } from "react-icons/bs";
// import { Link } from "react-router-dom";

const ProjectCards = ({ title, desc, img, sub_desc }) => {
  return (
    <div className="w-full px-8 h-auto py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
      <div className="w-full hight-auto overflow-hidden rounded-lg flex justify-center">
        <img className="w-[300px] h-[200px] rounded-lg group-hover:scale-110 duration-300 cursor-pointer" src={img} alt="" />
      </div>
      <div className="pt-5">
        <div className="font-bold text-2xl flex pb-2 justify-between">
          <div className="text-purple-400">{title}</div>
          <div className="text-purple-400">{<BsGithub />}</div>
        </div>
        <div className="flex-col">
          <div className="pb-1"> {desc}</div>
          <div> {sub_desc}</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;
