import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";

const POR = () => {
    return (
        <div className={`mt-12 bg-black-100 rounded-[20px]`}>
            <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
                <motion.div variants={textVariant()}>
                    <p className={styles.sectionSubText}>Leadership</p>
                    <h2 className={styles.sectionHeadText}>Position of Responsibility.</h2>
                </motion.div>

                <motion.div
                    variants={fadeIn("up", "spring", 0.5, 0.75)}
                    className="mt-10 bg-[#1d1836] p-8 rounded-3xl w-full border border-secondary/30 relative overflow-hidden"
                >
                    {/* Decorative blob or shield can go here */}
                    <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>

                    <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                        <div className="flex-1 text-center md:text-left">
                            <h3 className="text-white text-[30px] font-bold">Axios — InfoSec Wing Member</h3>
                            <p className="text-secondary text-[18px] mt-2">IIIT Lucknow</p>
                        </div>
                        <div className="w-full md:w-auto bg-primary/50 p-6 rounded-xl border border-white/10">
                            <h4 className="text-white font-bold mb-4">Key Responsibilities:</h4>
                            <ul className="text-white-100 text-[14px] space-y-3">
                                <li className="flex items-start gap-3">
                                    <span className="text-2xl">🎯</span>
                                    <span>Led CTF (Capture The Flag) training sessions for students, enhancing their cybersecurity problem-solving skills.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default SectionWrapper(POR, "por");
