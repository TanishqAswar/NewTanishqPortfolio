import React from "react";
// import Tilt from "react-tilt"; // Not installed, using standard framer motion hover or just css tilt if needed, or install react-tilt
// Since I can't install new deps easily without blocking, I'll use a custom tilt effect or just simple hover for now, 
// OR I check for react-tilt. It's not in my install list. I will stick to Framer Motion scale/hover.
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => (
    <motion.div
        //  variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className='xs:w-[250px] w-full'
        whileHover={{ scale: 1.05 }}
    >
        <div
            className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
        >
            <div
                className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
            >
                {/* <img // icons are placeholders currently
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        /> */}
                <div className="w-16 h-16 bg-white-100/10 rounded-full flex items-center justify-center text-3xl">
                    {/* Visual placeholder for icon since imports are strings/null */}
                    {index === 0 ? "💻" : index === 1 ? "📱" : index === 2 ? "🛡️" : "🎨"}
                </div>

                <h3 className='text-white text-[20px] font-bold text-center'>
                    {title}
                </h3>
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
                className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
            >
                I'm a skilled software developer with experience in
                JavaScript, C++, and Python, and expertise in frameworks like React, Node.js, and
                Three.js. I'm a quick learner and collaborate closely with clients to
                create efficient, scalable, and user-friendly solutions that solve
                real-world problems. Let's work together to bring your ideas to life!
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
