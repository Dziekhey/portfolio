import React from "react";
import Sample from '../../assets/Sandypic.jpg';

const About = () => {
  return (
    <div id="about" className="border-b-[1px] border-b-amber-200 pt-4 pb-7">
    <div className="flex justify-center pt-11 ">
      <h1 className="text-amber-200 text-4xl">About Me</h1>
    </div>
    <div className="flex justify-center p-10">
      <div className="flex justify-center h-auto w-4/5 shadow-md z-30 bg-gray-900 shadow-blue-300 rounded-lg">
        <div className="w-1/3">
          <img src={Sample} alt="Picture"  className="h-full w-full overflow-hidden"/>
        </div>
        <div className="w-3/4 p-4">
          <p className="text-white pt-4 pb-12">
            Hello! I'm Sandra Dakey, a Nutrition and Food Science graduate from
            the University of Ghana, Legon, currently diving into web
            development at MEST Africa.</p> 
            <p className="text-white pb-12">Combining my academic background with
            newfound tech skills, I'm eager to innovate at the intersection of
            nutrition science and digital solutions. My goal is to craft a
            rewarding career in web development, leveraging my diverse expertise
            to create impactful projects. </p>
            <p className="text-white">Beyond coding, I'm dedicated to
            continuous learning and community engagement, driven by a passion
            for collaboration. Join me on this exciting journey as I navigate
            the ever-evolving world of technology with curiosity, creativity,
            and a drive for excellence.
          </p>
        </div>
        </div>
      </div>
      </div>
  );
};

export default About;
