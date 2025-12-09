import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
    return (
        <div className='flex flex-col relative pl-8 pb-10 border-l-2 border-secondary'>
            {/* Timeline Dot */}
            <div className='absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#915eff]' />

            <div
                className='bg-[#1d1836] p-5 rounded-2xl sm:w-[full] w-full relative'
            >
                <div className="absolute left-[-26px] top-4 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-r-[10px] border-r-[#1d1836] hidden sm:block" />

                <div>
                    <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
                    <p
                        className='text-secondary text-[16px] font-semibold'
                        style={{ margin: 0 }}
                    >
                        {experience.company_name}
                    </p>
                    <p className="text-gray-400 text-[12px] mt-1">{experience.date}</p>
                </div>

                <ul className='mt-5 list-disc ml-5 space-y-2'>
                    {experience.points.map((point, index) => (
                        <li
                            key={`experience-point-${index}`}
                            className='text-white-100 text-[14px] pl-1 tracking-wider'
                        >
                            {point}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

const Experience = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} text-center`}>
                    What I have done so far
                </p>
                <h2 className={`${styles.sectionHeadText} text-center`}>
                    Work Experience.
                </h2>
            </motion.div>

            <div className='mt-20 flex flex-col'>
                <div className="ml-4 sm:ml-10">
                    {experiences.map((experience, index) => (
                        <ExperienceCard
                            key={`experience-${index}`}
                            experience={experience}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default SectionWrapper(Experience, "work");
