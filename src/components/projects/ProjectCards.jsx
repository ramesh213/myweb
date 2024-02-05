import React from "react";

const ProjectCards = ({ title, desc, src }) => {
  return (
    <div className="w-full px-12 h-auto py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
      <div>{title}</div>
      <div>{desc}</div>
      <img src={src} alt="" />
    </div>
  );
};

export default ProjectCards;
