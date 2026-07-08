import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/images/logo.png'

const NavBar = () => {
    const linkClass =
        ({ isActive }) => isActive
            ? 'px-4 py-4 uppercase underline underline-offset-8'
            : 'px-4 py-4 uppercase'

    return (
        <nav className="bg-[var(--background)]">
            <div className="mx-auto max-w-8xl px-5 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center gap-4 py-6 md:h-32 md:flex-row md:justify-between md:py-0">
                    <div className="flex flex-col items-center gap-4 md:w-full md:flex-row md:items-stretch md:justify-between">
                        <NavLink className="flex flex-shrink-0 items-center md:mr-4" to="/">
                            <img
                                className="h-20 w-auto sm:h-24 md:h-30"
                                src={logo}
                                alt="Eva Frankovic"
                            />
                        </NavLink>
                        <div className="md:ml-auto">
                            <div className="flex flex-col items-center gap-3 md:flex-row md:gap-5 md:pt-6">
                                <NavLink
                                    to="/"
                                    className={linkClass}
                                >
                                    Home
                                </NavLink>
                                <NavLink
                                    to="/about"
                                    className={linkClass}
                                >
                                    About
                                </NavLink>
                                <NavLink
                                    to="/projects"
                                    className={linkClass}
                                >
                                    Projects
                                </NavLink>
                                <a
                                    href="src/assets/Resume/CV.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='uppercase'
                                >
                                    Resume
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/evafrankovic/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center justify-center rounded-full bg-[var(--olive-dark)] px-5 py-2 text-center uppercase !text-white transition-colors duration-300 hover:bg-[var(--olive-light)]"
                                >
                                    Let's Connect!
                                </a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
