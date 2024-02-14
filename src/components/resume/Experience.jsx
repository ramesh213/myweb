import React from 'react'
import ResumeCard from './ResumeCard'
import { motion } from "framer-motion";


const Experience = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { duration: 0.5 } }}
    className="w-full flex gap-20"
  >
    <div className="w-1/2">
      <div className="py-6 font-titleFont">
        <h2 className="text-xl font-bold">Graduation</h2>
      </div>
      <div className="w-full h-[600px] flex  gap-10 border-opacity-30">
        <ResumeCard
          degree="BCA"
          duration="2017-2021"
          gpa="CGPA: 3.2"
          college="Purbanchal University"
          Addr="Biratnagar, Morang, Nepal"
          desc="BCA (Bachelor in Computer Application) is an undergraduate  program focusing on computer science and its applications, covering programming, software development, and computer systems management, a 4 years academic program in Nepal."
        />
      </div>
    </div>
    <div className="w-1/2">
      <div className="py-6 font-titleFont">
        <h2 className="text-xl font-bold"> Post Graduation</h2>
      </div>
      <div className="w-full h-[600px] flex  gap-10 border-opacity-30">
        <ResumeCard
          degree="MSc. IT"
          duration="2024-Running"
          gpa="CGPA: -"
          college="Tribhuwan University"
          Addr="Kathmandu, Nepal"
          desc="MSc.IT (Master of Science in Information Technology) is a postgraduate  program focusing on computer science and its applications, covering programming, software development, and computer systems management, a 2 years academic program in Nepal."
        />
      </div>
    </div>
  </motion.div>
  )
}

export default Experience
