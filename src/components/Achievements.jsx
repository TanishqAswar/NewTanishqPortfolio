import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { achievements } from "../constants";

const AchievementCard = ({ index, title, subtitle, points, icon, link }) => (
    <motion.div
        variants={fadeIn("up", "spring", index * 0.15, 0.75)}
        className='bg-tertiary/80 backdrop-blur-md p-6 rounded-2xl w-full sm:w-[320px] shadow-card border border-white/5 hover:border-[#915eff]/30 hover:scale-[1.03] transition-all duration-300'
    >
        <div className='flex flex-col items-center gap-3'>
            <div className="w-16 h-16 rounded-full bg-black-200 flex items-center justify-center text-3xl shadow-inner border border-white/5">
                {icon ? <span role="img" aria-label={title}>{icon}</span> : "🏆"}
            </div>
            <div className="text-center mt-2">
                <h3 className='text-white font-bold text-[20px] tracking-wide'>{title}</h3>
                <p className='text-[#915eff] text-[14px] font-semibold mt-1'>{subtitle}</p>
            </div>

            {points && points.length > 0 && (
                <ul className="list-disc list-outside ml-4 mt-3 text-white-100 text-[13px] leading-relaxed space-y-2 w-full">
                    {points.map((pt, i) => <li key={i}>{pt}</li>)}
                </ul>
            )}

            {link && (
                <div className="mt-4 text-center w-full">
                    <a 
                        href={link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-block py-2 px-4 rounded-full bg-black-200 text-[#915eff] text-[13px] font-medium border border-[#915eff]/30 hover:bg-[#915eff] hover:text-white transition-colors w-full"
                    >
                        View Profile
                    </a>
                </div>
            )}
        </div>
    </motion.div>
);

const Achievements = () => {
    return (
        <div className="py-10">
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} text-center`}>What I have achieved</p>
                <h2 className={`${styles.sectionHeadText} text-center mb-10`}>Achievements & Accolades.</h2>
            </motion.div>

            <div className='flex flex-wrap justify-center gap-8 max-w-7xl mx-auto'>
                {achievements.map((achievement, index) => (
                    <AchievementCard key={`achievement-${index}`} index={index} {...achievement} />
                ))}
            </div>
        </div>
    );
};

export default SectionWrapper(Achievements, "achievements");
