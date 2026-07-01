import React from 'react'
import eva from '../assets/images/eva.jpg'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Hero = ({
    title = "Hi, I'm Eva.",
    subtitle = 'Front End Developer',
    blurb = 'I build responsive, user-friendly web experiences with clean code and design.'
}) => {
    return (
        <div className="bg-[var(--background)] py-20 mb-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-16">
                <section className="flex-1 md:text-left">
                    <div>
                        <h1 className="text-3xl sm:text-5xl md:text-6xl">
                            {title}
                        </h1>
                        <h3 className="my-4 text-xl text-[var(--text)]">
                            {subtitle}
                        </h3>
                        <p> {blurb} </p>
                        <div className='mt-6'>
                            <button className="bg-[var(--olive-dark)] !text-white inline-flex items-center justify-center px-5 py-2 rounded-full hover:bg-[var(--olive-light)] transition-colors duration-300 uppercase">
                                View my work
                            </button>
                        </div>
                        <div className='flex gap-4 mt-6 text-3xl text-[var(--text)]'>
                            <FaGithub />
                            <FaLinkedin />
                            <MdEmail />
                        </div>
                    </div>
                </section>
                <section className="flex-1 flex items-center md:justify-end">
                    <img
                        className="h-90 w-auto rounded-[25px]"
                        src={eva}
                        alt="Eva Frankovic"
                    />
                </section>
            </div>
        </div>
    )
}

export default Hero
