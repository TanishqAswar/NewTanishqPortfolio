import { motion } from "framer-motion";
import { styles } from "../styles";
import SolarSystem from "./canvas/SolarSystem";
import { Typewriter } from 'react-simple-typewriter';

// Social icon links in the hero
const HERO_SOCIALS = [
    {
        label: "GitHub",
        href: "https://github.com/TanishqAswar",
        svg: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
        ),
    },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/TanishqAswar/",
        svg: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        ),
    },
    {
        label: "Codeforces",
        href: "https://codeforces.com/profile/Tanishq_CF",
        svg: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5h-3C.672 21 0 20.328 0 19.5V9c0-.828.672-1.5 1.5-1.5h3zm9-4.5c.828 0 1.5.672 1.5 1.5V19.5c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5V4.5C9 3.672 9.672 3 10.5 3h3zm9 7.5c.828 0 1.5.672 1.5 1.5v9c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5v-9c0-.828.672-1.5 1.5-1.5h3z" />
            </svg>
        ),
    },
    {
        label: "LeetCode",
        href: "https://leetcode.com/u/Tanishq__/",
        svg: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H19.4a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382h-8.783z" />
            </svg>
        ),
    },
];

const Hero = () => {
    return (
        <section className={`relative w-full h-screen mx-auto overflow-hidden`}>
            {/* Solar system canvas background — pure 2D, zero WebGL overhead */}
            <SolarSystem />

            {/* Hero text content */}
            <div
                className={`absolute inset-0 top-[120px] max-w-7xl mx-auto z-10 ${styles.paddingX} flex flex-row items-start gap-5 pointer-events-none`}
            >
                {/* Vertical accent line */}
                <div className='flex flex-col justify-center items-center mt-5'>
                    <div className='w-5 h-5 rounded-full bg-[#915eff] shadow-lg shadow-purple-600/50' />
                    <div className='w-1 sm:h-80 h-40 violet-gradient' />
                </div>

                <div className='mt-2 pointer-events-auto'>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                    >
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
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
                        className='mt-8 flex flex-wrap gap-4 items-center'
                    >
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
                    </motion.div>

                    {/* Social icons row */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.55, ease: "easeOut" }}
                        className='mt-6 flex gap-3 flex-wrap'
                    >
                        {HERO_SOCIALS.map((s) => (
                            <a
                                key={s.label}
                                href={s.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                title={s.label}
                                aria-label={s.label}
                                className="w-10 h-10 rounded-full flex items-center justify-center border border-[#915eff]/30 bg-black/30 backdrop-blur-sm text-[#aaa6c3] hover:text-[#915eff] hover:border-[#915eff] hover:bg-[#915eff]/10 hover:scale-110 transition-all duration-300 shadow-md"
                            >
                                {s.svg}
                            </a>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-10 pointer-events-none'>
                <a href='#about' className="pointer-events-auto">
                    <div className='w-[35px] h-[64px] rounded-3xl border-2 border-[#915eff]/60 bg-black/20 backdrop-blur-sm flex justify-center items-start p-2'>
                        <motion.div
                            animate={{ y: [0, 24, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
                            className='w-3 h-3 rounded-full bg-[#915eff] mb-1 shadow-lg shadow-purple-600/50'
                        />
                    </div>
                </a>
            </div>
        </section>
    );
};

export default Hero;
