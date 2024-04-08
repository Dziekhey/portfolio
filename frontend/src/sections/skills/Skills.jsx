/* eslint-disable react/prop-types */
import React from 'react'
import { technologies } from '../../data/constants';
import SkillCard from '../../components/SkillCard';

const Skills = () => {
  return (
    <>
      <div id='skills' className='border-b-[1px] pt-3 pb-11 border-b-amber-200'>
        <h1 className='flex justify-center text-amber-200 text-4xl p-12'>Skills</h1>
        <div className='flex justify-center p-5 md:p-10'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-12'>
            {
              technologies.map((technology, index) => (
                <SkillCard key={index} technology={technology} />
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Skills;
