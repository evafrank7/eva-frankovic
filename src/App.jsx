import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import FeaturedProject from './components/FeaturedProject'
import AboutMe from './components/AboutMe'
import Filler from './components/Filler'
import Footer from './components/Footer'


const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <section className="content">
        <FeaturedProject />
        <Skills />
      </section>
      <section className='extra'>
        <AboutMe />
        <Filler />
      </section>
      <Footer />
    </>
  )
}

export default App
