import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


const Icons = () => {
    return (
        <div className="flex justify-end gap-5 text-3xl text-[var(--text)]">
            <a
                href="https://github.com/evafrank7"
                target="_blank"
                rel="noreferrer"
                className="hover:opacity-70 transition"
            >
                <FaGithub />
            </a>
            <a
                href="https://www.linkedin.com/in/evafrankovic/"
                target="_blank"
                rel="noreferrer"
                className="hover:opacity-70 transition"
            >
                <FaLinkedin />
            </a>
            <a
                href="mailto:emfrankovic7@gmail.com"
                aria-label="Email Eva"
                className="hover:opacity-70 transition"
            >
                <MdEmail />
            </a>
        </div>
    )
}

export default Icons
