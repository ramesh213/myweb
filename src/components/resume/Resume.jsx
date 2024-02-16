import React, { useState } from 'react'
import Title from '../layouts/Title'
import Education from './Education'
import Skill from './Skill'
import Experience from './Experience'

const Resume = () => {

    const [educationData, setEducationData] = useState(false)
    const [skillData, setSkillData ] = useState(true)
    const [experienceData, setExperienceData ] = useState(false)
  return (
    <section id='resume' className="w-full h-[700px] px-20 pt-10 pb-20 item-center border-b-[1px] border-b-[black]">
        <div className="flex justify-center text-center items-center">
        <Title
        title="Visit my profile" 
        desc = "My Resume"
        />
        </div>
        <div>
            <ul className='w-full grid grid-cols-3'>
                <li className={`${educationData ? "border-gray-600 border-[3px] active": "border-transparent"} resumeLi rounded-l-md`} onClick={() => setEducationData(true) & setSkillData(false) & setExperienceData(false)}>Education</li>

                <li className={`${skillData ? "border-gray-600 border-[3px] active": "border-transparent"} resumeLi`} onClick={() => setEducationData(false) & setSkillData(true) & setExperienceData(false) } >Professional Skills</li>
                
                <li className={`${experienceData ? "border-gray-600 border-[3px] active": "border-transparent"} resumeLi rounded-r-md`} onClick={()=> setEducationData(false) & setSkillData(false) & setExperienceData(true)}>Experience</li>
            </ul>
        </div>
        
        {educationData && <Education/>}
        {skillData && <Skill/>}
        {experienceData && <Experience/>}
    </section>
  )
}

export default Resume
