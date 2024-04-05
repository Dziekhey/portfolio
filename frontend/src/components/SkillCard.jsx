/* eslint-disable react/prop-types */
import React from 'react'


const SkillCard = ({technology}) => {
  return (
    
      <div className={`w-60 h-36 shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${technology.style}`}>
        <img src={technology.src} className='object-contain w-full h-[85%] overflow-hidden '/>
    <h3 className='text-white text-center'>{technology.name}</h3>
    </div>
   
  )
}

export default SkillCard;
