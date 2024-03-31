import React from "react";
import {VerticalTimeline,} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
import {experiences} from '../../data/constants.jsx'
import ExperienceCard from "../../components/ExperienceCard.jsx";




const Experiences = () => {
  return (
    <>
    <div id='experience-section'>
       <motion.div>
        <h1 className='text-white flex justify-center pt-10'>Work Experience</h1>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
      </div>
    </>
  );
};

export default Experiences;
