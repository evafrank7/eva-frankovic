import React from 'react'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import FeaturedProject from '../components/FeaturedProject'
import AboutMe from '../components/AboutMe'
import Filler from '../components/Filler'



const HomePage = () => {
  return (
    <>
      <Hero />
      <section className="content">
        <FeaturedProject />
        <Skills />
      </section>
      <section className='extra'>
        <AboutMe />
        <Filler />
      </section>
    </>
  )
}

export default HomePage
