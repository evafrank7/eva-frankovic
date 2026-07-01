import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import FeaturedProject from './components/FeaturedProject'


const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <section className="content">
        <FeaturedProject />
        <Skills />
      </section>
    </>
  )
}

export default App
