import React from "react";
// import Experiences from '../data/Experiences.JSON';

const ExperienceCard = () => {
  return (
    <div className="w-96 h-40 p-3 bg-violet-400 rounded-3xl shadow-2xl shadow-violet-600 z-40">
      <div className="grid justify-items-stretch">
        <h4 className="justify-self-end">2015-2018</h4>
      </div>
      <div>
        <h4>National Service Personnel - Fermentation Operator</h4>
      </div>
      <div>
        <h5>Accra Brewery PLC</h5>
        <h5>Graphic road, Accra</h5>
      </div>
      <div>
        <h5>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
          doloribus enim sunt eveniet, nesciunt illum? Rerum architecto neque
          quas sed esse voluptas sequi nostrum. Optio commodi quas porro quam
          quisquam.
        </h5>
      </div>
    </div>
  );
};

export default ExperienceCard;
