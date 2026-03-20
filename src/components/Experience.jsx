import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
    return (
        <div className='flex flex-col relative pl-8 pb-10 border-l-2 border-[#915eff]/30 last:border-transparent last:pb-0'>
            {/* Timeline Dot */}
            <div className='absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#915eff] shadow-[0_0_15px_rgba(145,94,255,0.6)]' />

            <div
                className='bg-black-200/50 backdrop-blur-sm p-6 rounded-2xl w-full relative border border-white/5 hover:border-[#915eff]/30 transition-colors shadow-card-hover'
            >
                <div>
                    <h3 className='text-white text-[22px] font-bold tracking-wide'>{experience.title}</h3>
                    <p
                        className='text-[#aaa6c3] text-[15px] font-medium mt-1'
                        style={{ margin: 0 }}
                    >
                        {experience.company_name}
                    </p>
                    <p className="text-[#915eff] text-[13px] font-semibold mt-2">{experience.date}</p>
                </div>

                <ul className='mt-5 list-disc ml-5 space-y-3'>
                    {experience.points.map((point, index) => (
                        <li
                            key={`experience-point-${index}`}
                            className='text-white-100 text-[14px] pl-1 tracking-wider leading-relaxed'
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
                    My academic background
                </p>
                <h2 className={`${styles.sectionHeadText} text-center`}>
                    Education.
                </h2>
            </motion.div>

            <div className='mt-20 flex flex-col max-w-4xl mx-auto'>
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
