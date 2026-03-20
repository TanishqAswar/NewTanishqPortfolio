import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ProjectCard = ({
    index,
    name,
    description,
    tags,
    image,
    source_code_link,
    live_link
}) => {
    return (
        <motion.div variants={fadeIn("up", "spring", index * 0.2, 0.75)}>
            <div
                className='bg-tertiary/80 backdrop-blur-sm p-5 rounded-2xl sm:w-[360px] w-full border border-white/5 hover:border-[#915eff]/40 transition-all duration-300 shadow-card-hover group'
            >
                <div className='relative w-full h-[230px] rounded-2xl overflow-hidden'>
                    <img
                        src={image}
                        alt={name}
                        className='w-full h-full object-cover rounded-2xl group-hover:scale-110 transition-transform duration-500'
                    />

                    <div className='absolute inset-0 flex justify-end m-3 gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                        {live_link && (
                            <div
                                onClick={() => window.open(live_link, "_blank")}
                                className='w-10 h-10 rounded-full bg-black/70 backdrop-blur flex justify-center items-center cursor-pointer border border-white/10 hover:bg-[#915eff] transition-colors shadow-lg'
                                title="Live Demo"
                            >
                                <span className="text-xl">🚀</span>
                            </div>
                        )}
                        <div
                            onClick={() => window.open(source_code_link, "_blank")}
                            className='w-10 h-10 rounded-full bg-black/70 backdrop-blur flex justify-center items-center cursor-pointer border border-white/10 hover:bg-[#915eff] transition-colors shadow-lg'
                            title="Source Code"
                        >
                            <span className="text-xl">💻</span>
                        </div>
                    </div>
                </div>

                <div className='mt-6'>
                    <h3 className='text-white font-bold text-[24px] tracking-wide'>{name}</h3>
                    <p className='mt-2 text-[#aaa6c3] text-[14px] leading-relaxed'>{description}</p>
                </div>

                <div className='mt-5 flex flex-wrap gap-2'>
                    {tags.map((tag) => (
                        <span
                            key={`${name}-${tag.name}`}
                            className={`text-[13px] font-medium px-2 py-1 rounded bg-black-200 border border-white/5 ${tag.color}`}
                        >
                            #{tag.name}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const Works = () => {
    return (
        <div className="py-10">
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText}`}>My work</p>
                <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
            </motion.div>

            <div className='w-full flex'>
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className='mt-3 text-[#aaa6c3] text-[17px] max-w-3xl leading-[30px]'
                >
                    The following projects showcase my full-stack and competitive programming expertise 
                    through real-world applications. Each project is concisely described with 
                    links to code repositories and live demos where applicable, reflecting my 
                    ability to architect robust solutions bridging frontend, backend, and security domains.
                </motion.p>
            </div>

            <div className='mt-20 flex flex-wrap gap-7'>
                {projects.map((project, index) => (
                    <ProjectCard key={`project-${index}`} index={index} {...project} />
                ))}
            </div>
        </div>
    );
};

export default SectionWrapper(Works, "projects");
