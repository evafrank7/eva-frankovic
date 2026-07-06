import React, { useEffect, useState } from 'react'
import Soccer from '../assets/images/soccer.jpeg'
import Hero from '../components/Hero'
import Projects from '../components/Projects'

const ProjectsPage = () => {

  return (
    <>
      <Hero
        title='Some of My Projects'
        subtitle=''
        blurb='A collection of personal and professional projects where I solve problems, and learn about new technologies!'
        src={Soccer}
        showButton={false}
      />
      <Projects /> 
    </>
  )
}

export default ProjectsPage
