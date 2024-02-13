import React from 'react'
import Title from '../layouts/Title'
import ProjectCards from './ProjectCards'
import { weather, shopping, more_projects } from "../../index";


const Projects = () => {
  return (
    <section id='projects' className="w-full h-[700px] px-20 py-20 item-center border-b-[1px] border-b-[black]">
        <div className="flex justify-center text-center items-center">
        <Title
        title="Visit My Portfolio !!!" 
        desc = "My Projects"
        />
        </div>
        <div className='grid grid-cols-3 gap-14'>
        <ProjectCards
        title = "Weather Forecast"
        desc = "Built with: HTML, CSS JS, API..."
        sub_desc = "Build Status: Completed !!!"
        img = {weather}
        />
        <ProjectCards
        title = "Django Ecommerce"
        desc = "Built with : Python-Django"
        sub_desc = "Build Status: Completed !!!"
        img = {shopping}
        />
        <ProjectCards
        title = "More Projects..."
        desc = "More projects on the way.."
        sub_desc = "Build Status: Under development !!!"
        img = {more_projects}
        />
        </div>
    </section>
  )
}

export default Projects
