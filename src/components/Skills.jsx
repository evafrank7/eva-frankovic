import React from 'react'
import { FaGithub, FaReact, FaPython } from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiRubyonrails,
} from "react-icons/si";

const skills = [
  { name: "React", icon: FaReact },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Python", icon: FaPython },
  { name: "GitHub", icon: FaGithub },
  { name: "Ruby on Rails", icon: SiRubyonrails },
];

const Skills = () => {
  return (
    <div className="bg-[var(--cream)] rounded-[25px] w-200 py-10 px-6 mb-4">
      <h3 className='uppercase'> Skills </h3>
      <div className="mt-6 flex flex-col gap-1 text-[var(--text)]">
        {skills.map(({ name, icon: Icon }) => (
          <div key={name} className="flex items-center gap-3 text-xl">
            <Icon className="text-xl" />
            <span className='text-sm'>{name}</span>
          </div>
        ))}
      </div>


    </div>
  )
}

export default Skills
