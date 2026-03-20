import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants';

const Navbar = () => {
    const [active, setActive] = useState('');
    const [toggle, setToggle] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`${styles.paddingX} w-full flex items-center py-4 fixed top-0 z-20 transition-all duration-300 ${
                scrolled ? 'glass-navbar shadow-lg' : 'bg-transparent'
            }`}
        >
            <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
                <Link
                    to='/'
                    className='flex items-center gap-3'
                    onClick={() => {
                        setActive("");
                        window.scrollTo(0, 0);
                    }}
                >
                    {/* Logo */}
                    <div className='w-9 h-9 rounded-full bg-gradient-to-br from-[#915eff] to-[#6d28d9] flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-purple-900/40'>
                        T
                    </div>
                    <p className='text-white text-[17px] font-semibold cursor-pointer tracking-wide'>
                        Tanishq
                        <span className='text-[#915eff]'>.</span>
                    </p>
                </Link>

                {/* Desktop Nav */}
                <ul className='list-none hidden sm:flex flex-row gap-8 items-center'>
                    {navLinks.map((link) => (
                        <li
                            key={link.id}
                            className={`${
                                active === link.title
                                    ? "text-white"
                                    : "text-[#aaa6c3]"
                            } hover:text-white text-[15px] font-medium cursor-pointer transition-colors duration-200`}
                            onClick={() => setActive(link.title)}
                        >
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    ))}
                    <li>
                        <a
                            href="https://shorturl.at/zkn3x"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="resume-btn text-sm"
                        >
                            <span>📄 Resume</span>
                        </a>
                    </li>
                </ul>

                {/* Mobile Menu */}
                <div className='sm:hidden flex flex-1 justify-end items-center'>
                    <div
                        className='w-[28px] h-[28px] object-contain cursor-pointer text-white text-2xl'
                        onClick={() => setToggle(!toggle)}
                    >
                        {toggle ? '✕' : '☰'}
                    </div>

                    <div className={`${!toggle ? 'hidden' : 'flex'} p-6 glass-navbar absolute top-16 right-0 mx-4 my-2 min-w-[180px] z-10 rounded-2xl border border-white/10 shadow-xl`}>
                        <ul className='list-none flex justify-end items-start flex-col gap-4 w-full'>
                            {navLinks.map((link) => (
                                <li
                                    key={link.id}
                                    className={`${
                                        active === link.title
                                            ? "text-white"
                                            : "text-[#aaa6c3]"
                                    } font-medium cursor-pointer text-[15px] w-full`}
                                    onClick={() => {
                                        setToggle(!toggle);
                                        setActive(link.title);
                                    }}
                                >
                                    <a href={`#${link.id}`}>{link.title}</a>
                                </li>
                            ))}
                            <li className='pt-2 border-t border-white/10 w-full'>
                                <a
                                    href="https://shorturl.at/zkn3x"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="resume-btn text-sm w-full justify-center"
                                >
                                    <span>📄 Resume</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
