import React from 'react'
import Title from '../layouts/Title'
import ProjectCards from './ProjectCards'
import { projectOne,projectTwo, projectThree } from "../../index"



const Projects = () => {
  return (
    <section id='projects' className="w-full h-[600px] px-20 py-20 item-center border-b-[1px] border-b-[black]">
        <div className="flex justify-center text-center items-center">
        <Title
        title="Visit My Portfolio !!!" 
        desc = "My Projects"
        />
        </div>
        <div className='grid grid-cols-3 gap-14'>
        <ProjectCards
        title = "Weather Project"
        desc = " Helps to find the weather condition of any city. "
        src = {projectOne}
        />
        <ProjectCards
        title = "Django Ecommerce Project"
        desc = "Built with Django. It has most funtionalities that ecommerce apps are having."
        src = {projectTwo}
        />
        <ProjectCards
        title = "More Projects..."
        desc = "For more projects, please visit my github profile"
        src = {projectThree}
        />
        </div>
    </section>
  )
}

export default Projects
