import React from "react";
// Removed dependencies on BallCanvas for performance
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { textVariant, fadeIn } from "../utils/motion";

const Tech = () => {
    return (
        <div className="py-10">
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} text-center`}>
                    My technical skills
                </p>
                <h2 className={`${styles.sectionHeadText} text-center mb-16`}>
                    Technologies.
                </h2>
            </motion.div>
            
            <div className='flex flex-row flex-wrap justify-center gap-6 max-w-5xl mx-auto'>
                {technologies.map((tech, index) => (
                    <motion.div 
                        variants={fadeIn("up", "spring", index * 0.1, 0.75)}
                        className='w-32 h-32 flex flex-col justify-center items-center bg-tertiary rounded-2xl shadow-card-hover border border-white/5 p-4' 
                        key={tech.name}
                        whileHover={{ scale: 1.1, translateY: -5 }}
                    >
                        <img src={tech.icon} alt={tech.name} className="w-14 h-14 object-contain mb-3" />
                        <p className="text-center text-white-100 font-medium text-[13px]">{tech.name}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default SectionWrapper(Tech, "skills");
