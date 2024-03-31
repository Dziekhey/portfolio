import React from 'react'
import logo from '../../assets/LOGO.png';

const Header = () => {
  return (
    <div>
      <header className='flex h-12 justify-between p-2 px-10 bg-black text-white'>
        <div className='hover: cursor-pointer'>
      <h1 className='italic'>Dziekhey</h1>
        </div>
        <div className='pt-4 decoration-white no-underline'>
          <a href='' className='no-underline text-inherit'><span className='px-4'>Home</span></a>
          <a href='#about-section' className='no-underline text-inherit'><span className='px-4'>About</span></a>
          <a href='#skills-section' className='no-underline text-inherit'><span className='px-4'>Skills</span></a>
          <a href='#experience-section' className='no-underline text-inherit'><span className='px-4'>Experiences</span></a>
          <a href='' className='no-underline text-inherit'><span className='px-4'>Achievements</span></a>
          <a href='#project-section' className='no-underline text-inherit'><span className='px-4'>Projects</span></a>
          <a href='' className='no-underline text-inherit'><span className='px-4'>Contact</span></a>
        </div>
      </header>
    </div>
  )
}

export default Header;
