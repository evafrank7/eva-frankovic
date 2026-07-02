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
                <div className="flex h-32 items-center justify-between">
                    <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                        <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
                            <img
                                className="h-30 w-auto"
                                src={logo}
                                alt="Eva Frankovic"
                            />
                        </NavLink>
                        <div className="md:ml-auto">
                            <div className="flex items-center pt-6 gap-5">
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
                                <NavLink
                                    to="/resume"
                                    className={linkClass}
                                >
                                    Resume
                                </NavLink>

                                <NavLink
                                    to="/"
                                    className="bg-[var(--olive-dark)] !text-white inline-flex items-center justify-center px-5 py-2 rounded-full hover:bg-[var(--olive-light)] transition-colors duration-300 uppercase"
                                >
                                    Let's Connect!
                                </NavLink>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
