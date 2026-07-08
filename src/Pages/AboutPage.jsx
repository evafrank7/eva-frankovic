import React from 'react'
import Hero from '../components/Hero'
import AboutMore from '../components/AboutMore'
import Paris from '../assets/images/paris.JPG'

const AboutPage = () => {
  return (
    <>
      <Hero
        title="Eva Frankovic"
        subtitle='Front End Developer'
        blurb={
          <div className="space-y-4">
            <p>
              I’m a frontend developer who enjoys turning complex problems into simple,
              intuitive experiences.
            </p>
        
            <p>
              I graduated from Bucknell University in 2024, where I was also a Division I
              soccer player. My background as an athlete shaped a lot of how I approach
              my work today. I enjoy collaborating with others, tackling challenging
              problems, and constantly finding ways to improve.
            </p>
        
            <p>
              Currently, I work on software that supports researchers using national
              computing resources. My work spans frontend development, user experience,
              and backend systems, with a particular focus on making complicated
              processes easier for people to navigate.
            </p>
        
            <p>
              Outside of coding, you can usually find me traveling, spending time
              with my dogs, working on one of my many side projects, or hanging out
              with friends and family.
            </p>
          </div>
        }
        src={Paris}
        showButton={true}
        showIcons={false}
      />
      <AboutMore /> 
    </>
  )
}

export default AboutPage
