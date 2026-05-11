import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import Earth from "./canvas/Earth";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const SOCIALS = [
    {
        label: "GitHub",
        href: "https://github.com/TanishqAswar",
        svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>,
    },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/TanishqAswar/",
        svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
    },
    {
        label: "Codeforces",
        href: "https://codeforces.com/profile/Tanishq_CF",
        svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5h-3C.672 21 0 20.328 0 19.5V9c0-.828.672-1.5 1.5-1.5h3zm9-4.5c.828 0 1.5.672 1.5 1.5V19.5c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5V4.5C9 3.672 9.672 3 10.5 3h3zm9 7.5c.828 0 1.5.672 1.5 1.5v9c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5v-9c0-.828.672-1.5 1.5-1.5h3z"/></svg>,
    },
    {
        label: "LeetCode",
        href: "https://leetcode.com/u/Tanishq__/",
        svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H19.4a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382h-8.783z"/></svg>,
    },
    {
        label: "Email",
        href: "mailto:tanishqaswar2005@gmail.com",
        svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
    },
    {
        label: "+91 95032 84589",
        href: "tel:+919503284589",
        svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.56-.56a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92l.02 2z"/></svg>,
    },
];

const Contact = () => {
    const formRef = useRef();
    const [form, setForm]       = useState({ name: "", email: "", message: "" });
    const [loading, setLoading] = useState(false);
    const [sent, setSent]       = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
        const body    = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
        window.open(`mailto:tanishqaswar2005@gmail.com?subject=${subject}&body=${body}`, "_blank");
        setTimeout(() => {
            setLoading(false);
            setSent(true);
            setForm({ name: "", email: "", message: "" });
            setTimeout(() => setSent(false), 4000);
        }, 800);
    };

    return (
        <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
            {/* ── Form panel ─────────────────────────────────────── */}
            <motion.div
                variants={slideIn("left", "tween", 0.2, 1)}
                className="flex-[0.75] bg-black-100 p-8 rounded-2xl border border-white/5 shadow-card"
            >
                <p className={styles.sectionSubText}>Get in touch</p>
                <h3 className={styles.sectionHeadText}>Contact.</h3>

                <form ref={formRef} onSubmit={handleSubmit} className="mt-10 flex flex-col gap-6">
                    {[
                        { id: "name",    label: "Your Name",    type: "text",  ph: "What's your full name?" },
                        { id: "email",   label: "Your Email",   type: "email", ph: "What's your email address?" },
                    ].map(f => (
                        <label key={f.id} className="flex flex-col gap-3">
                            <span className="text-white font-medium">{f.label}</span>
                            <input
                                type={f.type} name={f.id}
                                value={form[f.id]} onChange={handleChange}
                                placeholder={f.ph} required
                                className="bg-tertiary py-4 px-6 placeholder:text-[#6b7280] text-white rounded-lg outline-none border border-transparent focus:border-[#915eff] transition-all duration-300 font-medium"
                            />
                        </label>
                    ))}
                    <label className="flex flex-col gap-3">
                        <span className="text-white font-medium">Your Message</span>
                        <textarea
                            rows={5} name="message"
                            value={form.message} onChange={handleChange}
                            placeholder="What do you want to say?" required
                            className="bg-tertiary py-4 px-6 placeholder:text-[#6b7280] text-white rounded-lg outline-none border border-transparent focus:border-[#915eff] transition-all duration-300 font-medium resize-none"
                        />
                    </label>

                    <button type="submit" className="resume-btn self-start" disabled={loading}>
                        <span>{loading ? "Opening mail…" : sent ? "✅ Done!" : "📨 Send Message"}</span>
                    </button>
                </form>

                {/* ── Social links ──────────────────────────────────────── */}
                <div className="mt-8 pt-6 border-t border-white/10">
                    <p className="text-[#aaa6c3] text-[13px] font-medium mb-4 uppercase tracking-widest">Find me on</p>
                    <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                        {SOCIALS.map(s => (
                            <a
                                key={s.label}
                                href={s.href}
                                target={s.href.startsWith("mailto") || s.href.startsWith("tel") ? "_self" : "_blank"}
                                rel="noopener noreferrer"
                                title={s.label}
                                className="flex flex-col items-center gap-1.5 py-3 px-2 rounded-xl bg-[#0f0c29] border border-white/5 hover:border-[#915eff]/50 hover:bg-[#915eff]/10 text-[#aaa6c3] hover:text-[#915eff] transition-all duration-300 group"
                            >
                                <span className="group-hover:scale-110 transition-transform duration-300">{s.svg}</span>
                                <span className="text-[10px] font-medium text-center leading-tight">{s.label}</span>
                            </a>
                        ))}
                    </div>
                </div>

                {/* ── Resume CTA ────────────────────────────────────────── */}
                <div className="mt-6 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div>
                        <p className="text-white font-medium">Want my full profile?</p>
                        <p className="text-[#aaa6c3] text-[13px] mt-0.5">Download my resume for a detailed view.</p>
                    </div>
                    <a href="https://shorturl.at/zkn3x" target="_blank" rel="noopener noreferrer" className="resume-btn whitespace-nowrap">
                        <span>📄 Resume</span>
                    </a>
                </div>
            </motion.div>

            {/* ── Globe panel ────────────────────────────────────── */}
            <motion.div
                variants={slideIn("right", "tween", 0.2, 1)}
                className="xl:flex-1 xl:h-auto md:h-[500px] h-[350px]"
            >
                <Earth />
            </motion.div>
        </div>
    );
};

export default SectionWrapper(Contact, "contact");
