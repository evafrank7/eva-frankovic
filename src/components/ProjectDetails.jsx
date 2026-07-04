import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'

const ProjectDetails = ({ project }) => {

  if (!project) {
    return (
      <div>
        <p>Loading project...</p>
      </div>
    )
  }

  return (
    <div>
      <Link
        to={'/projects'}
        className="uppercase underline underline-offset-4"
      >
        <FaArrowLeft className="inline" /> Back to Projects 
      </Link>
      <h1> {project.title} </h1>
    </div>
  )
}

export default ProjectDetails
