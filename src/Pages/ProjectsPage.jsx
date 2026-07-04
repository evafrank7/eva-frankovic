import React, { useEffect, useState } from 'react'
import ranger from '../assets/images/ranger.jpeg'
import Hero from '../components/Hero'
import Projects from '../components/Projects'

const ProjectsPage = () => {

  return (
    <>
      <Hero
        title='Some of my Projects'
        subtitle=''
        blurb='A collection of personal and professional projects where I solve problems, and learn about new technologies!'
        src={ranger}
        showButton={false}
      />
      <Projects /> 
    </>
  )
}

export default ProjectsPage
