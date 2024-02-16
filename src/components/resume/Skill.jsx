import React from "react";

const Skill = () => {
  return (
    <div className='w-full flex gap-20'>
      <div className="w-1/2">
        <div className="py-6 font-titleFont">
          <h2 className="text-xl font-bold">Development Skills</h2>
        </div>
        <div className="w-full flex flex-col gap-4">
          <div>
            <h2 className="text-sm uppercase font-medium">HTML 5</h2>
            <span className="w-full h-2 bgOpacity inline-flex"> <span className="w-[99%] h-full bg-gradient-to-r from-gray-300 via bg-orange-400 to-red-400 relative"><span className="absolute -top-6 right-0">99%</span></span></span>
          </div>
          <div>
            <h2 className="text-sm uppercase font-medium">TAILWIND CSS</h2>
            <span className="w-full h-2 bgOpacity inline-flex"> <span className="w-[90%] h-full bg-gradient-to-r from-gray-300 via bg-red-600 to-purple-600 relative"><span className="absolute -top-6 right-0">90%</span></span></span>
          </div>
          <div>
            <h2 className="text-sm uppercase font-medium">REACT</h2>
            <span className="w-full h-2 bgOpacity inline-flex"> <span className="w-[85%] h-full bg-gradient-to-r from-gray-300 via bg-green-600 to-red-600 relative"><span className="absolute -top-6 right-0">85%</span></span></span>
          </div>
          <div>
            <h2 className="text-sm uppercase font-medium">NEXTJS</h2>
            <span className="w-full h-2 bgOpacity inline-flex"> <span className="w-[80%] h-full bg-gradient-to-r from-gray-300 via bg-green-300 to-purple-700 relative"><span className="absolute -top-6 right-0">80%</span></span></span>
          </div>
          <div>
            <h2 className="text-sm uppercase font-medium">dJANGO</h2>
            <span className="w-full h-2 bgOpacity inline-flex"> <span className="w-[75%] h-full bg-gradient-to-r from-gray-300 via bg-green-400 to-red-400 relative"><span className="absolute -top-6 right-0">75%</span></span></span>
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <div className="py-6 font-titleFont">
          <h2 className="text-xl font-bold">Design Skills</h2>
        </div>
        <div className="w-full flex flex-col gap-4">
          <div>
            <h2 className="text-sm uppercase font-medium">ADOBE PHOTOSHOP</h2>
            <span className="w-full h-2 bgOpacity inline-flex"> 
            <motion
            className="w-[65%] h-full bg-gradient-to-r from-gray-300 via bg-orange-400 to-red-400 relative"><span className="absolute -top-6 right-0">65%</span></motion></span>
          </div>
          <div>
            <h2 className="text-sm uppercase font-medium">DRAW.IO</h2>
            <span className="w-full h-2 bgOpacity inline-flex"> <span className="w-[55%] h-full bg-gradient-to-r from-gray-300 via bg-orange-400 to-red-400 relative"><span className="absolute -top-6 right-0">55%</span></span></span>
          </div>
          </div>
        </div>
    
    </div>
  );
};

export default Skill;
