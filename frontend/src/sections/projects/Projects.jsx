import React from 'react'
import ProjectCard from '../../components/ProjectCard';
import {projects} from '../../data/constants';

const Projects = () => {
  return (
    <>
    <div id='projects' className='border-b-[1px] border-b-amber-200 pt-6'>
        <div className='flex justify-center p-10'><h1 className='text-amber-200 text-4xl'>Projects</h1></div>
        <div className='flex justify-center py-10 mb-12'>
        <div className='grid grid-cols-4 gap-9'>
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
