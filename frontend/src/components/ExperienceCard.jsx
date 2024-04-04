/* eslint-disable react/prop-types */
import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#303a4b",
        color: "#ffff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #FFC94A" }}
      date={experience.date} 
      
    >
      <div>
        <h3 className="text-amber-200 text-[24px] font-bold">{experience.title}</h3>
        <div className="flex justify-between">
          <h3 className="text-white text-[20px] pt-4 font-semibold">
            {experience.organisation}
          </h3>
          <h5 className="text-white text-[20px] pt-4 font-semibold">
            {experience.location}
          </h5>
        </div>
        <p className="text-[#1f1a1a]">{experience.subtitle}</p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={index}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

export default ExperienceCard;
