import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
import Icons from "./Icons";
import resume from '../assets/Resume/CV.pdf'

function Footer() {
  const linkClass = "px-4 py-4 uppercase";
  return (
    <footer className="bg-[var(--cream)]">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-2 md:grid-cols-3 items-center px-8 py-8">
        <div className="flex justify-start">
          <NavLink to="/" className="flex-shrink-0">
            <img className="h-20 w-auto" src={logo} alt="Eva Frankovic" />
          </NavLink>
        </div>

        <div className="hidden md:flex items-center justify-center gap-8 pt-6 text-[var(--text)]">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>
          <NavLink to="/projects" className={linkClass}>
            Projects
          </NavLink>
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="uppercase px-3 py-2"
          >
            Resume
          </a>
        </div>

        <Icons className="flex justify-end" />
      </div>
      <div className="flex items-center justify-center">
        <span> Eva Frankovic &copy; {new Date().getFullYear()} </span>
      </div>
    </footer>
  );
}

export default Footer;
