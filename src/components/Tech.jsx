import React from "react";
import { BallCanvas } from "./canvas"; // We need to ensure BallCanvas is implemented or use a fallback
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";

// Since we haven't implemented BallCanvas to handle text yet, I will create it in a moment.
// I'll assume BallCanvas accepts a 'name' prop to display 3D Text.

const Tech = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} text-center`}>
                    My technical skills
                </p>
                <h2 className={`${styles.sectionHeadText} text-center mb-10`}>
                    Technologies.
                </h2>
            </motion.div>
            <div className='flex flex-row flex-wrap justify-center gap-10'>
                {technologies.map((technology) => (
                    <div className='w-28 h-28' key={technology.name}>
                        <BallCanvas icon={technology.icon} name={technology.name} />
                        <p className="text-center text-secondary text-[12px] mt-2">{technology.name}</p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Tech, "");
