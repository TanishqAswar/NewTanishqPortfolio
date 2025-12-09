import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { achievements } from "../constants";

const AchievementCard = ({ index, title, subtitle, points, icon, link }) => (
    <motion.div
        variants={fadeIn("up", "spring", index * 0.5, 0.75)}
        className='bg-tertiary p-5 rounded-2xl w-full sm:w-[320px] hover:shadow-card hover:scale-[1.02] transition-all'
    >
        <div className='mt-1 flex flex-col items-center gap-4'>
            <div className="text-4xl">
                {/* Visual Icon placeholder */}
                {icon ? <span role="img" aria-label={title}>{icon}</span> : "🏆"}
            </div>
            <div className="text-center">
                <h3 className='text-white font-bold text-[20px]'>{title}</h3>
                <p className='text-secondary text-[14px] font-semibold mt-1'>{subtitle}</p>
            </div>

            {points && points.length > 0 && (
                <ul className="list-disc list-inside text-left w-full mt-2 text-white-100 text-[12px] space-y-1">
                    {points.map((pt, i) => <li key={i}>{pt}</li>)}
                </ul>
            )}

            {link && (
                <div className="mt-2 text-center">
                    <a href={link} target="_blank" rel="noopener noreferrer" className="text-[12px] text-blue-400 hover:text-blue-300 underline">View Credential</a>
                </div>
            )}

        </div>
    </motion.div>
);

const Achievements = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} text-center`}>What I have achieved</p>
                <h2 className={`${styles.sectionHeadText} text-center`}>Achievements & Accolades.</h2>
            </motion.div>

            <div className='mt-20 flex flex-wrap justify-center gap-7'>
                {achievements.map((achievement, index) => (
                    <AchievementCard key={`achievement-${index}`} index={index} {...achievement} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Achievements, "achievements");
