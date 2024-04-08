import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
import { experiences } from '../../data/constants.jsx';
import ExperienceCard from "../../components/ExperienceCard.jsx";

const Experiences = () => {
  return (
    <>
      <div id='experience' className="border-b-[1px] border-b-amber-200 pb-16">
        <motion.div>
          <h1 className='text-amber-200 text-4xl flex justify-center pt-20'>Experience</h1>
        </motion.div>

        <div className="mt-20 flex flex-col items-center">
          <VerticalTimeline >
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
