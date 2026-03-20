import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";

const POR = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} text-center`}>Leadership</p>
                <h2 className={`${styles.sectionHeadText} text-center`}>Position of Responsibility.</h2>
            </motion.div>

            <div className='mt-20 flex flex-col max-w-4xl mx-auto'>
                <div className="ml-4 sm:ml-10">
                    <div className='flex flex-col relative pl-8 pb-10 border-l-2 border-[#915eff]/30 last:border-transparent last:pb-0'>
                        {/* Timeline Dot */}
                        <div className='absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#915eff] shadow-[0_0_15px_rgba(145,94,255,0.6)]' />

                        <div
                            className='bg-black-200/50 backdrop-blur-sm p-6 rounded-2xl w-full relative border border-white/5 hover:border-[#915eff]/30 transition-colors shadow-card-hover'
                        >
                            <div>
                                <h3 className='text-white text-[22px] font-bold tracking-wide'>Senior Member Part-time</h3>
                                <p
                                    className='text-[#aaa6c3] text-[15px] font-medium mt-1'
                                    style={{ margin: 0 }}
                                >
                                    Infosec Wing Axios at IIIT Lucknow
                                </p>
                                <p className="text-[#915eff] text-[13px] font-semibold mt-2">Jun 2024 - Present</p>
                            </div>

                            <ul className='mt-5 list-disc ml-5 space-y-3'>
                                <li className='text-white-100 text-[14px] pl-1 tracking-wider leading-relaxed'>
                                    Orchestrated cybersecurity training for 100+ students on Computer Networks and picoCTF/TryHackMe.
                                </li>
                                <li className='text-white-100 text-[14px] pl-1 tracking-wider leading-relaxed'>
                                    Designed and executed 2 campus-wide CTFs focused on Web Exploitation and OWASP Top 10 vulnerabilities.
                                </li>
                                <li className='text-white-100 text-[14px] pl-1 tracking-wider leading-relaxed'>
                                    Specialized in Web Exploitation and Networking.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SectionWrapper(POR, "por");
