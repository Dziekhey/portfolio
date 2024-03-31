/* eslint-disable react/prop-types */
import React from 'react'
import { technologies } from '../../data/constants';
import SkillCard from '../../components/SkillCard';

const Skills = () => {
  return (
    <>
    <div id='skills-section'>
      <h1 className='flex justify-center text-white p-12'>Skills</h1>
    <div className='flex justify-center p-10'>
    <div className='grid grid-cols-6 gap-12'>
       {
        technologies.map((technology, index) => (<SkillCard key = {index} technology = {technology}/>))
       }
    </div>
    </div>
    </div>
    </>
  )
}

export default Skills;

