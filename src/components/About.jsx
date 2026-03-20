import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => (
    <motion.div
        variants={fadeIn("right", "spring", index * 0.2, 0.75)}
        className='xs:w-[250px] w-full'
        whileHover={{ scale: 1.05 }}
    >
        <div className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card-hover'>
            <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
                <div className="w-16 h-16 bg-white-100/10 rounded-full flex items-center justify-center text-3xl shadow-lg shadow-purple-900/40">
                    {index === 0 ? "💻" : index === 1 ? "🛡️" : "🧠"}
                </div>
                <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
            </div>
        </div>
    </motion.div>
);

const About = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>Overview.</h2>
            </motion.div>

            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className='mt-4 text-[#aaa6c3] text-[17px] max-w-3xl leading-[30px]'
            >
                I'm a Full-Stack Developer with strong expertise in Data Structures, Algorithms, and Information Security. 
                I hold an 8.61 CGPA from IIIT Lucknow and am proficient in C++, JavaScript, Python, and Java. 
                My technical stack includes React, Next.js, Node.js, and MongoDB, alongside hands-on experience 
                architecting scalable systems on AWS/Vercel and integrating GenAI (Google Gemini). 
                I am a quick learner who actively collaborates to create efficient, secure, and user-centric solutions.
            </motion.p>

            <div className='mt-20 flex flex-wrap gap-10 justify-center'>
                {services.map((service, index) => (
                    <ServiceCard key={service.title} index={index} {...service} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(About, "about");
