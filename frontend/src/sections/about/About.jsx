import React from "react";
import Sample from '../../assets/sample.jpg';

const About = () => {
  return (
    <div className="">
    <div className="flex justify-center p-4">
      <h2 className="text-white">About Me</h2>
    </div>
    <div className="flex justify-center pb-10">
      <div className="flex justify-center h-96 size-3/5 shadow-2xl z-40 bg-sky-500 shadow-blue-700 rounded-lg">
        <div className="w-1/3">
          <img src={Sample} alt="Picture"  className="h-full object-contain"/>
        </div>
        <div className="w-2/3 p-4">
          <p className="pb-12">
            Hello! I'm Sandra Dakey, a Nutrition and Food Science graduate from
            the University of Ghana, Legon, currently diving into web
            development at MEST Africa.</p> 
            <p className="pb-12">Combining my academic background with
            newfound tech skills, I'm eager to innovate at the intersection of
            nutrition science and digital solutions. My goal is to craft a
            rewarding career in web development, leveraging my diverse expertise
            to create impactful projects. </p>
            <p className="">Beyond coding, I'm dedicated to
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
