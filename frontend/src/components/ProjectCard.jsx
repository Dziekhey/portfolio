/* eslint-disable react/prop-types */
import React from 'react'

const ProjectCard = ({project}) => {
  return (
    <div>
       <div className="w-72 h-96  bg-gray-700 shadow-2xl shadow-black xl:px-4  xl:py-8 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
      <div className="w-full h-[80%] overflow-hidden rounded-lg">
        <img
          className="w-full h-50 object-contain group-hover:scale-110 duration-300 cursor-pointer"
          src={project.image}
          alt="Image"
        />
      </div>
      <div className="w-full mt-5 flex flex-col gap-6">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-base uppercase text-amber-200 text-designColor font-normal">
              {project.title}
            </h3>
            <div className="flex gap-2">
              <span className="text-lg w-8 h-8 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-amber-200 duration-300 cursor-pointer">
              <a href={project.github}><ion-icon name="logo-github"></ion-icon></a>
              </span>
            </div>
          </div>
          <p className="text-sm tracking-wide mt-3 text-white hover:text-gray-100 duration-300">
            {project.description}
          </p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ProjectCard;
