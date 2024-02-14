import React from "react";
import ResumeCard from "./ResumeCard";
import { motion } from "framer-motion"


const Skill = () => {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity:1, transition: {duration:0.5}}} className='w-full flex gap-20'>
      <div className="w-1/2">
        <div className="py-10 font-titleFont">
          <h2 className="text-xl font-bold">Development Skills</h2>
          
        </div>
        {/* <div className="w-full mt-14">
        </div> */}
      </div>
      <div>
        <div className="py-10 font-titleFont">
          <h2 className="text-xl font-bold">Design Skills</h2>
        </div>
      </div>
    
    </motion.div>
  );
};

export default Skill;
