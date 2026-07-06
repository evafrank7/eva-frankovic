import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import { FaGithub } from "react-icons/fa";

const ProjectDetails = ({ project }) => {
  if (!project) {
    return (
      <div>
        <p>Loading project...</p>
      </div>
    )
  }
  const projectImage = project.images?.[0];

  return (
    <div className="bg-[var(--background)] py-15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Link
            to={'/projects'}
            className="uppercase"
          >
            <FaArrowLeft className="inline" /> Back to Projects
          </Link>
          <div className="bg-[var(--background)] py-20 mb-4">
            <div className="md:text-left">
              <div>
                <h1 className="text-3xl sm:text-5xl md:text-6xl">
                  {project.title}
                </h1>
                <p className="my-4 text-xl text-[var(--text)]">
                  {project.description}
                </p>
                <div className="flex flex-wrap justify-start gap-2 py-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-[var(--olive)] !text-[var(--cream)] px-3 py-1 rounded-lg text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className='mt-6 flex items-center gap-6'>
                  <Link
                    className="bg-[var(--olive-dark)] !text-white inline-flex items-center justify-center px-5 py-2 rounded-full hover:bg-[var(--olive-light)] transition-colors duration-300 uppercase"
                    to={project.live}
                  >
                    View Live Project
                  </Link>
                  <Link
                    to={project.link}
                    className="uppercase underline underline-offset-4"
                  >
                    View on GitHub <FaGithub className='text-2xl inline' />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {projectImage && (
          <div className="flex items-center md:justify-end">
            <img
              className="w-full max-w-md rounded-[25px] object-cover"
              src={projectImage}
              alt={project.title}
            />
          </div>
        )}
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-8">
        <h2 className="uppercase font-bold pb-3"> Project Overview </h2>
        <p> {project.overview} </p>
      </div>
    </div>
  )
}

export default ProjectDetails
