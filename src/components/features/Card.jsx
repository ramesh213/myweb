import React from "react";

const Card = ({ title, desc, icon }) => {
  return (
    <div className="w-full px-10 h-70 py-10 rounded-lg flex items-center bg-gradient-to-r from-bodyColor to-[#AA98A9] group  shadow-shadowOne transition-all ease-in duration-2000 hover:transform hover:scale-110 hover:shadow-red-400" >
      <div className="flex flex-col gap-6">
        <div>
          <span className="text-4xl text-designColor">{icon}</span>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-titleFont font-bold text-gray-300">
            {title}
          </h2>
          <p className="text-md">{desc}</p>
        </div>

      </div>
        
    </div>
  );
};

export default Card;
