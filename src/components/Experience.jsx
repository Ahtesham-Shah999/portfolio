import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import zevenz from "../assets/zevenz.png"
const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
  contentStyle={{
    background: "rgba(0, 0, 0, 0)", // Keep dark background for the content
    color: "#fff", // Keep text color as white
  }}
  contentArrowStyle={{ borderRight: "7px solid #FF7F7F" }} // Red arrow
  date={experience.date}
  icon={
    <div className="flex justify-center items-center w-full h-full ">
      <img
        src={zevenz}
        alt={experience.company_name}
        className="w-[90%] h-[90%] object-contain rounded-3xl"
      />
    </div>
  }
>
  <div>
    <h3 className="text-red-600 text-[24px] font-bold">{experience.title}</h3> {/* Red for title */}
    <p className="text-white text-[16px] font-semibold" style={{ margin: 0 }}>
      Zevenz
    </p>
  </div>

  <ul className="mt-5 list-disc ml-5 space-y-2">
    {experience.points.map((point, index) => (
      <li
        key={`experience-point-${index}`}
        className="text-white text-[14px] pl-1 tracking-wider" // Keep white for points
      >
        {point}
      </li>
    ))}
  </ul>
</VerticalTimelineElement>

  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
  <p className={`${styles.sectionSubText} text-[#FF7F7F] text-center`}>
    What I have done so far
  </p>
  <h2 className={`${styles.sectionHeadText} text-white text-center`}>
    Work Experience.
  </h2>
</motion.div>


      <div className='mt-20 flex flex-col'>
  <VerticalTimeline>
    {experiences.map((experience, index) => (
      <ExperienceCard
        key={`experience-${index}`}
        experience={experience}
      />
    ))}
  </VerticalTimeline>
</div>

    </>
  );
};

export default SectionWrapper(Experience, "work");
