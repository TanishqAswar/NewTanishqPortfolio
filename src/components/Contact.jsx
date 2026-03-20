import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import Earth from "./canvas/Earth"; // This is now pure CSS
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { target } = e;
        const { name, value } = target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // Simulate submission
        setTimeout(() => {
            setLoading(false);
            alert("Thank you. I will get back to you as soon as possible.");
            setForm({ name: "", email: "", message: "" });
        }, 1000);
    };

    return (
        <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
            <motion.div
                variants={slideIn("left", "tween", 0.2, 1)}
                className='flex-[0.75] bg-black-100 p-8 rounded-2xl border border-white/5 shadow-card'
            >
                <p className={styles.sectionSubText}>Get in touch</p>
                <h3 className={styles.sectionHeadText}>Contact.</h3>

                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className='mt-12 flex flex-col gap-8'
                >
                    <label className='flex flex-col'>
                        <span className='text-white font-medium mb-4'>Your Name</span>
                        <input
                            type='text' name='name' value={form.name} onChange={handleChange}
                            placeholder="What's your full name?"
                            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border border-transparent focus:border-[#915eff] transition-all font-medium'
                        />
                    </label>
                    <label className='flex flex-col'>
                        <span className='text-white font-medium mb-4'>Your Email</span>
                        <input
                            type='email' name='email' value={form.email} onChange={handleChange}
                            placeholder="What's your email address?"
                            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border border-transparent focus:border-[#915eff] transition-all font-medium'
                        />
                    </label>
                    <label className='flex flex-col'>
                        <span className='text-white font-medium mb-4'>Your Message</span>
                        <textarea
                            rows={7} name='message' value={form.message} onChange={handleChange}
                            placeholder='What do you want to say?'
                            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border border-transparent focus:border-[#915eff] transition-all font-medium resize-none'
                        />
                    </label>

                    <button
                        type='submit'
                        className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md hover:bg-[#915eff] transition-colors duration-300'
                    >
                        {loading ? "Sending..." : "Send Message"}
                    </button>
                </form>

                {/* Resume Download at the bottom */}
                <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-6">
                    <div className="flex flex-col items-center sm:items-start">
                        <h4 className="text-white font-medium text-[18px]">Want to see my full profile?</h4>
                        <p className="text-secondary text-[14px] mt-1">Download my resume for a detailed view.</p>
                    </div>
                    <a
                        href="https://shorturl.at/zkn3x"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="resume-btn"
                    >
                        <span>📄 Download Resume</span>
                    </a>
                </div>

                {/* Socials */}
                <div className="mt-8 flex gap-6 text-[15px] font-medium justify-center sm:justify-start">
                    <a href="https://github.com/TanishqAswar" target="_blank" rel="noreferrer" className="text-secondary hover:text-[#915eff] transition-colors">GitHub</a>
                    <a href="https://www.linkedin.com/in/TanishqAswar/" target="_blank" rel="noreferrer" className="text-secondary hover:text-[#915eff] transition-colors">LinkedIn</a>
                    <a href="mailto:tanishqaswar12@gmail.com" className="text-secondary hover:text-[#915eff] transition-colors">Email</a>
                </div>
            </motion.div>

            <motion.div
                variants={slideIn("right", "tween", 0.2, 1)}
                className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
            >
                {/* Now using the CSS Earth component */}
                <Earth />
            </motion.div>
        </div>
    );
};

export default SectionWrapper(Contact, "contact");
