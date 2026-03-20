import { motion } from "framer-motion";

import { styles } from "../styles";
import SolarSystem from "./canvas/SolarSystem";

import { Typewriter } from 'react-simple-typewriter'

const Hero = () => {
    return (
        <section className={`relative w-full h-screen mx-auto overflow-hidden`}>
            {/* The new SolarSystem handles all background space visuals, zero lag */}
            <SolarSystem />

            <div
                className={`absolute inset-0 top-[120px] max-w-7xl mx-auto z-10 ${styles.paddingX} flex flex-row items-start gap-5 pointer-events-none`}
            >
                <div className='flex flex-col justify-center items-center mt-5'>
                    <div className='w-5 h-5 rounded-full bg-[#915eff] shadow-lg shadow-purple-600/50' />
                    <div className='w-1 sm:h-80 h-40 violet-gradient' />
                </div>

                <div className='mt-2 pointer-events-auto'>
                    <h1 className={`${styles.heroHeadText} text-white`}>
                        Hare Krishna, I'm{' '}
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#915eff] to-[#a855f7]'>
                            Tanishq
                        </span>
                    </h1>
                    <p className={`${styles.heroSubText} mt-2 text-[#aaa6c3]`}>
                        I am a{' '}
                        <span className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#915eff] to-[#c084fc]'>
                            <Typewriter
                                words={['Full-Stack Developer', 'Competitive Programmer', 'Infosec Enthusiast']}
                                loop={0}
                                cursor
                                cursorStyle='|'
                                typeSpeed={65}
                                deleteSpeed={45}
                                delaySpeed={1200}
                            />
                        </span>
                    </p>

                    {/* Hero CTA Buttons */}
                    <div className='mt-8 flex flex-wrap gap-4 items-center'>
                        <a
                            href="https://shorturl.at/zkn3x"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="resume-btn resume-btn-large"
                        >
                            <span>📄 Download Resume</span>
                        </a>
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 px-8 py-[14px] rounded-full border border-[#915eff]/60 bg-black/30 backdrop-blur-md text-[#915eff] font-semibold text-[16px] hover:bg-[#915eff]/10 transition-all duration-300 hover:border-[#915eff]"
                        >
                            <span>✉️ Contact Me</span>
                        </a>
                    </div>
                </div>
            </div>

            <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-10 pointer-events-none'>
                <a href='#about' className="pointer-events-auto">
                    <div className='w-[35px] h-[64px] rounded-3xl border-2 border-[#915eff]/60 bg-black/20 backdrop-blur-sm flex justify-center items-start p-2'>
                        <motion.div
                            animate={{
                                y: [0, 24, 0],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: "loop",
                            }}
                            className='w-3 h-3 rounded-full bg-[#915eff] mb-1 shadow-lg shadow-purple-600/50'
                        />
                    </div>
                </a>
            </div>
        </section>
    );
};

export default Hero;
