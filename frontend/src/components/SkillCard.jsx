/* eslint-disable react/prop-types */
import React from 'react'
import github from '../assets/tech/GitHub.png';

const SkillCard = ({technology}) => {
  return (
    <div className='hover:scale-125'>
      <div className="size-32 p-3 bg-slate-800 rounded-2xl shadow-inner shadow-pink-600 z-40 hover:cursor-pointer scale-125">
        <img src={github} className='object-contain w-full h-[85%] overflow-hidden '/>
    <h3 className='text-white text-center'>{technology.name}</h3>
    </div>
    <div className='pt-4'>
    </div>
    </div>
  )
}

export default SkillCard;
