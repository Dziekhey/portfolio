/* eslint-disable react/prop-types */
import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}  
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <div className="flex justify-between">
          <h3 className="text-[#da38ca] text-[20px] pt-4 font-semibold">
            {experience.organisation}
          </h3>
          <h5 className="text-[#da38ca] text-[20px] pt-4 font-semibold">
            {experience.location}
          </h5>
        </div>
        <p className="text-rose-400">{experience.subtitle}</p>
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
