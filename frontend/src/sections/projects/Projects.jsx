import React from 'react'
import ProjectCard from '../../components/ProjectCard';
import {projects} from '../../data/constants';

const Projects = () => {
  return (
    <>
    <div id='project-section'>
        <div className='flex justify-center p-10'><h1 className='text-white'>Projects</h1></div>
        <div className='flex justify-center'>
        <div className='grid grid-cols-3 gap-12'>
          {
            projects.map((project, index) => (<ProjectCard key= {index} project={project}/>))
          }
        </div>
      </div>
    </div>
    </>
  )
}

export default Projects;
